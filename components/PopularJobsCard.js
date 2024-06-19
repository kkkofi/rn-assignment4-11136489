import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function PopularJobsCard({
  title,
  company,
  salary,
  location,
  image,
}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <View style={styles.image}>
          <Image style={styles.icon} source={image} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 76,
    width: "100%",
    borderRadius: 20,
  },
  left: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
  icon: {
    height: 45,
    width: 45,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0D0D26",
  },
  company: {
    fontSize: 13,
    fontWeight: "400",
    color: "#95969D",
  },
  location: {
    fontSize: 13,
    fontWeight: "400",
    color: "#95969D",
  },
  salary: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: "500",
    color: "#0D0D26",
  },
});
