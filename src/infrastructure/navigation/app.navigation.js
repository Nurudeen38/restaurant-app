import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantNavigation from "./restaurant.navigation";
import { Ionicons } from "@expo/vector-icons";
import MapNavigation from "./map.navigation";

const SettingsScreen = () => {
  return (
    <View>
      <Text>Setttings</Text>
    </View>
  );
};

const Tabs = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
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
        <Tabs.Screen name="Map" component={MapNavigation} />
        <Tabs.Screen name="Settings" component={SettingsScreen} />
      </Tabs.Navigator>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}
