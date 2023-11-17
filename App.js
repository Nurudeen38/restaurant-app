import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import "firebase/compat/auth";

import { theme } from "./src/infrastructure/theme";
import RestaurantProvider from "./src/services/restuarants/restuarant.context";
import LocationProvider from "./src/services/location/location.context";
import AppNavigation from "./src/infrastructure/navigation";
import { FavoriteProvider } from "./src/services/favourites/favourites.context";
import app from "./src/services/authentication/authentication.service";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";

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
    <AuthContextProvider>
      <FavoriteProvider>
        <LocationProvider>
          <RestaurantProvider>
            <ThemeProvider theme={theme}>
              <AppNavigation />
            </ThemeProvider>
          </RestaurantProvider>
        </LocationProvider>
      </FavoriteProvider>
    </AuthContextProvider>
  );
}
