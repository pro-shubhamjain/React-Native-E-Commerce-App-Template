import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

let { height } = Dimensions.get("window");

const initialData = [
  {
    title: "Desktop",
    note: "20% off all Desktop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Laptop",
    note: "30% off all Laptop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Tablet",
    note: "10% off all Tablet",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Mobile",
    note: "40% off all Mobile",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  }
];

export default function Notification({ navigation }) {
  const [listData, setListData] = useState(initialData);

  const deleteRow = title => {
    setListData(prev => prev.filter(row => row.title !== title));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerButton} />
      </View>
      <View style={{ height: height - 80 }}>
        <FlatList
          data={listData}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="notifications-outline" size={30} />
                <View style={{ marginLeft: 8 }}>
                  <Text>{item.title}</Text>
                  <Text style={styles.note}>{item.note}</Text>
                </View>
              </View>
              <Image style={styles.cardImage} source={item.logo} />
              <View style={styles.cardFooter}>
                <Pressable
                  style={styles.footerButton}
                  onPress={() => deleteRow(item.title)}
                >
                  <Ionicons name="trash" size={20} color="#ED4A6A" />
                </Pressable>
                <Text>Swipe for action perform</Text>
                <Pressable
                  style={styles.footerButton}
                  onPress={() => alert(item.title)}
                >
                  <Ionicons name="cart" size={20} color="#2c8ef4" />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    height: 56,
    backgroundColor: "#2c8ef4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8
  },
  headerButton: {
    padding: 8,
    minWidth: 38
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  card: {
    elevation: 3,
    marginLeft: 25,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  note: {
    color: "#8f8f8f"
  },
  cardImage: {
    width: "100%",
    height: 100,
    marginTop: 8,
    borderRadius: 4,
    resizeMode: "cover"
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8
  },
  footerButton: {
    padding: 8
  }
});
