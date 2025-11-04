import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { Question, AnswerOption, MultipleChoiceQuestion, SentenceBuilderQuestion } from '../types';
import { QuestionType } from '../types';
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon } from './icons';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, questionId: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MultipleChoiceCard: React.FC<{
  question: MultipleChoiceQuestion;
  onAnswer: (answer: AnswerOption) => void;
}> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const shuffledOptions = useMemo(() => shuffleArray(question.options), [question]);

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
    const isSelected = option === selectedAnswer;
    if (option.isCorrect) {
      return `bg-green-100 border-green-500 text-green-800 ring-2 ring-green-500 ${isSelected ? 'animate-pop' : ''}`;
    }
    if (isSelected && !option.isCorrect) {
      return 'bg-red-100 border-red-500 text-red-800 animate-shake';
    }
    return 'bg-white border-slate-300 text-slate-500';
  };
  
  return (
    <div>
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
            {shuffledOptions.map((option, index) => (
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
    </div>
  );
};


const SentenceBuilderCard: React.FC<{
  question: SentenceBuilderQuestion;
  onAnswer: (isCorrect: boolean) => void;
}> = ({ question, onAnswer }) => {
    const [userOrder, setUserOrder] = useState<(string | null)[]>(Array(question.correctOrder.length).fill(null));
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [shake, setShake] = useState(false);

    const availableBlocks = useMemo(() => {
        const counts = userOrder.reduce((acc, block) => {
            if (block) acc[block] = (acc[block] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        
        return question.answerBlocks.filter(block => {
             const totalCount = question.answerBlocks.filter(b => b === block).length;
             const usedCount = counts[block] || 0;
             return usedCount < totalCount;
        });
    }, [question.answerBlocks, userOrder]);

    const shuffledAvailableBlocks = useMemo(() => shuffleArray(availableBlocks), [availableBlocks]);

    const handleBlockClick = (block: string) => {
        if (isAnswered) return;
        const nextEmptyIndex = userOrder.findIndex(slot => slot === null);
        if (nextEmptyIndex !== -1) {
            const newUserOrder = [...userOrder];
            newUserOrder[nextEmptyIndex] = block;
            setUserOrder(newUserOrder);
        }
    };

    const handleSlotClick = (index: number) => {
        if (isAnswered || userOrder[index] === null) return;
        const newUserOrder = [...userOrder];
        newUserOrder[index] = null;
        setUserOrder(newUserOrder);
    }

    const handleReset = () => {
        setUserOrder(Array(question.correctOrder.length).fill(null));
        setIsAnswered(false);
        setIsCorrect(null);
    };

    const handleCheckAnswer = () => {
        if (isAnswered) return;
        const filledOrder = userOrder.filter(Boolean) as string[];
        const correct = JSON.stringify(filledOrder) === JSON.stringify(question.correctOrder);
        setIsCorrect(correct);
        setIsAnswered(true);
        onAnswer(correct);

        if(!correct) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };
    
    const allSlotsFilled = useMemo(() => userOrder.every(slot => slot !== null), [userOrder]);

    return (
        <div>
            <div className="mb-4 p-3 bg-sky-100 border-l-4 border-sky-500 text-slate-700 rounded-r-lg">
                <p className="font-semibold">Contexto:</p>
                <p className="italic">"{question.contextSentence}"</p>
            </div>
            <div className={`text-xl sm:text-2xl text-slate-700 mb-6 text-center py-4 bg-slate-50 rounded-lg flex flex-wrap items-center justify-center gap-2 ${shake ? 'animate-shake' : ''}`}>
                {question.sentenceParts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part && <span>{part}</span>}
                        {index < question.correctOrder.length && (
                             <button 
                                onClick={() => handleSlotClick(index)}
                                className={`inline-block relative px-4 py-2 rounded-md border-2 border-dashed min-w-[100px] text-center font-semibold transition-colors duration-200
                                    ${ isAnswered 
                                        ? (isCorrect ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400') 
                                        : (userOrder[index] ? 'bg-white border-sky-400 cursor-pointer animate-pop' : 'bg-white border-slate-300')
                                    }`
                                }
                            >
                                {userOrder[index] || <span className="text-slate-400 italic">{question.hints?.[index] || '?'}</span>}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>
            
            <div className="min-h-[60px] p-2 border rounded-lg bg-slate-100 flex flex-wrap items-center justify-center gap-3 mb-4">
                {shuffledAvailableBlocks.map((block, index) => (
                    <button 
                        key={`${block}-${index}`} 
                        onClick={() => handleBlockClick(block)}
                        className="px-4 py-2 bg-white rounded-md shadow hover:bg-sky-100 transition-all font-semibold hover:scale-105"
                    >
                        {block}
                    </button>
                ))}
                {availableBlocks.length === 0 && !allSlotsFilled && <span className="text-slate-400">Completa los huecos...</span>}
                 {allSlotsFilled && <span className="text-sky-600 font-semibold">¡Listo para comprobar!</span>}
            </div>

             <div className="flex gap-2 justify-center">
                <button 
                    onClick={handleReset} 
                    disabled={isAnswered}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 font-bold rounded-lg transition-colors duration-200 hover:bg-slate-300 disabled:opacity-50"
                >
                    <ArrowPathIcon className="w-5 h-5"/>
                    <span>Reiniciar</span>
                </button>
                <button 
                    onClick={handleCheckAnswer} 
                    disabled={isAnswered || !allSlotsFilled}
                    className="flex-grow px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg transition-colors duration-200 hover:bg-yellow-600 disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                    Comprobar
                </button>
            </div>
        </div>
    );
};


const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext, isLastQuestion }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean|null>(null);

  const handleAnswerWrapper = useCallback((correct: boolean) => {
    setIsAnswered(true);
    setIsCorrect(correct);
    onAnswer(correct, question.id);
  }, [onAnswer, question.id]);
  
  const handleMCQAnswerWrapper = useCallback((answer: AnswerOption) => {
      handleAnswerWrapper(answer.isCorrect);
  }, [handleAnswerWrapper]);


  const getFormTagClass = () => {
    switch(question.form) {
        case 'Affirmative': return 'bg-blue-100 text-blue-800';
        case 'Negative': return 'bg-red-100 text-red-800';
        case 'Interrogative': return 'bg-yellow-100 text-yellow-800';
        case 'Mixed': return 'bg-purple-100 text-purple-800';
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
      
      {question.type === QuestionType.SENTENCE_BUILDER ? (
        <SentenceBuilderCard 
          question={question as SentenceBuilderQuestion} 
          onAnswer={handleAnswerWrapper}
        />
      ) : (
        <MultipleChoiceCard 
          question={question as MultipleChoiceQuestion} 
          onAnswer={handleMCQAnswerWrapper}
        />
      )}


      {isAnswered && (
        <>
            <div className={`mt-4 p-4 rounded-lg animate-fade-in ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                {isCorrect ? <CheckCircleIcon className="h-6 w-6 text-green-500" /> : <XCircleIcon className="h-6 w-6 text-red-500" />}
                </div>
                <div>
                <h4 className={`text-lg font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? '¡Correcto!' : '¡Ups!'}
                </h4>
                <p className="text-slate-600 mt-1">{question.explanation}</p>
                <p className="text-slate-500 italic mt-2">Traducción: "{question.translation}"</p>
                </div>
            </div>
            </div>
            <button
                onClick={onNext}
                className="mt-6 w-full bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:bg-sky-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
                {isLastQuestion ? 'Finalizar' : 'Siguiente'}
            </button>
        </>
      )}
    </div>
  );
};

export default QuestionCard;