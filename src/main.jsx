import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./routes/Router";
import './main.css';

import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
import  {persistor} from './store/store';
import store from './store/store';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      
       </PersistGate> 
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
