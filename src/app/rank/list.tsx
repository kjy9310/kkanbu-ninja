"use client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React , { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

export default function Page(props:any) {
    const {userData} = props
  const [original, setOriginal] = useState<any[]>([])
  const [filtered, setFilter] = useState<any[]>([])
  const [gemList, setGemList] = useState<any[]>([])
  
  const [filterName, setName] = useState<string>('')
  const [filterGem, setGem] = useState<string>('')
  const [filterGemInput, setGemInput] = useState<string>('')
  useEffect(()=>{
    (async () => {
      setOriginal(userData)
      setFilter(userData)
      const gemSet = await userData?.reduce((acc:any, user:any)=>{
        user.items?.allGems.forEach((gemName:any)=>{
          acc.add(gemName)
        })
        
        return acc
      },new Set())
      
      setGemList(["",...Array.from(gemSet||[])])
    })()
  },[userData])
  
  
  const findName = (e:any)=>{
    setName(e.target.value||'')
  }

  useEffect(()=>{
    if (filterName==='' && (filterGem===''||filterGem===null)){
      setFilter(original)
      return
    }else{
      const newFiltered = original.filter(user=>{
        const gemCheck = filterGem && user.items?.allGems.findIndex((gem:any)=>gem===filterGem)>-1
        
        const nameCheck = filterName && (user.name.includes(filterName) || user.account?.includes(filterName) || user.class.includes(filterName))
        return Boolean(gemCheck||nameCheck)
      }).sort((a,b)=>{
        return a.rank-b.rank
      })
      setFilter(newFiltered)
    }

    
  },[filterGem, filterName])
  

  return <TableContainer component={Paper}>
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
    <div style={{margin:20}}>
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
    
      </div>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#626262'}}>
          <TableCell>순위</TableCell>
            <TableCell>계정명</TableCell>
            <TableCell style={{maxWidth:180}}>케릭명</TableCell>
            <TableCell>육개장</TableCell>
            <TableCell>직업</TableCell>
            
            <TableCell align="right">레베루</TableCell>
            <TableCell align="right" style={{maxWidth:120}}>경험치</TableCell>
            <TableCell align="right">챌린지</TableCell>
            <TableCell>보러가기</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered&&filtered.map((row:any) => (
            <TableRow
              style={{backgroundColor:row.dead?'#a54e5d':'#5e51af'}}
              key={row.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.account}
              </TableCell>
              <TableCell component="th" scope="row" style={{maxWidth:180}}>
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.dead?'ㅇㅇ쥬금':'아직안쥬금'}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.class}
              </TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right" style={{maxWidth:120}}>{row.experience}</TableCell>
              <TableCell align="right">{row.challenges?.completed}</TableCell>
              <TableCell component="th" scope="row">
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