import React from "react";
// import { withRouter } from "react-router";
const LogIn = ({
  match,
  username,
  password,
  email,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  return (
    <div>
      <h1 id="h1"> Nomblr</h1>
      <form onSubmit={loginUser}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />

        <input id="signupButton" type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default LogIn;
