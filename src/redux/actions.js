import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants";
export const addToCart = (data) => {
  console.log("action called addToCart", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeFromCart = (data) => {
  console.log("action called removeFromCart", data);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
export const emptyCart = () => {
  console.log("action called emptyCart");
  return {
    type: EMPTY_CART,
  };
};
