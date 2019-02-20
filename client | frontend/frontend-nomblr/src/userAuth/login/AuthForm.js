import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";
import SignUp from "../../components/homepage/SignUp";
import LogIn from "../../components/homepage/LogIn";

class AuthForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    console.log("heyyyyy");
    e.preventDefault();
    const { username, email, password } = this.state;

    await axios.post("/users/new", { username, email, password });

    Auth.authenticateUser(username);

    await axios.post("/users/login", { username, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      email: "",
      password: ""
    });
    console.log("registered");
  };

  loginUser = e => {
    e.preventDefault();
    const { username, email, password } = this.state;

    axios
      .post("/users/login", { username, email, password })

      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          email: "",
          password: ""
        });
      });
  };

  render() {
    const { username, password, email } = this.state;

    const { isLoggedIn } = this.props;

    return (
      <>
        <Switch>
          <Route
            path="/auth/login"
            render={() => {
              return (
                <LogIn
                  username={username}
                  password={password}
                  email={email}
                  isLoggedIn={isLoggedIn}
                  loginUser={this.loginUser}
                  registerUser={this.registerUser}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            path="/auth/register"
            render={() => {
              return (
                <SignUp
                  username={username}
                  password={password}
                  email={email}
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
export default AuthForm;
