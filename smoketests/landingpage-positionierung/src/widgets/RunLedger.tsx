import { useEffect, useEffectEvent, useState } from "react";
import { LENS_LABELS, SAMPLE_CONTRIBUTIONS, SAMPLE_STEPS, consolidate } from "@/domain/ledger";
import { track } from "@/lib/track";
import { useAutoplay } from "@/lib/useAutoplay";
import { onSurfaceSelect } from "@/lib/surfaceBus";
import { Badge, Stepper } from "@/components/AppUi";
import { DemoPanels, WidgetWalkthrough } from "@/components/WidgetWalkthrough";
import "@/styles/ledger-demo.css";

const CONSOLIDATION = consolidate(SAMPLE_CONTRIBUTIONS);
const SUPPORT = CONSOLIDATION.bundles.find((b) => b.claimKey === "cutover-3-runs" && b.position === "stützt")!;
const COUNTER = SAMPLE_CONTRIBUTIONS.find((c) => c.claimKey === "cutover-3-runs" && c.position === "widerspricht")!;

/** Existing selection IDs stay stable for attribution and external selection. */
export const STEP_SHORT: Record<string, string> = {
  pack: "Basis", draft: "Beiträge", challenge: "Gegenbeleg",
  consolidate: "Konsens", decide: "Versionen", result: "Fortsetzen",
};
const STEPS = SAMPLE_STEPS.map((s) => ({ id: s.id, label: STEP_SHORT[s.id] }));
const WALKTHROUGH = [
  { value: "pack", label: "Alle starten auf derselben Wissensversion", duration: 4500 },
  { value: "draft", label: "Drei Beiträge können dieselbe Quelle haben", duration: 5000 },
  { value: "challenge", label: "Ein Gegenbeleg verändert die Arbeitsannahme", duration: 5500 },
  { value: "consolidate", label: "Konsens hält auch die Einschränkung fest", duration: 6000 },
  { value: "decide", label: "Ein neuer Stand macht ältere Grundlagen sichtbar", duration: 5500 },
  { value: "result", label: "Die nächste Aufgabe arbeitet damit weiter", duration: 5500 },
] as const;

function Source({ children }: { children: string }) {
  return <p className="ledger-source"><span aria-hidden="true">↳</span>{children}</p>;
}

function LedgerPanel({ id }: { id: string }) {
  if (id === "pack") return <>
    <div className="ledger-question"><span className="app-eyebrow">Auftrag · Hansa Wave 2</span><h4>Wie viele Probeläufe braucht die Migration?</h4><p>Angebotsentwurf auf Stand 07 · Cutover-Planung v3</p></div>
    <div className="ledger-agent-grid" aria-label="Gemeinsame Ausgangsbasis">
      {[['DL', 'Delivery'], ['DA', 'Daten'], ['KA', 'Kunde'], ['RK', 'Risiko']].map(([initials, name]) => <div key={name}><span className="ledger-avatar">{initials}</span><strong>{name}</strong><span className="ledger-small-version">Stand 07</span></div>)}
    </div>
    <p className="ledger-note">Dieselbe Version, jeweils der erlaubte Ausschnitt. Beiträge bleiben ihrem Kontext zugeordnet.</p>
  </>;
  if (id === "draft") return <>
    <div className="ledger-evidence"><Badge tone="warn">Annahme</Badge><h4>Drei Probeläufe reichen für Hansa Wave 2.</h4><Source>Abgeleitet aus Methodenhandbuch v3 · Kap. 4.2</Source></div>
    <div className="ledger-contributions">{SUPPORT.lenses.map((lens) => <div key={lens}><span>{LENS_LABELS[lens]}</span><span>gleiche Quelle</span></div>)}</div>
    <p className="ledger-equation"><strong>{SUPPORT.voices} Beiträge</strong><span aria-hidden="true">→</span><strong>{SUPPORT.sourceCount} Quelle</strong></p>
  </>;
  if (id === "challenge") return <>
    <div className="ledger-evidence ledger-evidence--muted"><span className="app-eyebrow">Bisherige Annahme</span><h4>Drei Probeläufe reichen.</h4><Source>Methodenhandbuch v3 · allgemeiner Standard</Source></div>
    <div className="ledger-evidence ledger-evidence--counter"><Badge tone="warn">Gegenbeleg · Risiko</Badge><h4>{COUNTER.text.replace(/^Gegenbeleg: /, "")}</h4><Source>{COUNTER.sourceLabel}</Source></div>
    <p className="ledger-note">Die Erfahrung bleibt neben der Annahme sichtbar und fließt in den Abgleich ein.</p>
  </>;
  if (id === "consolidate") return <>
    <div className="ledger-evidence ledger-evidence--accepted"><Badge tone="ok">Arbeitsstand 08 · vereinbart</Badge><h4>Mindestens drei planen. Einen weiteren nach Datenlage prüfen.</h4><Source>Methodenhandbuch v3 + Lessons Learned Hansa Wave 1</Source></div>
    <dl className="ledger-state-facts">
      <div><dt>Arbeitskonsens</dt><dd>Für diesen Auftrag vereinbart</dd></div>
      <div><dt>Offen bleibt</dt><dd>Wie viele Werke sind im Scope?</dd></div>
      <div><dt>Geschäftliche Freigabe</dt><dd><Badge tone="warn">noch offen</Badge></dd></div>
    </dl>
    <p className="ledger-note">Der Gegenbeleg bleibt am neuen Stand erhalten. Einigung allein belegt keine Richtigkeit.</p>
  </>;
  if (id === "decide") return <>
    <div className="ledger-task-row"><div><span className="app-eyebrow">Früherer Lauf</span><h4>Angebotsentwurf</h4><p>Verwendete Basis bleibt Stand 07.</p></div><Badge tone="warn">erneut prüfen</Badge></div>
    <div className="ledger-task-row ledger-task-row--current"><div><span className="app-eyebrow">Neuer Arbeitsstand</span><h4>Stand 08</h4><p>Der zusätzliche Probelauf ist jetzt zu prüfen.</p></div><Badge tone="ok">vereinbart</Badge></div>
    <p className="ledger-note">Vor der Ergebnisübernahme wird die ältere Grundlage abgeglichen. Die Historie wird nicht umgeschrieben.</p>
  </>;
  return <>
    <div className="ledger-evidence ledger-evidence--accepted"><span className="app-eyebrow">Nächste berechtigte Aufgabe</span><h4>Cutover-Plan erstellen.</h4><Badge tone="ok">startet auf Stand 08</Badge><p>Probeläufe, Einschränkung, Quellen und offene Frage stehen als gemeinsame Grundlage bereit.</p></div>
    <div className="ledger-reuse"><span className="app-eyebrow">Lernmuster vorgeschlagen</span><p>Zusätzliche Probeläufe früh anhand der Datenlage prüfen.</p><span>Vor breiterer Wiederverwendung werden Qualität, Zweck und Rechte geprüft.</span></div>
    <p className="ledger-note">Der Hansa-Kontext bleibt geschützt. Geschäftsfreigaben sind weiterhin eine menschliche Entscheidung.</p>
  </>;
}

/** Shared task knowledge, consensus and continuity shown as a staged example. */
export function RunLedger({ autoplay = false }: { autoplay?: boolean }) {
  const [openId, setOpenId] = useState<string>("pack");
  const demo = useAutoplay<string>(autoplay, WALKTHROUGH, setOpenId);
  const selectExternal = useEffectEvent((id: string) => {
    if (!SAMPLE_STEPS.some((s) => s.id === id)) return;
    demo.stop(); setOpenId(id);
  });
  useEffect(() => onSurfaceSelect(selectExternal), []);
  const select = (id: string) => {
    demo.stop(); setOpenId(id);
    track({ name: "widget_interact", variant: "ledger", action: `step:${id}` });
  };
  const index = SAMPLE_STEPS.findIndex((step) => step.id === openId);
  return <WidgetWalkthrough demo={demo} observeContent={false}>
    <div className="ledger-demo">
      <Stepper label="Wissensentwicklung" steps={STEPS} value={openId} onChange={select} />
      <ol className="ledger-version-trail" aria-label="Entwicklung des gemeinsamen Wissensstands">
        <li data-current={index < 3}><span>07</span><div>Ausgangsbasis<small>bleibt erhalten</small></div></li>
        <li data-current={index >= 3 && index < 5} data-pending={index < 3}><span>08</span><div>Arbeitskonsens<small>{index >= 3 ? "für diesen Auftrag" : "noch nicht vereinbart"}</small></div></li>
        <li data-current={index === 5} data-pending={index < 5}><span aria-hidden="true">↗</span><div>Folgeaufgabe<small>berechtigt fortsetzen</small></div></li>
      </ol>
      <div className="ledger-result">
        {/* Start only when the result, beyond controls and versions, is in view. */}
        <div ref={demo.focusRef} className="widget-demo-focus" aria-hidden="true" />
        <DemoPanels>
          {SAMPLE_STEPS.map((step) => <section key={step.id} data-entry={step.id} data-active={step.id === openId} aria-hidden={step.id !== openId} inert={step.id !== openId} className={step.id === openId ? "ledger-panel fade-swap" : "ledger-panel"} aria-label={step.label}><LedgerPanel id={step.id} /></section>)}
        </DemoPanels>
      </div>
    </div>
  </WidgetWalkthrough>;
}
