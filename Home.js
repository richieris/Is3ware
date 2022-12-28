import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";

function Home({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = "Home";
  return (
    <View style={styles.headerContainer}>
      {/* <Image style={styles.image} source={require("./assets/icon.png")} /> */}

      <StatusBar style="auto" />
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={require("./assets/avatar.jpg")}
      >
        <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={require("./assets/avatar.jpg")}
          />
        </View>
      </ImageBackground>

      {/* <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}> */}
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          
        }}
      >
        <Text style={styles.titleText}>
          First Name:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
        <Text style={styles.titleText}>
          Middle Name:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>

        <Text style={styles.titleText}>
          Last Name:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
        <Text style={styles.titleText}>
          SSN:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
        <Text style={styles.titleText}>
          Street Name (Moniker):
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
        <Text style={styles.titleText}>
          DOB:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
        <Text style={styles.titleText}>
          Gender:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>

        <Text style={styles.titleText}>
          Race:
          <Text style={styles.infoText}>{route.params.paramKey}</Text>
        </Text>
      </View>
      {/* </ScrollView>
      </SafeAreaView> */}
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
  headerContainer: {},
  headerBackgroundImage: {
    paddingBottom: 10,
    paddingTop: 45,
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },

  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },

  image: {
    marginBottom: 40,
  },
  titleText: {
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 18,
  },
  infoText: {
    fontWeight: "normal",
    paddingTop: 20,
    paddingLeft: 300,
    fontSize: 18,
  },
});
export default Home;
