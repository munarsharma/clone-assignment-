import React from "react";
import DashHeader from "./dashHeader";
import Radar from "./radar";
import PostsContainer from "../../containers/postsContainer";
import { Route, Switch } from "react-router-dom";
import UserPostsContainer from "../../containers/userPostsContainer";

class UserDash extends React.Component {
  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader logoutUser={this.props.logoutUser} />
          <div className="mainDash">
            <h1> User Dash </h1>
            <p> something goes here </p>
            <UserPostsContainer />
            <div className="rightSidebar" />
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
