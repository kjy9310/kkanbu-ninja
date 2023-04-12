import React from 'react';
import RequestList from './list'

async function getUserData() {
  const res = await fetch(`${process.env.host}/api/user`,{ next: { revalidate: 10 } }); //10 min cache
  
  if (!res.ok) {
    console.log('에러낫다! 스샷찍어주실?')
    console.log(res)
    return []
  }

  return res.json();
}

async function getRequestData() {
  const res = await fetch(`${process.env.host}/api/request`,{ next: { revalidate: 1 } }); //1 min cache
  
  if (!res.ok) {
    console.log('에러낫다! 스샷찍어주실?')
    console.log(res)
    return []
  }

  return res.json();
}

export default async function Page() {
    const userData = await getUserData()
    const requestData = await getRequestData()
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RequestList userData={userData||[]} requestData={requestData||[]}/>
  </main>
}