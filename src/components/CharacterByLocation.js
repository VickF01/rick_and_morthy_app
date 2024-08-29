import React, { useState, useEffect } from 'react';
import '../CharacterByLocation.css';

function CharactersByLocation() {
  const [locations, setLocations] = useState(JSON.parse(localStorage.getItem('locations')) || []);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    setLocations(JSON.parse(localStorage.getItem('locations')) || []);
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="location-list">
      <h1>Locations</h1>
      <ul className="location-list-items">
        {locations.map((location, index) => (
          <li key={index} className="location-item" onClick={() => handleLocationClick(location)}>
            {location.name}
          </li>
        ))}
      </ul>

      {selectedLocation && (
        <div className="characters-list">
          <h2>Characters in {selectedLocation.name}</h2>
          <ul>
            {selectedLocation.characters.map((character, index) => (
              <li key={index}>
                {character.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CharactersByLocation;
