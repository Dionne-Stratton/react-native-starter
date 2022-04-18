import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  const [name, setName] = useState("Slim Shaddy!");
  return (
    <View style={styles.view}>
      <Text style={styles.text}>BoxScreen 1</Text>
      <Text style={styles.text}>BoxScreen 2</Text>
      <Text style={styles.text}>BoxScreen 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    borderWidth: 10,
    borderColor: 'red',
    padding: 10
  },
  input: {
    margin: 15,
  },
  view: {
    borderWidth: 5,
    borderColor: 'black',
    margin: 20
  }, 
});

export default BoxScreen;
