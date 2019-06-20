import React from "react";
import DashHeader from "./dashHeader";
// import Radar from "./radar";
import AllPosts from "../posts/allPosts";
//import DashFeed from "./dashFeed";
import PostNavbar from "./postingNavbar";

// import UserProfile from "../user/UserProfile";

class UserDash extends React.Component {
  componentDidMount() {
    this.props.goFetchPosts();
  }

  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader logoutUser={this.props.logoutUser} />
          <div className="mainDash">
            <br />
            <PostNavbar />
            <div className="dashFeed">
              <AllPosts
                posts={this.props.posts}
                currentUser={this.props.currentUser}
                goFetchPosts={this.props.goFetchPosts}
              />
            </div>
            <div className="rightSidebar" />
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
