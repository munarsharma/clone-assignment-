import React from "react";
import MainPage from "./MainPage";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"}> Home </Link>
        <br />
        <Link to={"/login"}> Login </Link>
        <br />
        <Link to={"/SignUp"}> signup </Link>
      </nav>
    </>
  );
};

export default NavBar;
