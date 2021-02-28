import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import NumberAndTitle from './NumberAndTitle';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    marginTop: theme.margins.default,
    justifyContent: 'space-around',
  },
  image: {
    height: 48, width: 48,
    borderRadius: 2,
  },
  container: {
    padding: theme.margins.default,
  },
  textContainer: {
    marginLeft: theme.margins.default,
    flex: 1,
  },
  bottomMargin: {
    marginBottom: 4
  },
  languageContainer: {
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 4,
  },
  languageText: {
    color: 'white'
  }
});


const RepoNumbers = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View style={styles.flexContainer}>
      <NumberAndTitle number={stargazersCount} title="Stars" />
      <NumberAndTitle number={forksCount} title="Forks" />
      <NumberAndTitle number={reviewCount} title="Reviews" />
      <NumberAndTitle number={ratingAverage} title="Ratings" />
    </View>
  );
};

export default RepoNumbers;