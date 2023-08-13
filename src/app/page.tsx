import React from 'react';
import RankList from './rank/list'

async function getUserData() {
  try{
    const res = await fetch(`${process.env.host}/api/user`,{ next: { revalidate: 0 } }); //10 min cache
  
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }

    return res.json();
  } catch(e){
    console.log('error:', e)
    return []
  }
}

export default async function Page() {
    const data = await getUserData()
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <RankList userData={data||[]}/>
  </main>
}