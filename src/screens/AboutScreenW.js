import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialSlider from "../components/MaterialSlider";

function AboutScreenW(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.bemVindoA}>Bem vindo(a)</Text>
        <Text style={styles.daniloAugusto}>Danilo Augusto</Text>
        <View style={styles.rect2}></View>
      </View>
      <Image
        source={require("../assets/images/moraes.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialSlider style={styles.materialSlider}></MaterialSlider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 474,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 268
  },
  bemVindoA: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 42,
    marginLeft: 56
  },
  daniloAugusto: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 113
  },
  rect2: {
    width: 320,
    height: 180,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 25,
    marginLeft: 20
  },
  image: {
    width: 220,
    height: 220,
    marginTop: -719,
    marginLeft: 70
  },
  materialSlider: {
    height: 20,
    width: 150,
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "scroll",
    marginTop: 2,
    marginLeft: 105
  }
});

export default AboutScreenW;
