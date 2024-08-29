import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../CharacterDetail.css';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationName, setLocationName] = useState('');
  const [locations, setLocations] = useState(JSON.parse(localStorage.getItem('locations')) || []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching character details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleAssignLocation = () => {
    if (!locationName) {
      alert('Please enter a location name.');
      return;
    }
    if (locations.some(location => location.name === locationName)) {
      alert('Location name must be unique.');
      return;
    }

    const newLocation = {
      name: locationName,
      characters: [character]
    };

    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));

    alert('Character assigned to location successfully!');
    setLocationName('');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!character) {
    return <div className="error">Character not found</div>;
  }

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h1>{character.name}</h1>
        <hr></hr>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
        <p><strong>Location:</strong> {character.location.name}</p>
        <hr></hr>
        <h2>Assign Character to Location</h2>
        <input
          type="text"
          placeholder="Enter location name"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={handleAssignLocation}>Assign Location</button>
      </div>
    </div>
  );
}

export default CharacterDetail;
