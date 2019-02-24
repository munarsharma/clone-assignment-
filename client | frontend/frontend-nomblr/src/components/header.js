import React from "react";
import SearchBar from "./SearchBar";
// import { Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <img
          className="logo_pic"
          src="file:/D:/Desktop/nomblr/logo.png"
          alt=""
        />
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
