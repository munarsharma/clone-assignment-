import React from "react";

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
      <form className="signupForms" onSubmit={registerUser}>
        <div id="btnContainer">
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
        </div>
        <input id="signupButton" type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default SignUp;
