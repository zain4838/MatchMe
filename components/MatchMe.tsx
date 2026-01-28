import React from "react";
import { useState } from "react";
import { Alert, Platform, StyleSheet, Switch, Text, View } from "react-native";
import { COLORS, FONT_SIZES, globalStyles, SPACING } from "../themes";
import { Prompt, PromptDTO } from "../types";

import { SetupPrompts } from "./SetupPrompts";
import { GuessPrompts } from "./GuessPrompts";

export interface MatchMeProps {
  prompts: Prompt[];
  onAddPrompt: (newPrompt: PromptDTO) => void;
}
export function MatchMe({ prompts, onAddPrompt }: MatchMeProps) {
  const [isSetupMode, setIsSetupMode] = useState(true);

  function onSwitchModeHandler(newValue: boolean) {
    if (newValue) {
      if (Platform.OS === "web") {
        const confirmed = window.confirm(
          "You're exiting match mode and will lose all your progress! Are you sure you want to continue?",
        );

        setIsSetupMode(confirmed);
        return;
      }

      Alert.alert(
        "Exiting",
        "You're exiting match mode and will lose all your progress! Are you sure you want to continue?",
        [
          {
            text: "Stay",
            onPress: () => setIsSetupMode(false),
          },
          {
            text: "Exit",
            onPress: () => setIsSetupMode(true),
          },
        ],
      );

      return;
    }

    setIsSetupMode(newValue);
  }
  return (
    <View style={[globalStyles.grow, styles.root]}>
      <View style={[globalStyles.grow, styles.container]}>
        <View style={[globalStyles.row, styles.header]}>
          <Text style={styles.title}>Match Me!</Text>
          <View style={styles.switchRow}>
            <Text testID="game-mode-text-label" style={globalStyles.inputLabel}>
              {isSetupMode ? "Setup" : "Guess"}:
            </Text>
            <Switch
              disabled={prompts.length === 0}
              value={isSetupMode}
              onValueChange={onSwitchModeHandler}
              accessibilityLabel="Select game mode"
            />
          </View>
        </View>

        {isSetupMode ? (
          <SetupPrompts prompts={prompts} onAddPrompt={onAddPrompt} />
        ) : (
          <GuessPrompts key={String(isSetupMode)} prompts={prompts} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: SPACING.xxl,
  },
  container: {
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  header: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
});
