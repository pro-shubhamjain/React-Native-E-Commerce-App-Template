import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Item1({ active }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={{ color: active !== "cart" ? "#D3D3D3" : "white" }}>
        Cart
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 16
  }
});
