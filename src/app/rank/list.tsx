"use client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React , { useEffect, useState } from 'react';
import { ButtonGroup , Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


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


const POEHOST = 'https://poe.game.daum.net/'
// const POEHOST = 'https://www.pathofexile.com/'

const CLASS:any = {
  Marauder:'https://i.imgur.com/UWvvGKZ.png',
  Duelist:'https://i.imgur.com/c8vB7OX.png',
  Ranger:'https://i.imgur.com/qtdp8Jh.png',
  Shadow:'https://i.imgur.com/nWahbNR.png',
  Witch:'https://i.imgur.com/XSqMHh9.png',
  Templar:'https://i.imgur.com/i53a1id.png',
  Scion:'https://i.imgur.com/9IfOWoN.png',
  Juggernaut:'https://i.imgur.com/QFubXr4.png',
  Berserker:'https://i.imgur.com/l2vDx4j.png',
  Chieftain:'https://i.imgur.com/WSkz5xh.png',
  Slayer:'https://i.imgur.com/UMAd0yL.png',
  Gladiator:'https://i.imgur.com/F3FQxV4.png',
  Champion:'https://i.imgur.com/ltGrJ1K.png',
  Deadeye:'https://i.imgur.com/NCybIiO.png',
  Raider:'https://i.imgur.com/oFwpUJO.png',
  Pathfinder:'https://i.imgur.com/EVg7lhR.png',
  Assassin:'https://i.imgur.com/0tURSJ4.png',
  Saboteur:'https://i.imgur.com/7dNJPM4.png',
  Trickster:'https://i.imgur.com/n8jtbfr.png',
  Necromancer:'https://i.imgur.com/k1debpx.png',
  Occultist:'https://i.imgur.com/BGrQsx5.png',
  Elementalist:'https://i.imgur.com/G5fSIS8.png',
  Inquisitor:'https://i.imgur.com/PyzEPzP.png',
  Hierophant:'https://i.imgur.com/8iu1k86.png',
  Guardian:'https://i.imgur.com/sHiE02Y.png',
  Ascendant:'https://i.imgur.com/Th9qGrm.png'
}

export default function Page(props:any) {
    const {userData} = props
    
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
    if (filterName==='' && (filterGem===''||filterGem===null) && filterDeath==='all' && filterUnique==='' && filterLink==='' && filterClass===''){
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
      }).sort((a:any,b:any)=>{
        return a.rank-b.rank
      })
      setFilter(newFiltered)
    }

    
  },[filterGem, filterName, filterDeath, filterUnique,filterLink, filterClass])
  
  const handleChange = (event: SelectChangeEvent) => {
    setLink(event.target.value as string);
  };
  return (<ThemeProvider theme={theme}>
  <TableContainer component={Paper} className="listContent">
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
        <Button variant="outlined" onClick={()=>{
          setDeath('all')
          setClass('')
          setName('')
          setLink('')
          setGem('')
          setUnique('')
        }}>리셋</Button>
        <div>{`${filtered&&filtered.length}명`}</div>
      </div>
      <div>
      <Button color="primary"
        variant='contained'
        onClick={getCsv}>CSV</Button>
      </div>
  </div>
  <div className='classes'>{Object.keys(CLASS).map(className=>{
    return <div key={`search-${className}`} onClick={()=>setClass(filterClass===className?'':className)} style={{border:filterClass===className?'3px solid #133d62':'none'}} className='classBox'>
      <div className="classImg" style={{backgroundImage: `url(${CLASS[className]})`}}></div>
    </div>})}
  </div>
  <div>
    {filtered&&filtered.length&&filtered.length>0&&filtered.map((row:any, index:number) => (<Accordion key={row._id} style={{backgroundColor:index%2===0?'#0a0a0acc':'#141414cc'}}>
        <AccordionSummary
          expandIcon={<span style={{color:'white'}}>V</span>}
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
              <span style={{color:row.dead?'red':'white'}}>{row.name}</span>
            </span>
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
              <span >{`챌: ${row.challenges?.completed} `}</span>
              <span>{`계정: ${row.account}`}</span>
              <span >{`Exp.${row.experience} `}</span>
              <a style={{    backgroundColor: '#133d62', textAlign:'center',
                display: 'inline-block', padding: '2px 10px', borderRadius: 5}} 
                target='_blank' href={`${POEHOST}account/view-profile/${encodeURIComponent(row.account)}/characters?characterName=${encodeURIComponent(row.name)}`}>
                  POE
                </a>
            </Typography>        
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
</TableContainer>
</ThemeProvider>)
}