import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESSED,
  GET_USER_DATA_FAILED,
} from "./../action/actionTypes";

const initialState = { user: null, loading: false, error: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA: {
      return { ...state, loading: true };
    }

    case GET_USER_DATA_SUCCESSED: {
      return { ...state, user: action.data, loading: false };
    }

    case GET_USER_DATA_FAILED: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}
