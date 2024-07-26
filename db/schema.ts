import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const roadmap_tasks = sqliteTable("roadmap_tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title"),
  description: text("description"),
})
