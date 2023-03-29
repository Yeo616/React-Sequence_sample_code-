import './DataInput.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Card,Typography, Link,Button  } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


const preventDefault = (event) => event.preventDefault();
const email = localStorage.getItem("email")|| "";

function DataInput(props) {
  const [text,setText] = useState('')
  const [underText,setUnderText] = useState('')
  const [state,setState] = useState('상태창')
  const [backColor,setBackColor] =useState('gray')
  const [error,setError] = useState('')
  const [delDisplay,setDelDisplay] = useState('none')
  
  if (!email || email === "") {
    setBackColor( "red");
    setState("email is required");
    setUnderText("email is required");
    console.error("email is required");
  }
  async function handleButton(event){
    event.preventDefault();

    if (text === "") {
      setBackColor( "red");
      setState("info is required");
      setUnderText("info is required");
      console.error("Info is required");
    }

    try {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append("info", text);
      formData.append("email", email);
  
      // Fetch API를 사용하여 요청 보내기
      const response = await fetch(`http://127.0.0.1:8000/post-info`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });
      const data = await response.json();
  
      //응답이 정상적으로 완료되면
      if (response.ok) {
        setUnderText("new_info : "+ text);
        console.log("response : ", data.status);
  
        // 버튼 색 바뀌기
        setBackColor("green");
        setState("success");
        setDelDisplay("block")
      }else{
        setBackColor("red");
        setState("wrong input");
        setUnderText("wrong input");
        console.error("wrong input");
      }
    } catch (error) {
      // 응답이 정상이 아닐 경우,
      // 버튼 색 바뀌기
      setBackColor("red");
      setState("connect error");
      setUnderText(error.toString());
      console.error("catch error : ", error);
    }
  }

  async function deleteButton(){
    let email = localStorage.getItem("email");
    console.log("email : ",email);

    // Fetch API를 사용하여 요청 보내기
   const response = await fetch(`http://127.0.0.1:8000/delete-info?email=${email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"email":email}),
  });

  //응답이 정상적으로 완료되면
  if (response.ok) {
    const data = await response.json();
    setUnderText(JSON.stringify(data.status));
    console.log("response : ", data.status);
    
    // 버튼 색 바뀌기
    setBackColor("green");
    setState("delete successfully");
    setDelDisplay("none");

  } else{
    setBackColor("red");
    setState("connect error");
    setUnderText("error");
    console.error("catch error ");
  }
}

  return (
    <div>
    <h1>데이터 입력 페이지</h1>
    <Typography sx={{marginBottom:3}}>로그인 되어있는 이메일: {email == '' ? 'NULL' : email}</Typography>
    <Typography>데이터 입력하여 DB에 등록: </Typography>
    <form>
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
    </form>
            <Card variant="contained" sx={{width:100, height:100,backgroundColor:backColor, borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <CardContent sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Typography 
                    sx={{fontSize:15, color:'white', fontWeight:'bold'}}
                    > {state} </Typography>
                </CardContent>
            </Card>

            <Box sx={{ marginTop:3, marginBottom:3}}>
            <Typography> {underText} </Typography></Box>

          <Box sx={{ marginBottom:3,p:1}}>
           <Button sx = {{display: delDisplay}}
            variant='contained'
            color='secondary'
            onClick={deleteButton}
            >데이터 삭제</Button>
         </Box>

            <Box component="span" sx={{ marginTop:3,p:1, border: '1px dashed grey' }}>
            <Link href='/' >메인페이지로 돌아가기</Link>
            </Box>


    </div>
  )
}

export default DataInput;
