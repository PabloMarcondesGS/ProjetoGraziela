import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
            <EntypoIcon name="mail" style={styles.icon2}></EntypoIcon>
            <Text style={styles.email}>Email</Text>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.icon3Row}>
            <FontAwesomeIcon name="lock" style={styles.icon3}></FontAwesomeIcon>
            <Text style={styles.senha}>Senha</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.acessar}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.iconRow}>
              <EntypoIcon name="facebook" style={styles.icon}></EntypoIcon>
              <Text style={styles.entrarComFacebook}>Entrar com facebook</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text style={styles.cadastreSe}>Cadastre-se</Text>
      <Text style={styles.esqueciMinhaSenha}>Esqueci minha senha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 80,
    marginLeft: 84
  },
  rect: {
    width: 303,
    height: 280,
    marginLeft: 32
  },
  rect2: {
    width: 303,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
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
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  email: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginLeft: 26,
    marginTop: 12
  },
  icon2Row: {
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
  icon3: {
    color: "rgba(155,155,155,1)",
    fontSize: 40,
    height: 40,
    width: 26
  },
  senha: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginLeft: 34,
    marginTop: 8
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 172,
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
    shadowOpacity: 0.31,
    marginTop: 10
  },
  acessar: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 114
  },
  button: {
    width: 303,
    height: 62,
    backgroundColor: "rgba(59,89,152,1)",
    borderRadius: 10,
    marginTop: 16
  },
  button2: {
    width: 303,
    height: 62,
    backgroundColor: "rgba(59,89,152,1)",
    borderRadius: 10,
    shadowColor: "rgba(8,46,91,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.3,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  entrarComFacebook: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 28,
    marginTop: 9
  },
  cadastreSe: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 131
  },
  esqueciMinhaSenha: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 18,
    marginLeft: 94
  }
});

export default LoginScreen;
