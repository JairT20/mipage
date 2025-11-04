
import React from 'react';
import type { Level } from '../types';

interface LevelSelectorProps {
  levels: Level[];
  onSelectLevel: (levelId: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, onSelectLevel }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-700 mb-6">Elige un Nivel</h2>
      <div className="space-y-4">
        {levels.map((level) => (
          <div key={level.id} className="border border-slate-200 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:border-sky-500 hover:bg-sky-50">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
              <div className="flex-shrink-0 mb-3 sm:mb-0">
                <div className="bg-sky-100 text-sky-600 rounded-full p-3">
                    <level.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-xl font-semibold text-slate-800">{level.title}</h3>
                <p className="text-slate-500">{level.description}</p>
              </div>
              <div className="flex-shrink-0 mt-4 sm:mt-0">
                <button
                  onClick={() => onSelectLevel(level.id)}
                  className="bg-sky-600 text-white font-bold py-2 px-6 rounded-lg transition-transform duration-200 hover:bg-sky-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Empezar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
