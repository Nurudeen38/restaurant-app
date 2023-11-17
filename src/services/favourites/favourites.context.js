import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import { useAuth } from "../authentication/authentication.context";

const FavoriteContext = React.createContext();

export const FavoriteProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const add = (favourite) => {
    setFavorites([...favorites, favourite]);
  };

  const remove = (placeId) => {
    setFavorites(favorites.filter((favorite) => favorite.placeId !== placeId));
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorite-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e.toString());
    }
  };

  const value = {
    addFavorite: add,
    favorites,
    removeFavorite: remove,
    saveFavorites,
    loadFavorites,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  return context;
};
