export type PromptMood = "Excited" | "Stress" | "Cozy";
export interface Prompt {
  id: string;
  name: string;
  mood: PromptMood;
  points: number;
}

export type PromptDTO = Pick<Prompt, "mood" | "name" | "points">;

export type PromptResponse = Omit<Prompt, "mood"> & {
  mood: Prompt["mood"] | null;
};

export interface MatchResults {
  correct: string[];
  incorrect: string[];
  percentage: string;
  hasPerfectScore: boolean;
}
