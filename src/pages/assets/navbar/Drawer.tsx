import React, { useContext, useState } from "react";
import {
    Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import logoutContext from '../../Api/users/Deleteuser'
import UserContext from './context'
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];


function DrawerComp () {
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = UserContext();
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
       
        
      >
        <List style={{maxHeight: '100%', overflow: 'auto'}} sx ={{background:" black"}}>
          
            <ListItemButton sx={{marginTop:"auto"}}>
              <ListItemIcon>
                <ListItemText style={{ color: '#FFFFFF' }} >
                {user}
           
                <ListItemButton sx={{ marginTop:"auto" }} variant="contained"  >
                logout
              </ListItemButton>
              <Divider  sx ={{background:" white"}} />
              <ListItemButton sx={{ marginTop:"100 px"}} variant="contained" >
              creat a new user
                </ListItemButton>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
