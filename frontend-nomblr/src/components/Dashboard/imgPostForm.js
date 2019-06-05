import React from "react";

const ImgPostForm = ({
  handleSubmit,
  handleChange,
  newImgPost,
  imgCaption
}) => {
  return (
    <>
      <div className="imgFormPage">
        <form onSubmit={handleSubmit} className="newImgForm">
          <h1 className="h1">Add New Post </h1>
          <label htmlFor="newImgBtn" />
          <input
            name="newImgPost"
            id="newImgBtn"
            type="text"
            placeholder="Paste a URL"
            value={newImgPost}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="imgCaption" />
          <input
            name="imgCaption"
            id="imgCaption"
            type="text"
            placeholder="caption..."
            value={imgCaption}
            onChange={handleChange}
          />
          <label htmlFor="submit" />
          <input
            className="newPostBtn"
            type="submit"
            value="submitPost"
            placeholder="Post!"
          />
        </form>
      </div>
    </>
  );
};

export default ImgPostForm;
