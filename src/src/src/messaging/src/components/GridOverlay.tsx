import React, { useState } from "react";
import WalletDisplay from "./WalletDisplay";

export default function GridOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* 🔘 Launcher Button */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 16px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "50%",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 9999,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚡
      </button>

      {/* 🪟 Overlay Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            backgroundColor: "#fff",
            border: "2px solid #000",
            borderRadius: "16px",
            padding: "16px",
            zIndex: 9999,
            boxShadow: "0 0 12px rgba(0,0,0,0.4)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>🛰️ The Grid</h2>
          <WalletDisplay />
          {/* Add more modules like Messages or Packs later */}
        </div>
      )}
    </div>
  );
}
