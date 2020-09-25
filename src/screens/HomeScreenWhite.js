import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialSwitch from "../components/MaterialSwitch";
import MaterialSlider from "../components/MaterialSlider";

function HomeScreenWhite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.bemVindoA}>Bem vindo(a)</Text>
        <Text style={styles.daniloAugusto}>Danilo Augusto</Text>
        <View style={styles.rect2}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIconsIcon
                name="library-books"
                style={styles.icon6}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.legislacao}>Legislação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <IoniconsIcon
                name="md-chatbubbles"
                style={styles.icon7}
              ></IoniconsIcon>
              <Text style={styles.questoes}>Questões</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <MaterialIconsIcon
                name="video-library"
                style={styles.icon8}
              ></MaterialIconsIcon>
              <Text style={styles.videos}>Vídeos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button3Row}>
            <TouchableOpacity style={styles.button3}>
              <MaterialCommunityIconsIcon
                name="checkbox-multiple-marked"
                style={styles.icon10}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.simulados}>Simulados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
              <MaterialCommunityIconsIcon
                name="book-multiple-minus"
                style={styles.icon11}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.material3}>Material</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}>
              <MaterialCommunityIconsIcon
                name="comment-question"
                style={styles.icon9}
              ></MaterialCommunityIconsIcon>
              <Text style={styles.sobre}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <EntypoIcon name="facebook" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="instagram" style={styles.icon2}></EntypoIcon>
          <IoniconsIcon name="logo-youtube" style={styles.icon3}></IoniconsIcon>
          <MaterialCommunityIconsIcon
            name="whatsapp"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <EntypoIcon name="share" style={styles.icon5}></EntypoIcon>
        </View>
        <View style={styles.modoEscuroRow}>
          <Text style={styles.modoEscuro}>Modo escuro</Text>
          <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
        </View>
      </View>
      <Image
        source={require("../assets/images/moraes.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialSlider style={styles.materialSlider}></MaterialSlider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    height: 474,
    marginTop: 268
  },
  bemVindoA: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 42,
    marginLeft: 56
  },
  daniloAugusto: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 113
  },
  rect2: {
    width: 320,
    height: 180,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 25,
    marginLeft: 20
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 11,
    marginLeft: 20
  },
  legislacao: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginLeft: 6
  },
  button1: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginLeft: 30
  },
  icon7: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 32,
    marginTop: 10,
    marginLeft: 24
  },
  questoes: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 1,
    marginLeft: 11
  },
  button2: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginLeft: 30
  },
  icon8: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 20
  },
  videos: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 19
  },
  buttonRow: {
    height: 80,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  button3: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12
  },
  icon10: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 11,
    marginLeft: 20
  },
  simulados: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 8
  },
  button4: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginLeft: 30
  },
  icon11: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 11,
    marginLeft: 20
  },
  material3: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 15
  },
  button5: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(231,195,21,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.12,
    marginLeft: 30
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 11,
    marginLeft: 20
  },
  sobre: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 14,
    marginTop: 3,
    marginLeft: 22
  },
  button3Row: {
    height: 80,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10
  },
  rect3: {
    top: 1,
    left: 0,
    width: 320,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  icon: {
    top: 1,
    left: 10,
    position: "absolute",
    color: "rgba(59,89,152,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon2: {
    top: 1,
    left: 73,
    position: "absolute",
    color: "rgba(225,48,108,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon3: {
    top: 0,
    left: 140,
    position: "absolute",
    color: "rgba(229,45,39,1)",
    fontSize: 45,
    height: 49,
    width: 45
  },
  icon4: {
    top: 1,
    left: 212,
    position: "absolute",
    color: "rgba(79,206,93,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon5: {
    top: 1,
    left: 270,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  rect3Stack: {
    width: 320,
    height: 49,
    marginTop: 16,
    marginLeft: 20
  },
  modoEscuro: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    fontSize: 20
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginLeft: 13,
    marginTop: 2
  },
  modoEscuroRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 138,
    marginRight: 47
  },
  image: {
    width: 220,
    height: 220,
    marginTop: -719,
    marginLeft: 70
  },
  materialSlider: {
    height: 20,
    width: 150,
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "scroll",
    marginTop: 2,
    marginLeft: 105
  }
});

export default HomeScreenWhite;
