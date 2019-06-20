import React from "react";
import UserProfile from "./UserProfile";
import { Route, Switch } from "react-router-dom";
import EditInfoForm from "./editInfoForm";
import LikedPostsDisplay from "./likedPostsDisplay";

class UserProfileRoutes extends React.Component {
  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.fetchUserPosts(id);
  }

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path={"/users/:id"}
            render={props => (
              <UserProfile
                {...props}
                currentUser={this.props.currentUser}
                fetchUserPosts={this.props.fetchUserPosts}
                userPosts={this.props.userPosts}
                id={parseInt(this.props.match.params.id)}
              />
            )}
          />
          <Route
            path="/user/:id/likes"
            render={props => (
              <UserProfile
                {...props}
                currentUser={this.props.currentUser}
                fetchUserPosts={this.props.fetchUserPosts}
                userPosts={this.props.userPosts}
                id={parseInt(this.props.match.params.id)}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default UserProfileRoutes;

// blogName ? {blogName} : {username}
//button should route to edit page. submit button fires patch request.

//
// componentDidUpdate(prevProps) {
//   if (prevProps.currentUser !== this.props.currentUser) {
//     this.props.fetchUserPosts(this.props.currentUser.id);
//   }
// }

// <Route path="/user/edit" component={UserContainer} />
