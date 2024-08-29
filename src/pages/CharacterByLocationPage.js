import React, { useEffect, useState } from 'react';

function CharacterByLocationPage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location')
      .then(response => response.json())
      .then(data => setLocations(data.results));
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      fetch(`https://rickandmortyapi.com/api/location/${selectedLocation}`)
        .then(response => response.json())
        .then(data => setCharacters(data.residents.map(url => url.split('/').pop())))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedLocation]);

  return (
    <div>
      <h1>Characters by Location</h1>
      <select onChange={e => setSelectedLocation(e.target.value)}>
        <option value="">Select a Location</option>
        {locations.map(location => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>

      {characters.length > 0 && (
        <ul>
          {characters.map((characterId) => (
            <li key={characterId}>
              <a href={`/character/${characterId}`}>{characterId}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharacterByLocationPage;
