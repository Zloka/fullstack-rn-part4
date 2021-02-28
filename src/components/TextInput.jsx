import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: { height: 48, borderColor: 'gray', borderWidth: 1, borderRadius: 4, paddingHorizontal: 8 },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;