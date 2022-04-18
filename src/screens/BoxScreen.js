import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = () => {
  const [name, setName] = useState("Slim Shaddy!");
  return (
    <View style={styles.view}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
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
  box1: {
    borderWidth: 3,
    borderColor: 'blue',
  },
  box2: {
    borderWidth: 3,
    borderColor: 'blue',
    ...StyleSheet.absoluteFillObject
  },
  box3: {
    borderWidth: 3,
    borderColor: 'blue',
  },
  view: {
    borderWidth: 5,
    borderColor: 'black',
    margin: 20,
    height: 200
  }, 
});

export default BoxScreen;
