import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

import colors from '../constants/colors';

const Input = ({mark, value, setValue}) => {
  const handleInput = text => {
    setValue(text);
  };

  return (
    <>
      <Text style={styles.inputTitle}>{value && mark}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={handleInput}
        placeholder={mark}
        secureTextEntry={mark == 'Пароль' && true}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputTitle: {
    width: '100%',
    paddingTop: '5%',
    paddingLeft: '3%',
    textAlign: 'left',
    fontSize: 12,
  },
  textInput: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    paddingLeft: '3%',
    paddingVertical: '1%',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },
});
