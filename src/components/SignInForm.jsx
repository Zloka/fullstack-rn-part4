import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.margins.default,
    backgroundColor: 'white',
  },
  textInput: {
    marginBottom: theme.margins.default
  },
  button: {
    height: 40,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  languageText: {
    color: 'white'
  }
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
      <FormikTextInput style={styles.textInput} name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.button}>
          <Text style={styles.languageText} fontWeight="bold">Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;