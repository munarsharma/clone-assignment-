import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

import img from "../../images/logo.png";
import ProfileMainNav from "./profileMainNav";

//add conditional rendering for nav button
//figure out how to use local logo file.

const ProfileHeader = ({ logoutUser }) => {
  return (
    <>
      <header id="profile-header">
        <div id="logoSearch">
          <Link to="/dashboard">
            <img className="logo_pic" src={img} alt="img" />
          </Link>
          <SearchBar />

          <ProfileMainNav />
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
