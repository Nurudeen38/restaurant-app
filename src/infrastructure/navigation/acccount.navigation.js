import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../../features/account/screens/account.screen";
import Login from "../../features/account/screens/login.screen";
import Register from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}
