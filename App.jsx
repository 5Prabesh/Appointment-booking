import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';

const App = () => {
  return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
  )
}

export default App;