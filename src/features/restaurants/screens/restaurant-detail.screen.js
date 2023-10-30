import React, { useState } from "react";
import SafeArea from "../../../components/common/SafeArea";
import RestaurantInfo from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function RestaurantDetail({ route }) {
  const { restaurant } = route.params;

  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="BreakFast"
          expanded={breakFastExpanded}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakFastExpanded(!breakFastExpanded)}
        >
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          expanded={lunchExpanded}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Bread & Egg" />
          <List.Item title="Bread & Egg" />
        </List.Accordion>
        <List.Accordion
          title="Dinnner"
          expanded={dinnerExpanded}
          left={(props) => <List.Icon {...props} icon="food" />}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Rice & Chicken" />
          <List.Item title="Rice & Chicken" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          expanded={drinkExpanded}
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        >
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
