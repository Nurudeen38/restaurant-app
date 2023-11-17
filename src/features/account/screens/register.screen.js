import React, { useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/styled.component";
import Spacer from "../../../components/spacer/spacer.component";
import { Text, TextInput } from "react-native-paper";
import { useAuth } from "../../../services/authentication/authentication.context";

export default function Register() {
  const { error, register, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="bodyMedium" selectionColor="blue">
        Chicken Republic
      </Text>
      <AccountContainer>
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
        <Spacer />
        <TextInput
          label="ConfirmPassword"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Spacer />
        {!!error && <Text variant="error">{error}</Text>}
        <AuthButton
          loading={loading}
          mode="contained"
          onPress={() => {
            register(email, password, confirmPassword);
          }}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
}
