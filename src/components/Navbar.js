import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../store/auth/login/selector";

export default function Navbar() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(authUser);

  function singUp() {
    dispatch();
  }

  return (
    <div className="navStyle">
      <h1>The HuB</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <Link to="/signup">
        <button>Sign-up</button>
      </Link>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      {!loggedInUser ? [] : <p>Welcome back, {loggedInUser}</p>}
    </div>
  );
}
