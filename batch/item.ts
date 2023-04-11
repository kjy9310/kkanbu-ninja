


const fetchingItemData = async () => {
    const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const LEAGUE_STRING='KKANBU (PL38521)'

const updateHourLimit =240 //4hour

// Connection URL
const client = new MongoClient(process.env.mongodb||'no db env');
// Database Name
const dbName = 'MakkaKim-M0';
await client.connect();
const db = client.db(dbName);
const user = db.collection('kkanbu_users');

    const start = new Date()
console.log(start)
const startTime = start.getTime()

  
  const userList = await user.find()

  
  const item = db.collection('kkanbu_items');


  for (let index = 0; index < userList.length; index++) {
    const user = userList[index];
    
    const reqData = {
      accountName: user.account,
      realm: user.realm
    }
    console.log(`${index}/${userList.length} - `+'reqData',reqData, user.name)
    
    const itemDatum = await item.findOne({id:user.id})
    
        const updatedSince = itemDatum?new Date().getTime() - new Date(itemDatum.createdAt).getTime():1
        const isOverTheLimit = itemDatum? updatedSince/1000/60 > updateHourLimit : true

        if(isOverTheLimit){
            let items = []
            try{
                const res = await fetch(`https://www.pathofexile.com/character-window/get-items?accountName=${encodeURIComponent(user.account)}&character=${encodeURIComponent(user.name)}`, {
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
            
            // get info
            const allGems = getGemFromItems(items)

            
            const charItems = {
                id: user.id,
                allGems,
                createdAt: new Date()
            }
            item.deleteOne({id:user.id})
            item.insertOne(charItems)
        }
    
    
    await new Promise(r=>setTimeout(()=>r(null),400))
  }
    console.log('done!')
  const delta = new Date().getTime() - startTime
    console.log('delta time : ', delta)
    process.exit(0)
}

fetchingItemData()

const getGemFromItems = (items:any) =>{
    items.reduce((acc: any, item:any)=>{
        const gemList = item.socketedItems?.map((gem:any)=>gem.baseType) || []
        return [...acc,...gemList]
      },[])
}