import React from "react";
import DashHeader from "./dashHeader";
import Radar from "./radar";
// import PostsContainer from "../../containers/postsContainer";
import { Route, Switch } from "react-router-dom";
import DashFeed from "./dashFeed";
import AddNewPost from "./newPost";
import UserProfile from "../user/UserProfile";

class UserDash extends React.Component {
  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader logoutUser={this.props.logoutUser} />
          <div className="mainDash">
            <h1> User Dash </h1>
            <p> something goes here </p>
            <br />

            <div className="dashFeed">
              <DashFeed />
            </div>

            <div className="rightSidebar" />
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
