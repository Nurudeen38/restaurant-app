import React, { useContext, useState } from "react";

const FavoriteContext = React.createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (favourite) => {
    setFavorites([...favorites, favourite]);
  };

  const remove = (placeId) => {
    setFavorites(favorites.filter((favorite) => favorite.placeId !== placeId));
  };

  const value = {
    addFavorite: add,
    favorites,
    removeFavorite: remove,
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
