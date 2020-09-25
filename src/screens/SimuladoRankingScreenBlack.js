import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialHeader1 from "../components/MaterialHeader1";

function SimuladoRankingScreenBlack(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <View style={styles.rect3}>
          <View style={styles.rankingSimulado2Row}>
            <Text style={styles.rankingSimulado2}>1-</Text>
            <Text style={styles.leiN12135}>
              Vitor José Ferreira de Oliveira
            </Text>
            <Text style={styles.leiN12136}>38pts</Text>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.rankingSimulado3Row}>
            <Text style={styles.rankingSimulado3}>2-</Text>
            <Text style={styles.leiN12137}>Rafael Francisco Gomes</Text>
            <Text style={styles.leiN12138}>37pts</Text>
          </View>
        </View>
        <View style={styles.rect5}>
          <View style={styles.rankingSimulado4Row}>
            <Text style={styles.rankingSimulado4}>3-</Text>
            <Text style={styles.leiN12139}>Danilo Augusto dos Santos</Text>
            <Text style={styles.leiN12140}>36pts</Text>
          </View>
        </View>
        <View style={styles.rect6}>
          <View style={styles.rankingSimulado5Row}>
            <Text style={styles.rankingSimulado5}>4-</Text>
            <Text style={styles.leiN12141}>Michele Santos Claudino</Text>
            <Text style={styles.leiN12142}>35pts</Text>
          </View>
        </View>
        <View style={styles.rect7}>
          <View style={styles.rankingSimulado6Row}>
            <Text style={styles.rankingSimulado6}>5-</Text>
            <Text style={styles.joaquimSantosSilva}>Joaquim Santos Silva</Text>
            <Text style={styles.leiN12144}>34pts</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect1}>
        <View style={styles.icon2Row}>
          <Icon name="line-chart" style={styles.icon2}></Icon>
          <View style={styles.rankingSimulado01Column}>
            <Text style={styles.rankingSimulado01}>Ranking Simulado 01</Text>
            <Text style={styles.leiN12134}>Concurso PM/CE - 38 questões</Text>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        title="Ranking"
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
  rect2: {
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
  rect3: {
    width: 320,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: "rgba(242,242,242,1)",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  rankingSimulado2: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 25
  },
  leiN12135: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    height: 17,
    width: 191,
    marginLeft: 1,
    marginTop: 5
  },
  leiN12136: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    marginLeft: 12,
    marginTop: 1
  },
  rankingSimulado2Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
    marginTop: 8
  },
  rect4: {
    width: 320,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: "rgba(242,242,242,1)",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  rankingSimulado3: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 25
  },
  leiN12137: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    height: 17,
    width: 191,
    marginLeft: 1,
    marginTop: 4
  },
  leiN12138: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    marginLeft: 12
  },
  rankingSimulado3Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
    marginTop: 9
  },
  rect5: {
    width: 320,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: "rgba(242,242,242,1)",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  rankingSimulado4: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 25
  },
  leiN12139: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    height: 17,
    width: 191,
    marginLeft: 1,
    marginTop: 5
  },
  leiN12140: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    marginLeft: 12
  },
  rankingSimulado4Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
    marginTop: 9
  },
  rect6: {
    width: 320,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: "rgba(242,242,242,1)",
    borderBottomWidth: 1,
    flexDirection: "row",
    marginTop: 1
  },
  rankingSimulado5: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 25
  },
  leiN12141: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    height: 17,
    width: 191,
    marginLeft: 1,
    marginTop: 5
  },
  leiN12142: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    marginLeft: 12,
    marginTop: 1
  },
  rankingSimulado5Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
    marginTop: 8
  },
  rect7: {
    width: 320,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 0,
    borderColor: "rgba(242,242,242,1)",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  rankingSimulado6: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 25
  },
  joaquimSantosSilva: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 14,
    height: 17,
    width: 191,
    marginLeft: 1,
    marginTop: 4
  },
  leiN12144: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 20,
    marginLeft: 12
  },
  rankingSimulado6Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 30,
    marginLeft: 10,
    marginTop: 9
  },
  rect1: {
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
    marginTop: -627,
    marginLeft: 20
  },
  icon2: {
    color: "rgba(242,242,242,1)",
    fontSize: 30,
    width: 40,
    height: 40,
    marginTop: 4
  },
  rankingSimulado01: {
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
  rankingSimulado01Column: {
    width: 230
  },
  icon2Row: {
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  },
  materialHeader1: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(53,58,62,1)",
    marginTop: -138
  }
});

export default SimuladoRankingScreenBlack;
