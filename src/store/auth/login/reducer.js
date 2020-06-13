const initialState = {
  email: null,
  token: null,
};

export default function loginSlideReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "USER_LOGGED_IN":
      console.log("INSIDE REDUCER- PAYLOAD", payload);
      console.log("payload.token", payload.token);
      console.log("payload.profile", payload.profile);
      return {
        ...state,
        email: payload.profile,
        token: payload.token,
      };

    default:
      return state;
  }
}
