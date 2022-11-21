import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CardContent, CardMedia } from '@mui/material';
function Edituser () {
  const theme = createTheme();
const [allUsers, setAllUsers] = useState([]);
const [
  user, setUsers] = useState({
   name: '' ,
   email:'',
   role:'',
   image:''
  });

const { id } = useParams();
const {name, email,role} = user;
const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setUsers({ ...user, [e.target.name]: e.target.value });
};


useEffect(() => {
  async function getuser() {


    await axios.get(`http://127.0.0.1:8000/api/edit-user/${id}`)
     .then(response=>{
      
      setUsers(response.data.user)
      console.log( response.data)
      console.log( response.data.user.image)

     }
     
     )
  
  }

  getuser();        
}, [])


async function  modif()
{

  await axios.put(`http://127.0.0.1:8000/api/update-user/${id}`,user)
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
                   
    <div className="register-form">
   
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
          <CardMedia
        component="img"
        alt="green iguana"
        width="500"
        image ={user.image}/>
  
          <Box >
            <TextField
              margin="normal"
              fullWidth
              id='name'
              label="User name"
              name="name"
              autoComplete="name"
               onChange={e => onInputChange(e)} value={user.name}
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
              value={user.email}
              onChange={e => onInputChange(e)}
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
              value={user.role}
              onChange={e => onInputChange(e)}
             
                />
               
              

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={modif}
            >
               register
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
               
               
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
   
  </div>



    )
}

export default Edituser 

function setFirstName(first_name: any) {
  throw new Error('Function not implemented.');
}

