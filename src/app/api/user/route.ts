import { NextResponse } from 'next/server';
import getUsers from './controller'

export const revalidate = 30

export async function GET(request: Request, param:any) {
  const userData = await getUsers()
  
  return NextResponse.json(userData)
}
