const PATHS = [
  { icon: "tenant", name: "Im Tenant des Kunden", text: "Azure oder AWS eurer Beratung, Anmeldung über Entra ID, Rechte aus M365." },
  { icon: "eu", name: "EU, im Vertrag des Kunden", text: "Offene Modellgewichte auf EU-GPU im kundeneigenen Konto; Consultry hostet nichts." },
  { icon: "onprem", name: "Dediziert bis on-premise", text: "Eigene Instanz je Kunde, auf Nachfrage." },
];

/** Small generated brand objects (GPT Image 2.5, transparent, AVIF/WebP ≤ 6 KB), lazy because they sit below the fold. */
function PathIcon({ icon }: { icon: string }) {
  const base = `/hero/path-${icon}`;
  return (
    <picture aria-hidden="true" className="-mt-2 -ml-2 block size-20">
      <source type="image/avif" srcSet={`${base}-160.avif 160w, ${base}-320.avif 320w`} sizes="80px" />
      <img src={`${base}-160.webp`} srcSet={`${base}-160.webp 160w, ${base}-320.webp 320w`} sizes="80px" alt="" width={160} height={160} loading="lazy" decoding="async" className="size-20" />
    </picture>
  );
}

const FOOT = "Bestehende Microsoft- oder AWS-AVV bleiben nutzbar; eigene Schlüssel (BYOK) auf dem EU-Weg.";

/** Three operating paths behind one model gateway: three tonal cards on the dark surface. */
export function DataPaths() {
  return (
    <>
      <ul className="grid gap-4 md:grid-cols-3">
        {PATHS.map((p) => (
          <li key={p.name} className="card-dark p-6">
            <PathIcon icon={p.icon} />
            <h3 className="t-heading mt-2">{p.name}</h3>
            <p className="t-body mt-2 text-on-dark-soft">{p.text}</p>
          </li>
        ))}
      </ul>
      <p className="t-body-sm mt-8 text-on-dark-mute">{FOOT}</p>
    </>
  );
}
