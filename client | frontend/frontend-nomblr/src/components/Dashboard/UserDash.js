import React from "react";
import DashHeader from "./dashHeader";
import radar from "./radar";

class UserDash extends React.Component {
  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader />
          <h1> User Dash </h1>
          <p> something goes here </p>
        </div>
      </>
    );
  }
}

export default UserDash;
