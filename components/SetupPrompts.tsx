import React, { useState } from "react";
import { Prompt, PromptDTO, PromptMood } from "../types";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MoodButton } from "./MoodButton";
import { AppButton } from "./AppButton";
import { COLORS, FONT_SIZES, globalStyles, RADIUS, SPACING } from "../themes";

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
      <KeyboardAvoidingView
        style={globalStyles.grow}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={globalStyles.grow}>
          <View style={[globalStyles.inputContainer, { gap: SPACING.sm }]}>
            <Text
              testID="prompt-name-text-label"
              style={globalStyles.inputLabel}
            >
              Prompt:
            </Text>
            <TextInput
              style={[globalStyles.input, globalStyles.textInput]}
              value={promptName}
              onChangeText={setPromptName}
              placeholder="Coding"
              editable={!isAddingPrompt}
              accessibilityLabel="Prompt name"
            />
          </View>
          <View style={[globalStyles.inputContainer, { gap: SPACING.sm }]}>
            <Text
              testID="prompt-points-text-label"
              style={globalStyles.inputLabel}
            >
              Points:
            </Text>
            <TextInput
              style={[globalStyles.input, globalStyles.textInput]}
              value={promptPoints}
              onChangeText={setPromptPoints}
              placeholder="1"
              editable={!isAddingPrompt}
              keyboardType="number-pad"
              accessibilityLabel="Prompt points"
            />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text
              testID="prompt-mood-text-label"
              style={globalStyles.inputLabel}
            >
              Mood:
            </Text>
            <View
              style={[globalStyles.row, styles.radiogroup, { gap: SPACING.md }]}
              accessible
              accessibilityRole="radiogroup"
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
      </KeyboardAvoidingView>

      <View style={[globalStyles.grow, styles.promptsContainer]}>
        <Text style={globalStyles.sectionTitle}>My Prompts:</Text>
        {prompts.length ? (
          <FlatList
            data={prompts}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.promptItem}>
                <Text style={[styles.itemText, styles.itemPrompt]}>
                  {item.name}
                </Text>
                <Text style={[styles.itemText, styles.itemMood]}>
                  {item.mood} +{item.points}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
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
