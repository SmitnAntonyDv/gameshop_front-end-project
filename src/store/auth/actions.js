import axios from "axios";

//base url
const API_URL = "kandula.db.elephantsql.com";

export function signUp(name, email, password) {
  return async function thunk(dispatch, getState) {
    const res = await axios.post(`${API_URL}/auth/signup`, {
      name: name,
      email: email,
      password: password,
    });
  };
}
