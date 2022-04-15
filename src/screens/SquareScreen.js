import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) =>{
    
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})

  return (
    <View>
      <ColorCounter
        onUp={() => }
        onDown={() => }
        counter={red}
        color="red"
      />
      <ColorCounter
        onUp={() => }
        onDown={() => }
        counter={green}
        color="green"
      />
      <ColorCounter
        onUp={() => }
        onDown={() => }
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
