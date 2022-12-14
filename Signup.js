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
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Street, setStreet] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Zip, setZip] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setIsShowingResults] = useState(false);

  const title = "Signup";

  const InsertRecord = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postName: "React updates " }),
    };

  //   try {
  //     await fetch("http://192.168.7.85:3000/api/users", requestOptions).then(
  //       (response) => {
  //         response.json();
  //         // .then((data) => {
  //         //   Alert.alert("Post created at : ", data.createdAt);
  //         // });
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


    axios.post(
        "http://192.168.7.85:3000/Addusers", //10.160.201.119
        {
          
          email: Email,
          password: Password,
          street_address: Street,
          city: City,
          state: State,
          country: Country
        },
        { timeout: 2000 }
      )
      .then((response) => {
        // Do something with the response data
        console.log(response.data.message);
        navigation.navigate("Login");
      })
      .catch((error) => {
        // Do something with the error
        console.error(error);
        console.log(error.code);
        console.log(error.message);
        console.log(error.stack);
        console.log(error.response);
        console.log(error.request);
        console.log(Street);
      });
  };
  // .then((response) => {
  //       alert(response[0].Message); // If data is in JSON => Display alert msg
  //       //Navigate to next screen if authentications are valid
  //     })

  // InsertRecord = () => {
  //   var Email = email;
  //   var Password = password;
  //   var checkEmail = RegExp(
  //     /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i
  //   );
  //   // if (Email.length == 0 || Password.length == 0 || ConfirmPw.length == 0) {
  //   // if (Email.length == 0 || Password.length == 0 ) {
  //   //   alert("Required Field Is Missing!!!");
  //   // } else if (!checkEmail.test(Email)) {
  //   //   alert("invalid email!!!");
  //   // } else if (Password.length < 8) {
  //   //   alert("Minimum 08 characters required!!!");
  //   // } else if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Password)) {
  //   //   alert("Use atleast 01 special character!!!");
  //   // } else if (/[ ]/.test(Password)) {
  //   //   alert("Don't include space in password!!!");
  //   // } else {
  //   var InsertAPIURL = "http://10.160.201.119:5000/users"; //API to render signup

  //   var headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };

  //   var Data = {
  //     Email: Email,
  //     Password: Password,
  //   };

  //   // FETCH func ------------------------------------
  //   axios
  //     .get(InsertAPIURL, {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(Data), //convert data to JSON
  //     })
  //     .then((response) => response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
  //     .then((response) => {
  //       alert(response[0].Message); // If data is in JSON => Display alert msg
  //       navigation.navigate("Login"); //Navigate to next screen if authentications are valid
  //     })
  //     .catch((error) => {
  //       alert("Error Occured" + error);
  //     });
  //   // }
  //   //  } else if (Password !== ConfirmPw) {
  //   //    alert("Password doesnot match!!!");
  //   //  }
  // };

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
            value={Email}
            // editable={true}
            onChangeText={(e) => setEmail(e)}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#000"
            // secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        {/* street */}
        <SafeAreaView style={styles.searchBox2}>
          <TextInput
            style={styles.TextInput}
            placeholder="Street Address"
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={Street}
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
            onChangeText={(City) => setCity(City)}
            value={City}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="State"
            placeholderTextColor="#000"
            onChangeText={(State) => setState(State)}
            value={State}
          />
        </View>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.TextInput}
            placeholder="Country"
            placeholderTextColor="#000"
            onChangeText={(Country) => setCountry(Country)}
            value={Country}
          />
        </View>

        <Pressable
          style={styles.loginBtn}
          onPress={() => {
            InsertRecord();
          }}
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
