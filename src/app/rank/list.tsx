"use client";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import React , { useEffect, useState, useRef } from 'react';
import { ButtonGroup , Button, TextField, Tooltip, Chip } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Row from './row'
import Row from './newRow'
import SignButton from '../sign/button'
import { SessionProvider } from "next-auth/react"
import { CLASS } from './constants'
import {AutocompleteWithChip} from './autocompleteWithChip'

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
  const limit = 140
  const tick = 10
  const {userData, session, currentLeague} = props
  const [original, setOriginal] = useState<any[]>(userData)
  const [filtered, setFilter] = useState<any[]>(userData)
  const [gemList, setGemList] = useState<any[]>([])
  const [uniqueList, setUniqueList] = useState<any[]>([])
  const [popularGems, setPopularGems] = useState<any[]>([])
  const [popularUniques, setPopularUniques] = useState<any[]>([])
  
  const [filterClass, setClass] = useState<string>('')
  const [filterMainSkill, setMainSkill] = useState<string>('')
  const [filterName, setName] = useState<string>('')
  const [filterLink, setLink] = useState<string>('')
  
  const [filterGems, setGems] = useState<any>([])
  
  const [filterUniques, setUniques] = useState<any>([])
  
  const [filterDeath, setDeath] = useState<string>('all')

  const [openAccordId, setOpenAccordId] = useState<string>('')

  const [start, setStart] = useState<number>(0);

  const startTag = useRef<HTMLDivElement | null>(null)
  const endTag = useRef<HTMLDivElement | null>(null)
  const isStart = useIsVisible(startTag)
  const isEnd = useIsVisible(endTag)

  const [classCounts, setClassCounts] = useState<any>([])
  const [mainSkillCounts, setMainSkillCounts] = useState<any>([])
  const [sortString, setSortString] = useState<string>('rank')

  const pip = useRef<any>(null)

  const getMainSkill = (user: any) => {
    if (!user.items?.mainSkills || user.items.mainSkills.length === 0) return null;
    const sorted = [...user.items.mainSkills].sort((a: any, b: any) => b.linkCount - a.linkCount);
    return sorted[0].baseType;
  }

  const getMainSkillIcon = (user: any) => {
    if (!user.items?.mainSkills || user.items.mainSkills.length === 0) return null;
    const sorted = [...user.items.mainSkills].sort((a: any, b: any) => b.linkCount - a.linkCount);
    return sorted[0].icon;
  }

  async function getUserData() {
    try{
      const res = await fetch(`/api/user`); //10 min cache
    
      if (!res.ok) {
        return []
      }
  
      return res.json();
    } catch(e){
      console.log('rank page getUserData error:', e)
      return []
    }
  }

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
    case 'life':
      return (a:any, b:any)=>{
        return (b.pob?.Life||0)-(a.pob?.Life||0)===0?a.rank-b.rank:(b.pob?.Life||0)-(a.pob?.Life||0)
      }
    case 'es':
      return (a:any, b:any)=>{
        return (b.pob?.EnergyShield||0)-(a.pob?.EnergyShield||0)===0?a.rank-b.rank:(b.pob?.EnergyShield||0)-(a.pob?.EnergyShield||0)
      }
    case 'ehp':
      return (a:any, b:any)=>{
        return (b.pob?.TotalEHP||0)-(a.pob?.TotalEHP||0)===0?a.rank-b.rank:(b.pob?.TotalEHP||0)-(a.pob?.TotalEHP||0)
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

  const downloadCsv = function (data:any) {
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
 
    const url = window.URL.createObjectURL(blob)
 
    const a = document.createElement('a')
 
    a.setAttribute('href', url)
 
    a.setAttribute('download', 'download.csv');
 
    a.click()
  }
  const csvheader = ["rank", "level", "dead","name","class", "challenges","account","experience","has5Link","has6Link","life","es","mana","ehp","dps","mainSkills","allGems"]
  const getCsv = ()=>{
    const header= csvheader.join()

    const commaSeperated = original.map((row:any)=>{
      
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
        } else if(key==="life"){
          return row.pob?.Life
        } else if(key==="es"){
          return row.pob?.EnergyShield
        } else if(key==="mana"){
          return row.pob?.Mana
        } else if(key==="ehp"){
          return row.pob?.TotalEHP
        } else if(key==="combinedDPS"){
          return row.pob?.CombinedDPS
        }
        return row[key]
      })
      
      const csvRow = targets.join()
      return csvRow
    })
    downloadCsv([header,...commaSeperated].join('\n'))
  }

  const getGemList= async (data:any)=>{
    const gemSet: any = {}
    data?.forEach((user:any)=>{
      const userGems = new Set<string>()
      user.items?.mainSkills?.forEach((gem:any)=>{
        const name = gem.baseType
        if (!gemSet[name]) {
          gemSet[name] = { name: name, count: 0, icon: gem.icon }
        } else if (gem.icon && !gemSet[name].icon) {
          gemSet[name].icon = gem.icon
        }
        userGems.add(name)
      })
      user.items?.allGems?.forEach((name:string) => userGems.add(name))
      
      userGems.forEach(name => {
        if (!gemSet[name]) {
          gemSet[name] = { name: name, count: 0 }
        }
        gemSet[name].count += 1
      })
    })
    
    const orderedGemSetList = Object.values(gemSet).sort((a:any,b:any)=>{
      if ((b as any).count !== (a as any).count) return (b as any).count - (a as any).count
      return (a as any).name.localeCompare((b as any).name)
    })
    return orderedGemSetList
  }

  const getUniqueList = async (data:any) =>{
    const uniqueSet: any = {}
    data?.forEach((user:any)=>{
      const userUniques = new Set<string>(user.items?.allUniques || [])
      userUniques.forEach(name => {
        if (!uniqueSet[name]) {
          uniqueSet[name] = { name: name, count: 0 }
        }
        uniqueSet[name].count += 1
      })
    })
    const orderedUniqueSetList = Object.values(uniqueSet).sort((a:any,b:any)=>{
      if ((b as any).count !== (a as any).count) return (b as any).count - (a as any).count
      return (a as any).name.localeCompare((a as any).name)
    })
    return orderedUniqueSetList
  }

  useEffect(()=>{
    (async () => {
      
      const gemListSet = await getGemList(filtered)
      setGemList(gemListSet)
      setPopularGems(gemListSet.filter(g => (g as any).icon).slice(0, 12))

      const uniqueListSet = await getUniqueList(filtered)
      setUniqueList(uniqueListSet)
      setPopularUniques(uniqueListSet.slice(0, 12))
      
      const msCounts: any = {}
      const initialCounts = Object.keys(CLASS).reduce((acc: any, clsName: string) => {
        acc[clsName] = 0
        return acc
      }, {})

      const cCounts = filtered.reduce((acc:any,user:any)=>{
        if (user.class) {
          acc[user.class] = (acc[user.class] || 0) + 1
        }

        const mainSkill = getMainSkill(user)
        if (mainSkill) {
          if (!msCounts[mainSkill]) {
            msCounts[mainSkill] = { name: mainSkill, count: 0, icon: getMainSkillIcon(user) }
          }
          msCounts[mainSkill].count += 1
        }

        return acc
      }, initialCounts)
        
      setClassCounts(cCounts)
      setMainSkillCounts(Object.values(msCounts).sort((a: any, b: any) => b.count - a.count))
    })()
  },[filtered])
  
  useEffect(()=>{
      const refresh = currentLeague && setInterval(async()=>{
        const newOriginal = await getUserData()
        if (pip.current && !pip.current.closed && pip.current.pipId){
          const currentTargetdata = newOriginal.find((e:any)=>e.id===pip.current?.pipId)
          currentTargetdata && createPIPdocument(currentTargetdata)
        }
        setOriginal(newOriginal)
      },1000*60*3)
    return ()=>refresh&&clearInterval(refresh)
  },[])
  
  const findName = (e:any)=>{
    setName(e.target.value||'')
  }

  const gemSelectedCheck = (gems?:any)=>{
    if (!gems){
      return false
    }
    const filterGemNames = filterGems.map((e:any)=>e.name)
    const isMatched = filterGemNames.reduce((acc:boolean, filterGemName:any)=>{
      return acc&&(gems||[]).includes(filterGemName)
    },true)
    return isMatched
  }

  const uniqueSelectedCheck = (allUniques?:any)=>{
    if (!allUniques){
      return false
    }
    const filterUniqueNames = filterUniques.map((e:any)=>e.name)
    const isMatched = filterUniqueNames.reduce((acc:boolean, filterName:any)=>{
      return acc&&(allUniques||[]).includes(filterName)
    },true)
    return isMatched
  }

  useEffect(()=>{
    if (filterName==='' && (filterGems.length===0) && filterDeath==='all' && filterUniques.length===0 && filterLink==='' && filterClass==='' && filterMainSkill==='' && sortString==='rank'){
      setFilter(original)
      return
    }else{
      const newFiltered = original.filter((user:any)=>{
        const gemCheck = filterGems.length>0 
        ? gemSelectedCheck(user.items?.allGems)
        // ? user.items?.allGems?.findIndex((gem:any)=>gem===filterGem)>-1 
        : true

        const uniqueCheck = filterUniques.length>0 
        ? uniqueSelectedCheck(user.items?.allUniques)
        //? user.items?.allUniques?.findIndex((unique:any)=>unique===filterUnique)>-1 
        : true
        const deathCheck = filterDeath === 'all'? true : filterDeath==='dead'?user.dead:!user.dead
        const classCheck = filterClass ? filterClass===user.class :true
        const mainSkillCheck = filterMainSkill ? getMainSkill(user) === filterMainSkill : true
        const nameCheck = filterName ? (user.name.includes(filterName) || user.account?.includes(filterName) || user.class.includes(filterName)) : true
        const linkCheck = filterLink ? (
          filterLink==='6'? user.items?.has6Link : (
            filterLink==='5'? user.items?.has5Link : (
              filterLink==='4'? user.items?.has6Link===false&&user.items?.has5Link===false : false
            )
          )
        ): true
        return Boolean(gemCheck&&nameCheck&&deathCheck&&uniqueCheck&&linkCheck&&classCheck&&mainSkillCheck)
      }).sort(sortSelect(sortString))
      setFilter(newFiltered)
      setOpenAccordId('')
    }
    
  },[filterGems, filterName, filterDeath, filterUniques,filterLink, filterClass, filterMainSkill, original, sortString])
  
  const handleChange = (event: SelectChangeEvent) => {
    setLink(event.target.value as string);
  };

  const bottomCount = filtered.length-start-limit>0?filtered.length-start-limit:0
  const bottomArr = new Array(bottomCount)
  const startArr = new Array(start)
  
  const createPIPdocument = (userObject:any) =>{
    const target = pip.current
    target.document.body.innerHTML=''
    const dateOptions = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const document =  `<div style="width:100%;height:100%;display:flex;justify-content:space-evenly;flex-direction: column;">
    <div style="display:flex;justify-content:space-evenly;">
    <span>${userObject.name}</span>
    </div>
    <div style="display:flex;justify-content:space-evenly;">
    <span>
    랭크 : ${userObject.rank}
    </span>
    <span>
    팡산 : ${userObject.depth?.default||''} / solo:${userObject.depth?.solo||''}
    </span>
    </div>
    <div style="display:flex;justify-content:space-evenly;">
    <span>
    최근갱신 : ${new Date(userObject.createdAt).toLocaleDateString("ko-KR",dateOptions as any)}
    </span>
    </div>
    </div>`
    target.document.write(document)
    target.document.body.style="background-color:#000000;color:#ffffff;padding:0"
  }
  const pipStart=async(id:string)=>{
    // documentPictureInPicture.window
    const options = {
      width:350,
      height:100,
      disallowReturnToOpener:false
    }
    // pip.current.requestWindow()
    // documentPictureInPicture.onenter event
    // pip.current.requestWindow(options)
    // pip.current.requestPictureInPicture();
    // const prompt = window.prompt("character name?")
    if((window as any).documentPictureInPicture){
      const target = await (window as any).documentPictureInPicture.requestWindow(options)
      const selected = original.find(e=>e.id===id)
      pip.current = target
      pip.current.pipId = id
      createPIPdocument(selected)
    }
    // document.getElementById("pip")&& document.getElementById("pip").requestWindow(options)
  }
  
  return (<ThemeProvider theme={theme}>
  <SessionProvider session={session}>
  <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-[1800px] mx-auto min-h-screen bg-[#0a0a0a] text-gray-200">
    
    {/* Sidebar - Filters */}
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      <div className="bg-[#1a1a1a] p-3 rounded-lg shadow-lg border border-gray-800 space-y-2.5">
        <div className="flex items-center justify-between border-b border-gray-800 pb-1.5">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Classes</h3>
          {filterClass && (
            <button 
              onClick={() => setClass('')}
              className="text-[10px] text-gray-400 hover:text-white transition-colors underline"
            >
              Clear filter
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
          {Object.keys(classCounts)
            .sort((a, b) => (classCounts[b] - classCounts[a]) || a.localeCompare(b))
            .map((className) => {
              const count = classCounts[className];
              const isSelected = filterClass === className;
              const percentage = filtered.length > 0 ? (count / filtered.length * 100).toFixed(1) : '0';
              const isZero = count === 0;

              return (
                <div 
                  key={`search-${className}`} 
                  onClick={() => setClass(isSelected ? '' : className)}
                  className={`flex items-center px-2 py-1.5 cursor-pointer rounded transition-all group border ${
                    isSelected 
                      ? 'bg-[#133d62] border-[#2a6fb3] ring-1 ring-[#2a6fb3]' 
                      : isZero
                        ? 'bg-[#0d0d0d] border-gray-900 opacity-50 hover:opacity-100 hover:border-gray-700'
                        : 'bg-[#121212] border-gray-800/80 hover:bg-[#222] hover:border-gray-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full overflow-hidden mr-1.5 flex-shrink-0 border ${isSelected ? 'border-[#2a6fb3]' : isZero ? 'border-gray-800' : 'border-gray-700'}`}>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${CLASS[className] || CLASS['Scion']})` }} />
                  </div>
                  <span className={`text-xs truncate flex-grow ${isSelected ? 'text-white font-bold' : isZero ? 'text-gray-500' : 'text-gray-300'}`}>{className}</span>
                  <span className={`text-[10px] font-mono ml-1 flex-shrink-0 ${isZero ? 'text-gray-600 font-bold' : 'text-gray-400'}`}>{percentage}%</span>
                </div>
              );
            })}
        </div>
      </div>

      {/* Main Skills List */}
      <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-gray-800">
        <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider border-b border-gray-800 pb-2">Main Skills</h3>
        <div className="flex flex-col gap-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
          {mainSkillCounts.map((skill: any) => {
            const isSelected = filterMainSkill === skill.name
            const percentage = filtered.length > 0 ? (skill.count / filtered.length * 100).toFixed(1) : '0'
            return (
              <div 
                key={`main-skill-${skill.name}`} 
                onClick={()=>setMainSkill(isSelected ? '' : skill.name)}
                className={`flex items-center p-2 cursor-pointer hover:bg-[#2a2a2a] rounded transition-all group ${isSelected ? 'bg-[#133d62] ring-1 ring-[#2a6fb3]' : ''}`}
              >
                <div className={`w-8 h-8 rounded overflow-hidden mr-3 border ${isSelected ? 'border-[#2a6fb3]' : 'border-gray-700 group-hover:border-gray-500'}`}>
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-cover" />
                </div>
                <span className={`flex-grow text-sm ${isSelected ? 'text-white font-bold' : 'text-gray-300'}`}>{skill.name}</span>
                <span className="text-gray-500 text-xs font-mono">{percentage}%</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Popular Skills Grid */}
      <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-gray-800">
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider border-b border-gray-800 pb-2">Popular Gems</h3>
        <div className="grid grid-cols-4 gap-2">
          {popularGems.map((gem) => {
            const isSelected = filterGems.some((g:any) => g.name === gem.name)
            const percentage = filtered.length > 0 ? (gem.count / filtered.length * 100).toFixed(1) : '0'
            return (
              <Tooltip key={gem.name} title={`${gem.name} (${percentage}%)`}>
                <div 
                  onClick={() => {
                    if (isSelected) {
                      setGems(filterGems.filter((g:any) => g.name !== gem.name))
                    } else {
                      setGems([...filterGems, gem])
                    }
                  }}
                  className={`relative cursor-pointer rounded-sm overflow-hidden border-2 transition-all ${isSelected ? 'border-[#2a6fb3] bg-[#133d62]' : 'border-gray-800 hover:border-gray-500 bg-[#111]'}`}
                >
                  <img src={gem.icon} alt={gem.name} className="w-full h-auto" />
                  <div className="absolute bottom-0 right-0 bg-black/70 text-[8px] px-1 text-gray-400">
                    {Math.round(parseFloat(percentage))}%
                  </div>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>

      {/* Popular Uniques Grid */}
      <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-gray-800">
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider border-b border-gray-800 pb-2">Popular Uniques</h3>
        <div className="flex flex-wrap gap-1">
          {popularUniques.slice(0, 10).map((item) => {
            const isSelected = filterUniques.some((u:any) => u.name === item.name)
            const percentage = filtered.length > 0 ? (item.count / filtered.length * 100).toFixed(1) : '0'
            return (
              <div 
                key={item.name}
                onClick={() => {
                  if (isSelected) {
                    setUniques(filterUniques.filter((u:any) => u.name !== item.name))
                  } else {
                    setUniques([...filterUniques, item])
                  }
                }}
                className={`text-[10px] px-2 py-1 rounded cursor-pointer border transition-all flex items-center gap-1 ${isSelected ? 'bg-[#ef6c00] border-[#ffb74d] text-white' : 'bg-[#222] border-gray-800 text-gray-400 hover:border-gray-600'}`}
              >
                <span>{item.name.replace(/^(The\s|A\s)/, '')}</span>
                <span className={`text-[9px] ${isSelected ? 'text-orange-100' : 'text-gray-500'}`}>{Math.round(parseFloat(percentage))}%</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-gray-800 space-y-4">
        <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider border-b border-gray-800 pb-2">Filters</h3>
        
        <TextField 
          fullWidth
          size="small"
          label="Character / Account" 
          variant="outlined" 
          onChange={findName} 
          value={filterName}
          sx={{ 
            '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: '#333' } },
            '& .MuiInputLabel-root': { color: '#888' }
          }}
        />

        <div className="bg-[#111] rounded p-2 border border-gray-800">
          <AutocompleteWithChip
            data={gemList}
            onChange={(gemList:any)=>setGems(gemList)}
            name="Search Gems..."
          />
        </div>
        
        <div className="bg-[#111] rounded p-2 border border-gray-800">
          <AutocompleteWithChip
            data={uniqueList}
            onChange={(uniqueList:any)=>setUniques(uniqueList)}
            name="Search Uniques..."
          />
        </div>

        <FormControl fullWidth size="small">
          <InputLabel sx={{ color: '#888' }}>Links</InputLabel>
          <Select
            value={filterLink}
            label="Links"
            onChange={handleChange}
            sx={{ color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: '#333' } }}
          >
            <MenuItem value={''}>All Links</MenuItem>
            <MenuItem value={'6'}>6-Link Only</MenuItem>
            <MenuItem value={'5'}>5-Link</MenuItem>
            <MenuItem value={'4'}>Other</MenuItem>
          </Select>
        </FormControl>

        <div className="flex gap-2">
          <Button 
            fullWidth
            onClick={()=>setDeath(filterDeath==='dead' ? 'all' : 'dead')}
            size="small"
            sx={{ 
              borderRadius: '4px',
              fontWeight: 'bold',
              border: '1px solid #dc2626 !important',
              background: filterDeath === 'dead' ? '#991b1b !important' : 'transparent !important',
              color: filterDeath === 'dead' ? 'white !important' : '#ef4444 !important',
              '&:hover': { 
                background: filterDeath === 'dead' ? '#b91c1c !important' : 'rgba(220, 38, 38, 0.1) !important',
                borderColor: '#b91c1c !important'
              }
            }}
          >Dead</Button>
          <Button 
            fullWidth
            onClick={()=>setDeath(filterDeath==='alive' ? 'all' : 'alive')}
            size="small"
            sx={{ 
              borderRadius: '4px',
              fontWeight: 'bold',
              border: '1px solid #3b82f6 !important',
              background: filterDeath === 'alive' ? '#1d4ed8 !important' : 'transparent !important',
              color: filterDeath === 'alive' ? 'white !important' : '#60a5fa !important',
              '&:hover': { 
                background: filterDeath === 'alive' ? '#2563eb !important' : 'rgba(59, 130, 246, 0.1) !important',
                borderColor: '#2563eb !important'
              }
            }}
          >Alive</Button>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button 
            variant="contained" 
            onClick={getCsv}
            sx={{ bgcolor: '#333', '&:hover': { bgcolor: '#444' }, fontSize: '0.75rem' }}
          >CSV</Button>
          <Button 
            variant="outlined" 
            color="inherit"
            onClick={()=>{
              setDeath('all')
              setClass('')
              setMainSkill('')
              setName('')
              setLink('')
              setGems([])
              setUniques([])
              setSortString('rank')
            }}
            sx={{ fontSize: '0.75rem' }}
          >Reset</Button>
        </div>
      </div>
    </aside>

    {/* Main Content - List */}
    <main className="flex-grow flex flex-col gap-4 min-w-0">
      <header className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-gray-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-white">
            {filtered.length.toLocaleString()} <span className="text-sm font-normal text-gray-400">Characters</span>
          </div>
          <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={sortString}
              onChange={handleSort}
              sx={{ color: 'white', '.MuiOutlinedInput-notchedOutline': { borderColor: '#333' } }}
            >
              <MenuItem value={'rank'}>Sort by Rank</MenuItem>
              <MenuItem value={'depth_default'}>Sort by Delve</MenuItem>
              <MenuItem value={'depth_solo'}>Sort by Delve (Solo)</MenuItem>
              <MenuItem value={'ancestor'}>Sort by Ancestor</MenuItem>
              <MenuItem value={'death_cam'}>Latest Deaths</MenuItem>
              <MenuItem value={'life'}>Sort by Life</MenuItem>
              <MenuItem value={'es'}>Sort by ES</MenuItem>
              <MenuItem value={'ehp'}>Sort by eHP</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Active Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {filterClass && (
            <Chip 
              label={filterClass} 
              onDelete={() => setClass('')} 
              color="primary" 
              size="small" 
              sx={{ borderRadius: '4px' }}
            />
          )}
          {filterMainSkill && (
            <Chip 
              label={filterMainSkill} 
              onDelete={() => setMainSkill('')} 
              color="secondary" 
              size="small" 
              sx={{ borderRadius: '4px' }}
            />
          )}
          {filterName && (
            <Chip 
              label={`Name: ${filterName}`} 
              onDelete={() => setName('')} 
              variant="outlined" 
              size="small" 
              sx={{ borderRadius: '4px', color: '#aaa', borderColor: '#444' }}
            />
          )}
          {filterGems.map((gem:any) => (
            <Chip 
              key={gem.name} 
              label={gem.name} 
              onDelete={() => setGems(filterGems.filter((g:any) => g.name !== gem.name))} 
              variant="outlined" 
              size="small"
              sx={{ borderRadius: '4px', color: '#4fc3f7', borderColor: '#0277bd' }}
            />
          ))}
          {filterUniques.map((u:any) => (
            <Chip 
              key={u.name} 
              label={u.name} 
              onDelete={() => setUniques(filterUniques.filter((un:any) => un.name !== u.name))} 
              variant="outlined" 
              size="small"
              sx={{ borderRadius: '4px', color: '#ffb74d', borderColor: '#ef6c00' }}
            />
          ))}
        </div>
      </header>

      <div className="bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden border border-gray-800" id="pip">
        <div ref={startTag}>
          {[...startArr].map((e,index)=><div key={'start'+index} style={{height:38, width:'100%'}}></div>)}
        </div>
        
        <div className="divide-y divide-gray-800">
          {filtered && filtered.length > 0 && filtered.slice(start, start+limit).map((row:any, index:number) => (
            <Row key={row.id} row={row} index={start+index} session={session} openAccordId={openAccordId} setOpenAccordId={setOpenAccordId} pipStart={pipStart} currentLeague={currentLeague}/>
          ))}
        </div>
        
        <div ref={endTag}>
          {[...bottomArr].map((e,index)=> <div key={'end'+index} style={{height:38, width:'100%'}}></div>)} 
        </div>
      </div>
    </main>
  </div>
  </SessionProvider>
</ThemeProvider>)
}