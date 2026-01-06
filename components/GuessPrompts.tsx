import React, { useState } from "react";
import { MatchResults, Prompt, PromptMood, PromptResponse } from "../types";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "./AppButton";
import { COLORS, FONT_SIZES, globalStyles, RADIUS, SPACING } from "../theme";
import { MoodButton } from "./MoodButton";

export interface GuessPromptsProps {
  prompts: Prompt[];
}

export function GuessPrompts({ prompts }: GuessPromptsProps) {
  const [responses, setResponses] = useState<PromptResponse[]>(
    getShuffledResponses()
  );
  const hasCompletedPrompts = responses.every((r) => !!r.mood);
  const [results, setResults] = useState<MatchResults>();
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  function onChooseMoodHandler(index: number, mood: PromptMood) {
    setResponses((prev) => {
      return [
        ...prev.slice(0, index),
        {
          ...prev[index],
          mood,
        },
        ...prev.slice(index + 1),
      ];
    });
  }

  function getShuffledResponses() {
    return shuffle(prompts.map((p) => ({ ...p, mood: null })));
  }

  async function onCheckAnswersHandler() {
    // todo: update
    const results = await checkResults(prompts, responses);
    setResults(results);
  }

  function onResetHandler() {
    const hasStartedGame = responses.some((r) => r.mood);

    if (!hasStartedGame) {
      return;
    }

    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        "You're about to lose all your progress! Are you sure you want to continue?"
      );
      if (confirmed) {
        onRestartGameHandler();
      }

      return;
    }

    // todo: trigger alert
  }

  function onRestartGameHandler() {
    clearResults();
    setResponses(getShuffledResponses());
  }

  function clearResults() {
    setResults(undefined);
    setIsLoadingResults(false);
  }
  return (
    <View style={globalStyles.grow}>
      {/* todo: render results in modal*/}
      <>
        {/* <View style={styles.modal}>
          <View style={styles.modalContent}>
            {isLoadingResults && (
              <View>
                <Text style={styles.modalText}>Calculating Results...</Text>
                <ActivityIndicator size="large" color={COLORS.secondary} />
              </View>
            )}
            {!!results && (
              <View>
                <View>
                  {results.hasPerfectScore ? (
                    <Text style={styles.modalText}>It's like we share the same mind, you got them all correct!</Text>
                  ) : (
                    <>
                      {results.correct.length > 0 && (<Text style={styles.modalText}>Good job completing the prompts!</Text>)}
                      {results.correct.length === 0 ? (<Text style={styles.modalText}>Try Again!</Text>) : (<Text style={styles.modalText}>You got a score of {results.percentage}!</Text>)}
                    </>
                  )}
                </View>
                <View style={[styles.actionsRow, { gap: SPACING.sm }]}>
                  <AppButton
                    label="Back"
                    onPress={clearResults}

                  />
                  <AppButton
                    label="Restart"
                    onPress={onRestartGameHandler}

                  />
                </View>
              </View>
            )}


          </View>
        </View> */}
      </>
      <Text style={globalStyles.sectionTitle}>
        Match the prompts to match my mood!
      </Text>
      <View style={globalStyles.grow}>
        {/* todo: use lazy loading*/}
        <ScrollView>
          {responses.map((item, index) => (
            <View key={item.id} style={styles.guessItem}>
              <Text style={styles.guessTitle}>{item.name}</Text>
              <View style={[globalStyles.row, { gap: SPACING.md }]}>
                <MoodButton
                  mood="Cozy"
                  selected={responses[index].mood === "Cozy"}
                  onSelectMood={() => onChooseMoodHandler(index, "Cozy")}
                />
                <MoodButton
                  mood="Stress"
                  selected={responses[index].mood === "Stress"}
                  onSelectMood={() => onChooseMoodHandler(index, "Stress")}
                />
                <MoodButton
                  mood="Excited"
                  selected={responses[index].mood === "Excited"}
                  onSelectMood={() => onChooseMoodHandler(index, "Excited")}
                />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={[styles.actionsRow, { gap: SPACING.sm }]}>
          <AppButton
            label="Check Answers"
            disabled={!hasCompletedPrompts}
            // todo: update
          />
          <AppButton
            label="Reset"
            // todo: update
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsRow: {
    justifyContent: "space-between",
    marginTop: SPACING.md,
  },
  modal: {
    // todo: center content
  },
  modalContent: {
    padding: SPACING.lg,
    backgroundColor: COLORS.surfaceDark,
    borderRadius: RADIUS.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
    width: "80%",
  },
  modalText: {
    fontSize: FONT_SIZES.md,
    textAlign: "center",
    marginBottom: SPACING.md,
    color: "white",
  },
  guessItem: {
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    alignItems: "center",
    marginBottom: SPACING.lg,
    borderRadius: RADIUS.md,
  },
  guessTitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.md,
    marginBottom: SPACING.sm,
    fontWeight: "500",
  },
});

function shuffle<T>(list: T[]) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

async function checkResults(
  expected: Prompt[],
  actual: PromptResponse[]
): Promise<MatchResults> {
  await new Promise((res) => setTimeout(res, 1500));
  const answers = Object.fromEntries(
    expected.map((p) => [p.id, p.mood] as const)
  );
  const totalPossiblePoints = expected.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  const correct = actual.filter((r) => answers[r.id] === r.mood);
  const incorrect = actual.filter((r) => answers[r.id] !== r.mood);
  const userPoints = correct.reduce((prev, curr) => prev + curr.points, 0);

  const percentage = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(userPoints / totalPossiblePoints);

  return {
    correct: correct.map((c) => c.id),
    incorrect: incorrect.map((c) => c.id),
    percentage,
    hasPerfectScore: totalPossiblePoints === userPoints,
  };
}
