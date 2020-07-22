import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
} from "./../action/actionTypes";


import Api from "../api";

async function fetchAsync(func) {
  console.log("Amir is Hrerererere")
  const response = await func();
  if (response.status) {
    console.log("Amir is Hrerererere " , response)
    return await  response.data.transActions ;
  }
  throw new Error("Unexpected error!!!");
}

function getTransActions() {
  return Api.get('/transActions');
}

function* fetchTransAction() {
  console.log('CSACASCJSCCSAC 2')
  try {
    const data = yield fetchAsync(getTransActions);
    yield put({ type: FETCH_TRANSACTIONS_SUCCESS , data: data});
  } catch (e) {
    yield put({ type: FETCH_TRANSACTIONS_FAILED , error: e.message });
  }
}

export function* rootSaga() {
  console.log('CSACASCJSCCSAC')
  yield takeEvery( FETCH_TRANSACTIONS , fetchTransAction);
}

// Does not allow concurrent fetches of users   // yield takeLatest(LOAD_USERS_LOADING, fetchUser);}
export default rootSaga;



