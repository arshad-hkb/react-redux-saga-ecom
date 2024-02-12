import { PRODUCT_LIST } from "./constants";
export const productList = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = await data.json();
  console.log("action called PRODUCT_LIST", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
