import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,
  TextInput,
  Button,Alert,
  TouchableOpacity } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BackgroundAnimation from './Animation/BackAnimation.js';
import React, { Component,useState } from 'react';

function   Welcome({ navigation })   {
// const navigation = useNavigation(); 
  // const { navigation } = this.props
    return (
        
        <View style={styles.container}>
          {/* <BackgroundAnimation /> */}
        {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}
        <StatusBar style="auto" />
        
           

           <View style={styles.loginBtn}>
        
            <Button title="Show alert" onPress={() => navigation.navigate('Login')}   />
            

        
        </View>
       
       
   
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
   
        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity> */}
        
      </View>
    );  
             
   
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      backgroundColor: "#FF1493",
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  
  });
 export default Welcome;
