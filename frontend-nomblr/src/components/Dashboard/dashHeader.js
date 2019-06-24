import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import DashNavbar from "./dashNavbar";
import img from "../../images/logo.png";

//add conditional rendering for nav button
//figure out how to use local logo file.

const DashHeader = ({ logoutUser, currentUser }) => {
  return (
    <>
      <header className="dash-header">
        <div id="leftside">
          <Link to="/dashboard">
            <img className="logo_pic" src={img} alt="img" />
          </Link>
          <SearchBar />
        </div>
        <div id="rightside">
          <DashNavbar currentUser={currentUser} logoutUser={logoutUser} />
        </div>
      </header>
    </>
  );
};

export default DashHeader;
