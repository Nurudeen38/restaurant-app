import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info-card.component";
import styled from "styled-components/native";


const StyledView = styled.View`
background-color: 'green';
`

const RestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16 }}>
          <Searchbar elevation={2} placeholder="Search for a restaurant" />
        </View>
        <View style={{ flex: 1, padding: 16 }}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {},
});

export default RestaurantsScreen;
