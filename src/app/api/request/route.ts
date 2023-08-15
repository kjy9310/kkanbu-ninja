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
        const collection = db.collection(`${process.env.collection_prefix}_requests`);
        const requestList = await collection.find({},{projection:{password:0}}).sort({createdAt:-1}).toArray()
        client.close()
        console.log('requestList', requestList.length)
        return NextResponse.json(requestList)
    }catch(e){
        console.log('DB error', e)
        return []
    }
}

export async function POST(request: NextRequest) {
    try{
        const session:any = await getServerSession(authOptions)

        const requestData = await request.json()
        const client = new MongoClient(process.env.mongodb||'no db env');
        const dbName = process.env.db_name;
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(`${process.env.collection_prefix}_requests`);
        
        const obj = await collection.insertOne({
            ...requestData, 
            ...(session?{account:session.kkanbu?.account}:{}),
            createdAt:new Date()
        })
        client.close()
        return NextResponse.json(obj.insertedId)
    }catch(e){
        console.log('DB error', e)
        return NextResponse.json('')
    }
}

export async function DELETE(request: NextRequest, param:any) {
    try{
        const session:any = await getServerSession(authOptions)
        
        const query = request.url.split('?')[1]
        if (query){
            const params = parse(query)
            
            const client = new MongoClient(process.env.mongodb||'no db env');
            const dbName = process.env.db_name;
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection(`${process.env.collection_prefix}_requests`);
            const {id, password} = params
            const res = await collection.deleteOne(
                session?(
                    (session.kkanbu?.admin)?
                        {_id:new ObjectId(id as string)}
                    :{_id:new ObjectId(id as string), account:session.kkanbu?.account}
                ):{_id:new ObjectId(id as string), password}
            )
            client.close()
            if (res.deletedCount===1){
                return NextResponse.json('success')
            }
        }
        return NextResponse.json('failed')
    }catch(e){
        console.log('DB error', e)
        return NextResponse.json('db failed')
    }
}