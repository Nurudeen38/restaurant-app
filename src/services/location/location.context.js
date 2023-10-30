import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { requestLocation } from "./location.service";

export const LocationContext = createContext({});

export const useLocation = () => {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const onSearch = async (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
    setTimeout(() => {
      requestLocation(keyword)
        .then((val) => {
          setLocation(val);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }, 2000);
  };

  return {
    loading,
    error,
    location,
    keyword,
    search: onSearch,
  };
};

export default function LocationProvider({ children }) {
  const { error, loading, location, keyword, search } = useLocation();

  const value = { error, loading, location, keyword, search };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocationContext = () => {
  const restaurants = useContext(LocationContext);
  return restaurants;
};
