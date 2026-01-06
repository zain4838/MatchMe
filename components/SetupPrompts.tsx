import React, { useState } from "react";
import { Prompt, PromptDTO, PromptMood } from "../types";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { MoodButton } from "./MoodButton";
import { AppButton } from "./AppButton";
import { COLORS, FONT_SIZES, globalStyles, RADIUS, SPACING } from "../theme";

export interface SetupPromptsProps {
  prompts: Prompt[];
  onAddPrompt: (newPrompt: PromptDTO) => void;
}
export function SetupPrompts({ prompts, onAddPrompt }: SetupPromptsProps) {
  const [promptName, setPromptName] = useState("");
  const [promptMood, setPromptMood] = useState<PromptMood | null>(null);
  const [promptPoints, setPromptPoints] = useState("1");
  const [isAddingPrompt, setIsAddingPrompt] = useState(false);
  const canAddPrompt = !!promptName && !!promptMood && !!promptPoints;

  function onAddPromptHandler() {
    if (!promptName || !promptMood || !promptPoints) {
      return;
    }

    onAddPrompt({
      name: promptName,
      mood: promptMood,
      points: Number(promptPoints),
    });

    setPromptName("");
    setPromptMood(null);
    setPromptPoints("1");
  }

  return (
    <View style={globalStyles.grow}>
      <View style={globalStyles.grow}>
        <ScrollView style={globalStyles.grow}>
          <View style={[globalStyles.inputContainer, { gap: SPACING.sm }]}>
            {/* Task 2 and 3: Add prompt for a name input */}
            <TextInput
              value={promptName}
              onChangeText={setPromptName}
              placeholder="Coding"
              style={[globalStyles.input, globalStyles.textInput]}
              editable={isAddingPrompt ? "true" : "false"}
            />
          </View>
          <View style={[globalStyles.inputContainer, { gap: SPACING.sm }]}>
            {/* Task 2 and 3: Add prompt for a score input */}
            <TextInput
              value={promptPoints}
              onChangeText={setPromptPoints}
              placeholder="1"
              style={[globalStyles.input, globalStyles.textInput]}
              editable={isAddingPrompt ? "true" : "false"}
            />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.inputLabel}>Mood:</Text>
            <View
              style={[globalStyles.row, styles.radiogroup, { gap: SPACING.md }]}
            >
              <MoodButton
                mood="Cozy"
                selected={promptMood === "Cozy"}
                disabled={isAddingPrompt}
                onSelectMood={() => setPromptMood("Cozy")}
              />
              <MoodButton
                mood="Stress"
                selected={promptMood === "Stress"}
                disabled={isAddingPrompt}
                onSelectMood={() => setPromptMood("Stress")}
              />
              <MoodButton
                mood="Excited"
                selected={promptMood === "Excited"}
                disabled={isAddingPrompt}
                onSelectMood={() => setPromptMood("Excited")}
              />
            </View>
          </View>
          <AppButton
            label="Add"
            disabled={!canAddPrompt}
            onPress={onAddPromptHandler}
            onPressIn={() => setIsAddingPrompt(true)}
            onPressOut={() => setIsAddingPrompt(false)}
          />
        </ScrollView>
      </View>

      <View style={[globalStyles.grow, styles.promptsContainer]}>
        <Text style={globalStyles.sectionTitle}>My Prompts:</Text>
        {prompts.length ? (
          <ScrollView>
            {prompts.map((item) => (
              <View key={item.id} style={styles.promptItem}>
                <Text style={[styles.itemText, styles.itemPrompt]}>
                  {item.name}
                </Text>
                <Text style={[styles.itemText, styles.itemMood]}>
                  {item.mood} +{item.points}
                </Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.noPromptsText}>No prompts yet!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radiogroup: {
    marginTop: SPACING.xs,
    marginBottom: SPACING.lg,
  },
  promptsContainer: {
    borderTopWidth: 1,
    paddingTop: SPACING.sm,
    borderTopColor: COLORS.textSecondary,
    marginTop: SPACING.lg,
  },
  promptItem: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: RADIUS.md,
  },
  noPromptsText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "400",
  },
  itemText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.md,
  },
  itemPrompt: {
    fontWeight: "500",
  },
  itemMood: {
    fontWeight: "400",
  },
});
