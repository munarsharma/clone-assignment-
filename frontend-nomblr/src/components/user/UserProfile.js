import React from "react";
import ProfileNav from "./profileNav";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import ProfileHeader from "./profileHeader";
import UserPosts from "../posts/userPosts";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <header className="profileHeader">
          <ProfileHeader />
        </header>

        <div className="userProfilePage">
          <Link to="/user/edit" id="blogname">
            <h1 className="h1"> JamJam </h1>
          </Link>

          <ProfileNav />

          <br />

          <div className="userPostsDisplay" />

          <UserPosts
            posts={this.props.userPosts}
            fetchUserPosts={this.props.fetchUserPosts}
            id={this.props.id}
            currentUser={this.props.currentUser}
          />
        </div>
      </>
    );
  }
}

export default UserProfile;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
