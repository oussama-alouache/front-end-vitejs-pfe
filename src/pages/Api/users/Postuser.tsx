import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import Divider from '@mui/material/Divider';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
function Postuser () {
   const theme = createTheme();


    const[errors,setErrors] = useState({
        fname:'',
        email:'',
        password:'',
        cpassword:'',
        role:"",
        successMsg:''
    });

    const [user, setUser] = useState({
        name: "",
        email: "",
        password:"",
        c_password:"",
        role:"",
        image:"",
       
      });
   
      
      const {name, email,password,c_password, image,role,} = user;
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
     
    
  
   async function  signup()
       {
        
   
    
      await axios({
        method: 'post', 
        url: 'http://localhost:8000/api/register',
        data: user,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      
        .then(function(response) {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            
          }).then(function(){
            window.location.reload()

          })
         
      })


  .catch(function(errors) {
      console.log(errors);
  })
  
}

    
    return(
                   
    
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box >
            <TextField
              margin="normal"
              required
              fullWidth
              label="User name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={e => onInputChange(e)} value={name}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => onInputChange(e)} value={email}
            />
             <TextField
             margin="normal"
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
              autoFocus
              onChange={e => onInputChange(e)} value={password}
            />
             <TextField
 margin="normal"
 required
 fullWidth
 name="c_password"
 label="confirme your Password"
 type="password"
 id="password"
              autoFocus
              onChange={e => onInputChange(e)} value={c_password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="role"
              label="role"
              type="role"
              autoComplete="role"
              autoFocus
              onChange={e => onInputChange(e)} value={role}            />
              
              <input
              type="file"
              name='image'
              onChange={e => onInputChange(e)} value={image}    
              ></input>
              

            <Button
              type="submit"
              fullWidth
              onClick={signup}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
               register
            </Button>
         
                
           
           
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
     




    )
}

export default Postuser