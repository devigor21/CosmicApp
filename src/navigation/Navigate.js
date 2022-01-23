import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './stack/AppStack';

export default function Navigate() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
