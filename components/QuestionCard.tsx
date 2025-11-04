
import React, { useState, useCallback } from 'react';
import type { Question, AnswerOption } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: AnswerOption) => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = useCallback((option: AnswerOption) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    onAnswer(option);
  }, [isAnswered, onAnswer]);

  const getButtonClass = (option: AnswerOption) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-sky-100 border-slate-300';
    }
    if (option.isCorrect) {
      return 'bg-green-100 border-green-500 text-green-800 ring-2 ring-green-500';
    }
    if (option === selectedAnswer && !option.isCorrect) {
      return 'bg-red-100 border-red-500 text-red-800';
    }
    return 'bg-white border-slate-300 text-slate-500';
  };
  
  const getFormTagClass = () => {
    switch(question.form) {
        case 'Affirmative': return 'bg-blue-100 text-blue-800';
        case 'Negative': return 'bg-red-100 text-red-800';
        case 'Interrogative': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-slate-100 text-slate-800';
    }
  }


  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <span className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ${getFormTagClass()}`}>
            {question.form}
        </span>
      </div>
      <p className="text-xl sm:text-2xl text-slate-700 mb-6 text-center py-4 bg-slate-50 rounded-lg">
        {question.sentence.split('___').map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < question.sentence.split('___').length - 1 && (
              <span className="font-bold text-sky-600 underline decoration-dotted underline-offset-4 px-4">?</span>
            )}
          </React.Fragment>
        ))}
      </p>
      
      <div className="grid grid-cols-1 gap-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 font-semibold transition-all duration-200 ${getButtonClass(option)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-lg animate-fade-in ${selectedAnswer?.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
               {selectedAnswer?.isCorrect ? <CheckCircleIcon className="h-6 w-6 text-green-500" /> : <XCircleIcon className="h-6 w-6 text-red-500" />}
            </div>
            <div>
              <h4 className={`text-lg font-bold ${selectedAnswer?.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {selectedAnswer?.isCorrect ? '¡Correcto!' : '¡Ups!'}
              </h4>
              <p className="text-slate-600 mt-1">{question.explanation}</p>
              <p className="text-slate-500 italic mt-2">Traducción: "{question.translation}"</p>
            </div>
          </div>
        </div>
      )}

      {isAnswered && (
        <button
          onClick={onNext}
          className="mt-6 w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:bg-sky-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
