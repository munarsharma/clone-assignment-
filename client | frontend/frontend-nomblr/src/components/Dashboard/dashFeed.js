import React from "react";
import PostNavbar from "./postingNavbar";
import UserPostsContainer from "../../containers/userPostsContainer";

class DashFeed extends React.Component {
  render() {
    return (
      <>
        <h1>Dash Feed</h1>
        <PostNavbar />
        <UserPostsContainer />
        <br />
      </>
    );
  }
}

export default DashFeed;
