import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";

function MaterialHomeScreenBlack1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialHeader1Stack}>
        <MaterialHeader1
          leftIconName="menu"
          rightIconName="dots-vertical"
          title="Código Disciplinar"
          leftIconButton="Go Back"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          style={styles.materialHeader1}
        ></MaterialHeader1>
        <MaterialHeader1
          leftIconName="menu"
          rightIconName="dots-vertical"
          title="Código Disciplinar"
          leftIconButton="Go Back"
          leftIcon="arrow-left"
          rightIcon="share-variant"
          style={styles.materialHeader2}
        ></MaterialHeader1>
      </View>
      <View style={styles.rect1}>
        <Text style={styles.daniloAugusto1}>
          is simply dummy text of the printing and typesetting Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. t has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          is simply dummy text of the printing and typesetting Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. t has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          is simply dummy text of the printing and typesetting Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. t has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
          is simply dummy text of the printing and typesetting Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. t has survived not only five centuries, but also
          the leap into...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53,58,62,1)"
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
  materialHeader1Stack: {
    width: 360,
    height: 56,
    marginTop: 20
  },
  rect1: {
    width: 320,
    height: 626,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(231,195,21,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginTop: 14,
    marginLeft: 20
  },
  daniloAugusto1: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 16,
    textAlign: "justify",
    width: 304,
    height: 626,
    marginLeft: 8
  }
});

export default MaterialHomeScreenBlack1;
