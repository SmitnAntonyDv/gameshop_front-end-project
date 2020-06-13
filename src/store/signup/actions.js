import axios from "axios";
const API_URL = "http://localhost:4000";

export function newUserSignUp(data) {
  return {
    type: "USER_SIGN_UP",
    payload: data,
  };
}

export function singUpData(data) {
  console.log("what is my data?", data);
  return {
    type: "SIGNUP_SUCCESS",
    payload: data,
  };
}

//signup thunk action
export function singUp(name, email, password) {
  console.log("SIGNUP FUNCTION inside actions.js");

  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });

    dispatch(singUpData(response.data));
  };
}
