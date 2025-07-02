import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/match-setup" element={<MatchSetup />} />
                <Route path="/live-scoring" element={<LiveScoring />} />
                <Route path="/scorecard" element={<Scorecard />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/match-history" element={<MatchHistory />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
