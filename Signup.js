import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import axios from "axios";

function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setIsShowingResults] = useState(false);

  const title = "Signup";

  async function searchLocation(text) {
    setSearchKeyword(text);
    setStreet(text);
    setCity(text);
    setCountry(text);
    setState(text);

    axios
      .request({
        method: "post",
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${"AIzaSyAU0c0lM0otTV0CBZZU6EnH6bmeOFY0yDo"}&input=${searchKeyword}`,
      })
      .then((response) => {
        console.log(response.data);

        setSearchResults(response.data.predictions);
        setIsShowingResults(true);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }

  return (
    //<SafeAreaView style={styles.container}></SafeAreaView>
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}

      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#000"
            // editable={true}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#000"
            // secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Street Address"
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={searchKeyword}
          />
          {isShowingResults && (
            <FlatList
              data={searchResults}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() => {
                      let a = item.description.split(",");
                      this.setStreet = a[0];
                      this.setCity = a[1];
                      // setState=a[2];
                      // setCountry=a[3];
                      setSearchKeyword(a[0]);
                      setIsShowingResults(false);
                    }}
                  >
                    <Text>{item.description}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )}
        </View>
        {/* state */}

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="State"
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={city}
          />
          {/* {isShowingResults && (
            <FlatList
              data={searchResults}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() =>{
                      let a = item.description.split(',');
                      this.setAddress1= a[0];
                      // setAddress2=a[1];
                      // setState=a[2];
                      // setCountry=a[3];
                      setSearchKeyword(a[0]);
                      setIsShowingResults(false);}
                      
                      
                    }>
                    <Text>{item.description}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )} */}
        </View>
      </ScrollView>

      <Pressable
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>{title}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  image: {
    marginBottom: 40,
  },
  searchResultsContainer: {
    width: 335,
    height: 130,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    position: "absolute",
    top: 50,
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
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: "#aaa",
    color: "#000",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop: 20,
    marginBottom: 10,
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
export default Signup;
