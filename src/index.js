import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import Router from "./routing";

class Root extends PureComponent {
  render() {
    let storeDefaults = storeConfig();
    return (
      <Provider store={storeDefaults.store}>
        <PersistGate loading={null} persistor={storeDefaults.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
