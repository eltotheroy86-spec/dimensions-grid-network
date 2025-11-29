type DGEvent =
  | "user.created"
  | "wallet.topup"
  | "datapack.purchased"
  | "cloudpack.purchased"
  | "transaction.completed"
  | "reward.earned"
  | "partner.session.started";

export async function emitDGEvent(event: DGEvent, payload: any) {
  const timestamp = new Date().toISOString();
  const emittedEvent = {
    id: crypto.randomUUID(),
    event,
    timestamp,
    payload,
  };

  console.log("🔔 Emitting DG Event:", emittedEvent);

  // 🔗 Optional webhook target (set your URL here)
  const webhookURL = "https://hooks.zapier.com/hooks/catch/your-webhook-id/";

  try {
    const res = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emittedEvent),
    });

    if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
    console.log(`✅ Webhook sent successfully to ${webhookURL}`);
  } catch (err) {
    console.error("❌ Webhook failed:", err);
  }
}
