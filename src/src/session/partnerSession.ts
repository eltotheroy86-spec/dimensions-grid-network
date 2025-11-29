import { emitDGEvent } from "../events/eventEmitter";

type PartnerSession = {
  userId: string;
  partnerId: string;
  startedAt: string;
  context?: string; // optional: location, device, or app type
};

const activeSessions: PartnerSession[] = [];

export function startPartnerSession(userId: string, partnerId: string, context?: string) {
  const session: PartnerSession = {
    userId,
    partnerId,
    startedAt: new Date().toISOString(),
    context,
  };

  activeSessions.push(session);

  emitDGEvent("partner.session.started", {
    ...session,
  });

  console.log("🔗 Partner session started:", session);
}

export function getActiveSessions(userId: string): PartnerSession[] {
  return activeSessions.filter((s) => s.userId === userId);
}
