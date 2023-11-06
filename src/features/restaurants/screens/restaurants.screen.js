import { FlatList, TouchableOpacity } from "react-native";
import React from "react";
import RestaurantInfo from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import Spacer from "../../../components/spacer/spacer.component";
import { useRestaurantContext } from "../../../services/restuarants/restuarant.context";
import Search from "../components/search.component";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import SafeArea from "../../../components/common/SafeArea";
import Favorites from "../components/favourites.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  justify-content: "center";
  flex-grow: 1;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants } = useRestaurantContext();
  const { loading } = useRestaurantContext();

  return (
    <SafeArea>
      <Search />
      <Favorites />
      {loading ? (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("details", {
                    restaurant: item,
                  })
                }
              >
                <Spacer size="large" position="bottom">
                  <RestaurantInfo restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
