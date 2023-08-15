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

const addRequest = async (objectWithData:any)=>{
    const res = await fetch('/api/request', {
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

const deleteRequest = async (objectWithData:any) =>{
    const res = await fetch('/api/request?id='+objectWithData._id+'&password='+objectWithData.password, {
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

async function getRequestData() {
    const res = await fetch(`/api/request`,{ next: { revalidate: 1 } }); //1 min cache
    
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }
  
    return res.json();
  }

  const miliduration2date = (deltaTime:number)=>{
    const min = Math.floor(deltaTime/60000)
    if (min<60){
      return `${min}분전`
    }
    const hour = Math.floor(min/60)
    if (hour<24){
      return `${hour}시간전`
    }
    const day = Math.floor(hour/24)
    return `${day}일전`
  }
export default function Page(props:any) {
    const {userData, requestData, session} = props
    const [requestList, setRequestList] = useState<any>(requestData)
    const [request, setRequest] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [requester, setRequester] = useState<string>('')
    
    const userNames = userData.filter((user:any)=>(session?(user.account===session.kkanbu?.account):true)).map((user:any)=>user.name)

    const onChangeRequest = (e:any) =>{
        setRequest(e.target.value.slice(0,50))
    }
    const onChangePassword = (e:any) =>{
        setPassword(e.target.value)
    }
    const getNewList = async()=>{
        const newList = await getRequestData()
        setRequestList(newList)
    }
    const sendRequest = async ()=>{
        if (!requester || !request){
            return
        }
        const id = await addRequest({
            requester,
            request,
            password
        })
        if (id){
            setRequestList([{requester,
                request,
                password,_id:id},...requestList])
            setRequest('')
            setPassword('')
            setRequester('')
        } else {
            await getNewList()
        }
    }
    const deleteConfirm = async(data:any)=>{
        const res = await deleteRequest(data)
        if ("success"=== res){
            setRequestList(requestList.filter((req:any)=>req._id!==data._id))
        }else{
            await getNewList()
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            getNewList()
        },3*60*1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return <ThemeProvider theme={theme}>
  <TableContainer component={Paper} className='listContent'>
    <SessionProvider session={session}>
    <SignButton/>
    <div className="search" style={{margin:20}}>
    <Autocomplete
      disablePortal
      id="combo-box-gem"
      options={userNames}
      sx={{ width: 300 }}
      value={requester}
        onChange={(event: any, newValue: string |null) => {
            setRequester(newValue||'');
        }}
      renderInput={(params) => <TextField {...params} label="케릭명" />}
    />
    <TextField style={{width:'100%'}} multiline maxRows={'3'} label="해줘내용" variant="outlined" value={request} onChange={onChangeRequest} />
    {!session&&<TextField style={{width:'250px'}} label="비번" type="password" variant="outlined" onChange={onChangePassword} />}
    <Button variant="contained" onClick={sendRequest}>요청</Button>
    </div>
    </SessionProvider>
      <Table className="text-left text-sm font-light" style={{minWidth:380}}>
        <TableHead className="border-b font-medium dark:border-neutral-500">
          <TableRow style={{backgroundColor:'#999999b5', borderRadius:10, display:'flex', justifyContent:'space-evenly'}}>
            <TableCell style={{minWidth:80}} className="px-2 py-4">케릭명</TableCell>
            <TableCell style={{width:'100%', textAlign:'center'}} className="px-6 py-4">{`"해줘"`}</TableCell>
            <TableCell style={{minWidth:70}} className="px-2 py-4" >버튼</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {requestList.map((row:any) => {
          const created = new Date(row.createdAt).getTime()
          const deltaTime = new Date().getTime() - created
            return <TableRow
            style={{backgroundColor:'#000000b3',display:'flex', justifyContent:'space-evenly'}}
            className="border-b dark:border-neutral-500"
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:'white', width: 110, wordBreak: 'break-all'}} className="px-2 py-2" component="th" scope="row">
                {row.requester}
              </TableCell>
              <TableCell style={{color:'white', maxHeight:150, overflowY:'scroll', width:'100%'}} className="px-6 py-4 " component="th" scope="row">
                <pre style={{whiteSpace: 'break-spaces'}}>{row.request}</pre>
              </TableCell>
              <TableCell  className="px-2 py-4" component="th" scope="row">
                  <div>
                    <Button variant="outlined" onClick={()=>{
                        const text = `@${row.requester} 당신의 해줘:${row.request} 내가 해줌!`
                        navigator.clipboard.writeText(text).then(function() {
                          alert('복사완료 : '+text);
                        }, function(err) {
                          alert('복사가 안됬어요. 직접연락해주세요.')
                        });
                        
                    }}>귓말복사</Button>
                    <Button variant="outlined" onClick={()=>{
                        if (row.account){
                          deleteConfirm({...row})
                        } else {
                          const password = prompt('삭제할거에요? 비번적어주세요')
                          if (password!==null){
                              deleteConfirm({...row, password})
                          }
                        }
                    }}>삭제</Button>
                    <div style={{color:'white'}}>{miliduration2date(deltaTime)}</div>
                  </div>
              </TableCell>
            </TableRow>
})}
        </TableBody>
      </Table>
    </TableContainer>
  </ThemeProvider>
}