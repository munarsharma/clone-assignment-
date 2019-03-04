import React from "react";
import { Link } from "react-router-dom";
//get all photos and sort them based on type.
//posting a post: should i have dif queries for each type or all the same one?

const PostNavbar = () => {
  return (
    <>
      <h3 className="h3"> posting navbar </h3>
      <nav className="posting-navbar">
        <div>
          <Link to="/dashboard/new/text">
            <button id="textPost">
              <img src="" alt="textPost" />
            </button>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/new/photo">
            <button id="photoPost">
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
          <Link to="/dashboard/new/comment">
            <button id="commentPost">
              <img src="" alt="commentPost" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default PostNavbar;
