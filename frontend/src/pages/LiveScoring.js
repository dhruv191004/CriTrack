import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const LiveScoring = () => {
  const { matchId } = useParams();
  const [score, setScore] = useState({
    runs: 0,
    balls: 0,
    wickets: 0,
    extras: 0,
  });

  const handleScoreUpdate = (type) => {
    // Implement score update logic
    console.log('Score updated:', type);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">Live Scoring</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Team A</h2>
              <p className="text-3xl font-bold">{score.runs}/{score.wickets}</p>
              <p className="text-gray-400">{score.balls} balls</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Team B</h2>
              <p className="text-3xl font-bold">0/0</p>
              <p className="text-gray-400">Not batting</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleScoreUpdate(1)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              1 Run
            </button>
            <button
              onClick={() => handleScoreUpdate(2)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              2 Runs
            </button>
            <button
              onClick={() => handleScoreUpdate(4)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              4 Runs
            </button>
            <button
              onClick={() => handleScoreUpdate(6)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              6 Runs
            </button>
            <button
              onClick={() => handleScoreUpdate('wicket')}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Wicket
            </button>
            <button
              onClick={() => handleScoreUpdate('wide')}
              className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
            >
              Wide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScoring;
