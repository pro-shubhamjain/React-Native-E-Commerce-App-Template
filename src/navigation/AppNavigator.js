import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import Notification from "../component/common/Notification";

const Stack = createNativeStackNavigator();

export default function AppNavigator({ token }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="Main" component={DrawerNavigator} />
      ) : (
        <Stack.Screen name="Authentication" component={AuthNavigator} />
      )}
      <Stack.Screen name="Notify" component={Notification} />
    </Stack.Navigator>
  );
}
