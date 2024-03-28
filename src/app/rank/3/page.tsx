import React from 'react';
import RankList from '../list'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../api/auth/[...nextauth]/route"

async function getUserData1(leagueString?:string) {
  try{
    const res = await fetch(`${process.env.host}/api/user?league=${leagueString}`,{ next: { revalidate: 0 } }); //10 min cache
  
    if (!res.ok) {
      return []
    }

    return res.json();
  } catch(e){
    console.log('rank 1 pager getUserData error:', e)
    return []
  }
}

export default async function Page() {
    const data = await getUserData1('KKANBUAffliction (PL43448)')
    const session = await getServerSession(authOptions)
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <RankList userData={data||[]}  session={session}/>
  </main>
}