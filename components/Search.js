import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

export default function Search() {
  return (
    <View style={styles.searchConatiner}>
      <View style={styles.search}>
        <View style={styles.icon}>
          <Icon.Search
            height={25}
            width={25}
            stroke={"#95969D"}
            strokeWidth={1}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
        />
      </View>

      <TouchableOpacity style={styles.sliders}>
        <Icon.Sliders height={25} width={25} stroke="#356899" strokeWidth={1} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchConatiner: {
    paddingHorizontal: 25,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // paddingHorizontal: 30,
    marginTop: 35,

    justifyContent: "space-between",
  },
  search: {
    backgroundColor: "#F2F2F3",
    height: 48,
    width: 263,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    paddingLeft: 15,
  },

  textInput: {
    flex: 1,
    height: 49,
    width: 353,
    paddingLeft: 10,
    fontWeight: "400",
  },
  sliders: {
    marginLeft: 15,
    backgroundColor: "#F2F2F3",
    height: 48,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
