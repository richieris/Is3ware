import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import React, {  useState } from "react";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = "Login";
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#000"
          // editable={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Home",{paramKey:email})}
      >
        <Text style={styles.loginText}>{title}</Text>
      </Pressable>

      {/* <TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} 
          <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
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
    // backgroundColor: "#fff",
    borderRadius: 0,
    width: "80%",
    height: 45,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    color: "white",
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
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#232629",
  },
});
export default Login;
