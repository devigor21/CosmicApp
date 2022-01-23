import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const User = () => {
  const userName = useSelector(state => state.user.user.name);

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <Icon name="user" size={20} color="#FFF" />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginRight: 10,
    color: '#FFF',
  },
});
