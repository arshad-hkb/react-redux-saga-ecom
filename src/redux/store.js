// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(productSaga);
