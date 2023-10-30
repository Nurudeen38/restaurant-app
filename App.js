import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import RestaurantProvider from "./src/services/restuarants/restuarant.context";
import LocationProvider from "./src/services/location/location.context";
import AppNavigation from "./src/infrastructure/navigation";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <LocationProvider>
      <RestaurantProvider>
        <ThemeProvider theme={theme}>
          <AppNavigation />
        </ThemeProvider>
      </RestaurantProvider>
    </LocationProvider>
  );
}
