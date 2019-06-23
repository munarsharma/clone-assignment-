import React from "react";
// import ProfileNav from "./profileNav";

class EditInfoForm extends React.Component {
  state = {
    blogName: "",
    user_img: "",
    user_bio: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    //use redux here
    e.preventDefault();
  };

  render() {
    const { blogName, user_img, user_bio } = this.state;
    console.log("we are here");
    return (
      <>
        <h1> Edit info: </h1>
        <form>
          <label htmlFor="blogName"> Blog name: </label>
          <input
            name="blogName"
            id="blogName"
            type="text"
            placeholder="blog name"
            value={blogName}
            onChange={this.handleChange}
          />
          <label htmlFor="userImg"> Proile Picture </label>
          <input
            name="user_img"
            id="userImg"
            type="text"
            placeholder="url"
            value={user_img}
            onChange={this.handleChange}
          />
          <label htmlFor="userBio"> Bio: </label>
          <input
            name="user_bio"
            id="userBio"
            type="text"
            placeholder="say something.. "
            value={user_bio}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default EditInfoForm;
