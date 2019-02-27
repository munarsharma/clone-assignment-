import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import mainNavBar from "./mainNavbar";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <Link to="/">
          <img className="logo_pic" src="" alt="img" />
        </Link>
        <SearchBar />

        <mainNavBar />
      </header>
    </>
  );
};

export default Header;
