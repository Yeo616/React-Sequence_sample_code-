import { TextField, Button, useThemeProps } from "@mui/material";
import React from "react";

export default function TextInput(props){


    return(
    <div>
      <p>로그인된 이메일 : </p> 

    <TextField 
        id="inputText" 
        label="email" 
        placeholder='input email'
        variant="outlined"
        size = "small" />
        
    <Button 
        variant='contained' 
        style={{"marginTop": "10px"}}
        onClick={props.onClick}
        >조회</Button>
    </div>
    )
   
}