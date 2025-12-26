import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RoleProvider } from "./contexts/RoleContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RoleProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RoleProvider>
    </AuthProvider>
  </React.StrictMode>
);
