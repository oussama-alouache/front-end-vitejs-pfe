import { AppBar, Tabs,Tab, Toolbar, Typography, Button ,useTheme,useMediaQuery,TextField, ButtonBaseActions, ButtonBaseClasses, SxProps, TabClasses, Theme} from '@mui/material'
import React, { createContext } from 'react'
import { useState,useEffect } from 'react';
import DrawerComp from './Drawer';
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import profile from '../pictures/avatar.png'

import { TouchRippleProps, TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple';
import { CommonProps } from '@mui/material/OverridableComponent';
import UserContext from'./context'
import User1Context from '../../Api/users/Deleteuser'
import { Route, Routes, Outlet, useHistory } from "react-router-dom";
import Logoutuser from '../../Api/users/Deleteuser';
function Navbar  () {


    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const usersss = localStorage.getItem('users');
    const token = localStorage.getItem('token');
    const userlog = UserContext();
   
    const [user, setUserpic] = useState({
      image:"",
});
    const [users, setUsers] = useState({ users: []});
    const [value, setValue] = React.useState(0);
   let history = useHistory()

const CookieService = new Cookies();


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
       history.push("/")
        
            
             
          });
        }
      });
    }
   
useEffect(() => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept':'application/json',
        'Authorization': `Bearer ${token}` 
         }
     };
  async function getuserpic() {
     await axios ('http://localhost:8000/api/getuserpic',axiosConfig).then(response=>{
      setUserpic(response.data.user)
    
     
     }
     
     )
  
  }

  getuserpic();        
}, [])

function usernamelog (){
  const UserContext = createContext();
  console.log (usersss)
  return (
    <UserContext.Provider value={usersss}>
    <h1>{`Hello ${usersss}!`}</h1>
    </UserContext.Provider>
  )
  
}

    function LinkTab(props: JSX.IntrinsicAttributes & { href: string; } & { children?: null | undefined; classes?: Partial<TabClasses> | undefined; disabled?: boolean | undefined; disableFocusRipple?: boolean | undefined; icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined; iconPosition?: "bottom" | "top" | "end" | "start" | undefined; label?: React.ReactNode; sx?: SxProps<Theme> | undefined; value?: any; wrapped?: boolean | undefined; } & Omit<{ action?: React.Ref<ButtonBaseActions> | undefined; centerRipple?: boolean | undefined; children?: React.ReactNode; classes?: Partial<ButtonBaseClasses> | undefined; disabled?: boolean | undefined; disableRipple?: boolean | undefined; disableTouchRipple?: boolean | undefined; focusRipple?: boolean | undefined; focusVisibleClassName?: string | undefined; LinkComponent?: React.ElementType<any> | undefined; onFocusVisible?: React.FocusEventHandler<any> | undefined; sx?: SxProps<Theme> | undefined; tabIndex?: number | undefined; TouchRippleProps?: Partial<TouchRippleProps> | undefined; touchRippleRef?: React.Ref<TouchRippleActions> | undefined; }, "classes"> & CommonProps & Omit<Pick<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof React.AnchorHTMLAttributes<HTMLAnchorElement>> & { ref?: ((instance: HTMLAnchorElement | null) => void) | React.RefObject<HTMLAnchorElement> | null | undefined; }, "value" | keyof CommonProps | "label" | "tabIndex" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "icon" | "iconPosition" | "wrapped">) {
      return (
        <Tab
          component="a"
          onClick={(event) => {
            event.preventDefault();
          }}
          {...props}
        />
      );
    }
    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
      setValue(newValue);
    };
  return (
    <React.Fragment>
        <AppBar sx ={{background:"black"}}>
          <Toolbar>
            {isMatch ? (
                <>
                <Typography>
                    Navbar-mini
                 </Typography>
                 
                 <DrawerComp/>
                </>
            ) :(
                <>
                  <Typography>
                    Navbar
                 </Typography>
                 <Tabs  
                indicatorColor="secondary"
                textColor="inherit"
                value={value} onChange={handleChange}>
                <Tab label="index" href="index"      />
                <Tab label="register" href="register"      />
              
                 </Tabs>
            
              <Typography sx={{ marginLeft: "auto" }} >
                    {userlog}
                 </Typography>
                 <Avatar alt="Remy Sharp" src = {`http://127.0.0.1:8000/${user}`}  sx={{ marginLeft: "10px" }}/>
                 <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={logout}>
                logout
              </Button>    
                    </>     
            )}      
          </Toolbar> 
        </AppBar>
        <Toolbar/>
    </React.Fragment>
    
   
  )
}

export default Navbar