import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import Socials from "../components/Socials";

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Header text="Jobizz" />
      <Welcome />
      <Login />
      <View style={styles.continue}>
        <View style={styles.left}></View>
        <View>
          <Text style={styles.text}>Or continue with</Text>
        </View>
        <View style={styles.right}></View>
      </View>
      <Socials />
      <View style={styles.register}>
        <Text style={styles.text2}>Haven't an account? </Text>
        <TouchableOpacity>
          <Text style={styles.text3}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  continue: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    backgroundColor: "#95969D",
    height: 0.2,
    borderWidth: 0.2,
    borderColor: "#95969D",
    width: 98,
  },
  text: {
    paddingHorizontal: 15,
    color: "#95969D",
  },

  right: {
    backgroundColor: "#95969D",
    height: 0.2,
    borderWidth: 0.2,
    borderColor: "#95969D",
    width: 98,
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 50,
  },
  text2: {
    color: "#95969D",
  },

  text3: {
    color: "#356899",
  },
});
