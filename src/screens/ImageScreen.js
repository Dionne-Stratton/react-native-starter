import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({navigation}) => {
  return <View>
  <Text style={styles.text}>Image Sreen</Text>
    <ImageDetail />
   </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default ImageScreen;
