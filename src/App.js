import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/user/UserItem";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
