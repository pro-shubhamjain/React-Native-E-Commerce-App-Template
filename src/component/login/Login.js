import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cancelRequest, setCustomHeaders } from "src/apis";

export default function Logins({
  token,
  message,
  loading,
  navigation,
  loginUser,
  loginAsDemoUser
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const prevToken = useRef(token);
  const prevMessage = useRef(message);

  useEffect(() => {
    if (!prevToken.current && token && prevToken.current !== token) {
      setCustomHeaders([{ name: "Authorization", value: token }]);
    } else if (message && message !== prevMessage.current) {
      alert(message);
    }
    prevToken.current = token;
    prevMessage.current = message;
  }, [token, message]);

  useEffect(() => {
    return () => cancelRequest();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>SIGN IN</Text>

        <View style={styles.formItem}>
          <Ionicons name="mail-outline" size={20} />
          <View style={styles.formField}>
            <Text style={styles.label}>Email Id / Mobile Number</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              editable={!loading}
              value={email}
              onChangeText={setEmail}
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
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <Text numberOfLines={1} style={styles.forgotPassword}>
            Forgot password?
          </Text>
        </TouchableWithoutFeedback>

        <Pressable
          disabled={loading}
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={() => loginUser({ email, password })}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </Pressable>

        <Pressable
          disabled={loading}
          style={styles.demoButton}
          onPress={() => loginAsDemoUser()}
        >
          <Text style={styles.demoButtonText}>Continue as Demo User</Text>
        </Pressable>

        <View style={styles.footerRow}>
          <Text>Don't have an account? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <Text numberOfLines={1} style={styles.link}>
              Sign up
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackdrop}>
            <View
              style={styles.modalCard}
              onStartShouldSetResponder={() => true}
            >
              <Text style={styles.modalTitle}>Forget Password</Text>
              <Text style={styles.modalBody}>
                Check your email. After you enter your email, an email will be
                sent to your Issuu-associated email address. Click Set a new
                password, and you will be redirected to a page where you can
                enter a new password.
              </Text>
              <View style={styles.formItem}>
                <Ionicons name="mail-outline" size={20} />
                <View style={styles.formField}>
                  <Text style={styles.label}>Email Id</Text>
                  <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>
              </View>
              <View style={styles.modalActions}>
                <Pressable
                  style={styles.smallButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text>Cancel</Text>
                </Pressable>
                <Pressable style={styles.smallButton} onPress={() => {}}>
                  <Text>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  forgotPassword: {
    alignSelf: "flex-end",
    paddingTop: 8
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
  demoButton: {
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#2c8ef4",
    borderStyle: "dashed"
  },
  demoButtonText: {
    color: "#2c8ef4",
    fontWeight: "600"
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  link: {
    textDecorationLine: "underline"
  },
  modalBackdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0007"
  },
  modalCard: {
    width: "85%",
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 16
  },
  modalTitle: {
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "center",
    paddingBottom: 10
  },
  modalBody: {
    fontSize: 14,
    marginBottom: 16
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  smallButton: {
    borderWidth: 1,
    borderColor: "#2c8ef4",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16
  }
});
