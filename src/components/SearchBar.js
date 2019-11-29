import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    // TODO: make sure to call callback from parent component
    console.log(e);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="search-field">Video Search</label>
            <input
              type="text"
              id="search-field"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
