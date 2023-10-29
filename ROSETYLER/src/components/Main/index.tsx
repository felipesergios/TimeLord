import React from 'react'
import { Box } from '@chakra-ui/react';
import {Outlet} from 'react-router-dom'
import NavBar from '../NavBar'
import {isAuthenticated} from '../../services/auth'

export default function MainPage(){

  const authenticated = isAuthenticated()
  if (!authenticated) {
    return (
      <Box textAlign="center" py={10} px={6} >
        <Outlet />
      </Box>
    );
  }

  return (
    <>
    <NavBar>
      <Outlet />
    </NavBar>
    
    </>
   
  );
  
    
}