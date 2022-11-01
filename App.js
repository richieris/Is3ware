import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,
  TextInput,
  Button,
  TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login.js'
import Welcome from './Welcome.js'
import React, { Component,useState } from 'react';

// export{Welcome, Login};


const Stack = createNativeStackNavigator();
function NavStack() {
  return (
    
     <Stack.Navigator
     initialRouteName='Welcome'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
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
 


