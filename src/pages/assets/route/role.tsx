import axios from 'axios';
import React, { createContext, useState } from 'react'
 
async   function role() {
    


    const [role, setRole] = useState()
  
    const token = localStorage.getItem('token');
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept':'application/json',
            'Authorization': `Bearer ${token}` 
             }
         };
  
         await axios ('http://localhost:8000/api/getuserrole',axiosConfig).then(response=>{
            setRole(response.data.user)
         }
         
         )
      
      

 
}

export default role

