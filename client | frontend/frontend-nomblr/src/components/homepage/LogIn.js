import React from 'react';
// import { withRouter } from "react-router";
const LogIn = ({
  match,
  username,
  password,
  email,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange,
}) => {
  return (
    <div className="signupContainer">
      <h1 id="h1"> Nomblr </h1>
      <div className="signupForms">
        <form onSubmit={loginUser}>
          <input
            id="signupBtn"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
          />
          <br />
          <input
            id="signupBtn"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
          <br />

          <input id="submitBtn" type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
