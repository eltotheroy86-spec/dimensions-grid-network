import React from "react";
import { mockWallet } from "../wallet/wallet";

export default function WalletDisplay() {
  return (
    <div style={{ padding: "1rem", border: "1px solid #333", borderRadius: "8px" }}>
      <h2>Wallet Overview</h2>
      <p><strong>User ID:</strong> {mockWallet.userId}</p>
      <p><strong>Fiat Balance:</strong> ${mockWallet.fiatBalance.toFixed(2)}</p>
      <p><strong>D$ Balance:</strong> {mockWallet.dCreditBalance.toFixed(2)} D$</p>

      <h3>Rewards</h3>
      <ul>
        {mockWallet.rewards.map((reward, idx) => (
          <li key={idx}>
            {reward.date.slice(0, 10)} — {reward.amount} D$ from {reward.source} ({reward.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
