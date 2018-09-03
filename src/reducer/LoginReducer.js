import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../utils";

const initialState = {
  name: "",
  message: "",
  email: "",
  pwd: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        message: ""
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case LOGIN_FAILURE:
      console.log("LOGIN FAILURE", action);
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };

    default:
      return state;
  }
};
