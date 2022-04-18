import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hello from my native app! This is on my phone!
      </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        style={styles.button}
        title="Components"
      />
      <Button style={styles.button} onPress={() => navigation.navigate("List")} title="List" />
      <Button style={styles.button} onPress={() => navigation.navigate("Image")} title="Image" />
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
    fontSize: 30,
  },
  button: {
    margin: 10,
    alignItems: 'center',
    fontSize: 30,
  },
});

export default HomeScreen;
