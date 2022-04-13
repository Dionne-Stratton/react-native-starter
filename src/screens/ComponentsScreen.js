import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return (
    <Text style={styles.text}>
      Sup dawg!
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
