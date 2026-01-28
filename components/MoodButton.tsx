import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { PromptMood } from "../types";
import { COLORS, globalStyles, RADIUS, SPACING } from "../themes";

export interface MoodButtonProps {
  mood: PromptMood;
  onSelectMood: () => void;
  selected: boolean;
  disabled?: boolean;
}

export function MoodButton({
  mood,
  selected,
  onSelectMood,
  disabled = false,
}: MoodButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        globalStyles.input,
        globalStyles.grow,
        styles.input,
        selected && styles.selected,
        disabled && globalStyles.disabled,
        pressed && globalStyles.pressed,
      ]}
      onPress={onSelectMood}
      accessibilityRole="radio"
      accessibilityState={{ selected: selected }}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {mood}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: COLORS.primary,
  },
  label: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  labelSelected: {
    color: "#FFF",
  },
});
