// snackbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  severity: 'success',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      console.log('open',state, action);
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity || 'success';//error warning info success
    }, 
    closeSnackbar: (state) => {
      state.open = false;
      state.message = '';
      state.severity = 'success';
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;