import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onUp={() => (red < 255 ? setRed(red + COLOR_INCREMENT) : null)}
        onDown={() => (red > 0 ? setRed(red - COLOR_INCREMENT) : null)}
        counter={red}
        color="red"
      />
      <ColorCounter
        onUp={() => (green < 255 ? setGreen(green + COLOR_INCREMENT) : null)}
        onDown={() => (green > 0 ? setGreen(green - COLOR_INCREMENT) : null)}
        counter={green}
        color="green"
      />
      <ColorCounter
        onUp={() => (blue < 255 ? setBlue(blue + COLOR_INCREMENT) : null)}
        onDown={() => (blue > 0 ? setBlue(blue - COLOR_INCREMENT) : null)}
        color="blue"
        counter={blue}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;
