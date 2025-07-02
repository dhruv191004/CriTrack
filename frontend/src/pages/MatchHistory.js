import React from 'react';

const MatchHistory = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Match History</h1>

        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">Team A vs Team B</h2>
                <p className="text-sm text-gray-400">T20 Match</p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold">Team A won</h3>
                <p className="text-sm text-gray-400">by 5 wickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchHistory;
