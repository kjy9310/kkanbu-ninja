"use client";
import React , { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { CLASS, POEHOST} from './constants'

const putUserInfo = async (objectWithData:any)=>{
    const res = await fetch('/api/user_info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectWithData),
      })
      if (!res.ok) {
        console.log('에러낫다! 스샷찍어주실?')
        console.log(res)
        return ''
      }
    return await res.json()
}

async function getUserInfo(userId:string) {
    const res = await fetch(`/api/user_info?user_id=${userId}`,{ next: { revalidate: 0 } });
    
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }
  
    return res.json();
  }

const Stats = ({pobInfo}:any) => {
    const {
        LifeRecoverable, Life, LifeUnreserved,
        EnergyShield,
        Mana, ManaUnreserved
    } = pobInfo
    const reservedLife = Life-LifeUnreserved

    const lifeRed = Math.floor(LifeRecoverable/Life*100)
    const lifeGray = Math.floor(reservedLife/Life*100)
    const lifeBlack = 100-lifeRed-lifeGray

    const reservedMana = Mana - ManaUnreserved
    const manaGray = Math.floor(reservedMana/Mana*100)
    const manaBlue = 100-manaGray

    return <div style={{display:'flex', justifyContent: 'space-between'}}>
    <div style={{textAlign:'left', width:120}}>
        <span style={{color:'#d11111'}}>{`${LifeRecoverable}/${Life}`}</span>
        {reservedLife>0&&<span style={{color:'gray'}}>({reservedLife})</span>}
        <div style={{height:5, width:100, display:'grid',gridTemplateColumns:`${lifeRed}px ${lifeBlack}px ${lifeGray}px`}}>
            <div style={{backgroundColor:'#d11111'}}></div>
            <div style={{backgroundColor:'black'}}></div>
            <div style={{backgroundColor:'gray'}}></div>
        </div>
    </div>

    <div style={{textAlign:'right',width:40}}>
        <span style={{color:'cyan'}}>{EnergyShield}</span>
    </div>

    <div style={{textAlign:'left', width:120}}>
        <span style={{color:'#6868ff'}}>{`${Mana}`}</span>
        {reservedMana>0&&<span style={{color:'gray'}}>({reservedMana})</span>}
        <div style={{height:5, width:100, display:'grid',gridTemplateColumns:`${manaBlue}px ${manaGray}px`}}>
            <div style={{backgroundColor:'#6868ff'}}></div>
            <div style={{backgroundColor:'gray'}}></div>
        </div>
    </div>
    </div>
}

export default function Row(props:any) {
    const {row, index, session, openAccordId, setOpenAccordId} = props

    const [expanded, setExpanded] = useState(false)
    const [userInfo, setUserInfo] = useState<any>([])

    const fetchUserInfo = async (userId:string) =>{
        const res = await getUserInfo(userId)
        setUserInfo(res)
    }
    
    useEffect(()=>{
        setUserInfo({})
        setExpanded(row.id===openAccordId)
    },[row, openAccordId])
    
    // const poeAccount = session?.kkanbu?.account
    // const deathCamInfo = userInfo.length>0&& userInfo?.find((info:any)=>info.type==="deathCam")
    // const bestInfo = userInfo.length>0&& userInfo?.find((info:any)=>info.type==="best")
    // const deathCam = row.info?.find((info:any)=>info.type==="deathCam")
    // const bestCam = row.info?.find((info:any)=>info.type==="best")
  return (<Accordion key={row._id}
    style={{backgroundColor:index%2===0?'#0a0a0acc':'#141414cc', cursor:'pointer'}}
    expanded={expanded}
    onClick={
        (e)=>{
            e.stopPropagation()
            if (!expanded){
                fetchUserInfo(row.id)
                setOpenAccordId(row.id)
            }else {
                setOpenAccordId('')
            }
        }
    }
  >
    <div style={{color:'white', display:'grid', gridTemplateColumns:'50px 74px 25% 310px 120px 200px auto', margin:2}}>
        <div style={{padding:4}}>
            <span>{index+1}</span>
        </div>
        <div style={{backgroundColor:'#ffffff4d', padding: 4, opacity:row.dead?0.4:1}}>
            <span>{row.level} </span>
            <img style={{border: '1px solid black', width:32, height:25, display:'inline-block'}} src={CLASS[row.class]}/>
        </div>
        <div style={{
            padding:4,
            textAlign: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            opacity:row.dead?0.4:1
        }}>
            <span>{row.name}</span>
        </div>
        <div>
            {row.pob&&row.pob.Life!=null&&<Stats pobInfo={row.pob}/>}
        </div>
        <div style={{padding:4,textAlign: 'left'}}>
            {row.pob&&row.pob.Life!=null&&<Tooltip title={<div style={{whiteSpace: 'pre-line'}}>
                {`Res / Max Hit\n`}
                <span style={{color:'#b9b9b9'}}>{`${row.pob.PhysicalDamageReduction}% / ${row.pob.PhysicalMaximumHitTaken}\n`}</span>
                <span style={{color:'red'}}>{`${row.pob.FireResist}% / ${row.pob.FireMaximumHitTaken}\n`}</span>
                <span style={{color:'cyan'}}>{`${row.pob.ColdResist}% / ${row.pob.ColdMaximumHitTaken}\n`}</span>
                <span style={{color:'yellow'}}>{`${row.pob.LightningResist}% / ${row.pob.LightningMaximumHitTaken}\n`}</span>
                <span style={{color:'#c35dff'}}>{`${row.pob.ChaosResist}% / ${row.pob.ChaosMaximumHitTaken}\n`}</span>
            </div>}>
                <span>
                {"eHP: "+(isNaN(parseInt(row.pob.TotalEHP))?"ㅁ?ㄹ":parseInt(row.pob.TotalEHP))}
                </span>
            </Tooltip>}
        </div>
        <div style={{padding:4,textAlign: 'left'}}>
            <span>
            {row.pob&&row.pob.Life!=null&&"DPS: "+(isNaN(parseInt(row.pob.CombinedDPS))||parseInt(row.pob.CombinedDPS)===0?"ㅁ?ㄹ":parseInt(row.pob.CombinedDPS))}
            </span>
        </div>
        <div>
            <span style={{display:'flex', height:36, overflow:'hidden'}}>
                {row.items?.mainSkills?.map((skillgem:any)=>{
                return <Tooltip key={skillgem.id} title={skillgem.baseType}>
                <img src={skillgem.icon}/>
                </Tooltip>
                })}
            </span>
        </div>
    </div>
    <AccordionDetails>
        <div style={{color:'white', display:'flex', justifyContent: 'space-evenly'}}>
            <span>{`전체 랭킹: ${row.rank}`}</span>
            {row.ancestor&&<span>{`조상님 랭크: ${row.ancestor}`}</span>}
            {row.depth&&<span>{`팡산: ${row.depth.default} / solo:${row.depth.solo}`}</span>}

            <span >{`챌: ${row.challenges?.completed} `}</span>
            <span>{`계정: ${row.account}`}</span>
            <span >{`Exp.${row.experience} `}</span>
            <div>
                <a style={{    backgroundColor: '#133d62', textAlign:'center',
                display: 'inline-block', padding: '2px 10px', borderRadius: 5}} 
                target='_blank' href={`${POEHOST}account/view-profile/${encodeURIComponent(row.account)}/characters?characterName=${encodeURIComponent(row.name)}`}>
                    POE
                </a>
            </div>
        </div>
        {userInfo.pob&&userInfo.pob.POB!=null&&<div style={{color:'white', display:'grid', gridTemplateColumns:'120px 120px auto 140px 100px'}}>
            <div style={{ display:'flex', flexDirection:'column', textAlign:'left'}}>
                <span>회피: {userInfo.pob.Evasion}</span>
                <span>방어: {userInfo.pob.Armour}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', textAlign:'left'}}>
                <span>블럭: {userInfo.pob.BlockChance}%</span>
                <span>주문블럭: {userInfo.pob.SpellBlockChance}%</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', textAlign:'left'}}>
                <div style={{display:'flex', justifyContent: 'space-evenly' }}>저항: 
                    <span style={{color:'#b9b9b9'}}>{`${row.pob.PhysicalDamageReduction}% `}</span>
                    <span style={{color:'red'}}>{`${row.pob.FireResist}% `}</span>
                    <span style={{color:'cyan'}}>{`${row.pob.ColdResist}% `}</span>
                    <span style={{color:'yellow'}}>{`${row.pob.LightningResist}% `}</span>
                    <span style={{color:'#c35dff'}}>{`${row.pob.ChaosResist}%`}</span>
                </div>
                <div style={{display:'flex', justifyContent: 'space-evenly' }}>한방컷: 
                <span style={{color:'#b9b9b9'}}>{`${row.pob.PhysicalMaximumHitTaken} `}</span>
                    <span style={{color:'red'}}>{`${row.pob.FireMaximumHitTaken} `}</span>
                    <span style={{color:'cyan'}}>{`${row.pob.ColdMaximumHitTaken} `}</span>
                    <span style={{color:'yellow'}}>{`${row.pob.LightningMaximumHitTaken} `}</span>
                    <span style={{color:'#c35dff'}}>{`${row.pob.ChaosMaximumHitTaken}`}</span>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', textAlign:'left'}}>
                <span>주문억제: {userInfo.pob.EffectiveSpellSuppressionChance}%</span>
                <span>이속: {userInfo.pob.EffectiveMovementSpeedMod*100}%</span>
            </div>
            <div style={{padding:8}}>
                <a
                style={{    backgroundColor: '#4c1362', textAlign:'center', cursor:'pointer',
                display: 'inline-block', padding: '2px 10px', borderRadius: 5}}
                onClick={()=>{
                const text = userInfo.pob.POB
                navigator.clipboard.writeText(text).then(function() {
                    alert('복사완료');
                }, function(err) {
                    alert('복사가 안됬어요.ㅠㅠ : '+text)
                });
                }}
                >POB</a>
            </div>
            </div>}
    </AccordionDetails>
    </Accordion>
)}