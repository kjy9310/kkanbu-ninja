import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { parse } from 'querystring';
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"

export const revalidate = 1

export async function GET(request: Request, param:any) {
    try{
        const client = new MongoClient(process.env.mongodb||'no db env');
        const dbName = process.env.db_name;
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(`${process.env.collection_prefix}`);
        const kkanbus = await collection.find({},{projection:{password:0}}).sort({createdAt:1}).toArray()
        client.close()
        console.log('kkanbus', kkanbus.length)
        return NextResponse.json(kkanbus)
    }catch(e){
        console.log('DB error', e)
        return []
    }
}

export async function POST(request: NextRequest) {
    const session:any = await getServerSession(authOptions)
    if (session?.kkanbu?.admin){
        try{
            const requestData = await request.json()
            const client = new MongoClient(process.env.mongodb||'no db env');
            const dbName = process.env.db_name;
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(`${process.env.collection_prefix}`);
            
            const obj = await collection.insertOne({...requestData, createdAt:new Date()})
            client.close()
            return NextResponse.json(obj.insertedId)
        }catch(e){
            console.log('DB error', e)
            return NextResponse.json('')
        } 
    }
    return  new Response("Authentication required", {status: 401})
}

export async function DELETE(request: NextRequest, param:any) {
    const session:any = await getServerSession(authOptions)
    if (session?.kkanbu?.admin){
        try{
            const query = request.url.split('?')[1]
            if (query){
                const params = parse(query)
                
                const client = new MongoClient(process.env.mongodb||'no db env');
                const dbName = process.env.db_name;
                await client.connect();
                const db = client.db(dbName);
                const collection = db.collection(`${process.env.collection_prefix}`);
                const {id} = params
                const res = await collection.deleteOne(
                    {_id:new ObjectId(id as string)}
                )
                client.close()
                if (res.deletedCount===1){
                    return NextResponse.json('success')
                }
            }
            return  new Response("need data", {status: 400})
        }catch(e){
            console.log('DB error', e)
            return NextResponse.error()
        }
    }
    return  new Response("Authentication required", {status: 401})
}