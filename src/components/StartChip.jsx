export default function StartChip({ label, value }) {
  return (
    <div className="rounded-lg bg-card/80 px-3 py-2 text-sm">
      <div className="text-white/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
