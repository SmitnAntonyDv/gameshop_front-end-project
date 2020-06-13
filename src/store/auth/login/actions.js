import axios from "axios";
const API_URL = "http://localhost:4000";

export function userLoggedIn(token, profile) {
  return {
    type: "USER_LOGGED_IN",
    payload: { token, profile },
  };
}

//login thunk action
export function login(email, password) {
  return async function thunk(dispatch, getState) {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    });

    console.log("THUNK RES DATA?", res.data.token);
    const token = res.data.token;
    // console.log("Do I have this data?", email, password);
    const profile = email;
    // console.log("does this work?", profile.email);

    localStorage.setItem("saveToken", token);
    dispatch(userLoggedIn(token, profile));
  };
}
