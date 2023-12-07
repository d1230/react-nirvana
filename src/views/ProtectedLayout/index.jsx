import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";


const ProtectedLayout = () => {
 
    const credential = useSelector((state) => state.credential.value);
    return <>{!credential ? <Outlet /> : <Navigate to="/dashboard" />}</>;

}

export default ProtectedLayout