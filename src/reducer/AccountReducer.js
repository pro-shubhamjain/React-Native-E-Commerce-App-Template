import {
  TESTAPI,
  TESTAPI_SUCCESS,
  TESTAPI_FAIL,
  LOGIN_SUCCESS
} from "../utils";

const initialState = {
  token: "",
  message: "",
  msg: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };

    case TESTAPI:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg
      };

    case TESTAPI_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };

    default:
      return state;
  }
};
