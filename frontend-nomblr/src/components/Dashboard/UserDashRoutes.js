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
            render={() => (
              <UserDash
                goFetchPosts={this.props.goFetchPosts}
                posts={this.props.posts}
                logoutUser={this.props.logoutUser}
                currentUser={this.props.currentUser}
              />
            )}
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
