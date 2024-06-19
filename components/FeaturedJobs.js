import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";

export default function FeaturedJobs() {
  return (
    <View style={styles.container}>
      <View style={styles.featured}>
        <Text style={styles.text}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
      >
        <FeaturedJobCard
          image={require("../assets/facebook.png")}
          title="Software Engineer"
          company={"Facebook"}
          salary={"$180,00"}
          location={"Accra, Ghana"}
          backgroundColor="#5386E4"
        />

        

        <FeaturedJobCard
          image={require("../assets/google.png")}
          title="Data Analyst"
          company={"Google"}
          salary={"$180,00"}
          location={"Accra, Ghana"}
          backgroundColor="#04284A"
        />
        <FeaturedJobCard
          image={require("../assets/netflix.png")}
          title="IT Engineer"
          company={"Netflix"}
          salary={"$110,00"}
          location={"Cape Coast, Ghana"}
          backgroundColor="#E50914"
        />
        
        <FeaturedJobCard
          image={require("../assets/vodafone.png")}
          title="Mechanical Engineer"
          company={"Vodafone"}
          salary={"$130,00"}
          location={"Accra, Ghana"}
          backgroundColor="#CC0000"
        />
        <FeaturedJobCard
          image={require("../assets/linkedin.png")}
          title="Research Scientist"
          company={"LinkedIn"}
          salary={" $100,000"}
          location={"Accra, Ghana"}
          backgroundColor="#054ADA"
        />
        <FeaturedJobCard
          image={require("../assets/amazon.png")}
          title="Database Manager"
          company={"Amazon"}
          salary={"$170,00"}
          location={"Accra, Ghana"}
          backgroundColor="#FF9900"
        />
        <FeaturedJobCard
          image={require("../assets/adobe.png")}
          title="UX/UI Designer"
          company={"Adobe"}
          salary={"$130,00"}
          location={"Accra, Ghana"}
          backgroundColor="#FF0000"
        />
        <FeaturedJobCard
          image={require("../assets/twitter.jpg")}
          title="Network Engineer"
          company={"Twitter"}
          salary={"$90,00"}
          location={"Kumasi, Ghana"}
          backgroundColor="#1DA1F2"
        />
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingLeft: 25,
  },

  featured: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
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
  scrollview: {
    marginTop: 30,
  },
});
