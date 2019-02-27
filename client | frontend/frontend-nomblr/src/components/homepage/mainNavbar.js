import React from "react";
import { Link } from "react-router-dom";

const mainNavBar = () => {
  return (
    <>
      <div className="main-navbar">
        <button className="navBtn">
          {" "}
          <Link to="/auth/login">Log In</Link>
        </button>

        <button className="navBtn">
          <Link to="/auth/register">Sign up</Link>
        </button>
      </div>
    </>
  );
};

export default mainNavBar;
