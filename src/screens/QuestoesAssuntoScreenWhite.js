import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialHeader1 from "../components/MaterialHeader1";

function QuestoesAssuntoScreenWhite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.icon9Row}>
          <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon9}
          ></IoniconsIcon>
          <View style={styles.icon5Stack}>
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon5}
            ></EntypoIcon>
            <Text style={styles.leiComplementarN98}>Lei Complementar N98</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.icon8Row}>
          <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon8}
          ></IoniconsIcon>
          <View style={styles.icon3Stack}>
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon3}
            ></EntypoIcon>
            <Text style={styles.estatuto13729}>Estatuto 13.729</Text>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Escolha o assunto"
        leftIconButton="Go Back"
        leftIcon="arrow-left"
        rightIcon="share-variant"
        style={styles.materialHeader1}
      ></MaterialHeader1>
      <View style={styles.rect1}>
        <View style={styles.icon7Row}>
          <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon7}
          ></IoniconsIcon>
          <View style={styles.codigoDisciplinarStack}>
            <Text style={styles.codigoDisciplinar}>Código Disciplinar</Text>
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon2}
            ></EntypoIcon>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.icon10Row}>
          <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon10}
          ></IoniconsIcon>
          <View style={styles.leiComplementarN99Stack}>
            <Text style={styles.leiComplementarN99}>
              Direito Constitucional
            </Text>
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon11}
            ></EntypoIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect3: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 248,
    marginLeft: 20
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  icon5: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  leiComplementarN98: {
    top: 10,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 24,
    width: 230
  },
  icon5Stack: {
    width: 250,
    height: 44,
    marginLeft: 15
  },
  icon9Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 13,
    marginTop: 10
  },
  rect2: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: -144,
    marginLeft: 20
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  icon3: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  estatuto13729: {
    top: 8,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 24,
    width: 230
  },
  icon3Stack: {
    width: 250,
    height: 44,
    marginLeft: 15
  },
  icon8Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 13,
    marginTop: 10
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -212
  },
  rect1: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 14,
    alignSelf: "center"
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  codigoDisciplinar: {
    top: 10,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 24,
    width: 230
  },
  icon2: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  codigoDisciplinarStack: {
    width: 250,
    height: 44,
    marginLeft: 15
  },
  icon7Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 13,
    marginTop: 10
  },
  rect4: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 176,
    marginLeft: 20
  },
  icon10: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  leiComplementarN99: {
    top: 10,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    height: 24,
    width: 230
  },
  icon11: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  leiComplementarN99Stack: {
    width: 250,
    height: 44,
    marginLeft: 15
  },
  icon10Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 13,
    marginTop: 10
  }
});

export default QuestoesAssuntoScreenWhite;
