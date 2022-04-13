import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const husbands = [
        {name: "Andy"}, {name: "Nathan"}, {name: "Yeshua"}
    ]
  return (
    <View>
      <FlatList data={husbands} renderItem={(element) =>{}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ListScreen;
