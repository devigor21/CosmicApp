import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setData} from '../store/actions/dataAction';
import colors from '../constants/colors';
import screens from '../constants/screens';

const ListScreen = ({navigation}) => {
  const data = useSelector(state => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <ScrollView>
          {data.map(el => (
            <TouchableOpacity
              key={el.id}
              style={styles.item}
              onPress={() =>
                navigation.navigate(screens.item, {
                  title: el.title,
                  description: el.description,
                })
              }>
              <Text style={styles.title}>{el.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={colors.primary}
        />
      )}
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: '2%',
  },
  title: {
    padding: '3%',
    borderWidth: 1,
    borderColor: colors.secondary,
    color: '#000',
  },
  loading: {
    flex: 1,
  },
});
