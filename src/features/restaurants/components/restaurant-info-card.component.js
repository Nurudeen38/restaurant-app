import { StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.style";

const StyledCard = styled(Card)`
  background-color: "white";
  flex-basis: auto;
`;

export default function RestaurantInfo({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://media.istockphoto.com/id/1218839119/photo/turkish-baked-pistachio-and-pistachio-baklava.jpg?s=612x612&w=0&k=20&c=ohpH2iHnJpM3sOEoEttuKYQo2Z8_PC8r4DPR6Tk7MPs=",
    ],
    address = "Some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingsArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingsArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}

            <SvgXml xml={open} width={20} height={20} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
