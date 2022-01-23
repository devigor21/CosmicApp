import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/elements';

import Input from '../components/Input';
import {UserActionTypes} from '../store/actions/userAction';
import colors from '../constants/colors';
import screens from '../constants/screens';

const AuthScreen = ({navigation}) => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  const handlePress = () => {
    if (loginValue && passwordValue) {
      const user = {name: loginValue, password: passwordValue};
      dispatch({type: UserActionTypes.SET_USER, payload: user});

      navigation.navigate(screens.list);

      setLoginValue('');
      setPasswordValue('');
    } else {
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight + 160}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.loginScreenTitle}>Вход</Text>
          <Text style={styles.loginTextContent}>
            Согласно классификации М.Вебера, форма политического сознания
            предсказуема. Полтическая психология, согласно традиционным
            представлениям, символизирует системный культ личности
          </Text>
          <View style={styles.inputContainer}>
            <Input mark={'Логин'} value={loginValue} setValue={setLoginValue} />
            <Input
              mark={'Пароль'}
              value={passwordValue}
              setValue={setPasswordValue}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
            <Text style={styles.btnTitle}>Войти</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: '5%',
    flex: 1,
    justifyContent: 'center',
  },
  loginScreenTitle: {
    marginBottom: '5%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: colors.primary,
  },
  loginTextContent: {
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: '5%',
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    height: 35,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  btnTitle: {
    color: '#FFF',
  },
});
