
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";


const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<>Loading</>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>

    )
}

export default Layout