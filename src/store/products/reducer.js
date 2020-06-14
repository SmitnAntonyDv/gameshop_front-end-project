const initialState = {
  products: [],
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "dataFetched": {
      return {
        data: [...state.products, ...action.payload],
        cart: [...state.cart],
      };
    }
    case "addCart": {
      return {
        data: [...state.data],
        cart: [...state.cart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
