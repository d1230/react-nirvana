import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@mui/material";
import UpperHeader from "../UpperHeader";
import { useSelector, useDispatch } from 'react-redux';
import ReusableSnackbar from '../Snackbar/index';
import { closeSnackbar } from '../../features/slicer/snackbarSlicer';
const Layout = () => {
  const { open, message, severity } = useSelector((state) => state.snackbar);
  //const info = useSelector((state) => state.snackbar);
  
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    dispatch(closeSnackbar());
  };
  return (
    <>


      <Suspense fallback={<>Loading</>}>
        <Box sx={{ margin: "0px" }}>
          <Outlet />
          
        </Box>

      </Suspense>

    <Box>
      {/* Your main layout content */}
      <ReusableSnackbar
    
        open={open}
        message={message}
        severity={severity}
        onClose={handleCloseSnackbar}
      />
    </Box>
    </>
  );
};

export default Layout;
