import { View, Text, Image, Platform } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const isAndroid = Platform.OS === "android" ? WebView : Image;

export default function MapCallout({ restaurant }) {
  const Img = isAndroid ? WebView : Image;
  return (
    <View>
      <Text>{restaurant.name} </Text>
      <Img source={{ uri: restaurant.photos[0] }} />
    </View>
  );
}
