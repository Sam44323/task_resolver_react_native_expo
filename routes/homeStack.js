import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
      headerTintColor: "#444",
      height: 40,
    }}
  >
    <Screen name="Home" component={Home} options={{ title: "Home" }} />
    <Screen
      name="review"
      component={ReviewDetails}
      options={{ title: "Review Details" }}
    />
  </Navigator>
);

export default HomeStack;
