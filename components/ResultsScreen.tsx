
import React, { useState, useEffect } from 'react';
import { TrophyIcon, ArrowPathIcon, Squares2X2Icon } from './icons';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onChangeLevel: () => void;
}

const Confetti: React.FC = () => {
    const confettiCount = 50;
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {Array.from({ length: confettiCount }).map((_, i) => (
                <div
                    key={i}
                    className="confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        animationDelay: `${Math.random() * 2}s`,
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        transform: `rotate(${Math.random() * 360}deg)`
                    }}
                />
            ))}
        </div>
    );
};


const AnimatedScore: React.FC<{ targetScore: number }> = ({ targetScore }) => {
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        if (targetScore === 0) {
            setCurrentScore(0);
            return;
        }
        const animationDuration = 1000; // 1 second
        const frameDuration = 1000 / 60; // 60 fps
        const totalFrames = Math.round(animationDuration / frameDuration);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(targetScore * progress);
            setCurrentScore(current);

            if (frame === totalFrames) {
                clearInterval(counter);
                setCurrentScore(targetScore);
            }
        }, frameDuration);

        return () => clearInterval(counter);
    }, [targetScore]);

    return <>{currentScore}</>;
}


const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart, onChangeLevel }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedback = () => {
    if (percentage === 100) return { message: '¡Perfecto!', color: 'text-green-500' };
    if (percentage >= 80) return { message: '¡Excelente trabajo!', color: 'text-sky-500' };
    if (percentage >= 50) return { message: '¡Buen intento!', color: 'text-yellow-500' };
    return { message: '¡Sigue practicando!', color: 'text-red-500' };
  };

  const feedback = getFeedback();
  const showConfetti = percentage >= 80;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in relative">
        {showConfetti && <Confetti />}
        <TrophyIcon className="w-20 h-20 mx-auto text-yellow-400" />
      <h2 className="text-3xl font-bold mt-4">Nivel Completado</h2>
      <p className={`text-2xl font-semibold mt-2 ${feedback.color}`}>{feedback.message}</p>
      
      <div className="my-8">
        <p className="text-lg text-slate-600">Tu puntuación:</p>
        <p className="text-6xl font-bold text-slate-800">
            <AnimatedScore targetScore={score} />
            <span className="text-3xl text-slate-500"> / {totalQuestions}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 w-full sm:w-auto bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:bg-sky-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          <ArrowPathIcon className="w-5 h-5"/>
          Intentar de Nuevo
        </button>
        <button
          onClick={onChangeLevel}
          className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-200 text-slate-800 font-bold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          <Squares2X2Icon className="w-5 h-5"/>
          Elegir Otro Nivel
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;