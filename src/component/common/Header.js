import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { localize } from "src/internationalization";

export function Headers({ routes }) {
  return (
    <View style={styles.header}>
      <Pressable
        style={styles.iconButton}
        onPress={() => routes.getParent("RootDrawer")?.openDrawer()}
      >
        <Ionicons name="menu" size={24} color="white" />
      </Pressable>
      <Text style={styles.title}>{localize("company")}</Text>
      <Pressable
        style={styles.iconButton}
        onPress={() => routes.navigate("Notify")}
      >
        <View style={styles.badge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
        <Ionicons name="notifications" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: "#2c8ef4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8
  },
  iconButton: {
    padding: 8
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
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
