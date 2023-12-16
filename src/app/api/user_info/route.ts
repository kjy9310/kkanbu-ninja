import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import { parse } from 'querystring';
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from "next-auth/next"

export const revalidate = 1

export async function GET(request: Request, param:any) {
    
    const url = new URL(request.url)
    const userId = url.searchParams.get('user_id')
  
    try{
        const client = new MongoClient(process.env.mongodb||'no db env');
        const dbName = process.env.db_name;
        await client.connect();
        const db = client.db(dbName);
        const userinfoCol = db.collection(`${process.env.collection_prefix}_user_info`);
        const userInfo = await userinfoCol.find({userId:userId}).toArray()

        const pobCol = db.collection(`${process.env.collection_prefix}_pob`);
        const pob = await pobCol.findOne({id:userId})
        
        client.close()
        return NextResponse.json({userInfo,pob})
    }catch(e){
        console.log('DB error', e)
        return []
    }
}

export async function PUT(request: NextRequest) {
    const session:any = await getServerSession(authOptions)
    if (session?.kkanbu?.account){
        try{
            const userInfoData = await request.json()
            const client = new MongoClient(process.env.mongodb||'no db env');
            const dbName = process.env.db_name;
            const db = client.db(dbName);
            
            await client.connect();
            
            const usersCollection = db.collection(`${process.env.collection_prefix}_users`);
            
            const account = session?.kkanbu?.account || ''
            
            const users = await usersCollection.find({account}).toArray()
            
            const matchedId = users.find((user)=>user.id===userInfoData.userId)
            
            if (!matchedId){
                console.log('PUT user info : machedId not exist', matchedId)
                client.close()
                return  new Response("Authentication required", {status: 401})
            }
            const collection = db.collection(`${process.env.collection_prefix}_user_info`);
            const obj = await collection.updateOne(
                {userId: userInfoData.userId},
                {$set:{...userInfoData, updatedAt:new Date()}},
                {upsert:true}
            )
            client.close()
            return NextResponse.json(obj)
        }catch(e){
            console.log('DB error', e)
            return NextResponse.json('')
        }
    }
    console.log('PUT user info : request with no session')
    return  new Response("Authentication required", {status: 401})
}

// export async function DELETE(request: NextRequest, param:any) {
//     try{
//         const session:any = await getServerSession(authOptions)
        
//         const query = request.url.split('?')[1]
//         if (query){
//             const params = parse(query)
            
//             const client = new MongoClient(process.env.mongodb||'no db env');
//             const dbName = process.env.db_name;
//             await client.connect();
//             const db = client.db(dbName);
//             const collection = db.collection(`${process.env.collection_prefix}_requests`);
//             const {id, password} = params
//             const res = await collection.deleteOne(
//                 (session?.kkanbu?.admin)?
//                 {_id:new ObjectId(id as string)}
//                 :{_id:new ObjectId(id as string), password}
//             )
//             client.close()
//             if (res.deletedCount===1){
//                 return NextResponse.json('success')
//             }
//         }
//         return NextResponse.json('failed')
//     }catch(e){
//         console.log('DB error', e)
//         return NextResponse.json('db failed')
//     }
// }