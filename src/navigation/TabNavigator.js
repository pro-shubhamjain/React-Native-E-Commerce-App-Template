import React from "react";
import { Platform } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "src/component/homeScreen";
import AccountScreen from "src/component/AccountScreen";
import WishlistScreen from "src/component/WishlistScreen/WishlistScreen";
import CartScreen from "src/component/CartScreen/CartScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  { headerMode: "none" }
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Home</Text>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
      style={{
        color: focused ? "white" : "#D3D3D3"
      }}
    />
  )
};

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  { headerMode: "none" }
);

AccountStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Account</Text>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      name={
        Platform.OS === "ios"
          ? `ios-person${focused ? "" : "-outline"}`
          : "md-person"
      }
      style={{
        color: focused ? "white" : "#D3D3D3"
      }}
    />
  ),
  headerMode: "none"
};

const WishlistStack = createStackNavigator(
  {
    Wishlist: WishlistScreen
  },
  { headerMode: "none" }
);

WishlistStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Wishlist</Text>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      name={
        Platform.OS === "ios"
          ? `ios-heart${focused ? "" : "-outline"}`
          : "md-heart"
      }
      style={{
        color: focused ? "white" : "#D3D3D3"
      }}
    />
  ),
  headerMode: "none"
};

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  { headerMode: "none" }
);

CartStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Cart</Text>
  ),
  tabBarIcon: ({ focused }) => (
    <Icon
      name={
        Platform.OS === "ios"
          ? `ios-cart${focused ? "" : "-outline"}`
          : "md-cart"
      }
      style={{
        color: focused ? "white" : "#D3D3D3"
      }}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    WishlistStack,
    CartStack,
    AccountStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#2c8ef4"
      }
    }
  }
);
