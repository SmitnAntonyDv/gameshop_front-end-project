import { combineReducers } from "redux";
import productsSliceReducer from "./products/reducer";
const reducer = combineReducers({
  //slice reducers here
  //feed: sliceFeedReducer

  products: productsSliceReducer,
});

export default reducer;
