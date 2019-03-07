import React from "react";
import ProfileNav from "./profileNav";
import { Link } from "react-router-dom";
import UserPostsContainer from "../../containers/userPostsContainer";
import SearchBar from "../SearchBar";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <header className="profileHeader">
          <SearchBar />
        </header>
        <h1> user profile </h1>
        <ProfileNav />
        <br />
        <div>
          <Link to="/user/edit">
            <button> edit profile </button>
          </Link>
          <br />
          <UserPostsContainer />
        </div>
      </>
    );
  }
}

export default UserProfile;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
