import { db } from "@/db/db"
import { roadmap_tasks } from "@/db/schema"

export const runtime = "edge"

export async function GET() {
  const result = await db.select().from(roadmap_tasks)
  return new Response(JSON.stringify(result))
}

export async function POST(req: Request) {
  const { title, description } = await req.json()
  const result = await db
    .insert(roadmap_tasks)
    .values({ title, description })
    .returning()

  return new Response(JSON.stringify(result))
}
