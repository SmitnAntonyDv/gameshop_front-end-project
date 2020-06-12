import axios from "axios";
const API_URL = "http://localhost:4000";

export function getFetched(data) {
  return {
    type: "dataFetched",
    payload: data,
  };
}

export function addToCart(productID) {
  console.log("this is working", productID);

  return async function thunk(dispatch, getState) {
    dispatch({
      type: "addCart",
      payload: productID,
    });
  };
}

export async function fetchProducts(dispatch, getState) {
  console.log("hello this works");
  try {
    const response = await axios.get(`${API_URL}/products`);

    console.log("got the data", response.data);

    dispatch(getFetched(response.data));
  } catch (error) {
    console.log("error", error);
  }
}
