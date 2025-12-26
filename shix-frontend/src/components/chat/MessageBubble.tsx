type Props = {
  role: "user" | "ai";
  text: string;
};

export default function MessageBubble({ role, text }: Props) {
  const isUser = role === "user";

  return (
    <div
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        background: isUser ? "#2563eb" : "#1f2937",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "12px",
        marginBottom: "8px",
        maxWidth: "70%",
        whiteSpace: "pre-wrap",
      }}
    >
      <strong>{isUser ? "You" : "SHIX"}:</strong>
      <div>{text}</div>
    </div>
  );
}
