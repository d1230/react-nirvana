import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@mui/material";
import UpperHeader from "../UpperHeader";

const Layout = () => {
  return (
    <>
      <UpperHeader />
      
        
      

      <Header />
       
        <Suspense fallback={<>Loading</>}>
          <Outlet  />
        </Suspense>
        
      
      <Footer />
    </>
  );
};

export default Layout;
