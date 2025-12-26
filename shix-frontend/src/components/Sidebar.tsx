import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: "block",
    padding: "8px 0",
    color: isActive ? "#38bdf8" : "#e5e7eb",
    textDecoration: "none",
  });

  return (
    <div
      style={{
        width: "220px",
        background: "#020617",
        color: "#e5e7eb",
        padding: "20px",
      }}
    >
      <h2>SHIX™</h2>
      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        AI IT Support Assistant
      </p>

      <hr />

      <nav>
        <NavLink to="/dashboard" style={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/inbox" style={linkStyle}>
          Inbox
        </NavLink>
        <NavLink to="/audit" style={linkStyle}>
          Audit Log
        </NavLink>
      </nav>
    </div>
  );
}
