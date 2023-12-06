import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./routes/Router";
import './main.css';
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter></Provider>
    </ThemeProvider>
  </React.StrictMode>
);
