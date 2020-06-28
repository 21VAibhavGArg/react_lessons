import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        alt=''
        src={avatar_url}
        style={{ width: "100px" }}></img>
      <div>
        <h3>{login}</h3>
        <a
          className='btn btn-dark btn-sm'
          rel='noopener noreferrer'
          href={html_url}
          target='_BLANK'>
          Visit
        </a>
      </div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
