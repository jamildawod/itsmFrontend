import { useState } from "react";
import TicketList from "../components/tickets/TicketList";
import ChatWindow from "../components/chat/ChatWindow";

export default function InboxPage() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <TicketList onSelect={setSelectedTicket} />
      <ChatWindow ticket={selectedTicket} />
    </div>
  );
}
