import React from 'react';
import { useNavigate } from 'react-router-dom';

const MatchSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Match Setup</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Match Title</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter match title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Teams</label>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Team 1 name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Team 2 name"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Match Format</label>
            <select className="w-full p-2 rounded bg-gray-800 text-white">
              <option value="t20">T20</option>
              <option value="odi">ODI</option>
              <option value="test">Test</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={(e) => {
              e.preventDefault();
              navigate('/match/live/1'); // Replace with actual match ID
            }}
          >
            Start Match
          </button>
        </form>
      </div>
    </div>
  );
};

export default MatchSetup;
