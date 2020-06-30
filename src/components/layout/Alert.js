import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <b>{alert.msg}</b>
      </div>
    )
  );
};
export default Alert;
