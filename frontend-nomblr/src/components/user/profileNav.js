import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <nav className="profile-navbar">
      <div className="navLinks">
        <Link to="/user/posts" className="profileNavLink">
          Posts
        </Link>
      </div>

      <div className="navLinks">
        <Link to="/user/likes" className="profileNavLink">
          Likes
        </Link>
      </div>

      <div className="navLinks">
        <Link to="/user/archive" className="profileNavLink">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNav;
