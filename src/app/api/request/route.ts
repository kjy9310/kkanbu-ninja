import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { parse } from 'querystring';

export const revalidate = 1

export async function GET(request: Request, param:any) {
    const client = new MongoClient(process.env.mongodb||'no db env');
    const dbName = 'MakkaKim-M0';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('kkanbu_requests');
    const requestList = await collection.find({},{projection:{password:0}}).sort({createdAt:-1}).toArray()
    client.close()
  return NextResponse.json(requestList)
}

export async function POST(request: NextRequest) {
    const requestData = await request.json()
    const client = new MongoClient(process.env.mongodb||'no db env');
    const dbName = 'MakkaKim-M0';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('kkanbu_requests');
    
    const obj = await collection.insertOne({...requestData, createdAt:new Date()})
    client.close()
    return NextResponse.json(obj.insertedId)
}

export async function DELETE(request: NextRequest, param:any) {
    const query = request.url.split('?')[1]
    if (query){
        const params = parse(query)
        
        const client = new MongoClient(process.env.mongodb||'no db env');
        const dbName = 'MakkaKim-M0';
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('kkanbu_requests');
        const {id, password} = params
        const res = await collection.deleteOne({_id:new ObjectId(id as string), password})
        
        client.close()
        if (res.deletedCount===1){
            return NextResponse.json('success')
        }
    }
    return NextResponse.json('failed')
}