import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Fonts from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import About from "./screens/about";
import ReviewDetails from "./screens/reviewDetails";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Fonts.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fonts, setFontsLoaded] = useState<boolean>(false);

  if (fonts) {
    return (
      <View>
        <Home />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("err")}
      />
    );
  }
}
