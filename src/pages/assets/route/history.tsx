import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthenticated from "./auht";
import RoleContext from './role'
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const rolerigh = RoleContext ()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated() ) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/"
              }}
              
            />
            
          );
        }
      }}
    />
  );
};

export const AuhtdRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/index"
              }}
              
            />
            
          );
        }
      }}
    />
  );
};