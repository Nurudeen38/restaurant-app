import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useLocationContext } from "../location/location.context";
import { requestRestaurant } from "./restaurant.service";

export const RestaurantContext = createContext({});

export const useRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const { location } = useLocationContext();

  const retrieveRestaurant = async () => {
    if (location && location?.lat) {
      setLoading(true);
      setTimeout(() => {
        requestRestaurant(`${location.lat},${location.lng}`)
          .then((val) => {
            setRestaurants(val);
            setLoading(false);
          })
          .catch((e) => {
            setError(e);
            setLoading(false);
          });
      }, 2000);
    }
  };

  useEffect(() => {
    retrieveRestaurant();
  }, [location]);

  return {
    loading,
    error,
    restaurants,
  };
};

export default function RestaurantProvider({ children }) {
  const { error, loading, restaurants } = useRestaurant();

  const value = { error, loading, restaurants };
  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => {
  const restaurants = useContext(RestaurantContext);
  return restaurants;
};
