import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { Text, View } from "react-native";
import RestaurantDetail from "../../features/restaurants/screens/restaurant-detail.screen";

const Stack = createStackNavigator();
export default function RestaurantNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="restaurants" component={RestaurantsScreen} />
      <Stack.Screen name="details" component={RestaurantDetail} />
    </Stack.Navigator>
  );
}
