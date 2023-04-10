const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const LEAGUE_STRING='KKANBU (PL38521)'
console.log('process.env.mongodb',process.env.mongodb)
////////////gem//////////
    // verified: false,
    // w: 1,
    // h: 1,
    // icon: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0Zhc3RlckF0dGFja3MiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c3e1544a95/FasterAttacks.png',
    // support: true,
    // league: 'KKANBU (PL38521)',
    // id: '9d4e915a2090922dbc67fc785dc65ac473559e4686b11d3585a32a5087958c30',
    // name: '',
    // typeLine: 'Faster Attacks Support',
    // baseType: 'Faster Attacks Support',
    // identified: true,
    // ilvl: 0,
    // properties: [ [Object], [Object], [Object] ],
    // requirements: [ [Object], [Object] ],
    // secDescrText: 'Supports attack skills.',
    // explicitMods: [ 'Supported Skills have 44% increased Attack Speed' ],
    // descrText: 'This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.',
    // frameType: 4,
    // socket: 0,
    // colour: 'D'

type rankObj ={
  rank: number;
  dead: boolean;
  public: boolean
  character: charInfo
  account: {
    name:string;
    realm: string;
    challenges: Object;
    twitch:Object
  }
}
type charInfo={
  id: string;
  name: string;
  level: number;
  class: string;
  experience: number;
  league?: string;
}

const start = new Date()
console.log(start)
const startTime = start.getTime()


const fetchingData = async () => {
  
  let rankList:rankObj[]=[]
  let maxCount=1
  let offset = 0
  const limit = 200
  while(maxCount > rankList.length){
    const res = await fetch(`https://www.pathofexile.com/api/ladders?offset=${offset}&limit=${limit}&id=${LEAGUE_STRING}&type=league`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json()
    maxCount = data.total
    rankList = [...rankList,...data.entries]
    offset +=limit
  }

  
  let formattedList:any[] = []
  for (let index = 0; index < rankList.length; index++) {
    const ranker = rankList[index];
    const charInfo = ranker.character
    
    const reqData = {
      accountName: ranker.account.name,
      realm: ranker.account.realm
    }
    console.log(`${index}/${rankList.length} - `+'reqData',reqData)
    let items = []
    try{
    const res = await fetch(`https://www.pathofexile.com/character-window/get-items?accountName=${encodeURIComponent(ranker.account.name)}&character=${encodeURIComponent(ranker.character.name)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(res.status===200){
        const itemData = await res.json()
        items = itemData?.items || []
    } else {
        console.log('request failed',res.status)
        if (res.status === 429){
            // 'retry-after' => '461'
            index--
            const retryDelay = res.headers.get('retry-after')
            const state = res.headers.get('x-rate-limit-ip-state')
             
            console.log('retryDelay : ', retryDelay, 'state - ',state )
            await new Promise(r=>setTimeout(()=>r(null),parseInt(retryDelay||'10')*1000))
        } else if (res.status !==404 && res.status !== 403){
            throw res
        }
    }
    }catch(e){
        console.log('error!!!',e)
    }
    
    // const sliced = items.sort((a,b)=>{
    //   const aSocket = a.socketedItems?.length ||0
    //   const bSocket = b.socketedItems?.length ||0
    //   return bSocket-aSocket
    // }).slice(0,3)

    const allGems = items.reduce((acc: any, item:any)=>{
      const gemList = item.socketedItems?.map((gem:any)=>gem.baseType) || []
      return [...acc,...gemList]
    },[])
    console.log(ranker.character.name)
    formattedList.push({
      public: ranker.public,
      rank : ranker.rank,
      dead: ranker.dead,
      level: charInfo.level,
      class: charInfo.class,
      experience: charInfo.experience,
      name: charInfo.name,
      account: ranker.account.name,
      realm: ranker.account.realm,
      challenges: ranker.account.challenges,
      allGems
    })

    await new Promise(r=>setTimeout(()=>r(null),2500))
  }
  // console.log(formattedList.length)
  // console.log('get : ', formattedList)
  // const data = await res.json();
  
  // Connection URL
  const client = new MongoClient(process.env.mongodb||'no db env');
  // Database Name
  const dbName = 'MakkaKim-M0';
  await client.connect();
  
  const db = client.db(dbName);
  const collection = db.collection('kkanbu_users');

  const bulk = collection.initializeUnorderedBulkOp();
  formattedList.forEach((formattedUser)=>{
    bulk.insert(formattedUser)
  })
  collection.deleteMany({})
  bulk.execute();
  console.log('done!')
  const delta = new Date().getTime() - start.getTime()
    console.log('delta time : ', delta)
}
fetchingData()
