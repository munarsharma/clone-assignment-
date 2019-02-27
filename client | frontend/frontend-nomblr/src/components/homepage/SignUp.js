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
    <div className="signupContainer">
      <h1 id="h1"> Nomblr </h1>
      <div className="signupForms">
        <form onSubmit={registerUser}>
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
            type="text"
            name="email"
            placeholder="email"
            value={email}
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
          <input id="submitBtn" type="submit" value="signup" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
