import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import UpperHeader from "../../components/UpperHeader";
import { Footer, Header } from "../../components";
import { TopMenu } from "../../components/Header/DemoHeader";


const ProtectedLayout = () => {
 
    const credential = useSelector((state) => state.credential.value);
    return <>
    
    <UpperHeader />
      <Header />
      {/* <TopMenu/> */}
    {!credential ? <Outlet /> : <Navigate to="/dashboard" />}
    
    
    <Footer />
    </>;


}

export default ProtectedLayout