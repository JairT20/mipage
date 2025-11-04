// FIX: Import React to provide the 'React' namespace for ComponentType.
import React from 'react';

export enum GameState {
  LEVEL_SELECTION,
  PLAYING,
  FINISHED,
}

export enum QuestionType {
  FILL_IN_THE_BLANK,
  MULTIPLE_CHOICE,
}

export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  form: 'Affirmative' | 'Negative' | 'Interrogative';
  sentence: string; // e.g., "She ___ (work) on weekends."
  options: AnswerOption[];
  explanation: string;
  translation: string;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: Question[];
  formula?: {
    affirmative: string;
    negative: string;
    interrogative: string;
  };
}