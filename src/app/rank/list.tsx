"use client";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import React , { useEffect, useState, useRef } from 'react';
import { ButtonGroup , Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Row from './row'
import SignButton from '../sign/button'
import { SessionProvider } from "next-auth/react"
import { CLASS } from './constants'
import { sortAndDeduplicateDiagnostics } from 'typescript';


const theme = createTheme({
  palette: {
    primary: {
      main: '#133d62',//pink[300],
    },
    secondary: {
      // main: purple[500],
      main: '#133d62',
    },
  },
});

function useIsVisible(ref:any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Page(props:any) {
  const limit = 100
  const tick = 10
    const {userData, session} = props
  const [original, setOriginal] = useState<any[]>(userData)
  const [filtered, setFilter] = useState<any[]>(userData)
  const [gemList, setGemList] = useState<any[]>([])
  const [uniqueList, setUniqueList] = useState<any[]>([])
  
  const [filterClass, setClass] = useState<string>('')
  const [filterName, setName] = useState<string>('')
  const [filterLink, setLink] = useState<string>('')
  
  const [filterGem, setGem] = useState<string>('')
  const [filterGemInput, setGemInput] = useState<string>('')
  
  const [filterUnique, setUnique] = useState<string>('')
  const [filterUniqueInput, setUniqueInput] = useState<string>('')

  const [filterDeath, setDeath] = useState<string>('all')

  const [openAccordId, setOpenAccordId] = useState<string>('')

  const [start, setStart] = useState<number>(0);

  const startTag = useRef<HTMLDivElement | null>(null)
  const endTag = useRef<HTMLDivElement | null>(null)
  const isStart = useIsVisible(startTag)
  const isEnd = useIsVisible(endTag)

  
  const [sortString, setSortString] = useState<string>('rank')


const sortSelect = (sortType:string)=>{
  switch(sortType){
    case 'ancestor':
      return (a:any, b:any)=>{
        return b.ancestor-a.ancestor===0?a.rank-b.rank:b.ancestor-a.ancestor
      }
    case 'depth_default':
      return (a:any, b:any)=>{
        return (b.depth?.default||0)-(a.depth?.default||0)===0?a.rank-b.rank:(b.depth?.default||0)-(a.depth?.default||0)
      }
    case 'depth_solo':
      return (a:any, b:any)=>{
        return (b.depth?.solo||0)-(a.depth?.solo||0)===0?a.rank-b.rank:(b.depth?.solo||0)-(a.depth?.solo||0)
      }
    case 'death_cam':
      return (a:any, b:any)=>{
        const bDeathCam = b.info.find((info:any)=>info.type==="deathCam")
        const aDeathCam = a.info.find((info:any)=>info.type==="deathCam")
        const bInfo = (new Date(bDeathCam?.updatedAt).getTime()||0)
        const aInfo = (new Date(aDeathCam?.updatedAt).getTime()||0)
        return bInfo-aInfo===0?a.rank-b.rank:bInfo-aInfo
      }
    case'rank':
    default:
    return (a:any,b:any)=>{
      return a.rank-b.rank
    }
    
  }

}
const handleSort=(e:any)=>{
  const sortString = e.target.value
  setSortString(sortString)
}
  
  useEffect(()=>{
    if(isEnd && isStart){

    } else if (isEnd && filtered.length > start+limit){
      setStart((pre)=>pre+tick)
    } else if(isStart && start >= tick){
      setStart((pre)=>pre-tick)
    }
  },[isStart,isEnd, start])

  const classCounts = userData.reduce((acc:any,user:any)=>{
    if (acc[user.class]){
      acc[user.class] = acc[user.class]+1
    } else {
      acc[user.class] = 1
    }
    return acc
  },{})

  const downloadCsv = function (data:any) {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
 
    const url = window.URL.createObjectURL(blob)
 
    const a = document.createElement('a')
 
    a.setAttribute('href', url)
 
    a.setAttribute('download', 'download.csv');
 
    a.click()
  }
  const csvheader = ["rank", "level", "dead","name","class", "challenges","account","experience","has5Link","has6Link","mainSkills","allGems"]
  const getCsv = ()=>{
    const header= csvheader.join()

    const commaSeperated = userData.map((row:any)=>{
      
      const targets = csvheader.map((key)=>{
        if (key==="challenges"){
          return row[key].completed
        } else if(key==="has5Link"){
          return row.items?.has5Link
        } else if(key==="has6Link"){
          return row.items?.has6Link
        } else if(key==="mainSkills"){
          return row.items?.mainSkills.map((gem:any)=>gem.baseType).join('|')
        } else if(key==="allGems"){
          return row.items?.allGems.join('|')
        }
        return row[key]
      })
      
      const csvRow = targets.join()
      return csvRow
    })
    downloadCsv([header,...commaSeperated].join('\n'))
  }

  useEffect(()=>{
    (async () => {
      setOriginal(userData)
      
      const gemSet = await userData?.reduce((acc:any, user:any)=>{
        user.items?.allGems?.forEach((gemName:any)=>{
          acc.add(gemName)
        })
        
        return acc
      },new Set())
      
      setGemList(["",...Array.from(gemSet||[])].sort())

      const uniqueSet = await userData?.reduce((acc:any, user:any)=>{
        user.items?.allUniques?.forEach((unique:string)=>{
          acc.add(unique)
        })
        
        return acc
      },new Set())
      setUniqueList(["",...Array.from(uniqueSet||[])].sort())
      setFilter(userData)
    })()
  },[userData])
  
  
  const findName = (e:any)=>{
    setName(e.target.value||'')
  }

  useEffect(()=>{
    if (filterName==='' && (filterGem===''||filterGem===null) && filterDeath==='all' && filterUnique==='' && filterLink==='' && filterClass==='' && sortString==='rank'){
      setFilter(userData)
      return
    }else{
      const newFiltered = userData.filter((user:any)=>{
        const gemCheck = filterGem ? user.items?.allGems?.findIndex((gem:any)=>gem===filterGem)>-1 : true
        const uniqueCheck = filterUnique ? user.items?.allUniques?.findIndex((unique:any)=>unique===filterUnique)>-1 : true
        const deathCheck = filterDeath === 'all'? true : filterDeath==='dead'?user.dead:!user.dead
        const classCheck = filterClass ? filterClass===user.class :true
        const nameCheck = filterName ? (user.name.includes(filterName) || user.account?.includes(filterName) || user.class.includes(filterName)) : true
        const linkCheck = filterLink ? (
          filterLink==='6'? user.items?.has6Link : (
            filterLink==='5'? user.items?.has5Link : (
              filterLink==='4'? user.items?.has6Link===false&&user.items?.has5Link===false : false
            )
          )
        ): true
        return Boolean(gemCheck&&nameCheck&&deathCheck&&uniqueCheck&&linkCheck&&classCheck)
      }).sort(sortSelect(sortString))
      setFilter(newFiltered)
      setOpenAccordId('')
    }
    
  },[filterGem, filterName, filterDeath, filterUnique,filterLink, filterClass, userData, sortString])
  
  const handleChange = (event: SelectChangeEvent) => {
    setLink(event.target.value as string);
  };

  const bottomCount = filtered.length-start-limit>0?filtered.length-start-limit:0
  const bottomArr = new Array(bottomCount)
  const startArr = new Array(start)
  
  return (<ThemeProvider theme={theme}>
  <TableContainer component={Paper} className="listContent">
  <SessionProvider session={session}>
    <SignButton/>
  <div className="search">
    <TextField color="primary" style={{minWidth:150}} 
      id="outlined-basic" label="검색" 
      variant="outlined" onChange={findName} value={filterName} />
    <Autocomplete
      color="primary"
      disablePortal
      id="combo-box-gem"
      options={gemList}
      sx={{ width: 300 }}
      value={filterGem}
        onChange={(event: any, newValue: string |null) => {
          setGem(newValue||'');
        }}
        inputValue={filterGemInput}
        onInputChange={(event, newInputValue) => {
          setGemInput(newInputValue);
        }}
      renderInput={(params) => <TextField {...params} label="쩸" />}
    />
    <Autocomplete
    color="primary"
      disablePortal
      id="combo-box-unique"
      options={uniqueList}
      sx={{ width: 300 }}
      value={filterUnique}
        onChange={(event: any, newValue: string |null) => {
          setUnique(newValue||'');
        }}
        inputValue={filterUniqueInput}
        onInputChange={(event, newInputValue) => {
          setUniqueInput(newInputValue);
        }}
      renderInput={(params) => <TextField {...params} label="유닠" />}
    />
    <FormControl style={{minWidth:150}}>
        <InputLabel color="primary" id="demo-simple-select-label">링크</InputLabel>
        <Select
          color="primary"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterLink}
          label="Link"
          onChange={handleChange}
        >
          <MenuItem value={''}>전부</MenuItem>
          <MenuItem value={'6'}>6링오우너</MenuItem>
          <MenuItem value={'5'}>5링</MenuItem>
          <MenuItem value={'4'}>기타</MenuItem>
        </Select>
      </FormControl>
      
      <ButtonGroup variant="outlined" aria-label="outlined primary button group" style={{boxShadow:'none'}}>
        <Button color="primary"
        variant='contained'
        style={{backgroundColor:(filterDeath==='dead'||filterDeath==='all')?'#7a1100':'transparent'}}
        onClick={()=>setDeath(filterDeath==='all'?'alive':'all')}>죽음</Button>
        <Button color="secondary"
        variant='contained'
        style={{backgroundColor:(filterDeath==='alive'||filterDeath==='all')?'#133d62':'transparent'}}
        onClick={()=>setDeath(filterDeath==='all'?'dead':'all')}>살음</Button>
      </ButtonGroup>
      <div>
      <FormControl style={{minWidth:150}}>
        <InputLabel color="primary" id="rank-type-label">랭크</InputLabel>
        <Select
            color="primary"
            labelId="rank-type-label"
            id="rank-type-select"
            value={sortString}
            label="랭크"
            onChange={handleSort}
          >
          <MenuItem value={'rank'}>일반</MenuItem>
          <MenuItem value={'depth_default'}>팡산</MenuItem>
          <MenuItem value={'depth_solo'}>팡산솔로</MenuItem>
          <MenuItem value={'ancestor'}>선조</MenuItem>
          <MenuItem value={'death_cam'}>데스캠최신순</MenuItem>
        </Select>
        </FormControl>
      </div>
      <div>
        <Button variant="outlined" onClick={()=>{
          setDeath('all')
          setClass('')
          setName('')
          setLink('')
          setGem('')
          setUnique('')
          setSortString('rank')
        }}>리셋</Button>
        <div>{`${filtered&&filtered.length}명`}</div>
      </div>
      <div>
      <Button color="primary"
        variant='contained'
        onClick={getCsv}>CSV</Button>
      </div>
  </div>
  <div className='classes'>{Object.keys(classCounts).sort((a:string,b:string)=>{
    const classA = classCounts[a]
    const classB = classCounts[b]
    return classB-classA
  }).map(className=>{
    const count = classCounts[className]
    return <div key={`search-${className}`} onClick={()=>setClass(filterClass===className?'':className)} style={{border:filterClass===className?'3px solid #133d62':'none'}} className='classBox'>
      <div className="classImg" style={{backgroundImage: `url(${CLASS[className]})`}}></div>
      <span
      style={{
        position: 'absolute',
        bottom: 0,
        color: 'white',
        backgroundColor:'black',
        left: 0,
        fontSize: 11,
        lineHeight:'10px',
        width: '100%'
      }}
      >{parseInt(((count / userData.length * 1000) as unknown) as string)/10||'0'}%</span>
    </div>})}
  </div>
  <div style={{overflowAnchor: 'none'}}>
    <div ref={startTag}>
    {[...startArr].map((e,index)=><div key={'start'+index} style={{height:70, width:'100%'}}></div>)}
    </div>
    
    {filtered&&filtered.length&&filtered.length>0&&filtered.slice(start, start+limit).map((row:any, index:number) => <Row key={row.id} row={row} index={start+index} session={session} openAccordId={openAccordId} setOpenAccordId={setOpenAccordId} />)}
    
    <div ref={endTag}>
    {[...bottomArr].map((e,index)=>{
      return <div key={'end'+index} style={{height:70, width:'100%'}}>t</div>
    })} 
    </div>
  </div>
  </SessionProvider>
</TableContainer>
</ThemeProvider>)
}