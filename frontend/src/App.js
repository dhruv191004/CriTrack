import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/layout/Navigation';

// Pages
import Home from './pages/Home';
import MatchSetup from './pages/MatchSetup';
import LiveScoring from './pages/LiveScoring';
import Scorecard from './pages/Scorecard';
import Teams from './pages/Teams';
import MatchHistory from './pages/MatchHistory';
import Settings from './pages/Settings';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AuthProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-gray-100">
              <Navigation />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Outlet />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'match-setup',
          element: <MatchSetup />
        },
        {
          path: 'live-scoring',
          element: <LiveScoring />
        },
        {
          path: 'scorecard',
          element: <Scorecard />
        },
        {
          path: 'teams',
          element: <Teams />
        },
        {
          path: 'match-history',
          element: <MatchHistory />
        },
        {
          path: 'settings',
          element: <Settings />
        }
      ]
    }
  ], {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true
    },
  });

  return <RouterProvider router={router} />;
}

export default App;
