import React from "react";

const apps = [
  { name: "Wallet", icon: "💰", action: () => alert("Open Wallet") },
  { name: "Messages", icon: "💬", action: () => alert("Open Messages") },
  { name: "Signal Router", icon: "📡", action: () => alert("Open Signal Router") },
  { name: "Shopping", icon: "🛍️", action: () => alert("Open Dimensions Shopping") },
  { name: "D-Cloud", icon: "☁️", action: () => alert("Open D-Cloud Storage") },
  { name: "Sports", icon: "⚽", action: () => alert("Open Dimensions Sports") },
];

export default function AppLauncherPanel() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>📦 Apps & Modules</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
        {apps.map((app, i) => (
          <button
            key={i}
            onClick={app.action}
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              backgroundColor: "#f1f1f1",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div>{app.icon}</div>
            <div style={{ fontSize: "0.8rem" }}>{app.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
