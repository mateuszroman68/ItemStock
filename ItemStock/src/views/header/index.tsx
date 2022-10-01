import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = ():JSX.Element => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">All Items</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;