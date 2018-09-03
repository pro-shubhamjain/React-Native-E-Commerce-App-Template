import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Item1 from "src/component/drawerItems/Item1";
import Item2 from "src/component/drawerItems/Item2";
import TabNavigator from "./TabNavigator";
import SideBar from "../component/common/SideBar";

export default createDrawerNavigator(
  {
    Tabs: TabNavigator,
    Item1: { screen: Item1 },
    Item2: { screen: Item2 }
  },
  {
    contentComponent: SideBar
  }
);
