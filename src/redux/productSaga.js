import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos");
  data = yield data.json();

  yield put({ put: SET_PRODUCT_LIST, data: data });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
