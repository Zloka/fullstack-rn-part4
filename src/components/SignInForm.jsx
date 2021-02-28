import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';


const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;