import React, { useState } from "react";
import "./Five.css";

function Five() {
  
  const [ticket, setTicket] = useState({
    event: "React Developer Conference",
    row: "A",
    seatNumber: "",
    isVIP: false
  });

  
  const { event, row, seatNumber, isVIP } = ticket;

  
  const handleSeatChange = (e) => {
    setTicket({
      ...ticket,   
      seatNumber: e.target.value
    });
  };

  
  const toggleVIP = () => {
    setTicket({
      ...ticket,
      isVIP: !isVIP
    });
  };

  return (
    <div className="container">
      
      <div className="form">
        <input
          type="text"
          placeholder="Enter Seat Number"
          value={seatNumber}
          onChange={handleSeatChange}
        />

        <div className="vip-section">
          <input
            type="checkbox"
            checked={isVIP}
            onChange={toggleVIP}
          />
          <label>Make it a VIP Ticket</label>
        </div>
      </div>

      
      <div
        className={
          isVIP ? "ticket-summary golden-border" : "ticket-summary regular-border"
        }
      >
        <h3>{event}</h3>
        <p>
          Row: {row} | Seat: {seatNumber || "Not Selected"}
        </p>
      </div>
    </div>
  );
}

export default Five;