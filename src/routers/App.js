import './App.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Card,Typography, Link,Button  } from '@mui/material';
import CardContent from '@mui/material/CardContent';

function App(props) {
  const [text,setText] = useState('')
  const [underText,setUnderText] = useState('')
  const [state,setState] = useState('상태창')
  const [backColor,setBackColor] =useState('gray')
  const [error,setError] = useState('')
  const [linkDisplay,setLinkDisplay] = useState('none')
  const handleButton=()=>{
    setState('ok')
  }

  return (
    <div>
    <h1>데이터 입력 페이지</h1>
    <Typography>데이터 입력하여 DB에 등록: </Typography>

    <TextField
            label="Enter Info"
            variant = "standard"
            value={text}
            helperText={error}
            onChange={(event)=>{setText(event.target.value);}}
           />

            <Button
            variant='contained'
            color='primary'
            onClick={handleButton}
           >등록</Button>

            <Card variant="contained" sx={{width:100, height:100,backgroundColor:backColor, borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <CardContent sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Typography 
                    sx={{fontSize:15, color:'white', fontWeight:'bold'}}
                    > {state} </Typography>
                </CardContent>
            </Card>
            <Typography> {underText} </Typography>
            <a href={props.url} //주소 넣어야함
            > 메인페이지로 돌아가기</a>

    </div>
  )
}

export default App;
