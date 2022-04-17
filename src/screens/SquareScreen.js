import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      if (state.red + action.payload > 260 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "green":
      if (
        state.green + action.payload > 260 ||
        state.green + action.payload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "blue":
      if (
        state.blue + action.payload > 260 ||
        state.blue + action.payload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onUp={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDown={() => dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })}
        counter={red}
        color="red"
      />
      <ColorCounter
        onUp={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDown={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
        counter={green}
        color="green"
      />
      <ColorCounter
        onUp={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDown={() => dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })}
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
