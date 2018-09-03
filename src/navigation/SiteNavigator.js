import { createStackNavigator } from "react-navigation";

import Notifaction from "../component/common/Notification";

export default createStackNavigator(
  {
    Notify: { screen: Notifaction }
  },
  {
    headerMode: "none"
  }
);
