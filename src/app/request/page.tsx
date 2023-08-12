import React from 'react';
import RequestList from './list'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getUserData() {
  try{
    const res = await fetch(`${process.env.host}/api/user`,{ next: { revalidate: 10 } }); //10 min cache
  
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

async function getRequestData() {
  try{
    const res = await fetch(`${process.env.host}/api/request`,{ next: { revalidate: 1 } }); //1 min cache
    
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
    const userData = await getUserData()
    const requestData = await getRequestData()
    const session = await getServerSession(authOptions)
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RequestList userData={userData||[]} requestData={requestData||[]} session={session}/>
  </main>
}