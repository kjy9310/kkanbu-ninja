import { NextResponse } from 'next/server';
import getUsers from './controller'

export const revalidate = 0

export async function GET(request: Request, param:{league:string}) {
  
  const url = new URL(request.url)
  
  const userData = await getUsers(url.searchParams.get('league'))
  
  return NextResponse.json(userData)
}
