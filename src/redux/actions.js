import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";
export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
