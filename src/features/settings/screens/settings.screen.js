import React, { useState } from "react";
import SafeArea from "../../../components/common/SafeArea";
import { useAuth } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

export const StyledListItem = styled(List.Item)`
  padding: 16px;
`;

export const AvatarContainer = styled(View)`
  align-items: center;
  padding-top: 16px;
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useAuth();
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoT = await AsyncStorage.getItem(`photo-${currentUser.uid}`);
    setPhoto(photoT);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          {photo ? (
            <Avatar.Image source={{ uri: photo }} size={180} color="#2182BD" />
          ) : (
            <Avatar.Icon icon="human" size={180} color="#2182BD" />
          )}
        </TouchableOpacity>
        <Text>{user.user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <StyledListItem
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
          onPress={() => navigation.navigate("favorites")}
        />
        <StyledListItem
          style={{ padding: 16 }}
          title="Logout"
          onPress={onLogout}
          left={(props) => (
            <List.Icon {...props} color="'black" icon="account" />
          )}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
