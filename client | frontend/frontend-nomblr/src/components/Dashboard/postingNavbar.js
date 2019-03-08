import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setPostType } from "../../actions/postActions";
//get all photos and sort them based on type.
//posting a post: should i have dif queries for each type or all the same one?

const mapStateToProps = state => {
  return {
    id: state.postsReducers.postType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPostType: id => {
      dispatch(setPostType(id));
    }
  };
};

class PostNavbar extends React.Component {
  render() {
    return (
      <>
        <nav className="posting-navbar">
          <div>
            <Link to="/dashboard/new/text">
              <button id="text" onClick={() => this.props.setPostType("text")}>
                <img src="" alt="textPost" />
              </button>
            </Link>
          </div>

          <div>
            <Link to="/dashboard/new/photo">
              <button id="photo" onClick={() => this.props.setPostType("img")}>
                <img src="" alt="photoPost" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/new/link">
              <button id="link">
                <img src="" alt="linkPost" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/new/video">
              <button id="video">
                <img src="" alt="videoPost" />
              </button>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostNavbar);
