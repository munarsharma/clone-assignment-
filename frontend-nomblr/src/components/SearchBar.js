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
      <div className="searchArea">
        <form>
          <label htmlFor="searchbar" />
          <br />
          <input
            className="searchbar"
            type="search"
            name="userSearch"
            value={userSearch}
            placeholder="search nomblr.."
            onChange={this.handleChange}
            results="0"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
