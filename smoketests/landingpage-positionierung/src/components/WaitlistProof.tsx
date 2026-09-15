/** 100 actual waitlist entries, explicitly confirmed by the owner on 13 September 2026. */
export function WaitlistProof({ dated = false }: { dated?: boolean }) {
  return (
    <p className="t-body-sm">
      Bereits <strong className="font-semibold tabular-nums">100</strong> Einträge auf der Warteliste.
      {dated && <time dateTime="2026-09-13" className="mt-1 block text-xs text-ink-mute">Stand: 13. September 2026</time>}
    </p>
  );
}
