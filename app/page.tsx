"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const runtime = "edge"

export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>Google Logout</button>
      ) : (
        <button onClick={() => signIn("google")}>Google Login</button>
      )}
    </div>
  )
}
