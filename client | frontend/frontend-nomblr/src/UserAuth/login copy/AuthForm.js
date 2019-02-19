import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";
import SignUp from "../../components/homepage/SignUp";
import LogIn from "../../components/homepage/LogIn";

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  registerUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios.post(
      "/users/new",
      { username, password }
        .then(() => {
          Auth.authenticateUser(username);
          axios.post("/users/login", { username, password });
        })
        .then(() => {
          this.props.checkAuthenticateStatus();
        })
        .then(() => {
          this.setState({
            username: "",
            password: ""
          });
        })
    );
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: ""
        });
      });
  };

  render() {
    const { username, password } = this.state;

    const { isLoggedIn } = this.props;

    return (
      <>
        <Switch>
          <Route
            path="/login"
            render={() => {
              return (
                <LogIn
                  username={username}
                  password={password}
                  isLoggedIn={isLoggedIn}
                  loginUser={this.loginUser}
                  registerUser={this.registerUser}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            path="/register"
            render={() => {
              return (
                <SignUp
                  username={username}
                  password={password}
                  isLoggedIn={isLoggedIn}
                  loginUser={this.loginUser}
                  registerUser={this.registerUser}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(AuthForm);
