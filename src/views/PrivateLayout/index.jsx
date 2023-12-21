import React, { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const PrivateLayout = () => {
  
  const credential =useSelector((state) => state.credential.value);
  return <>{credential ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateLayout;
