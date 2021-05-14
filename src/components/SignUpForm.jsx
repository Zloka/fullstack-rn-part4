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
    .min(1)
    .max(30)
    .required('Username is required!'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password is required!'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required!')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};


const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput style={styles.topMargin} name="password" placeholder="Password" />
        <FormikTextInput style={styles.topMargin} name="passwordConfirm" placeholder="Password confirmation"/>
        <TouchableWithoutFeedback onPress={handleSubmit} >
          <View style={[styles.button, styles.topMargin]}>
            <Text style={styles.languageText} fontWeight="bold">Sign up</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )}
   </Formik>
  );
};

export default SignUpForm;