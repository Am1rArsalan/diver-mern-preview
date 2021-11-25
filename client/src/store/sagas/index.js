import {
  put,
  takeEvery,
  all,
  //takeLatest
} from "redux-saga/effects";

import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  GET_USER_DATA_SUCCESSED,
  GET_USER_DATA_FAILED,
  GET_USER_DATA,
} from "./../action/actionTypes";

import Api from "../api";

async function fetchAsync(func) {
  const response = await func();
  if (response.status) {
    return await response.data;
  }
  throw new Error("Unexpected error!!!");
}

function getTransActions() {
  return Api.get("/transActions");
}

function* fetchTransAction() {
  try {
    const data = yield fetchAsync(getTransActions);
    yield put({ type: FETCH_TRANSACTIONS_SUCCESS, data: data });
  } catch (e) {
    yield put({ type: FETCH_TRANSACTIONS_FAILED, error: e.message });
  }
}

function login() {
  return Api.post("/login", {
    email: "asghar@asghar.aaa",
    password: "asghar71",
  });
}

function* authenticate() {
  try {
    const res = yield fetchAsync(login);
    localStorage.setItem("token", res.data.token);
    yield put({ type: AUTHENTICATE_SUCCESS, data: res.data });
  } catch (e) {
    yield put({ type: AUTHENTICATE_FAILED, error: e.message });
  }
}

function getUserDataCall() {
  return Api.get("/user?api_token=" + localStorage.getItem("token"));
}

function* getUserData() {
  try {
    const res = yield fetchAsync(getUserDataCall);
    yield put({
      type: GET_USER_DATA_SUCCESSED,
      data: res,
    });
  } catch (e) {
    yield put({
      type: GET_USER_DATA_FAILED,
    });
  }
}

export default function* watchAll() {
  yield all([
    takeEvery(FETCH_TRANSACTIONS, fetchTransAction),
    takeEvery(AUTHENTICATE, authenticate),
    takeEvery(GET_USER_DATA, getUserData),
  ]);
}
