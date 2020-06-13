import { combineReducers } from "redux";
import signUpSlideReducer from "../store/signup/reducer";
import productsSliceReducer from "./products/reducer";
import loginSlideReducer from "./auth/login/reducer";

const reducer = combineReducers({
  signup: signUpSlideReducer,
  //feed: sliceFeedReducer
  products: productsSliceReducer,
  login: loginSlideReducer,
});

export default reducer;
