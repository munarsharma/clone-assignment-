import React from "react";
import { Link } from "react-router-dom";
//get all photos and sort them based on type.
//posting a post: should i have dif queries for each type or all the same one?

const PostNavbar = ({ handleImgClick, handleTextClick }) => {
  return (
    <>
      <nav className="posting-navbar">
        <div>
          <Link to="/dashboard/new/text">
            <button id="textPost" onClick={handleTextClick}>
              <img src="" alt="textPost" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/new/photo">
            <button id="photoPost" onClick={handleImgClick}>
              <img src="" alt="photoPost" />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/new/link">
            <button id="linkPost">
              <img src="" alt="linkPost" />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/new/video">
            <button id="videoPost">
              <img src="" alt="videoPost" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default PostNavbar;
