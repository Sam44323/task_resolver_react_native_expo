import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globals";
import Card from "../shared/card";

const ReviewDetails = ({ route, navigation }: any) => {
  const { title, rating, body } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
