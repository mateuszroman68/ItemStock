import React from "react";
import { Outlet, Link } from "react-router-dom";




const Header = ():JSX.Element => {


  const linkStyles = "text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 font-mono m-4"

  return (
    <>
       <nav className="font-sans flex text-center flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full bg-slate-200">
          <div className="mb-2 sm:mb-0 flex flex-row m-2  " >
              <Link  to="/">  <img className="w-10 h-10 m-2" src="https://as2.ftcdn.net/v2/jpg/04/19/29/97/1000_F_419299735_tyBavNdpZB93rhxOXw4dkqa9h0UlRJRA.jpg"/> </Link>
              <Link  to="/user"><img className="w-10 h-10 m-2" src="https://image.shutterstock.com/image-vector/user-vector-icon-profile-symbol-260nw-1114651568.jpg"/> </Link>
            </div>
        <div>
          <Link className={linkStyles} to="/category">All Items</Link>
          <Link className={linkStyles} to="/two">Contact</Link>
          <Link className={linkStyles} to="/three">FAQ</Link>
          <Link className={linkStyles} to="/user">Log In</Link>
          
        </div>
      </nav>
    </>

  )
};

export default Header;