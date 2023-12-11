import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export const revalidate = 0

export async function GET(request: Request, param:{league:string}) {
  
  const url = new URL(request.url)
  
  const leagueStr = url.searchParams.get('league')
  try{
    const league = leagueStr || process.env.LEAGUE_STRING
    const client = new MongoClient(process.env.mongodb||'no db env');
    // Database Name
    const dbName = process.env.db_name;
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(`${process.env.collection_prefix}_users`);
    const userData = await collection.aggregate([
{
    '$match':{league}
},
{
    '$lookup':{
        from: `${process.env.collection_prefix}_items`,
        localField: 'id',
        foreignField: 'id',
        as: 'item'
    }
},
{
    '$lookup':{
        from: `${process.env.collection_prefix}_user_info`,
        localField: 'id',
        foreignField: 'userId',
        as: 'info'
    }
},{
    '$lookup':{
        from: `${process.env.collection_prefix}_pob`,
        localField: 'id',
        foreignField: 'id',
        as: 'pob'
    }
},{
    $project:{
        rank:'$rank',
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
        items: {$arrayElemAt: ['$item', 0 ]},
        ancestor: '$ancestor',
        depth: '$depth',
        info: '$info',
        life: '$pob.LifeUnreserved',
        energyShield: '$pob.EnergyShield',
        eHp: '$pob.TotalEHP',
        pob: '$pob.POB',
    }
},

      ]).sort( { rank: 1 } ).toArray()
      client.close()
      console.log('userData', userData.length)
      return NextResponse.json(userData)
  }catch(e){
      console.log('db error', e)
      return NextResponse.json([])
  }
  
  
}
