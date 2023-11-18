import { View, Text, Button } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantNavigation from "./restaurant.navigation";
import { Ionicons } from "@expo/vector-icons";
import MapNavigation from "./map.navigation";
import { useAuth } from "../../services/authentication/authentication.context";
import SafeArea from "../../components/common/SafeArea";
import SettingsNavigation from "./settings.navigation";

const Tabs = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          let tabOptions = {
            Home: "restaurant",
            Map: "map",
            Settings: "settings",
          }[route.name];

          // You can return any component that you like here!
          return <Ionicons name={tabOptions} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="Home" component={RestaurantNavigation} />
      <Tabs.Screen
        name="Map"
        options={{
          headerShown: false,
        }}
        component={MapNavigation}
      />
      <Tabs.Screen name="Settings" component={SettingsNavigation} />
    </Tabs.Navigator>
  );
}
