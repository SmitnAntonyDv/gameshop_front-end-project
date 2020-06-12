import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  function singUp() {
    dispatch();
  }

  return (
    <div>
      <h1>Hey i am a navbar!</h1>
      <button>Sign-up</button>
      <button>Logout</button>
    </div>
  );
}
