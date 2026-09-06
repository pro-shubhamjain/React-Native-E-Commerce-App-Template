import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // No custom stateReconciler: the default (autoMergeLevel1) merges the
  // rehydrated "user" slice into the freshly-reduced state instead of
  // replacing the whole state tree with it, which is what "hardSet" did —
  // that wiped out the login/register/account slices on every reload.
  whitelist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store, null, () => {
    store.getState();
  });
  return { store, persistor };
};
