import React, { useState } from "react";
import "./Four.css";

function Four() {
 
  const [room, setRoom] = useState({
    roomName: "Living Room",
    temp: 24,
    isEcoMode: true
  });


  const { roomName, temp, isEcoMode } = room;

  const handleTempChange = (e) => {
    setRoom({
      ...room,   
      temp: Number(e.target.value)
    });
  };


  const toggleEco = () => {
    setRoom({
      ...room,
      isEcoMode: !isEcoMode
    });
  };

  
  const getStatus = () => {
    if (temp < 18) return "Cold ❄️";
    if (temp <= 26) return "Warm 😊";
    return "Hot 🔥";
  };

  return (
    <div className="container">
      <h2>{roomName}</h2>
      <p>Current Temperature: {temp}°C</p>

     
      <input
        type="range"
        min="10"
        max="40"
        value={temp}
        onChange={handleTempChange}
      />

      <div className="controls">
        <button onClick={toggleEco}>
          Eco Mode: {isEcoMode ? "ON" : "OFF"}
        </button>

        <span className="status">{getStatus()}</span>
      </div>

      
      {temp > 30 && (
        <p className="warning">Warning: High Temp!</p>
      )}
    </div>
  );
}

export default Four;