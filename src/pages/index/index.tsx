import React from "react";
import{useState,useEffect} from "react";
import {  Divider, Grid,  } from "@mui/material";
import Navbar from "../assets/navbar/Navbar";
import Get from "../Api/users/Getuser";

  function  Index () {
  const [ btnpop ,setbtnpop] = useState(false);// register popup 
  const [ btnpopup ,setbtnpopup] = useState(false); // update user popup
  const [ timepop ,setbtimepop] = useState(false);// welcome popup

useEffect (() =>{
   setTimeout(()=>{
         setbtimepop(true);
   } ,3000);},
   []
);

        return(
<div>

     
  
          <Grid>
            <Get/>
          </Grid>

</div>


        )

    
    }
  
export default Index