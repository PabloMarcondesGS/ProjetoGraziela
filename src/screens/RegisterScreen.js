import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View style={styles.rect2}>
          <View style={styles.icon1Row}>
            <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
            <Text style={styles.email1}>Email</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon name="lock" style={styles.icon2}></FontAwesomeIcon>
            <Text style={styles.senha1}>Senha</Text>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.icon3Row}>
            <FontAwesomeIcon name="lock" style={styles.icon3}></FontAwesomeIcon>
            <Text style={styles.repitaASenha}>Repita a senha</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.criarUmaConta}>Criar uma conta</Text>
      <Text style={styles.voltar}>Voltar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 303,
    height: 280,
    marginTop: 280,
    marginLeft: 32
  },
  rect2: {
    width: 303,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.3,
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(155,155,155,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  email1: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginLeft: 26,
    marginTop: 12
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 178,
    marginLeft: 10,
    marginTop: 6
  },
  rect3: {
    width: 303,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.3,
    flexDirection: "row",
    marginTop: 10
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 40,
    height: 40,
    width: 26
  },
  senha1: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginLeft: 34,
    marginTop: 8
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 172,
    marginLeft: 16,
    marginTop: 9
  },
  rect4: {
    width: 303,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(248,231,28,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.3,
    flexDirection: "row",
    marginTop: 10
  },
  icon3: {
    color: "rgba(155,155,155,1)",
    fontSize: 40,
    height: 40,
    width: 26
  },
  repitaASenha: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginLeft: 34,
    marginTop: 9
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 96,
    marginLeft: 16,
    marginTop: 9
  },
  button1: {
    width: 303,
    height: 62,
    backgroundColor: "rgba(231,195,21,1)",
    borderRadius: 10,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.29,
    marginTop: 18
  },
  cadastrar: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 105
  },
  criarUmaConta: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 42,
    marginTop: -412,
    marginLeft: 32
  },
  voltar: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    width: 58,
    height: 24,
    marginTop: 403,
    marginLeft: 278
  }
});

export default RegisterScreen;
