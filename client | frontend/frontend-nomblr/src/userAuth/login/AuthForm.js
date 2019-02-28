import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";
import SignUp from "../../components/homepage/SignUp";
import LogIn from "../../components/homepage/LogIn";

class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    console.log("heyyyyy");
    e.preventDefault();
    const { username, password, email } = this.state;

    await axios.post("/users/new", { username, password, email });

    Auth.authenticateUser(username);

    await axios.post("/users/login", { username, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      password: "",
      email: ""
    });
    console.log("registered");
  };

  loginUser = async e => {
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
