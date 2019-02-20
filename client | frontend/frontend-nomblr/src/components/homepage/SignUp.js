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
      <h1> Nomblr </h1>

      <form onSubmit={registerUser}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
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

export default SignUp;
