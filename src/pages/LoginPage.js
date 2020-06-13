import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { login } from "../store/auth/login/actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Click Submit");

    console.log("What is my submit data", email, password);
    dispatch(login(email, password));
  }
  return (
    <div>
      <h1>I am loginPage</h1>
      <p>I am the login P-tag</p>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}
