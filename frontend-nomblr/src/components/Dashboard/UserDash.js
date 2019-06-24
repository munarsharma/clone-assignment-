import React from "react";
import DashHeader from "./dashHeader";
import Radar from "./radar";
import AllPosts from "../posts/allPosts";
//import DashFeed from "./dashFeed";
import PostNavbar from "./postingNavbar";

// import UserProfile from "../user/UserProfile";

class UserDash extends React.Component {
  componentDidMount() {
    this.props.goFetchPosts();
    this.props.fetchPostsByPopularity();
  }

  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader
            logoutUser={this.props.logoutUser}
            currentUser={this.props.currentUser}
          />
          <div className="mainDash">
            <br />
            <div id="posting-nav-cont">
              <PostNavbar />
            </div>
            <div className="dash_feed">
              <div className="renderedPosts">
                <AllPosts
                  posts={this.props.posts}
                  currentUser={this.props.currentUser}
                  goFetchPosts={this.props.goFetchPosts}
                />
              </div>

              <div className="rightSidebar">
                <Radar byPopularity={this.props.byPopularity} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
