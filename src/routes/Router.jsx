
import { useRoutes } from "react-router-dom";
import {Layout} from "../components";
import Home from "../views/Home";
import React from "react";



function Router() {


   
    const Services = React.lazy(() => import("../views/Services"));
    const Clients = React.lazy(() => import("../views/Clients"));
    const JobSeekers = React.lazy(() => import("../views/JobSeekers/JobSeekers"));
    const Contact = React.lazy(() => import("../views/Contact"));
    const About = React.lazy(() => import("../views/About"));

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
            ]

        }

    ]);

    return element;

}

export default Router;