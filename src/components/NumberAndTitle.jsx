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

export const prettifyNumber = num => num >= 1000 ? `${Math.round((num / 1000) * 10) / 10}k` : num;


const NumberAndTitle = ({ number, title, repoId }) => {
  return (
    <View style={styles.flexContainer}>
      <Text testID={`${repoId}-${title}-number`} fontWeight="bold" style={styles.number}>{prettifyNumber(number)}</Text>
      <Text testID={`${repoId}-${title}`}>{title}</Text>
    </View>
  );
};

export default NumberAndTitle;