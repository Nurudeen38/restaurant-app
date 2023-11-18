import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import MapScreen from "../../features/maps/screens/map.screen";
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavoritesScreen from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export default function SettingsNavigation({ route, navigation }) {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="settings" component={SettingsScreen} />
      <SettingsStack.Screen name="favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
}
