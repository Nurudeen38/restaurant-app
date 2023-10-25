import { View, StyleSheet } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import open from "../../../../assets/open";

const Info = styled.View`
  padding: 16px;
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
flex-direction: row;
  flex: 1;
  align-items:center; 
  gap:16px;
  justify-content:flex-end;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const StyledCard = styled(Card)`
  background-color: "white";
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
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingsArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
              {
                isClosedTemporarily && <Text variant="labelLarge" style={{color:'red'}}>CLOSED TEMPORARILY</Text>
              }

            <SvgXml  xml={open} width={20} height={20} />
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
