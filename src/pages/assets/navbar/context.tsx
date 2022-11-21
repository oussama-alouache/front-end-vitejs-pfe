import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
function usernamelog (){

  const usersss = localStorage.getItem('users');
console.log(usersss)
  return (
    <UserContext.Provider value={usersss}>
      {usersss}
  
    </UserContext.Provider>
  );
}

  export default usernamelog