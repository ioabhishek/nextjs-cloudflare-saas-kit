import { db } from "@/db/db"
import { roadmap_tasks, users } from "@/db/schema"

export const runtime = "edge"

export async function GET() {
  const result = await db.select().from(users)
  return new Response(JSON.stringify(result))
}
