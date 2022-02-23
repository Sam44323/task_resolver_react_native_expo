import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globals";

const ReviewDetails = ({ route, navigation }: any) => {
  const { title, rating, body } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
