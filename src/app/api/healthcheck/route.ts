import { NextResponse } from 'next/server';

export const revalidate = 0

export async function GET(request: Request, param:any) {
  return NextResponse.json({alive:true})
}
