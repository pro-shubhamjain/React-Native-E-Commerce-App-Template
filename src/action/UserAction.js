import {
  CURRENT_USER,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE
} from "src/utils";
import { fetch, GET } from "src/apis";

export const fetchCurrentUser = () => {
  return async dispatch => {
    dispatch({
      type: CURRENT_USER
    });
    let parameters = {};
    fetch(GET, "users/current", parameters)
      .then(response => {
        console.log("CURRENT USER", response);
        dispatch({
          type: CURRENT_USER_SUCCESS,
          payload: {
            ...response
          }
        });
      })
      .catch(err => {
        dispatch({
          type: CURRENT_USER_FAILURE,
          payload: {
            message: err
          }
        });
      });
  };
};
