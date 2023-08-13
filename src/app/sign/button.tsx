"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignButton() {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          관리모드 {session.user?.name} <br />
          <button style={{backgroundColor:'#fb4ab0',color:'white', margin:5, padding:5, borderRadius:5}} onClick={() => signOut()}>로갓</button>
        </>
      )
    }
    return (
      <>
        <button style={{backgroundColor:'#fb4ab0',color:'white', margin:5, padding:5, borderRadius:5}} onClick={() => signIn()}>로긴</button>
      </>
    )
  }
  