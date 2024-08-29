// src/pages/Home.js

import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import CharactersByLocation from '../components/CharacterByLocation';
import '../Home.css';

function Home() {
  const [activePage, setActivePage] = useState('characters');

  const renderContent = () => {
    switch (activePage) {
      case 'characters':
        return <CharacterList />;
      case 'charactersByLocation':
        return <CharactersByLocation />;
      default:
        return <CharacterList />;
    }
  };

  return (
    <>
      <div className="content-container">
        {renderContent()}
      </div>

      <div className="bottom-navigation">
        <button
          className={`nav-button ${activePage === 'characters' ? 'active' : ''}`}
          onClick={() => setActivePage('characters')}
        >
          List
        </button>
        <button
          className={`nav-button ${activePage === 'charactersByLocation' ? 'active' : ''}`}
          onClick={() => setActivePage('charactersByLocation')}
        >
          List by Location
        </button>
      </div>
    </>
  );
}

export default Home;
