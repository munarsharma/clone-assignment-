import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from './components/homepage/MainPage';
import Header from './components/header';
import Footer from './components/footer';
import axios from 'axios';
import Auth from './userAuth/utils/Auth';
import UserDash from './components/Dashboard/UserDash';
import PrivateRoute from './userAuth/utils/AuthRouting';

// import "./App.css";

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
    const { isLoggedIn } = this.state;
    return (
      <div className="mainContainer">
        <Header />

        <Switch>
          <Route
            path="/"
            render={() => {
              return (
                <MainPage
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}

          />
          <PrivateRoute path="/dashboard" component={UserDash} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

// <Route path="/auth" component={UserAuth} />
// <Route path="/signup" component={SignUp} />
// <Route path="/login" component={LogIn} />
