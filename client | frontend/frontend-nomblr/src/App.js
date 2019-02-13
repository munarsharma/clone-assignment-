import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/homepage/MainPage";
import SearchBar from "./components/SearchBar";
import { withRouter } from "react-router";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
