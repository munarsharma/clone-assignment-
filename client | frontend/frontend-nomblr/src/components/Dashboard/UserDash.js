import React from "react";
import DashHeader from "./dashHeader";
// import Radar from "./radar";
import PostsContainer from "../../containers/postsContainer";
//import DashFeed from "./dashFeed";
import PostNavbar from "./postingNavbar";

// import UserProfile from "../user/UserProfile";

class UserDash extends React.Component {
  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader logoutUser={this.props.logoutUser} />
          <div className="mainDash">
            <br />
            <PostNavbar />
            <div className="dashFeed">
              <PostsContainer />
            </div>
            <div className="rightSidebar" />
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
