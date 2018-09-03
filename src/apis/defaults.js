import axios from "axios";

export const setBaseURL = url => {
  axios.defaults.baseURL = url;
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
};

// customHeaders = [{ name: Authorization, value: '12345' }, { name: 'Content-type', value: 'application/json' }]
export const setCustomHeaders = customHeaders => {
  console.log("SET CUSTOM HEADERS", customHeaders);
  customHeaders.forEach(header => {
    axios.defaults.headers.common[header.name] = header.value;
  });
  console.log("HEADERS", axios.defaults.headers);
};
