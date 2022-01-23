import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from '../../screens/AuthScreen';
import ListScreen from '../../screens/ListScreen';
import ListItemScreen from '../../screens/ListItemScreen';
import User from '../../components/User';
import colors from '../../constants/colors';
import screens from '../../constants/screens';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen name={screens.auth} component={AuthScreen} />
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerRight: () => <User />,
        }}
        name={screens.list}
        component={ListScreen}
      />
      <Stack.Screen
        options={{
          headerRight: () => <User />,
        }}
        name={screens.item}
        component={ListItemScreen}
      />
    </Stack.Navigator>
  );
}
