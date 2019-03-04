import React from "react";

const TextPostForm = ({ newTextPost, postType }) => {
  return (
    <>
      <form>
        <label htmlFor="newtextBtn" />
        <input
          name="newTextPost"
          id="newtextBtn"
          type="text"
          placeholder="textposthere"
          value="newTextPost"
        />
        <label htmlFor="submit" />
        <input
          className="newtPostBtn"
          id="submit"
          type="submit"
          value="submitPost"
          placeholder="Post!"
        />
      </form>
    </>
  );
};

export default TextPostForm;
