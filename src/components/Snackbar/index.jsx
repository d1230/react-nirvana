// ReusableSnackbar.js
import React from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';

const snackbar = ({ open, message, onClose, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical:'bottom', horizontal:'right' }}>
      <SnackbarContent
        sx={{ backgroundColor: severity === 'error' ? 'red' : 'green' }}
        message={message}
      />
    </Snackbar>
  );
};
 
export default snackbar