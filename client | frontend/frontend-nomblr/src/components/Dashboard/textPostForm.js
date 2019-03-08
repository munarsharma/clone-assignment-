import React from "react";

class TextPostForm extends React.Component {
  render() {
    console.log("textPost");
    return (
      <>
        <div className="imgForm Page">
          <form onSubmit={this.props.handleSubmit} className="newTextForm">
            <h1 className="h1">Add New Post </h1>
            <label htmlFor="newtextBtn" />
            <input
              name="newTextPost"
              id="newtextBtn"
              type="text"
              placeholder="textposthere"
              value={this.props.newTextPost}
              onChange={this.props.handleChange}
            />
            <label htmlFor="submit" />
            <input
              className="newtPostBtn"
              id="submit"
              type="submit"
              value="Post"
            />
          </form>
        </div>
      </>
    );
  }
}

export default TextPostForm;
