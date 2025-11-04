
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import type { Level } from './types';
import { LEVELS } from './constants';
import LevelSelector from './components/LevelSelector';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.LEVEL_SELECTION);
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [score, setScore] = useState(0);

  const handleLevelSelect = useCallback((levelId: string) => {
    const level = LEVELS.find(l => l.id === levelId);
    if (level) {
      setCurrentLevel(level);
      setScore(0);
      setGameState(GameState.PLAYING);
    }
  }, []);

  const handleGameEnd = useCallback((finalScore: number) => {
    setScore(finalScore);
    setGameState(GameState.FINISHED);
  }, []);

  const handleRestart = useCallback(() => {
    if (currentLevel) {
      setScore(0);
      setGameState(GameState.PLAYING);
    }
  }, [currentLevel]);
  
  const handleChangeLevel = useCallback(() => {
    setCurrentLevel(null);
    setScore(0);
    setGameState(GameState.LEVEL_SELECTION);
  }, []);


  const renderContent = () => {
    switch (gameState) {
      case GameState.PLAYING:
        return currentLevel && <GameScreen level={currentLevel} onGameEnd={handleGameEnd} onChangeLevel={handleChangeLevel}/>;
      case GameState.FINISHED:
        return currentLevel && <ResultsScreen score={score} totalQuestions={currentLevel.questions.length} onRestart={handleRestart} onChangeLevel={handleChangeLevel} />;
      case GameState.LEVEL_SELECTION:
      default:
        return <LevelSelector levels={LEVELS} onSelectLevel={handleLevelSelect} />;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans flex flex-col items-center p-4 sm:p-6">
      <header className="w-full max-w-4xl text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-700">English Grammar Game</h1>
        <p className="text-slate-600 mt-2 text-lg">¡Mejora tu inglés de forma divertida!</p>
      </header>
      <main className="w-full flex-grow flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
