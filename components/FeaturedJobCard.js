import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function FeaturedJobCard({
  title,
  company,
  salary,
  location,
  image,
  backgroundColor,
}) {
  return (
    <TouchableOpacity style={[styles.box, { backgroundColor }]}>
      <View style={styles.overlayContainer}>
        <Image
          source={require("../assets/Group.png")}
          resizeMode="contain"
          style={styles.overlay}
        />
      </View>
      <View style={styles.head}>
        <View style={styles.image}>
          <Image style={styles.icon} source={image} />
        </View>
        <View style={styles.job}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    marginRight: 15,
    padding: 25,
    width: 280,
    height: 186,
    borderRadius: 24,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.15,
    width: 280,
    height: 186,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
  },

  head: {
    flexDirection: "row",
  },

  image: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    height: 46,
    width: 46,
    borderRadius: 12,
  },

  icon: {
    height: 24,
    width: 24,
  },
  job: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  company: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.75)",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  salary: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  location: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
