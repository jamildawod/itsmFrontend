export default function SLAIndicator({ minutesLeft }: { minutesLeft: number }) {
  const color =
    minutesLeft > 120 ? "#16a34a" : minutesLeft > 30 ? "#f59e0b" : "#dc2626";

  return (
    <span style={{ color, fontWeight: 600 }}>
      SLA: {minutesLeft} min
    </span>
  );
}
