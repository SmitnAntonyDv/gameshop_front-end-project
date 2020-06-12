const initialState = {
  name: null,
  email: null,
  password: null,
};

export default function signUpSlideReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "SIGNUP_SUCCESS":
      console.log("WHAT IS PAYLOAD?", payload);
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        password: payload.password,
      };

    default:
      return state;
  }
}
