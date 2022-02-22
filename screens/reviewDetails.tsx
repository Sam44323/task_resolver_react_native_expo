import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globals";

const ReviewDetails = ({ navigation }: any) => {
  const backNavigationHandler = () => navigation.goBack();

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
      <Button title="Back to Home Screen" onPress={backNavigationHandler} />
    </View>
  );
};

export default ReviewDetails;
