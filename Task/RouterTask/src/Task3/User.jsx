import React from "react";
import { Outlet , Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div>
        <h1 className="heading">This is User page.</h1>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
        <Link to="/user/3">User 3</Link>
      </div>
      <Outlet />
    </>
  );
};

export default User;
