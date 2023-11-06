import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLocationContext } from "../../../services/location/location.context";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { keyword, search } = useLocationContext();

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <View
      style={{
        position: "absolute",
        paddingTop: 40,
        paddingHorizontal: 20,
        width: "100%",
        zIndex: 1000,
        top: 30,
      }}
    >
      <Searchbar
        value={searchTerm}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
        icon="map"
        onChangeText={(e) => setSearchTerm(e)}
        elevation={2}
        placeholder="Search for a location"
      />
    </View>
  );
}
