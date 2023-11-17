import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLocationContext } from "../../../services/location/location.context";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const { keyword, search } = useLocationContext();

  useEffect(() => {
    search(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Searchbar
        value={searchTerm}
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={() => setIsToggled(!isToggled)}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
        onChangeText={(e) => setSearchTerm(e)}
        elevation={2}
        placeholder="Search for a restaurant"
      />
    </View>
  );
}
