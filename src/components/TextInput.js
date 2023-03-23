import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function TextInput(props){
    const [email,setEmail] = useState('');

    function handleInputText(event){
        setEmail(event.target.value)
    }

    

    const handleSubmit=()=>{
        if(email === ""){
            console.log("email is empty")
            // 버튼 빨간색으로 변환
        }

    }

    return(
    <form >
      <p>로그인된 이메일 : </p> 

    <TextField 
        id="inputText" 
        label="email" 
        placeholder='input email'
        variant="outlined"
        size = "small" 
        value = {email}
        onChange={handleInputText}
        />
        
    <Button 
        variant='contained' 
        type="submit" 
        style={{"marginTop": "10px"}}
        onClick={handleSubmit}
        >조회</Button>
    </form>
    )
   
}