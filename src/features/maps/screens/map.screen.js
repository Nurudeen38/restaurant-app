import React, { useEffect, useState } from "react";

import MapView, { Marker, Callout } from "react-native-maps";
import Search from "../components/search.component";
import SafeArea from "../../../components/common/SafeArea";
import { useRestaurantContext } from "../../../services/restuarants/restuarant.context";
import { useLocationContext } from "../../../services/location/location.context";
import MapCallout from "../components/map-callout.component";

export default function MapScreen({ navigation }) {
  const { restaurants = [] } = useRestaurantContext();
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useLocationContext();

  useEffect(() => {
    const southwest = location.viewPort.southwest.lat;
    const northeast = location.viewPort.northeast.lat;

    const tempLatDelta = northeast - southwest;
    setLatDelta(tempLatDelta);
  }, [location?.viewPort]);

  return (
    <SafeArea>
      <Search />
      <MapView
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {restaurants?.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("details", {
                  restaurant,
                })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </SafeArea>
  );
}
