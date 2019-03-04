import React from "react";

const ImgPostForm = ({
  handleSubmit,
  handleChange,
  newImgPost,
  imgCaption
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newImgBtn" />
        <input
          name="newImgPost"
          id="newImgBtn"
          type="file"
          placeholder="meow"
          value={newImgPost}
          onChange={handleChange}
        />
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
    </>
  );
};

export default ImgPostForm;
