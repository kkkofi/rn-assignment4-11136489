import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Socials() {
  return (
    <View style={styles.socials}>
      <TouchableOpacity style={styles.image}>
        <Image style={styles.icon} source={require("../assets/apple.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.image}>
        <Image style={styles.icon} source={require("../assets/google.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.image}>
        <Image style={styles.icon} source={require("../assets/facebook.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  socials: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    height: 56,
    width: 216,
  },
  image: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 24,
    width: 24,
  },
});
