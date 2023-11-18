import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function FadeInView({ duration = 1500, children, ...props }) {
  const fadeInView = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInView, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeInView]);

  return (
    <Animated.View
      style={{
        ...props,
        opacity: fadeInView,
      }}
    >
      {children}
    </Animated.View>
  );
}
