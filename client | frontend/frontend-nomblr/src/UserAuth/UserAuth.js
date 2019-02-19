import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Users from './users/Users';
import AuthForm from './login/AuthForm';
import Auth from './utils/Auth';
import PrivateRoute from './utils/AuthRouting';

class UserAuth extends Component {
  state = {
    isLoggedIn: false,
    user: '',
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get('/users/isLoggedIn').then(user => {
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken(),
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post('/users/logout')
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              return (
                <AuthForm
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}

          />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </div>
    );
  }
}

export default App;
