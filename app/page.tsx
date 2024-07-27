"use client"

import { signIn, signOut } from "next-auth/react"

export const runtime = "edge"

export default function Home() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Google Login</button>
      <button onClick={() => signOut()}>Google Logout</button>
    </div>
  )
}
