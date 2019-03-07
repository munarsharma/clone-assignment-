import React from "react";

class TextPostForm extends React.Component {
  render() {
    console.log("textPost");
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
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
      </>
    );
  }
}

export default TextPostForm;
