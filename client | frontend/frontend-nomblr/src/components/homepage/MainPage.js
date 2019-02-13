import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SignUp />

        <button id="signupButton">Get Started</button>
      </div>
    );
  }
}

export default MainPage;
//
// <Switch>
//   <Route exact path="/signup" component={SignUp} />
//   <br />
//   <Route path="/login" component={LogIn} />
// </Switch>;
