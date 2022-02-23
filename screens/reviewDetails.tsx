import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
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
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image
            source={require("../assets/rating-1.png")}
            style={styles.image}
          />
        </View>
      </Card>
      <Button title="Go Back" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {},
  image: {
    flex: 1,
    width: 0,
    height: 0,
    resizeMode: "contain",
  },
});

export default ReviewDetails;
