import { MongoClient } from 'mongodb';
const getUsers = async () =>{
    console.log('controller called')
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

    ]).sort( { experience: -1 } ).toArray()
    return userData
}
export default getUsers