import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1 id="h1"> Nomblr</h1>
        <div className="portal">
          <Link to="/signup" id="signuplink">
            Get Started
          </Link>
          <br />
          <Link to="/login" id="login">
            Log In
          </Link>

          <br />
        </div>
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
