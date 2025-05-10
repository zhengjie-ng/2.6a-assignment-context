export const defaultProduct = {
  count: 1,
  discount: 0,
  name: "Bananas",
  price: 2.99,
  list: [],
  sumTotal: 0,
  originalSumTotal: 0,
};

export function productReducer(state, action) {
  switch (action.type) {
    case "PLUS_COUNT": {
      let newState = { ...state };
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState;
    }
    case "PLUS_MINUS": {
      let newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 0) {
        newState.count = state.count;
      }
      if (newState.count < 5) {
        newState.discount = 0;
      }
      return newState;
    }
    case "SET_NAME": {
      return { ...state, name: action.name };
    }
    case "SET_PRICE": {
      return { ...state, price: action.price };
    }

    case "ADD_PRODUCT": {
      const newItem = {
        name: state.name,
        quantity: state.count,
        price: state.price,
        discount: state.discount,
        total: (state.count * state.price * (100 - state.discount)) / 100,
        originalTotal: state.count * state.price,
      };

      return {
        ...state,
        list: [...state.list, newItem],
        sumTotal: state.sumTotal + newItem.total,
        originalSumTotal: state.originalSumTotal + newItem.originalTotal,
      };
    }
    default:
      throw Error("productReducer - unknown action:", action.type);
  }
}
