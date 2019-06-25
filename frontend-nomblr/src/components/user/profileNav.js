import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = props => {
  return (
    <nav className="profile-navbar">
      <div className="navLinks">
        <Link to={`/users/${props.id}`} className="profileNavLink">
          Posts
        </Link>
      </div>

      <div className="navLinks">
        <Link to={`/users/${props.id}/likes`} className="profileNavLink">
          Likes
        </Link>
      </div>

      <div className="navLinks">
        <Link to={`/users/${props.id}/archive`} className="profileNavLink">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNav;
