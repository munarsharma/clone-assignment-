import React from 'react';
import { Link } from 'react-router-dom';

const MainNavBar = () => {
  return (
    <nav className="main-navbar">
      <div>
        <button className="navBtn">
          {' '}
          <Link to="/auth/login" id="navLink">
            Log in
          </Link>
        </button>
      </div>
      <div>
        <button className="navBtn">
          <Link to="/auth/register" id="navLink">
            Sign up
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default MainNavBar;
