import { NextResponse } from 'next/server';
import getUsers from './controller'

export const revalidate = 30

export async function GET(request: Request, param:any) {
    const userData = await getUsers()
    console.log('userData', userData[0])
    
  return NextResponse.json(userData)
}

//https://www.pathofexile.com/api/ladders?offset=0&limit=200&id=KKANBU+(PL38521)&type=league
