import { createStackNavigator } from "react-navigation";

import Login from "../component/login";
import Register from "../component/register";

export default createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);
