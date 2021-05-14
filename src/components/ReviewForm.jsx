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
  ownerName: yup
    .string()
    .required('Repository owner name is required!'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
  .number()
  .max(100)
  .min(0)
  .required('Rating is required'),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};


const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput style={styles.topMargin} name="repositoryName" placeholder="Repository name" />
        <FormikTextInput style={styles.topMargin} name="rating" placeholder="Rating between 0 and 100"/>
        <FormikTextInput style={styles.topMargin} name="text" placeholder="Review" multiline/>
        <TouchableWithoutFeedback onPress={handleSubmit} >
          <View style={[styles.button, styles.topMargin]}>
            <Text style={styles.languageText} fontWeight="bold">Create a review</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )}
   </Formik>
  );
};

export default ReviewForm;