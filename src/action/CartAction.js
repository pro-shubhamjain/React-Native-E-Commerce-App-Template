import { ADD_TO_CART, REMOVE_FROM_CART } from "src/utils";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = title => ({
  type: REMOVE_FROM_CART,
  payload: { title }
});
