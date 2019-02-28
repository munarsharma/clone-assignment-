import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Header from "./header";

// import Auth from "../../userAuth/utils/Auth";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn";

const MainPage = props => {
  return (
    <>
      <div className="main-page">
        <Header />
        <br />
        <div className="portal">
          <h1 id="h1"> Nomblr </h1>
          <button className="signup">
            {" "}
            <Link to="/auth/register" id="signuplink">
              {" "}
              get started{" "}
            </Link>{" "}
          </button>
          <br />
          <button className="signup">
            {" "}
            <Link to="/auth/login" id="signuplink">
              {" "}
              login{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
