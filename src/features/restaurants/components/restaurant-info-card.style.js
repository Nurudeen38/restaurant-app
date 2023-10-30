import styled from "styled-components/native";

export const Info = styled.View`
  padding: 16px;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;
