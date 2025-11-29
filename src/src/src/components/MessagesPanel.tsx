import React, { useState } from "react";
import { sendMessage, getMessages } from "../messaging/messages";

export default function MessagesPanel() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => getMessages("DG-61-2891072"));

  function handleSend() {
    sendMessage("DG-61-2891072", "system", input);
    setInput("");
    setMessages(getMessages("DG-61-2891072"));
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>📬 Messages</h3>
      <div style={{ maxHeight: "150px", overflowY: "auto", marginBottom: "0.5rem" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: "6px", fontSize: "0.9rem" }}>
            <strong>{msg.from}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "100%", padding: "6px", fontSize: "0.9rem" }}
      />
      <button
        onClick={handleSend}
        style={{
          width: "100%",
          marginTop: "6px",
          padding: "8px",
          fontSize: "0.9rem",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}
