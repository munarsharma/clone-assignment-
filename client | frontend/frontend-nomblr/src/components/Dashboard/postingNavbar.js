import React from "react";
import { Link } from "react-router-dom";
//get all photos and sort them based on type.
//posting a post: should i have dif queries for each type or all the same one?

class PostNavbar extends React.Component {
  state = {
    postType: ""
  };

  handleTextClick = e => {
    this.setState({
      postType: "text"
    });
  };

  handleImgClick = e => {
    this.setState({
      postType: "img"
    });
  };
  render() {
    return (
      <>
        <h3 className="h3"> posting navbar </h3>
        <nav className="posting-navbar">
          <div>
            <Link to="/new/text">
              <button id="textPost" onClick={this.handleTextClick}>
                <img src="" alt="textPost" />
              </button>
            </Link>
          </div>

          <div>
            <Link to="/new/photo">
              <button id="photoPost" onClick={this.handleImgClick}>
                <img src="" alt="photoPost" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/new/link">
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
  }
}

export default PostNavbar;
