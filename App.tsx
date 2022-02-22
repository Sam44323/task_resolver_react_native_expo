import { StatusBar } from "expo-status-bar";
import Fonts from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import About from "./screens/about";
import ReviewDetails from "./screens/reviewDetails";

const getFonts = () => {
  return Fonts.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}
