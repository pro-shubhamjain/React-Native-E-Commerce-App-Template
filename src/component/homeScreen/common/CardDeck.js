import React, { useState } from "react";
import { View, Text, Image, Pressable, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

let { height } = Dimensions.get("window");

const cards = [
  {
    title: "Desktop",
    desc: "Swipe for your next product",
    note: "Build your own Desktop",
    logo: require("../../../../assets/Images/desktop-logo.jpg"),
    image: require("../../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Laptop",
    desc: "Swipe for your next product",
    note: "Start build your own Laptop",
    logo: require("../../../../assets/Images/laptop.jpg"),
    image: require("../../../../assets/Images/laptop.jpg")
  },
  {
    title: "Tablet",
    desc: "Swipe for your next product",
    note: "Start build your own Tablet",
    logo: require("../../../../assets/Images/tab-logo.jpg"),
    image: require("../../../../assets/Images/tab.jpg")
  },
  {
    title: "Mobile",
    desc: "Swipe for your next product",
    note: "Start build your own Mobile",
    logo: require("../../../../assets/Images/mobile-logo.jpg"),
    image: require("../../../../assets/Images/mobile.jpg")
  },
  {
    title: "Robots",
    desc: "Swipe for your next product",
    note: "Start build your own Robot",
    logo: require("../../../../assets/Images/robo-logo.jpg"),
    image: require("../../../../assets/Images/robo.jpg")
  }
];

export function CardDeck() {
  const [index, setIndex] = useState(0);
  const item = cards[index];

  const goPrev = () => setIndex(i => (i === 0 ? cards.length - 1 : i - 1));
  const goNext = () => setIndex(i => (i === cards.length - 1 ? 0 : i + 1));

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.logo} source={item.logo} />
          <View style={{ marginLeft: 8 }}>
            <Text>{item.title}</Text>
            <Text style={styles.note}>{item.note}</Text>
          </View>
        </View>
        <Image style={styles.image} source={item.image} />
        <View style={styles.cardFooter}>
          <Pressable onPress={goPrev}>
            <Ionicons name="arrow-back" size={20} color="#ED4A6A" />
          </Pressable>
          <Text>{item.desc}</Text>
          <Pressable onPress={goNext}>
            <Ionicons name="arrow-forward" size={20} color="#ED4A6A" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  card: {
    elevation: 3,
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
  image: {
    width: "100%",
    height: height - 330,
    marginTop: 8,
    borderRadius: 4,
    resizeMode: "cover"
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8
  }
});
