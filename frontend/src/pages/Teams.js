import React from 'react';

const Teams = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Teams</h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">My Teams</h2>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Add New Team
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold">Team Name</h3>
              <p className="text-sm text-gray-400">12 players</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-blue-400 hover:text-blue-300">Edit</button>
                <button className="text-red-400 hover:text-red-300">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
