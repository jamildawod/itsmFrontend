import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

export default function RequireAgent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/inbox" replace />;
  if (user.role !== "agent") return <Navigate to="/inbox" replace />;

  return <>{children}</>;
}
