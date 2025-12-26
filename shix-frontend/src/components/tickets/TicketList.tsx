import { useState, useEffect } from "react";
import { fetchTickets } from "../../services/backend";

type Ticket = {
  id: number;
  subject: string;
  status: string;
};

export default function TicketList({
  onSelect,
}: {
  onSelect: (ticket: Ticket) => void;
}) {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetchTickets()
      .then(setTickets)
      .catch((err) => {
        console.error(err);
        // TODO: bättre felhantering
      });
  }, []);

  return (
    <div
      style={{
        width: "300px",
        borderRight: "1px solid #e5e7eb",
        padding: "12px",
      }}
    >
      <h3>Inbox</h3>

      {tickets.map((t) => (
        <div
          key={t.id}
          onClick={() => onSelect(t)}
          style={{
            padding: "10px",
            marginBottom: "6px",
            cursor: "pointer",
            background: "#f8fafc",
          }}
        >
          <strong>#{t.id}</strong>
          <div>{t.subject}</div>
          <small>Status: {t.status}</small>
        </div>
      ))}
    </div>
  );
}
