import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <img
          alt="Nirvana Enterprises"
          src="https://www.nirvanaenterprises.com/wp-content/uploads/nirvana-enterprises-logo-white.png"
          title="Nirvana Enterprises"
          width="120"
          height="30"
        />
      </Box>
      <CircularProgress />
    </Box>
  );
};

export default Loader;