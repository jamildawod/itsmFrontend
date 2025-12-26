import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import InboxPage from "./routes/InboxPage";
import AuditPage from "./routes/AuditPage";
import DashboardPage from "./routes/DashboardPage";
import RequireAgent from "./routes/guards/RequireAgent";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/inbox" replace />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route
            path="/audit"
            element={
              <RequireAgent>
                <AuditPage />
              </RequireAgent>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  );
}
