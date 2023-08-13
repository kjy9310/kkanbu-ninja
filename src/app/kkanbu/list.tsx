"use client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React , { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import SignButton from '../sign/button'
import { SessionProvider } from "next-auth/react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: purple[500],
    },
  },
});

const createKkanbu = async (objectWithData:any)=>{
    const res = await fetch('/api/kkanbu', {
        method: 'POST',
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

const deleteKkanbu = async (objectWithData:any) =>{
    const res = await fetch('/api/kkanbu?id='+objectWithData._id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        console.log('에러낫다! 스샷찍어주실?')
        console.log(res)
        return ''
      }
    return await res.json()
}

async function getKkanbu() {
    const res = await fetch(`api/kkanbu`,{ next: { revalidate: 0 } }); //1 min cache
    
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }
  
    return res.json();
  }

export default function Page(props:any) {
    const {kkanbus, session} = props

    const [kkanbuList, setkkanbuList] = useState<any>(kkanbus)
    const [twitch, setTwitch] = useState<string>('')
    const [account, setAccount] = useState<string>('')
    
    const onChangeTwitch = (e:any) =>{
        setTwitch(e.target.value.slice(0,50))
    }
    const onChangePoe = (e:any) =>{
        setAccount(e.target.value)
    }
    
    const getNewList = async()=>{
        const newList = await getKkanbu()
        setkkanbuList(newList)
    }
    const addKkanbu = async ()=>{
        const id = await createKkanbu({
            twitch,
            account,
        })
        setTwitch('')
        setAccount('')
        await getNewList()
    }
    const deleteConfirm = async(data:any)=>{
        const res = await deleteKkanbu(data)
        await getNewList()
    }
    
  return <ThemeProvider theme={theme}>
  <Paper className='listContent'>
    {(session?.kkanbu?.admin)?
    <div className="search" style={{margin:20}}>
        <TextField style={{width:'250px'}} label="Twitch" variant="outlined" onChange={onChangeTwitch} />
        <TextField style={{width:'250px'}} label="POE" variant="outlined" onChange={onChangePoe} />
        <Button variant="contained" onClick={addKkanbu}>추가</Button>
    </div>
    :''}
    
      <div style={{backgroundColor:'#999999', borderRadius:10, display:'flex'}}>
        <div  style={{width:100}}>
            No.
        </div>
        <div  style={{width:250}}>
            Twitch
        </div>
        <div  style={{width:250}}>
            POE
        </div>
        {(session?.kkanbu?.admin)&&<div  style={{width:250}}>
            버튼
        </div>}
      </div>
            {kkanbuList.map((kkanbu:any,index:number)=>{
                return <div key={kkanbu._id} style={{backgroundColor:'#999999b5', borderRadius:10, display:'flex'}}>
                <div  style={{width:100}}>
                    {index+1}
                </div>
                <div  style={{width:250}}>
                {kkanbu.twitch}
                </div>
                <div  style={{width:250}}>
                {kkanbu.account}
                </div>
                {(session?.kkanbu?.admin)&&<div  style={{width:250}}>
                {kkanbu.admin?'지우지 말아주세효':<Button size="small" onClick={()=>{
                            const check = confirm(`[${kkanbu.twitch} : ${kkanbu.account} ]삭제할거에요?`)
                            if (check){
                                deleteConfirm(kkanbu)
                            }   
                        }}>삭제</Button>}
                </div>}
              </div>
            })}
    </Paper>
  </ThemeProvider>
}