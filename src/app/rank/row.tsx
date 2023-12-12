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
    
    const poeAccount = session?.kkanbu?.account
    const deathCamInfo = userInfo.length>0&& userInfo?.find((info:any)=>info.type==="deathCam")
    const bestInfo = userInfo.length>0&& userInfo?.find((info:any)=>info.type==="best")
    const deathCam = row.info?.find((info:any)=>info.type==="deathCam")
    const bestCam = row.info?.find((info:any)=>info.type==="best")
  return (<Accordion key={row._id}
    style={{backgroundColor:index%2===0?'#0a0a0acc':'#141414cc'}}
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
  <AccordionSummary
    expandIcon={<span style={{color:'white'}}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
</svg></span>}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography className="rankRow" style={{ minHeight: 45}}>
      <span>
        <span style={{
          minWidth: 40,
          display: 'inline-block'
        }}>{`${index+1} `}</span>  
        <span style={{
          minWidth: 70,
          textAlign: 'left',
          display: 'inline-block'
        }}>{`Lv.${row.level} `}</span>
        <img style={{border: '1px solid black', width:32, height:25, display:'inline-block'}} src={CLASS[row.class]}/>
        <span style={{color:row.dead?'red':'white'}}>{row.name}</span> {row.account===poeAccount&&' ★ '}
        {deathCam?.url && <Tooltip title={deathCam.updatedAt}><a className='hover-button' style={{height: 20}} href={deathCam.url} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg></a></Tooltip>}
        {bestCam?.url && <Tooltip title={"최대업적"}><a className='hover-button' style={{height: 20}} href={bestCam.url} target='_blank'><svg style={{color:'cyan'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg></a></Tooltip>}
      </span>
      {row.pob&&<span style={{color:'red'}}>피:{((row.pob.LifeRecoverable&&parseInt(row.pob.LifeRecoverable)>0)?row.pob.LifeRecoverable:row.pob.LifeUnreserved)}</span>}
      {row.pob&&<span style={{color:'cyan'}}>에실:{row.pob.EnergyShield}</span>}
      {row.pob&&<span style={{color:'magenta'}}>eHP:{(isNaN(parseInt(row.pob.TotalEHP))?"ㅁ?ㄹ":parseInt(row.pob.TotalEHP))}</span>}
      {row.pob&&<span style={{color:'white'}}>dps:{(isNaN(parseInt(row.pob.CombinedDPS))?"ㅁ?ㄹ":parseInt(row.pob.CombinedDPS))}</span>}
      <span style={{display:'flex'}}>
        {row.items?.mainSkills?.map((skillgem:any)=>{
          return <Tooltip key={skillgem.id} title={skillgem.baseType}>
          <img src={skillgem.icon}/>
        </Tooltip>
        })}
      </span>
    </Typography>
  </AccordionSummary>
  <AccordionDetails>
      <Typography className="rankRow" style={{fontSize:'1rem !important',width:'80%',margin:'0 auto'}}>
        <span>{`전체 랭킹: ${row.rank}`}</span>
        {row.ancestor&&<span>{`조상님 랭크: ${row.ancestor}`}</span>}
        {row.depth&&<span>{`팡산: ${row.depth.default} / solo:${row.depth.solo}`}</span>}
        <span >{`챌: ${row.challenges?.completed} `}</span>
        <span>{`계정: ${row.account}`}</span>
        <span >{`Exp.${row.experience} `}</span>
        <a style={{    backgroundColor: '#133d62', textAlign:'center',
          display: 'inline-block', padding: '2px 10px', borderRadius: 5}} 
          target='_blank' href={`${POEHOST}account/view-profile/${encodeURIComponent(row.account)}/characters?characterName=${encodeURIComponent(row.name)}`}>
            POE
          </a>
        {row.pob&&<a
        style={{    backgroundColor: '#4c1362', textAlign:'center', cursor:'pointer',
        display: 'inline-block', padding: '2px 10px', borderRadius: 5}}
        onClick={()=>{
          const text = row.pob.POB
          navigator.clipboard.writeText(text).then(function() {
            alert('복사완료');
          }, function(err) {
            alert('복사가 안됬어요.ㅠㅠ : '+text)
          });
        }}
        >POB</a>}
      </Typography>
      <div>
        {((row.dead && row.account===poeAccount)||deathCamInfo?.url)&&<Tooltip title={"데스캠"}><span className='hover-button' onClick={(e)=>{
          e.preventDefault()
            if (row.dead && row.account===poeAccount){
                const defaultValue=deathCamInfo?.url||''
                const url = prompt('deathCam URL 적어주세요.', defaultValue)
                if(url){
                    putUserInfo({
                        userId: row.id,
                        url,
                        type:'deathCam'
                    })
                }
            }else{
                window.open(deathCamInfo.url, '_blank');
            }
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        </span></Tooltip>}
        {((row.account===poeAccount)||bestInfo?.url)&&<Tooltip title={"최대업적"}><span className='hover-button' onClick={(e)=>{
          e.preventDefault()
            if (row.account===poeAccount){
                const defaultValue=bestInfo?.url||''
                const url = prompt('최대업적 URL 적어주세요.', defaultValue)
                if(url){
                    putUserInfo({
                        userId: row.id,
                        url,
                        type:'best'
                    })
                }
            }else{
                window.open(bestInfo.url, '_blank');
            }
        }}>
            <svg style={{color:'cyon'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
        </span></Tooltip>}
      </div>
  </AccordionDetails>
</Accordion>
)
}