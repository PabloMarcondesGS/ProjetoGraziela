import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialHeader1 from "../components/MaterialHeader1";

function SimuladoGabaritoScreenWhite1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.icon1Row}>
          <Icon name="format-list-numbers" style={styles.icon1}></Icon>
          <View style={styles.gabaritoSimulado01Column}>
            <Text style={styles.gabaritoSimulado01}>Gabarito Simulado 01</Text>
            <Text style={styles.leiN12134}>Concurso PM/CE - 38 questões</Text>
          </View>
        </View>
        <View style={styles.leiN12135Row}>
          <Text style={styles.leiN12135}>01 - CERTO</Text>
          <Text style={styles.leiN12136}>02 - ERRADO</Text>
          <Text style={styles.leiN12137}>03 - CERTO</Text>
        </View>
        <View style={styles.leiN12138Row}>
          <Text style={styles.leiN12138}>04 - CERTO</Text>
          <Text style={styles.leiN12139}>05 - ERRADO</Text>
          <Text style={styles.leiN12140}>06 - CERTO</Text>
        </View>
        <View style={styles.leiN12141Row}>
          <Text style={styles.leiN12141}>07 - CERTO</Text>
          <Text style={styles.leiN12142}>08 - ERRADO</Text>
          <Text style={styles.leiN12143}>09 - CERTO</Text>
        </View>
        <View style={styles.leiN12144Row}>
          <Text style={styles.leiN12144}>10 - CERTO</Text>
          <Text style={styles.leiN12145}>11 - ERRADO</Text>
          <Text style={styles.leiN12146}>12 - CERTO</Text>
        </View>
        <View style={styles.leiN12147Row}>
          <Text style={styles.leiN12147}>13 - CERTO</Text>
          <Text style={styles.leiN12148}>14 - ERRADO</Text>
          <Text style={styles.leiN12149}>15 - CERTO</Text>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Gabarito"
        leftIconButton="Go Back"
        leftIcon="arrow-left"
        rightIcon="share-variant"
        style={styles.materialHeader1}
      ></MaterialHeader1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 320,
    height: 626,
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
    marginTop: 90,
    marginLeft: 20
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  gabaritoSimulado01: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  leiN12134: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 4
  },
  gabaritoSimulado01Column: {
    width: 230
  },
  icon1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  },
  leiN12135: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  leiN12136: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 26
  },
  leiN12137: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 21
  },
  leiN12135Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 26,
    marginRight: 30
  },
  leiN12138: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  leiN12139: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 26
  },
  leiN12140: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 21
  },
  leiN12138Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 26,
    marginRight: 29
  },
  leiN12141: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  leiN12142: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 26
  },
  leiN12143: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 21
  },
  leiN12141Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 26,
    marginRight: 30
  },
  leiN12144: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  leiN12145: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 26
  },
  leiN12146: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 21
  },
  leiN12144Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 26,
    marginRight: 30
  },
  leiN12147: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  leiN12148: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 26
  },
  leiN12149: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 21
  },
  leiN12147Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 26,
    marginRight: 30
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -696
  }
});

export default SimuladoGabaritoScreenWhite1;
