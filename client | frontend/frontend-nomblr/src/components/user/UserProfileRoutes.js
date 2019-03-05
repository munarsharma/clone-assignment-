import React from "react";
import EditInfoForm from "./editInfoForm";
import UserProfile from "./UserProfile";
import { Route, Switch } from "react-router-dom";

class UserProfileRoutes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/user" component={UserProfile} />
          <Route path="/user/edit" component={EditInfoForm} />
        </Switch>
      </>
    );
  }
}

export default UserProfileRoutes;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.