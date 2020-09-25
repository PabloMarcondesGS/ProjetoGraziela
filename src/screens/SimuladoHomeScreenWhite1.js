import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialHeader1 from "../components/MaterialHeader1";

function SimuladoHomeScreenWhite1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.icon5Row}>
          <IoniconsIcon
            name="md-chatbubbles"
            style={styles.icon5}
          ></IoniconsIcon>
          <View style={styles.artigo1Ao34Column}>
            <Text style={styles.artigo1Ao34}>Artigo 1º ao 34º</Text>
            <Text style={styles.leiN12134}>Certas: 0 Erradas: 0</Text>
          </View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <View style={styles.icon3Stack}>
              <MaterialCommunityIconsIcon
                name="play-speed"
                style={styles.icon3}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.inicio}>Início</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.retomarStack}>
              <Text style={styles.retomar}>Retomar</Text>
              <MaterialCommunityIconsIcon
                name="reload"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
          <View style={styles.rect4}>
            <View style={styles.resultado1Stack}>
              <Text style={styles.resultado1}>Resultado</Text>
              <MaterialCommunityIconsIcon
                name="book-multiple-minus"
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Questões"
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
    height: 148,
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
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 32,
    height: 44
  },
  artigo1Ao34: {
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
  artigo1Ao34Column: {
    width: 230,
    marginLeft: 15
  },
  icon5Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 13,
    marginRight: 30
  },
  rect2: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12
  },
  icon3: {
    top: 0,
    left: 7,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  inicio: {
    top: 31,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 12,
    height: 17,
    width: 46,
    textAlign: "center"
  },
  icon3Stack: {
    width: 47,
    height: 48,
    marginTop: 7,
    marginLeft: 6
  },
  rect3: {
    width: 60,
    height: 60,
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
    marginLeft: 12
  },
  retomar: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 12
  },
  icon4: {
    top: 0,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  retomarStack: {
    width: 48,
    height: 49,
    marginTop: 6,
    marginLeft: 7
  },
  rect4: {
    width: 60,
    height: 60,
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
    marginLeft: 12
  },
  resultado1: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 12
  },
  icon6: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  resultado1Stack: {
    width: 54,
    height: 49,
    marginTop: 6,
    marginLeft: 3
  },
  rect2Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 18,
    marginRight: 98
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -218
  }
});

export default SimuladoHomeScreenWhite1;
