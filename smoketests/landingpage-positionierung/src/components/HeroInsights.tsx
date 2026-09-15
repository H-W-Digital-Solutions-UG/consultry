const INSIGHTS: Record<string, string[]> = {
  corpus: [
    "Fristen mit Quelle.",
    "Angebote wiederverwenden.",
    "Quellen bleiben führend.",
  ],
  brand: [
    "Aktuell und belegt.",
    "Die richtige Fassung.",
    "Verwendung mit Freigabe.",
  ],
  ledger: [
    "Gemeinsame Ausgangsbasis.",
    "Widersprüche bleiben sichtbar.",
    "Wissen weitertragen.",
  ],
};

/** Normal HTML: scroll reveals the arguments together; assistive readers need no animation. */
export function HeroInsights({ variant }: { variant: string }) {
  const insights = INSIGHTS[variant];
  if (!insights) return null;
  return (
    <ul className="hero-insights" aria-label="Was im Arbeitskern steckt">
      {insights.map((insight, index) => (
        <li key={insight} className="hero-insight">
          <span className="hero-insight__index" aria-hidden="true">0{index + 1}</span>
          <h2>{insight}</h2>
        </li>
      ))}
    </ul>
  );
}
