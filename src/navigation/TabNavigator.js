import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "src/component/homeScreen";
import AccountScreen from "src/component/AccountScreen";
import WishlistScreen from "src/component/WishlistScreen/WishlistScreen";
import CartScreen from "src/component/CartScreen/CartScreen";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Home: "home",
  Wishlist: "heart",
  Cart: "cart",
  Account: "person"
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#D3D3D3",
        tabBarStyle: { backgroundColor: "#2c8ef4" },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={`${TAB_ICONS[route.name]}${focused ? "" : "-outline"}`}
            color={color}
            size={size}
          />
        )
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
