import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "1. Yeshua", age: 33 },
    { name: "2. Andy", age: 32 },
    { name: "4. Nathan", age: 30 },
    { name: "5. Yeshua", age: 1 },
    { name: "6. Andy", age: 2 },
    { name: "7. Nathan", age: 4 },
    { name: "8. Yeshua", age: 1 },
    { name: "9. Andy", age: 2 },
    { name: "30. Nathan", age: 3 },
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
