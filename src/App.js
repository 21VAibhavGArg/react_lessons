import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/user/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
