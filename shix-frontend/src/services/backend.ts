// MOCKAD AI – backend kopplas senare

import { API_BASE_URL } from "../config";

export async function askSHIX(query: string) {
  const res = await fetch(`${API_BASE_URL}/api/rag`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error("RAG request failed");
  }

  return res.json();
}

export async function writeBackApply(payload: {
  ticket_id?: number;
  text: string;
}) {
  // TODO: Real backend endpoint for this is missing.
  // MOCK WRITE-BACK
  await new Promise((r) => setTimeout(r, 300));

  return {
    status: "APPLIED (mock)",
  };
}

export async function fetchTickets() {
  const res = await fetch(`${API_BASE_URL}/api/fs/tickets`, {
    headers: {
      "X-API-Token": import.meta.env.VITE_SHIX_API_TOKEN
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return res.json();
}
