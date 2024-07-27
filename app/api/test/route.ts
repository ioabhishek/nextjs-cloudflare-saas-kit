import { db } from "@/db/db"
import { roadmap_tasks } from "@/db/schema"

export const runtime = "edge"

export async function GET() {
  const result = await db.select().from(roadmap_tasks)

  return new Response(JSON.stringify(result))
}
