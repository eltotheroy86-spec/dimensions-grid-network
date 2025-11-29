type Message = {
  from: string;
  to: string;
  content: string;
  timestamp: string;
};

const messages: Message[] = [];

export function sendMessage(from: string, to: string, content: string) {
  const newMsg: Message = {
    from,
    to,
    content,
    timestamp: new Date().toISOString(),
  };

  messages.push(newMsg);
  console.log("📨 New message sent:", newMsg);

  // Optional: emit message.created event
  // emitDGEvent("message.created", newMsg); // uncomment if you add this event
}

export function getMessages(forUser: string): Message[] {
  return messages.filter(
    (msg) => msg.to === forUser || msg.from === forUser
  );
}
