import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialHeader1 from "../components/MaterialHeader1";

function MaterialHomeScreenBlack(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <View style={styles.icon3Row}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon3}
          ></MaterialIconsIcon>
          <View style={styles.icon4StackStack}>
            <View style={styles.icon4Stack}>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon4}
              ></EntypoIcon>
              <Text style={styles.leiDaControladoria}>
                Lei da controladoria
              </Text>
            </View>
            <Text style={styles.leiN2}>Lei nº 12.134 de 06/07/1993</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.icon5Row}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon5}
          ></MaterialIconsIcon>
          <View style={styles.icon6StackStack}>
            <View style={styles.icon6Stack}>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon6}
              ></EntypoIcon>
              <Text style={styles.estatutoDaPcCe}>Estatuto da PC/CE</Text>
            </View>
            <Text style={styles.leiN3}>Lei nº 12.134 de 06/07/1993</Text>
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
        <View style={styles.icon2Row}>
          <MaterialIconsIcon
            name="picture-as-pdf"
            style={styles.icon2}
          ></MaterialIconsIcon>
          <View style={styles.codigoDisciplinar1StackStack}>
            <View style={styles.codigoDisciplinar1Stack}>
              <Text style={styles.codigoDisciplinar1}>Código Disciplinar</Text>
              <EntypoIcon
                name="chevron-small-right"
                style={styles.icon1}
              ></EntypoIcon>
            </View>
            <Text style={styles.leiN1}>Lei nº 12.134 de 06/07/1993</Text>
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
  rect2: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 168,
    marginLeft: 20
  },
  icon3: {
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  icon4: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  leiDaControladoria: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  icon4Stack: {
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN2: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14
  },
  icon4StackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  icon3Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 10
  },
  rect3: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 20
  },
  icon5: {
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  icon6: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  estatutoDaPcCe: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  icon6Stack: {
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN3: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14
  },
  icon6StackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  icon5Row: {
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
    marginTop: -292
  },
  rect1: {
    width: 320,
    height: 64,
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
    flexDirection: "row",
    marginTop: 14,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  codigoDisciplinar1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  icon1: {
    top: 0,
    left: 210,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  codigoDisciplinar1Stack: {
    top: 0,
    left: 0,
    width: 250,
    height: 44,
    position: "absolute"
  },
  leiN1: {
    top: 28,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14
  },
  codigoDisciplinar1StackStack: {
    width: 250,
    height: 45,
    marginLeft: 8
  },
  icon2Row: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 10
  }
});

export default MaterialHomeScreenBlack;
