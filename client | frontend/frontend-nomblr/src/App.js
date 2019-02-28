import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from './components/homepage/MainPage';
import Footer from './components/footer';
import axios from 'axios';
import Auth from './userAuth/utils/Auth';
import UserDash from './components/Dashboard/UserDash';
import PrivateRoute from './userAuth/utils/AuthRouting';
import Header from './components/homepage/header';
// import "./App.css";
import AuthForm from './userAuth/login/AuthForm';

class App extends Component {
  state = {
    isLoggedIn: false,
    username: '',
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.post('/users/isLoggedIn').then(user => {
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
    const { isLoggedIn } = this.state;
    return (
      <div className="mainContainer">
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route
            path="/auth"
            render={() => {
              if (isLoggedIn) {
                return <Redirect to="/dashboard" />;
              }

              return (
                <AuthForm
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={this.isLoggedIn}
                />
              );
            }}

          />
          <Route path="/dashboard" component={UserDash} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

//          <PrivateRoute path="/dashboard" component={UserDash} />
