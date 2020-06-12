import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function SingUp() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSingUp(event) {
    event.preventDefault();
    console.log(name, email, password);

    const API_URL = "http://localhost:4000";
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });

    const action = {
      type: "SIGNUP_SUCCESS",
      payload: response.data,
    };
    dispatch(action);
  }

  return (
    <div>
      <h1>Hey I am singup page</h1>

      <form onSubmit={handleSingUp}>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" />
      </form>
    </div>
  );
}
