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

export default function Page(props:any) {
    const {userData} = props
  const [original, setOriginal] = useState<any[]>(userData)
  const [filtered, setFilter] = useState<any[]>(userData)
  const [gemList, setGemList] = useState<any[]>([])
  const [uniqueList, setUniqueList] = useState<any[]>([])
  
  const [filterName, setName] = useState<string>('')
  const [filterLink, setLink] = useState<string>('')
  
  const [filterGem, setGem] = useState<string>('')
  const [filterGemInput, setGemInput] = useState<string>('')
  
  const [filterUnique, setUnique] = useState<string>('')
  const [filterUniqueInput, setUniqueInput] = useState<string>('')

  const [filterDeath, setDeath] = useState<string>('all')
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
    if (filterName==='' && (filterGem===''||filterGem===null) && filterDeath==='all' && filterUnique==='' && filterLink===''){
      setFilter(original)
      return
    }else{
      const newFiltered = original.filter(user=>{
        const gemCheck = filterGem ? user.items?.allGems?.findIndex((gem:any)=>gem===filterGem)>-1 : true
        const uniqueCheck = filterUnique ? user.items?.allUniques?.findIndex((unique:any)=>unique===filterUnique)>-1 : true
        const deathCheck = filterDeath === 'all'? true : filterDeath==='dead'?user.dead:!user.dead
        const nameCheck = filterName ? (user.name.includes(filterName) || user.account?.includes(filterName) || user.class.includes(filterName)) : true
        const linkCheck = filterLink ? (
          filterLink==='6'? user.items?.has6Link : (
            filterLink==='5'? user.items?.has5Link : (
              filterLink==='4'? user.items?.has6Link===false&&user.items?.has5Link===false : false
            )
          )
        ): true
        return Boolean(gemCheck&&nameCheck&&deathCheck&&uniqueCheck&&linkCheck)
      }).sort((a,b)=>{
        return a.rank-b.rank
      })
      setFilter(newFiltered)
    }

    
  },[filterGem, filterName, filterDeath, filterUnique,filterLink])
  
  const handleChange = (event: SelectChangeEvent) => {
    setLink(event.target.value as string);
  };


  return <TableContainer component={Paper} style={{minWidth:335}}>
    <div className="search" style={{margin:20}}>
    <TextField id="outlined-basic" label="검색" variant="outlined" onChange={findName} />
    <Autocomplete
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
    <FormControl style={{width:150}}>
        <InputLabel id="demo-simple-select-label">링크</InputLabel>
        <Select
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
            <TableCell className="px-2 py-4" style={{width: 56}}>순위</TableCell>
            <TableCell className="px-6 py-4 hiddenOnMoblie">계정명</TableCell>
            <TableCell className="px-6 py-4">케릭명</TableCell>
            <TableCell className="px-6 py-4 removeOnMobile">육개장</TableCell>
            <TableCell className="px-2 py-4" >직업</TableCell>
            <TableCell className="px-6 py-4" style={{width: 48}} align="right">LvL</TableCell>
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
              <TableCell style={{width: 56}} className="whitespace-nowrap px-2 py-2" align="center" component="th" scope="row">
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
              <TableCell
               className="whitespace-nowrap px-2 py-4" component="th" scope="row">
                {row.class}
              </TableCell>
              <TableCell style={{width: 48}} className="whitespace-nowrap px-1 py-4" component="th" align="right">{row.level}</TableCell>
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