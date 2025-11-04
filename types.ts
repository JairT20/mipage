// FIX: Import React to provide the 'React' namespace for ComponentType.
import React from 'react';

export enum GameState {
  LEVEL_SELECTION,
  PLAYING,
  FINISHED,
}

export enum QuestionType {
  FILL_IN_THE_BLANK, // Same as MULTIPLE_CHOICE for now, can be specialized later
  MULTIPLE_CHOICE,
  SENTENCE_BUILDER,
}

export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

// Base interface for all question types
interface BaseQuestion {
  id: string;
  form: 'Affirmative' | 'Negative' | 'Interrogative' | 'Mixed';
  explanation: string;
  translation: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: QuestionType.MULTIPLE_CHOICE | QuestionType.FILL_IN_THE_BLANK;
  sentence: string; // e.g., "She ___ (work) on weekends."
  options: AnswerOption[];
}

export interface SentenceBuilderQuestion extends BaseQuestion {
    type: QuestionType.SENTENCE_BUILDER;
    contextSentence: string; // The statement or question to respond to.
    sentenceParts: string[]; // e.g., ["Where", "she", "?"] -> Where ___ she ___?
    answerBlocks: string[]; // e.g., ["does", "work"]
    correctOrder: string[]; // e.g., ["does", "work"]
    hints?: string[]; // e.g., ["Auxiliar", "Verbo"]
}


export type Question = MultipleChoiceQuestion | SentenceBuilderQuestion;


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