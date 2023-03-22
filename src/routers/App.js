import { ButtonGroup, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './App.css';
import * as React from 'react';
import TextInput from '../components/TextInput';

function App() {
  return (
    <div className="App">
      <h1>이메일을 사용하여, 해당 계정에 정보가 있는지 확인</h1>
      <TextInput />

      <div>
      <Button 
      variant='contained'
      color = "primary"
      className='circleButton'
      shape = "circle"
      sx ={{
        borderRadius: "50%",
        backgroundColor: "black",'&:hover':{backgroundColor: "darkgray"}
      }}
      >Processing</Button>
      </div>
<ButtonGroup varieant = "contained" aria-label = "outlined primary button group">
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
    </div>
  );
}

export default App;
