import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  touchable: {
    padding: theme.margins.default,
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarRoute = ({ text, to, onPress }) => {
  return to ? (
    <Link component={TouchableWithoutFeedback} to={to}>
      <Text style={styles.touchable}>{text}</Text>
    </Link>
  ) : (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.touchable}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarRoute;