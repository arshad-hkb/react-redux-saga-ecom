import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constants";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer call", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.log("reducer call", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      console.log("reducer call", action);
      data = [];
      return [...data];
    default:
      return [];
  }
};
