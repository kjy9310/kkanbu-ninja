import React from 'react';
import RankList from './rank/list'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"

async function getUserData() {
  try{
    const res = await fetch(`${process.env.host}/api/user}`,{ next: { revalidate: 0 } }); //10 min cache
    if(!res.ok){
      return []
    }

    return res.json();
  } catch(e){
    console.log('app page getUserData error:', e)
    return []
  }
}

export default async function Page() {
    const data = await getUserData()
    const session = await getServerSession(authOptions)
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <RankList userData={data||[]} session={session}/>
  </main>
}