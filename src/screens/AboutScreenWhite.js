import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialSlider from "../components/MaterialSlider";

function AboutScreenWhite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <Text style={styles.daniloAugusto2}>
            is simply dummy text of the printing and typesetting Lorem Ipsum has
            been the industry&#39;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. t has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </Text>
        </View>
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/moraes.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <MaterialHeader1
          leftIconName="menu"
          rightIconName="dots-vertical"
          leftIconButton="Go Back"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          title="Sobre"
          style={styles.materialHeader1}
        ></MaterialHeader1>
        <MaterialHeader11
          leftIconName="menu"
          rightIconName="dots-vertical"
          title="Sobre"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          style={styles.materialHeader11}
        ></MaterialHeader11>
      </View>
      <Text style={styles.daniloAugusto}>Professor Marcos Moraes</Text>
      <MaterialSlider style={styles.materialSlider}></MaterialSlider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 395,
    marginTop: 347
  },
  rect2: {
    width: 320,
    height: 320,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginTop: 23,
    marginLeft: 20
  },
  daniloAugusto2: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    textAlign: "justify",
    width: 304,
    height: 293,
    marginTop: 15,
    marginLeft: 8
  },
  image: {
    top: 53,
    left: 70,
    width: 220,
    height: 220,
    position: "absolute"
  },
  materialHeader1: {
    height: 56,
    width: 360,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(53,58,62,1)"
  },
  materialHeader11: {
    height: 56,
    width: 360,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(53,58,62,1)"
  },
  imageStack: {
    width: 360,
    height: 273,
    marginTop: -722
  },
  daniloAugusto: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 28,
    marginTop: 20,
    marginLeft: 19
  },
  materialSlider: {
    height: 20,
    width: 150,
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "scroll",
    marginTop: -53,
    marginLeft: 105
  }
});

export default AboutScreenWhite;
