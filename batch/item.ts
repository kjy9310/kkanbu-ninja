
const POEHOST = 'https://poe.game.daum.net/'
// const POEHOST = 'https://www.pathofexile.com/'

const fetchingItemData = async () => {
    const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const updateHourLimit = 12*60 //12hour

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

  
  const userList = await user.find().toArray()

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

        if(!itemDatum?.isDead && isOverTheLimit){
            let items = []
            try{
                const res = await fetch(`${POEHOST}character-window/get-items?accountName=${encodeURIComponent(user.account)}&character=${encodeURIComponent(user.name)}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                });
            if(res.status===200){
                const itemData = await res.json()
                items = itemData?.items || []
                // const oneunique = items.find((item:any)=>{item.name==='Elevore'})
                // console.log(oneunique)
                // console.log(oneunique)
                // process.exit(0)
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
            const allUniques = getUniqueFromItems(items)
            const {has5Link, has6Link, mainSkills} = getLinkedItemFromItems(items)
            
            const charItems = {
                id: user.id,
                allGems,
                allUniques,
                has5Link,
                has6Link,
                mainSkills,
                createdAt: new Date(),
                isDead:user.dead
            }
            
            item.deleteOne({id:user.id})
            item.insertOne(charItems)
            console.log('updated : ',user.name)
        }
    
    
    await new Promise(r=>setTimeout(()=>r(null),400))
  }
  client.close()
  console.log('done!')
  const delta = new Date().getTime() - startTime
  console.log('delta time : ', delta)
  process.exit(0)
}

fetchingItemData()

const getGemFromItems = (items:any) =>{
    // frameType:4
    return items.reduce((acc: any, item:any)=>{
        const gemList = item.socketedItems?.filter((gem:any)=>gem.frameType===4).map((gem:any)=>gem.baseType) || []
        return [...acc,...gemList]
      },[])
}

const getUniqueFromItems = (items:any) =>{
    // frameType: 3
    return items.reduce((acc: any, item:any)=>{
        if(item.frameType===3){
            return [...acc, item.name]
        }
        return acc
      },[])
}

const getLinkedItemFromItems = (items:any):{has5Link:boolean, has6Link:boolean,mainSkills:any[]} => {
    //sockets group 0 or 1
    return items.reduce((acc: {has5Link:boolean, has6Link:boolean, mainSkills:any[]}, item:any)=>{
        const is56Link = item.sockets?.reduce(
            (acc:{group0Count:number; group1Count:number}, socket:{group:number; attr:string, sColour:string})=>{
                if (socket.group===0){
                    acc.group0Count+=1
                } else if (socket.group===1){
                    acc.group1Count+=1
                }
                return acc
            },{group0Count:0, group1Count:0})||{}
        const has5Link = (is56Link.group0Count===5||is56Link.group1Count===5)
        const has6Link = (is56Link.group0Count===6)
        if (is56Link.group0Count===5){
            acc.mainSkills = [...acc.mainSkills,...item.socketedItems?.filter((gem:any)=>gem.frameType===4 && gem.support===false && gem.socket<5)]
        } else if (is56Link.group1Count===5){
            acc.mainSkills = [...acc.mainSkills,...item.socketedItems?.filter((gem:any)=>gem.frameType===4 && gem.support===false && gem.socket>0)]
        } else if (is56Link.group0Count===6){
            acc.mainSkills = [...acc.mainSkills, ...item.socketedItems?.filter((gem:any)=>gem.frameType===4 && gem.support===false)]
        }
        return {
            has5Link: acc.has5Link|| has5Link,
            has6Link: acc.has6Link|| has6Link,
            mainSkills: acc.mainSkills
        }
      },{has5Link:false, has6Link:false, mainSkills:[]})
}