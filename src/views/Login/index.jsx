import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { update, logOut } from "../../features/slicer/credentialSlicer";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../services/useApi";
import { openSnackbar } from "../../features/slicer/snackbarSlicer";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const credential = useSelector((state) => state.credential.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signinMutation, signinMutationState] = useSigninMutation();

  const LoginFormik = useFormik({
    initialValues: { id: "", password: "" },
    validationSchema: Yup.object({
      id: Yup.string().required("ID is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await signinMutation({
          username: values.id,
          password: values.password,
        });
        dispatch(
          openSnackbar({
            message: "Successfully Logged in..",
            severity: "success",
          })
        );
        resetForm();
        navigate("/"); // Redirect to home page after successful login
      } catch (error) {
        dispatch(
          openSnackbar({ message: `Error: ${error}`, severity: "error" })
        );
      }
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
        style={{
          width: "200px",
          textAlign: "center",
          border: "solid 1px #bdbdbd ",
          padding: "10px",
        }}
      >
        <Typography variant="body3">Login</Typography>
        <TextField
          fullWidth
          id="id"
          name="id"
          label="ID *"
          value={LoginFormik.values.id}
          onChange={LoginFormik.handleChange}
          error={LoginFormik.touched.id && Boolean(LoginFormik.errors.id)}
          helperText={LoginFormik.touched.id && LoginFormik.errors.id}
          size="small"
          margin="dense"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password *"
          type="password"
          value={LoginFormik.values.password}
          onChange={LoginFormik.handleChange}
          error={LoginFormik.touched.password && Boolean(LoginFormik.errors.password)}
          helperText={LoginFormik.touched.password && LoginFormik.errors.password}
          size="small"
          margin="dense"
          variant="outlined"
        />
        <Button type="submit" disabled={signinMutationState.isLoading}>
          {signinMutationState.isLoading ? (
            <Typography>Logging in...</Typography>
          ) : (
            <Typography>Login</Typography>
          )}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;