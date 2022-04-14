import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({navigation, title, pic}) => {
  return <View>
      <Image source={pic} />
  <Text >Image of {title}</Text>
   </View>
};

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//     margin: 15,
//   }
// });

export default ImageDetail;
