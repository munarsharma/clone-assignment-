import React from "react";
import { Link } from "react-router-dom";

const DashNavbar = () => {
  return (
    <nav className="dash-navbar">
      <div>
        <Link to="/dashboard">
          <img className="home_nav" src="" alt="home" />
        </Link>
      </div>
      <div>
        <Link to="/explore">
          <img className="explore_nav" src="" alt="explore" />
        </Link>
      </div>
      <div>
        <Link to="/userActivity">
          <img className="userAct_nav" src="" alt="user activity" />
        </Link>
      </div>
      <div>
        <Link to="/account">
          <img className="account_nav" src="" alt="account" />
        </Link>
      </div>
    </nav>
  );
};

export default DashNavbar;
