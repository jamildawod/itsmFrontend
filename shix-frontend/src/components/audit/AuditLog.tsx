type AuditEvent = {
  ts: string;
  actor: string;
  action: string;
  target: string;
};

const MOCK_AUDIT: AuditEvent[] = [
  { ts: "2025-12-26 14:40", actor: "agent@acme.se", action: "PROPOSE", target: "Ticket #1021" },
  { ts: "2025-12-26 14:42", actor: "agent@acme.se", action: "APPLY", target: "Ticket #1021" },
];

export default function AuditLog() {
  return (
    <div style={{ padding: "12px" }}>
      <h3>Audit Log</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th align="left">Time</th>
            <th align="left">Actor</th>
            <th align="left">Action</th>
            <th align="left">Target</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_AUDIT.map((e, i) => (
            <tr key={i}>
              <td>{e.ts}</td>
              <td>{e.actor}</td>
              <td>{e.action}</td>
              <td>{e.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
