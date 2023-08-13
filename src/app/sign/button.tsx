"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignButton() {
    const { data: session } = useSession()
    if (session) {
      return (
        <div style={{
          position:'absolute',
          left: 0,
          top: 0,
          zIndex: 1000,
          backgroundColor:'#ffffff4d',
          borderRadius: 10,
          padding: 5
        }}>
          {(session as any).kkanbu?.twitch}:{(session as any).kkanbu?.account} <br />
          {(session as any).kkanbu?.admin&&
            <a style={{backgroundColor:'#fb4ab0',color:'white', margin:5, padding:5, borderRadius:5}} href="/kkanbu">깐부관리</a>
          }
          <button style={{backgroundColor:'#fb4ab0',color:'white', margin:5, padding:5, borderRadius:5}} onClick={() => signOut()}>로갓</button>
        </div>
      )
    }
    return (
      <div style={{
        position:'absolute',
        left: 0,
        top: 0,
        zIndex: 1000,
        backgroundColor:'#ffffff4d',
          borderRadius: 10,
          padding: 5
      }}>
        <button style={{backgroundColor:'#fb4ab0',color:'white', margin:5, padding:5, borderRadius:5}} onClick={() => signIn()}>로긴</button>
      </div>
    )
  }
  