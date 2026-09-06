import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";

import { setBaseURL, setCustomHeaders } from "./apis";
import AppNavigator from "./navigation/AppNavigator";

// On a physical device (Expo Go), "localhost" points at the phone itself, not
// the dev machine. Derive the dev machine's LAN IP from the Metro/Expo dev
// server's own host so the mock backend is reachable from a real device too.
function getApiBaseUrl() {
  const hostUri = Constants.expoConfig?.hostUri;
  const host = hostUri ? hostUri.split(":")[0] : "localhost";
  return `http://${host}:5000/api`;
}

function Routing({ token }) {
  useEffect(() => {
    setBaseURL(getApiBaseUrl());
    if (token) {
      setCustomHeaders([{ name: "Authorization", value: token }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator token={token} />
    </NavigationContainer>
  );
}

const mapStateToProps = ({ user }) => {
  const { token } = user;
  return { token };
};

export default connect(mapStateToProps, {})(Routing);
