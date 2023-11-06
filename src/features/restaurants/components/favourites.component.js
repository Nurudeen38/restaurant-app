import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

export default function Favorites({ favorites, navigate }) {
  return (
    <View>
      <AntDesign name="heart" />
    </View>
  );
}
