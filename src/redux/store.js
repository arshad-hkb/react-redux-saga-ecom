import { createStore } from "redux";
const dummyreducer = () => {
  return 100;
};
export const store = createStore(dummyreducer);
