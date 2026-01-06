import React from "react";
import { useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { COLORS, FONT_SIZES, globalStyles, SPACING } from "../theme";
import { Prompt, PromptDTO } from "../types";

import { SetupPrompts } from "./SetupPrompts";
import { GuessPrompts } from "./GuessPrompts";

export interface MatchMeProps {
  prompts: Prompt[];
  onAddPrompt: (newPrompt: PromptDTO) => void;
}
export function MatchMe({ prompts, onAddPrompt }: MatchMeProps) {
  const [isSetupMode, setIsSetupMode] = useState(true);
  return (
    <View style={[globalStyles.grow, styles.root]}>
      <View style={[globalStyles.grow, styles.container]}>
        <View style={[globalStyles.row, styles.header]}>
          <Text style={styles.title}>Match Me!</Text>
          <View style={styles.switchRow}>
            {/*Task 1: Add the Switch element here */}
            <Switch
              value={isSetupMode}
              onValueChange={setIsSetupMode}
              editable={prompts.length === 0 ? "true" : "false"}
            ></Switch>
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
    marginTop: SPACING.sm,
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
