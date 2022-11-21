import axios from "axios";
import { AppBar, Tabs,Tab, Toolbar, Typography, Button ,useTheme,useMediaQuery,TextField} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect, MouseEvent, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import {  Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Swal from 'sweetalert2'
import profile from'../../assets/pictures/avatar.png';
import { Link } from "react-router-dom";

 function Get (){

const [allUsers, setAllUsers] = useState([]);
const [users, setUsers] = useState({ users: [] });
const [ get ,setGet] = useState(false);// logout popup
 
useEffect(() => {
    async function getuser() {
       await axios ("http://127.0.0.1:8000/api/users").then(response=>{
        setAllUsers(response.data)
        setUsers(response.data)
        console.log( response.data)
       
       }
       
       )
    
    }

    getuser();        
}, [])




 async function deleteuser   ( e: any , id: any){
   e.preventDefault();
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
 })
 .then(result  => {
   if (result.isConfirmed) {
     const res = axios.delete(`http://127.0.0.1:8000/api/delete-user/${id}`)
       .then(res => {
         Swal.fire({
           title: "Done!",
           text: "user is deleted",
           icon: "success",
         //  button: true
         }).then(function(){
           window.location.reload()

         })
        
     });
   }
 });
 
 }


return(
 <div>
   
   <Grid container spacing={5} > 
  
   {users.users.map((user: {
     image: string | undefined; id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; role: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; 
})=>(
        <Grid item  key={user.id}>
        <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        width="500"
        image ={`http://127.0.0.1:8000/${user.image}`}/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {user.name}
        </Typography>
        <Typography gutterBottom  component="div">
        {user.email}
        </Typography>
       
        <Typography  >
          {user.role}
        </Typography>
      </CardContent>
      <CardActions    >
      <Link
      
                to={`edituser/${user.id}`}
               
                
              >
                   <Button variant="contained" color="success">
                   <EditIcon/>
   </Button>
             
              </Link>


        <Button variant="contained" color="warning"  sx={{ marginLeft:"auto" }}   onClick={(e)=> deleteuser(e,user.id)} ><DeleteIcon/></Button>

      </CardActions>
    </Card>
 

        </Grid>
   ))}
  
    
  </Grid>
  </div>
  
   
 
     
)
 }
 export default Get