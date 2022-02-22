import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globals";

const Home = ({ navigation }: any) => {
  const navigationHandler = () => {
    navigation.push("review");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Go to review page" onPress={navigationHandler} />
    </View>
  );
};

export default Home;
