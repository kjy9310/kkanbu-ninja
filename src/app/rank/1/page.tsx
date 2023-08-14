import React from 'react';
import RankList from '../list'

async function getUserData(leagueString?:string) {
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
    const data = await getUserData('KKANBU (PL38521)')
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <RankList userData={data||[]}/>
  </main>
}