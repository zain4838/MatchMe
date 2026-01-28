import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { globalStyles } from "../themes";

export interface AppButton extends Omit<PressableProps, "children"> {
  label: string;
}
export function AppButton({ label, ...rest }: AppButton) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button,
        rest.disabled && globalStyles.disabled,
        { width: "100%" },
        pressed && globalStyles.pressed,
      ]}
      hitSlop={{
        top: 5,
        bottom: 5,
      }}
      {...rest}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}
