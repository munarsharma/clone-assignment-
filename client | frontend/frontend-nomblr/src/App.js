import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import MainPage from './components/homepage/MainPage';
import Header from './components/header';
import Footer from './components/footer';
import SignUp from './components/homepage/SignUp';
import LogIn from './components/homepage/LogIn';
import UserAuth from './components/homepage/LogIn';
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route exact path="/" component={MainPage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
