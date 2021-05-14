import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: theme.margins.default,
    backgroundColor: 'white',
  },
  topMargin: {
    marginTop: theme.margins.default
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required!'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};


const SignInForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ values }) => (
        <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" testID="sign-in-username" />
        <FormikTextInput style={styles.topMargin} name="password" placeholder="Password" secureTextEntry testID="sign-in-password" />
        <TouchableWithoutFeedback onPress={() => onSubmit({ username: values.username, password: values.password })} testID="sign-in-button" >
          <View style={[styles.button, styles.topMargin]}>
            <Text style={styles.languageText} fontWeight="bold">Sign in</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )}
   </Formik>
  );
};

export default SignInForm;