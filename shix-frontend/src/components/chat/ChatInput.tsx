import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  return (
    <div style={{ display: "flex", padding: "10px", gap: "8px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask SHIX…"
        style={{ flex: 1, padding: "8px" }}
      />
      <button
        onClick={() => {
          if (!text.trim()) return;
          onSend(text);
          setText("");
        }}
      >
        Send
      </button>
    </div>
  );
}
