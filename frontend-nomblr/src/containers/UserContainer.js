import React from "react";
import { connect } from "react-redux";

import EditInfoForm from "../components/user/editInfoForm";
import UserProfile from "../components/user/UserProfile";

const mapStateToProps = state => {
  return {
    currentUser: state.userReducers.currentUser,
    loggedIn: state.userReducers.loggedIn
  };
};

class UserContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1> nahnu huna </h1>

        <EditInfoForm
          currentUser={this.props.currentUser}
          loggedIn={this.props.loggedIn}
        />
        <UserProfile currentUser={this.props.currentUser} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(UserContainer);
