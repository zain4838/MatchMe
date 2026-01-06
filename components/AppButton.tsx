import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { globalStyles } from "../theme";

export interface AppButton extends Omit<PressableProps, "children"> {
  label: string;
}
export function AppButton({ label, disabled, ...rest }: AppButton) {
  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.button,
        disabled && globalStyles.disabled,
        { width: "100%" },
        pressed && globalStyles.pressed,
      ]}
      {...rest}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}
