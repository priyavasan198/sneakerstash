import React, { useState } from "react";
import "./One.css";

function One() {

  const [user, setUser] = useState({
    name: "Lokesh",
    email: "lokesh@test.com",
    settings: { theme: "light", isPublic: true }
  });

  const { name, settings } = user;
  const { theme, isPublic } = settings;

  function changeName(e) {
    setUser({
      ...user,
      name: e.target.value
    });
  }

  function changeTheme() {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        theme: user.settings.theme === "light" ? "dark" : "light"
      }
    });
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: theme === "dark" ? "gray" : "white"
      }}
    >
      <div className="card">
        <h1>Welcome, {name}!</h1>

        {isPublic && <p>Public Profile</p>}

        <input 
          type="text" 
          value={name} 
          onChange={changeName} 
        />
        <br />

        <button onClick={changeTheme}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}

export default One;