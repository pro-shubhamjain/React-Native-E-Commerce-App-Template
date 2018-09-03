import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "src/utils";

const initialState = {
  error: "",
  name: "",
  email: "",
  mobile: "",
  pwd: "",
  status: {},
  msg: "",
  avatar: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };

    default:
      return state;
  }
};
