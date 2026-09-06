import React, { useState } from "react";
import { Provider } from "react-redux";
import storeConfig from "./store";
import Router from "./routing";

export default function Root() {
  const [{ store }] = useState(storeConfig);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
