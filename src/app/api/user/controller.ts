import { MongoClient } from 'mongodb';
const getUsers = async (leagueStr:string|null) =>{
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
                        items: {$arrayElemAt: ['$item', 0 ]}
                    }
                }

        ]).sort( { rank: 1 } ).toArray()
        await client.close()
        console.log('userData', userData.length)
        return userData
    }catch(e){
        console.log('db error', e)
        return []
    }
}
export default getUsers