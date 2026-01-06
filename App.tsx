import React from "react";
import { useState } from "react";
import { Prompt, PromptDTO } from "./types";
import { MatchMe } from "./components/MatchMe";

export default function App() {
  const [prompts, setPrompts] = useState<Prompt[]>([
    { id: "1", name: "Coding", mood: "Excited", points: 1 },
    { id: "2", name: "Reading", mood: "Cozy", points: 2 },
    { id: "3", name: "Jogging", mood: "Stress", points: 1 },
  ]);

  function onAddPromptHandler(data: PromptDTO) {
    setPrompts((prev) => [
      ...prev,
      { ...data, id: (prev.length + 1).toString() },
    ]);
  }

  return <MatchMe prompts={prompts} onAddPrompt={onAddPromptHandler} />;
}
