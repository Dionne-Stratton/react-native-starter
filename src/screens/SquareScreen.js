import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) =>{
    switch (action.colorToChange) {
      case 'red':
        return { ...state, red: state.red + action.amount};
      case 'green':
        return { ...state, green: state.green + action.amount};
      case 'blue':
        return { ...state, blue: state.blue + action.amount};
      default:
        return state
    }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        onUp={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT}) }
        onDown={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT}) }
        counter={red}
        color="red"
      />
      <ColorCounter
        onUp={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT}) }
        onDown={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT}) }
        counter={green}
        color="green"
      />
      <ColorCounter
        onUp={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT}) }
        onDown={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT}) }
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
