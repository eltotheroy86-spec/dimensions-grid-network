type Wallet = {
  userId: string;
  fiatBalance: number;
  dCreditBalance: number;
  rewards: Reward[];
};

type Reward = {
  type: "cashback" | "signup-bonus" | "promo";
  amount: number;
  source: string;
  date: string;
};

// Example wallet instance
export const mockWallet: Wallet = {
  userId: "DG-61-2891072",
  fiatBalance: 45.00,
  dCreditBalance: 120.00,
  rewards: [
    { type: "signup-bonus", amount: 100, source: "Onboarding", date: "2025-11-29" },
    { type: "cashback", amount: 20, source: "Data Pack Purchase", date: "2025-11-30" }
  ]
};
