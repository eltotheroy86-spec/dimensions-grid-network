import React, { useState } from "react";
import { getActiveSessions, startPartnerSession } from "../session/partnerSession";

export default function PartnerSessionsPanel() {
  const userId = "DG-61-2891072"; // placeholder user
  const [sessions, setSessions] = useState(() => getActiveSessions(userId));
  const [partnerInput, setPartnerInput] = useState("");

  function handleStartSession() {
    if (!partnerInput) return;
    startPartnerSession(userId, partnerInput);
    setSessions(getActiveSessions(userId));
    setPartnerInput("");
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>🧭 Active Sessions</h3>
      <input
        value={partnerInput}
        onChange={(e) => setPartnerInput(e.target.value)}
        placeholder="Enter partner ID (app/shop/venue)"
        style={{ width: "100%", padding: "6px", fontSize: "0.9rem" }}
      />
      <button
        onClick={handleStartSession}
        style={{
          width: "100%",
          marginTop: "6px",
          padding: "8px",
          fontSize: "0.9rem",
          backgroundColor: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Start Session
      </button>

      {sessions.length > 0 && (
        <ul style={{ marginTop: "10px", fontSize: "0.85rem" }}>
          {sessions.map((s, i) => (
            <li key={i}>
              {s.startedAt.slice(0, 19)} — <strong>{s.partnerId}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
