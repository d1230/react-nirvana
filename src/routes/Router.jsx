
import { Navigate, useRoutes } from "react-router-dom";
import {Layout} from "../components";
import Home from "../views/Home";
import React from "react";
import { useSelector } from "react-redux";
import PrivateLayout from "../views/PrivateLayout";



function Router() {

    const credential = useSelector(state => state.credential.value)
   
    const Services = React.lazy(() => import("../views/Services"));
    const Clients = React.lazy(() => import("../views/Clients"));
    const JobSeekers = React.lazy(() => import("../views/JobSeekers/JobSeekers"));
    const Contact = React.lazy(() => import("../views/Contact"));
    const About = React.lazy(() => import("../views/About"));
    const Login = React.lazy(() => import("../views/Login"));
    const Dashboard = React.lazy(() => import("../views/Dashboard"));

    let element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: "/", element: <Home />  },
                { path: "about", element: <About /> },
                
                { path: "clients", element: <Clients /> },
                { path: "jobseekers", element: <JobSeekers /> },
                { path: "services", element: <Services /> },
                { path: "contact", element: <Contact /> },
                { path: "login", element: credential ? <Navigate to="/dashboard" /> : <Login />},
                // { path: "dashboard", element: credential ? <Dashboard /> : <Navigate to="/login" />, },
            ]

        },
        {
            path: '/',
            element: <PrivateLayout />,
            children: [
              { path: 'dashboard', element:credential ? <Navigate to="/dashboard" /> : <Login /> },
            //   { path: '/users', element: <Users /> },
              // Add more child routes as needed
            ],
          },
        

    ]);

    return element;

}

export default Router;