import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from "src/utils";
import { fetch, cancelRequest, POST } from "src/apis";

export const registerUser = ({ name, email, mobile, password }) => {
  return async dispatch => {
    dispatch({
      type: REGISTER
    });
    let parameters = { name, email, mobile, password };
    fetch(POST, "users/register", parameters)
      .then(response => {
        console.log("response user", response);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            ...response
          }
        });
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAILURE,
          payload: {
            message: err
          }
        });
      });
  };
};
