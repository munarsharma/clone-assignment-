import React from "react";
import AddNewPost from "./NewPost";
import UserDash from "./UserDash";
import { Route, Switch } from "react-router-dom";
//import UserContainer from "../../containers/UserContainer";

class UserDashRoutes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => <UserDash logoutUser={this.props.logoutUser} />}
          />
          <Route path="/dashboard/new" component={AddNewPost} />
        </Switch>
      </>
    );
  }
}

export default UserDashRoutes;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.
