import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import text from "../../images/text.png";
import link from "../../images/link.png";
import video from "../../images/video.png";
import photo from "../../images/img.png";

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
              <button
                className="nav-icons"
                onClick={() => this.props.setPostType("text")}
              >
                <img className="nav-icon-img" src={text} alt="Aa" />
              </button>
            </Link>
          </div>

          <div>
            <Link to="/dashboard/new/photo">
              <button
                className="nav-icons"
                onClick={() => this.props.setPostType("img")}
              >
                <img className="nav-icon-img" src={photo} alt="Aa" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard/new/link">
              <button className="nav-icons">
                <img className="nav-icon-img" src={link} alt="Aa" />
              </button>
            </Link>
          </div>
          <div>
            <Link to="/new/video">
              <button className="nav-icons">
                <img className="nav-icon-img" src={video} alt="Aa" />
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
