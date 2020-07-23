import {
  FETCH_TRANSACTIONS,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILED,
} from "./../action/actionTypes";
const initialState = { data: [], loading: false, error: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS: {
      return { ...state, loading: true, error: "" };
    }
    case FETCH_TRANSACTIONS_SUCCESS: {
      return { ...state, data: action.data.transActions, loading: false };
    }
    case FETCH_TRANSACTIONS_FAILED: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}

