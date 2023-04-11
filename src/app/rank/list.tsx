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

export default function Page(props:any) {
    const {userData} = props
  const [original, setOriginal] = useState<any[]>(userData)
  const [filtered, setFilter] = useState<any[]>(userData)
  const [gemList, setGemList] = useState<any[]>([])
  
  const [filterName, setName] = useState<string>('')
  const [filterGem, setGem] = useState<string>('')
  const [filterGemInput, setGemInput] = useState<string>('')
  const [filterDeath, setDeath] = useState<string>('all')
  useEffect(()=>{
    (async () => {
      setOriginal(userData)
      
      const gemSet = await userData?.reduce((acc:any, user:any)=>{
        user.items?.allGems.forEach((gemName:any)=>{
          acc.add(gemName)
        })
        
        return acc
      },new Set())
      
      setGemList(["",...Array.from(gemSet||[])])
      setFilter(userData)
    })()
  },[userData])
  
  
  const findName = (e:any)=>{
    setName(e.target.value||'')
  }

  useEffect(()=>{
    if (filterName==='' && (filterGem===''||filterGem===null) && filterDeath==='all'){
      setFilter(original)
      return
    }else{
      const newFiltered = original.filter(user=>{
        const gemCheck = filterGem ? user.items?.allGems.findIndex((gem:any)=>gem===filterGem)>-1 : true
        const deathCheck = filterDeath === 'all'? true : filterDeath==='dead'?user.dead:!user.dead
        const nameCheck = filterName ? (user.name.includes(filterName) || user.account?.includes(filterName) || user.class.includes(filterName)) : true
        return Boolean(gemCheck&&nameCheck&&deathCheck)
      }).sort((a,b)=>{
        return a.rank-b.rank
      })
      setFilter(newFiltered)
    }

    
  },[filterGem, filterName, filterDeath])
  

  return <TableContainer component={Paper} style={{minWidth:335}}>
    <h2 style={{fontSize:50, textAlign: 'center',color:'white',backgroundColor: '#28281c'}}>깐부찾기</h2>
    <a style={{    backgroundColor: '#b34afb',
    color:'white',
    display: 'inline-block',
    margin:'5px',
    right:10,
    padding: '2px 10px',
    borderRadius: 5}} target='_blank' href="https://www.twitch.tv/ham_90">twitch</a>
    <a style={{    backgroundColor: '#fb4ab0',
    color:'white',
    display: 'inline-block',
    margin:'5px',
    right:10,
    padding: '2px 10px',
    borderRadius: 5}} target='_blank' href="https://tgd.kr/s/ham_90/">햄게더</a>
    <a style={{    backgroundColor: '#626262',
    color:'white',
    display: 'inline-block',
    margin:'5px',
    right:10,
    padding: '2px 10px',
    borderRadius: 5}} target='_blank' href="https://docs.google.com/spreadsheets/d/1mQ-QUtPBI_T4sTcI1SBgl1QOdtiq_ONgxqzO6FyCpaY/edit#gid=2071372347">깐부시트</a>
    <div className="search" style={{margin:20}}>
    <TextField id="outlined-basic" label="검색" variant="outlined" onChange={findName} />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
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
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button style={{backgroundColor:filterDeath==='dead'?'#a54e5d':'gray'}} onClick={()=>setDeath('dead')}>죽음</Button>
        <Button style={{backgroundColor:filterDeath==='all'?'#28281c':'gray'}} onClick={()=>setDeath('all')}>둘다</Button>
        <Button style={{backgroundColor:filterDeath==='alive'?'#5e51af':'gray'}} onClick={()=>setDeath('alive')}>덜죽음</Button>
      </ButtonGroup>
      </div>
      <Table //aria-label="simple table" 
      className="text-left text-sm font-light">
        <TableHead className="border-b font-medium dark:border-neutral-500">
          <TableRow style={{backgroundColor:'#626262'}}>
            <TableCell className="px-2 py-4" style={{width: 45}}>순위</TableCell>
            <TableCell className="px-6 py-4 hiddenOnMoblie">계정명</TableCell>
            <TableCell className="px-6 py-4">케릭명</TableCell>
            <TableCell className="px-6 py-4 removeOnMobile">육개장</TableCell>
            <TableCell className="px-2 py-4" >직업</TableCell>
            <TableCell className="px-6 py-4" style={{width: 45}} align="right">LvL</TableCell>
            <TableCell className="px-6 py-4 hiddenOnMoblie" align="right" style={{maxWidth:120}}>경험치</TableCell>
            <TableCell className="px-2 py-2 removeOnMobile">챌린지</TableCell>
            <TableCell className="px-6 py-4 hiddenOnMoblie">보러가기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered&&filtered.length&&filtered.length>0&&filtered.map((row:any) => (
            <TableRow
            className="border-b dark:border-neutral-500 showOnHover"
              style={{backgroundColor:row.dead?'#a54e5d':'#5e51af'}}
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{width: 45}} className="whitespace-nowrap px-2 py-2" align="center" component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell className="whitespace-nowrap px-6 py-4 hiddenOnMoblie" component="th" scope="row">
                {row.account}
              </TableCell>
              <TableCell className="whitespace-nowrap px-6 py-4" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="whitespace-nowrap px-6 py-4 removeOnMobile" component="th" scope="row">
                {row.dead?'ㅇㅇ쥬금':'아직안쥬금'}
              </TableCell>
              <TableCell //style={{width: 45}}
               className="whitespace-nowrap px-2 py-4" component="th" scope="row">
                {row.class}
              </TableCell>
              <TableCell style={{width: 45}} className="whitespace-nowrap px-2 py-4" component="th" align="right">{row.level}</TableCell>
              <TableCell className="whitespace-nowrap px-2 py-4 hiddenOnMoblie" component="th" align="right" style={{maxWidth:120}}>{row.experience}</TableCell>
              <TableCell className="whitespace-nowrap px-2 py-2 removeOnMobile" component="th" align="center">{row.challenges?.completed}</TableCell>
              <TableCell className="whitespace-nowrap px-6 py-4 hiddenOnMoblie" component="th" scope="row">
                <a style={{    backgroundColor: 'white',
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: 5}} target='_blank' href={`https://www.pathofexile.com/account/view-profile/${row.account}/characters?characterName=${row.name}`}>
                  POE
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
}