import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import dash from "../../images/dash.png";
import edit from "../../images/edit.png";
import logout from "../../images/logout.png";

const DashNavbar = ({ logoutUser, currentUser }) => {
  let currentUserId;
  if (currentUser) {
    let currentUserId = currentUser.id;
  }

  return (
    <nav className="dash-navbar">
      <div>
        <Link to="/dashboard" className="backBtn">
          <img className="nav-icon-img" src={dash} alt="Aa" />
        </Link>
      </div>
      <div>
        <Link to={`/users/${currentUserId}`} className="backBtn">
          <img className="nav-icon-img" src={profile} alt="Aa" />
        </Link>
      </div>
      <div>
        <Link to="/users/edit" className="backBtn">
          <img className="nav-icon-img" src={edit} alt="Aa" />
        </Link>
      </div>

      <div>
        <img
          className="nav-icon-img"
          src={logout}
          alt="Aa"
          onClick={logoutUser}
        />
      </div>
    </nav>
  );
};

export default DashNavbar;
