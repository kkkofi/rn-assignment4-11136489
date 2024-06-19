import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.text1}>Welcome Back👋</Text>
      <Text style={styles.text2}>Let's Login. Apply to jobs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 15,
  },
  text1: {
    fontSize: 24,
    fontWeight: "600",
  },

  text2: {
    fontSize: 14,
    fontWeight: "400",
    color: "#95969D",
  },
});
