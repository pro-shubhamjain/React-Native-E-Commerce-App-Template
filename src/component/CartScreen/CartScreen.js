import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Headers } from "../common";
import { removeFromCart } from "src/action";
import { items } from "./array";

let { height } = Dimensions.get("window");

function CartCard({ item, removeFromCart }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image style={styles.thumbnail} source={item.logo} />
        <View style={styles.headerLabels}>
          <Text>ITEM :</Text>
          <Text>QTY :</Text>
          <Text>PRICE :</Text>
        </View>
        <View style={styles.headerValues}>
          <Text>{item.title}</Text>
          <Text>{item.qty}</Text>
          <Text>{item.price}</Text>
        </View>
      </View>
      <View style={styles.divider}>
        <Text style={styles.specTitle}>Specifications</Text>
      </View>
      <ScrollView style={{ maxHeight: height - 450 }}>
        {items.map((spec, index) => (
          <Text key={`${spec}-${index}`} style={styles.specRow}>
            {spec}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.cardFooter}>
        <Pressable style={styles.actionButton} onPress={() => removeFromCart(item.title)}>
          <Ionicons name="trash" size={18} color="#ED4A6A" />
          <Text style={{ color: "#ED4A6A", marginLeft: 4 }}>Remove</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Ionicons name="settings" size={18} color="#2c8ef4" />
          <Text style={{ color: "#2c8ef4", marginLeft: 4 }}>Edit</Text>
        </Pressable>
      </View>
    </View>
  );
}

function CartScreen({ navigation, cartItems, removeFromCart }) {
  return (
    <View style={styles.container}>
      <Headers routes={navigation} />
      <View style={{ height: height - 150, margin: 10 }}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="cart-outline" size={48} color="#D3D3D3" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
          </View>
        ) : (
          <FlatList
            data={cartItems}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <CartCard item={item} removeFromCart={removeFromCart} />
            )}
            ListFooterComponent={
              <Pressable style={styles.payButton}>
                <Text style={styles.payButtonText}>Make Payment</Text>
              </Pressable>
            }
          />
        )}
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
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 4
  },
  headerLabels: {
    marginLeft: 12
  },
  headerValues: {
    marginLeft: 24
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8
  },
  specTitle: {
    textDecorationLine: "underline"
  },
  specRow: {
    paddingVertical: 4
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
    marginTop: 8
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  payButton: {
    backgroundColor: "#2c8ef4",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8
  },
  payButtonText: {
    color: "white",
    fontWeight: "600"
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    marginTop: 8,
    color: "#8f8f8f",
    fontSize: 16
  }
});

const mapStateToProps = ({ cart }) => ({ cartItems: cart.items });

export default connect(mapStateToProps, { removeFromCart })(CartScreen);
