import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Headers } from "../common";

const addresses = [
  {
    title: "First Address",
    content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
  },
  { title: "Second Address", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Address", content: "No Input" }
];

function AddressAccordion() {
  const [expanded, setExpanded] = useState(null);

  return (
    <View>
      {addresses.map((address, index) => {
        const isExpanded = expanded === index;
        return (
          <View key={address.title}>
            <Pressable
              style={styles.accordionHeader}
              onPress={() => setExpanded(isExpanded ? null : index)}
            >
              <Text style={styles.accordionTitle}>{address.title}</Text>
              <Ionicons name={isExpanded ? "remove-circle" : "add-circle"} size={18} />
            </Pressable>
            {isExpanded ? (
              <Text style={styles.accordionContent}>{address.content}</Text>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

export default function Account({ navigation, msg, testapi }) {
  useEffect(() => {
    testapi();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Headers routes={navigation} />
      <View style={styles.card}>
        <View style={styles.profileRow}>
          <View style={styles.avatarGroup}>
            <Pressable onPress={pickImage}>
              {image ? (
                <Image style={styles.avatar} source={{ uri: image }} />
              ) : (
                <View style={[styles.avatar, styles.avatarPlaceholder]}>
                  <Ionicons name="person" size={24} color="white" />
                </View>
              )}
            </Pressable>
            <Pressable style={styles.settingsButton}>
              <Ionicons name="settings" size={16} />
            </Pressable>
          </View>
          <View style={styles.balanceGroup}>
            <Text style={styles.note}>Balance</Text>
            <Text style={styles.note}>INR: 1000</Text>
          </View>
        </View>

        <View style={styles.formItem}>
          <Ionicons name="person-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Jhon Deo</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
          </View>
        </View>
        <View style={styles.formItem}>
          <Ionicons name="mail-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Jhon@TrueRuse.com</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          </View>
        </View>
        <View style={styles.formItem}>
          <Ionicons name="call-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>+91-9000900099</Text>
            <TextInput style={styles.input} value={mobile} onChangeText={setMobile} />
          </View>
        </View>
        <View style={styles.formItem}>
          <Ionicons name="lock-closed-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>**********</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <Pressable style={styles.button} onPress={() => alert(msg)}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>

        <AddressAccordion />
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
    margin: 16,
    padding: 16,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  avatarGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 8
  },
  avatarPlaceholder: {
    backgroundColor: "#2c8ef4",
    alignItems: "center",
    justifyContent: "center"
  },
  settingsButton: {
    borderWidth: 1,
    borderColor: "#2c8ef4",
    borderRadius: 4,
    padding: 6
  },
  balanceGroup: {
    alignItems: "flex-start"
  },
  note: {
    color: "#8f8f8f"
  },
  formItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 8
  },
  formField: {
    flex: 1,
    marginLeft: 12
  },
  label: {
    fontSize: 12,
    color: "#8f8f8f"
  },
  input: {
    fontSize: 16,
    paddingVertical: 4
  },
  button: {
    backgroundColor: "#2c8ef4",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 16
  },
  buttonText: {
    color: "white",
    fontWeight: "600"
  },
  accordionHeader: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  accordionTitle: {
    fontWeight: "600"
  },
  accordionContent: {
    backgroundColor: "#CCCCCC",
    padding: 10,
    fontStyle: "italic",
    color: "white"
  }
});
