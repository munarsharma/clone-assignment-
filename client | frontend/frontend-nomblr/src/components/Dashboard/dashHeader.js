import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import DashNavbar from "./dashNavbar";
import img from "../../logo1.png";

//add conditional rendering for nav button
//figure out how to use local logo file.

const DashHeader = () => {
  return (
    <>
      <header className="dash-header">
        <div id="logoSearch">
          <Link to="/">
            <img className="logo_pic" src={img} alt="img" />
          </Link>
          <SearchBar />
        </div>
        <DashNavbar />
      </header>
    </>
  );
};

export default DashHeader;
