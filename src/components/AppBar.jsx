import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  touchable: {
    padding: theme.margins.default,
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => console.log("Test!")}>
        <Text style={styles.touchable}>Repositories</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;