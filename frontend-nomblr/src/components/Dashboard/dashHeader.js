import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import DashNavbar from "./dashNavbar";
import img from "../../images/logo.png";

//add conditional rendering for nav button
//figure out how to use local logo file.

const DashHeader = ({ logoutUser }) => {
  return (
    <>
      <header className="dash-header">
        <div id="logoSearch">
          <Link to="/dashboard">
            <img className="logo_pic" src={img} alt="img" />
          </Link>
          <SearchBar />
        </div>
        <DashNavbar logoutUser={logoutUser} />
      </header>
    </>
  );
};

export default DashHeader;
