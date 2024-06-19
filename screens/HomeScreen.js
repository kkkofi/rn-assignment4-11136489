import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import Search from "../components/Search";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularJobs from "../components/PopularJobs";

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>{email}</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/profile.jpeg")}
          />
          <View style={styles.activity}>
            <View style={styles.activity2}></View>
          </View>
        </View>
      </View>
      <Search />
      <FeaturedJobs />
      <PopularJobs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingHorizontal: 30,
    backgroundColor: "#FAFAFD",
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 80,
    paddingHorizontal: 25,
  },
  header: {},
  text1: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D0D26",
  },
  text2: {
    fontSize: 20,
    fontWeight: "400",
    color: "#95969D",
  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 27,
  },
  activity: {
    borderRadius: 100,
    position: "absolute",
    right: 0,
    height: 16,
    width: 16,
    backgroundColor: "#FAFAFD",
    justifyContent: "center",
    alignItems: "center",
  },
  activity2: {
    borderRadius: 100,
    height: 8,
    width: 8,
    backgroundColor: "#FC1010",
  },
});
