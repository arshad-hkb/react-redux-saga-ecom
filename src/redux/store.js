// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
export const store = configureStore({
  reducer: rootReducer,
});
