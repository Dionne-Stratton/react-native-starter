import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

const ColorScreen = (props) => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
        title="Add random color"
      />
      <Text>Colors: </Text>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColorScreen;
