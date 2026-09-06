import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { logout } from "src/action";

let { height } = Dimensions.get("window");

const MENU_ITEMS = [
  { icon: "reorder-three-outline", label: "Your Orders" },
  { icon: "folder-open-outline", label: "Wallet" },
  { icon: "card-outline", label: "Saved Cards" },
  { separator: true },
  { icon: "trophy-outline", label: "Refer N Earn" },
  { icon: "film-outline", label: "My Coupons" },
  { separator: true },
  { icon: "help-circle-outline", label: "Help And Support" },
  { icon: "settings-outline", label: "Settings" },
  { separator: true },
  { icon: "document-text-outline", label: "Abouts Us" },
  { icon: "clipboard-outline", label: "Terms And Service" }
];

function SideBar({ token, name, email, navigation, logout }) {
  const prevToken = useRef(token);
  useEffect(() => {
    if (!prevToken.current && token) {
      navigation.navigate("Login");
    }
    prevToken.current = token;
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Ionicons name="person-circle" size={40} color="white" />
        </View>
        <Text style={styles.profileText}>{name}</Text>
        <Text style={styles.profileText}>{email}</Text>
      </View>
      <View style={{ height: height - 150 }}>
        {MENU_ITEMS.map((item, index) =>
          item.separator ? (
            <View key={`sep-${index}`} style={styles.separator} />
          ) : (
            <View key={item.label} style={styles.listItem}>
              <Ionicons name={item.icon} size={20} />
              <Text style={styles.listItemText}>{item.label}</Text>
              <Ionicons name="arrow-forward" size={18} />
            </View>
          )
        )}
        <View style={styles.listItem}>
          <Ionicons name="log-out-outline" size={20} />
          <Pressable onPress={() => logout()}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  profile: {
    backgroundColor: "#2c8ef4",
    height: 150,
    alignItems: "center"
  },
  avatar: {
    marginTop: 40,
    width: 40,
    height: 40,
    borderRadius: 20
  },
  profileText: {
    marginTop: 5,
    color: "white"
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  listItemText: {
    flex: 1,
    marginLeft: 16
  },
  signOutText: {
    marginLeft: 16,
    textDecorationLine: "underline"
  },
  separator: {
    height: 10,
    backgroundColor: "#f0f0f0"
  }
});

const mapStateToProps = ({ user }) => {
  const { email, name, token } = user;
  return { email, name, token };
};

export default connect(mapStateToProps, { logout })(SideBar);
