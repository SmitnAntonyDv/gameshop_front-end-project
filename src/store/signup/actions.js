export function newUserSignUp(data) {
  return {
    type: "USER_SIGN_UP",
    payload: data,
  };
}

// export async function userSignUp(dispatch, getState) {
//   console.log("This works?");
// }
// export async function handleSingUp(event) {
//   event.preventDefault();
//   console.log(name, email, password);

//   const API_URL = "http://localhost:4000";
//   const response = await axios.post(`${API_URL}/auth/signup`, {
//     name: name,
//     email: email,
//     password: password,
//   });
// }
