import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CharacterCard.css';

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card" onClick={handleCardClick}>
      <img src={character.image} alt={character.name} className="character-card-image" />
      <div className="character-card-info">
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}

export default CharacterCard;
