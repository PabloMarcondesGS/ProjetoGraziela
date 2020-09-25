import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialHeader1 from "../components/MaterialHeader1";

function SimuladoHomeScreenBlack(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.iconRow}>
          <MaterialCommunityIconsIcon
            name="checkbox-multiple-marked"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <View style={styles.simulado01Column}>
            <Text style={styles.simulado01}>Simulado 01</Text>
            <Text style={styles.leiN12134}>Concurso PM/CE - 38 questões</Text>
          </View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <View style={styles.icon3Stack}>
              <FontAwesomeIcon
                name="pencil-square-o"
                style={styles.icon3}
              ></FontAwesomeIcon>
              <Text style={styles.resolver1}>Resolver</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <View style={styles.resultadoStack}>
              <Text style={styles.resultado}>Resultado</Text>
              <MaterialCommunityIconsIcon
                name="book-multiple-minus"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
          <View style={styles.rect4}>
            <View style={styles.rankingStack}>
              <Text style={styles.ranking}>Ranking</Text>
              <FontAwesomeIcon
                name="line-chart"
                style={styles.icon5}
              ></FontAwesomeIcon>
            </View>
          </View>
          <View style={styles.rect5}>
            <View style={styles.gabaritoStack}>
              <Text style={styles.gabarito}>Gabarito</Text>
              <MaterialCommunityIconsIcon
                name="format-list-numbers"
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Simulados"
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
    flex: 1,
    backgroundColor: "rgba(53,58,62,1)"
  },
  rect1: {
    width: 320,
    height: 148,
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
    marginTop: 90,
    marginLeft: 20
  },
  icon: {
    color: "rgba(242,242,242,1)",
    fontSize: 40,
    width: 40,
    height: 40
  },
  simulado01: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 230
  },
  leiN12134: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    marginTop: 4
  },
  simulado01Column: {
    width: 230,
    marginLeft: 8
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 30
  },
  rect2: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(231,195,21,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12
  },
  icon3: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  resolver1: {
    top: 31,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 12,
    height: 17,
    width: 46
  },
  icon3Stack: {
    width: 50,
    height: 48,
    marginTop: 7,
    marginLeft: 8
  },
  rect3: {
    width: 60,
    height: 60,
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
    marginLeft: 12
  },
  resultado: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 12
  },
  icon4: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  resultadoStack: {
    width: 54,
    height: 49,
    marginTop: 6,
    marginLeft: 3
  },
  rect4: {
    width: 60,
    height: 60,
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
    marginLeft: 12
  },
  ranking: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 12
  },
  icon5: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  rankingStack: {
    width: 44,
    height: 49,
    marginTop: 6,
    marginLeft: 8
  },
  rect5: {
    width: 60,
    height: 60,
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
    marginLeft: 13
  },
  gabarito: {
    top: 32,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 12
  },
  icon6: {
    top: 0,
    left: 7,
    position: "absolute",
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40
  },
  gabaritoStack: {
    width: 47,
    height: 49,
    marginTop: 6,
    marginLeft: 7
  },
  rect2Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 18,
    marginRight: 25
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -218
  }
});

export default SimuladoHomeScreenBlack;
