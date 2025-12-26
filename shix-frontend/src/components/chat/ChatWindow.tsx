import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import ProposeApply from "../actions/ProposeApply";
import { askSHIX } from "../../services/backend";
import { useAuth } from "../../contexts/AuthContext";

export default function ChatWindow({
  ticket,
}: {
  ticket: { id: number; subject: string } | null;
}) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);

  async function handleSend(text: string) {
    setMessages((m) => [...m, { role: "user", text }]);
    const res = await askSHIX(text);
    setMessages((m) => [...m, { role: "ai", text: res.answer }]);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <div style={{ flex: 1, padding: "16px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.text} />
        ))}
      </div>

      {user?.role === "agent" && (
        <ProposeApply
          ticketId={ticket?.id}
          onPropose={() => alert("Proposal created")}
        />
      )}

      <ChatInput onSend={handleSend} />
    </div>
  );
}
