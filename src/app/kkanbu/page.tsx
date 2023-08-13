import React from 'react';
import KkanbuList from './list'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getKkanbu() {
  try{
    const res = await fetch(`${process.env.host}/api/kkanbu`,{ next: { revalidate: 0 } });
  
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }

    return res.json();
  } catch(e){
    console.log('kkanbu getKkanbu error:', e)
    return []
  }
}

export default async function Page() {
    const kkanbus = await getKkanbu()
    const session = await getServerSession(authOptions)
    return <main className="min-h-screen flex-col items-center justify-between p-24">
      <KkanbuList kkanbus={kkanbus||[]}  session={session}/>
  </main>
}