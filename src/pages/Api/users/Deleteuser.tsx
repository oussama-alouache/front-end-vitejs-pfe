import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
let history =useHistory()
const CookieService = new Cookies();
function logoutuser (){

useEffect(() => {
  const logout =  (e:any,id: any) => {
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
      const res = axios.get(`http://127.0.0.1:8000/api/logout`)
        .then(res => {
          localStorage.removeItem("users")
          CookieService.remove("access_token", res.data.access_token)
     
    
        
         
      });
    }
  });
}


}, )




}
export default  logoutuser 
  


