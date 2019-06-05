import React from "react";
import { Link } from "react-router-dom";

const ProfileMainNav = ({ logoutUser }) => {
  return (
    <nav className="dash-navbar">
      <div>
        <Link to="/dashboard" className="backBtn">
          <i className="material-icons">bookmark_border</i>
        </Link>
      </div>

      <div>
        <Link to="/new/photo" className="backBtn">
          <i className="material-icons">account_circle</i>
        </Link>
      </div>
      <div>
        <button id="logoutBtn" onClick={logoutUser} type="submit">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default ProfileMainNav;
