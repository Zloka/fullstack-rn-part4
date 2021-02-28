import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarRoute from './AppBarRoute';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarRoute onPress={() => console.log("Hello world")} text="Repositories" />
      <AppBarRoute onPress={() => console.log("Hello world")} text="Sign in" />
    </View>
  );
};

export default AppBar;