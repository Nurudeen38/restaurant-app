import React, { useState } from "react";
import { useAuth } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/styled.component";
import { ActivityIndicator, TextInput } from "react-native-paper";
import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useAuth();

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Text> Enter your login details</Text>
        <Spacer />

        <TextInput
          autoCapitalize="none"
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Spacer />
        <TextInput
          label="Password"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        {!!error && <Text variant="error">{error}</Text>}
        <Spacer position="top" size="large"></Spacer>
        <AuthButton
          loading={loading}
          mode="contained"
          onPress={() => login(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
}
