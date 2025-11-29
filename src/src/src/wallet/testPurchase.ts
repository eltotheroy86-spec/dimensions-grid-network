import { purchaseCreditPack } from "./processPurchase";
import { mockWallet } from "./wallet";

const packs = [
  {
    name: "Starter Pack",
    cost: 10,
    dCredits: 10,
    rewardPercent: 10,
  },
  {
    name: "Power Pack",
    cost: 25,
    dCredits: 30,
    rewardPercent: 15,
  },
];

// Simulate a purchase
console.log("Before purchase:", mockWallet);
purchaseCreditPack(packs[1]);
console.log("After purchase:", mockWallet);
