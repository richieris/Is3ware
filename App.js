import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Welcome from "./Welcome";
import Signup from "./Signup";
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// export{Welcome, Login};
// Starting our app.
const Stack = createNativeStackNavigator();
function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
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
