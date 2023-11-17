import React from "react";
import Navigation from "./app.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../services/authentication/authentication.context";
import AccountNavigation from "./acccount.navigation";

export default function AppNavigation() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {!isAuthenticated ? <AccountNavigation /> : <Navigation />}
    </NavigationContainer>
  );
}
