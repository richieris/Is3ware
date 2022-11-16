import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,
  TextInput,
  Button,
  TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import Welcome from './Welcome'
import React, { Component,useState } from 'react';

// export{Welcome, Login};
// Starting our app.
const Stack = createNativeStackNavigator();
function NavStack() {
  return (
    
     <Stack.Navigator
     initialRouteName='Welcome'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F7F8FB',
          },
          headerTintColor: '#000',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name='Welcome' 
        component={Welcome} 
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{ title: 'Login' }}
      />
          </Stack.Navigator>
         
  );
}

  export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer> 
        <NavStack />
      </NavigationContainer>
     
   );
  }
}
 


