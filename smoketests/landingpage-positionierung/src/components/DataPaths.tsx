import { PATHS_SECTION } from "@/content/shared";

const PATHS = [
  { icon: "tenant", label: "Im bestehenden Tenant", name: "Azure oder AWS", text: "In der Cloud eurer Beratung. Anmeldung über Entra ID, Rechte aus M365." },
  { icon: "eu", label: "Offene Modellgewichte", name: "EU-GPU im eigenen Konto", text: "Im Vertrag eurer Beratung. Consultry hostet nichts." },
  { icon: "onprem", label: "Eigene Instanz", name: "Dediziert bis on-premise", text: "Eine eigene Instanz je Kunde — auf Nachfrage." },
];

/** Small generated brand objects (GPT Image 2.5, transparent, AVIF/WebP ≤ 6 KB), lazy because they sit below the fold. */
function PathIcon({ icon }: { icon: string }) {
  const base = `/hero/path-${icon}`;
  return (
    <picture aria-hidden="true" className="data-path-art">
      <source type="image/avif" srcSet={`${base}-160.avif 160w, ${base}-320.avif 320w`} sizes="(min-width: 640px) 104px, 76px" />
      <img src={`${base}-160.webp`} srcSet={`${base}-160.webp 160w, ${base}-320.webp 320w`} sizes="(min-width: 640px) 104px, 76px" alt="" width={160} height={160} loading="lazy" decoding="async" />
    </picture>
  );
}

/** Equal alternatives within the customer's infrastructure, not sequential steps. */
export function DataPaths() {
  return (
    <div className="data-paths-layout">
      <header className="data-paths-intro">
        <p className="data-paths-kicker"><span aria-hidden="true" />Betrieb & Datenhoheit</p>
        <h2>{PATHS_SECTION.title}</h2>
        <p className="data-paths-lede">{PATHS_SECTION.lede}</p>
      </header>

      <div className="data-paths-options">
        <div className="data-paths-heading">
          <p>Drei Betriebswege</p>
          <span>Ein Arbeitskern</span>
        </div>
        <ul aria-label="Betriebsalternativen" className="data-paths-list">
          {PATHS.map((p) => (
            <li key={p.icon} className="data-path">
              <PathIcon icon={p.icon} />
              <div className="data-path-copy">
                <p className="data-path-label">{p.label}</p>
                <h3>{p.name}</h3>
                <p className="data-path-description">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="data-paths-assurance">
        <p><span>Verträge</span>Bestehende Microsoft- oder AWS-AVV bleiben nutzbar.</p>
        <p><span>Schlüssel</span>Eigene Schlüssel (BYOK) auf dem EU-Weg.</p>
      </div>
    </div>
  );
}
