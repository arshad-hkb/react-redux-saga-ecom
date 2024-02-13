import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";
export const productData = (data = [], action) => {
  switch (action.type) {
    // case PRODUCT_LIST:
    //   console.log("product reducer call", action);
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.log("set product reducer call", action);
      return [...action.data];

    default:
      return data;
  }
};
