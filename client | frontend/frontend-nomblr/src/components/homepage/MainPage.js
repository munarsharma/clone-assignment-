import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SignUp />
        <br />
        <LogIn />
      </div>
    );
  }
}

export default MainPage;
