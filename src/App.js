import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Input, Space ,Checkbox} from 'antd';

function App() { 
 const [strlength, setLength]= useState(8);
 const [numberAllowed,setNumberAllowed] = useState(false);
 const [charaterAllowed,setCharaterAllowed] = useState(false);
 const [password,setPassword]= useState("");
 const passwordRef = useRef(null);
 const copyToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
 },[password]);
   const passwordGenerator = useCallback(()=>{
           let password = "";
           let string= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
           if(numberAllowed) string+="0123456789";
           if(charaterAllowed) string+="~`!@#$%^&*(){}:;>,?/|'_+-=";
           for(let i =1; i<=strlength;i++){
          let indexChara= Math.floor(Math.random()*string.length +1);
        password += string.charAt(indexChara);
           }
          setPassword(password);
  },[strlength,numberAllowed,charaterAllowed,setPassword])
 useEffect(()=>{passwordGenerator()},[strlength,numberAllowed,charaterAllowed]);
 
  return (
    <div className='App container flex flex-col   p-20 '>
      <div >
    <Space.Compact
      style={{
        width: '50%',
      }}
    >
     <Input type='text' value={password} ref={passwordRef} readOnly />
      <Button type="primary" className="bg-blue-500 " onClick={copyToClipBoard}>Copy</Button>
   </Space.Compact>
   </div>
      <div className='p-4' >
    <Space.Compact
      style={{
        width: '40%',
      }}
    >
     <Input type="range" value={strlength} onChange={(event)=>{setLength(event.target.value)}}  /><label>Length{strlength}</label> 
     
       <Checkbox className='ml-2' checked={numberAllowed} onChange={ ()=>{setNumberAllowed((prev)=>!prev)}}>Number</Checkbox>
      <Checkbox  checked={charaterAllowed} onChange={()=>{
        setCharaterAllowed((prev)=>!prev)
      }}>Cahracter</Checkbox>
      
  
   </Space.Compact>
   </div>
   </div>
  );
}

 export default App;
