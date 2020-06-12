const initialState = {
  products: [],
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "dataFetched": {
      console.log("data", action.payload);
      return {
        data: [...state.products, ...action.payload],
      };
    }
    case "addCart": {
      //   console.log("item that needs to be added in cart", action.payload);
      //   return {
      //     cart: [...state.products, action.payload],
      //   };
    }
    default: {
      return state;
    }
  }
};
