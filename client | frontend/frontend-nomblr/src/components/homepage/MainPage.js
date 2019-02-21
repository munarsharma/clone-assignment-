import React from 'react';

import { Route, Link } from 'react-router-dom';

import Header from '../header';
import AuthForm from '../../userAuth/login/AuthForm';
// import Auth from "../../userAuth/utils/Auth";
// import SignUp from "./SignUp";
// import LogIn from "./LogIn";

const MainPage = props => {
  return (
    <div className="main-page">
      <div>
        <div />

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
      <div className="portal">
        <button className="signup">
          {' '}
          <Link to="/auth/register" id="signuplink">
            {' '}
            get started{' '}
          </Link>{' '}
        </button>
        <br />
        <button className="signup">
          {' '}
          <Link to="/auth/login" id="signuplink">
            {' '}
            login{' '}
          </Link>{' '}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
