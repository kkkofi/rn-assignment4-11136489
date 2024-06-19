import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (name.trim() === "" || email.trim() === "") {
      Alert.alert("Error", "Please enter name and email.");
    } else {
      navigation.navigate("Home", { name, email });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TextInput
          style={styles.textInput}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          placeholderTextColor="#95969D"
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#95969D"
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginContainter}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 208,
  },
  textInput: {
    height: 52,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#95969D",
    paddingLeft: 20,
    fontWeight: "500",
  },
  name: {
    marginBottom: 20,
  },

  loginContainter: {
    backgroundColor: "#356899",
    marginTop: 35,
    height: 56,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
