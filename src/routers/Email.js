import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Card,Typography, Link,Button  } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const preventDefault = (event) => event.preventDefault();

export default function Email(props){
    const [text,setText] = useState('')
    const [underText,setUnderText] = useState('')
    const [state,setState] = useState('상태창')
    const [backColor,setBackColor] =useState('gray')
    const [error,setError] = useState('')
    const [linkDisplay,setLinkDisplay] = useState('none')


    async function handleButton(event){
        event.preventDefault();

        if (text === ''){
            setBackColor('red')
            setState('Empty error')
            setUnderText('email is required')
            return
        }

        try{
            console.log('email :',text)
            const response = await fetch(`http://127.0.0.1:8000/get-email?email=${text}`);
            console.log(response);
                //응답이 정상적으로 완료되면
            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                
                // 찾는 데이터가 없을 경우에
                if (data.status === "non-exist") {
                 // 데이터가 없으면, 입력페이지로 전환 시키기
                     setLinkDisplay('block')

                    setBackColor('orange')
                    setState('No data')
                    setUnderText( "Email has verified, but "+JSON.stringify(data.status))
                    localStorage.setItem("email", text);
                    
                    console.log("email exists : ", response.status);
                }else{
                    setBackColor('green')
                    setState('done')
                    setLinkDisplay('block')
                    localStorage.setItem("email", text);

                    setUnderText(JSON.stringify(data.status))
                }}
        }catch(e){
            // 응답이 정상이 아닐 경우, 버튼 색이 바뀜
            setBackColor('red')
            setState('Server Error')
            setUnderText('error'+ e)
            console.error("catch error : ", e);
        }
    }

    return(
        <div>
            <h1>이메일을 사용하여, 해당 계정에 정보가 있는지 확인</h1>
            <Typography>로그인 된 이메일: </Typography>
            <TextField
            id = "emailText"
            label="Email"
            variant = "standard"
            value={text}
            helperText={error}
            onChange={(event)=>{
                setText(event.target.value);
            }}
           />

            <Button
            variant='contained'
            color='primary'
            onClick={handleButton}
           >조회</Button>

            <Card variant="contained" sx={{width:100, height:100,backgroundColor:backColor, borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <CardContent sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Typography 
                    sx={{fontSize:15, color:'white', fontWeight:'bold'}}
                    > {state} </Typography>
                </CardContent>
            </Card>
            <Typography> {underText} </Typography>
            <Link 
                href='/input'
                display={linkDisplay}
                >데이터 추가하기</Link>
        </div>
    )
}