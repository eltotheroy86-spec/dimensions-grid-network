import React, { useState } from "react";

function encodeSignal(raw: string): string {
  return btoa(raw); // simple base64 for mock signal encoding
}

function decodeSignal(encoded: string): string {
  try {
    return atob(encoded);
  } catch {
    return "Invalid signal.";
  }
}

export default function SignalRouterPanel() {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  function handleEncode() {
    const signal = encodeSignal(input);
    setEncoded(signal);
    setDecoded(decodeSignal(signal));
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>🛰️ Signal Router</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type raw signal (message or code)..."
        style={{ width: "100%", padding: "6px", fontSize: "0.9rem" }}
      />
      <button
        onClick={handleEncode}
        style={{
          width: "100%",
          marginTop: "6px",
          padding: "8px",
          fontSize: "0.9rem",
          backgroundColor: "#004",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Encode & Route
      </button>

      {encoded && (
        <div style={{ marginTop: "10px", fontSize: "0.85rem" }}>
          <p><strong>Encoded:</strong> {encoded}</p>
          <p><strong>Decoded:</strong> {decoded}</p>
        </div>
      )}
    </div>
  );
}
