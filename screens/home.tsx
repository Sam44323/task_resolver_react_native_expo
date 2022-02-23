import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/globals";

const Home = ({ navigation }: any) => {
  const [reviews, setReviews] = React.useState([
    {
      title: "title #1",
      rating: 5,
      body: "lorem ipsum dolor",
      key: "1",
    },
    {
      title: "title #2",
      rating: 4,
      body: "lorem ipsum dolor",
      key: "2",
    },
    {
      title: "title #3",
      rating: 3,
      body: "lorem ipsum dolor",
      key: "3",
    },
  ]);
  const navigationHandler = () => {
    navigation.push("review");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("review", { ...item })}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
