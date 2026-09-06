import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../component/login";
import Register from "../component/register";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
