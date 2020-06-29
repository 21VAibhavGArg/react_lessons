import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
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
