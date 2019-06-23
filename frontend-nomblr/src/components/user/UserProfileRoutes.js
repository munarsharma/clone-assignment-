import React from "react";
import UserProfile from "./UserProfile";
import { Route, Switch } from "react-router-dom";
import EditInfoForm from "./editInfoForm";
import LikedPostsDisplay from "./likedPostsDisplay";
import ProfileNav from "./profileNav";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import ProfileHeader from "./profileHeader";
import UserPosts from "../posts/userPosts";

class UserProfileRoutes extends React.Component {
  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.fetchUserPosts(id);
    this.props.goFetchLikedPosts(id);
  }

  render() {
    return (
      <>
        <header className="profileHeader">
          <ProfileHeader currentUser={this.props.currentUser} />
        </header>

        <div className="userProfilePage">
          <Link to="/user/edit" id="blogname">
            <h1 className="h1">
              {" "}
              {this.props.userPosts[0] ? (
                <> {this.props.userPosts[0].username} </>
              ) : (
                <>'something' </>
              )}{" "}
            </h1>
          </Link>
        </div>

        <ProfileNav id={this.props.id} />

        <br />
        <Switch>
          <Route
            path={"/users/:id/likes"}
            render={props => (
              <LikedPostsDisplay
                {...props}
                posts={this.props.likedPosts}
                id={parseInt(this.props.match.params.id)}
              />
            )}
          />

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
