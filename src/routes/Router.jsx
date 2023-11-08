import * as React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";


import {Layout} from "../components";
import About from "../views/About/Index";


function Router() {


   

    let element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: "", element: <App /> },
                { path: "/about", element: <About /> },
                { path: "", element: <App /> },
                { path: "", element: <App /> },
               
            ]

        }

    ]);

    return element;

}

export default Router;