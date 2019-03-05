import React from "react";
import ProfileNav from "./profileNav";
import EditInfoForm from "./editInfoForm";
import { Route, Switch, Link } from "react-router-dom";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <h1> user profile </h1>
        <ProfileNav />
        <br />
        <div>
          <Link to="user/edit">
            <button> edit profile </button>
          </Link>
        </div>
        <Switch>
          <Route to="/edit" component={EditInfoForm} />
        </Switch>
      </>
    );
  }
}

export default UserProfile;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
