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
    const res = await fetch(`api/request`,{ next: { revalidate: 1 } }); //1 min cache
    
    if (!res.ok) {
      console.log('에러낫다! 스샷찍어주실?')
      console.log(res)
      return []
    }
  
    return res.json();
  }

export default function Page(props:any) {
    const {userData, requestData} = props

    const [requestList, setRequestList] = useState<any>(requestData)
    const [request, setRequest] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [requester, setRequester] = useState<string>('')
    
    const userNames = userData.map((user:any)=>user.name)

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
  return <TableContainer component={Paper} style={{minWidth:335}}>
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
    <TextField style={{width:'250px'}} label="비번" type="password" variant="outlined" onChange={onChangePassword} />
    <Button onClick={sendRequest}>요청</Button>
    </div>
      <Table className="text-left text-sm font-light">
        <TableHead className="border-b font-medium dark:border-neutral-500">
          <TableRow style={{backgroundColor:'#626262'}}>
            <TableCell style={{maxWidth:250}} className="px-2 py-4">케릭명</TableCell>
            <TableCell className="px-6 py-4">{`"해줘"`}</TableCell>
            <TableCell className="px-2 py-4" style={{width: 150}}>버튼</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {requestList.map((row:any) => (
            <TableRow
            className="border-b dark:border-neutral-500"
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{maxWidth:250}} className="px-2 py-2" component="th" scope="row">
                {row.requester}
              </TableCell>
              <TableCell style={{maxHeight:150, overflowY:'scroll'}} className="px-6 py-4 " component="th" scope="row">
                <pre style={{whiteSpace: 'break-spaces'}}>{row.request}</pre>
              </TableCell>
              <TableCell  style={{maxWidth: 250}} className="px-2 py-4" component="th" scope="row">
                    <Button variant="outlined" onClick={()=>{
                        const text = `@${row.requester} 당신의 해줘:${row.request} 내가 해줌!`
                        navigator.clipboard.writeText(text).then(function() {
                          alert('복사완료 : '+text);
                        }, function(err) {
                          alert('복사가 안됬어요. 직접연락해주세요.')
                        });
                        
                    }}>귓말복사</Button>
                    <Button variant="outlined" onClick={()=>{
                        const password = prompt('삭제할거에요? 비번적어주세요')
                        if (password!==null){
                            console.log('row',row)
                            deleteConfirm({...row, password})
                        }                        
                    }}>삭제</Button>
              </TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
}