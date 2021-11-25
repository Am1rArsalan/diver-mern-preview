import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
} from "./../action/actionTypes";

const initialState = { auth: false, error: "" };

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE: {
      return { ...state };
    }
    case AUTHENTICATE_SUCCESS: {
      return { ...state, auth: true };
    }

    case AUTHENTICATE_FAILED: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
