import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SiteNavigator from "./SiteNavigator";

export default initialRouteName =>
  createSwitchNavigator(
    {
      Authentication: { screen: AuthNavigator },
      Main: { screen: DrawerNavigator },
      Site: { screen: SiteNavigator }
    },
    {
      initialRouteName,
      headerMode: "none"
    }
  );
