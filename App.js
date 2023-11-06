import React, { useEffect, useState } from "react";
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
import { FavoriteProvider } from "./src/services/favourites/favourites.context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXdTRKDkueAVyo9Z8LGsXkDLKhQ5lkw9c",
  authDomain: "restaurant-app-fb6bf.firebaseapp.com",
  projectId: "restaurant-app-fb6bf",
  storageBucket: "restaurant-app-fb6bf.appspot.com",
  messagingSenderId: "133793039065",
  appId: "1:133793039065:web:481b2bd8ea2bff5bc474c8",
  measurementId: "G-8BF4XFV4K8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    app
      .auth()
      .signInWithEmailAndPassword("nuksi911@gmail.com", "Nuksi119@")
      .then((user) => {
        console.log({ user });
      })
      .catch((e) => {
        console.log({ e });
      });
  }, []);
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <FavoriteProvider>
      <LocationProvider>
        <RestaurantProvider>
          <ThemeProvider theme={theme}>
            <AppNavigation />
          </ThemeProvider>
        </RestaurantProvider>
      </LocationProvider>
    </FavoriteProvider>
  );
}
