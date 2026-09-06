import React, { useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Headers } from "../common";
import { CardDeck } from "./common";

export default function HomeScreen({ navigation, fetchCurrentUser }) {
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <View style={styles.container}>
      <Headers routes={navigation} />
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Ionicons name="search-outline" size={20} />
      </View>
      <CardDeck />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  searchInput: {
    flex: 1,
    fontSize: 16
  }
});
