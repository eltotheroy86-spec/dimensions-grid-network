import { emitDGEvent } from "../events/eventEmitter";

export function triggerSecurityAlert(userId: string, reason: string) {
  const alert = {
    userId,
    reason,
    timestamp: new Date().toISOString(),
  };

  console.warn("🚨 Security Alert:", alert);
  emitDGEvent("security.alert", alert);
}

export function startVerification(userId: string, method: "video" | "face" | "pin") {
  const verification = {
    userId,
    method,
    startedAt: new Date().toISOString(),
  };

  console.log("🛡️ Verification Started:", verification);
  emitDGEvent("verification.started", verification);
}
