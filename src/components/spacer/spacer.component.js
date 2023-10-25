import React from "react";
import styled from "styled-components/native";

const sizeVariant = {
  xs: 0,
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  retuurn`${properrty}:${value}`;
};

const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

export default Spacer;
