import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        Hello from my native app! This is on my phone!
      </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components"
      />
      <Button onPress={() => navigation.navigate("List")} title="List" />
      <Button onPress={() => navigation.navigate("Image")} title="Image" />
      <Button onPress={() => navigation.navigate("Counter")} title="Counter" />
      <Button onPress={() => navigation.navigate("Color")} title="Color" />
      <Button onPress={() => navigation.navigate("Square")} title="Square" />
      <Button onPress={() => navigation.navigate("Text")} title="Text" />
      <Button onPress={() => navigation.navigate("Box")} title="Box" />

      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>
        List Demo
      </Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  view: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'space-between',
    height: 500
  }, 
});

export default HomeScreen;
