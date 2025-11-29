import { mockWallet } from "./wallet";

type CreditPack = {
  name: string;
  cost: number;
  dCredits: number;
  rewardPercent?: number;
};

export function purchaseCreditPack(pack: CreditPack) {
  if (mockWallet.fiatBalance < pack.cost) {
    console.log("Insufficient balance.");
    return;
  }

  mockWallet.fiatBalance -= pack.cost;
  mockWallet.dCreditBalance += pack.dCredits;

  if (pack.rewardPercent) {
    const rewardAmount = (pack.cost * pack.rewardPercent) / 100;
    mockWallet.rewards.push({
      type: "cashback",
      amount: rewardAmount,
      source: pack.name,
      date: new Date().toISOString(),
    });
    console.log(`Reward of ${rewardAmount} D$ added!`);
  }

  console.log(`${pack.name} purchased. Wallet updated.`);
}
