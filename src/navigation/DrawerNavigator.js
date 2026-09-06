import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Item1 from "../component/drawerItems/Item1";
import Item2 from "../component/drawerItems/Item2";
import TabNavigator from "./TabNavigator";
import SideBar from "../component/common/SideBar";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      id="RootDrawer"
      screenOptions={{ headerShown: false }}
      drawerContent={props => <SideBar {...props} />}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="Item1" component={Item1} />
      <Drawer.Screen name="Item2" component={Item2} />
    </Drawer.Navigator>
  );
}
