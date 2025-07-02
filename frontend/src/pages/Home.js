import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Critrack</h1>
        <p className="text-gray-300">Your mobile-first cricket scoring app</p>
      </div>

      <div className="space-y-4 max-w-md w-full">
        {isAuthenticated ? (
          <>
            <button
              onClick={logout}
              className="btn btn-primary w-full"
            >
              Logout
            </button>
            <Link to="/match/setup" className="btn btn-secondary w-full">
              Start New Match
            </Link>
          </>
        ) : (
          <button
            onClick={() => login({ provider: 'google' })}
            className="btn btn-primary w-full"
          >
            Sign in with Google
          </button>
        )}
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>Already have a match?</p>
        <Link to="/history" className="text-primary hover:text-primary/80">
          View Match History
        </Link>
      </div>
    </div>
  );
};

export default Home;
