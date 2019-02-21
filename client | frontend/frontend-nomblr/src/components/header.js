import React from "react";
import SearchBar from "./SearchBar";
// import { Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
