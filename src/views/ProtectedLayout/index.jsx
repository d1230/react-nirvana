import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import UpperHeader from "../../components/UpperHeader";
import { Footer, Header } from "../../components";


const ProtectedLayout = () => {
 
    const credential = useSelector((state) => state.credential.value);
    return <>
    
    <UpperHeader />

      <Header />
    {!credential ? <Outlet /> : <Navigate to="/dashboard" />}
    
    
    <Footer />
    </>;


}

export default ProtectedLayout