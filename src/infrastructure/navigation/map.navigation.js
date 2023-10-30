import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MapScreen from "../../features/maps/screens/map.screen";

const Stack = createStackNavigator();

export default function MapNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="map" component={MapScreen} />
    </Stack.Navigator>
  );
}
