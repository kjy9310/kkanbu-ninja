var exec = require('child_process').exec;
var fs = require('fs');

function execute(command:string, callback:Function){
    exec(command, function(error:any, stdout:any, stderr:any){ callback(error, stdout, stderr); });
};
console.log("pob batch starting...")
const ItemJsonPath = "/app/json/item.json"
const TreeJsonPath = "/app/json/tree.json"

const POEHOST_Original = 'https://www.pathofexile.com/'
enum typeJson {
    ITEM="item",
    TREE="tree"
}

const getJson = async (type:typeJson, user:any ) =>{
    try{
        const res = await fetch(`${POEHOST_Original}character-window/${(type===typeJson.ITEM?"get-items":"get-passive-skills")}?accountName=${encodeURIComponent(user.account)}&character=${encodeURIComponent(user.name)}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        });
    if(res.status===200){
        const resData = await res.json()
        return {
            success:true,
            json:resData
        }
    } else {
        console.log('request failed',res.status)
        if (res.status === 429){
            const retryDelay = res.headers.get('retry-after')
            const state = res.headers.get('x-rate-limit-ip-state')
            console.log('retryDelay : ', retryDelay, 'state - ',state )
            return {
                success:false,
                retryDelay
            }
        } else if (res.status ===404 || res.status === 403){
            return {
                success:false,
                deleted:true
            }
        }
    }
    }catch(e){
        console.log('error!!!',e)
        return {
            success:false,
            error:e
        }
    }
}

const batchMain = async () => {
    const { MongoClient } = require('mongodb');
    const dotenv = require('dotenv');
    dotenv.config();

    const updateHourLimit = 3 * 60 // min

    // Connection URL
    const client = new MongoClient(process.env.mongodb||'no db env');
    // Database Name
    const LEAGUE_STRING=process.env.LEAGUE_STRING||'KKANBU (PL38521)'
    const dbName = 'MakkaKim-M0';
    await client.connect();
    const db = client.db(dbName);
    const user = db.collection('kkanbu_users');

        const start = new Date()
        console.log(start)
        const startTime = start.getTime()

    const dateLimit = new Date().setHours(new Date().getHours()-13)
    console.log('dateLimit : ',new Date(dateLimit))
    const userList = await user.find({league:LEAGUE_STRING}).toArray()

    const pob = db.collection('kkanbu_pob');
    for (let index = 0; index < userList.length; index++) {
        const user = userList[index];
        const reqData = {
            accountName: user.account,
            realm: user.realm
        }
        console.log(`${index+1}/${userList.length} - `+'reqData',reqData, user.name)
        const pobDatum = await pob.findOne({id:user.id})
        let isOverTheLimit = false
        if (pobDatum){
            const updated = new Date(pobDatum.createdAt)
            const updatedSince = new Date().getTime() - updated.getTime()
            isOverTheLimit = updatedSince/1000/60 > updateHourLimit
        }else{
            isOverTheLimit = true
        }
        console.log(`pobDatum?.isDead ${!pobDatum?.isDead} / pobDatum?.isDeleted ${!pobDatum?.isDeleted} - isOverTheLimit ${isOverTheLimit}`)
        if(!pobDatum?.isDead && !pobDatum?.isDeleted && isOverTheLimit){
            //reset files
            await new Promise((r)=>fs.writeFile(ItemJsonPath, "", 'utf8', r))
            await new Promise((r)=>fs.writeFile(TreeJsonPath, "", 'utf8',r))

            let Ires = await getJson(typeJson.ITEM,user)
            const { success:successI, retryDelay:retryDelayI } = Ires||{}
            if (!successI){
                if (retryDelayI){
                    if (parseInt(retryDelayI||'')>=600){
                        client.close()
                        console.log('retryDelay over 600 stop for now ', new Date() )
                        const delta = new Date().getTime() - startTime
                        console.log('delta time : ', delta)
                        process.exit(0)
                    }
                    await new Promise(r=>setTimeout(()=>r(null),parseInt(retryDelayI||'10')*1000))
                    Ires = await getJson(typeJson.ITEM,user)
                }
            }
            let { success:successI2, json:jsonI, error:errorI, deleted:deletedI } = Ires||{}
            if(successI2 && jsonI){
                console.log('got item saving file...', JSON.stringify(jsonI).slice(0,100))
                const itemError = await new Promise((r)=>fs.writeFile(ItemJsonPath, JSON.stringify(jsonI), 'utf8', r))
                console.log('itemError', itemError)
                console.log('saved')
            }
            let Tres = await getJson(typeJson.TREE,user)
            const { success:successT, retryDelay:retryDelayT } = Ires||{}
            if (!successT){
                if (retryDelayT){
                    if (parseInt(retryDelayT||'')>=600){
                        client.close()
                        console.log('retryDelay over 600 stop for now ', new Date() )
                        const delta = new Date().getTime() - startTime
                        console.log('delta time : ', delta)
                        process.exit(0)
                    }
                    await new Promise(r=>setTimeout(()=>r(null),parseInt(retryDelayT||'10')*1000))
                    Tres = await getJson(typeJson.TREE,user)
                }
            }
            let { success:successT2, json:jsonT, error:errorT, deleted:deletedT } = Tres||{}
            if(successT2 && jsonT){
                console.log('got Tree saving file...', JSON.stringify(jsonT).slice(0,100))
                const treeError = await new Promise((r)=>fs.writeFile(TreeJsonPath, JSON.stringify(jsonT), 'utf8',r))
                console.log('treeError',treeError)
                console.log('saved')
            }
            console.log('executing')
            await new Promise(r=>{setTimeout(()=>r(null),500)})
            const timeoutCheck = setTimeout(()=>{
                console.log('pob timeout passed')
                process.exit(0)
            },3000)
            const pobResult = await new Promise((r)=>{
                execute("cd /app/PathOfBuilding/src/ && sh kkanbu.sh",(err:any, std:string, stderr:any)=>{
                    console.log("err:",err)
                    console.log(std)
                    console.log(stderr)
                    const line = std.split("\n")
                    const regex = /\[\((.*)\)\]/
                    const filtered = line.reduce((acc:any, oneLine:string, index:number)=>{
                        const matches = oneLine.match(regex)
                        if (matches){
                            if (matches[1]==="POB"){
                                acc.POB=line[index+1]
                            }else{
                                const keyVal = matches[1].split(":")
                                acc[keyVal[0]] = keyVal[1]
                            }
                        }
                        return acc
                    },{})
                    console.log('got user pob stop timeout check')
                    clearTimeout(timeoutCheck)
                    
                    r(filtered)
                })
            })
            await new Promise(r=>{setTimeout(()=>r(null),3500)})
            const {
                LifeUnreserved,
                Life,
                LifeRecoverable,
                ManaUnreserved,
                Mana,
                EnergyShield,
                Evasion,
                Armour,
                BlockChance,
                SpellBlockChance,
                EffectiveSpellSuppressionChance,
                TotalEHP,
                PhysicalDamageReduction,
                FireResist,
                ColdResist,
                LightningResist,
                ChaosResist,
                PhysicalMaximumHitTaken,
                LightningMaximumHitTaken,
                FireMaximumHitTaken,
                ColdMaximumHitTaken,
                ChaosMaximumHitTaken,
                EffectiveMovementSpeedMod,
                CombinedDPS,
                POB
            } = pobResult as any
            console.log("got data : ",{LifeUnreserved,
            Life,
            LifeRecoverable,
            ManaUnreserved,
            Mana,
            EnergyShield,
            Evasion,
            Armour,
            BlockChance,
            SpellBlockChance,
            EffectiveSpellSuppressionChance,
            TotalEHP,
            PhysicalDamageReduction,
            FireResist,
            ColdResist,
            LightningResist,
            ChaosResist,
            PhysicalMaximumHitTaken,
            LightningMaximumHitTaken,
            FireMaximumHitTaken,
            ColdMaximumHitTaken,
            ChaosMaximumHitTaken,
            EffectiveMovementSpeedMod,
            CombinedDPS})
            const newPobDatum={
                id: user.id,
                LifeUnreserved,
                Life,
                LifeRecoverable,
                ManaUnreserved,
                Mana,
                EnergyShield,
                Evasion,
                Armour,
                BlockChance,
                SpellBlockChance,
                EffectiveSpellSuppressionChance,
                TotalEHP,
                PhysicalDamageReduction,
                FireResist,
                ColdResist,
                LightningResist,
                ChaosResist,
                PhysicalMaximumHitTaken,
                LightningMaximumHitTaken,
                FireMaximumHitTaken,
                ColdMaximumHitTaken,
                ChaosMaximumHitTaken,
                EffectiveMovementSpeedMod,
                CombinedDPS,
                POB,
                createdAt: new Date(),
                isDead:user.dead,
                isDeleted:deletedI||deletedT
            }
            // newPobDatum
            pob.deleteOne({id:user.id})
            pob.insertOne(newPobDatum)
        }
    }
    client.close()
    console.log('done!')
    const delta = new Date().getTime() - startTime
    console.log('delta time : ', delta)
    process.exit(0)
}

batchMain()