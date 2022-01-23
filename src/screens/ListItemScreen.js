import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {UserActionTypes} from '../store/actions/userAction';
import colors from '../constants/colors';
import screens from '../constants/screens';

const ListItemScreen = ({route, navigation}) => {
  const {title, description} = route.params;
  const {goBack} = navigation;
  const dispatch = useDispatch();

  const handlePress = () => {
    navigation.navigate(screens.auth);
    dispatch({type: UserActionTypes.CLEAR_USER});
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Text style={styles.backBtnTitle}>Назад</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logOutBtn} onPress={handlePress}>
          <Text style={styles.logOutBtnTitle}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
  },
  title: {
    marginBottom: '4%',
    color: '#000',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 35,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  logOutBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: colors.primary,
  },
  backBtnTitle: {
    color: colors.primary,
  },
  logOutBtnTitle: {
    color: '#FFF',
  },
});
