import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorCounter = ({ color, onUp, onDown, counter }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Text>Current Count: {counter} </Text>
      <Button onPress={() => onUp()} title="+" />
      <Button onPress={() => onDown()} title="-" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 15,
  },
});

export default ColorCounter;
