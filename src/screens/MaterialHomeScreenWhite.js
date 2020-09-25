import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialHeader1 from "../components/MaterialHeader1";

function MaterialHomeScreenWhite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.icon6Row}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon6}
          ></MaterialIconsIcon>
          <View style={styles.icon5StackStack}>
            <View style={styles.icon5Stack}>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon5}
              ></EntypoIcon>
              <Text style={styles.estatutoDaPcCe}>Estatuto da PC/CE</Text>
            </View>
            <Text style={styles.leiN12136}>Lei nº 12.134 de 06/07/1993</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.icon4Row}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon4}
          ></MaterialIconsIcon>
          <View style={styles.icon3StackStack}>
            <View style={styles.icon3Stack}>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon3}
              ></EntypoIcon>
              <Text style={styles.leiDaControladoria}>
                Lei da controladoria
              </Text>
            </View>
            <Text style={styles.leiN12135}>Lei nº 12.134 de 06/07/1993</Text>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Material"
        leftIconButton="Go Back"
        leftIcon="arrow-left"
        rightIcon="share-variant"
        style={styles.materialHeader1}
      ></MaterialHeader1>
      <View style={styles.rect1}>
        <View style={styles.iconRow}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon}
          ></MaterialIconsIcon>
          <View style={styles.codigoDisciplinarStackStack}>
            <View style={styles.codigoDisciplinarStack}>
              <Text style={styles.codigoDisciplinar}>Código Disciplinar</Text>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon2}
              ></EntypoIcon>
            </View>
            <Text style={styles.leiN12134}>Lei nº 12.134 de 06/07/1993</Text>
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
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 40
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
  estatutoDaPcCe: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  icon5Stack: {
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN12136: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  icon5StackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  icon6Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
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
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 40
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
  leiDaControladoria: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  icon3Stack: {
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN12135: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  icon3StackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  icon4Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
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
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  codigoDisciplinar: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 22,
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
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN12134: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14
  },
  codigoDisciplinarStackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 10
  }
});

export default MaterialHomeScreenWhite;
