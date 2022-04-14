import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import beach from '../../assets/beach.jpg'
import forest from '../../assets/forest.jpg'
import mountains from '../../assets/mountain.jpg'

const ImageScreen = ({navigation}) => {
  return <View>
    <ImageDetail title="forest" pic={forest} />
    <ImageDetail title="mountains" pic={mountains} />
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
