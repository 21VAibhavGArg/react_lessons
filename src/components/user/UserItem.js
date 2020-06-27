import React, { Component } from "react";

class UserItem extends Component {
  state = {
    image:
      "https://avatars1.githubusercontent.com/u/39013115?s=460&u=a6697acde4eca35a1b1049e5ce4efd6fa4a3910e&v=4",
    title: "21VAibhavGArg",
    url: "https://github.com/21VAibhavGArg",
  };
  render() {
    const { image, title, url } = this.state;
    return (
      <div className='card text-center'>
        <img className='round-img' src={image} style={{ width: "100px" }}></img>
        <div>
          <h3>{title}</h3>
          <a className='btn btn-dark btn-sm' href={url} target='_BLANK'>
            Visit
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
