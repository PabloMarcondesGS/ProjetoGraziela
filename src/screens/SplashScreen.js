import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ActivityIndicator
} from "react-native";

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require("../assets/images/logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <ActivityIndicator
        size="large"
        color="rgba(231,195,21,1)"
        style={styles.activityIndicator}
      ></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 170,
    alignSelf: "center"
  },
  activityIndicator: {
    marginTop: 192,
    alignSelf: "center"
  }
});

export default SplashScreen;
