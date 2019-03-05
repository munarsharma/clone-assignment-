import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (
    <nav className="profile-navbar">
      <div>
        <Link to="/blog/posts" id="profileNavLink">
          Posts
        </Link>
      </div>
      <div>
        <Link to="/blog/likes" id="profileNavLink">
          Likes
        </Link>
      </div>
      <div>
        <Link to="/blog/followers" id="profileNavLink">
          Likes
        </Link>
      </div>
      <div>
        <Link to="/blog/archive" id="profileNavLink">
          Archive
        </Link>
      </div>
    </nav>
  );
};

export default ProfileNav;
