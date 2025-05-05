import React, { useState } from "react";

const DoomGame = ()   => {
  const [visible, setVisible] = useState(false);

  const toggleGame = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button 
        onClick={toggleGame}
        style={{
          position: "fixed",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          padding: "8px 12px",
          backgroundColor: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {visible ? "Close Doom" : "Play Doom"}
      </button>

      {/* Game Iframe */}
      {visible && (
        <div
          style={{
            position: "fixed",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "700px",
            height: "400px",
            zIndex: 999,
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://js-dos.com/games/doom.exe.html"
            title="Doom Game"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: "none" }}
            
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DoomGame;
