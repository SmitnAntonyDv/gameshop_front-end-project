import Axios from "axios";

const API_URL = "http://localhost:4000";

export function login(email, password) {
  //thunk to call the server and get token
  return async function thunk(dispatch, getState) {
    const token = await Axios.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    });
    console.log("token", token);
  };
}
