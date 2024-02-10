import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom';

const useAuth= () =>{
    const user = {loggedIn: false}
    return user && user.loggedIn;
}   

const Success = () => {
  const isAuth = useAuth();
  return  <Outlet/>;
}

export default Success