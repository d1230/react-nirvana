import { Box, Button, CircularProgress, Paper, TextField, Typography } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { update, logOut } from "../../features/slicer/credentialSlicer";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../services/useApi";
import { openSnackbar } from "../../features/slicer/snackbarSlicer";
const Login = () => {
  
  const credential = useSelector((state) => state.credential.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signinMutation,signinMutationState] = useSigninMutation();

console.log('signinMutation',signinMutationState.isLoading);
  const LoginFormik = useFormik({
    initialValues: { id: "", password: "" },
    validationSchema: Yup.object({
      id: Yup.string().required("ID is Required"),//.email('Not proper email format'),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      //mock credential check
      try {
        await signinMutation({
        "username": "admin1",
        "password": "test@123"
    })
    dispatch(openSnackbar({'message':'Sucessfully Logged in..','severity':'success'}));

   } catch  (error) {
    console.error('Error updating user:', error);
        dispatch(openSnackbar({'message':`error:${error}`,'severity':'error'}));
   }
      
      // if (values.id === "1" && values.password === "1") {
      //   //dispatch(update("admin"));
      // }
      console.log(credential);
     // if (credential) navigate("/dashboard");
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
      <form
        onSubmit={LoginFormik.handleSubmit}
        style={{ width: "200px", textAlign: "center", border:'solid 1px #bdbdbd ',padding:'10px' }}
      >
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
        <Button type="submit" disabled={signinMutationState.isLoading}>     {signinMutationState.isLoading ? (
                    <Typography>Loginng in...</Typography>
                  ) : (
                    <Typography>Login</Typography>
                  )} </Button>
      </form>
    </Paper>
  );
};

export default Login;
