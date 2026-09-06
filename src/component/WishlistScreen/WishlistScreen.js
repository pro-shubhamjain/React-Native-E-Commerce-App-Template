import React from "react";
import { View, Text, Image, Pressable, FlatList, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Headers } from "../common";
import { addToCart } from "src/action";

let { height } = Dimensions.get("window");

const cards = [
  {
    title: "Desktop",
    note: "Build your own Desktop",
    price: "80,000 INR",
    logo: require("../../../assets/Images/asc-logo.jpg")
  },
  {
    title: "Laptop",
    note: "Start build your own Laptop",
    price: "60,000 INR",
    logo: require("../../../assets/Images/laptop.jpg")
  },
  {
    title: "Tablet",
    note: "Start build your own Tablet",
    price: "35,000 INR",
    logo: require("../../../assets/Images/tab-logo.jpg")
  },
  {
    title: "Mobile",
    note: "Start build your own Mobile",
    price: "25,000 INR",
    logo: require("../../../assets/Images/mobile-logo.jpg")
  },
  {
    title: "Robots",
    note: "Start build your own Robot",
    price: "1,20,000 INR",
    logo: require("../../../assets/Images/robo-logo.jpg")
  }
];

function WishlistScreen({ navigation, addToCart }) {
  return (
    <View style={styles.container}>
      <Headers routes={navigation} />
      <View style={{ marginTop: 20, height: height - 150 }}>
        <FlatList
          data={cards}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.logo} source={item.logo} />
                <View style={{ marginLeft: 8 }}>
                  <Text>{item.title}</Text>
                  <Text style={styles.note}>{item.note}</Text>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <Pressable style={styles.actionButton}>
                  <Ionicons name="trash" size={18} color="#ED4A6A" />
                  <Text style={{ color: "#ED4A6A", marginLeft: 4 }}>Remove</Text>
                </Pressable>
                <Pressable
                  style={styles.actionButton}
                  onPress={() =>
                    addToCart({ title: item.title, price: item.price, logo: item.logo })
                  }
                >
                  <Ionicons name="cart" size={18} color="#2ecc71" />
                  <Text style={{ color: "#2ecc71", marginLeft: 4 }}>Add To Cart</Text>
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
  card: {
    elevation: 3,
    marginLeft: 15,
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
  logo: {
    width: 40,
    height: 40,
    borderRadius: 4
  },
  note: {
    color: "#8f8f8f"
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default connect(null, { addToCart })(WishlistScreen);
