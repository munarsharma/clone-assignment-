import React from "react";
import AddNewPost from "./newPost";
import UserDash from "./UserDash";
import { Route, Switch } from "react-router-dom";
//import UserContainer from "../../containers/UserContainer";

class UserDashRoutes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/dashboard" component={UserDash} />
          <Route exact path="/dashboardr/new" component={AddNewPost} />
        </Switch>
      </>
    );
  }
}

export default UserDashRoutes;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
