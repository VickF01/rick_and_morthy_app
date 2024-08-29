import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterList from './components/CharacterList';
import CharactersByLocation from './components/CharacterByLocation';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters-by-location" element={<CharactersByLocation />} />
        <Route path="/character/:id" element={<CharacterDetail />} /> {/* Route baru untuk Detail Character */}
      </Routes>
    </Router>
  );
}

export default App;
