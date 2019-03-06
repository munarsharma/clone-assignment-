import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from './components/homepage/MainPage';
import Footer from './components/footer';
import axios from 'axios';
import Auth from './userAuth/utils/Auth';
import UserDash from './components/Dashboard/UserDash';
// import AddNewPost from "./components/Dashboard/newPost";
import PrivateRoute from './userAuth/utils/AuthRouting';
//import Header from "./components/homepage/header";
// import "./App.css";
import AuthForm from './userAuth/login/AuthForm';
import UserProfileRoutes from './components/user/UserProfileRoutes';
import { connect } from 'react-redux';
// import ExploreContainer from "./containers/exploreContainer";
import { setLoggedInUser } from './actions/userActions';

const mapStateToProps = state => {
  return {
    currentUser: state.userReducers.currentUser,
    loggedIn: state.userReducers.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: userInfo => {
      dispatch(setLoggedInUser(userInfo));
    },
  };
};

class App extends Component {
  state = {
    isLoggedIn: false,
    username: '',
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = props => {
    axios.post('/users/isLoggedIn').then(user => {
      if (user.data.username === Auth.getToken()) {
        this.props.setCurrentUser(user.data);
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
                  isLoggedIn={isLoggedIn}
                />
              );
            }}

          />

          <PrivateRoute
            path="/dashboard"
            component={UserDash}
            logoutUser={this.logoutUser}
          />

          <PrivateRoute path="/user" component={UserProfileRoutes} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
