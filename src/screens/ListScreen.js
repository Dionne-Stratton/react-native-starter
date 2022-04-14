import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Yeshua", age: 33 },
    { name: "Andy", age: 32 },
    { name: "Nathan", age: 30 },
    { name: "Matthew", age: 40 },
    { name: "Roxanne", age: 42 },
    { name: "Mary", age: 41 },
    { name: "Terri", age: 61 },
  ];
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text}>
              {item.name}, age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 15,
  },
});

export default ListScreen;
