import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App(navigation) {
  return (
    <NavigationContainer>
      {
        <MyStack />
      }
    </NavigationContainer>
  );
};
