import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux'
import { update, logOut } from '../../features/slicer/credentialSlicer'
import { Navigate } from "react-router-dom";

const Login = () => {

  const credential = useSelector(state => state.credential.value)
  const dispatch = useDispatch()

  const LoginFormik = useFormik({
    initialValues: { id: "", password: "" },
    validationSchema: Yup.object({
      id: Yup.string().required("ID is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      //mock credential check
      if(values.id==='1' && values.password==='1'){
        dispatch(update('admin'));
        

      }console.log(credential);
      if(credential) Navigate('/dashboard');
      resetForm({ values: "" });
    },
  });
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
      <form onSubmit={LoginFormik.handleSubmit} style={{ width: "200px", textAlign:'center' }}>
        <Typography variant="body3">Login</Typography>
        <TextField
        fullWidth
        id="id"
              name="id"
              label="id *"
          value={LoginFormik.values.id}
          onChange={LoginFormik.handleChange}
          error={LoginFormik.touched.name && Boolean(LoginFormik.errors.id)}
          helperText={LoginFormik.touched.id && LoginFormik.errors.id}
          size="small"
          margin="dense"
          variant="outlined"
        ></TextField>
        <TextField
        fullWidth
        id="password"
              name="password"
              label="password *"
          value={LoginFormik.values.password}
          onChange={LoginFormik.handleChange}
          error={
            LoginFormik.touched.name && Boolean(LoginFormik.errors.password)
          }
          helperText={
            LoginFormik.touched.password && LoginFormik.errors.password
          }
          size="small"
          margin="dense"
          variant="outlined"
          
          
        ></TextField>
        <Button type='submit'>Login</Button>
      </form>
    </Paper>
  );
};

export default Login;
