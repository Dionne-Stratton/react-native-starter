import React from "react";
import { Text, StyleSheet } from "react-native";

const TextScreen = () => {
  return <Text style={styles.text}>Text screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default TextScreen;
