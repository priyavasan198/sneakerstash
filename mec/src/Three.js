import React, { useState } from "react";
import "./Three.css";

function Three() {

  const [character, setCharacter] = useState({
    name: "Hero",
    stats: { health: 100, mana: 50 }
  });

 
  const { name, stats } = character;
  const { health, mana } = stats;

  const handleNameChange = (e) => {
    setCharacter({
      ...character, 
      name: e.target.value
    });
  };

  
  const takeDamage = () => {
    setCharacter({
      ...character,
      stats: {
        ...character.stats,
        health: health - 15
      }
    });
  };

  return (
    <div className="container">
      <h2>{name}</h2>

      <div className="status">
        <p
          style={{
            color: health < 20 ? "red" : "green"
          }}
        >
          Health: {health}
        </p>
        <p>Mana: {mana}</p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Rename your hero"
          value={name}
          onChange={handleNameChange}
        />

        <button onClick={takeDamage}>Take Damage</button>
      </div>
    </div>
  );
}

export default Three;