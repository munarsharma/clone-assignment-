import React from "react";
import Header from "./header";

const SignUp = ({
  username,
  password,
  email,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  return (
    <div className="signupPage">
      <Header />
      <div className="signupContainer">
        <h1 className="h1"> Nomblr </h1>
        <div className="signupForms">
          <form onSubmit={registerUser}>
            <input
              className="signupBtn"
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleChange}
            />
            <br />

            <input
              className="signupBtn"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
            <br />

            <input
              className="signupBtn"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />

            <br />
            <input className="submitBtn" type="submit" value="signup" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
