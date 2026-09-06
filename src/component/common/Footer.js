import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TABS = [
  { key: "home", route: "Home", icon: "home", label: "Home" },
  { key: "person", route: "Account", icon: "person", label: "Account" },
  { key: "heart", route: "Wishlist", icon: "heart", label: "Wishlist", badge: "9" },
  { key: "cart", route: "Cart", icon: "cart", label: "Cart", badge: "2" }
];

export function Footers({ routes, active }) {
  return (
    <View style={styles.footer}>
      {TABS.map(tab => {
        const isActive = active === tab.key;
        const color = isActive ? "white" : "#D3D3D3";
        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => routes.navigate(tab.route)}
          >
            {tab.badge ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{tab.badge}</Text>
              </View>
            ) : null}
            <Ionicons name={tab.icon} size={22} color={color} />
            <Text numberOfLines={1} style={{ color }}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    backgroundColor: "#2c8ef4",
    paddingVertical: 8
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  badge: {
    position: "absolute",
    top: 0,
    right: "25%",
    backgroundColor: "#ED4A6A",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  badgeText: {
    color: "white",
    fontSize: 10
  }
});
