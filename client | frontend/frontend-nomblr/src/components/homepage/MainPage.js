import React from "react";

import { Route, Link } from "react-router-dom";

import AuthForm from "../../userAuth/login/AuthForm";
// import Auth from "../../userAuth/utils/Auth";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn";

const MainPage = props => {
  return (
    <div>
      <div>
        <Route
          path="/auth"
          render={() => {
            return (
              <AuthForm
                checkAuthenticateStatus={props.checkAuthenticateStatus}
                isLoggedIn={props.isLoggedIn}
              />
            );
          }}
        />
      </div>
      <br />
      <button>
        {" "}
        <Link to="/auth/register"> get started </Link>{" "}
      </button>
      <br />
      <button>
        {" "}
        <Link to="/auth/login"> login </Link>{" "}
      </button>
    </div>
  );
};

export default MainPage;
