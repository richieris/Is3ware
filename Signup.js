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
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setIsShowingResults] = useState(false);

  const title = "Signup";

  InsertRecord = () => {
    var Email = email;
    var Password = password;
    var checkEmail = RegExp(
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
    );
    // if (Email.length == 0 || Password.length == 0 || ConfirmPw.length == 0) {
      // if (Email.length == 0 || Password.length == 0 ) {
      //   alert("Required Field Is Missing!!!");
      // } else if (!checkEmail.test(Email)) {
      //   alert("invalid email!!!");
      // } else if (Password.length < 8) {
      //   alert("Minimum 08 characters required!!!");
      // } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
      //   alert("Use atleast 01 special character!!!");
      // } else if (/[ ]/.test(Password)) {
      //   alert("Don't include space in password!!!");
      // } else {
        var InsertAPIURL = "https://10.0.2.2:80/db/SignUp.php"; //API to render signup

        var headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        var Data = {
          Email: Email,
          Password: Password,
        };

        // FETCH func ------------------------------------
        fetch(InsertAPIURL, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(Data), //convert data to JSON
        })
          .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
          .then((response) => {
            alert(response[0].Message); // If data is in JSON => Display alert msg
            this.props.navigation.navigate("Login"); //Navigate to next screen if authentications are valid
          })
          .catch((error) => {
            alert("Error Occured" + error);
          });
      // }
    //  } else if (Password !== ConfirmPw) {
    //    alert("Password doesnot match!!!");
    //  }
  };

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

        {/* street */}
        <SafeAreaView style={styles.searchBox2}>
          <TextInput
            style={styles.TextInput}
            placeholder="Street Address"
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={street}
          />
          {isShowingResults && (
            <FlatList
              // ListFooterComponentStyle={{elevation:0.1, zIndex:3}}
              data={searchResults}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() => {
                      let a = item.description.split(",");
                      setStreet(a[0]);
                      setCity(a[1]);
                      setState(a[2]);
                      setCountry(a[3]);
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
        </SafeAreaView>
        {/* state */}

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="City"
            placeholderTextColor="#000"
            onChangeText={(city) => setCity(city)}
            value={city}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="State"
            placeholderTextColor="#000"
            onChangeText={(state) => setState(state)}
            value={state}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Country"
            placeholderTextColor="#000"
            onChangeText={(country) => setCountry(country)}
            value={country}
          />
        </View>

        <Pressable
          style={styles.loginBtn}
          onPress={() => {InsertRecord()}}
        >
          <Text style={styles.loginText}>{title}</Text>
        </Pressable>
      </ScrollView>
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
  flatList: {
    backgroundColor: "red",
  },

  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  image: {
    marginBottom: 40,
  },
  searchResultsContainer: {
    elevation: 0.1,
    zIndex: 2,
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
  resultItem: {
    width: "100%",
    zIndex: 2,
    elevation: 1,
    justifyContent: "center",
    height: 40,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingLeft: 15,
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
  searchBox2: {
    width: 340,
    height: 50,
    fontSize: 18,
    zIndex: 100,
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
