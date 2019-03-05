import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (
    <nav className="profile-navbar">
      <div>
        <Link to="/user/posts" id="profileNavLink">
          Posts
        </Link>
      </div>
      <div>
        <Link to="/user/likes" id="profileNavLink">
          Likes
        </Link>
      </div>
      <div>
        <Link to="/user/followers" id="profileNavLink">
          Likes
        </Link>
      </div>
      <div>
        <Link to="/user/archive" id="profileNavLink">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNav;
