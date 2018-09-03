import {
  LOGIN_SUCCESS,
  CURRENT_USER,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
  LOGOUT
} from "../utils";

const initialState = {
  token: "",
  currentUser: {},
  message: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };

    case CURRENT_USER:
      return {
        ...state,
        loading: true
      };

    case CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        name: action.payload.name
      };

    case CURRENT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
