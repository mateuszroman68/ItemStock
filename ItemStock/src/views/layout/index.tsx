import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";


const Layout = ():JSX.Element => {

    return(
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
        )
}
export default Layout;