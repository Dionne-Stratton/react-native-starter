import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import beach from '../../assets/beach.jpg'

const ImageScreen = ({navigation}) => {
  return <View>
  <Text style={styles.text}>Image Sreen:</Text>
    <ImageDetail title="forest" />
    <ImageDetail title="mountains" />
    <ImageDetail title="beach" pic ={beach} />
   </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 15,
  }
});

export default ImageScreen;
