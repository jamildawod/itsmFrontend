import { writeBackApply } from "../../services/backend";

export default function ProposeApply({
  onPropose,
  ticketId,
}: {
  onPropose: () => void;
  ticketId?: number;
}) {
  async function handleApply() {
    const res = await writeBackApply({
      ticket_id: ticketId,
      text: "Approved & applied by agent",
    });
    alert(res.status || "Applied");
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <button
        style={{ background: "#334155", color: "#fff", padding: "8px 12px" }}
        onClick={onPropose}
      >
        Propose
      </button>

      <button
        style={{ background: "#16a34a", color: "#fff", padding: "8px 12px" }}
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
}
