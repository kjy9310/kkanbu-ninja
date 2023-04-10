import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET(request: Request) {
    const client = new MongoClient(process.env.mongodb||'no db env');
    // Database Name
    const dbName = 'MakkaKim-M0';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('kkanbu_users');
    const userData = await collection.find().sort( { experience: -1 } ).toArray()
  return NextResponse.json({ userData })
}

//https://www.pathofexile.com/api/ladders?offset=0&limit=200&id=KKANBU+(PL38521)&type=league
