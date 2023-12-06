import { Button, Paper } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { update, logOut } from '../../features/slicer/credentialSlicer'
import { Navigate } from 'react-router-dom'
const Dashboard = () => {
    const dispatch = useDispatch();
    const logoutHandler=()=>{  
        dispatch(logOut());
       
        
      
    }
  return (


    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor:'green'
      }}
    >

        <div>Dashboard</div>
        <Button onClick={logoutHandler}>logout</Button>
    </Paper>
    
  )
}

export default Dashboard