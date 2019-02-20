import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1 id="h1"> Nomblr</h1>
        <div className="portal">
          <Link to="/auth/signup" id="signuplink">
            Get Started
          </Link>
          <br />
          <br />
          <br />
          <Link to="/auth/login" id="login">
            Log In
          </Link>
          <br />
        </div>
      </div>
    );
  }
}

export default MainPage;

// <Switch>
//   <Route exact path="/signup" component={SignUp} />
//   <br />
//   <Route path="/login" component={LogIn} />
// </Switch>;
