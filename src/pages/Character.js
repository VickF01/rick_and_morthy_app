import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Characters List</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default Characters;
