import { db } from "@/db/db"
import { roadmap_tasks } from "@/db/schema"
import { z } from "zod"

export const runtime = "edge"

export async function GET() {
  const result = await db.select().from(roadmap_tasks)
  return new Response(JSON.stringify(result))
}

export async function POST(req: Request) {
  const expectedInput = z.object({
    title: z.string(),
    description: z.string(),
  })

  const jsonRequest = await req.json()
  const validated = expectedInput.safeParse(jsonRequest)

  if (!validated.success) {
    return new Response(
      JSON.stringify({ success: false, error: validated.error }),
      {
        status: 400,
      }
    )
  }

  const result = await db
    .insert(roadmap_tasks)
    .values({
      title: validated?.data?.title,
      description: validated?.data?.description,
    })
    .returning()

  return new Response(JSON.stringify(result))
}
