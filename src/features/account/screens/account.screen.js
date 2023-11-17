import React from "react";
import { Text, View } from "react-native";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/styled.component";
import Spacer from "../../../components/spacer/spacer.component";

export default function Account({ navigation }) {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
}
