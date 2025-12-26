export async function askSHIX(query: string) {
  // MOCKAD AI – backend kopplas senare
  await new Promise((r) => setTimeout(r, 300));

  return {
    answer: `🔍 Analysis complete

Proposed resolution:
- Restart VPN service
- Clear DNS cache
- Re-authenticate session

Confidence: 92%`,
  };
}

export async function writeBackApply(payload: {
  ticket_id?: number;
  text: string;
}) {
  // MOCK WRITE-BACK
  await new Promise((r) => setTimeout(r, 300));

  return {
    status: "APPLIED (mock)",
  };
}
