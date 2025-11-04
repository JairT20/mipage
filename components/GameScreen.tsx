import React, { useState, useCallback, useEffect } from 'react';
import type { Level, Question } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import { ArrowUturnLeftIcon, ArrowLeftIcon, ArrowRightIcon } from './icons';

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

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const GameScreen: React.FC<GameScreenProps> = ({ level, onGameEnd, onChangeLevel }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<Set<string>>(new Set());
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset state and shuffle questions when level changes
    setShuffledQuestions(shuffleArray(level.questions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredCorrectly(new Set());
    setKey(prevKey => prevKey + 1);
  }, [level]);

  const handleAnswer = useCallback((isCorrect: boolean, questionId: string) => {
    if (isCorrect && !answeredCorrectly.has(questionId)) {
      setScore(prevScore => prevScore + 1);
      setAnsweredCorrectly(prev => new Set(prev).add(questionId));
    }
  }, [answeredCorrectly]);

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      onGameEnd(score);
    }
  }, [currentQuestionIndex, shuffledQuestions.length, onGameEnd, score]);
  
  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  }, [currentQuestionIndex]);

  if (shuffledQuestions.length === 0) {
    return (
        <div className="flex justify-center items-center p-8">
            <p className="text-lg text-slate-600">Cargando nivel...</p>
        </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

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
        <ProgressBar current={currentQuestionIndex + 1} total={shuffledQuestions.length} />
      </div>
      <QuestionCard
        key={`${currentQuestion.id}-${key}`}
        question={currentQuestion}
        onAnswer={handleAnswer}
        onNext={goToNextQuestion}
        isLastQuestion={currentQuestionIndex === shuffledQuestions.length - 1}
      />
      <div className="mt-6 flex justify-between items-center">
        <button 
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 font-bold rounded-lg transition-colors duration-200 hover:bg-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
        >
            <ArrowLeftIcon className="w-5 h-5"/>
            <span>Anterior</span>
        </button>
         <button 
            onClick={goToNextQuestion}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white font-bold rounded-lg transition-colors duration-200 hover:bg-sky-700"
        >
            <span>{currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}</span>
            <ArrowRightIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default GameScreen;