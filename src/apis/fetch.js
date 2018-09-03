import axios from "axios";
let CancelToken = axios.CancelToken;
import { GET, POST, PUT, PATCH, DELETE } from "./constants";

var cancel = () => {};
export const cancelRequest = () => {
  return cancel;
};

function getQueryString(params) {
  let esc = encodeURIComponent;
  return (
    "?" +
    Object.keys(params)
      .map(k => esc(k) + "=" + esc(params[k]))
      .join("&")
  );
}

function getJsonBody(params) {
  return params;
}

export const fetch = (requestType, resourceURL, parameters) => {
  switch (requestType) {
    case GET:
      console.log("FETCH", axios.defaults.headers);
      return new Promise((resolve, reject) => {
        var queryString = getQueryString(parameters);
        console.log(axios.defaults.baseURL + "/" + resourceURL + queryString);
        axios
          .get("/" + resourceURL + queryString, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            })
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            console.log(error.response);
            reject(error);
          });
      });

    case POST:
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        console.log(axios.defaults.baseURL + "/" + resourceURL, jsonBody);
        axios
          .post("/" + resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            })
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            if (error.response.data.email) {
              reject(error.response.data.email);
            } else if (error.response.data.password) {
              reject(error.response.data.password);
            }
          });
      });

    case PUT:
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        console.log(axios.defaults.baseURL + "/" + resourceURL, jsonBody);
        axios
          .put("/" + resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            })
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case PATCH:
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        console.log(axios.defaults.baseURL + "/" + resourceURL, jsonBody);
        axios
          .patch("/" + resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            })
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case DELETE:
      return new Promise((resolve, reject) => {
        var queryString = getQueryString(parameters);
        console.log(axios.defaults.baseURL + "/" + resourceURL + queryString);
        axios
          .delete("/" + resourceURL + queryString, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            })
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    default:
      break;
  }
};
