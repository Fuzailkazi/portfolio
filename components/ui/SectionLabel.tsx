/** Reference .slabel — mono 11px uppercase, 0.12em tracking. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[14px] font-mono text-[11px] tracking-[0.12em] text-text-2 uppercase">
      {children}
    </p>
  );
}
