import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { withRouter } from "react-router";
import MainPage from "./components/homepage/MainPage";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/homepage/SignUp";
import LogIn from "./components/homepage/LogIn";
import NavBar from "./components/homepage/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="mainheader">
          <Route component={NavBar} />
          <SearchBar />
        </header>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
