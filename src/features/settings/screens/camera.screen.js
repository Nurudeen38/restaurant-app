import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType, Constants } from "expo-camera";
import styled from "styled-components/native";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export default function CameraScreen({ navigation }) {
  const [hasPermission, setPermission] = useState(null);
  const { user } = useAuth();
  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`photo-${user.uid}`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = Camera.requestCameraPermissionsAsync();
      if (status === "granted");
      setPermission(true);
    })();
  }, []);

  if (hasPermission === null) return null;
  if (hasPermission === false) {
    return (
      <View>
        <Text>Permission not set</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
      />
    </TouchableOpacity>
  );
}
