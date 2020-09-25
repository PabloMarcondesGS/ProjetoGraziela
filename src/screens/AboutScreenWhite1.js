import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function AboutScreenWhite1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 474,
    marginTop: 268
  }
});

export default AboutScreenWhite1;
