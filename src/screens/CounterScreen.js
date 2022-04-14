import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const CounterScreen = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button onPress={() => setCounter(counter + 1)} title="Increment" />
      <Button onPress={() => setCounter(counter - 1)} title="Decrememnt" />
      <Text>Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 15,
  },
});

export default CounterScreen;
