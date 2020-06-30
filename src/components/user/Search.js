import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propsTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Search'
          />
        </form>
        {this.props.hasUsers && (
          <button
            className='btn btn-block btn-light'
            onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
