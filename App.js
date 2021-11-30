import React from 'react';

// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './login/LoginPage';
import HomePage from './home/homePage';






const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="登录" component={LoginPage} options={{ headerShown: false }} />
        {/* <Stack.Screen name="首页" component={HomePage} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
