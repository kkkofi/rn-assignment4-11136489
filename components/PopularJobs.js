import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import PopularJobsCard from "./PopularJobsCard";

const jobsData = [
  {
    id: "1",
    image: require("../assets/burgerKing.png"),
    title: "Jr. Executive",
    company: "Burger King",
    salary: "$96,000/y",
    location: "Los Angeles, US",
  },
  {
    id: "2",
    image: require("../assets/beats.png"),
    title: "Product Manager",
    company: "Beats",
    salary: "$84,000/y",
    location: "Florida, US",
  },
  {
    id: "3",
    image: require("../assets/spotify.png"),
    title: "Data Scientist",
    company: "Spotify",
    salary: "$130,000/y",
    location: "Los Vegas, US",
  },
  {
    id: "4",
    image: require("../assets/snapchat.png"),
    title: "Product Designer",
    company: "Snapchat",
    salary: "$160,000/y",
    location: "New York City, US",
  },
  {
    id: "5",
    image: require("../assets/twitter.png"),
    title: "Sales Manager",
    company: "Twitter",
    salary: "$180,000/y",
    location: "Los Angeles, US",
  },
  {
    id: "6",
    image: require("../assets/starbucks.png"),
    title: "Barista",
    company: "Starbucks",
    salary: "$20,000/y",
    location: "Los Angeles, US",
  },
  {
    id: "7",
    image: require("../assets/instagram.png"),
    title: "Content Strategist",
    company: "Instagram",
    salary: "$140,000/y",
    location: "Los Angeles, US",
  },
  {
    id: "8",
    image: require("../assets/youtube.png"),
    title: "Software Engineer",
    company: "YouTube",
    salary: "$200,000/y",
    location: "Los Angeles, US",
  },
];

export default function PopularJobs() {
  return (
    <View style={styles.container}>
      <View style={styles.popular}>
        <Text style={styles.text}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={jobsData}
          renderItem={({ item }) => (
            <PopularJobsCard
              image={item.image}
              title={item.title}
              company={item.company}
              salary={item.salary}
              location={item.location}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 50,
    paddingHorizontal: 25,
  },
  popular: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D0D26",
  },
  text2: {
    fontSize: 14,
    fontWeight: "400",
    color: "#95969D",
  },
});
