import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import global from "../styles/global";

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "black",
  },
});

function About(): React.JSX.Element {
  return (
    <SafeAreaView style={global.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.subHeading}>About this app</Text>
        <Text style={styles.description}>This is just for testing</Text>
        <Text style={styles.subHeading}>App Features</Text>
        <Text style={styles.description}>About page</Text>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "#534c4c",
          marginTop: 7,
          textAlign: "center",
        }}
      >
        © 2025
        {new Date().getFullYear() == 2025
          ? ""
          : " - " + new Date().getFullYear().toString()}
      </Text>
    </SafeAreaView>
  );
}

export default About;
