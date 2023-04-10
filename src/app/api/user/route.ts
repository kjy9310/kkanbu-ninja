import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET(request: Request) {
    const client = new MongoClient(process.env.mongodb||'no db env');
    // Database Name
    const dbName = 'MakkaKim-M0';
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('kkanbu_users');
    const userData = await collection.aggregate([
        {
            '$lookup':{
                from: 'kkanbu_items',
                localField: 'id',
                foreignField: 'id',
                as: 'item'
                }
            },{
                $project:{
                    challenges:'$challenges',
                    Object:'$Object',
                    public:'$public',
                    class:'$class',
                    id:'$id',
                    account:'$account',
                    experience:'$experience',
                    level:'$level',
                    name:'$name',
                    realm:'$realm',
                    dead:'$dead',
                    items: {$arrayElemAt: ['$item', 0 ]}
                  }
            }

    ]).sort( { experience: -1 } ).toArray()
    // const userData = await collection.find().sort( { experience: -1 } ).toArray()
  return NextResponse.json({ userData })
}

//https://www.pathofexile.com/api/ladders?offset=0&limit=200&id=KKANBU+(PL38521)&type=league
