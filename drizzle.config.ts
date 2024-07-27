import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  out: "./migrations",
  schema: "./db/schema.ts",
  breakpoints: false,
  driver: "d1-http",
  dbCredentials: {
    accountId: "89bab1747c0ff0775d7457b1db2bb51b",
    databaseId: "bd0ee562-d2c7-4445-90b6-2b69d66021c3",
    token: "qHys15_Tcuhr6yQ39GInrj7N8hQ0kp1P3EwCyWG7",
  },
})
