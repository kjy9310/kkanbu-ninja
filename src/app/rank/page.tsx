import React from 'react';
import RankList from './list'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getUserData() {
  try{
    const res = await fetch(`${process.env.host}/api/user`,{ next: { revalidate: 1 } }); //10 min cache
  
    if (!res.ok) {
      return []
    }

    return res.json();
  } catch(e){
    console.log('rank page getUserData error:', e)
    return []
  }
}

export default async function Page() {
    const data = await getUserData()
    const session = await getServerSession(authOptions)
    return <main className="flex min-h-screen flex-col items-center p-24">
    <span>6회 KKANBU SC Mercenaries (PL70880)</span>
    <RankList userData={data||[]} currentLeague={true} session={session}/>
  </main>
}