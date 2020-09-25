import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AboutScreenBlack from "./src/screens/AboutScreenBlack";
import AboutScreenW from "./src/screens/AboutScreenW";
import AboutScreenWhite from "./src/screens/AboutScreenWhite";
import AboutScreenWhite1 from "./src/screens/AboutScreenWhite1";
import HomeScreenBlack from "./src/screens/HomeScreenBlack";
import HomeScreenWhite from "./src/screens/HomeScreenWhite";
import LoginScreen from "./src/screens/LoginScreen";
import MaterialDetalheScreenBlack from "./src/screens/MaterialDetalheScreenBlack";
import MaterialDetalheScreenWhite from "./src/screens/MaterialDetalheScreenWhite";
import MaterialHomeScreenBlack from "./src/screens/MaterialHomeScreenBlack";
import MaterialHomeScreenBlack1 from "./src/screens/MaterialHomeScreenBlack1";
import MaterialHomeScreenWhite from "./src/screens/MaterialHomeScreenWhite";
import MaterialHomeScreenWhite1 from "./src/screens/MaterialHomeScreenWhite1";
import QuestoesAssuntoScreenWhite from "./src/screens/QuestoesAssuntoScreenWhite";
import QuestoesAssuntoScreenWhite1 from "./src/screens/QuestoesAssuntoScreenWhite1";
import QuestoesSubcategoriaScreenWhite from "./src/screens/QuestoesSubcategoriaScreenWhite";
import RegisterScreen from "./src/screens/RegisterScreen";
import SimuladoGabaritoScreenBlack from "./src/screens/SimuladoGabaritoScreenBlack";
import SimuladoGabaritoScreenWhite from "./src/screens/SimuladoGabaritoScreenWhite";
import SimuladoGabaritoScreenWhite1 from "./src/screens/SimuladoGabaritoScreenWhite1";
import SimuladoHomeScreenBlack from "./src/screens/SimuladoHomeScreenBlack";
import SimuladoHomeScreenWhite from "./src/screens/SimuladoHomeScreenWhite";
import SimuladoHomeScreenWhite1 from "./src/screens/SimuladoHomeScreenWhite1";
import SimuladoRankingScreenBlack from "./src/screens/SimuladoRankingScreenBlack";
import SimuladoRankingScreenWhite from "./src/screens/SimuladoRankingScreenWhite";
import SimuladoResolverScreenBlack1 from "./src/screens/SimuladoResolverScreenBlack1";
import SimuladoResolverScreenBlack2 from "./src/screens/SimuladoResolverScreenBlack2";
import SimuladoResolverScreenBlack3 from "./src/screens/SimuladoResolverScreenBlack3";
import SimuladoResolverScreenWhite1 from "./src/screens/SimuladoResolverScreenWhite1";
import SimuladoResolverScreenWhite2 from "./src/screens/SimuladoResolverScreenWhite2";
import SimuladoResolverScreenWhite3 from "./src/screens/SimuladoResolverScreenWhite3";
import SimuladoResultadoScreenBlack from "./src/screens/SimuladoResultadoScreenBlack";
import SimuladoResultadoScreenWhite from "./src/screens/SimuladoResultadoScreenWhite";
import SimuladoResultadoScreenWhite1 from "./src/screens/SimuladoResultadoScreenWhite1";
import SplashScreen from "./src/screens/SplashScreen";

const DrawerNavigation = createDrawerNavigator({
  LoginScreen: LoginScreen,
  AboutScreenBlack: AboutScreenBlack,
  AboutScreenW: AboutScreenW,
  AboutScreenWhite: AboutScreenWhite,
  AboutScreenWhite1: AboutScreenWhite1,
  HomeScreenBlack: HomeScreenBlack,
  HomeScreenWhite: HomeScreenWhite,
  // LoginScreen: LoginScreen,
  MaterialDetalheScreenBlack: MaterialDetalheScreenBlack,
  MaterialDetalheScreenWhite: MaterialDetalheScreenWhite,
  MaterialHomeScreenBlack: MaterialHomeScreenBlack,
  MaterialHomeScreenBlack1: MaterialHomeScreenBlack1,
  MaterialHomeScreenWhite: MaterialHomeScreenWhite,
  MaterialHomeScreenWhite1: MaterialHomeScreenWhite1,
  QuestoesAssuntoScreenWhite: QuestoesAssuntoScreenWhite,
  QuestoesAssuntoScreenWhite1: QuestoesAssuntoScreenWhite1,
  QuestoesSubcategoriaScreenWhite: QuestoesSubcategoriaScreenWhite,
  RegisterScreen: RegisterScreen,
  SimuladoGabaritoScreenBlack: SimuladoGabaritoScreenBlack,
  SimuladoGabaritoScreenWhite: SimuladoGabaritoScreenWhite,
  SimuladoGabaritoScreenWhite1: SimuladoGabaritoScreenWhite1,
  SimuladoHomeScreenBlack: SimuladoHomeScreenBlack,
  SimuladoHomeScreenWhite: SimuladoHomeScreenWhite,
  SimuladoHomeScreenWhite1: SimuladoHomeScreenWhite1,
  SimuladoRankingScreenBlack: SimuladoRankingScreenBlack,
  SimuladoRankingScreenWhite: SimuladoRankingScreenWhite,
  SimuladoResolverScreenBlack1: SimuladoResolverScreenBlack1,
  SimuladoResolverScreenBlack2: SimuladoResolverScreenBlack2,
  SimuladoResolverScreenBlack3: SimuladoResolverScreenBlack3,
  SimuladoResolverScreenWhite1: SimuladoResolverScreenWhite1,
  SimuladoResolverScreenWhite2: SimuladoResolverScreenWhite2,
  SimuladoResolverScreenWhite3: SimuladoResolverScreenWhite3,
  SimuladoResultadoScreenBlack: SimuladoResultadoScreenBlack,
  SimuladoResultadoScreenWhite: SimuladoResultadoScreenWhite,
  SimuladoResultadoScreenWhite1: SimuladoResultadoScreenWhite1,
  SplashScreen: SplashScreen
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    AboutScreenBlack: AboutScreenBlack,
    AboutScreenW: AboutScreenW,
    AboutScreenWhite: AboutScreenWhite,
    AboutScreenWhite1: AboutScreenWhite1,
    HomeScreenBlack: HomeScreenBlack,
    HomeScreenWhite: HomeScreenWhite,
    LoginScreen: LoginScreen,
    MaterialDetalheScreenBlack: MaterialDetalheScreenBlack,
    MaterialDetalheScreenWhite: MaterialDetalheScreenWhite,
    MaterialHomeScreenBlack: MaterialHomeScreenBlack,
    MaterialHomeScreenBlack1: MaterialHomeScreenBlack1,
    MaterialHomeScreenWhite: MaterialHomeScreenWhite,
    MaterialHomeScreenWhite1: MaterialHomeScreenWhite1,
    QuestoesAssuntoScreenWhite: QuestoesAssuntoScreenWhite,
    QuestoesAssuntoScreenWhite1: QuestoesAssuntoScreenWhite1,
    QuestoesSubcategoriaScreenWhite: QuestoesSubcategoriaScreenWhite,
    RegisterScreen: RegisterScreen,
    SimuladoGabaritoScreenBlack: SimuladoGabaritoScreenBlack,
    SimuladoGabaritoScreenWhite: SimuladoGabaritoScreenWhite,
    SimuladoGabaritoScreenWhite1: SimuladoGabaritoScreenWhite1,
    SimuladoHomeScreenBlack: SimuladoHomeScreenBlack,
    SimuladoHomeScreenWhite: SimuladoHomeScreenWhite,
    SimuladoHomeScreenWhite1: SimuladoHomeScreenWhite1,
    SimuladoRankingScreenBlack: SimuladoRankingScreenBlack,
    SimuladoRankingScreenWhite: SimuladoRankingScreenWhite,
    SimuladoResolverScreenBlack1: SimuladoResolverScreenBlack1,
    SimuladoResolverScreenBlack2: SimuladoResolverScreenBlack2,
    SimuladoResolverScreenBlack3: SimuladoResolverScreenBlack3,
    SimuladoResolverScreenWhite1: SimuladoResolverScreenWhite1,
    SimuladoResolverScreenWhite2: SimuladoResolverScreenWhite2,
    SimuladoResolverScreenWhite3: SimuladoResolverScreenWhite3,
    SimuladoResultadoScreenBlack: SimuladoResultadoScreenBlack,
    SimuladoResultadoScreenWhite: SimuladoResultadoScreenWhite,
    SimuladoResultadoScreenWhite1: SimuladoResultadoScreenWhite1,
    SplashScreen: SplashScreen
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
