import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialHeader1 from "../components/MaterialHeader1";

function SimuladoResultadoScreenBlack(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Text style={styles.simuladoConcluido}>Simulado Concluído</Text>
        <Image
          source={require("../assets/images/Circular_chart_diagram_infographic_pie_chart_pie_graph_statistics-512-02.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.acertos30Questoes}>Acertos: 30 questões</Text>
        <Text style={styles.erros8Questoes}>Erros: 8 questões</Text>
        <Text style={styles.posicao194Lugar}>Posição: 194º Lugar</Text>
      </View>
      <View style={styles.rect1}>
        <View style={styles.icon2Row}>
          <Icon name="line-chart" style={styles.icon2}></Icon>
          <View style={styles.rankingSimulado01Column}>
            <Text style={styles.rankingSimulado01}>Resultado Simulado 01</Text>
            <Text style={styles.leiN12134}>Concurso PM/CE - 38 questões</Text>
          </View>
        </View>
      </View>
      <MaterialHeader1
        leftIconName="menu"
        rightIconName="dots-vertical"
        leftIconButton="Go Back"
        leftIcon="arrow-left"
        rightIcon="share-variant"
        title="Resultado"
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
  simuladoConcluido: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 198,
    marginTop: 23,
    marginLeft: 61
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 25,
    marginLeft: 60
  },
  acertos30Questoes: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 320,
    textAlign: "center",
    marginTop: 48
  },
  erros8Questoes: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 320,
    textAlign: "center",
    marginTop: 15
  },
  posicao194Lugar: {
    fontFamily: "roboto-regular",
    color: "rgba(242,242,242,1)",
    fontSize: 22,
    height: 24,
    width: 320,
    textAlign: "center",
    marginTop: 13
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

export default SimuladoResultadoScreenBlack;
