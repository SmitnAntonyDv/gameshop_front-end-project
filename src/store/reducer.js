import { combineReducers } from "redux";
import signUpSlideReducer from "../store/signup/reducer";

const reducer = combineReducers({
  signup: signUpSlideReducer,
  //feed: sliceFeedReducer
});

export default reducer;
