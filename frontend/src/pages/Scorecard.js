import React from 'react';
import { useParams } from 'react-router-dom';

const Scorecard = () => {
  const { matchId } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Match Scorecard</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Batting</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2">Player Name</div>
              <div>R</div>
              <div>B</div>
              <div>4s</div>
              <div>6s</div>
              <div>SR</div>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2">Player 1</div>
              <div>50</div>
              <div>60</div>
              <div>4</div>
              <div>1</div>
              <div>83.33</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Bowling</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2">Player Name</div>
              <div>O</div>
              <div>M</div>
              <div>R</div>
              <div>W</div>
              <div>ER</div>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2">Player 1</div>
              <div>10</div>
              <div>0</div>
              <div>45</div>
              <div>2</div>
              <div>4.50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
