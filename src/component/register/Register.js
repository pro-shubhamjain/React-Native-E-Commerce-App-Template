import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cancelRequest } from "src/apis";

export default function Registers({ loading, message, navigation, registerUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const prevLoading = useRef(loading);

  useEffect(() => {
    // Fires once the request finishes (loading true -> false), so `message`
    // reflects this attempt's actual result rather than a stale prior value.
    if (!loading && prevLoading.current) {
      if (message) {
        alert(message);
      } else {
        navigation.navigate("Login");
      }
    }
    prevLoading.current = loading;
  }, [loading, message]);

  useEffect(() => {
    return () => cancelRequest();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>REGISTER</Text>

        <View style={styles.formItem}>
          <Ionicons name="person-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              editable={!loading}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Ionicons name="mail-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Email Id</Text>
            <TextInput
              style={styles.input}
              editable={!loading}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Ionicons name="call-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              editable={!loading}
              value={mobile}
              onChangeText={setMobile}
            />
          </View>
        </View>

        <View style={styles.formItem}>
          <Ionicons name="lock-closed-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              editable={!loading}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <Pressable
          disabled={loading}
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={() => registerUser({ name, email, mobile, password })}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </Pressable>

        <View style={styles.footerRow}>
          <Text>Already have an account? </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
            <Text numberOfLines={1} style={styles.link}>
              Sign in
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 16
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
    marginTop: 16
  },
  buttonDisabled: {
    opacity: 0.6
  },
  buttonText: {
    color: "white",
    fontWeight: "600"
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  link: {
    textDecorationLine: "underline"
  }
});
