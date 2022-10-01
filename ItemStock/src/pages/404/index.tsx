import React from "react";
import { Outlet, Link } from "react-router-dom";


const NoPage = () => {
 return (
     <div>
         <h1>Page not found err:404 </h1>

         <Link to="/">Home</Link>
     </div>
 )
}


export default NoPage;