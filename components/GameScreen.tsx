import React, { useState, useCallback } from 'react';
import type { Level, AnswerOption } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import { ArrowUturnLeftIcon } from './icons';

interface GameScreenProps {
  level: Level;
  onGameEnd: (finalScore: number) => void;
  onChangeLevel: () => void;
}

const FormulaDisplay: React.FC<{ formula: Level['formula'] }> = ({ formula }) => {
  if (!formula) return null;

  return (
    <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-lg text-sm text-slate-700">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
        <div><span className="font-bold text-blue-600">[+] Afirmativa:</span> {formula.affirmative}</div>
        <div><span className="font-bold text-red-600">[-] Negativa:</span> {formula.negative}</div>
        <div><span className="font-bold text-yellow-800">[?] Interrogativa:</span> {formula.interrogative}</div>
      </div>
    </div>
  );
};


const GameScreen: React.FC<GameScreenProps> = ({ level, onGameEnd, onChangeLevel }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = useCallback((answer: AnswerOption) => {
    if (answer.isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < level.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      onGameEnd(score);
    }
  }, [currentQuestionIndex, level.questions.length, onGameEnd, score]);

  const currentQuestion = level.questions[currentQuestionIndex];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-sky-700">{level.title}</h2>
        <button onClick={onChangeLevel} className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors font-semibold text-sm">
          <ArrowUturnLeftIcon className="w-5 h-5" />
          <span>Salir</span>
        </button>
      </div>

      <FormulaDisplay formula={level.formula} />

      <div className="mb-6">
        <ProgressBar current={currentQuestionIndex + 1} total={level.questions.length} />
      </div>
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={handleAnswer}
        onNext={handleNextQuestion}
      />
    </div>
  );
};

export default GameScreen;