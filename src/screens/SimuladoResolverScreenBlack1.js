import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialHeader1 from "../components/MaterialHeader1";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function SimuladoResolverScreenBlack1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <Text style={styles.daniloAugusto1}>
          is simply dummy text of the printing and typesetting Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.certo}>CERTO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.errado}>ERRADO</Text>
        </TouchableOpacity>
        <View style={styles.group2Row}>
          <View style={styles.group2}>
            <TouchableOpacity style={styles.button3}>
              <EntypoIcon name="chevron-left" style={styles.icon3}></EntypoIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity style={styles.button2}>
              <EntypoIcon
                name="chevron-right"
                style={styles.icon2}
              ></EntypoIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Simulado 01"
        leftIconButton="Go Back"
        leftIcon="arrow-left"
        rightIcon="alert-outline"
        style={styles.materialHeader1}
      ></MaterialHeader1>
      <View style={styles.rect2}>
        <View style={styles.icon1Row}>
          <FontAwesomeIcon
            name="pencil-square-o"
            style={styles.icon1}
          ></FontAwesomeIcon>
          <View style={styles.questao01De38Column}>
            <Text style={styles.questao01De38}>Questão 01 de 38</Text>
            <Text style={styles.leiN1}>Certas: 0 Erradas: 0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(53,58,62,1)"
  },
  rect1: {
    width: 320,
    height: 545,
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
    marginTop: 172,
    marginLeft: 20
  },
  daniloAugusto1: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 18,
    textAlign: "justify",
    width: 304,
    height: 94,
    marginTop: 6,
    marginLeft: 8
  },
  button: {
    width: 300,
    height: 60,
    backgroundColor: "#E6E6E6",
    borderRadius: 12,
    marginTop: 38,
    marginLeft: 10
  },
  certo: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
    height: 24,
    width: 270,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 10
  },
  button1: {
    width: 300,
    height: 60,
    backgroundColor: "#E6E6E6",
    borderRadius: 12,
    marginTop: 15,
    marginLeft: 10
  },
  errado: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
    height: 24,
    width: 270,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 10
  },
  group2: {
    width: 50,
    height: 50
  },
  button3: {
    width: 50,
    height: 50,
    backgroundColor: "#E6E6E6",
    borderRadius: 12
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 2,
    marginLeft: 4
  },
  group: {
    width: 50,
    height: 50,
    marginLeft: 62
  },
  button2: {
    width: 50,
    height: 50,
    backgroundColor: "#E6E6E6",
    borderRadius: 12
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 2,
    marginLeft: 4
  },
  group2Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 175,
    marginLeft: 78,
    marginRight: 80
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -697
  },
  rect2: {
    width: 320,
    height: 68,
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
  icon1: {
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40,
    marginTop: 4
  },
  questao01De38: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  leiN1: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    marginTop: 4
  },
  questao01De38Column: {
    width: 230
  },
  icon1Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  }
});

export default SimuladoResolverScreenBlack1;
