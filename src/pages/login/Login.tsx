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
import {createContext, useState} from 'react';
import axios from 'axios';
import HandleCookies from '../cookies/Getcookies';
import Swal from 'sweetalert2';
import React, { Component } from "react";

import Copyright from '../assets/footer/Footer';
import { Redirect, Route } from 'react-router-dom';
import isAuthenticated from '../assets/route/auht';


  class Login extends Component  {

     theme = createTheme();
  
  state = {
    username: "",
    password: "",
    isChecked: false,
  };

  async handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const postData = {
      username: this.state.username,
      password: this.state.password,
    };





    const response = await axios.post("http://localhost:8000/api/login",
    (postData));
    if (response) {
      let tokenFrom = response.data.access_token;
      let token = response.data.access_token;
     
      localStorage.setItem("token",token);
      // console.log(response.data.access_token)
     HandleCookies  (response, this.state.isChecked);

   
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
          localStorage.setItem("users",userName);
          this.props.history.push("/index");
          
      }
     )
    
       
       
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    }).then(() =>{
 
  
     
    
    

    })
    }
    else{ 
      Swal.fire({
        icon: 'success',
        title: 'bad',
        showConfirmButton: false,
        timer: 1500
      })

      
    }
 
 }

 handleChecked() {
  this.setState({ isChecked: !this.state.isChecked });

}
 

   render () {

    const { isChecked,
      username, password} = this.state;

    return(
      
      <div className="login-page">

          <ThemeProvider theme={this.theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" onSubmit={(event) => this.handleFormSubmit(event)} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="user name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={username} onChange={(event) => this.setState({ username: event.target.value })} />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password} onChange={(event) => this.setState({ password: event.target.value })} />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    onChange={() => this.handleChecked()}
                    checked={isChecked}
                    label="Remember me" />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}

                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 4, mb: 4 }} />
            </Container>
          </ThemeProvider>

        </div>
    )
   }
  

  };

export default Login;