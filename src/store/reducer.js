import { combineReducers } from "redux";
import signUpSlideReducer from "../store/signup/reducer";
import productsSliceReducer from "./products/reducer";

const reducer = combineReducers({
  signup: signUpSlideReducer,
  //feed: sliceFeedReducer
  products: productsSliceReducer,
});

export default reducer;
