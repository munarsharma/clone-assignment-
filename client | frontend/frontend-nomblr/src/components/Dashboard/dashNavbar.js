import React from 'react';
import { Link } from 'react-router-dom';

const DashNavbar = ({ logoutUser }) => {
  return (
    <nav className="dash-navbar">
      <div>
        <Link to="/dashboard">
          <img className="home_nav" src="" alt="home" />
        </Link>
      </div>
      <div>
        <Link to="/dashboard/explore">
          <img className="explore_nav" src="" alt="explore" />
        </Link>
      </div>
      <div>
        <Link to="/userActivity">
          <img className="userAct_nav" src="" alt="user activity" />
        </Link>
      </div>
      <div>
        <Link to="/user">
          <img className="profile_nav" src="" alt="userpage" />
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

export default DashNavbar;
