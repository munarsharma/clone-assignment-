import React from "react";
import ProfileNav from "./profileNav";
import { Link } from "react-router-dom";
import UserPostsContainer from "../../containers/userPostsContainer";
import SearchBar from "../SearchBar";
import ProfileHeader from "./profileHeader";
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
          <div className="userPostsDisplay">
            <br />
            <UserPostsContainer />
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
