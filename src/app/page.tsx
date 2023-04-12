import React from 'react';
import RankList from './rank/list'

async function getData() {
  const res = await fetch(`${process.env.host}/api/user`,{ next: { revalidate: 10 } }); //10 min cache

  if (!res.ok) {
    console.log('에러낫다! 스샷찍어주실?')
    console.log(res)
    return []
  }

  return res.json();
}

export default async function Page() {
    const data = await getData()
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <RankList userData={data||[]}/>
  </main>
}