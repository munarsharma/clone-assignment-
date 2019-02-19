import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./homepage/navbar";
import { Route } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="mainheader">
        <Route component={NavBar} />
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
