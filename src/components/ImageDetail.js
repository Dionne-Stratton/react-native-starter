import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImageDetail = ({navigation, title, pic}) => {
  return <View>
  <Text style={styles.text} img={pic} >Image of {title}</Text>
   </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 15,
  }
});

export default ImageDetail;
