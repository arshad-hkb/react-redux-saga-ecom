import { ADD_TO_CART, REMOVE_TO_CART } from "./constants";
export const cartData = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("reducer call", action);
  //   return action.data;
  // } else {
  //   return "abc";
  // }
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer call", action);
      return 1 + 1;
    case REMOVE_TO_CART:
      console.log("reducer call", action);
      return 1 - 1;
    default:
      return "no action called";
  }
};
