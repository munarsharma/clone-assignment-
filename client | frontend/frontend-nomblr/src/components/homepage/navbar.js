import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}> Home </Link>
      </nav>
    </>
  );
};

export default NavBar;

// <br />
// <Link to={"/login"}> Login </Link>
// <br />
// <Link to={"/SignUp"}> signup </Link>
