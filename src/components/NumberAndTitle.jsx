import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  number: {
    marginBottom: 8,
  }
});


const NumberAndTitle = ({ number, title }) => {
  return (
    <View style={styles.flexContainer}>
      <Text fontWeight="bold" style={styles.number}>{number >= 1000 ? `${Math.round((number / 1000) * 10) / 10}k` : number}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default NumberAndTitle;