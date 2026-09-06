import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Root from "./src";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Root />
    </GestureHandlerRootView>
  );
}
