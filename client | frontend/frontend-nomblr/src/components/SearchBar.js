import React from "react";

class SearchBar extends React.Component {
  state = {
    userSearch: ""
  };

  handleChange = e => {
    this.setState({
      userSearch: e.target.value
    });
  };

  render() {
    const { userSearch } = this.state;
    return (
      <div>
        <div className="searchbar">
          <br />
          <form>
            <label htmlFor="searchbar" />
            <br />
            <input
              id="searchbar"
              type="text"
              name="userSearch"
              value={userSearch}
              placeholder="search nomblr.."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
