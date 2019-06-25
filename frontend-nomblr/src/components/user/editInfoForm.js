import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class EditInfoForm extends React.Component {
  state = {
    username: "",
    img_url: "",
    bio: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    if (!this.props.currentUser) {
      return null;
    }

    e.preventDefault();

    await axios.patch(`/users/${this.props.currentUser.id}`, {
      username: this.props.currentUser.username,
      img_url: this.state.img_url,
      bio: this.state.bio
    });

    await this.setState({
      submitted: true
    });
  };

  render() {
    const { username, img_url, bio, submitted } = this.state;

    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div id="edit-info-form">
        <form onSubmit={this.handleSubmit}>
          <h1> Edit info: </h1>

          <label htmlFor="username"> Username: </label>
          <input
            className="signupBtn"
            name="username"
            id="username"
            type="text"
            placeholder={this.props.currentUser.username}
            value={this.props.currentUser.username}
            onChange={this.handleChange}
          />

          <label htmlFor="img_url"> Profile Picture: </label>

          <input
            className="signupBtn"
            name="img_url"
            id="img_url"
            type="text"
            placeholder="url"
            value={img_url}
            onChange={this.handleChange}
          />
          <label htmlFor="bio"> Bio: </label>
          <input
            className="signupBtn"
            name="bio"
            id="bio"
            type="text"
            placeholder="say something pretty "
            value={bio}
            onChange={this.handleChange}
          />
          <input type="submit" className="submitBtn" />
          <div id="message">
            {submitted ? (
              <>
                {" "}
                <p> Your info has been updated.</p>
                <Link to="dashboard"> Back to Dashboard</Link>
              </>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default EditInfoForm;
