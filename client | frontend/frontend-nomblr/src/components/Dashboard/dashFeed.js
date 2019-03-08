import React from "react";
//import PostNavbar from "./postingNavbar";
//import UserPostsContainer from "../../containers/userPostsContainer";
import AllPosts from "../posts/allPosts";

class DashFeed extends React.Component {
  render() {
    return (
      <>
        <br />
        <AllPosts posts={this.props.posts} />
        <br />
      </>
    );
  }
}

export default DashFeed;
