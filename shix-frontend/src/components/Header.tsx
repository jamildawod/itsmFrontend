import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user, loginAsAgent, loginAsUser, logout } = useAuth();

  return (
    <div
      style={{
        height: "50px",
        background: "#0f172a",
        color: "#fff",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>SHIX ITSM</span>

      <div style={{ display: "flex", gap: "8px" }}>
        {!user && (
          <>
            <button onClick={loginAsUser}>Login User</button>
            <button onClick={loginAsAgent}>Login Agent</button>
          </>
        )}
        {user && (
          <>
            <span>{user.email} ({user.role})</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
