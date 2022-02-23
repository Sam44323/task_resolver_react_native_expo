import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#eee",
            },
          }}
        />
        <Stack.Screen
          name="review"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: {
              backgroundColor: "salmon",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
