import { db } from "@/db/db"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { accounts, sessions, users, verificationTokens } from "@/db/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: DrizzleAdapter(db, {
  //   usersTable: users,
  //   accountsTable: accounts,
  //   sessionsTable: sessions,
  //   verificationTokensTable: verificationTokens,
  // }),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_IDa,
      clientSecret: process.env.AUTH_GOOGLE_SECRETa,
    }),
  ],
  debug: true,
})
