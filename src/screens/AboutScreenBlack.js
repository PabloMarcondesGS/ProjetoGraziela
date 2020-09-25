import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialSlider from "../components/MaterialSlider";
import MaterialHeader1 from "../components/MaterialHeader1";

function AboutScreenBlack(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <MaterialSlider style={styles.materialSlider}></MaterialSlider>
          <Text style={styles.daniloAugusto}>Professor Marcos Moraes</Text>
          <View style={styles.rect2}>
            <Text style={styles.daniloAugusto2}>
              is simply dummy text of the printing and typesetting Lorem Ipsum
              has been the industry&#39;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. t has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/moraes2.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <MaterialHeader1
          leftIconName="menu"
          rightIconName="dots-vertical"
          title="Material"
          leftIconButton="Go Back"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          style={styles.materialHeader1}
        ></MaterialHeader1>
        <MaterialHeader1
          leftIconName="menu"
          rightIconName="dots-vertical"
          leftIconButton="Go Back"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          title="Sobre"
          style={styles.materialHeader2}
        ></MaterialHeader1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53,58,62,1)"
  },
  rect: {
    top: 248,
    left: 0,
    position: "absolute",
    right: 0,
    height: 474
  },
  materialSlider: {
    height: 20,
    width: 150,
    backgroundColor: "rgba(53,58,62,1)",
    overflow: "scroll",
    marginTop: 24,
    marginLeft: 105
  },
  daniloAugusto: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 28,
    marginLeft: 19
  },
  rect2: {
    width: 320,
    height: 320,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginTop: 25,
    marginLeft: 20
  },
  daniloAugusto2: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    textAlign: "justify",
    width: 304,
    height: 292,
    marginTop: 16,
    marginLeft: 8
  },
  image1: {
    top: 52,
    left: 0,
    position: "absolute",
    right: 0,
    height: 220
  },
  materialHeader1: {
    height: 56,
    width: 360,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(53,58,62,1)"
  },
  materialHeader2: {
    height: 56,
    width: 360,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(53,58,62,1)"
  },
  rectStack: {
    height: 722,
    marginTop: 20
  }
});

export default AboutScreenBlack;
