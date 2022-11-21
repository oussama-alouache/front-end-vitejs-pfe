import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Copyright from '../assets/footer/Footer';
import HandleCookies from '../cookies/Getcookies';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function Loginv2() {
   
 const theme = createTheme();
 const [data,setData] = useState({
  username:"",
  password:""
})


const {username,password} = data;

const changeHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]});
}

   const [isChecked, setisChecked] = useState(false)

    async  function login (){
      
        console.log(data);
            const response = await axios.post("http://localhost:8000/api/login",
            (data));
            if (response) {
              let tokenFrom = response.data.access_token;
              let token = response.data.access_token;
              localStorage.setItem("token",token);
            console.log  (response.data.access_token)
             HandleCookies  (response, isChecked);
          
           
            let axiosConfig = {
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  'Accept':'application/json',
                  'Authorization': `Bearer ${tokenFrom}` 
                   }
               };
           axios.get('http://localhost:8000/api/getuser',axiosConfig).then(
              (response)=>{
                  console.log(response.data.name)
                  let userName = response.data.name;
                  console.log(tokenFrom)
                  localStorage.setItem("users",userName);
              }
             )
            }



        }

  

    
  return (
    <div>

    <form >
    <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
    <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
    <input type="submit" onClick={login} name="submit"/>
    </form>
   
  </div>

  )
}

export default Loginv2

