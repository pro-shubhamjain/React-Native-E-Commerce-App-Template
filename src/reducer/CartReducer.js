import { ADD_TO_CART, REMOVE_FROM_CART } from "../utils";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.items.find(item => item.title === action.payload.title);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.title === action.payload.title ? { ...item, qty: item.qty + 1 } : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }]
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.title !== action.payload.title)
      };

    default:
      return state;
  }
};
