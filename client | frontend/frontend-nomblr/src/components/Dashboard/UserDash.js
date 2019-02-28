import React from "react";
import DashHeader from "./dashHeader";
import Radar from "./radar";

class UserDash extends React.Component {
  render() {
    return (
      <>
        <div className="dashContainer">
          <DashHeader />
          <div className="mainDash">
            <h1> User Dash </h1>
            <p> something goes here </p>
            <div className="rightSidebar">
              <Radar />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserDash;
