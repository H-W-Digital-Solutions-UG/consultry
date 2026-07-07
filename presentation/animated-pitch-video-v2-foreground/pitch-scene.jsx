// Consultry — animated pitch video (83.65s, 1920×1080)
// Gesynct auf Take 2 (voiceover.wav, 70.9s) — das Skript spricht jetzt auch
// Positionierung + Business Case selbst; keine eingefügte Stille mehr.
// Hook-Footage nur im Hintergrund — alle Folgeszenen laufen auf der dunklen Brand-Fläche.
// Arc: Hook → Problem → Antwort (Logo-Bloom) → Signal+Team-Karten →
// Vertrieb/Angebot → Wissen → Business Case → CTA. Logo bleibt persistent.
//
// Gemessene VO-Marken (Silence-Analyse, Take 2):
//   0.28 Senior-Beratung wird teurer.      2.62 Faktura wird knapper.
//   5.24 Das Problem?                      6.78 Excel … verstreut … endlose Tools. (–13.82)
//  14.52 Die Antwort:                     15.66 Consultry.
//  17.10 Consultry kennt Ihr Geschäft, Ihre Marke, Ihr Wissen und Ihre Projekte.
//  22.00 Signal erkennt Opportunities, Markttrends und Ausschreibungen.
//  26.04 Team kennt Projekte und Auslastung … Arbeits-Synergien.  (–31.84)
//  32.70 Ihr Vertrieb fragt Consultry … für die richtigen Kunden. (–38.34)
//  39.28 Ihr Wissen ist da, wenn es zählt.
//  41.72 So haben Sie immer die richtige Antwort parat … Risiken im Blick. (–44.86)
//  45.76 Positionierung: Kein AI-Chatbot … Betriebssystem …      (moved before Signal)
//  54.58 Business Case: gesparter Beratertag … Marge … Quellen   (–65.64)
//  66.46 Weniger Tools.   67.50 Mehr Effizienz.   68.62 Mehr Beratung.
//  69.90 Komm auf die Warteliste. (Ende Sprache 70.56)
const { Stage, useTime, useTimeline, Easing, clamp } = window;

// ── Brand tokens ────────────────────────────────────────────────────────────
const BG          = '#171311';
const CARD        = '#262220';
const CARD_HI     = '#322d29';
const TEXT        = '#ede8e2';
const MUTED       = 'rgba(250,250,249,0.66)';
const FAINT       = 'rgba(250,250,249,0.40)';
const WARM        = '#f0a85e';
const BORDER      = 'rgba(255,255,255,0.08)';
const GRAD        = 'linear-gradient(27deg, #e8913a 8%, #e8655a 78%)';
const GRAD_FULL   = 'linear-gradient(27deg, #e8913a 8%, #e8655a 42%, #9b59b6 92%)'; // footer hairline only
const GRAD_WARM   = 'linear-gradient(90deg, #f0a85e 0%, #e8655a 70%)';
const MONO        = '"JetBrains Mono", ui-monospace, monospace';
const INTER      = 'Inter, system-ui, sans-serif';
const DISPLAY     = '"Satoshi", Inter, system-ui, sans-serif'; // logo wordmark face

const LOGO  = 'assets/consultry-v3-user.svg'; // mark + Satoshi wordmark + tagline
const LOGO_AR = 0.2568;                       // tight-cropped aspect (h/w)
const LOGO_BLOOM_W = 900;
const LOGO_BLOOM_CY = 438;
const LOGO_BLOOM_MARK_SIZE = LOGO_BLOOM_W * LOGO_AR;
const LOGO_BLOOM_MARK_CX = 960 - LOGO_BLOOM_W / 2 + LOGO_BLOOM_MARK_SIZE / 2 + 11;
const LOGO_TOP_LEFT_PAD_X = 96;
const LOGO_TOP_LEFT_PAD_Y = 76;
const LOGO_MARK_SIZE = 126;
const LOGO_MARK_CX = LOGO_TOP_LEFT_PAD_X + LOGO_MARK_SIZE / 2;
const LOGO_MARK_CY = LOGO_TOP_LEFT_PAD_Y + LOGO_MARK_SIZE / 2;
const LOGO_FINAL_H = 220;
const LOGO_FINAL_CX = 960;
const LOGO_FINAL_CY = 306;
const LOGO_FINAL_W = LOGO_FINAL_H / LOGO_AR;
const LOGO_FINAL_LEFT = LOGO_FINAL_CX - LOGO_FINAL_W / 2;
const LOGO_FINAL_MARK_CX = LOGO_FINAL_LEFT + LOGO_FINAL_H / 2;
const TOP_LOGO_CY = 176;
const TOP_LOGO_W = 560;
const TOP_LOGO_BOTTOM = TOP_LOGO_CY + (TOP_LOGO_W * LOGO_AR) / 2;
const TOP_LOGO_SAFE_GAP = 64;
const TOP_LOGO_CONTENT_Y = Math.ceil(TOP_LOGO_BOTTOM + TOP_LOGO_SAFE_GAP);
const TOP_LOGO_CENTERED_STACK_PAD = 190;
const TOP_LOGO_CHART_STACK_PAD = 230;
const HOOK_BG_FRAME_COUNT = 129;   // gen-hook-bg v2.2 "pressure builds" (M01, head-trimmed 0.65s → 5.375s)
const HOOK_BG_FPS = 24;
const HOOK_BG = (idx) => `uploads/gen-hook-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const SOL1_FRAME_COUNT = 169; // M04 reveal (7.04s) — Solution beat 1
const SOL1_BG = (idx) => `uploads/gen-solution1-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const SOL_SWITCH_T = 7.0;     // Beat-Wechsel M04→M05 (Szenen-lokal, +2s synchronisiert)
const WORK_SEQUENCE_SHIFT = 7.15; // starts Consultant Work after the finished-offer bridge + 2s hold
const OFFER_STAGE_START = 4.05 + WORK_SEQUENCE_SHIFT; // overlay timing remains locked within Consultant Work
const OFFER_BG_START = 4.25 + WORK_SEQUENCE_SHIFT; // JSX work-stage starts after the bridge hold
const OFFER_OVERLAY_START = 7.25 + WORK_SEQUENCE_SHIFT; // work document overlays follow the delayed stage
const WORK_PROMPT_START = 9.60 + WORK_SEQUENCE_SHIFT;
const WORK_DETAIL_START = 17.30 + WORK_SEQUENCE_SHIFT;
const WORK_DETAIL_END = 20.40 + WORK_SEQUENCE_SHIFT;
const WISSEN_DETAIL_START = 10.80;
const WISSEN_DETAIL_END = 15.00;
const OFFER_VISUAL_END = WORK_DETAIL_END; // hold Consultant Work context through prompt + payoff
const OFFER_STAGE_SCALE = 0.96;
const OFFER_STAGE_Y = 0;
const WISSEN_BG_FRAME_COUNT = 145; // logo/pipeline follow-up clip for Wissen foreground overlays
const WISSEN_BG_PLAY_DUR = 6.04;
const WISSEN_BG = (idx) => `uploads/gen-wissen-logo-pipeline-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const POSG_FRAME_COUNT = 193; // M08 Positioning-Pipeline (8.04s) — Finanz Phase A (abs ~46–54s)
const POSG_BG = (idx) => `uploads/gen-positioning-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
// Pipeline-Karten im M08-Video (gemessen, y 736–920): Label-Patches decken den Video-Text ab
// ('Angelot'/'Abechünng' im Clip → JSX rendert die korrekten Wörter darüber)
const POSG_CARDS = [
  { x: 141,  w: 257, word: 'Signal',     tIn: 3.4 },
  { x: 490,  w: 254, word: 'Angebot',    tIn: 4.0 },
  { x: 800,  w: 291, word: 'Staffing',   tIn: 4.6 },
  { x: 1169, w: 270, word: 'Wissen',     tIn: 5.2 },
  { x: 1525, w: 258, word: 'Abrechnung', tIn: 5.8 },
];
const VO_SRC = 'voiceover.wav';
const VO_DUR = 71.68; // Seed Audio 1.0 take vom 2026-07-04, natürlicher Export ohne Stretch
const DOWNSTREAM_SCENE_DELAY = 6.00; // slower Signal/Team pacing; downstream scenes move back together
const SCENE_SOLUTION_START = 0.00;
const SCENE_SOLUTION_END = 32.55;
const SCENE_VERTRIEB_START = 32.05 + DOWNSTREAM_SCENE_DELAY;
const SCENE_VERTRIEB_END = 53.65 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_WISSEN_START = 53.15 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_WISSEN_END = 70.90 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_FINANZ_START = 70.40 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_FINANZ_END = 93.90 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_CTA_START = 93.40 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const SCENE_CTA_END = 102.40 + DOWNSTREAM_SCENE_DELAY + WORK_SEQUENCE_SHIFT;
const DUR = SCENE_CTA_END;
const VO_MUTED = true; // tuning mode: preview/render composition plays without VO
const MUSIC_MUTED = true; // tuning mode: preview soundtrack is muted
let TWEAKS = {}; // live tweak props (voVolume) from the host
const MOTION_PACE = 1.18;
const FADE_PACE = 1.12;

const gradText = (g = GRAD) => ({
  background: g, WebkitBackgroundClip: 'text', backgroundClip: 'text',
  WebkitTextFillColor: 'transparent', color: 'transparent',
});

const glassDark = (radius = 28) => ({
  borderRadius: radius,
  background: 'linear-gradient(135deg, rgba(31,25,22,0.74) 0%, rgba(31,25,22,0.48) 100%)',
  border: '1px solid rgba(255,255,255,0.16)',
  boxShadow: '0 26px 78px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.14)',
  backdropFilter: 'blur(20px) saturate(1.14)',
  WebkitBackdropFilter: 'blur(20px) saturate(1.14)',
});

const glassSoft = (radius = 28) => ({
  borderRadius: radius,
  background: 'linear-gradient(135deg, rgba(31,25,22,0.44) 0%, rgba(31,25,22,0.22) 100%)',
  border: '1px solid rgba(255,255,255,0.11)',
  boxShadow: '0 22px 62px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)',
  backdropFilter: 'blur(18px) saturate(1.08)',
  WebkitBackdropFilter: 'blur(18px) saturate(1.08)',
});

const glassLight = (radius = 22) => ({
  borderRadius: radius,
  background: 'linear-gradient(135deg, rgba(250,246,240,0.72) 0%, rgba(237,232,226,0.52) 100%)',
  border: '1px solid rgba(30,27,24,0.12)',
  boxShadow: '0 12px 34px rgba(30,27,24,0.16), inset 0 1px 0 rgba(255,255,255,0.42)',
  backdropFilter: 'blur(14px) saturate(1.08)',
  WebkitBackdropFilter: 'blur(14px) saturate(1.08)',
});

// ramp: 0→1 across [a,a+f], hold, 1→0 across [b-f,b]; 0 outside [a,b]
function band(local, a, b, f = 0.45) {
  if (local <= a || local >= b) return 0;
  f = Math.min(f * FADE_PACE, Math.max(0.05, (b - a) * 0.48));
  let o = 1;
  if (local < a + f) o = Easing.easeOutCubic((local - a) / f);
  if (local > b - f) o = Math.min(o, 1 - Easing.easeInCubic((local - (b - f)) / f));
  return clamp(o, 0, 1);
}
// one-shot rise: 0→1 across [a,a+d]
const rise = (local, a, d = 0.6) => Easing.easeOutCubic(clamp((local - a) / (d * MOTION_PACE), 0, 1));
const mix = (a, b, p) => a + (b - a) * p;

// ── Scene shell: whole-scene crossfade, child gets (local, dur) ──────────────
function Scene({ start, end, fade = 0.5, children }) {
  const t = useTime();
  if (t < start - 0.0001 || t > end + 0.0001) return null;
  const local = t - start, dur = end - start;
  let op = 1;
  if (local < fade) op = Easing.easeOutCubic(clamp(local / fade, 0, 1));
  else if (local > dur - fade) op = 1 - Easing.easeInCubic(clamp((local - (dur - fade)) / fade, 0, 1));
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op }}>
      {typeof children === 'function' ? children(local, dur) : children}
    </div>
  );
}

// ── Voiceover: die Aufnahme, synchron zu Play/Pause/Scrubbing ────────────────
function Voiceover() {
  const { time, playing } = useTimeline();
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(0);
  const vol = VO_MUTED ? 0 : clamp(TWEAKS.voVolume ?? 1, 0, 1);
  React.useEffect(() => {
    const a = ref.current;
    if (!a || a.readyState < 1) return;
    a.volume = vol;
    const target = clamp(time, 0, VO_DUR - 0.05);
    const inRange = time < VO_DUR - 0.1;
    if (playing && inRange) {
      if (a.paused) {
        if (Math.abs(a.currentTime - target) > 0.2) a.currentTime = target;
        a.play().catch(() => {});
      } else if (Math.abs(a.currentTime - target) > 0.35) {
        a.currentTime = target;
      }
    } else {
      if (!a.paused) a.pause();
      if (Math.abs(a.currentTime - target) > 0.05) a.currentTime = target;
    }
  }, [time, playing, vol, ready]);
  return (
    <video ref={ref} src={VO_SRC} playsInline preload="auto"
      onLoadedData={() => setReady(r => r + 1)}
      data-om-exportable-video-play-start={0}
      data-om-exportable-video-play-end={VO_DUR}
      data-om-exportable-video-play-speed={1}
      style={{ position: 'absolute', left: 0, top: 0, width: 2, height: 2,
        opacity: 0, pointerEvents: 'none' }} />
  );
}

// ── Kapitel-Zeile: /0N LABEL links oben — editorialer Anker statt zentriertem Eyebrow
function Chapter({ n, label, op = 1 }) {
  return null;
}

function MiniLogoSceneTitle({
  title,
  subtitle,
  icon = 'briefcase',
  color = '#8fbfd8',
  x = 292,
  y = 92,
  width = 940,
  op = 1,
  kicker = 'Consultry Use Case',
}) {
  return (
    <div style={{ position: 'absolute', left: x, top: y, width, opacity: op,
      transform: `translateY(${(1 - op) * -12}px) scale(${0.985 + op * 0.015})`,
      transformOrigin: '0 50%', display: 'grid', gridTemplateColumns: '68px 1fr',
      alignItems: 'center', columnGap: 22 }}>
      <div style={{ width: 68, height: 68, borderRadius: 22, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: `linear-gradient(135deg, ${color}1f 0%, rgba(255,255,255,0.045) 100%)`,
        border: `1px solid ${color}55`,
        boxShadow: `0 20px 44px rgba(0,0,0,0.26), 0 0 28px ${color}1f, inset 0 1px 0 rgba(255,255,255,0.12)` }}>
        <Icon name={icon} size={32} color={color} sw={1.9} />
      </div>
      <div style={{ minWidth: 0 }}>
        {kicker && <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: `${color}bb` }}>{kicker}</div>}
        <div style={{ marginTop: kicker ? 7 : 0, fontFamily: DISPLAY, fontWeight: 805, fontSize: 52,
          lineHeight: 0.96, color: TEXT, letterSpacing: '-0.024em',
          textShadow: '0 16px 38px rgba(0,0,0,0.34)' }}>{title}</div>
        {subtitle && <div style={{ marginTop: 12, fontFamily: INTER, fontSize: 20,
          lineHeight: 1.2, color: 'rgba(250,250,249,0.66)' }}>{subtitle}</div>}
        <div style={{ marginTop: 14, width: 260, height: 2, borderRadius: 999,
          background: `linear-gradient(90deg, ${color} 0%, ${WARM} 56%, rgba(232,101,90,0.70) 100%)`,
          opacity: 0.70, transform: `scaleX(${op})`, transformOrigin: '0 50%' }} />
      </div>
    </div>
  );
}

// ── Musikbett: vorgemischt (Gain 0.18, Fades) in music.wav — synchron zur Timeline ─
const MUSIC_SRC = 'music.wav';
function Music() {
  const { time, playing } = useTimeline();
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(0);
  const vol = MUSIC_MUTED ? 0 : clamp(TWEAKS.musicVolume ?? 1, 0, 1);
  React.useEffect(() => {
    const a = ref.current;
    if (!a || a.readyState < 1) return;
    a.volume = vol;
    const target = clamp(time, 0, DUR - 0.05);
    if (playing && time < DUR - 0.1) {
      if (a.paused) {
        if (Math.abs(a.currentTime - target) > 0.2) a.currentTime = target;
        a.play().catch(() => {});
      } else if (Math.abs(a.currentTime - target) > 0.4) {
        a.currentTime = target;
      }
    } else {
      if (!a.paused) a.pause();
      if (Math.abs(a.currentTime - target) > 0.05) a.currentTime = target;
    }
  }, [time, playing, vol, ready]);
  return (
    <video ref={ref} src={MUSIC_SRC} playsInline preload="auto"
      onLoadedData={() => setReady(r => r + 1)}
      data-om-exportable-video-play-start={0}
      data-om-exportable-video-play-end={DUR}
      data-om-exportable-video-play-speed={1}
      style={{ position: 'absolute', left: 0, top: 0, width: 2, height: 2,
        opacity: 0, pointerEvents: 'none' }} />
  );
}

// ── Lucide-style icons ───────────────────────────────────────────────────────
function Icon({ name, size = 30, color = TEXT, sw = 1.75 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'azure')
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13.6 3.2 7.2 15.5h5.1l-2.8 5.3 8.9-12.7h-5.2l2.1-4.9z" fill={color} opacity="0.96" />
      <path d="M6.8 15.5 3.4 19.8h10.1l2.6-4.3H6.8z" fill={color} opacity="0.58" />
    </svg>;
  if (name === 'zap')
    return <svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
  if (name === 'target')
    return <svg {...common}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
  if (name === 'sparkles')
    return <svg {...common}>
      <path d="M9.94 14.06 8.5 8.5 7.06 14.06 1.5 15.5l5.56 1.44L8.5 22.5l1.44-5.56L15.5 15.5z" transform="translate(1.5 -3)" />
      <path d="M18 3v4M20 5h-4M19 16v3M20.5 17.5h-3" />
    </svg>;
  if (name === 'shield')
    return <svg {...common}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>;
  if (name === 'briefcase')
    return <svg {...common}><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><rect x="3" y="7" width="18" height="13" rx="2" /></svg>;
  if (name === 'gem')
    return <svg {...common}><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></svg>;
  if (name === 'folder')
    return <svg {...common}><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>;
  if (name === 'book')
    return <svg {...common}><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>;
  if (name === 'database')
    return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></svg>;
  if (name === 'agents')
    return <svg {...common}><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 3v4" /><path d="M8.5 12h.01M15.5 12h.01" /><path d="M9 16h6" /><path d="M3 13h2M19 13h2" /></svg>;
  if (name === 'search')
    return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
  if (name === 'file')
    return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h6" /></svg>;
  if (name === 'users')
    return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === 'clock')
    return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
  if (name === 'workflow')
    return <svg {...common}><path d="M4 7h5" /><path d="M4 17h5" /><path d="M15 7h5" /><path d="M9 7c3 0 3 10 6 10h5" /><path d="M9 17c3 0 3-10 6-10" /><circle cx="4" cy="7" r="2" /><circle cx="4" cy="17" r="2" /><circle cx="20" cy="7" r="2" /><circle cx="20" cy="17" r="2" /></svg>;
  if (name === 'euro')
    return <svg {...common}><path d="M18 7.2A6.8 6.8 0 0 0 12.4 4C8.8 4 6 7 6 12s2.8 8 6.4 8A6.8 6.8 0 0 0 18 16.8" /><path d="M3.8 10h10.8M3.8 14h9.4" /></svg>;
  if (name === 'check')
    return <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>;
  if (name === 'arrowUR')
    return <svg {...common}><path d="M7 17 17 7M7 7h10v10" /></svg>;
  return null;
}

// ── Trend sparkline (direction hint, no numbers) ─────────────────────────────
function Trend({ label, dir, draw, light }) {
  const id = 'tg-' + label.replace(/\W/g, '');
  const up = [[2,28],[20,24],[38,27],[56,17],[74,13],[92,7],[108,4]];
  const dn = [[2,4],[20,9],[38,6],[56,16],[74,20],[92,27],[108,30]];
  const pts = dir === 'up' ? up : dn;
  const len = Math.round(clamp(draw, 0, 1) * (pts.length - 1));
  const shown = pts.slice(0, len + 1);
  const d = shown.map((p, i) => (i ? 'L' : 'M') + p[0] + ' ' + p[1]).join(' ');
  const tip = shown[shown.length - 1] || pts[0];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <svg width="110" height="32" viewBox="0 0 112 32" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a85e" /><stop offset="1" stopColor="#e8655a" />
          </linearGradient>
        </defs>
        <path d={d} fill="none" stroke={'url(#' + id + ')'} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={tip[0]} cy={tip[1]} r="3.2" fill="#f0a85e"
          style={{ opacity: draw > 0.96 ? 1 : 0, transition: 'opacity .2s' }} />
      </svg>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="11" height="11" viewBox="0 0 11 11">
          {dir === 'up'
            ? <polygon points="5.5 0 11 9 0 9" fill={WARM} />
            : <polygon points="0 2 11 2 5.5 11" fill={WARM} />}
        </svg>
        <span style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: light ? 'rgba(30,27,24,0.5)' : FAINT }}>{label}</span>
      </div>
    </div>
  );
}

// ── Real integration-app tiles for the scattered problem texture ─────────────
const BRANDS = [
  { label: 'Microsoft Teams',      src: 'assets/tech-icons/microsoft-teams.svg' },
  { label: 'Microsoft Outlook',    src: 'assets/tech-icons/microsoft-outlook.svg' },
  { label: 'Microsoft PowerPoint', src: 'assets/tech-icons/microsoft-powerpoint.svg' },
  { label: 'Microsoft Word',       src: 'assets/tech-icons/microsoft-word.svg' },
  { label: 'Adobe PDF',            src: 'assets/tech-icons/adobe-pdf.svg' },
  { label: 'Slack',                src: 'assets/tech-icons/slack.svg' },
  { label: 'Microsoft Excel',      src: 'assets/tech-icons/microsoft-excel.svg' },
];
function BrandTile({ b, size }) {
  return (
    <img src={b.src} alt={b.label} draggable={false} style={{
      display: 'block', width: size, height: size, objectFit: 'contain',
      filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.36))',
    }} />
  );
}

// scattered, dimmed app tiles = the "verstreut" texture under the problem beats
const SCATTER = [
  [270, 718, 76, -8], [520, 838, 68, 7], [746, 738, 82, -4], [1174, 742, 80, 6],
  [1404, 842, 70, -7], [1650, 710, 76, 5], [980, 904, 64, -6],
];
function ScatterTools({ local, from, to }) {
  const appear = band(local, from, to, 0.55);
  if (appear <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: appear, pointerEvents: 'none' }}>
      {BRANDS.map((b, i) => {
        const s = SCATTER[i];
        const ap = rise(local, from + 0.1 + i * 0.07, 0.5);
        const float = Math.sin(local * 0.8 + i * 1.3) * 4;
        return (
          <div key={b.label} style={{ position: 'absolute', left: s[0], top: s[1] + float,
            transform: `translate(-50%,-50%) rotate(${s[3]}deg) scale(${0.8 + ap * 0.2})`,
            opacity: ap * 0.62, filter: 'saturate(0.8)' }}>
            <BrandTile b={b} size={Math.round(s[2] * 1.12)} />
          </div>
        );
      })}
    </div>
  );
}

// ══ SCENE 0 — HOOK  (Pain-Framing: Senior-Kosten, Faktura-Druck, AI-Wettlauf) ══
function HookBackground({ local }) {
  const frame = clamp(Math.floor(local * HOOK_BG_FPS) + 1, 1, HOOK_BG_FRAME_COUNT);
  const enter = rise(local, 0.05, 0.55);
  const exit = 1 - Easing.easeInCubic(clamp((local - 4.45) / 0.78, 0, 1));
  const op = 0.95 * enter * exit; // v2.2 layered-depth bg ist der Look — kaum abdunkeln
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={HOOK_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        transform: `scale(${1.016 + local * 0.002})`,
        filter: 'saturate(0.98) contrast(1.02) brightness(0.9)' }} />
      {/* nur eine leichte Text-Scrim hinter der Center-Headline — Video trägt den Rest */}
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 68% 42% at 50% 46%, rgba(23,19,17,0.34) 0%, rgba(23,19,17,0.10) 60%, rgba(23,19,17,0) 100%)' }} />
    </div>
  );
}

function SceneHook(local) {
  const eb = band(local, 0.3, 4.95, 0.5);
  const p1a = rise(local, 0.25, 0.7);
  const p1b = rise(local, 1.62, 0.72);
  const p1c = rise(local, 2.82, 0.74);
  const labelP = rise(local, 3.76, 0.62);
  const ex = clamp((local - 4.6) / 0.7, 0, 1);
  const card = Math.max(p1a, p1b, p1c);
  const sh = { fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <HookBackground local={local} />
      <div style={{ position: 'absolute', left: '50%', top: '44%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.32, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.13) 0%, rgba(232,101,90,0.05) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={1} label="IT-Beratung 2026" op={eb} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', paddingTop: 40, transform: `translateY(${-ex * 24}px)`,
        textShadow: '0 4px 34px rgba(8,6,4,0.78)' }}>
        <div style={{ minWidth: 1160, maxWidth: 1500, padding: '34px 78px 44px',
          boxSizing: 'border-box', opacity: card,
          transform: `translateY(${(1 - card) * 12}px) scale(${0.985 + card * 0.015})` }}>
          <div style={{ ...sh, marginTop: 0, fontSize: 96, lineHeight: 1.01,
            opacity: p1a, transform: `translateY(${(1 - p1a) * 24}px) scale(${0.97 + p1a * 0.03})` }}>
            Beratung unter Druck.
          </div>
          <div style={{ ...sh, fontSize: 64, marginTop: 16, color: MUTED,
            opacity: p1b, transform: `translateY(${(1 - p1b) * 24}px) scale(${0.97 + p1b * 0.03})` }}>
            Kosten rauf. Faktura runter.
          </div>
          <div style={{ ...sh, fontSize: 82, marginTop: 18,
            opacity: p1c, transform: `translateY(${(1 - p1c) * 20}px) scale(${0.97 + p1c * 0.03})` }}>
            <span style={gradText(GRAD_WARM)}>Wissen muss arbeiten.</span>
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 15, opacity: labelP, transform: `translateY(${(1 - labelP) * 12}px)` }}>
            {['Senior-Kosten', 'Overhead', 'Doppelarbeit'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span style={{ width: 5, height: 5, borderRadius: 99,
                  background: i === 1 ? WARM : '#e8655a', opacity: 0.72 }} />}
                <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'rgba(250,250,249,0.64)' }}>{label}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SceneProblem(local) {
  const t1a = band(local, 0.35, 5.6, 0.5);   // "Das Problem?" (VO 5.24)
  const t1b = band(local, 1.75, 5.7, 0.5);   // die Aufzählung (VO ab 6.78)
  const e1 = clamp((local - 5.3) / 0.6, 0, 1);
  const t2 = band(local, 5.85, 9.9, 0.5);    // "Verstreut: …" (VO ~10.8)
  const sh = '0 2px 26px rgba(8,6,4,0.6)';
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      {/* kühleres, gedimmtes Glühen — das Problem liegt im Halbdunkel */}
      <div style={{ position: 'absolute', left: '50%', top: '40%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.3, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.11) 0%, rgba(232,101,90,0.04) 40%, rgba(23,19,17,0) 68%)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 92% 82% at 50% 46%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)' }} />

      {/* v1 JSX motion scene: verstreute Tool-Kacheln, kein Background-Video */}
      <ScatterTools local={local} from={1.8} to={9.6} />

      {/* Freie Typo ohne Glassmorphism-Frame */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 328, display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 1480, height: 300 }}>
          {/* beat 1 — das Problem + die Aufzählung */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '28px 84px 44px',
            boxSizing: 'border-box', transform: `translateY(${-e1 * 16}px)` }}>
            <div style={{ width: 56, height: 3, background: GRAD_WARM, borderRadius: 2, marginBottom: 26,
              opacity: t1a, transform: `scaleX(${t1a})` }} />
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 84, lineHeight: 1.05,
              letterSpacing: '-0.025em', textAlign: 'center', color: TEXT, textShadow: sh,
              opacity: t1a, transform: `translateY(${(1 - t1a) * 24}px) scale(${0.97 + t1a * 0.03})` }}>Das Problem?</div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 56, lineHeight: 1.1,
              letterSpacing: '-0.02em', textAlign: 'center', color: MUTED, marginTop: 14, textShadow: sh,
              opacity: t1b, transform: `translateY(${(1 - t1b) * 24}px) scale(${0.97 + t1b * 0.03})` }}>Excel-Sheets. Verträge. Projektkontext. Wissen.</div>
          </div>
          {/* beat 2 — verstreut */}
          <div style={{ position: 'absolute', left: '50%', top: 6, width: 1260, height: 256,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '54px 118px 58px', boxSizing: 'border-box',
            opacity: t2, transform: `translateX(-50%) translateY(${(1 - t2) * 24}px)` }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 68, lineHeight: 1.12,
              letterSpacing: '-0.022em', textAlign: 'center', color: TEXT, textShadow: sh, textWrap: 'balance' }}>
              <span style={{ display: 'block' }}>Verstreut: in Köpfen, PCs</span>
              <span style={{ display: 'block' }}>und endlosen Tools.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══ SCENE 2 — DIE ANTWORT / REVEAL  ══
const POSITIONING_START = 1.80;
const POSITIONING_EXIT = 6.35;
const OS_EXPLAINER_START = 6.05;
const OS_EXPLAINER_EXIT = 12.35;
const SIGNAL_START = 12.85;
const TEAM_MATCH_STEP = 1.05;
const TEAM_MATCH_CARD_DELAY = 0.72;
const TEAM_MATCH_CARD_DUR = 1.02;
function SolutionBackground({ local }) {
  // Beat 1: M04 Reveal-Halo. Beat 2 is rendered as JSX UI, no generated background video.
  const f1 = clamp(Math.floor(local * HOOK_BG_FPS) + 1, 1, SOL1_FRAME_COUNT);
  const enter = rise(local, 0.1, 0.5);
  const x = Easing.easeInOutCubic(clamp((local - SOL_SWITCH_T) / 0.45, 0, 1)); // Beat-Crossfade
  const exit = 1 - Easing.easeInCubic(clamp((local - 21.1) / 0.7, 0, 1));
  const glowDamp = band(local, 3.15, SOL_SWITCH_T + 0.4, 0.75); // abs ~17.65–21.9: Logo/Knowledge beat
  const filt1 = `saturate(${0.98 - glowDamp * 0.26}) contrast(${1.02 - glowDamp * 0.14}) brightness(${0.9 - glowDamp * 0.34})`;
  const uiStage = rise(local, SOL_SWITCH_T - 0.1, 0.7);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.95 * enter * exit, pointerEvents: 'none' }}>
      {x < 0.999 && <img src={SOL1_BG(f1)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover', opacity: (1 - x) * (1 - glowDamp * 0.18), filter: filt1 }} />}
      {uiStage > 0.001 && <div style={{ position: 'absolute', inset: 0, opacity: uiStage,
        background: 'radial-gradient(ellipse 82% 70% at 50% 50%, rgba(232,145,58,0.10) 0%, rgba(232,101,90,0.05) 34%, rgba(23,19,17,0) 64%), linear-gradient(180deg, rgba(23,19,17,0.88) 0%, rgba(23,19,17,0.74) 48%, rgba(23,19,17,0.92) 100%)' }} />}
      {glowDamp > 0.001 && <div style={{ position: 'absolute', inset: 0, opacity: glowDamp,
        background: 'radial-gradient(ellipse 82% 72% at 50% 50%, rgba(23,19,17,0.46) 0%, rgba(23,19,17,0.34) 46%, rgba(23,19,17,0.16) 72%, rgba(23,19,17,0.08) 100%)' }} />}
      {/* leichte Scrims: oben fürs Logo/Headline-Band, unten sanft */}
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.30) 0%, rgba(23,19,17,0.06) 26%, rgba(23,19,17,0) 55%, rgba(23,19,17,0.22) 100%)' }} />
    </div>
  );
}

const SIGNAL_BEAT_FEED = 0.62;
const SIGNAL_BEAT_SOURCES = 3.55;
const SIGNAL_BEAT_SELECT = 6.55;
const SIGNAL_BEAT_DKB_ACTIVE = SIGNAL_BEAT_SELECT + 1.24;
const SIGNAL_BEAT_BRIDGE = 8.35;
const SIGNAL_TEAM_PREVIEW_START = 11.85;
const SIGNAL_TEAM_MORPH_START = SIGNAL_TEAM_PREVIEW_START + 2.30;
const SIGNAL_TEAM_PROFILE_STAGE_START = SIGNAL_TEAM_MORPH_START;
const SIGNAL_TEAM_PROFILE_STAGE_DUR = 3.15;
const SIGNAL_TEAM_STAFFING_STAGE_START = SIGNAL_TEAM_PROFILE_STAGE_START + SIGNAL_TEAM_PROFILE_STAGE_DUR + 0.85;
const SIGNAL_TEAM_STAFFING_STAGE_DUR = 3.15;
const SIGNAL_TEAM_DETAIL_START = SIGNAL_TEAM_PROFILE_STAGE_START + 1.10;
const SIGNAL_TEAM_DRAW_START = SIGNAL_TEAM_DETAIL_START + 0.55;
const SIGNAL_TEAM_LIST_START = SIGNAL_TEAM_STAFFING_STAGE_START + SIGNAL_TEAM_STAFFING_STAGE_DUR + 0.85;
const SIGNAL_TEAM_TITLE_START = SIGNAL_TEAM_DETAIL_START + 0.64;
const TEAM_MATCH_START_LOCAL = SIGNAL_TEAM_LIST_START + 0.72;

const SIGNAL_TREE = [
  { label: 'Eure Projekte', meta: 'Security Tender', icon: 'briefcase', x: 126, y: 102, dockX: 98, dockY: 136, t: SIGNAL_BEAT_SOURCES + 0.00, color: WARM },
  { label: 'Trend', meta: 'Cloud Security', icon: 'search', x: 126, y: 200, dockX: 98, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.18, color: '#8fbfd8' },
  { label: 'Euer Angebot', meta: 'Azure Projekte', icon: 'file', x: 126, y: 298, dockX: 1172, dockY: 136, t: SIGNAL_BEAT_SOURCES + 0.36, color: '#d69a4d' },
  { label: 'Risiko', meta: 'Compliance Check', icon: 'shield', x: 126, y: 396, dockX: 1172, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.54, color: '#c65bb0' },
  { label: 'Finanz', meta: 'Faktura', icon: 'euro', x: 126, y: 494, dockX: 1172, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.72, color: '#8fbfd8' },
];
const SIGNAL_NODE_W = 92;
const SIGNAL_NODE_H = 92;
const TEAM_REQUIREMENTS = [
  { k: 'CERTS', icon: 'azure', color: '#8fbfd8', items: ['AZ-500', 'SC-200'] },
  { k: 'SKILL LABELS', icon: 'zap', color: WARM,
    items: ['Azure Cloud Architekturen', 'Container-Orchestrierung', 'SOC-Management', 'Incident Response'] },
  { k: 'PRODUCTS', icon: 'database', color: '#e8655a',
    items: ['Azure Cloud', 'Microsoft Sentinel', 'Terraform', 'Kubernetes'] },
];
const CERT_BADGE_SRC = 'assets/cert-icons/sc-200.svg';

function CertificationBadge({ cert, color = '#8fbfd8', mini = false }) {
  const h = mini ? 27 : 35;
  const icon = mini ? 22 : 29;
  return (
    <span style={{ height: h, minWidth: mini ? 88 : 116, borderRadius: 999,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: mini ? 6 : 8, padding: mini ? '0 8px 0 5px' : '0 12px 0 6px',
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, rgba(0,100,181,0.20) 0%, rgba(0,32,80,0.18) 100%)',
      border: `1px solid ${color}32`, boxShadow: `0 0 14px ${color}13`,
      whiteSpace: 'nowrap' }}>
      <img src={CERT_BADGE_SRC} alt="" style={{ width: icon, height: icon,
        objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
      <span style={{ fontFamily: MONO, fontWeight: 760, fontSize: mini ? 9.3 : 10.8,
        letterSpacing: '0.045em', color: 'rgba(250,250,249,0.86)' }}>
        {cert}
      </span>
    </span>
  );
}

function ConsultantAvatar({ person, size = 40, selected = 0, muted = 0 }) {
  const skin = person.skin || '#d9ad86';
  const hair = person.hair || '#3f2b25';
  const shirt = person.color || '#8fbfd8';
  const variant = person.avatar || 0;
  const op = 1 - muted * 0.48;
  const hairPath = variant === 1
    ? 'M27 42c2-18 17-28 32-20 9 5 13 14 12 27-7-9-14-13-24-13-8 0-14 2-20 6z'
    : variant === 2
      ? 'M30 37c3-13 13-22 28-18 12 3 18 12 17 27-8-5-18-8-30-7-6 1-11 0-15-2z'
      : 'M29 41c1-15 11-24 25-24 13 0 21 8 22 24-6-7-14-10-25-10-9 0-17 3-22 10z';
  return (
    <div style={{ width: size, height: size, borderRadius: 999, overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: op,
      transform: `scale(${1 + selected * 0.12})`,
      background: `radial-gradient(circle at 40% 24%, rgba(255,255,255,0.20), ${shirt}16 42%, rgba(23,19,17,0.64) 100%)`,
      border: `1px solid ${shirt}${selected > 0.2 ? '88' : '48'}`,
      boxShadow: `0 0 ${10 + selected * 20}px ${shirt}${selected > 0.2 ? '38' : '12'}, inset 0 1px 0 rgba(255,255,255,0.16)` }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
        <rect width="100" height="100" fill="rgba(255,255,255,0.025)" />
        <path d="M17 100c5-22 19-35 33-35s28 13 33 35H17z" fill={shirt} opacity="0.76" />
        <path d="M30 100c4-16 11-24 20-24s16 8 20 24H30z" fill="rgba(23,19,17,0.18)" />
        <circle cx="50" cy="43" r="21" fill={skin} />
        <path d={hairPath} fill={hair} opacity="0.96" />
        <path d="M38 48h.1M62 48h.1" stroke="rgba(23,19,17,0.70)" strokeWidth="4" strokeLinecap="round" />
        <path d="M42 58c5 4 11 4 16 0" fill="none" stroke="rgba(23,19,17,0.42)" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M36 72c6 5 22 5 28 0" fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SignalTreeNode({ node, local, x, y, fade = 1, merge = null }) {
  const p = rise(local, node.t, 0.60);
  const mp = merge?.p || 0;
  const dx = merge ? merge.cx - (x + SIGNAL_NODE_W / 2) : 0;
  const dy = merge ? merge.cy - (y + SIGNAL_NODE_H / 2) : 0;
  const scale = 0.985 + p * 0.015 - mp * 0.54;
  const shimmer = 0.55 + Math.sin(local * 4.2 + node.t * 7) * 0.45;
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: SIGNAL_NODE_W, height: SIGNAL_NODE_H,
      opacity: p * fade * (1 - mp * 0.96),
      transform: `translate(${dx * mp}px, ${(1 - p) * 14 + dy * mp}px) scale(${scale})`,
      transformOrigin: '50% 50%' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 88, height: 88,
        borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `radial-gradient(circle at 34% 30%, ${node.color}22 0%, rgba(255,255,255,0.050) 48%, rgba(255,255,255,0.020) 100%)`,
        border: `1px solid ${node.color}45`,
        boxShadow: `0 18px 44px rgba(0,0,0,0.22), 0 0 ${18 + shimmer * 12}px ${node.color}20` }}>
        <div style={{ position: 'absolute', inset: -8, borderRadius: 999,
          border: `1px solid ${node.color}22`, opacity: 0.42 + shimmer * 0.22,
          transform: `scale(${0.96 + shimmer * 0.06})` }} />
        <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: 99,
          right: 11, top: 13, background: node.color, opacity: 0.68,
          boxShadow: `0 0 10px ${node.color}77` }} />
        <div style={{ width: 58, height: 58, borderRadius: 18, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: `${node.color}10`, border: `1px solid ${node.color}2a` }}>
          <Icon name={node.icon} size={35} color={node.color} sw={1.85} />
        </div>
      </div>
    </div>
  );
}

function SignalAttentionGrabbers({ local, fade = 1 }) {
  const items = [
    {
      title: 'Relevante Signale erkennen',
      meta: 'Ausschreibungen und Marktbewegungen werden priorisiert.',
      icon: 'target',
      color: WARM,
      t: SIGNAL_BEAT_FEED + 0.32,
      end: SIGNAL_BEAT_SOURCES - 0.12,
    },
    {
      title: 'Quellen & Wissen identifizieren',
      meta: 'Projekte, Cases, Risiko und Finanzkontext zuordnen.',
      icon: 'database',
      color: '#8fbfd8',
      t: SIGNAL_BEAT_SOURCES + 0.34,
      end: SIGNAL_BEAT_SELECT - 0.16,
    },
    {
      title: 'Angebote vorbereiten',
      meta: 'Das passende Signal wird zum nächsten Angebotsschritt.',
      icon: 'arrowUR',
      color: '#e8655a',
      t: SIGNAL_BEAT_DKB_ACTIVE,
      end: SIGNAL_TEAM_PREVIEW_START + 0.34,
    },
  ];
  const exit = rise(local, SIGNAL_TEAM_PREVIEW_START + 0.18, 0.78);
  const op = fade * (1 - exit);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', left: 1004, top: 114, width: 650, height: 486,
      opacity: op, pointerEvents: 'none', zIndex: 4 }}>
      <div style={{ position: 'absolute', left: 0, top: 6, bottom: 14, width: 1,
        opacity: 0.34 * rise(local, SIGNAL_BEAT_FEED + 0.28, 0.80),
        background: 'linear-gradient(180deg, rgba(240,168,94,0), rgba(240,168,94,0.46), rgba(232,101,90,0.16), rgba(240,168,94,0))' }} />
      {items.map((item, i) => {
        const p = rise(local, item.t, 0.88);
        const focus = band(local, item.t, item.end, 0.48);
        const complete = rise(local, item.end, 0.58);
        const muted = complete * 0.50 + (1 - focus) * 0.18;
        return (
          <div key={item.title} style={{ position: 'absolute', left: 32, top: i * 150,
            width: 610, height: 134, padding: '14px 0',
            boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 18,
            opacity: p * (0.48 + focus * 0.52 - muted * 0.28),
            transform: `translateX(${(1 - p) * 124 + exit * 18}px) scale(${0.965 + p * 0.025 + focus * 0.040})`,
            borderBottom: `1px solid ${item.color}${focus > 0.05 ? '3f' : '22'}` }}>
            <div style={{ width: 82, height: 82, borderRadius: 26, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: `${item.color}${focus > 0.05 ? '1c' : '12'}`,
              border: `1px solid ${item.color}${focus > 0.05 ? '62' : '35'}`,
              boxShadow: `0 0 ${p * (18 + focus * 20)}px ${item.color}${focus > 0.05 ? '26' : '12'}` }}>
              <Icon name={item.icon} size={39} color={item.color} sw={1.85} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 805, fontSize: 36,
                lineHeight: 1.03, color: TEXT, letterSpacing: '-0.014em',
                maxWidth: 500 }}>
                {item.title}
              </div>
              <div style={{ marginTop: 10, maxWidth: 510, fontFamily: INTER, fontWeight: 640,
                fontSize: 16, lineHeight: 1.22,
                color: `rgba(250,250,249,${0.44 + focus * 0.18})` }}>
                {item.meta}
              </div>
            </div>
            <div style={{ position: 'absolute', left: -32, top: 66, width: 32, height: 1,
              background: item.color, opacity: (0.24 + focus * 0.24) * p }} />
          </div>
        );
      })}
    </div>
  );
}

function SignalTeamPreviewModules({ local, expand, sceneExit }) {
  const enter = rise(local, 3.48, 1.08);
  const exit = 1 - rise(local, 4.02, 0.72);
  const op = enter * exit * expand;
  if (op <= 0.001) return null;
  const draw = rise(local, 3.72, 1.10);
  const cx = 78;
  const cy = 78;
  const maxR = 42;
  const skills = [
    { short: 'AZR', value: 0.92, color: 'rgba(250,250,249,0.34)' },
    { short: 'SEC', value: 0.88, color: 'rgba(250,250,249,0.30)' },
    { short: 'IAC', value: 0.78, color: 'rgba(250,250,249,0.26)' },
    { short: 'DEL', value: 0.82, color: 'rgba(250,250,249,0.28)' },
  ];
  const axes = skills.map((skill, i) => {
    const angle = -Math.PI / 2 + i * (Math.PI * 2 / skills.length);
    const r = maxR * skill.value * draw;
    return {
      ...skill,
      x: cx + Math.cos(angle) * maxR,
      y: cy + Math.sin(angle) * maxR,
      vx: cx + Math.cos(angle) * r,
      vy: cy + Math.sin(angle) * r,
      lx: cx + Math.cos(angle) * (maxR + 15),
      ly: cy + Math.sin(angle) * (maxR + 15),
    };
  });
  const points = axes.map((axis) => `${axis.vx.toFixed(1)},${axis.vy.toFixed(1)}`).join(' ');
  const rows = [
    { label: 'SA', color: 'rgba(143,191,216,0.52)', w: 0.78, y: 116 },
    { label: 'SE', color: 'rgba(240,168,94,0.48)', w: 0.88, y: 176 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op,
      transform: `translateY(${(1 - enter) * 12 + (1 - exit) * 12}px) scale(${0.92 + expand * 0.035 - (1 - exit) * 0.025})`,
      transformOrigin: '50% 58%', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: 72, top: 198, width: 430, height: 218,
        borderRadius: 24, padding: '18px 20px', boxSizing: 'border-box',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.046) 0%, rgba(255,255,255,0.020) 100%)',
        border: '1px solid rgba(255,255,255,0.082)',
        boxShadow: '0 16px 42px rgba(0,0,0,0.15)' }}>
        <div style={{ fontFamily: MONO, fontSize: 9.2, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(143,191,216,0.62)' }}>Kompetenzprofil</div>
        <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 730, fontSize: 18,
          color: 'rgba(250,250,249,0.84)', letterSpacing: '-0.01em' }}>Skill Match</div>
        <svg width="178" height="158" viewBox="0 0 178 158"
          style={{ position: 'absolute', left: 26, top: 58, overflow: 'visible', filter: 'blur(1.5px)', opacity: 0.46 }}>
          <defs>
            <radialGradient id="signal-team-preview-fill" cx="50%" cy="50%" r="58%">
              <stop offset="0" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="0.65" stopColor="rgba(255,255,255,0.10)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.04)" />
            </radialGradient>
          </defs>
          {[0.5, 1].map((ratio) => (
            <circle key={ratio} cx={cx} cy={cy} r={maxR * ratio} fill="none"
              stroke={ratio === 1 ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)'} />
          ))}
          {axes.map((axis) => (
            <g key={axis.short}>
              <line x1={cx} y1={cy} x2={axis.x} y2={axis.y}
                stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
            </g>
          ))}
          <polygon points={points} fill="url(#signal-team-preview-fill)" stroke="rgba(255,255,255,0.24)"
            strokeWidth="2" strokeLinejoin="round" />
          {axes.map((axis) => (
            <circle key={`${axis.short}-dot`} cx={axis.vx} cy={axis.vy} r="3.1"
              fill={axis.color} stroke="rgba(23,19,17,0.68)" strokeWidth="1.3" />
          ))}
        </svg>
        <div style={{ position: 'absolute', left: 222, top: 88, right: 24 }}>
          {[0.70, 0.88, 0.58].map((w, i) => {
            const p = rise(local, 3.86 + i * 0.12, 0.46);
            return (
              <div key={`skill-placeholder-${i}`} style={{ marginTop: i === 0 ? 0 : 15,
                height: 9, width: `${w * 100}%`, borderRadius: 99, opacity: p,
                transform: `scaleX(${p})`, transformOrigin: '0 50%',
                background: 'rgba(255,255,255,0.112)' }} />
            );
          })}
        </div>
        <div style={{ position: 'absolute', left: 224, bottom: 28, display: 'flex', gap: 10 }}>
          {[
            ['assets/tech-icons/azure.svg', '#8fbfd8'],
            ['assets/tech-icons/microsoft-defender.svg', WARM],
          ].map(([src, color], i) => {
            const p = rise(local, 3.88 + i * 0.14, 0.48);
            return (
              <div key={src} style={{ width: 38, height: 38, borderRadius: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: p, transform: `translateY(${(1 - p) * 8}px)`,
                background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.085)' }}>
                <img src={src} alt="" style={{ width: 23, height: 23,
                  objectFit: 'contain', display: 'block', filter: 'grayscale(1) saturate(0.25) opacity(0.58)' }} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'absolute', left: 658, top: 198, width: 592, height: 218,
        borderRadius: 24, padding: '18px 22px', boxSizing: 'border-box',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.046) 0%, rgba(255,255,255,0.020) 100%)',
        border: '1px solid rgba(255,255,255,0.082)',
        boxShadow: '0 16px 42px rgba(0,0,0,0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 9.2, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(143,191,216,0.62)' }}>Projektbesetzung</div>
            <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 730, fontSize: 18,
              color: 'rgba(250,250,249,0.84)', letterSpacing: '-0.01em' }}>Setup Vorschau</div>
          </div>
          <div style={{ height: 26, borderRadius: 999, display: 'flex', alignItems: 'center',
            padding: '0 10px', gap: 7, fontFamily: MONO, fontSize: 9, letterSpacing: '0.08em',
            color: 'rgba(250,250,249,0.58)', background: 'rgba(255,255,255,0.034)',
            border: '1px solid rgba(255,255,255,0.065)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8' }} />
            7 PT / 56h
          </div>
        </div>
        <svg width="548" height="140" viewBox="0 0 548 140"
          style={{ position: 'absolute', left: 24, top: 74, overflow: 'visible' }}>
          <path d="M 82 48 H 502 M 82 108 H 502"
            stroke="rgba(255,255,255,0.046)" strokeWidth="1.25" strokeLinecap="round" />
          <rect x="462" y="22" width="62" height="104" rx="18"
            fill="rgba(255,255,255,0.018)" stroke="rgba(255,255,255,0.042)" />
          {rows.map((row, i) => {
            const p = Math.max(enter * 0.72, rise(local, 3.78 + i * 0.18, 0.52));
            const barW = 284 * row.w * p;
            return (
              <g key={row.label} opacity={p}>
                <circle cx="38" cy={row.y - 64} r="12" fill="rgba(255,255,255,0.052)" stroke="rgba(255,255,255,0.090)" />
                <rect x="82" y={row.y - 70} width={barW} height="12" rx="6"
                  fill={row.color} opacity="0.70" />
                <rect x={368} y={row.y - 74} width={48 + i * 8} height="20" rx="10"
                  fill="rgba(255,255,255,0.040)" stroke="rgba(255,255,255,0.052)" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function TeamAttentionGrabbers({ local, fade = 1 }) {
  const doneLocal = LOGO_BRIDGE_START - SIGNAL_START;
  const items = [
    {
      title: 'Kundenbedürfnisse Identifiziert',
      meta: 'Bedarf, Zertifikate und Stack werden zum Kompetenzprofil.',
      icon: 'target',
      color: '#8fbfd8',
      x: 86,
      y: 438,
      fromX: -105,
      t: SIGNAL_TEAM_PROFILE_STAGE_START + 0.18,
      end: SIGNAL_TEAM_STAFFING_STAGE_START - 0.24,
    },
    {
      title: 'Timeline- und Staffing Organisiert',
      meta: 'PTs, Kapazität und Projektfenster werden geplant.',
      icon: 'workflow',
      color: WARM,
      x: 86,
      y: 558,
      fromX: -105,
      t: SIGNAL_TEAM_STAFFING_STAGE_START + 0.20,
      end: SIGNAL_TEAM_LIST_START - 0.22,
    },
    {
      title: 'Harmonisches Team Erstellt',
      meta: 'Profile werden parallel gegen Bedarf gematcht.',
      icon: 'users',
      color: '#e8655a',
      x: 86,
      y: 678,
      fromX: -105,
      t: SIGNAL_TEAM_LIST_START + 0.26,
      end: doneLocal - 0.24,
    },
  ];
  const enter = rise(local, items[0].t - 0.16, 0.82);
  const exit = rise(local, doneLocal - 0.40, 0.50);
  const op = fade * enter * (1 - exit);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0,
      opacity: op, pointerEvents: 'none', zIndex: 15 }}>
      {items.map((item, i) => {
        const p = rise(local, item.t, 0.92);
        const focus = band(local, item.t, item.end, 0.54);
        const complete = rise(local, item.end, 0.62);
        const muted = complete * 0.46 + (1 - focus) * 0.10;
        return (
          <div key={item.title} style={{ position: 'absolute', left: item.x, top: item.y,
            width: 700, height: 96, padding: '9px 0', boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', gap: 22,
            opacity: p * (0.44 + focus * 0.56 - muted * 0.24),
            transform: `translateX(${(1 - p) * item.fromX + exit * 18}px) scale(${0.972 + p * 0.014 + focus * 0.024})`,
            transformOrigin: item.fromX < 0 ? '0% 50%' : '100% 50%',
            borderBottom: `1px solid ${item.color}${focus > 0.05 ? '3f' : '22'}` }}>
            <div style={{ width: 66, height: 66, borderRadius: 21, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: `${item.color}${focus > 0.05 ? '1e' : '10'}`,
              border: `1px solid ${item.color}${focus > 0.05 ? '68' : '32'}`,
              boxShadow: `0 0 ${p * (18 + focus * 20)}px ${item.color}${focus > 0.05 ? '26' : '12'}` }}>
              <Icon name={item.icon} size={32} color={item.color} sw={1.85} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 805, fontSize: 29,
                lineHeight: 1.04, letterSpacing: '-0.014em', color: TEXT,
                maxWidth: 570, textShadow: '0 14px 34px rgba(0,0,0,0.36)' }}>
                {item.title}
              </div>
              <div style={{ marginTop: 9, fontFamily: INTER, fontWeight: 630,
                fontSize: 14.2, lineHeight: 1.22, maxWidth: 560,
                color: `rgba(250,250,249,${0.48 + focus * 0.20})` }}>
                {item.meta}
              </div>
            </div>
            <div style={{ position: 'absolute',
              left: item.fromX < 0 ? -32 : 'auto',
              right: item.fromX < 0 ? 'auto' : -32,
              top: 56, width: 32, height: 1,
              background: item.color, opacity: (0.22 + focus * 0.28) * p }} />
          </div>
        );
      })}
    </div>
  );
}

function LinkedInMark({ size = 32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.22,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#0A66C2',
      boxShadow: '0 10px 22px rgba(10,102,194,0.22), inset 0 1px 0 rgba(255,255,255,0.24)' }}>
      <span style={{ fontFamily: INTER, fontWeight: 860, fontSize: size * 0.52,
        color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>in</span>
    </div>
  );
}

function FinancialTimesMark({ size = 32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.18,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #f7d8be 0%, #e8b896 100%)',
      border: '1px solid rgba(96,54,36,0.18)',
      boxShadow: '0 10px 22px rgba(180,112,70,0.18), inset 0 1px 0 rgba(255,255,255,0.32)' }}>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 800, fontSize: size * 0.46,
        color: '#2f211c', letterSpacing: '-0.08em', lineHeight: 1 }}>FT</span>
    </div>
  );
}

function XingMark({ size = 32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.18,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(0,101,103,0.96), rgba(0,82,83,0.92))',
      border: '1px solid rgba(255,255,255,0.20)',
      boxShadow: '0 10px 22px rgba(0,101,103,0.22), inset 0 1px 0 rgba(255,255,255,0.20)' }}>
      <img src="assets/tech-icons/xing.svg" alt="" style={{ width: size * 0.58, height: size * 0.58,
        display: 'block', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
    </div>
  );
}

function SignalGraphPanel({ local }) {
  const enter = rise(local, 0.12, 0.72);
  const draw = rise(local, SIGNAL_BEAT_SOURCES + 0.12, 1.60);
  const active = rise(local, SIGNAL_BEAT_FEED + 0.48, 0.92);
  const click = band(local, SIGNAL_BEAT_SELECT + 0.20, SIGNAL_BEAT_SELECT + 1.34, 0.28);
  const selected = rise(local, SIGNAL_BEAT_SELECT + 0.56, 0.84);
  const scan = band(local, SIGNAL_BEAT_SELECT + 0.72, SIGNAL_BEAT_BRIDGE + 0.74, 0.34);
  const scanPos = Easing.easeInOutCubic(clamp((local - (SIGNAL_BEAT_SELECT + 0.72)) / 1.62, 0, 1));
  const teamPrep = rise(local, SIGNAL_BEAT_BRIDGE + 0.10, 1.00);
  const expand = Easing.easeInOutCubic(clamp((local - SIGNAL_TEAM_PREVIEW_START) / 2.35, 0, 1));
  const handoff = rise(local, SIGNAL_TEAM_PREVIEW_START + 0.12, 2.30);
  const pulse = 0.5 + Math.sin(local * 3.4) * 0.5;
  const signalEvents = [
    { tag: 'LinkedIn', title: 'CEO-Wechsel bei Konzern X', meta: 'Azure-Fokus erkannt', icon: 'linkedin', color: '#0A66C2' },
    { tag: 'Financial Times', title: 'DKB AG wechselt zu AWS Cloud', meta: 'Cloud-Migration', icon: 'financial-times', color: '#b87842' },
    { tag: 'XING', title: 'CIO sucht Cloud-Partner', meta: 'Modernisierung', icon: 'xing', color: '#006567' },
  ];
  const panelH = 700;
  const cardX = 260;
  const cardY = 104;
  const cardW = 740;
  const cardH = 540;
  const dkbActivationStart = SIGNAL_BEAT_DKB_ACTIVE;
  const bridgeMorphStart = SIGNAL_BEAT_BRIDGE + 0.98;
  const focusFade = 1 - expand * 0.92;
  const sourceLineFade = 1 - rise(local, dkbActivationStart + 0.12, 1.12);
  const detailFade = 1 - rise(local, dkbActivationStart + 0.62, 0.96);
  const sceneExit = rise(local, LOGO_BRIDGE_START - SIGNAL_START + 2.55, 1.65);
  const selectedRow = {
    x: cardX + 38,
    y: cardY + 82 + 10 + 106 + 16,
    w: cardW - 76,
    h: 106,
  };
  const rowFocus = Easing.easeInOutCubic(clamp((local - (SIGNAL_BEAT_SELECT + 0.38)) / 1.46, 0, 1));
  const rowBridgeStart = dkbActivationStart + 0.48;
  const rowBridge = Easing.easeInOutCubic(clamp((local - rowBridgeStart) / 2.24, 0, 1));
  const thirdBeatFocus = rise(local, dkbActivationStart - 0.08, 0.74);
  const activeNudge = Easing.easeInOutCubic(clamp((local - dkbActivationStart) / 0.72, 0, 1)) * (1 - rowBridge) * 8;
  const rowSplit = rise(local, SIGNAL_TEAM_PREVIEW_START, 1.48);
  const rowTarget = { x: cardX, y: cardY, w: cardW, h: cardH };
  const activeSelectedRow = { ...selectedRow, x: selectedRow.x + activeNudge };
  const bridgeRow = {
    x: mix(activeSelectedRow.x, rowTarget.x, rowBridge),
    y: mix(activeSelectedRow.y, rowTarget.y, rowBridge),
    w: mix(activeSelectedRow.w, rowTarget.w, rowBridge),
    h: mix(activeSelectedRow.h, rowTarget.h, rowBridge),
  };
  const frameExit = rise(local, rowBridgeStart + 0.48, 1.55);
  const tenderShell = 1 - Easing.easeInOutCubic(clamp((expand - 0.42) / 0.58, 0, 1));
  const frameShell = Math.max(0, tenderShell * (1 - frameExit * 0.54));
  const bridgeRowOp = band(local, dkbActivationStart + 0.08, SIGNAL_TEAM_PREVIEW_START + 1.35, 0.58) * Math.max(0, 1 - rowSplit * 1.75);
  const op = enter * (1 - sceneExit);
  const gatherCenterX = cardX + cardW * 0.52;
  const gatherCenterY = cardY + cardH + 36;
  const mergeTargets = SIGNAL_TREE.map((node, i) => {
    const t = dkbActivationStart + 0.12 + i * 0.06;
    const p = Easing.easeInOutCubic(clamp((local - t) / 1.56, 0, 1));
    return {
      ...node,
      p,
      t,
      chipX: 24 + i * 86,
      cx: gatherCenterX + (i - (SIGNAL_TREE.length - 1) / 2) * 56,
      cy: gatherCenterY + (i % 2 === 0 ? -7 : 7),
    };
  });
  const documentUi = detailFade * frameShell;
  return (
    <div style={{ position: 'absolute', left: '50%', top: 0, width: 1660, height: panelH,
      transform: `translateX(-50%) translateY(${(1 - enter) * 22}px) scale(${0.982 + enter * 0.018})`,
      opacity: op, overflow: 'visible', boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', left: -130, top: -210, width: 520, height: 520,
        opacity: focusFade, background: 'radial-gradient(circle, rgba(240,168,94,0.13) 0%, rgba(23,19,17,0) 64%)' }} />
      <div style={{ position: 'absolute', right: -120, bottom: -220, width: 520, height: 520,
        opacity: focusFade, background: 'radial-gradient(circle, rgba(143,191,216,0.11) 0%, rgba(23,19,17,0) 64%)' }} />

      <svg width="1660" height={panelH} viewBox={`0 0 1660 ${panelH}`} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="signal-team-flow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fbfd8" />
            <stop offset="0.54" stopColor="#f0a85e" />
            <stop offset="1" stopColor="#e8655a" />
          </linearGradient>
        </defs>
        {SIGNAL_TREE.map((node, i) => {
          const p = rise(local, node.t + 0.25, 0.86);
          const collect = mergeTargets[i]?.p || 0;
          const focus = rise(local, 1.26 + i * 0.10, 0.58) * (1 - handoff * 0.65);
          const nx = node.x;
          const ny = node.y;
          const leftSide = nx < 750;
          const startX = leftSide ? nx + SIGNAL_NODE_W : nx;
          const startY = ny + SIGNAL_NODE_H / 2;
          const targetX = leftSide ? cardX + 10 : cardX + cardW - 10;
          const targetY = leftSide
            ? cardY + 70 + i * ((cardH - 140) / Math.max(1, SIGNAL_TREE.length - 1))
            : cardY + (ny < cardY + 160 ? cardH * 0.32 : cardH * 0.70);
          const d = `M ${startX} ${startY} L ${targetX} ${targetY}`;
          const angle = Math.atan2(targetY - startY, targetX - startX) * 180 / Math.PI;
          const packets = [0, 0.34].map((delay) => {
            const q = Easing.easeInOutCubic(clamp((local - (node.t + 0.58 + delay)) / 1.34, 0, 1));
            return {
              q,
              x: startX + (targetX - startX) * q,
              y: startY + (targetY - startY) * q,
              opacity: rise(local, node.t + 0.58 + delay, 0.22) * (1 - rise(local, node.t + 2.12 + delay, 0.42)),
            };
          });
          return (
            <g key={node.label}>
              <path d={d} fill="none" stroke="url(#signal-team-flow)" strokeWidth="2.4"
                strokeLinecap="round" strokeDasharray="760" strokeDashoffset={(1 - draw * p) * 760}
                opacity={focusFade * sourceLineFade * (1 - collect * 0.88) * (0.20 + p * (0.44 + focus * 0.18))} />
              {packets.map((packet, packetIdx) => (
                <g key={`${node.label}-packet-${packetIdx}`}
                  transform={`translate(${packet.x} ${packet.y}) rotate(${angle})`}
                  opacity={focusFade * sourceLineFade * (1 - collect * 0.95) * packet.opacity}>
                  <rect x="-8" y="-6" width="16" height="12" rx="3.5"
                    fill={node.color} opacity="0.58"
                    style={{ filter: `drop-shadow(0 0 9px ${node.color}66)` }} />
                  <path d="M -3 -1 H 4 M -3 3 H 2" stroke="rgba(23,19,17,0.72)"
                    strokeWidth="1.4" strokeLinecap="round" opacity="0.72" />
                </g>
              ))}
            </g>
          );
        })}
        {mergeTargets.map((node, i) => {
          const p = node.p;
          const startX = node.x + SIGNAL_NODE_W / 2;
          const startY = node.y + SIGNAL_NODE_H / 2;
          const trail = Math.max(0, Math.min(1, p * 1.2));
          const collectLineFade = 1 - rise(local, node.t + 0.50, 0.62);
          return (
            <g key={`${node.label}-merge`} opacity={(1 - expand * 0.65) * collectLineFade * p * (1 - p * 0.72)}>
              <path d={`M ${startX} ${startY} L ${node.cx} ${node.cy}`}
                fill="none" stroke={node.color} strokeWidth="2"
                strokeLinecap="round" strokeDasharray="380" strokeDashoffset={(1 - trail) * 380}
                opacity="0.34" />
            </g>
          );
        })}
      </svg>

      {SIGNAL_TREE.map((node) => {
        const merge = mergeTargets.find((target) => target.label === node.label);
        return <SignalTreeNode key={node.label} node={node} local={local} x={node.x} y={node.y}
          fade={focusFade} merge={merge} />;
      })}
      <SignalAttentionGrabbers local={local} fade={focusFade} />

      <div style={{ position: 'absolute', left: cardX, top: cardY, width: cardW, height: cardH, zIndex: 5,
        borderRadius: 26, padding: 0, boxSizing: 'border-box',
        opacity: detailFade * (1 - frameExit * 0.96),
        background: `linear-gradient(180deg, rgba(238,233,224,${0.90 * frameShell}) 0%, rgba(205,197,184,${0.82 * frameShell}) 100%)`,
        border: `1px solid rgba(240,168,94,${0.28 * frameShell})`,
        boxShadow: `0 24px 68px rgba(0,0,0,${0.32 * frameShell}), 0 0 18px rgba(240,168,94,${0.07 * frameShell})`,
        transform: `translateY(${frameExit * 4}px) scale(${0.985 - frameExit * 0.012})`,
        overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: -8 - click * 10, borderRadius: 32,
          border: '1px solid rgba(255,255,255,0.22)', opacity: 0,
          boxShadow: '0 0 0 1px rgba(240,168,94,0.20), 0 0 34px rgba(240,168,94,0.16)' }} />
        <div style={{ position: 'absolute', inset: -2, borderRadius: 28,
          border: '1px solid rgba(255,255,255,0.18)', opacity: 0,
          boxShadow: 'inset 0 0 0 1px rgba(240,168,94,0.18)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0,
          background: 'radial-gradient(ellipse 70% 90% at 18% 34%, rgba(143,191,216,0.24) 0%, rgba(23,19,17,0) 62%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 58,
          opacity: documentUi,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.56) 0%, rgba(255,255,255,0.24) 100%)',
          borderBottom: '1px solid rgba(40,34,30,0.12)' }}>
          <div style={{ position: 'absolute', left: 24, top: 20, display: 'flex', gap: 8 }}>
            {[0, 1, 2].map((dot) => (
              <span key={dot} style={{ width: 9, height: 9, borderRadius: 99,
                background: 'rgba(43,37,32,0.22)' }} />
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, width: 84,
          left: 18 + scanPos * Math.max(410, cardW - 130),
          opacity: scan * 0.26,
          transform: 'skewX(-13deg)',
          background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.16), rgba(240,168,94,0.20), rgba(255,255,255,0))' }} />
        <div style={{ position: 'absolute', left: 38, right: 38, top: 82, bottom: 56,
          opacity: documentUi, transform: `translateY(${frameExit * 8}px)` }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 10,
            display: 'grid', gridTemplateColumns: '1fr', gap: 16, opacity: 0.96 }}>
            {signalEvents.map((event, idx) => {
              const ep = rise(local, SIGNAL_BEAT_FEED + 0.24 + idx * 0.32, 0.78);
              const dkbActivate = idx === 1 ? band(local, dkbActivationStart, rowBridgeStart + 0.92, 0.66) : 0;
              const dkbConfirmed = idx === 1 ? rise(local, dkbActivationStart + 0.22, 0.54) : 0;
              const dkbCovered = idx === 1 ? rise(local, dkbActivationStart + 0.10, 0.42) : 0;
              const inactiveFade = idx !== 1 ? thirdBeatFocus : 0;
              return (
                <div key={event.title} style={{ height: 106, borderRadius: 22,
                  padding: '18px 20px', boxSizing: 'border-box',
                  display: 'grid', gridTemplateColumns: '62px 1fr 92px',
                  columnGap: 18,
                  alignItems: 'center',
                  opacity: ep * (1 - dkbCovered * 0.98) * (1 - inactiveFade * 0.74),
                  transform: `translateX(${idx === 1 ? dkbActivate * 8 : -inactiveFade * 10}px) translateY(${(1 - ep) * 10 + inactiveFade * 3}px) scale(${1 - inactiveFade * 0.018})`,
                  filter: inactiveFade > 0.01 ? `blur(${inactiveFade * 0.8}px)` : 'none',
                  background: event.icon === 'linkedin'
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.56), rgba(255,255,255,0.32))'
                    : event.icon === 'xing'
                      ? 'linear-gradient(135deg, rgba(0,101,103,0.13), rgba(255,255,255,0.28))'
                      : 'linear-gradient(135deg, rgba(247,216,190,0.34), rgba(255,255,255,0.28))',
                  border: `1px solid ${event.color}${idx === 1 ? Math.round(0x38 + dkbActivate * 0x34).toString(16).padStart(2, '0') : '38'}`,
                  boxShadow: idx === 1
                    ? `0 14px 30px rgba(45,39,34,0.09), 0 0 ${18 + dkbActivate * 20}px rgba(184,120,66,${0.07 + dkbActivate * 0.12})`
                    : `0 14px 30px rgba(45,39,34,0.09), 0 0 20px ${event.color}12` }}>
                  <div style={{ width: 58, height: 58,
                    borderRadius: 18, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    background: event.icon === 'linkedin' ? 'rgba(10,102,194,0.10)' : event.icon === 'xing' ? 'rgba(0,101,103,0.13)' : 'rgba(184,120,66,0.13)',
                    border: `1px solid ${event.color}32` }}>
                    {event.icon === 'linkedin'
                      ? <LinkedInMark size={34} />
                      : event.icon === 'xing'
                        ? <XingMark size={34} />
                        : <FinancialTimesMark size={34} />}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: MONO, fontSize: 9.6, letterSpacing: '0.13em',
                      textTransform: 'uppercase', color: 'rgba(45,39,34,0.46)' }}>{event.tag}</div>
                    <div style={{ marginTop: 5, fontFamily: DISPLAY, fontWeight: 780, fontSize: 24,
                      letterSpacing: '-0.012em', color: 'rgba(35,30,27,0.92)', whiteSpace: 'nowrap' }}>{event.title}</div>
                    <div style={{ marginTop: 4, fontFamily: INTER, fontWeight: 680, fontSize: 12.2,
                      lineHeight: 1.12, color: 'rgba(45,39,34,0.54)', whiteSpace: 'nowrap' }}>{event.meta}</div>
                  </div>
                  <div style={{ justifySelf: 'end', height: 28, padding: '0 10px',
                    borderRadius: 999, display: 'inline-flex', alignItems: 'center',
                    position: 'relative', minWidth: 58, justifyContent: 'center',
                    fontFamily: MONO, fontSize: 8.3, letterSpacing: '0.11em',
                    textTransform: 'uppercase', color: event.color,
                    background: `${event.color}${idx === 1 ? Math.round(0x12 + dkbActivate * 0x10).toString(16).padStart(2, '0') : '12'}`,
                    border: `1px solid ${event.color}${idx === 1 ? Math.round(0x2a + dkbActivate * 0x20).toString(16).padStart(2, '0') : '2a'}` }}>
                    <span style={{ opacity: idx === 1 ? 1 - dkbConfirmed : 1,
                      transform: `translateY(${idx === 1 ? -dkbConfirmed * 4 : 0}px)`,
                      display: 'inline-block' }}>
                      Signal
                    </span>
                    {idx === 1 && (
                      <span style={{ position: 'absolute', inset: 0, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        opacity: dkbConfirmed,
                        transform: `translateY(${(1 - dkbConfirmed) * 4}px) scale(${0.86 + dkbConfirmed * 0.14})` }}>
                        <Icon name="check" size={13} color={event.color} sw={2.2} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {(() => {
          const activePulse = band(local, dkbActivationStart + 0.08, SIGNAL_TEAM_PREVIEW_START - 0.16, 0.54);
          const checkIn = rise(local, dkbActivationStart + 0.44, 0.62);
          const statusSweep = Easing.easeInOutCubic(clamp((local - (SIGNAL_BEAT_SELECT + 0.42)) / 1.62, 0, 1));
          const detail = Easing.easeInOutCubic(clamp((rowBridge - 0.18) / 0.82, 0, 1));
          const detailBody = rise(local, rowBridgeStart + 0.72, 1.28);
          const titleLeft = mix(98, 48, detail);
          const titleTop = mix(Math.max(22, bridgeRow.h / 2 - 28), 116, detail);
          const iconSize = mix(58, 74, detail);
          const iconLeft = mix(20, 40, detail);
          const iconTop = mix(Math.max(18, bridgeRow.h / 2 - iconSize / 2), 96, detail);
          const statusTop = mix(Math.max(22, bridgeRow.h / 2 - 16), 28, detail);
          return (
            <div style={{ position: 'absolute', left: bridgeRow.x, top: bridgeRow.y,
              width: bridgeRow.w, height: bridgeRow.h, zIndex: 7,
              borderRadius: mix(22, 28, detail), padding: 0,
              boxSizing: 'border-box', opacity: bridgeRowOp,
              transform: `translateY(${(1 - rowFocus) * 8}px) scale(${1 + rowFocus * 0.006 + detail * 0.006})`,
              transformOrigin: '50% 50%',
              background: `linear-gradient(180deg, rgba(246,240,230,${0.78 + detail * 0.16 + activePulse * 0.012}) 0%, rgba(217,207,193,${0.72 + detail * 0.18}) 100%)`,
              border: `1px solid rgba(184,120,66,${0.30 + activePulse * 0.08 + detail * 0.13})`,
              boxShadow: `0 26px 68px rgba(0,0,0,${0.18 + detail * 0.10}), 0 0 ${16 + activePulse * 14 + detail * 24}px rgba(240,168,94,${0.07 + activePulse * 0.035 + detail * 0.02})`,
              overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: -2, borderRadius: mix(24, 31, detail),
                border: '1px solid rgba(255,255,255,0.26)', opacity: activePulse * (0.34 + pulse * 0.12) + detail * 0.10 }} />
              <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: mix(0, 58, detail),
                opacity: detail,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.20) 100%)',
                borderBottom: '1px solid rgba(45,39,34,0.10)' }}>
                <div style={{ position: 'absolute', left: 24, top: 20, display: 'flex', gap: 8 }}>
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} style={{ width: 9, height: 9, borderRadius: 99,
                      background: 'rgba(45,39,34,0.22)' }} />
                  ))}
                </div>
                <div style={{ position: 'absolute', left: 88, top: 19,
                  fontFamily: MONO, fontSize: 10, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: 'rgba(45,39,34,0.36)', opacity: 0 }}>
                  Signal Detail
                </div>
              </div>
              <div style={{ position: 'absolute', top: 0, bottom: 0, width: 74,
                left: `${Math.max(0, Math.min(1, statusSweep)) * 82}%`,
                opacity: activePulse * (1 - detail * 0.35),
                transform: 'skewX(-14deg)',
                background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.20), rgba(255,255,255,0))' }} />
              <div style={{ position: 'absolute', left: iconLeft, top: iconTop,
                width: iconSize, height: iconSize, borderRadius: mix(18, 22, detail),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 1 - detail * 0.96,
                background: 'rgba(184,120,66,0.14)', border: '1px solid rgba(184,120,66,0.28)',
                boxShadow: `0 10px ${18 + detail * 8}px rgba(184,120,66,0.12)` }}>
                <FinancialTimesMark size={mix(34, 44, detail)} />
              </div>
              <div style={{ position: 'absolute', left: titleLeft, top: titleTop,
                width: bridgeRow.w - titleLeft - mix(70, 46, detail), minWidth: 0 }}>
                <div style={{ fontFamily: MONO, fontSize: mix(9.6, 11.0, detail), letterSpacing: '0.13em',
                  textTransform: 'uppercase', color: 'rgba(45,39,34,0.48)' }}>Financial Times</div>
                <div style={{ marginTop: mix(5, 8, detail), fontFamily: DISPLAY, fontWeight: 805,
                  fontSize: mix(25, 32, detail), lineHeight: 1.02, letterSpacing: '-0.018em',
                  color: 'rgba(35,30,27,0.94)', whiteSpace: 'nowrap' }}>
                  DKB AG wechselt zu AWS Cloud
                </div>
                <div style={{ marginTop: mix(4, 8, detail), fontFamily: INTER, fontWeight: 690,
                  fontSize: mix(12.2, 15, detail), lineHeight: 1.14,
                  color: `rgba(45,39,34,${0.52 + detail * 0.10})`, whiteSpace: 'nowrap' }}>
                  Cloud-Migration erkannt
                </div>
              </div>
              <div style={{ position: 'absolute', right: mix(20, 28, detail), top: statusTop,
                height: mix(28, 34, detail), minWidth: mix(34, 116, detail),
                padding: `0 ${mix(0, 14, detail)}px`, borderRadius: 999,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                fontFamily: MONO, fontSize: mix(8.3, 9.4, detail), letterSpacing: '0.11em',
                textTransform: 'uppercase', color: '#b87842',
                opacity: (0.42 + checkIn * 0.58) * (1 - detail),
                transform: `scale(${0.82 + checkIn * 0.18})`,
                background: `rgba(184,120,66,${0.10 + checkIn * 0.08})`, border: `1px solid rgba(184,120,66,${0.20 + checkIn * 0.22})` }}>
                <Icon name="check" size={mix(12, 14, detail)} color="#b87842" sw={2.2} />
                <span style={{ opacity: detail, maxWidth: mix(0, 70, detail), overflow: 'hidden',
                  whiteSpace: 'nowrap', display: 'inline-block' }}>Signal</span>
              </div>
              <div style={{ position: 'absolute', left: 38, right: 38, top: 218,
                height: 104, opacity: detailBody * detail,
                borderRadius: 20, background: 'rgba(255,255,255,0.28)',
                border: '1px solid rgba(45,39,34,0.08)',
                boxShadow: '0 14px 28px rgba(45,39,34,0.06)' }}>
                <div style={{ position: 'absolute', left: 26, top: 24, width: 230, height: 12,
                  borderRadius: 99, background: 'rgba(45,39,34,0.18)' }} />
                <div style={{ position: 'absolute', left: 26, top: 52, width: 430, height: 10,
                  borderRadius: 99, background: 'rgba(45,39,34,0.11)' }} />
                <div style={{ position: 'absolute', left: 26, top: 74, width: 320, height: 9,
                  borderRadius: 99, background: 'rgba(45,39,34,0.09)' }} />
              </div>
              <div style={{ position: 'absolute', left: 38, right: 38, top: 344,
                height: 92, opacity: detailBody * detail,
                borderRadius: 20, background: 'rgba(255,255,255,0.20)',
                border: '1px solid rgba(45,39,34,0.07)' }}>
                <div style={{ position: 'absolute', left: 26, top: 22, width: 188, height: 10,
                  borderRadius: 99, background: 'rgba(45,39,34,0.14)' }} />
                <div style={{ position: 'absolute', left: 26, top: 48, width: 480, height: 9,
                  borderRadius: 99, background: 'rgba(45,39,34,0.09)' }} />
              </div>
              <div style={{ position: 'absolute', left: 0, bottom: 0, height: mix(2, 3, detail),
                width: `${Math.max(0, Math.min(1, statusSweep * (0.52 + detail * 0.48))) * 100}%`,
                background: 'linear-gradient(90deg, rgba(143,191,216,0.78), rgba(240,168,94,0.86), rgba(232,101,90,0.66))',
                opacity: Math.max(activePulse * 0.86, detail * 0.74) }} />
            </div>
          );
        })()}
    </div>
  );
}

function TeamHandoffPreviews({ local }) {
  const move = Easing.easeInOutCubic(clamp((local - 4.12) / 1.34, 0, 1));
  const fade = 1 - rise(local, 5.00, 0.54);
  const op = band(local, 4.08, 5.48, 0.48) * fade;
  if (op <= 0.001) return null;
  const cards = [
    {
      key: 'skill',
      label: 'Kompetenzprofil',
      title: 'Skill Match',
      color: '#8fbfd8',
      from: { x: 72, y: 198, w: 430, h: 218 },
      to: { x: 34, y: 118, w: 590, h: 390 },
    },
    {
      key: 'setup',
      label: 'Projektbesetzung',
      title: 'Setup Vorschau',
      color: WARM,
      from: { x: 570, y: 198, w: 760, h: 218 },
      to: { x: 760, y: 118, w: 890, h: 470 },
    },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none' }}>
      {cards.map((card, idx) => {
        const x = mix(card.from.x - 22, card.to.x, move);
        const y = mix(card.from.y, card.to.y, move);
        const w = mix(card.from.w, card.to.w, move);
        const h = mix(card.from.h, card.to.h, move);
        const draw = rise(local, 4.18 + idx * 0.10, 0.92);
        const muted = 0.42 + move * 0.18;
        return (
          <div key={card.key} style={{ position: 'absolute', left: x, top: y, width: w, height: h,
            borderRadius: mix(24, 28, move), padding: `${mix(18, 22, move)}px ${mix(20, 24, move)}px`,
            boxSizing: 'border-box',
            background: `linear-gradient(135deg, rgba(255,255,255,${mix(0.045, 0.058, move)}) 0%, rgba(255,255,255,${mix(0.020, 0.028, move)}) 100%)`,
            border: `1px solid rgba(255,255,255,${mix(0.080, 0.105, move)})`,
            boxShadow: `0 ${mix(16, 22, move)}px ${mix(42, 62, move)}px rgba(0,0,0,0.18)`,
            transform: `translateX(${(1 - move) * -34}px) scale(${0.965 + move * 0.035})`,
            transformOrigin: idx === 0 ? '0 45%' : '0 48%' }}>
            <div style={{ fontFamily: MONO, fontSize: mix(9.2, 10.5, move), letterSpacing: '0.15em',
              textTransform: 'uppercase', color: idx === 0 ? `rgba(143,191,216,${muted})` : `rgba(240,168,94,${muted})` }}>
              {card.label}
            </div>
            <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 730,
              fontSize: mix(18, 26, move), color: `rgba(250,250,249,${0.76 + move * 0.16})`,
              letterSpacing: '-0.01em' }}>{card.title}</div>
            {idx === 0 ? (
              <>
                <svg width={mix(178, 318, move)} height={mix(158, 276, move)}
                  viewBox="0 0 318 276"
                  style={{ position: 'absolute', left: mix(26, 40, move), top: mix(58, 98, move),
                    overflow: 'visible', opacity: 0.24 + move * 0.18, filter: `blur(${mix(1.8, 0.6, move)}px)` }}>
                  {[0.25, 0.50, 0.75, 1].map((ratio) => (
                    <circle key={ratio} cx="156" cy="138" r={82 * ratio} fill="none"
                      stroke={ratio === 1 ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.070)'}
                      strokeWidth={ratio === 1 ? 1.2 : 0.85} />
                  ))}
                  <polygon points="156,62 214,108 202,190 156,214 106,190 96,108"
                    fill="rgba(255,255,255,0.050)" stroke="rgba(255,255,255,0.20)"
                    strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <div style={{ position: 'absolute', left: mix(222, 384, move), top: mix(88, 112, move),
                  right: 28, opacity: 1 - move * 0.35 }}>
                  {[0.70, 0.88, 0.58].map((bar, i) => (
                    <div key={`handoff-skill-${i}`} style={{ marginTop: i === 0 ? 0 : 15,
                      width: `${bar * 100}%`, height: 9, borderRadius: 99,
                      transform: `scaleX(${draw})`, transformOrigin: '0 50%',
                      background: 'rgba(255,255,255,0.11)' }} />
                  ))}
                </div>
              </>
            ) : (
              <svg width={Math.max(360, w - 56)} height={Math.max(118, h - 94)}
                viewBox={`0 0 ${Math.max(360, w - 56)} ${Math.max(118, h - 94)}`}
                style={{ position: 'absolute', left: 26, top: mix(74, 110, move), overflow: 'visible', opacity: 0.72 }}>
                {[0, 1, 2, 3].map((row) => {
                  const yy = 24 + row * mix(38, 58, move);
                  const ww = (220 + row * 26) * (0.68 + move * 0.28) * draw;
                  return (
                    <g key={row}>
                      <circle cx="42" cy={yy} r={mix(10, 18, move)}
                        fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.08)" />
                      <rect x={mix(92, 250, move)} y={yy - 5} width={ww} height={mix(8, 10, move)}
                        rx="5" fill={row === 1 ? 'rgba(240,168,94,0.48)' : row === 2 ? 'rgba(232,101,90,0.38)' : 'rgba(143,191,216,0.42)'} />
                      <rect x={mix(494, 610, move)} y={yy - 8} width={mix(46, 72, move)} height={mix(14, 20, move)}
                        rx={mix(7, 10, move)} fill="rgba(255,255,255,0.040)" stroke="rgba(255,255,255,0.055)" />
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TeamMorphModules({ local }) {
  const enter = rise(local, SIGNAL_TEAM_PREVIEW_START - 0.20, 1.36);
  const bridgeGatherLocal = LOGO_BRIDGE_GATHER_START - SIGNAL_START;
  const bundleOut = rise(local, bridgeGatherLocal + 1.05, 1.72);
  const selectedRowSplit = Easing.easeOutCubic(clamp((local - SIGNAL_TEAM_PREVIEW_START) / 1.72, 0, 1));
  const previewVisible = Easing.easeInOutCubic(clamp((selectedRowSplit - 0.48) / 0.52, 0, 1));
  const leftMorph = Easing.easeInOutCubic(clamp((local - SIGNAL_TEAM_PROFILE_STAGE_START) / SIGNAL_TEAM_PROFILE_STAGE_DUR, 0, 1));
  const rightMorph = Easing.easeInOutCubic(clamp((local - SIGNAL_TEAM_STAFFING_STAGE_START) / SIGNAL_TEAM_STAFFING_STAGE_DUR, 0, 1));
  const rightStageReveal = rise(local, SIGNAL_TEAM_STAFFING_STAGE_START - 0.20, 0.90);
  const stageMorph = Math.max(leftMorph, rightMorph);
  const leftDetail = rise(local, SIGNAL_TEAM_DETAIL_START, 2.10);
  const rightDetail = rise(local, SIGNAL_TEAM_STAFFING_STAGE_START + 1.05, 2.05);
  const detail = Math.max(leftDetail, rightDetail);
  const draw = rise(local, SIGNAL_TEAM_DRAW_START, 2.20);
  const rightDraw = rise(local, SIGNAL_TEAM_STAFFING_STAGE_START + 1.16, 2.08);
  const profileBeat = band(local, SIGNAL_TEAM_PROFILE_STAGE_START + 0.16, SIGNAL_TEAM_STAFFING_STAGE_START - 0.18, 0.52);
  const staffingBeat = band(local, SIGNAL_TEAM_STAFFING_STAGE_START + 0.18, SIGNAL_TEAM_LIST_START - 0.18, 0.52);
  const matchBeat = band(local, SIGNAL_TEAM_LIST_START + 0.20, LOGO_BRIDGE_START - SIGNAL_START - 0.20, 0.52);
  const rowOrigin = { x: 260, y: 104, w: 740, h: 540 };
  const leftPreview = { x: 126, y: 126, w: 430, h: 218 };
  const rightPreview = { x: 856, y: 126, w: 506, h: 218 };
  const fromRow = (to) => ({
    x: mix(rowOrigin.x, to.x, selectedRowSplit),
    y: mix(rowOrigin.y, to.y, selectedRowSplit),
    w: mix(rowOrigin.w, to.w, selectedRowSplit),
    h: mix(rowOrigin.h, to.h, selectedRowSplit),
  });
  const leftFrom = fromRow(leftPreview);
  const leftTo = { x: 112, y: -44, w: 654, h: 430 };
  const rightFrom = fromRow(rightPreview);
  const rightTo = { x: 962, y: -44, w: 612, h: 452 };
  const place = (from, to, phase) => ({
    left: mix(from.x, to.x, phase),
    top: mix(from.y, to.y, phase),
    width: mix(from.w, to.w, phase),
    height: mix(from.h, to.h, phase),
  });
  const left = place(leftFrom, leftTo, leftMorph);
  const right = place(rightFrom, rightTo, rightMorph);
  const leftPanelBgFade = 1 - Easing.easeInOutCubic(clamp((leftMorph - 0.86) / 0.14, 0, 1));
  const rightPanelBgFade = 1 - Easing.easeInOutCubic(clamp((rightMorph - 0.86) / 0.14, 0, 1));
  const graphCx = mix(78, 184, leftMorph);
  const graphCy = mix(80, 140, leftMorph);
  const graphR = mix(42, 102, leftMorph);
  const profile = [
    { short: 'AZR', value: 0.92, color: '#8fbfd8' },
    { short: 'SEC', value: 0.88, color: WARM },
    { short: 'SOC', value: 0.84, color: WARM },
    { short: 'IAC', value: 0.78, color: '#e8655a' },
    { short: 'DEL', value: 0.82, color: '#d69a4d' },
    { short: 'CMP', value: 0.76, color: '#c65bb0' },
  ];
  const axes = profile.map((skill, i) => {
    const angle = -Math.PI / 2 + i * (Math.PI * 2 / profile.length);
    const valueR = graphR * skill.value * draw;
    return {
      ...skill,
      x: graphCx + Math.cos(angle) * graphR,
      y: graphCy + Math.sin(angle) * graphR,
      vx: graphCx + Math.cos(angle) * valueR,
      vy: graphCy + Math.sin(angle) * valueR,
      lx: graphCx + Math.cos(angle) * (graphR + 18),
      ly: graphCy + Math.sin(angle) * (graphR + 18),
    };
  });
  const valuePoints = axes.map((a) => `${a.vx.toFixed(1)},${a.vy.toFixed(1)}`).join(' ');
  const productIcons = [
    { k: 'Azure', src: 'assets/tech-icons/azure.svg', color: '#8fbfd8', x: 106, y: 18, size: 38 },
    { k: 'Sentinel', src: 'assets/tech-icons/microsoft-defender.svg', color: WARM, x: 22, y: 108, size: 38 },
    { k: 'Terraform', src: 'assets/tech-icons/terraform.svg', color: '#e8655a', x: 190, y: 108, size: 36 },
    { k: 'Kubernetes', src: 'assets/tech-icons/kubernetes.svg', color: '#c65bb0', x: 106, y: 198, size: 38 },
  ];
  const roles = [
    { initials: 'SA', name: 'Sr. Architect - Max Muster', fit: '96%', focus: 'Azure Security', certs: ['AZ-500'],
      color: '#8fbfd8', y: 118, start: 0.08, span: 0.34, pt: '2 PT', avatar: 0, skin: '#d7ad86', hair: '#3b2a24' },
    { initials: 'SE', name: 'Sec. Engineer - Lena Weber', fit: '91%', focus: 'Sentinel / SOC', certs: ['SC-200'],
      color: WARM, y: 176, start: 0.18, span: 0.36, pt: '2 PT', avatar: 1, skin: '#c9916c', hair: '#2b2425' },
    { initials: 'PE', name: 'Platform Eng. - Jonas Klein', fit: '84%', focus: 'Terraform / AKS', certs: [],
      color: '#e8655a', y: 234, start: 0.38, span: 0.30, pt: '2 PT', avatar: 2, skin: '#e1bd93', hair: '#5a382d' },
    { initials: 'DL', name: 'Delivery Lead - Nora Schulz', fit: '78%', focus: 'Delivery Risk', certs: [],
      color: '#c65bb0', y: 292, start: 0.02, span: 0.22, pt: '1 PT', avatar: 1, skin: '#cfa17f', hair: '#352728' },
  ];
  const matchedConsultants = roles.slice(0, 3);
  const staffingRows = roles.slice(0, 2).map((person, i) => ({
    ...person,
    y: i === 0 ? 130 : 244,
    start: i === 0 ? 0.08 : 0.22,
    span: i === 0 ? 0.42 : 0.44,
  }));
  const listP = rise(local, SIGNAL_TEAM_LIST_START, 1.18);
  const matchT = () => TEAM_MATCH_START_LOCAL;
  const placeholder = 1 - leftDetail;
  const divider = rise(local, SIGNAL_TEAM_STAFFING_STAGE_START + 0.32, 1.28) * rightMorph;
  const dividerX = left.left + left.width + 46;
  const dividerW = Math.max(0, right.left - dividerX - 46);
  const dividerCenterX = dividerX + dividerW / 2;
  const dividerY = mix(244, Math.min(left.top + 26, right.top + 18), stageMorph);
  const dividerH = mix(104, Math.max(210, Math.min(left.height - 52, right.height - 90)), stageMorph);
  const rightSvgW = Math.max(548, right.width);
  const rightSvgH = Math.max(140, right.height);
  const timelineX1 = mix(82, 108, rightMorph);
  const timelineX2 = mix(rightSvgW - 74, rightSvgW - 66, rightMorph);
  const timelineSpan = mix(260, 330, rightMorph);
  const capacityX = mix(rightSvgW - 86, rightSvgW - 78, rightMorph);
  const capacityW = mix(58, 72, rightMorph);
  const capacityY = mix(88, 114, rightMorph);
  const capacityH = mix(100, 178, rightMorph);
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: enter * (1 - bundleOut * 0.78),
      pointerEvents: 'none', zIndex: 8,
      transform: `scale(${1 - bundleOut * 0.026})`,
      transformOrigin: '50% 44%',
      filter: `blur(${bundleOut * 1.5}px)` }}>
      {dividerW > 12 && (
        <div style={{ position: 'absolute', left: dividerCenterX, top: dividerY, width: 2, height: dividerH,
          opacity: divider, transform: `scaleY(${divider})`, transformOrigin: '50% 50%',
          background: 'linear-gradient(180deg, rgba(143,191,216,0.56) 0%, rgba(240,168,94,0.58) 54%, rgba(232,101,90,0.42) 100%)',
          boxShadow: '0 0 16px rgba(143,191,216,0.16)' }}>
          <span style={{ position: 'absolute', left: -3, top: -4, width: 8, height: 8,
            borderRadius: 99, background: '#8fbfd8', opacity: 0.72 }} />
          <span style={{ position: 'absolute', left: -3, bottom: -4, width: 8, height: 8,
            borderRadius: 99, background: WARM, opacity: 0.72 }} />
        </div>
      )}
      <div style={{ position: 'absolute', ...left, borderRadius: mix(24, 28, leftMorph),
        opacity: previewVisible,
        padding: `${mix(18, 20, leftMorph)}px ${mix(20, 22, leftMorph)}px`, boxSizing: 'border-box',
        transform: `translateY(${(1 - enter) * 18}px) scale(${1 + profileBeat * 0.012})`,
        transformOrigin: '44% 48%',
        background: `linear-gradient(135deg, rgba(255,255,255,${0.060 * leftPanelBgFade}) 0%, rgba(255,255,255,${0.028 * leftPanelBgFade}) 100%)`,
        border: `1px solid rgba(255,255,255,${0.105 * leftPanelBgFade + profileBeat * 0.055})`,
        boxShadow: `0 22px 58px rgba(0,0,0,${0.20 * leftPanelBgFade}), 0 0 ${profileBeat * 28}px rgba(143,191,216,0.12)` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: DISPLAY, fontSize: mix(23, 42, leftMorph), fontWeight: 790,
              color: TEXT, letterSpacing: '-0.024em', lineHeight: 0.98 }}>Kompetenzprofil</div>
            <div style={{ marginTop: 11, width: mix(82, 160, leftMorph), height: 2, borderRadius: 999,
              background: 'linear-gradient(90deg, #8fbfd8, rgba(240,168,94,0.68), rgba(232,101,90,0.20))',
              opacity: 0.68 }} />
          </div>
        </div>
        <svg width={Math.max(250, left.width - 44)} height={Math.max(158, left.height - 92)}
          viewBox={`0 0 ${Math.max(250, left.width - 44)} ${Math.max(158, left.height - 92)}`}
          style={{ position: 'absolute', left: mix(26, 44, leftMorph), top: mix(66, 94, leftMorph), overflow: 'visible',
            filter: `blur(${placeholder * 1.25}px) saturate(${0.28 + leftDetail * 0.72})` }}>
          <defs>
            <radialGradient id="team-morph-profile-fill" cx="50%" cy="50%" r="58%">
              <stop offset="0" stopColor="rgba(143,191,216,0.34)" />
              <stop offset="0.58" stopColor="rgba(240,168,94,0.24)" />
              <stop offset="1" stopColor="rgba(232,101,90,0.18)" />
            </radialGradient>
          </defs>
          {[0.25, 0.50, 0.75, 1].map((ratio) => (
            <circle key={ratio} cx={graphCx} cy={graphCy} r={graphR * ratio} fill="none"
              stroke={ratio === 1 ? 'rgba(255,255,255,0.23)' : 'rgba(255,255,255,0.085)'}
              strokeWidth={ratio === 1 ? 1.4 : 0.9} opacity={0.30 + leftMorph * 0.46 + leftDetail * 0.24} />
          ))}
          {axes.map((axis) => (
            <g key={axis.short} opacity={0.18 + leftDetail * 0.82}>
              <line x1={graphCx} y1={graphCy} x2={axis.x} y2={axis.y}
                stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
              <text x={axis.lx} y={axis.ly + 4}
                textAnchor={axis.lx < graphCx - 12 ? 'end' : axis.lx > graphCx + 12 ? 'start' : 'middle'}
                fontFamily={MONO} fontSize="10.6" letterSpacing="0.75"
                fill={`rgba(250,250,249,${0.18 + leftDetail * 0.48})`}>{axis.short}</text>
            </g>
          ))}
          <polygon points={valuePoints} fill="url(#team-morph-profile-fill)" stroke="rgba(232,91,132,0.95)"
            strokeWidth={mix(1.8, 2.7, leftMorph)} strokeLinejoin="round" opacity={0.18 + leftDetail * 0.72}
            style={{ filter: `drop-shadow(0 0 ${2 + leftDetail * 7}px rgba(232,91,132,${0.08 + leftDetail * 0.24}))` }} />
          {axes.map((axis) => (
            <circle key={`${axis.short}-value`} cx={axis.vx} cy={axis.vy} r={mix(3.1, 4.4, leftMorph)}
              fill={axis.color} stroke="rgba(23,19,17,0.92)" strokeWidth="2" opacity={draw} />
          ))}
          <circle cx={graphCx} cy={graphCy} r="3.6" fill="rgba(255,255,255,0.20)" opacity={leftDetail} />
        </svg>
        <div style={{ position: 'absolute', left: mix(224, 394, leftMorph), top: mix(92, 94, leftMorph),
          width: 282, height: 286, opacity: leftDetail }}>
          <svg width="282" height="286" viewBox="0 0 282 286"
            style={{ position: 'absolute', inset: 0, overflow: 'visible', opacity: 0.82 }}>
            <path d="M 141 44 V 128 M 54 140 L 141 128 L 228 140 M 141 128 V 220"
              fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="141" cy="128" r="5.5" fill="rgba(240,168,94,0.38)" />
            <text x="141" y="135" textAnchor="middle" fontFamily={MONO} fontSize="9"
              letterSpacing="1.1" fill="rgba(250,250,249,0.42)">STACK</text>
          </svg>
          {productIcons.map((product, i) => {
            const ip = rise(local, SIGNAL_TEAM_PROFILE_STAGE_START + 2.30 + i * 0.30, 1.00);
            return (
              <div key={product.k} style={{ position: 'absolute', left: product.x, top: product.y,
                width: 62, height: 62, borderRadius: 19, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                opacity: ip, transform: `translateY(${(1 - ip) * 10}px)`,
                background: `${product.color}12`, border: `1px solid ${product.color}2e` }}>
                <img src={product.src} alt="" style={{ width: product.size, height: product.size,
                  objectFit: 'contain', display: 'block' }} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'absolute', ...right, borderRadius: mix(24, 28, rightMorph),
        opacity: previewVisible * rightStageReveal,
        padding: `${mix(18, 0, rightMorph)}px ${mix(22, 0, rightMorph)}px`, boxSizing: 'border-box',
        transform: `translateY(${(1 - enter) * 18}px) scale(${1 + staffingBeat * 0.010})`,
        transformOrigin: '54% 46%',
        background: `linear-gradient(135deg, rgba(255,255,255,${0.060 * rightPanelBgFade}) 0%, rgba(255,255,255,${0.026 * rightPanelBgFade}) 100%)`,
        border: `1px solid rgba(255,255,255,${0.105 * rightPanelBgFade + staffingBeat * 0.050})`,
        boxShadow: `0 22px 58px rgba(0,0,0,${0.20 * rightPanelBgFade}), 0 0 ${staffingBeat * 26}px rgba(240,168,94,0.10)` }}>
        <div style={{ position: 'absolute', left: mix(22, 6, rightMorph), top: mix(18, 20, rightMorph) }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 790,
            fontSize: mix(23, 42, rightMorph), color: TEXT, letterSpacing: '-0.026em', lineHeight: 0.98 }}>Projektbesetzung</div>
          <div style={{ marginTop: 11, width: mix(86, 166, rightMorph), height: 2, borderRadius: 999,
            background: 'linear-gradient(90deg, #8fbfd8, rgba(240,168,94,0.68), rgba(232,101,90,0.20))',
            opacity: 0.68 }} />
        </div>
        <div style={{ position: 'absolute', right: mix(22, 80, rightMorph), top: mix(18, 16, rightMorph), height: 30,
          borderRadius: 999, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: 'rgba(250,250,249,0.74)',
          background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8',
            boxShadow: '0 0 9px rgba(143,191,216,0.34)' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span style={{ filter: `blur(${(1 - rightDetail) * 3.2}px)`, opacity: 0.32 + rightDetail * 0.68 }}>7</span>
            <span>PT</span>
            <span style={{ opacity: 0.66 }}>/</span>
            <span style={{ filter: `blur(${(1 - rightDetail) * 3.2}px)`, opacity: 0.32 + rightDetail * 0.68 }}>56</span>
            <span>h</span>
          </span>
        </div>
        <svg width={rightSvgW} height={rightSvgH}
          viewBox={`0 0 ${rightSvgW} ${rightSvgH}`}
          style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
          <defs>
            <linearGradient id="team-morph-axis" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(143,191,216,0.08)" />
              <stop offset="0.5" stopColor="rgba(240,168,94,0.22)" />
              <stop offset="1" stopColor="rgba(232,101,90,0.18)" />
            </linearGradient>
          </defs>
          <rect x={capacityX} y={capacityY} width={capacityW}
            height={capacityH} rx={mix(18, 22, rightMorph)}
            fill="rgba(232,101,90,0.035)" stroke="rgba(232,101,90,0.075)" />
          <path d={`M ${timelineX1} ${mix(104, 112, rightMorph)} H ${timelineX2}`}
            stroke="url(#team-morph-axis)" strokeWidth="2" strokeLinecap="round" opacity={rightDetail} />
          <circle cx={capacityX} cy={mix(104, 112, rightMorph)} r={5.5} fill="#e8655a"
            stroke="rgba(23,19,17,0.95)" strokeWidth="2" opacity={rightDetail}
            style={{ filter: 'drop-shadow(0 0 7px rgba(232,101,90,0.42))' }} />
          {staffingRows.map((person, i) => {
            const rowP = rightDraw;
            const activity = band(local, matchT(i), matchT(i) + 0.98, 0.24) * rightDetail;
            const y = mix(104 + i * 60, person.y + 18, rightMorph);
            const x1 = timelineX1;
            const x2 = mix(82 + (232 + i * 42) * 0.35, timelineX1 + 24 + person.start * timelineSpan, rightMorph);
            const w = mix(232 + i * 42, person.span * timelineSpan, rightMorph) * rowP;
            const barH = mix(10, 14, rightMorph);
            return (
              <g key={`${person.initials}-line`} opacity={Math.max(enter * 0.5, rowP)}>
                <path d={`M ${x1} ${y} H ${timelineX2}`} stroke={activity > 0.05 ? `${person.color}42` : 'rgba(255,255,255,0.055)'}
                  strokeWidth="1.4" strokeLinecap="round" />
                <circle cx={mix(42, 4, rightMorph)} cy={y} r={mix(12, 19, rightMorph)}
                  fill={`${person.color}16`} stroke={`${person.color}34`}
                  opacity={(0.42 + rightMorph * 0.20 + activity * 0.34) * (1 - rightDetail * 0.86)} />
                <rect x={x2} y={y - barH / 2} width={w} height={barH}
                  rx={barH / 2} fill={person.color} opacity={0.54 + activity * 0.28}
                  style={{ filter: `drop-shadow(0 0 ${activity * 12}px ${person.color}66)` }} />
              </g>
            );
          })}
        </svg>
        {staffingRows.map((person, i) => {
          const rowP = rightDraw;
          const selectedP = band(local, matchT(i), matchT(i) + 0.98, 0.24) * rightDetail;
          const x2 = timelineX1 + 24 + person.start * timelineSpan;
          const w = person.span * timelineSpan;
          const y = person.y + 18;
          return (
            <React.Fragment key={`${person.initials}-overlay`}>
              <div style={{ position: 'absolute', left: 4, top: y - 19,
                width: 40, height: 40, borderRadius: 999, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                opacity: rightDetail * rowP,
                transform: `translateY(${-selectedP * 8}px) scale(${1 + selectedP * 0.16})`,
                boxShadow: `0 0 ${selectedP * 26}px ${person.color}24` }}>
                <ConsultantAvatar person={person} size={40} selected={selectedP} muted={0} />
              </div>
              <div style={{ position: 'absolute', left: x2 + w + 12, top: y - 11,
                height: 24, display: 'flex', alignItems: 'center', gap: 7,
                opacity: rightDetail * rowP,
                transform: `translateX(${selectedP * 4}px)` }}>
                <span style={{ height: 23, minWidth: 42, borderRadius: 999, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', padding: '0 9px', boxSizing: 'border-box',
                  fontFamily: MONO, fontSize: 10, letterSpacing: '0.06em', color: person.color,
                  background: `${person.color}${selectedP > 0.2 ? '18' : '10'}`,
                  border: `1px solid ${person.color}${selectedP > 0.2 ? '42' : '20'}` }}>{person.pt}</span>
                {(person.certs || []).map((cert) => (
                  <CertificationBadge key={cert} cert={cert} color={person.color} mini />
                ))}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <TeamAttentionGrabbers local={local} fade={previewVisible} />

      <div style={{ position: 'absolute', left: 1044, top: 552, width: 560, height: 206,
        opacity: rightDetail * listP,
        transform: `translateY(${(1 - listP) * 22}px) scale(${0.986 + listP * 0.014 + matchBeat * 0.010})`,
        transformOrigin: '50% 0%', boxSizing: 'border-box' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, display: 'flex',
          flexDirection: 'column', gap: 10 }}>
          {matchedConsultants.map((person, i) => {
            const cp = rise(local, matchT(i) + 0.20, 1.02);
            const selectedP = band(local, matchT(i) + 0.18, matchT(i) + 1.30, 0.30);
            const shortName = person.name
              .replace('Sr. Architect - Max Muster', 'Sr. Architect - Max')
              .replace('Sec. Engineer - Lena Weber', 'Sec. Engineer - Lena')
              .replace('Platform Eng. - Jonas Klein', 'Platform Eng. - Jonas');
            return (
              <div key={person.name} style={{ height: 60, borderRadius: 18,
                padding: '8px 11px', boxSizing: 'border-box',
                display: 'grid', gridTemplateColumns: '50px 1fr 118px', columnGap: 13,
                alignItems: 'center', opacity: cp,
                transform: `translateX(${(1 - cp) * 28}px) translateY(${-selectedP * 3}px) scale(${1 + selectedP * 0.018})`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.020) 100%)',
                border: `1px solid ${person.color}${selectedP > 0.1 ? '46' : '22'}`,
                boxShadow: `0 18px 38px rgba(0,0,0,0.20), 0 0 ${selectedP * 24}px ${person.color}1f` }}>
                <div style={{ width: 44, height: 44, borderRadius: 999, display: 'flex',
                  alignItems: 'center', justifyContent: 'center' }}>
                  <ConsultantAvatar person={person} size={44} selected={selectedP} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{ fontFamily: DISPLAY, fontWeight: 755, fontSize: 20,
                      color: TEXT, letterSpacing: '-0.014em', whiteSpace: 'nowrap',
                      overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {shortName}
                    </span>
                  </div>
                </div>
                <div style={{ position: 'relative', height: 36 }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 17, height: 2,
                    borderRadius: 99, background: 'rgba(255,255,255,0.060)' }} />
                  <div style={{ position: 'absolute', left: `${person.start * 100}%`, top: 12,
                    width: `${person.span * 100}%`, height: 10, borderRadius: 99,
                    background: person.color, opacity: 0.62,
                    transform: `scaleX(${cp})`, transformOrigin: '0 50%' }} />
                  <span style={{ position: 'absolute', right: 0, top: 12, width: 11, height: 11,
                    borderRadius: 99, background: person.color, opacity: 0.72,
                    boxShadow: `0 0 ${8 + selectedP * 8}px ${person.color}66` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TeamProjectBundleHandoff({ local }) {
  const start = 15.12;
  const gather = Easing.easeInOutCubic(clamp((local - start) / 1.16, 0, 1));
  const project = rise(local, start + 0.52, 0.72);
  const lock = rise(local, start + 1.42, 0.52);
  const exit = rise(local, start + 2.02, 0.44);
  const op = band(local, start - 0.08, 17.42, 0.36);
  if (op <= 0.001) return null;

  const cx = mix(842, 820, exit);
  const cy = mix(420, 404, exit);
  const bundleScale = (0.70 + project * 0.30 + lock * 0.07) * (1 - exit * 0.12);
  const sources = [
    { k: 'profile', icon: 'target', color: '#8fbfd8', x: 360, y: 314, label: 'Skill' },
    { k: 'stack', icon: 'azure', color: WARM, x: 684, y: 336, label: 'Stack' },
    { k: 'staffing', icon: 'users', color: '#d69a4d', x: 1166, y: 306, label: 'Team' },
    { k: 'timeline', icon: 'clock', color: '#e8655a', x: 1358, y: 462, label: 'Risiko' },
    { k: 'consultants', icon: 'briefcase', color: '#c65bb0', x: 834, y: 678, label: 'People' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 30 }}>
      <div style={{ position: 'absolute', inset: -60,
        background: `radial-gradient(circle at ${cx}px ${cy}px, rgba(232,145,58,${0.11 * project}) 0%, rgba(143,191,216,${0.050 * project}) 22%, rgba(23,19,17,0) 54%)` }} />
      <svg width="1660" height="800" viewBox="0 0 1660 800"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <filter id="team-bundle-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {sources.map((source, i) => {
          const lineIn = rise(local, start + 0.14 + i * 0.07, 0.58);
          const lineOut = rise(local, start + 1.10 + i * 0.05, 0.42);
          const midX = mix(source.x, cx, gather);
          const midY = mix(source.y, cy, gather);
          const path = `M ${source.x} ${source.y} L ${cx} ${cy}`;
          const dash = 820;
          return (
            <g key={`${source.k}-line`} opacity={(lineIn * (1 - lineOut * 0.62))}>
              <path d={path} stroke={source.color} strokeWidth="2.2" strokeLinecap="round"
                strokeDasharray={dash} strokeDashoffset={dash * (1 - lineIn)}
                opacity="0.34" filter="url(#team-bundle-glow)" />
              <circle cx={midX} cy={midY} r={3.8 + lineIn * 2.2}
                fill={source.color} opacity={0.42 + lineIn * 0.30} />
            </g>
          );
        })}
      </svg>

      {sources.map((source, i) => {
        const inP = rise(local, start + 0.02 + i * 0.08, 0.46);
        const consume = rise(local, start + 0.46 + i * 0.08, 0.94);
        const disappear = rise(local, start + 1.02 + i * 0.06, 0.36);
        const x = mix(source.x, cx, Easing.easeInOutCubic(consume));
        const y = mix(source.y, cy, Easing.easeInOutCubic(consume));
        const size = mix(78, 30, consume);
        return (
          <div key={`${source.k}-chip`} style={{ position: 'absolute',
            left: x - size / 2, top: y - size / 2, width: size, height: size,
            opacity: inP * (1 - disappear),
            transform: `scale(${1 + inP * 0.04 - consume * 0.18})`,
            borderRadius: mix(24, 12, consume), display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${source.color}22 0%, rgba(255,255,255,0.045) 100%)`,
            border: `1px solid ${source.color}${consume > 0.72 ? '66' : '42'}`,
            boxShadow: `0 20px 42px rgba(0,0,0,0.24), 0 0 ${18 + consume * 18}px ${source.color}25` }}>
            <Icon name={source.icon} size={Math.max(18, size * 0.42)} color={source.color} sw={1.95} />
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: cx - 180, top: cy - 94,
        width: 360, height: 188, borderRadius: 40, opacity: project,
        transform: `translateY(${(1 - project) * 20 - exit * 20}px) scale(${bundleScale})`,
        transformOrigin: '50% 50%',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.060) 0%, rgba(255,255,255,0.024) 100%)',
        border: `1px solid rgba(240,168,94,${0.16 + lock * 0.18})`,
        boxShadow: `0 34px 92px rgba(0,0,0,0.30), 0 0 ${28 + lock * 34}px rgba(240,168,94,0.17), inset 0 1px 0 rgba(255,255,255,0.10)` }}>
        <div style={{ position: 'absolute', left: '50%', top: 48, width: 260, height: 260 * LOGO_AR,
          transform: `translateX(-50%) scale(${0.96 + lock * 0.04})`,
          filter: `drop-shadow(0 18px 46px rgba(0,0,0,0.36)) drop-shadow(0 0 ${14 + lock * 18}px rgba(240,168,94,0.22))` }}>
          <img src={LOGO} alt="Consultry" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ position: 'absolute', left: 28, right: 28, top: 116, textAlign: 'center',
          opacity: lock }}>
          <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(250,250,249,0.58)' }}>
            Kontext wird gebündelt
          </div>
        </div>
        <div style={{ position: 'absolute', left: 34, right: 34, bottom: 19, height: 3,
          borderRadius: 999, overflow: 'hidden', background: 'rgba(255,255,255,0.075)' }}>
          <div style={{ width: `${Math.round(lock * 100)}%`, height: '100%',
            borderRadius: 999, background: 'linear-gradient(90deg, #8fbfd8, #f0a85e, #e8655a)',
            boxShadow: '0 0 14px rgba(240,168,94,0.35)' }} />
        </div>
      </div>

      <div style={{ position: 'absolute', left: cx - 210, top: cy + 128, width: 420,
        opacity: lock * (1 - exit), textAlign: 'center',
        transform: `translateY(${(1 - lock) * 10}px)` }}>
        <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(250,250,249,0.54)' }}>
          Signal · Team · Kapazität · Risiko
        </div>
      </div>
    </div>
  );
}

function BridgeSourceVisual({ source, w, h, consume = 0 }) {
  const inner = Math.max(18, Math.min(w, h) * 0.62);
  if (source.src) {
    return (
      <img src={source.src} alt="" style={{ width: inner, height: inner,
        objectFit: 'contain', display: 'block',
        filter: `drop-shadow(0 5px 12px ${source.color}22)` }} />
    );
  }
  if (source.cert) {
    const compact = clamp(consume * 1.4, 0, 1);
    return (
      <div style={{ width: Math.max(28, w - 14), height: Math.max(24, h - 12),
        borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 6 * (1 - compact), overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(0,100,181,0.18), rgba(0,32,80,0.11))' }}>
        <img src={CERT_BADGE_SRC} alt="" style={{ width: Math.max(18, Math.min(28, h - 10)),
          height: Math.max(18, Math.min(28, h - 10)), objectFit: 'contain', display: 'block' }} />
        <span style={{ fontFamily: MONO, fontWeight: 780, fontSize: Math.max(0, 10.2 * (1 - compact)),
          letterSpacing: '0.045em', color: 'rgba(250,250,249,0.86)',
          opacity: 1 - compact, whiteSpace: 'nowrap' }}>{source.cert}</span>
      </div>
    );
  }
  if (source.person) {
    return <ConsultantAvatar person={source.person} size={inner * 1.08} selected={1 - consume * 0.4} />;
  }
  return <Icon name={source.icon} size={inner} color={source.color} sw={1.95} />;
}

function PersistentProjectBundleBridge() {
  const t = useTime();
  const start = LOGO_BRIDGE_START;
  const end = LOGO_BRIDGE_END;
  const op = band(t, start, end, 0.42);
  if (op <= 0.001) return null;

  const gatherStart = LOGO_BRIDGE_GATHER_START; // logo finishes its top-left -> center move first
  const bundleHoldStart = LOGO_BRIDGE_BUNDLE_HOLD_START;
  const offerStart = LOGO_BRIDGE_OFFER_START;
  const consumeTargetX = LOGO_BRIDGE_CENTER_X;
  const consumeTargetY = LOGO_BRIDGE_CENTER_Y;
  const absorb = Easing.easeInOutCubic(clamp((t - (gatherStart + 0.22)) / 1.86, 0, 1));
  const bundled = rise(t, gatherStart + 1.50, 0.76);
  const cooking = band(t, bundleHoldStart, offerStart + 0.28, 0.42);
  const offer = rise(t, offerStart + 0.08, 1.12);
  const flow = rise(t, offerStart + 0.76, 1.02);
  const result = rise(t, offerStart + 1.42, 0.82);
  const out = rise(t, end - 0.78, 0.72);
  const sourceDissolve = Easing.easeInOutCubic(clamp((t - (gatherStart + 0.34)) / 2.46, 0, 1));
  const logoX = mix(consumeTargetX, LOGO_BRIDGE_RESULT_X, offer);
  const logoY = mix(consumeTargetY, LOGO_BRIDGE_RESULT_Y, offer);
  const markSize = mix(LOGO_BRIDGE_MARK_SIZE, LOGO_BRIDGE_RESULT_SIZE, offer);
  const logoPulse = band(t, gatherStart + 0.92, offerStart + 0.48, 0.52);
  const sceneDetransition = sourceDissolve;
  const resultX = logoX + markSize / 2 + 134;
  const resultY = logoY - 76;
  const resultW = 548;
  const flowStartX = logoX + markSize / 2 + 38;
  const flowStartY = logoY;
  const flowEndX = resultX - 26;
  const flowEndY = resultY + 76;
  const packetX = mix(flowStartX, flowEndX, flow);
  const packetY = mix(flowStartY, flowEndY, flow);
  const thinkingDot = (i) => 0.46 + 0.54 * ((Math.sin((t - bundleHoldStart) * 6.4 - i * 0.86) + 1) / 2);
  const offerModulesTop = resultY + 196;
  const offerModules = [
    { title: 'Nurtured CVs', sub: 'passende Expertenprofile', icon: 'users', color: '#8fbfd8', x: resultX - 408, w: 300 },
    { title: 'Leistungen', sub: 'Scope und Leistungsbundle', icon: 'briefcase', color: WARM, x: resultX - 72, w: 300 },
    { title: 'Konditionen', sub: 'bereit zur Review', icon: 'euro', color: '#e8655a', x: resultX + 264, w: 300 },
  ];
  const sources = [
    { src: 'assets/tech-icons/azure.svg', color: '#8fbfd8', x: 676, y: 438 },
    { src: 'assets/tech-icons/microsoft-defender.svg', color: WARM, x: 622, y: 548 },
    { src: 'assets/tech-icons/terraform.svg', color: '#e8655a', x: 792, y: 548 },
    { cert: 'AZ-500', color: '#8fbfd8', x: 1392, y: 436, w: 112, h: 42 },
    { cert: 'SC-200', color: WARM, x: 1452, y: 492, w: 112, h: 42 },
    { person: { color: '#8fbfd8', skin: '#d7ad86', hair: '#3b2a24', avatar: 0 }, color: '#c65bb0', x: 330, y: 864 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 42 }}>
      <div style={{ position: 'absolute', inset: 0,
        opacity: sceneDetransition * (0.055 + bundled * 0.22),
        background: 'rgba(23,19,17,0.42)',
        backdropFilter: `blur(${sceneDetransition * (1.2 + bundled * 5.8)}px)`,
        WebkitBackdropFilter: `blur(${sceneDetransition * (1.2 + bundled * 5.8)}px)` }} />
      <div style={{ position: 'absolute', inset: 0,
        opacity: 0.30 + sceneDetransition * 0.70,
        background: `radial-gradient(circle at ${logoX}px ${logoY}px, rgba(240,168,94,${0.09 + bundled * 0.12}) 0%, rgba(143,191,216,0.060) 22%, rgba(23,19,17,0) 58%)` }} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="bridge-result-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8fbfd8" stopOpacity="0.82" />
            <stop offset="58%" stopColor="#f0a85e" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#e8655a" stopOpacity="0.82" />
          </linearGradient>
          <filter id="persistent-project-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {sources.map((source, i) => {
          const p = rise(t, gatherStart + 0.08 + i * 0.08, 0.76);
          const fade = 1 - rise(t, gatherStart + 1.62 + i * 0.05, 0.46);
          return (
            <g key={`persistent-logo-line-${i}`} opacity={p * fade}>
              <path d={`M ${source.x} ${source.y} L ${consumeTargetX} ${consumeTargetY}`}
                fill="none" stroke={source.color} strokeWidth="2.3" strokeLinecap="round"
                strokeDasharray="900" strokeDashoffset={(1 - p) * 900}
                opacity="0.40" filter="url(#persistent-project-glow)" />
              <circle cx={mix(source.x, consumeTargetX, absorb)} cy={mix(source.y, consumeTargetY, absorb)}
                r={4.2 + p * 2.2} fill={source.color} opacity={0.38 + p * 0.34} />
            </g>
          );
        })}
        <g opacity={flow * (1 - out)}>
          <path d={`M ${flowStartX} ${flowStartY} C ${flowStartX + 68} ${flowStartY - 2}, ${flowEndX - 82} ${flowEndY}, ${flowEndX} ${flowEndY}`}
            fill="none" stroke="url(#bridge-result-flow)" strokeWidth="3.1" strokeLinecap="round"
            strokeDasharray="620" strokeDashoffset={(1 - flow) * 620}
            opacity="0.82" filter="url(#persistent-project-glow)" />
          <circle cx={packetX} cy={packetY} r={5 + flow * 1.5}
            fill="#8fbfd8" opacity={0.42 + flow * 0.42} />
          <circle cx={packetX} cy={packetY} r={11 + flow * 8}
            fill="none" stroke="rgba(143,191,216,0.35)" strokeWidth="1.2"
            opacity={(1 - flow) * 0.34 + 0.16} />
        </g>
      </svg>

      {sources.map((source, i) => {
        const p = rise(t, gatherStart + i * 0.08, 0.56);
        const consume = rise(t, gatherStart + 0.34 + i * 0.08, 1.18);
        const fade = 1 - rise(t, gatherStart + 1.40 + i * 0.06, 0.44);
        const u = Easing.easeInOutCubic(consume);
        const x = mix(source.x, consumeTargetX, u);
        const y = mix(source.y, consumeTargetY, u);
        const w = mix(source.w || 78, 26, u);
        const h = mix(source.h || 78, 26, u);
        return (
          <div key={`persistent-logo-chip-${i}`} style={{ position: 'absolute',
            left: x - w / 2, top: y - h / 2, width: w, height: h,
            opacity: p * fade,
            transform: `scale(${1 + p * 0.04 - consume * 0.12})`,
            borderRadius: mix(source.h ? 18 : 24, 12, u), display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${source.color}28 0%, rgba(255,255,255,0.060) 100%)`,
            border: `1px solid ${source.color}66`,
            boxShadow: `0 20px 46px rgba(0,0,0,0.30), 0 0 24px ${source.color}2f` }}>
            <BridgeSourceVisual source={source} w={w} h={h} consume={consume} />
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: resultX, top: resultY + 18,
        width: resultW, height: 92, opacity: result * (1 - out),
        transform: `translateX(${(1 - result) * 34}px) scale(${0.982 + result * 0.018})`,
        transformOrigin: '0% 50%',
        display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 70, height: 70, borderRadius: 24, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          transform: `scale(${0.86 + result * 0.14})`,
          background: 'linear-gradient(135deg, rgba(143,191,216,0.18), rgba(240,168,94,0.12))',
          border: '1px solid rgba(143,191,216,0.30)',
          boxShadow: `0 0 ${18 + result * 28}px rgba(143,191,216,0.16)` }}>
          <Icon name="check" size={34} color="#8fbfd8" sw={2.15} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 820,
            fontSize: 38, lineHeight: 1.02, color: TEXT, letterSpacing: '-0.022em',
            whiteSpace: 'nowrap' }}>
            Angebot bereit zur Review
          </div>
          <div style={{ marginTop: 10, width: 410, height: 2, borderRadius: 99,
            background: 'linear-gradient(90deg, rgba(143,191,216,0.62), rgba(240,168,94,0.62), rgba(232,101,90,0.16))' }} />
        </div>
      </div>

      {offerModules.map((m, i) => {
        const mp = rise(t, offerStart + 1.66 + i * 0.18, 0.56);
        return (
          <div key={m.title} style={{ position: 'absolute', left: m.x, top: offerModulesTop,
            width: m.w, height: 128, opacity: mp * (1 - out),
            transform: `translateY(${(1 - mp) * 18}px) scale(${0.978 + mp * 0.022})`,
            transformOrigin: '50% 0%', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ width: 58, height: 58, borderRadius: 20, flex: '0 0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(135deg, ${m.color}22 0%, rgba(255,255,255,0.035) 100%)`,
              border: `1px solid ${m.color}55`,
              boxShadow: `0 18px 40px rgba(0,0,0,0.24), 0 0 24px ${m.color}22` }}>
              <Icon name={m.icon} size={28} color={m.color} sw={1.85} />
            </div>
            <div style={{ paddingTop: 3, flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: DISPLAY, fontSize: 27, lineHeight: 1.02,
                fontWeight: 790, color: TEXT, letterSpacing: '-0.018em' }}>
                {m.title}
              </div>
              <div style={{ marginTop: 7, fontFamily: MONO, fontSize: 10.2,
                letterSpacing: '0.11em', textTransform: 'uppercase',
                color: 'rgba(250,250,249,0.48)', whiteSpace: 'nowrap' }}>
                {m.sub}
              </div>
              <div style={{ marginTop: 14, display: 'grid', gap: 8 }}>
                {[0, 1].map((line) => (
                  <div key={line} style={{ height: 6, width: line === 0 ? '92%' : '68%',
                    borderRadius: 99,
                    background: `linear-gradient(90deg, ${m.color}62, rgba(250,250,249,0.10))`,
                    opacity: 0.72 }} />
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: logoX - 150, top: logoY + markSize / 2 + 26,
        width: 300, height: 30, opacity: cooking * (1 - out),
        transform: `translateY(${(1 - bundled) * 10}px)`, display: 'flex',
        alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 8 + i * 2, height: 8 + i * 2, borderRadius: 99,
            background: i === 0 ? '#8fbfd8' : i === 1 ? WARM : '#e8655a',
            opacity: 0.30 + thinkingDot(i) * 0.56 + logoPulse * 0.10,
            transform: `scale(${0.84 + thinkingDot(i) * 0.22})`,
            boxShadow: `0 0 ${8 + thinkingDot(i) * 14}px rgba(240,168,94,0.30)` }} />
        ))}
        <span style={{ marginLeft: 8, fontFamily: MONO, fontSize: 11,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(250,250,249,0.50)' }}>
          Wird gebündelt
        </span>
      </div>
    </div>
  );
}

function TeamSkillCircle({ local }) {
  const draw = rise(local, 5.24, 1.22);
  const card = rise(local, 4.92, 1.18);
  const cx = 156;
  const cy = 138;
  const maxR = 82;
  const productIcons = [
    { k: 'Azure', src: 'assets/tech-icons/azure.svg', color: '#8fbfd8', x: 458, y: 126, size: 29 },
    { k: 'Sentinel', src: 'assets/tech-icons/microsoft-defender.svg', color: WARM, x: 404, y: 188, size: 30 },
    { k: 'Terraform', src: 'assets/tech-icons/terraform.svg', color: '#e8655a', x: 512, y: 188, size: 28 },
    { k: 'Kubernetes', src: 'assets/tech-icons/kubernetes.svg', color: '#c65bb0', x: 458, y: 250, size: 29 },
  ];
  const profile = [
    { label: 'Azure', short: 'AZR', value: 0.92, color: '#8fbfd8' },
    { label: 'Security', short: 'SEC', value: 0.88, color: WARM },
    { label: 'SOC', short: 'SOC', value: 0.84, color: WARM },
    { label: 'Infra', short: 'IAC', value: 0.78, color: '#e8655a' },
    { label: 'Delivery', short: 'DEL', value: 0.82, color: '#d69a4d' },
    { label: 'Compliance', short: 'CMP', value: 0.76, color: '#c65bb0' },
  ];
  const axes = profile.map((skill, i) => {
    const angle = -Math.PI / 2 + i * (Math.PI * 2 / profile.length);
    const valueR = maxR * skill.value * draw;
    return {
      ...skill,
      angle,
      x: cx + Math.cos(angle) * maxR,
      y: cy + Math.sin(angle) * maxR,
      vx: cx + Math.cos(angle) * valueR,
      vy: cy + Math.sin(angle) * valueR,
      lx: cx + Math.cos(angle) * (maxR + 18),
      ly: cy + Math.sin(angle) * (maxR + 18),
    };
  });
  const valuePoints = axes.map((a) => `${a.vx.toFixed(1)},${a.vy.toFixed(1)}`).join(' ');
  return (
    <div style={{ position: 'absolute', left: 58, top: 164, width: 610, height: 398,
      borderRadius: 28, padding: '20px 22px', boxSizing: 'border-box',
      opacity: card, transform: `translate(${(1 - card) * 14}px, ${(1 - card) * 48}px) scale(${0.70 + card * 0.30})`,
      transformOrigin: '0 45%',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.066) 0%, rgba(255,255,255,0.030) 100%)',
      border: '1px solid rgba(255,255,255,0.115)', boxShadow: '0 22px 58px rgba(0,0,0,0.23)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: DISPLAY, fontSize: 39, fontWeight: 790,
            color: TEXT, letterSpacing: '-0.024em', lineHeight: 0.98 }}>Kompetenzprofil</div>
          <div style={{ marginTop: 11, width: 154, height: 2, borderRadius: 999,
            background: 'linear-gradient(90deg, #8fbfd8, rgba(240,168,94,0.68), rgba(232,101,90,0.20))',
            opacity: 0.68 }} />
        </div>
      </div>
      <svg width="318" height="276" viewBox="0 0 318 276"
        style={{ position: 'absolute', left: 40, top: 112, overflow: 'visible' }}>
        <defs>
          <radialGradient id="team-profile-fill" cx="50%" cy="50%" r="58%">
            <stop offset="0" stopColor="rgba(143,191,216,0.34)" />
            <stop offset="0.58" stopColor="rgba(240,168,94,0.24)" />
            <stop offset="1" stopColor="rgba(232,101,90,0.18)" />
          </radialGradient>
        </defs>
        {[0.25, 0.50, 0.75, 1].map((ratio) => (
          <circle key={ratio} cx={cx} cy={cy} r={maxR * ratio} fill="none"
            stroke={ratio === 1 ? 'rgba(255,255,255,0.23)' : 'rgba(255,255,255,0.085)'}
            strokeWidth={ratio === 1 ? 1.4 : 0.9} />
        ))}
        {axes.map((axis) => (
          <g key={axis.label}>
            <line x1={cx} y1={cy} x2={axis.x} y2={axis.y}
              stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
            <text x={axis.lx} y={axis.ly + 4}
              textAnchor={axis.lx < cx - 12 ? 'end' : axis.lx > cx + 12 ? 'start' : 'middle'}
              fontFamily={MONO} fontSize="10.6" letterSpacing="0.75"
              fill="rgba(250,250,249,0.66)">{axis.short}</text>
          </g>
        ))}
        <polygon points={valuePoints} fill="url(#team-profile-fill)" stroke="rgba(232,91,132,0.95)"
          strokeWidth="2.7" strokeLinejoin="round" opacity={0.92}
          style={{ filter: 'drop-shadow(0 0 8px rgba(232,91,132,0.34))' }} />
        <polyline points={`${valuePoints} ${axes[0].vx.toFixed(1)},${axes[0].vy.toFixed(1)}`}
          fill="none" stroke="rgba(255,156,92,0.68)" strokeWidth="1.2"
          strokeLinejoin="round" opacity={0.85} />
        {axes.map((axis) => (
          <circle key={`${axis.label}-value`} cx={axis.vx} cy={axis.vy} r="4.4"
            fill={axis.color} stroke="rgba(23,19,17,0.92)" strokeWidth="2" opacity={draw} />
        ))}
        <circle cx={cx} cy={cy} r="3.6" fill="rgba(255,255,255,0.20)" />
      </svg>
      <div style={{ position: 'absolute', left: 384, top: 126, width: 190, height: 210 }}>
        <svg width="190" height="210" viewBox="0 0 190 210"
          style={{ position: 'absolute', inset: 0, overflow: 'visible', opacity: 0.82 }}>
          <path d="M 95 42 V 95 M 42 106 L 95 95 L 148 106 M 95 95 V 158"
            fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="95" cy="95" r="5" fill="rgba(240,168,94,0.38)" />
        </svg>
        {productIcons.map((product, i) => {
          const ip = rise(local, 5.72 + i * 0.18, 0.68);
          return (
            <div key={product.k} style={{ position: 'absolute', left: product.x - 384, top: product.y - 112,
              width: 48, height: 48, borderRadius: 16, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              opacity: ip, transform: `translateY(${(1 - ip) * 10}px)`,
              background: `${product.color}12`, border: `1px solid ${product.color}2e` }}>
              <img src={product.src} alt="" style={{ width: product.size, height: product.size,
                objectFit: 'contain', display: 'block' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeamRequirementRail({ local }) {
  const p = rise(local, 3.26, 0.56);
  return (
    <div style={{ position: 'absolute', left: 1184, top: 164, width: 430, height: 398,
      borderRadius: 28, padding: '20px 18px', boxSizing: 'border-box', opacity: p,
      transform: `translateX(${(1 - p) * 18}px)`,
      background: 'linear-gradient(135deg, rgba(255,255,255,0.060) 0%, rgba(255,255,255,0.030) 100%)',
      border: '1px solid rgba(255,255,255,0.105)', boxShadow: '0 22px 58px rgba(0,0,0,0.22)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: FAINT }}>Needed</div>
          <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 750,
            fontSize: 22, color: TEXT }}>Kompetenzen</div>
        </div>
        <Icon name="check" size={20} color="#8fbfd8" sw={2} />
      </div>
      {TEAM_REQUIREMENTS.map((row, i) => {
        const rp = rise(local, 3.34 + i * 0.13, 0.4);
        const compact = i === 0;
        return (
          <div key={row.k} style={{ minHeight: compact ? 70 : 105, marginTop: i === 0 ? 0 : 10,
            borderRadius: 20, padding: compact ? '12px 14px' : '14px 14px',
            boxSizing: 'border-box', opacity: rp, transform: `translateX(${(1 - rp) * 16}px)`,
            display: 'grid', gridTemplateColumns: compact ? '46px 1fr' : '46px 1fr', columnGap: 13,
            position: 'relative', zIndex: 1,
            background: 'rgba(255,255,255,0.052)', border: `1px solid ${row.color}30` }}>
            <div style={{ width: 46, height: 46, borderRadius: 15, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: `${row.color}16`, border: `1px solid ${row.color}34` }}>
              <Icon name={row.icon} size={22} color={row.color} sw={1.8} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.13em',
                  textTransform: 'uppercase', color: FAINT }}>{row.k}</div>
                {compact && <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: '0.13em',
                  textTransform: 'uppercase', color: row.color }}>Azure</div>}
              </div>
              <div style={{ marginTop: compact ? 8 : 10, display: 'flex', flexWrap: 'wrap',
                gap: compact ? 7 : 8 }}>
                {row.items.map((item, j) => (
                  compact ? <CertificationBadge key={item} cert={item} color={row.color} />
                    : <span key={item} style={{ borderRadius: 999, padding: '6px 9px',
                      fontFamily: INTER, fontWeight: 720, fontSize: 11.2,
                      lineHeight: 1, color: j === 0 ? TEXT : 'rgba(250,250,249,0.82)',
                      background: j === 0 ? `${row.color}1f` : 'rgba(255,255,255,0.064)',
                      border: j === 0 ? `1px solid ${row.color}42` : '1px solid rgba(255,255,255,0.09)',
                      whiteSpace: 'nowrap' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SuggestedTeamSetup({ local }) {
  const p = rise(local, 5.08, 1.20);
  const roles = [
    { initials: 'SA', pt: '2 PT', certs: ['AZ-500'], color: '#8fbfd8', y: 118, start: 0.08, span: 0.34 },
    { initials: 'SE', pt: '2 PT', certs: ['SC-200'], color: WARM, y: 176, start: 0.18, span: 0.36 },
    { initials: 'PE', pt: '2 PT', color: '#e8655a', y: 234, start: 0.38, span: 0.30 },
    { initials: 'DL', pt: '1 PT', color: '#c65bb0', y: 292, start: 0.02, span: 0.22 },
  ];
  return (
    <div style={{ position: 'absolute', left: 720, top: 150, width: 920, height: 444,
      opacity: p, transform: `translate(${(1 - p) * -150}px, ${(1 - p) * 42}px) scale(${0.80 + p * 0.20})`,
      transformOrigin: '0 45%', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: 6, top: 0 }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 790,
          fontSize: 45, color: TEXT, letterSpacing: '-0.026em', lineHeight: 0.98 }}>Projektbesetzung</div>
        <div style={{ marginTop: 11, width: 170, height: 2, borderRadius: 999,
          background: 'linear-gradient(90deg, #8fbfd8, rgba(240,168,94,0.68), rgba(232,101,90,0.20))',
          opacity: 0.68 }} />
      </div>
      <div style={{ position: 'absolute', right: 80, top: 16, height: 30, borderRadius: 999,
        padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: 'rgba(250,250,249,0.74)',
        background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8',
          boxShadow: '0 0 9px rgba(143,191,216,0.34)' }} />
        7 PT / 56h
      </div>
      <svg width="920" height="444" viewBox="0 0 920 444"
        style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="team-open-axis" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(143,191,216,0.08)" />
            <stop offset="0.5" stopColor="rgba(240,168,94,0.22)" />
            <stop offset="1" stopColor="rgba(232,101,90,0.18)" />
          </linearGradient>
        </defs>
        <rect x="688" y="94" width="124" height="222" rx="24"
          fill="rgba(232,101,90,0.035)" stroke="rgba(232,101,90,0.075)" />
        <path d="M 272 98 H 842" stroke="url(#team-open-axis)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="688" cy="98" r="5.5" fill="#e8655a"
          stroke="rgba(23,19,17,0.95)" strokeWidth="2"
          style={{ filter: 'drop-shadow(0 0 7px rgba(232,101,90,0.42))' }} />
        {roles.map((person, i) => {
          const rp = p;
          const y = person.y + 18;
          const x2 = 286 + person.start * 520;
          const w = person.span * 520;
          return (
            <g key={`${person.initials}-line`} opacity={rp}>
              <path d={`M 272 ${y} H 840`} stroke="rgba(255,255,255,0.055)"
                strokeWidth="1.4" strokeLinecap="round" />
              <rect x={x2} y={y - 5} width={w} height="10"
                rx="5" fill={person.color} opacity="0.54" />
            </g>
          );
        })}
      </svg>

      {roles.map((person) => {
        const x2 = 286 + person.start * 520;
        const w = person.span * 520;
        const y = person.y + 18;
        return (
          <div key={`${person.initials}-badges`} style={{ position: 'absolute', left: x2 + w + 12, top: y - 11,
            height: 24, display: 'flex', alignItems: 'center', gap: 7, opacity: p }}>
            <span style={{ height: 23, minWidth: 42, borderRadius: 999, display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: '0 9px', boxSizing: 'border-box',
              fontFamily: MONO, fontSize: 10, letterSpacing: '0.06em', color: person.color,
              background: `${person.color}10`, border: `1px solid ${person.color}20` }}>{person.pt}</span>
            {(person.certs || []).map((cert) => (
              <CertificationBadge key={cert} cert={cert} color={person.color} mini />
            ))}
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: 4, top: 110, width: 228 }}>
        {roles.map((person, i) => {
          const cp = p;
          return (
            <div key={person.initials} style={{ position: 'absolute', left: 0, top: person.y - 110,
              width: 228, height: 42, opacity: cp }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 38, height: 38,
                borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: MONO, fontSize: 10.5, color: TEXT,
                background: `linear-gradient(135deg, ${person.color}28, rgba(255,255,255,0.07))`,
                border: `1px solid ${person.color}48`,
                boxShadow: `0 0 ${i === 0 ? 18 : 10}px ${person.color}14` }}>{person.initials}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeamSlicePanel({ local }) {
  const enter = rise(local, SIGNAL_TEAM_PREVIEW_START - 0.42, 1.28);
  if (enter <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', left: '50%', top: 0, width: 1660, height: 700,
      transform: `translateX(-50%) translateY(${(1 - enter) * 20}px) scale(${0.990 + enter * 0.010})`,
      opacity: enter, overflow: 'visible', boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', left: -110, bottom: -220, width: 520, height: 520,
        background: 'radial-gradient(circle, rgba(143,191,216,0.16) 0%, rgba(23,19,17,0) 66%)' }} />
      <div style={{ position: 'absolute', right: -130, top: -210, width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(240,168,94,0.13) 0%, rgba(23,19,17,0) 68%)' }} />
    </div>
  );
}

function SignalTeamSceneTitles({ local }) {
  return null;
}

function SignalTeamUI({ local }) {
  const signalStart = SIGNAL_START;
  const l2 = local - signalStart;
  const op = band(local, signalStart, SCENE_SOLUTION_VISUAL_END + 0.18, 0.48);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', left: 130, right: 130, top: 196, height: 800,
      opacity: op, transform: `translateY(${(1 - op) * 20}px)`, pointerEvents: 'none' }}>
      <SignalTeamSceneTitles local={l2} />
      <SignalGraphPanel local={l2} />
      <TeamSlicePanel local={l2} />
      <TeamMorphModules local={l2} />
    </div>
  );
}

function ConsultingOSExplainer({ local }) {
  const op = band(local, OS_EXPLAINER_START, OS_EXPLAINER_EXIT, 0.62);
  if (op <= 0.001) return null;
  const l = local - OS_EXPLAINER_START;
  const title = rise(l, 0.10, 0.70);
  const sub = rise(l, 0.78, 0.78);
  const constellation = rise(l, 1.48, 0.96);
  const engine = rise(l, 1.78, 0.82);
  const exit = rise(local, OS_EXPLAINER_EXIT - 0.68, 0.68);
  const line1 = rise(l, 0.16, 0.62);
  const line2 = rise(l, 0.92, 0.66);
  const line3 = rise(l, 1.68, 0.66);
  const flow = rise(l, 2.42, 0.78);
  const flowItems = [
    { label: 'Signal', icon: 'target', color: WARM },
    { label: 'Angebot', icon: 'file', color: '#8fbfd8' },
    { label: 'Team', icon: 'users', color: '#d69a4d' },
    { label: 'Wissen', icon: 'database', color: '#c65bb0' },
    { label: 'Faktura', icon: 'check', color: '#e8655a' },
  ];
  const textLine = (text, p, top, warm = false) => (
    <div style={{ position: 'absolute', left: 230, right: 230, top,
      textAlign: 'center', fontFamily: DISPLAY, fontWeight: 800,
      fontSize: warm ? 72 : 78, lineHeight: 1.02, letterSpacing: '-0.028em',
      opacity: p, transform: `translateY(${(1 - p) * 20 - exit * 18}px) scale(${0.978 + p * 0.022})`,
      color: warm ? undefined : TEXT,
      ...(warm ? gradText(GRAD_WARM) : {}),
      textShadow: '0 18px 52px rgba(0,0,0,0.54)' }}>
      {text}
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op,
      transform: `translateY(${(1 - op) * 18}px)`,
      pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 258,
        textAlign: 'center', fontFamily: MONO, fontSize: 12, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'rgba(143,191,216,0.66)',
        opacity: title, transform: `translateY(${(1 - title) * 12 - exit * 18}px)` }}>
        Consulting Intelligence
      </div>
      {textLine('Senior-Zeit gehört zum Kunden.', line1, 310)}
      {textLine('Consultry macht Admin zu Faktura.', line2, 408, true)}
      {textLine('Kein Chatbot. Ein Arbeitsfluss.', line3, 504)}
      <div style={{ position: 'absolute', left: '50%', top: 688, width: 1210, height: 96,
        opacity: flow, transform: `translateX(-50%) translateY(${(1 - flow) * 20 - exit * 18}px)` }}>
        <svg width="1210" height="96" viewBox="0 0 1210 96"
          style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <defs>
            <linearGradient id="consulting-simple-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f0a85e" />
              <stop offset="0.48" stopColor="#8fbfd8" />
              <stop offset="1" stopColor="#e8655a" />
            </linearGradient>
          </defs>
          <line x1="106" y1="48" x2="1104" y2="48"
            stroke="url(#consulting-simple-flow)" strokeWidth="2.2"
            strokeLinecap="round" strokeDasharray="1000"
            strokeDashoffset={(1 - flow) * 1000}
            opacity="0.66" />
          {flowItems.map((item, i) => {
            const p = rise(l, 2.58 + i * 0.12, 0.54);
            const cx = 106 + i * 249.5;
            return (
              <g key={item.label} transform={`translate(${cx} 48)`} opacity={p}>
                <circle r="30" fill="rgba(30,26,23,0.90)" stroke={item.color}
                  strokeWidth="1.4" />
                <g transform="translate(-12 -12)">
                  <Icon name={item.icon} size={24} color={item.color} sw={1.9} />
                </g>
                <text x="0" y="58" textAnchor="middle" fontFamily={DISPLAY}
                  fontSize="23" fontWeight="760" fill="#faf9f6"
                  letterSpacing="-0.012em">{item.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function SceneSolution(local) {
  const bloom = clamp(local / 1.45, 0, 1);
  const eb = rise(local, 7.35, 0.6);
  const positioning = band(local, POSITIONING_START, POSITIONING_EXIT, 0.72);
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      {/* gen backgrounds: M04 reveal (beat 1) → M05 platform (beat 2), Crossfade bei SOL_SWITCH_T */}
      <SolutionBackground local={local} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 92% 82% at 50% 44%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.52) 100%)' }} />
      <ConsultingOSExplainer local={local} />
      <SignalTeamUI local={local} />

      {/* Positioning statement replacing the old four-card "Ihr Geschäft..." grid */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 604,
        display: 'flex', justifyContent: 'center', pointerEvents: 'none',
        opacity: positioning, transform: `translateY(${(1 - positioning) * 18}px)` }}>
        <div style={{ width: 1180, textAlign: 'center' }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 760, fontSize: 48,
            lineHeight: 1.05, letterSpacing: '-0.018em', color: TEXT,
            textShadow: '0 14px 42px rgba(0,0,0,0.50)' }}>
            Die Beratungsintelligenz
          </div>
          <div style={{ marginTop: 12, fontFamily: DISPLAY, fontWeight: 720,
            fontSize: 35, lineHeight: 1.16, letterSpacing: '-0.012em',
            ...gradText(GRAD_WARM),
            textShadow: '0 12px 38px rgba(0,0,0,0.42)' }}>
            für erfolgreichen Unternehmenswandel.
          </div>
        </div>
      </div>

      {/* Kapitel-Anker links oben, kommt mit den Karten */}
      <Chapter n={2} label="Die Plattform" op={eb} />
    </div>
  );
}

// ══ SCENE 3 — VERTRIEB / ANGEBOT  (VO 30.06 "Ihr Vertrieb fragt Consultry …
//    … richtige Angebote, für die richtigen Kunden." bis 36.32) ══
function ProjectBundleSceneEntry({ local }) {
  const enter = rise(local, 0.02, 0.56);
  const reveal = rise(local, 0.86, 0.82);
  const orbit = rise(local, 1.24, 0.88);
  const handoff = Easing.easeInOutCubic(clamp((local - 3.05) / 0.86, 0, 1));
  const out = rise(local, 3.80, 0.58);
  const op = enter * (1 - out);
  if (op <= 0.001) return null;

  const cx = mix(960, 756, handoff);
  const cy = mix(510, 598, handoff);
  const scale = mix(1.0, 0.66, handoff);
  const items = [
    { icon: 'search', color: '#8fbfd8', x: -250, y: -122 },
    { icon: 'file', color: WARM, x: 250, y: -122 },
    { icon: 'clock', color: '#e8655a', x: -250, y: 122 },
    { icon: 'briefcase', color: '#c65bb0', x: 250, y: 122 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 24 }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 66% at 50% 50%, rgba(143,191,216,0.08) 0%, rgba(240,168,94,0.06) 36%, rgba(23,19,17,0) 68%)' }} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="project-entry-flow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fbfd8" />
            <stop offset="0.54" stopColor="#f0a85e" />
            <stop offset="1" stopColor="#e8655a" />
          </linearGradient>
        </defs>
        {items.map((item, i) => {
          const p = rise(local, 1.04 + i * 0.11, 0.62) * (1 - handoff * 0.6);
          const x = cx + item.x * mix(1, 0.34, handoff);
          const y = cy + item.y * mix(1, 0.34, handoff);
          return (
            <g key={`project-entry-line-${i}`} opacity={p}>
              <path d={`M ${x} ${y} L ${cx} ${cy}`} fill="none"
                stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" />
              <path d={`M ${x} ${y} L ${cx} ${cy}`} fill="none"
                stroke={item.color} strokeWidth="2.2" strokeLinecap="round"
                strokeDasharray="420" strokeDashoffset={(1 - p) * 420}
                style={{ filter: `drop-shadow(0 0 9px ${item.color}55)` }} />
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={132 * scale * (0.9 + reveal * 0.1)}
          fill="none" stroke="url(#project-entry-flow)" strokeWidth="1.4"
          opacity={0.12 + reveal * 0.22}
          strokeDasharray="9 18" />
      </svg>

      {items.map((item, i) => {
        const p = rise(local, 1.08 + i * 0.12, 0.58);
        const consume = rise(local, 2.48 + i * 0.08, 0.72);
        const x = cx + item.x * (1 - consume) * mix(1, 0.34, handoff);
        const y = cy + item.y * (1 - consume) * mix(1, 0.34, handoff);
        const size = mix(64, 28, consume) * scale;
        return (
          <div key={`project-entry-item-${i}`} style={{ position: 'absolute',
            left: x - size / 2, top: y - size / 2, width: size, height: size,
            opacity: p * (1 - consume * 0.88),
            borderRadius: size * 0.28, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${item.color}1d 0%, rgba(255,255,255,0.035) 100%)`,
            border: `1px solid ${item.color}42`,
            boxShadow: `0 18px 40px rgba(0,0,0,0.24), 0 0 18px ${item.color}1f` }}>
            <Icon name={item.icon} size={Math.max(16, size * 0.42)} color={item.color} sw={1.9} />
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: cx - 176 * scale, top: cy - 116 * scale,
        width: 352 * scale, height: 232 * scale, borderRadius: 40 * scale,
        transform: `translateY(${(1 - enter) * 18}px) scale(${0.96 + reveal * 0.04})`,
        transformOrigin: '50% 50%',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.080) 0%, rgba(255,255,255,0.030) 100%)',
        border: '1px solid rgba(240,168,94,0.28)',
        boxShadow: '0 34px 92px rgba(0,0,0,0.34), 0 0 42px rgba(240,168,94,0.13), inset 0 1px 0 rgba(255,255,255,0.12)' }}>
        <div style={{ position: 'absolute', left: '50%', top: 28 * scale, width: 94 * scale, height: 94 * scale,
          borderRadius: 28 * scale, transform: 'translateX(-50%)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(143,191,216,0.18), rgba(240,168,94,0.16))',
          border: '1px solid rgba(255,255,255,0.13)' }}>
          <Icon name="briefcase" size={40 * scale} color={TEXT} sw={1.8} />
          <div style={{ position: 'absolute', right: -8 * scale, bottom: -8 * scale,
            width: 40 * scale, height: 40 * scale, borderRadius: 13 * scale,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(23,19,17,0.88)', border: '1px solid rgba(143,191,216,0.35)' }}>
            <Icon name="azure" size={24 * scale} color="#8fbfd8" sw={1.8} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: 26 * scale, right: 26 * scale, top: 142 * scale,
          textAlign: 'center' }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 31 * scale,
            lineHeight: 1, color: TEXT, letterSpacing: '-0.018em' }}>
            Azure Landing Zone
          </div>
          <div style={{ marginTop: 10 * scale, fontFamily: MONO, fontSize: 10.4 * scale,
            textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(250,250,249,0.56)' }}>
            Projektpaket
          </div>
        </div>
        <div style={{ position: 'absolute', left: 34 * scale, right: 34 * scale,
          bottom: 20 * scale, height: 3 * scale, borderRadius: 999, overflow: 'hidden',
          background: 'rgba(255,255,255,0.075)' }}>
          <div style={{ width: `${Math.round(reveal * 100)}%`, height: '100%',
            borderRadius: 999, background: 'linear-gradient(90deg, #8fbfd8, #f0a85e, #e8655a)' }} />
        </div>
      </div>

      <div style={{ position: 'absolute', left: cx - 210, top: cy + 148 * scale, width: 420,
        opacity: orbit * (1 - handoff), textAlign: 'center',
        transform: `translateY(${(1 - orbit) * 10}px)` }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(250,250,249,0.50)' }}>
          aus Opportunity, Skills und Kapazität
        </span>
      </div>
    </div>
  );
}

function VertriebJsxMock({ local }) {
  const enter = rise(local, 0.75, 0.55);
  const cardEnter = rise(local, 2.45, 0.55);
  const exit = 1 - rise(local, OFFER_STAGE_START + 0.1, 0.55);
  const op = enter * exit;
  if (op <= 0.001) return null;
  const draw = rise(local, 2.8, 0.65);
  const pulse = 0.5 + Math.sin(local * 4.2) * 0.5;
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none',
      transform: `translateY(${(1 - enter) * 18}px)`, filter: 'drop-shadow(0 28px 70px rgba(0,0,0,0.48))' }}>
      <div style={{ position: 'absolute', left: 404, top: 520, width: 1112, height: 355,
        borderRadius: 42, background: 'rgba(232,226,216,0.86)',
        border: '1px solid rgba(255,255,255,0.18)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.26)',
        opacity: cardEnter, transform: `translateY(${(1 - cardEnter) * 20}px) scale(${0.985 + cardEnter * 0.015})` }}>
        <div style={{ position: 'absolute', left: 72, right: 72, top: 58, height: 1,
          background: 'rgba(30,27,24,0.34)', opacity: draw }} />
        <div style={{ position: 'absolute', left: 72, right: 72, top: 94, height: 1,
          background: 'rgba(30,27,24,0.22)', opacity: draw }} />
        <div style={{ position: 'absolute', left: 180, right: 180, top: 164, height: 52,
          borderRadius: 999, background: 'rgba(250,246,240,0.82)', border: '1px solid rgba(30,27,24,0.12)',
          opacity: draw, transform: `scaleX(${0.72 + draw * 0.28})` }}>
          <div style={{ position: 'absolute', left: 28, top: 20, width: 8, height: 8,
            borderRadius: 99, background: '#e8655a', opacity: 0.75 + pulse * 0.25 }} />
          <div style={{ position: 'absolute', left: 95, right: 95, top: 20, height: 10,
            borderRadius: 999, background: 'rgba(30,27,24,0.18)' }} />
        </div>
        <div style={{ position: 'absolute', left: 72, right: 72, bottom: 72, height: 1,
          background: 'rgba(30,27,24,0.22)', opacity: draw }} />
        <div style={{ position: 'absolute', left: 72, right: 72, bottom: 38, height: 2,
          background: GRAD_WARM, borderRadius: 2, opacity: draw * 0.65,
          transform: `scaleX(${draw})`, transformOrigin: '0 50%' }} />
      </div>
      <div style={{ position: 'absolute', left: 485, top: 360, width: 950, height: 108,
        borderRadius: 999, background: 'rgba(20,15,13,0.92)',
        border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 20px 46px rgba(0,0,0,0.36)' }}>
        <div style={{ position: 'absolute', right: 24, top: 24, width: 60, height: 60,
          borderRadius: 99, background: 'linear-gradient(180deg, #f08662 0%, #e05f4f 100%)',
          boxShadow: '0 0 24px rgba(232,101,90,0.42)' }} />
      </div>
    </div>
  );
}

function WorkArtifactPreview({ type, color, active = 0 }) {
  const glow = 0.08 + active * 0.20;
  const base = {
    position: 'relative',
    width: 96,
    height: 74,
    borderRadius: 18,
    overflow: 'hidden',
    background: `linear-gradient(135deg, ${color}18 0%, rgba(255,255,255,0.035) 100%)`,
    border: `1px solid ${color}${active > 0.01 ? '72' : '34'}`,
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 ${active * 20}px ${color}3c`,
  };
  const line = (left, top, width, height = 4, opacity = 0.36) => (
    <span style={{ position: 'absolute', left, top, width, height, borderRadius: 999,
      background: color, opacity }} />
  );

  if (type === 'code') {
    return (
      <div style={base}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 18,
          background: 'rgba(23,19,17,0.34)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ position: 'absolute', left: 10 + i * 10, top: 7,
              width: 5, height: 5, borderRadius: 99, background: i === 1 ? color : 'rgba(255,255,255,0.34)' }} />
          ))}
        </div>
        {line(12, 28, 44, 4, 0.58)}
        {line(22, 40, 58, 4, 0.34)}
        {line(18, 52, 35, 4, 0.44)}
        {line(58, 52, 20, 4, 0.25)}
      </div>
    );
  }

  if (type === 'concept') {
    return (
      <div style={base}>
        <svg width="96" height="74" viewBox="0 0 96 74" style={{ position: 'absolute', inset: 0 }}>
          <path d="M24 50 L46 24 L72 42" fill="none" stroke={color} strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" opacity={0.60 + active * 0.22} />
          <path d="M24 50 H72" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2"
            strokeLinecap="round" />
          {[{ x: 24, y: 50 }, { x: 46, y: 24 }, { x: 72, y: 42 }].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="6.2" fill="rgba(23,19,17,0.52)"
              stroke={i === 1 ? WARM : color} strokeWidth="2" />
          ))}
          <rect x="14" y="14" width="20" height="8" rx="4" fill={color} opacity="0.22" />
          <rect x="58" y="56" width="24" height="7" rx="3.5" fill={WARM} opacity="0.22" />
        </svg>
      </div>
    );
  }

  if (type === 'risk') {
    return (
      <div style={base}>
        <div style={{ position: 'absolute', left: 14, top: 13, width: 48, height: 46,
          borderRadius: 10, background: 'rgba(255,255,255,0.045)',
          border: '1px solid rgba(255,255,255,0.08)' }}>
          {line(10, 11, 30, 3, 0.36)}
          {line(10, 22, 22, 3, 0.24)}
          {line(10, 33, 32, 3, 0.20)}
        </div>
        <div style={{ position: 'absolute', right: 12, top: 14, bottom: 14, width: 2,
          borderRadius: 99, background: 'rgba(255,255,255,0.10)' }} />
        {[18, 36, 54].map((top, i) => (
          <span key={i} style={{ position: 'absolute', right: 8, top, width: 10, height: 10,
            borderRadius: 99, background: i === 1 ? color : 'rgba(255,255,255,0.18)',
            boxShadow: i === 1 ? `0 0 10px ${color}66` : 'none' }} />
        ))}
      </div>
    );
  }

  return (
    <div style={base}>
      {[0, 1, 2].map((col) => (
        <div key={col} style={{ position: 'absolute', left: 12 + col * 27, top: 14, width: 20,
          height: 46, borderRadius: 9, background: 'rgba(255,255,255,0.040)',
          border: '1px solid rgba(255,255,255,0.07)' }}>
          <span style={{ position: 'absolute', left: 5, top: 7, width: 10, height: 10,
            borderRadius: 4, background: col === 1 ? color : 'rgba(255,255,255,0.18)',
            opacity: col === 1 ? 0.64 + active * 0.18 : 0.46 }} />
          <span style={{ position: 'absolute', left: 5, top: 24, width: 10, height: 4,
            borderRadius: 99, background: 'rgba(255,255,255,0.18)' }} />
          <span style={{ position: 'absolute', left: 5, top: 34, width: 8, height: 4,
            borderRadius: 99, background: color, opacity: 0.20 + col * 0.08 }} />
        </div>
      ))}
    </div>
  );
}

function VertriebBackground({ local, hideProjectBundle = false }) {
  const l = Math.max(0, local - OFFER_BG_START);
  const op = band(local, OFFER_BG_START, OFFER_VISUAL_END + 0.15, 0.62);
  if (op <= 0.001) return null;
  const shell = rise(l, 0.05, 0.95);
  const contextLayout = Easing.easeInOutCubic(clamp((local - (WORK_PROMPT_START - 0.28)) / 1.18, 0, 1));
  const doc = 0; // detailed draft/integration reveal is now reserved for the post-Wissen payoff
  const flow = rise(l, 1.9, 1.25);
  const contextNodes = [
    { k: 'Konzepte', icon: 'search', mock: 'concept', color: '#8fbfd8', x: -30, y: 48, w: 326, h: 142, ax: 296, ay: 119, t: 0.62 },
    { k: 'Code', icon: 'file', mock: 'code', color: WARM, x: 386, y: 48, w: 326, h: 142, ax: 386, ay: 119, t: 0.86 },
    { k: 'Risiko', icon: 'clock', mock: 'risk', color: '#e8655a', x: -30, y: 374, w: 326, h: 142, ax: 296, ay: 445, t: 1.10 },
    { k: 'Scope', icon: 'briefcase', mock: 'scope', color: '#c65bb0', x: 386, y: 374, w: 326, h: 142, ax: 386, ay: 445, t: 1.34 },
  ];
  const contextConsume = rise(local, WORK_PROMPT_START + 2.16, 1.65);
  const contextKeep = 1 - contextConsume;
  const contextActive = band(local, WORK_PROMPT_START + 2.16, WORK_PROMPT_START + 3.82, 0.42);
  const docLines = [0.58, 0.46, 0.64, 0.52];
  const draftRows = [
    { label: 'Analyse', color: '#8fbfd8', w: 0.64 },
    { label: 'Risiko', color: '#e8655a', w: 0.50 },
  ];
  const integrations = [
    { label: 'GitHub', meta: 'Repos', src: 'assets/tech-icons/github.svg', color: '#8fbfd8', x: 1660, y: 430, ax: 1652, ay: 466, t: 4.05 },
    { label: 'Jira', meta: 'Issues', src: 'assets/tech-icons/jira.svg', color: WARM, x: 1660, y: 504, ax: 1652, ay: 530, t: 4.34 },
    { label: 'Confluence', meta: 'Wissen', src: 'assets/tech-icons/confluence.svg', color: '#e8655a', x: 1660, y: 674, ax: 1652, ay: 696, t: 9.04 },
    { label: 'Word', meta: 'Draft', src: 'assets/tech-icons/microsoft-word.svg', color: '#8fbfd8', x: 1660, y: 748, ax: 1652, ay: 760, t: 9.36 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 74% 68% at 52% 50%, rgba(143,191,216,0.10) 0%, rgba(232,145,58,0.08) 36%, rgba(23,19,17,0) 70%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.72) 0%, rgba(23,19,17,0.30) 48%, rgba(23,19,17,0.54) 100%)' }} />

      <div style={{ position: 'absolute', inset: 0,
        transform: `translateY(${OFFER_STAGE_Y}px) scale(${OFFER_STAGE_SCALE})`,
        transformOrigin: '50% 50%' }}>
        <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <defs>
            <linearGradient id="offer-flow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#8fbfd8" />
              <stop offset="0.55" stopColor="#f0a85e" />
              <stop offset="1" stopColor="#e8655a" />
            </linearGradient>
          </defs>
          {[0, 1, 2].map((i) => {
            const y = 524 + i * 58;
                const p = rise(l, 1.9 + i * 0.34, 1.1);
            const dotX = 732 + ((l * 92 + i * 170) % 392);
            return (
              <g key={i} opacity={0}>
                <path d={`M 704 ${y} C 850 ${y - 54}, 990 ${y + 44}, 1138 ${y - 4}`}
                  fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="14" strokeLinecap="round" />
                <path d={`M 704 ${y} C 850 ${y - 54}, 990 ${y + 44}, 1138 ${y - 4}`}
                  fill="none" stroke="url(#offer-flow)" strokeWidth="3.2" strokeLinecap="round"
                  strokeDasharray="900" strokeDashoffset={(1 - p) * 900} />
                {p > 0.92 && <circle cx={dotX} cy={y + Math.sin(l * 2 + i) * 18} r="5.5" fill="#f0a85e"
                  opacity={0.34 + Math.sin(l * 5 + i) * 0.16}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(240,168,94,0.72))' }} />}
              </g>
            );
          })}
        </svg>

        <div style={{ ...glassDark(34), position: 'absolute',
          left: mix(470, 560, contextLayout), top: mix(108, 416, contextLayout), width: 802, height: 714,
          padding: '42px 50px', boxSizing: 'border-box', opacity: shell,
          transform: `translateX(${(1 - shell) * -34}px) scale(${mix(1.60, 0.76, contextLayout) * (0.985 + shell * 0.015)})`,
          transformOrigin: '50% 46%',
          background: 'transparent', border: 'none', boxShadow: 'none',
          backdropFilter: 'none', WebkitBackdropFilter: 'none', overflow: 'visible' }}>
          <div style={{ position: 'absolute', left: -80, bottom: -120, width: 290, height: 290,
            opacity: 0.34, background: 'radial-gradient(circle, rgba(143,191,216,0.13) 0%, rgba(23,19,17,0) 66%)' }} />
          <div style={{ position: 'absolute', right: -70, top: 90, width: 260, height: 260,
            opacity: 0.26, background: 'radial-gradient(circle, rgba(240,168,94,0.11) 0%, rgba(23,19,17,0) 68%)' }} />
          {!hideProjectBundle && (
          <div style={{ position: 'absolute', left: 50, top: 112, width: 682, height: 536 }}>
            <svg width="682" height="536" viewBox="0 0 682 536"
              style={{ position: 'absolute', inset: 0, overflow: 'visible', opacity: 0 }}>
              <defs>
                <linearGradient id="consultant-context-flow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8fbfd8" />
                  <stop offset="0.52" stopColor="#f0a85e" />
                  <stop offset="1" stopColor="#e8655a" />
                </linearGradient>
              </defs>
              {contextNodes.map((node, i) => {
                const p = rise(l, node.t, 0.78);
                return (
                  <g key={`${node.k}-line`} opacity={p}>
                    <path d={`M 341 280 C ${(341 + node.ax) / 2} ${280 + (i < 2 ? -72 : 72)}, ${(341 + node.ax) / 2} ${node.ay}, ${node.ax} ${node.ay}`}
                      fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" strokeLinecap="round" />
                    <path d={`M 341 280 C ${(341 + node.ax) / 2} ${280 + (i < 2 ? -72 : 72)}, ${(341 + node.ax) / 2} ${node.ay}, ${node.ax} ${node.ay}`}
                      fill="none" stroke="url(#consultant-context-flow)" strokeWidth="2.1" strokeLinecap="round"
                      strokeDasharray="360" strokeDashoffset={(1 - p) * 360} opacity="0.72" />
                    <circle cx={node.ax} cy={node.ay} r="4.8" fill={node.color}
                      style={{ filter: `drop-shadow(0 0 8px ${node.color}66)` }} />
                  </g>
                );
              })}
              <circle cx="341" cy="280" r="98" fill="rgba(255,255,255,0.035)"
                stroke="rgba(255,255,255,0.11)" />
              <circle cx="341" cy="280" r="64" fill="rgba(143,191,216,0.055)"
                stroke="rgba(143,191,216,0.20)" />
              <path d="M 84 492 H 598" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round" />
              <path d={`M 84 492 H ${84 + rise(l, 1.8, 1.1) * 514}`} stroke="url(#consultant-context-flow)"
                strokeWidth="2.2" strokeLinecap="round" />
              {[84, 248, 424, 598].map((x, i) => {
                const p = rise(l, 2.05 + i * 0.24, 0.42);
                return <circle key={`milestone-${i}`} cx={x} cy="492" r={4.8 + p * 1.6}
                  fill={i === 2 ? '#e8655a' : i === 1 ? WARM : '#8fbfd8'} opacity={0.42 + p * 0.42} />;
              })}
            </svg>

            <div style={{ position: 'absolute', left: 158, top: 218, width: 374, height: 142,
              padding: 0, boxSizing: 'border-box', opacity: contextKeep,
              transform: `scale(${1 + contextActive * 0.03 - contextConsume * 0.04})`,
              transformOrigin: '50% 50%',
              filter: contextConsume > 0.01 ? `blur(${contextConsume * 1.1}px)` : 'none' }}>
              <div style={{ position: 'absolute', left: -46, top: -46, width: 466, height: 228,
                borderRadius: 999, opacity: 0.48,
                background: 'radial-gradient(ellipse at 50% 50%, rgba(143,191,216,0.16) 0%, rgba(240,168,94,0.08) 38%, rgba(23,19,17,0) 72%)' }} />
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(143,191,216,0.82)' }}>Projekt</div>
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '68px 1fr',
                alignItems: 'center', columnGap: 18 }}>
              <svg width="68" height="68" viewBox="0 0 68 68" style={{ display: 'block', overflow: 'visible',
                filter: 'drop-shadow(0 10px 22px rgba(143,191,216,0.20))' }}>
                <circle cx="34" cy="34" r="30" fill="rgba(143,191,216,0.075)"
                  stroke="rgba(143,191,216,0.22)" />
                <path d="M20 45 34 15l14 30h-8.4L34 33.1 28.4 45z" fill="#8fbfd8" opacity="0.95" />
                <path d="M17 51h34" fill="none" stroke="#8fbfd8" strokeWidth="2" strokeLinecap="round" opacity="0.48" />
                <circle cx="17" cy="51" r="2.7" fill="#8fbfd8" />
                <circle cx="51" cy="51" r="2.7" fill="#f0a85e" />
              </svg>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: DISPLAY, fontWeight: 780, fontSize: 32,
                  lineHeight: 1.04, color: TEXT, letterSpacing: '-0.014em' }}>Azure Landing Zone</div>
              </div>
              </div>
              <div style={{ position: 'absolute', left: 0, width: 374, bottom: 6, height: 2,
                borderRadius: 999, background: 'linear-gradient(90deg, #8fbfd8 0%, #f0a85e 52%, #e8655a 100%)',
                opacity: 0.62 }} />
            </div>

            {contextNodes.map((node) => {
              const p = rise(l, node.t + 0.12, 0.62);
              const active = contextActive;
              return (
                <div key={node.k} style={{ position: 'absolute', left: node.x, top: node.y,
                  width: node.w, height: node.h, borderRadius: 24, padding: '18px 18px',
                  boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '104px 1fr',
                  alignItems: 'center', columnGap: 17,
                  opacity: p * contextKeep,
                  transform: `translateY(${(1 - p) * 10 - active * 8}px) scale(${1 + active * 0.035 - contextConsume * 0.045})`,
                  transformOrigin: node.x < 300 ? '100% 50%' : '0 50%',
                  filter: contextConsume > 0.01 ? `blur(${contextConsume * 1.05}px)` : 'none',
                  background: `linear-gradient(135deg, ${node.color}${active > 0.01 ? '1d' : '12'} 0%, rgba(255,255,255,0.032) 100%)`,
                  border: `1px solid ${node.color}${active > 0.01 ? '70' : '32'}`,
                  boxShadow: `0 14px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 ${active * 24}px ${node.color}4d` }}>
                  <WorkArtifactPreview type={node.mock} color={node.color} active={active} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: DISPLAY, fontWeight: 755, fontSize: 29,
                      color: TEXT, letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      textShadow: active > 0.01 ? `0 0 16px ${node.color}66` : 'none' }}>{node.k}</div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>

        <svg width="1920" height="1080" viewBox="0 0 1920 1080"
          style={{ position: 'absolute', inset: 0, overflow: 'visible', opacity: doc, pointerEvents: 'none' }}>
          {integrations.map((item, i) => {
            const p = rise(l, item.t, 0.78);
            const endX = item.x + 8;
            const endY = item.y + 26;
            const d = `M ${item.ax} ${item.ay} L ${endX} ${endY}`;
            return (
              <g key={`${item.label}-link`} opacity={p}>
                <path d={d}
                  fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="9" strokeLinecap="round" />
                <path d={d}
                  fill="none" stroke={item.color} strokeWidth="2.2" strokeLinecap="round"
                  strokeDasharray="260" strokeDashoffset={(1 - p) * 260}
                  style={{ filter: `drop-shadow(0 0 8px ${item.color}55)` }} />
                <circle cx={item.ax} cy={item.ay} r={4.5} fill={item.color}
                  opacity={0.58 + Math.sin(l * 4.2 + i) * 0.16} />
              </g>
            );
          })}
        </svg>

        {integrations.map((item, i) => {
          const p = rise(l, item.t + 0.16, 0.62);
          return (
            <div key={item.label} style={{ position: 'absolute', left: item.x, top: item.y, width: 218, height: 66,
              borderRadius: 18, padding: '10px 12px', boxSizing: 'border-box', opacity: doc * p,
              transform: `translateX(${(1 - p) * 14}px) scale(${0.96 + p * 0.04})`,
              background: 'linear-gradient(135deg, rgba(24,22,20,0.84) 0%, rgba(36,31,27,0.62) 100%)',
              border: `1px solid ${item.color}44`,
              boxShadow: `0 18px 44px rgba(0,0,0,0.26), 0 0 18px ${item.color}22`,
              display: 'grid', gridTemplateColumns: '46px 1fr', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 46, height: 46, borderRadius: 15, display: 'flex', alignItems: 'center',
                justifyContent: 'center', background: `${item.color}18`, border: `1px solid ${item.color}36` }}>
                <img src={item.src} alt="" style={{ width: item.label === 'Word' ? 33 : 27, height: item.label === 'Word' ? 33 : 27,
                  objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: DISPLAY, fontWeight: 760, fontSize: item.label === 'Confluence' ? 20 : 22,
                  lineHeight: 1, color: TEXT, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                  {item.label}
                </div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 99, background: item.color,
                    boxShadow: `0 0 9px ${item.color}88` }} />
                  <span style={{ fontFamily: MONO, fontSize: 10.4, letterSpacing: '0.11em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)' }}>{item.meta}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const StableVertriebBackground = React.memo(function StableVertriebBackground({ local }) {
  const heldLocal = Math.min(local, PROMPT_CONTEXT_HOLD_LOCAL);
  const hideProjectBundle = local >= PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL;
  return <VertriebBackground local={heldLocal} hideProjectBundle={hideProjectBundle} />;
}, (prev, next) => {
  const prevHidden = prev.local >= PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL;
  const nextHidden = next.local >= PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL;
  return prev.local >= PROMPT_CONTEXT_HOLD_LOCAL &&
    next.local >= PROMPT_CONTEXT_HOLD_LOCAL &&
    prevHidden === nextHidden;
});

const OFFER_COMMENTS = [
  {
    icon: 'book',
    title: 'Arbeitsentwurf',
    docType: 'Project Work Draft',
    text: 'Konzepte und Code werden zum Arbeitsstand.',
    x: 1086, y: 380, w: 620, h: 230,
    anchorX: 1414, anchorY: 488,
    rows: ['Konzepte', 'Code'],
    tIn: 0.22,
    sources: [
      { x: 482, y: 456, color: '#8fbfd8', routeY: 398, targetDy: 92, t: 0.00 },
      { x: 878, y: 456, color: WARM, routeY: 440, targetDy: 132, t: 0.22 },
    ],
  },
  {
    icon: 'clock',
    title: 'Meeting Vorbereitung',
    docType: 'Meeting Prep',
    text: 'Risiko, Scope und letzte Meilensteine für den Termin.',
    x: 1086, y: 642, w: 620, h: 230,
    anchorX: 1484, anchorY: 704,
    rows: ['Risiko', 'Scope'],
    tIn: 5.22,
    sources: [
      { x: 482, y: 780, color: '#e8655a', routeY: 842, targetDy: 132, t: 0.00 },
      { x: 878, y: 780, color: '#c65bb0', routeY: 800, targetDy: 92, t: 0.22 },
    ],
  },
];
function WorkDocumentWindow({ card, p, local }) {
  const lineSeed = card.title === 'Arbeitsentwurf' ? [0.72, 0.54, 0.64, 0.44] : [0.62, 0.48, 0.58, 0.38];
  return (
    <div style={{ position: 'absolute', left: card.x, top: card.y, width: card.w, height: card.h,
      borderRadius: 24, overflow: 'hidden', opacity: p,
      transform: `translateY(${(1 - p) * 18}px) scale(${0.968 + p * 0.032})`,
      background: 'linear-gradient(180deg, rgba(236,233,226,0.84) 0%, rgba(213,207,198,0.70) 100%)',
      border: '1px solid rgba(255,255,255,0.28)',
      boxShadow: '0 30px 82px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.42)' }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.06) 0%, rgba(23,19,17,0.14) 100%)',
        pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 48,
        background: 'rgba(255,255,255,0.42)', borderBottom: '1px solid rgba(30,27,24,0.10)' }}>
        <div style={{ position: 'absolute', left: 22, top: 18, display: 'flex', gap: 7 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 9, height: 9, borderRadius: 99,
              background: 'rgba(30,27,24,0.24)' }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: 66, top: 17, fontFamily: MONO,
          fontSize: 9.8, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(30,27,24,0.62)' }}>
          {card.docType}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 32, right: 32, top: 74 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '42px 1fr', columnGap: 14, alignItems: 'center' }}>
          <div style={{ width: 42, height: 42, borderRadius: 13, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: 'rgba(240,168,94,0.13)', border: '1px solid rgba(240,168,94,0.28)' }}>
            <Icon name={card.icon} size={22} color={WARM} sw={1.9} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 770, fontSize: 30,
              lineHeight: 1, color: 'rgba(30,27,24,0.94)', letterSpacing: '-0.018em' }}>
              {card.title}
            </div>
            <div style={{ marginTop: 11, display: 'flex', gap: 8 }}>
              {card.rows.map((row, i) => {
                const rp = rise(local, OFFER_OVERLAY_START + card.tIn + 1.28 + i * 0.24, 0.58);
                return (
                  <span key={row} style={{ height: 24, borderRadius: 999, padding: '0 10px',
                    display: 'flex', alignItems: 'center', fontFamily: MONO, fontSize: 9.8,
                    letterSpacing: '0.08em', color: 'rgba(30,27,24,0.70)',
                    background: i === 0 ? 'rgba(143,191,216,0.24)' : 'rgba(240,168,94,0.22)',
                    border: '1px solid rgba(30,27,24,0.10)',
                    opacity: rp, transform: `translateY(${(1 - rp) * 5}px)` }}>
                    {row}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {lineSeed.map((w, i) => {
            const lp = rise(local, OFFER_OVERLAY_START + card.tIn + 1.68 + i * 0.18, 0.74);
            return (
              <div key={i} style={{ height: 46, borderRadius: 14,
                background: 'rgba(255,255,255,0.42)', border: '1px solid rgba(30,27,24,0.075)',
                opacity: lp, transform: `translateY(${(1 - lp) * 8}px)` }}>
                <div style={{ margin: '13px 14px 0', width: `${w * 100}%`, height: 9,
                  borderRadius: 999, background: 'rgba(30,27,24,0.24)' }} />
                <div style={{ margin: '9px 14px 0', width: `${Math.max(0.34, w - 0.18) * 100}%`, height: 6,
                  borderRadius: 999, background: i === 2 ? 'rgba(232,101,90,0.26)' : 'rgba(30,27,24,0.17)' }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ConsultantWorkDetailJump({ local, start = WORK_DETAIL_START, end = WORK_DETAIL_END }) {
  const op = band(local, start, end, 0.46);
  if (op <= 0.001) return null;
  const l = local - start;
  const left = rise(l, 0.10, 0.74);
  const right = rise(l, 0.46, 0.82);
  const code = rise(l, 0.86, 0.68);
  const deck = rise(l, 1.22, 0.72);
  const flow = rise(l, 0.64, 1.12);
  const repoFiles = [
    { name: 'landing-zone', icon: 'folder', color: '#8fbfd8' },
    { name: 'sentinel.tf', icon: 'file', color: WARM },
    { name: 'policy.yaml', icon: 'file', color: '#e8655a' },
  ];
  const repoLines = [
    { n: '18', w: 0.72, c: '#8fbfd8', indent: 0 },
    { n: '19', w: 0.54, c: WARM, indent: 28 },
    { n: '20', w: 0.82, c: 'rgba(255,255,255,0.30)', indent: 28 },
    { n: '21', w: 0.44, c: '#c65bb0', indent: 54 },
    { n: '22', w: 0.66, c: 'rgba(255,255,255,0.22)', indent: 28 },
    { n: '23', w: 0.50, c: '#e8655a', indent: 54 },
  ];
  const deckThumbs = ['Scope', 'Architektur', 'Roadmap', 'Risiken'];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 28 }}>
      <div style={{ position: 'absolute', inset: 0,
        background: `rgba(23,19,17,${0.70 + op * 0.12})`,
        backdropFilter: 'blur(4.8px)', WebkitBackdropFilter: 'blur(4.8px)' }} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="detail-jump-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a85e" />
            <stop offset="0.58" stopColor="#8fbfd8" />
            <stop offset="1" stopColor="#e8655a" />
          </linearGradient>
        </defs>
        <path d="M 850 522 L 942 522 L 982 392"
          fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="10" strokeLinecap="round"
          opacity={flow * 0.52} />
        <path d="M 850 522 L 942 522 L 982 392"
          fill="none" stroke="url(#detail-jump-flow)" strokeWidth="2.6" strokeLinecap="round"
          strokeDasharray="360" strokeDashoffset={(1 - flow) * 360}
          style={{ filter: 'drop-shadow(0 0 10px rgba(143,191,216,0.35))' }} />
        <path d="M 850 642 L 940 642 L 982 696"
          fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="10" strokeLinecap="round"
          opacity={flow * 0.42} />
        <path d="M 850 642 L 940 642 L 982 696"
          fill="none" stroke="url(#detail-jump-flow)" strokeWidth="2.6" strokeLinecap="round"
          strokeDasharray="360" strokeDashoffset={(1 - flow) * 360}
          style={{ filter: 'drop-shadow(0 0 10px rgba(240,168,94,0.30))' }} />
      </svg>

      <div style={{ position: 'absolute', left: 128, top: 248, width: 760, height: 610,
        borderRadius: 30, overflow: 'hidden', opacity: left,
        transform: `translateX(${(1 - left) * -34}px) scale(${0.972 + left * 0.028})`,
        background: 'linear-gradient(180deg, rgba(239,236,230,0.91) 0%, rgba(213,208,198,0.80) 100%)',
        border: '1px solid rgba(255,255,255,0.30)',
        boxShadow: '0 30px 82px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.44)' }}>
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(23,19,17,0.06), rgba(23,19,17,0.15))' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 64,
          background: 'rgba(255,255,255,0.42)', borderBottom: '1px solid rgba(30,27,24,0.10)' }}>
          <div style={{ position: 'absolute', left: 26, top: 24, display: 'flex', gap: 9 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 10, height: 10, borderRadius: 99,
              background: 'rgba(30,27,24,0.25)' }} />)}
          </div>
          <div style={{ position: 'absolute', left: 92, top: 22, fontFamily: MONO, fontSize: 10.5,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(30,27,24,0.50)' }}>
            Meeting Prep
          </div>
        </div>
        <div style={{ position: 'absolute', left: 54, top: 118, right: 54 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: 19, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(240,168,94,0.15)', border: '1px solid rgba(240,168,94,0.30)' }}>
              <Icon name="clock" size={31} color={WARM} sw={1.85} />
            </div>
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 38,
                lineHeight: 1, color: 'rgba(30,27,24,0.86)', letterSpacing: '-0.02em' }}>
                Meeting Vorbereitung
              </div>
              <div style={{ marginTop: 10, display: 'flex', gap: 9 }}>
                {['Agenda', 'Fragen', 'Risiken'].map((tag, i) => {
                  const p = rise(l, 0.56 + i * 0.14, 0.48);
                  return <span key={tag} style={{ height: 28, borderRadius: 999, padding: '0 11px',
                    display: 'flex', alignItems: 'center', fontFamily: MONO, fontSize: 10.2,
                    letterSpacing: '0.08em', color: 'rgba(30,27,24,0.62)',
                    background: i === 2 ? 'rgba(232,101,90,0.14)' : 'rgba(255,255,255,0.28)',
                    border: '1px solid rgba(30,27,24,0.08)', opacity: p,
                    transform: `translateY(${(1 - p) * 7}px)` }}>{tag}</span>;
                })}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 56, display: 'grid', gap: 20 }}>
            {[
              ['Letzte Meilensteine', '#8fbfd8', 0.80],
              ['Kritische Client-Fragen', '#e8655a', 0.70],
              ['Nächste Schritte', WARM, 0.86],
            ].map(([label, color, w], i) => {
              const p = rise(l, 0.92 + i * 0.20, 0.60);
              return (
                <div key={label} style={{ height: 66, borderRadius: 18, padding: '0 22px',
                  display: 'grid', gridTemplateColumns: '10px 218px 1fr', gap: 20,
                  alignItems: 'center', background: 'rgba(255,255,255,0.22)',
                  border: '1px solid rgba(30,27,24,0.07)', opacity: p,
                  transform: `translateY(${(1 - p) * 10}px)` }}>
                  <span style={{ width: 9, height: 9, borderRadius: 99, background: color,
                    boxShadow: `0 0 9px ${color}66` }} />
                  <span style={{ fontFamily: DISPLAY, fontWeight: 730, fontSize: 18,
                    color: 'rgba(30,27,24,0.70)' }}>{label}</span>
                  <span style={{ height: 8, width: `${w * 100}%`, borderRadius: 999,
                    background: 'rgba(30,27,24,0.18)' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 972, top: 226, width: 820, height: 646,
        opacity: right, transform: `translateX(${(1 - right) * 42}px) scale(${0.974 + right * 0.026})` }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 820, height: 306,
          borderRadius: 26, overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(18,22,25,0.94) 0%, rgba(30,27,24,0.80) 100%)',
          border: '1px solid rgba(143,191,216,0.18)',
          boxShadow: '0 28px 70px rgba(0,0,0,0.32)' }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 20% 25%, rgba(143,191,216,0.11), rgba(23,19,17,0) 42%)' }} />
          <div style={{ position: 'absolute', left: 28, top: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="folder" size={18} color="#8fbfd8" sw={1.9} />
            <span style={{ fontFamily: MONO, fontSize: 10.4,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(143,191,216,0.72)' }}>
              Git Repository
            </span>
            <span style={{ height: 24, borderRadius: 999, padding: '0 10px', display: 'flex',
              alignItems: 'center', fontFamily: MONO, fontSize: 10, letterSpacing: '0.05em',
              color: 'rgba(250,250,249,0.62)', background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)' }}>main</span>
          </div>
          <div style={{ position: 'absolute', right: 28, top: 24, fontFamily: MONO, fontSize: 10,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(143,191,216,0.72)' }}>
            src / azure-landing-zone
          </div>
          <div style={{ position: 'absolute', left: 30, top: 62, fontFamily: DISPLAY,
            fontWeight: 800, fontSize: 34, letterSpacing: '-0.018em', color: TEXT }}>
            Smart Matched Code
          </div>
          <div style={{ position: 'absolute', left: 30, top: 118, width: 220, bottom: 28,
            borderRadius: 18, padding: '16px 14px', boxSizing: 'border-box',
            background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.075)' }}>
            {repoFiles.map((file, i) => {
              const p = rise(l, 1.00 + i * 0.10, 0.48) * code;
              return (
                <div key={file.name} style={{ height: 42, borderRadius: 12, padding: '0 10px',
                  display: 'grid', gridTemplateColumns: '24px 1fr', gap: 9, alignItems: 'center',
                  opacity: p, transform: `translateX(${(1 - p) * -8}px)`,
                  background: i === 1 ? 'rgba(143,191,216,0.08)' : 'transparent',
                  border: i === 1 ? '1px solid rgba(143,191,216,0.12)' : '1px solid transparent' }}>
                  <Icon name={file.icon} size={18} color={file.color} sw={1.8} />
                  <span style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '0.02em',
                    color: i === 1 ? 'rgba(250,250,249,0.82)' : 'rgba(250,250,249,0.58)' }}>
                    {file.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', left: 274, top: 116, right: 30, bottom: 28,
            borderRadius: 18, overflow: 'hidden',
            background: 'rgba(9,13,16,0.42)', border: '1px solid rgba(255,255,255,0.075)' }}>
            <div style={{ height: 34, display: 'flex', alignItems: 'center', padding: '0 15px',
              gap: 8, borderBottom: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(250,250,249,0.58)', fontFamily: MONO, fontSize: 10.5 }}>
              <span>terraform/security.tf</span>
              <span style={{ marginLeft: 'auto', color: 'rgba(143,191,216,0.66)' }}>matched snippet</span>
            </div>
            <div style={{ position: 'absolute', left: 16, right: 16, top: 52, display: 'grid', gap: 10 }}>
              {repoLines.map((row, i) => {
                const p = rise(l, 1.06 + i * 0.08, 0.54) * code;
                return (
                  <div key={row.n} style={{ height: 12, display: 'grid',
                    gridTemplateColumns: '28px 1fr', gap: 12, alignItems: 'center',
                    opacity: p, transform: `translateY(${(1 - p) * 5}px)` }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, color: 'rgba(250,250,249,0.24)',
                      textAlign: 'right' }}>{row.n}</span>
                    <span style={{ marginLeft: row.indent, width: `${row.w * 100}%`, height: 7,
                      borderRadius: 999, background: row.c,
                      boxShadow: i === 0 ? '0 0 12px rgba(143,191,216,0.20)' : 'none',
                      transform: `scaleX(${p})`, transformOrigin: '0 50%' }} />
                  </div>
                );
              })}
            </div>
            <div style={{ position: 'absolute', right: 16, bottom: 14, height: 30, borderRadius: 999,
              padding: '0 12px', display: 'flex', alignItems: 'center', gap: 7,
              background: 'rgba(143,191,216,0.08)', border: '1px solid rgba(143,191,216,0.16)',
              fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(250,250,249,0.70)', opacity: code }}>
              <Icon name="check" size={13} color="#8fbfd8" sw={2.2} />
              wiederverwendbar
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', left: 0, bottom: 0, width: 820, height: 300,
          borderRadius: 26, padding: '28px 30px', boxSizing: 'border-box',
          opacity: deck, transform: `translateY(${(1 - deck) * 22}px)`,
          background: 'linear-gradient(135deg, rgba(250,246,240,0.88) 0%, rgba(218,211,201,0.78) 100%)',
          border: '1px solid rgba(255,255,255,0.28)',
          boxShadow: '0 28px 70px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.36)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 32,
                lineHeight: 1, color: 'rgba(30,27,24,0.86)', letterSpacing: '-0.018em' }}>
                Konzept-Präsentation
              </div>
              <div style={{ marginTop: 10, fontFamily: MONO, fontSize: 10.5,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(30,27,24,0.50)' }}>Draft supported · PPTX Export</div>
            </div>
            <div style={{ height: 34, borderRadius: 999, padding: '0 13px',
              display: 'flex', alignItems: 'center', gap: 8, fontFamily: MONO,
              fontSize: 10.4, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(30,27,24,0.70)', background: 'rgba(255,255,255,0.34)',
              border: '1px solid rgba(30,27,24,0.08)' }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: WARM,
                boxShadow: '0 0 9px rgba(240,168,94,0.55)' }} />
              PPTX
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '112px 1fr', gap: 18 }}>
            <div style={{ display: 'grid', gap: 9 }}>
              {deckThumbs.map((thumb, i) => {
                const p = rise(l, 1.46 + i * 0.12, 0.50);
                return (
                  <div key={thumb} style={{ height: 38, borderRadius: 10, padding: '0 10px',
                    display: 'flex', alignItems: 'center', gap: 8, opacity: p,
                    transform: `translateX(${(1 - p) * -8}px)`,
                    background: i === 1 ? 'rgba(240,168,94,0.18)' : 'rgba(255,255,255,0.30)',
                    border: '1px solid rgba(30,27,24,0.07)' }}>
                    <span style={{ width: 14, height: 9, borderRadius: 3,
                      background: i === 0 ? '#8fbfd8' : i === 1 ? WARM : i === 2 ? '#e8655a' : '#c65bb0' }} />
                    <span style={{ fontFamily: MONO, fontSize: 9.4, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'rgba(30,27,24,0.52)' }}>{thumb}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ position: 'relative', height: 136, borderRadius: 18, padding: '17px 20px',
              boxSizing: 'border-box', overflow: 'hidden',
              background: 'rgba(255,255,255,0.38)', border: '1px solid rgba(30,27,24,0.08)' }}>
              <div style={{ width: 156, height: 11, borderRadius: 999, background: 'rgba(30,27,24,0.22)' }} />
              <div style={{ marginTop: 14, width: 240, height: 7, borderRadius: 999,
                background: 'rgba(30,27,24,0.13)' }} />
              <div style={{ position: 'absolute', left: 20, bottom: 20, width: 188, height: 52,
                borderRadius: 12, background: 'rgba(143,191,216,0.16)',
                border: '1px solid rgba(143,191,216,0.14)' }}>
                <div style={{ position: 'absolute', left: 14, top: 14, width: 45, height: 5,
                  borderRadius: 99, background: '#8fbfd8' }} />
                <div style={{ position: 'absolute', left: 14, top: 29, width: 112, height: 6,
                  borderRadius: 99, background: 'rgba(30,27,24,0.16)' }} />
              </div>
              <div style={{ position: 'absolute', left: 230, bottom: 20, width: 188, height: 52,
                borderRadius: 12, background: 'rgba(240,168,94,0.14)',
                border: '1px solid rgba(240,168,94,0.16)' }}>
                <div style={{ position: 'absolute', left: 14, top: 14, width: 45, height: 5,
                  borderRadius: 99, background: WARM }} />
                <div style={{ position: 'absolute', left: 14, top: 29, width: 126, height: 6,
                  borderRadius: 99, background: 'rgba(30,27,24,0.16)' }} />
              </div>
              <div style={{ position: 'absolute', right: 22, bottom: 20, width: 122, height: 52,
                borderRadius: 12, background: 'rgba(232,101,90,0.13)',
                border: '1px solid rgba(232,101,90,0.14)' }}>
                <div style={{ position: 'absolute', left: 14, top: 14, width: 40, height: 5,
                  borderRadius: 99, background: '#e8655a' }} />
                <div style={{ position: 'absolute', left: 14, top: 29, width: 72, height: 6,
                  borderRadius: 99, background: 'rgba(30,27,24,0.16)' }} />
              </div>
              {deckThumbs.slice(0, 3).map((_, i) => {
              const p = rise(l, 1.50 + i * 0.16, 0.54);
              return (
                <div key={i} style={{ position: 'absolute', right: 18 + i * 24, top: 18 + i * 2,
                  width: 9, height: 9, borderRadius: 99, opacity: p,
                  background: i === 0 ? WARM : i === 1 ? '#8fbfd8' : '#e8655a',
                  boxShadow: '0 0 9px rgba(30,27,24,0.12)' }} />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function OfferCardsOverlay({ local }) {
  const op = band(local, OFFER_OVERLAY_START, OFFER_VISUAL_END, 0.45);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none',
      transform: `translateY(${OFFER_STAGE_Y}px) scale(${OFFER_STAGE_SCALE})`,
      transformOrigin: '50% 50%' }}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        {OFFER_COMMENTS.map((card) => {
          const lineStart = OFFER_OVERLAY_START + card.tIn;
          const p = rise(local, lineStart, 0.62);
          const targetX = card.x + 18;
          const routeX = card.x - 168;
          return (
            <g key={card.title} opacity={p}>
              {(card.sources || []).map((source, i) => {
                const sp = rise(local, lineStart + source.t, 1.18);
                const sy = source.y + (i === 0 ? -5 : 5);
                const routeY = (source.routeY || source.y) + (i === 0 ? -5 : 5);
                const targetY = card.y + (source.targetDy || (58 + i * 42));
                const d = `M ${source.x} ${sy} L ${source.x + 78} ${routeY} L ${routeX} ${routeY} L ${targetX} ${targetY}`;
                return (
                  <g key={`${card.title}-${i}`} opacity={sp}>
                    <path d={d}
                      fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="9" strokeLinecap="round" />
                    <path d={d}
                      fill="none" stroke={source.color} strokeWidth="2.3" strokeLinecap="round"
                      strokeDasharray="780" strokeDashoffset={(1 - sp) * 780}
                      style={{ filter: `drop-shadow(0 0 8px ${source.color}66)` }} />
                    <circle cx={source.x} cy={sy} r={4.8} fill={source.color}
                      opacity={0.55 + sp * 0.35} />
                    <circle cx={targetX} cy={targetY} r={3.8 + sp * 1.2} fill={source.color}
                      opacity={0.24 + sp * 0.42}
                      style={{ filter: `drop-shadow(0 0 8px ${source.color}66)` }} />
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      {OFFER_COMMENTS.map((card) => {
        const p = rise(local, OFFER_OVERLAY_START + card.tIn + 0.36, 0.96);
        return (
          <WorkDocumentWindow key={card.title} card={card} p={p} local={local} />
        );
      })}
    </div>
  );
}

const WISSEN_GRAPH_LEFT = (1920 - 1484) / 2;
const WISSEN_GRAPH_TOP = 244;
const WISSEN_AGENT_NODE = { x: 790, y: 30, w: 610, h: 318 };
const WISSEN_AGENT_STAGE_TARGET = {
  x: WISSEN_GRAPH_LEFT + WISSEN_AGENT_NODE.x + WISSEN_AGENT_NODE.w / 2,
  y: WISSEN_GRAPH_TOP + WISSEN_AGENT_NODE.y + WISSEN_AGENT_NODE.h / 2,
};
const PROMPT_SMALL_RADIUS = 36;
const PROMPT_LARGE_RADIUS = 38;
const WORK_PROMPT_SOURCE_ANCHORS = {
  Konzepte: { x: 735, y: 666 },
  Code: { x: 1027, y: 666 },
  Projekt: { x: 902, y: 776 },
  Risiko: { x: 735, y: 902 },
  Scope: { x: 1027, y: 902 },
};
const PROMPT_RECEIVER_LAYOUT = {
  agent: { x: 650, y: 540, w: 620, h: 118 },
  core: { x: 720, y: 715, w: 480, h: 112 },
  nodes: [
    { id: 'project', icon: 'briefcase', title: 'Projekte', x: 430, y: 875, w: 255, h: 78, color: '#8fbfd8', t: 0.62 },
    { id: 'database', icon: 'database', title: 'Datenbanken', x: 748, y: 875, w: 285, h: 78, color: WARM, t: 0.86 },
    { id: 'documents', icon: 'book', title: 'Dokumente', x: 1095, y: 875, w: 282, h: 78, color: '#e8655a', t: 1.10 },
  ],
};
const PROMPT_RECEIVER_AGENT_TARGET = {
  x: PROMPT_RECEIVER_LAYOUT.agent.x + PROMPT_RECEIVER_LAYOUT.agent.w / 2,
  y: PROMPT_RECEIVER_LAYOUT.agent.y + PROMPT_RECEIVER_LAYOUT.agent.h / 2,
};
const PROMPT_CONTEXT_HOLD_LOCAL = WORK_PROMPT_START + 2.12;
const PROMPT_BRIDGE_COLLECT_OFFSET = 2.62;
const PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL = WORK_PROMPT_START + PROMPT_BRIDGE_COLLECT_OFFSET + 1.10;

function PromptKnowledgeReceiver({ t, appearStart, receiveStart, exitStart }) {
  const layout = PROMPT_RECEIVER_LAYOUT;
  const op = band(t, appearStart, exitStart, 0.55);
  if (op <= 0.001) return null;

  const agentIn = rise(t, appearStart, 0.62);
  const coreIn = rise(t, appearStart + 0.74, 0.72);
  const receive = rise(t, receiveStart + 0.82, 0.42);
  const think = band(t, receiveStart + 1.06, exitStart - 0.18, 0.34);
  const fade = 1 - rise(t, exitStart - 0.55, 0.55);
  const center = (node) => ({ x: node.x + node.w / 2, y: node.y + node.h / 2 });
  const agentC = center(layout.agent);
  const coreC = center(layout.core);
  const nodeIn = (node) => rise(t, appearStart + 1.18 + node.t * 0.52, 0.62);
  const line = (a, b, p, color, key) => (
    <g key={key} opacity={p}>
      <path d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
        fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" strokeLinecap="round" />
      <path d={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
        fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round"
        strokeDasharray="720" strokeDashoffset={(1 - p) * 720}
        style={{ filter: `drop-shadow(0 0 10px ${color}55)` }} />
    </g>
  );
  const ReceiverNode = ({ node, p, core = false }) => (
    <div style={{
      ...glassDark(core ? 26 : 24),
      position: 'absolute', left: node.x, top: node.y, width: node.w, height: node.h,
      boxSizing: 'border-box', padding: core ? '22px 26px' : '16px 18px',
      display: 'flex', alignItems: 'center', gap: core ? 18 : 14,
      opacity: p, transform: `translateY(${(1 - p) * 16}px) scale(${0.975 + p * 0.025})`,
      borderColor: `${node.color}42`,
      boxShadow: `0 26px 70px rgba(0,0,0,0.34), 0 0 ${14 + p * 18}px ${node.color}18`,
    }}>
      <div style={{
        width: core ? 60 : 48, height: core ? 60 : 48, borderRadius: core ? 19 : 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${node.color}18`, border: `1px solid ${node.color}40`, flexShrink: 0,
      }}>
        <Icon name={node.icon} size={core ? 28 : 24} color={node.color} sw={1.9} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: DISPLAY, fontSize: core ? 36 : 26, lineHeight: 1,
          fontWeight: 700, color: TEXT }}>
          {node.title}
        </div>
        {core && (
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 58, height: 4, borderRadius: 99,
                background: i === 0 ? node.color : 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
  const AgentVisual = ({ p }) => {
    const size = 190;
    const pulse = 0.5 + Math.sin(t * 3.2) * 0.5;
    return (
      <div style={{ position: 'absolute', left: agentC.x - size / 2, top: agentC.y - size / 2,
        width: size, height: size, opacity: p,
        transform: `translateY(${(1 - p) * 16}px) scale(${0.94 + p * 0.06})`,
        pointerEvents: 'none' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
          style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <defs>
            <radialGradient id="prompt-agent-orb" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#8fbfd8" stopOpacity="0.30" />
              <stop offset="0.58" stopColor="#f0a85e" stopOpacity="0.10" />
              <stop offset="1" stopColor="#8fbfd8" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={74 + receive * 14}
            fill="url(#prompt-agent-orb)" opacity={0.42 + receive * 0.34} />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={size / 2} cy={size / 2}
              r={48 + i * 22 + receive * (18 + i * 8)}
              fill="none" stroke={i === 1 ? WARM : '#8fbfd8'}
              strokeWidth={1.55 - i * 0.15}
              opacity={(0.17 + receive * 0.17 - i * 0.035) * p}
              strokeDasharray={i === 2 ? '10 13' : 'none'}
              style={{ filter: 'drop-shadow(0 0 12px rgba(143,191,216,0.22))' }} />
          ))}
        </svg>
        <div style={{ position: 'absolute', left: 38, top: 38, width: 114, height: 114,
          borderRadius: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 32%, rgba(143,191,216,0.24) 0%, rgba(30,26,23,0.88) 72%)',
          border: '1px solid rgba(143,191,216,0.48)',
          boxShadow: `0 28px 74px rgba(0,0,0,0.38), 0 0 ${18 + receive * 32 + pulse * 10}px rgba(143,191,216,0.24)` }}>
          <Icon name="agents" size={54} color="#8fbfd8" sw={1.7} />
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 158,
          textAlign: 'center', fontFamily: DISPLAY, fontSize: 23,
          fontWeight: 760, letterSpacing: '-0.01em', color: TEXT,
          textShadow: '0 12px 32px rgba(0,0,0,0.52)' }}>
          AI Agent
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op * fade, pointerEvents: 'none' }}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        {line(agentC, coreC, coreIn, '#8fbfd8', 'agent-core')}
        {layout.nodes.map((node) => line(coreC, center(node), nodeIn(node), node.color, `core-${node.id}`))}
        <g opacity={receive}>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={agentC.x} cy={agentC.y}
              r={44 + receive * (36 + i * 26)}
              fill="none" stroke={i === 1 ? WARM : '#8fbfd8'}
              strokeWidth={2 - i * 0.25}
              opacity={(0.26 - i * 0.05) * receive}
              style={{ filter: 'drop-shadow(0 0 16px rgba(143,191,216,0.26))' }} />
          ))}
        </g>
      </svg>
      <AgentVisual p={agentIn} />
      <ReceiverNode node={{ ...layout.core, icon: 'sparkles', title: 'Wissensbasis', color: WARM }} p={coreIn} core />
      {layout.nodes.map((node) => <ReceiverNode key={node.id} node={node} p={nodeIn(node)} />)}
      {think > 0.01 && (
        <div style={{ position: 'absolute', left: agentC.x - 23,
          top: agentC.y + 66, display: 'flex', gap: 8, opacity: think }}>
          {[0, 1, 2].map((i) => {
            const color = i === 1 ? WARM : '#8fbfd8';
            const pulse = Math.pow(Math.sin(t * 4.8 + i * 1.4), 2);
            return (
              <span key={i} style={{ width: 10, height: 10, borderRadius: 99,
                background: color, opacity: 0.35 + 0.45 * pulse,
                boxShadow: `0 0 14px ${color}66` }} />
            );
          })}
        </div>
      )}
    </div>
  );
}

function PersistentPromptAgentBridge() {
  const t = useTime();
  const promptAbs = SCENE_VERTRIEB_START + WORK_PROMPT_START;
  const typeStart = promptAbs;
  const collectStart = promptAbs + PROMPT_BRIDGE_COLLECT_OFFSET;
  const createStart = collectStart + 1.82;
  const sendStart = SCENE_WISSEN_START - 1.32;
  const sendDur = 2.42;
  const end = SCENE_WISSEN_START + 2.45;
  const op = band(t, typeStart - 0.12, end, 0.42);
  if (op <= 0.001) return null;

  const query = 'Projektstatus, Risiken, nächste Schritte?';
  const headline = 'Consultant-Arbeit. Immer im Blick.';
  const promptIn = rise(t, typeStart, 0.55);
  const typedQuery = query.slice(0, Math.floor(clamp((t - typeStart - 0.55) * 34, 0, query.length)));
  const typedHeadline = headline.slice(0, Math.floor(clamp((t - typeStart - 0.12) * 26, 0, headline.length)));
  const headlineOut = 1 - rise(t, collectStart - 0.44, 0.38);
  const displayQuery = t < collectStart ? typedQuery : query;
  const caretOn = Math.floor(t * 2.4) % 2 === 0;
  const sources = [
    { k: 'Konzepte', icon: 'search', color: '#8fbfd8', ...WORK_PROMPT_SOURCE_ANCHORS.Konzepte },
    { k: 'Code', icon: 'file', color: WARM, ...WORK_PROMPT_SOURCE_ANCHORS.Code },
    { k: 'Projekt', icon: 'azure', color: '#8fbfd8', ...WORK_PROMPT_SOURCE_ANCHORS.Projekt },
    { k: 'Risiko', icon: 'clock', color: '#e8655a', ...WORK_PROMPT_SOURCE_ANCHORS.Risiko },
    { k: 'Scope', icon: 'briefcase', color: '#c65bb0', ...WORK_PROMPT_SOURCE_ANCHORS.Scope },
  ];
  const smallBox = { x: 520, y: 348, w: 880, h: 72 };
  const largeBox = { x: 392, y: 292, w: 1136, h: 184 };
  const agent = PROMPT_RECEIVER_AGENT_TARGET;
  const collect = Easing.easeInOutCubic(clamp((t - collectStart) / 2.05, 0, 1));
  const collectWake = rise(t, collectStart, 0.42);
  const grow = Easing.easeInOutCubic(clamp((t - collectStart) / 1.92, 0, 1));
  const box = {
    x: mix(smallBox.x, largeBox.x, grow),
    y: mix(smallBox.y, largeBox.y, grow),
    w: mix(smallBox.w, largeBox.w, grow),
    h: mix(smallBox.h, largeBox.h, grow),
  };
  const sendButton = {
    x: box.x + box.w - mix(42, 58, grow),
    y: box.y + box.h / 2,
    size: mix(46, 64, grow),
  };
  const badgeIn = rise(t, collectStart + 1.18, 0.72);
  const badgeOut = 1 - rise(t, sendStart + 0.18, 0.42);
  const create = rise(t, createStart, 0.58);
  const click = band(t, sendStart - 0.20, sendStart + 0.86, 0.18);
  const hold = 1 - rise(t, sendStart - 0.08, 0.28);
  const send = Easing.easeInOutCubic(clamp((t - sendStart) / sendDur, 0, 1));
  const packetFade = 1 - rise(t, sendStart + 0.82, 0.42);
  const focusVeil = rise(t, createStart + 0.62, 0.96) * (1 - rise(t, end - 0.74, 0.68));
  const promptFade = 1 - rise(t, sendStart + 0.24, 0.72);
  const fade = 1 - rise(t, end - 0.52, 0.52);
  const launch = { x: box.x + 62, y: box.y + box.h / 2 + 4 };
  const packetPath = `M ${launch.x} ${launch.y} C ${box.x + 240} ${launch.y + 126}, ${agent.x - 250} ${agent.y - 92}, ${agent.x} ${agent.y}`;
  const packetX = mix(launch.x, agent.x, send);
  const packetY = mix(launch.y, agent.y, send) - Math.sin(send * Math.PI) * 62;
  const tailU = Math.max(0, send - 0.12);
  const tailX = mix(launch.x, agent.x, tailU);
  const tailY = mix(launch.y, agent.y, tailU) - Math.sin(tailU * Math.PI) * 62;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: op * fade, zIndex: 44 }}>
      <div style={{ position: 'absolute', inset: 0, opacity: focusVeil,
        background: BG }} />
      <PromptKnowledgeReceiver t={t} appearStart={sendStart - 0.58} receiveStart={sendStart} exitStart={end} />
      <div style={{ ...glassDark(28), position: 'absolute', top: 252, left: 520, width: 880,
        padding: '16px 30px 18px', boxSizing: 'border-box',
        fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT,
        fontSize: 40, lineHeight: 1.05, minHeight: 78,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: promptIn * headlineOut, transform: `translateY(${(1 - promptIn) * 24}px) scale(${0.97 + promptIn * 0.03})`,
        textShadow: '0 2px 26px rgba(8,6,4,0.75)' }}>
        <span>{typedHeadline}</span>
        <span style={{ display: 'inline-block', width: 4, height: 54, marginLeft: 8,
          borderRadius: 99, background: WARM,
          opacity: caretOn && typedHeadline.length < headline.length ? 0.9 : 0 }} />
      </div>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="persistent-prompt-send" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a85e" />
            <stop offset="0.48" stopColor="#e8655a" />
            <stop offset="1" stopColor="#8fbfd8" />
          </linearGradient>
          <linearGradient id="persistent-prompt-shell" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8fbfd8" />
            <stop offset="0.52" stopColor="#f0a85e" />
            <stop offset="1" stopColor="#e8655a" />
          </linearGradient>
        </defs>
        <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={mix(PROMPT_SMALL_RADIUS, PROMPT_LARGE_RADIUS, grow)}
          fill="none" stroke="url(#persistent-prompt-shell)" strokeWidth="2.2"
          strokeDasharray="1760" strokeDashoffset={(1 - collectWake) * 1760}
          opacity={(0.18 * promptIn + 0.82 * collectWake) * promptFade}
          style={{ filter: 'drop-shadow(0 0 18px rgba(143,191,216,0.22))' }} />
        {sources.map((source, i) => {
          const lineFade = 1 - rise(t, createStart + 0.02, 0.54);
          const chipFade = 1 - rise(t, createStart + 0.10, 0.34);
          const targetX = box.x + box.w - 352 + i * 50;
          const targetY = box.y + box.h / 2 + 26;
          const midX = mix(source.x, targetX, collect);
          const midY = mix(source.y, targetY, collect) - Math.sin(collect * Math.PI) * 28;
          const size = mix(42, 28, collect);
          return (
            <g key={`prompt-source-${source.k}`} opacity={collectWake * lineFade}>
              <circle cx={source.x} cy={source.y} r={24 + collectWake * 9}
                fill="none" stroke={source.color} strokeWidth="2"
                opacity={0.18 + collectWake * 0.24}
                style={{ filter: `drop-shadow(0 0 12px ${source.color}66)` }} />
              <path d={`M ${source.x} ${source.y} L ${targetX} ${targetY}`}
                fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" strokeLinecap="round" />
              <path d={`M ${source.x} ${source.y} L ${targetX} ${targetY}`}
                fill="none" stroke={source.color} strokeWidth="2.4" strokeLinecap="round"
                strokeDasharray="1120" strokeDashoffset={(1 - collect) * 1120}
                style={{ filter: `drop-shadow(0 0 10px ${source.color}55)` }} />
              <g transform={`translate(${midX} ${midY})`} opacity={collectWake * chipFade}>
                <rect x={-size / 2} y={-size / 2} width={size} height={size} rx={size * 0.34}
                  fill="rgba(30,26,23,0.92)" stroke={source.color} strokeWidth="1.2" />
                <g transform={`translate(${-size * 0.27} ${-size * 0.27})`}>
                  <Icon name={source.icon} size={size * 0.54} color={source.color} sw={2} />
                </g>
              </g>
            </g>
          );
        })}
        <g opacity={click}>
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={sendButton.x} cy={sendButton.y}
              r={sendButton.size * 0.42 + click * (48 + i * 36)} fill="none"
              stroke={i === 1 ? '#8fbfd8' : WARM} strokeWidth={2.1 - i * 0.32}
              opacity={(0.36 - i * 0.07) * click * hold}
              style={{ filter: 'drop-shadow(0 0 16px rgba(240,168,94,0.28))' }} />
          ))}
        </g>
        <path d={packetPath}
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" strokeLinecap="round"
          opacity={send * packetFade * 0.12} />
        <path d={packetPath}
          fill="none" stroke="url(#persistent-prompt-send)" strokeWidth="2.1"
          strokeLinecap="round" strokeDasharray="860" strokeDashoffset={(1 - send) * 860}
          opacity={send * packetFade * 0.76}
          style={{ filter: 'drop-shadow(0 0 8px rgba(143,191,216,0.30))' }} />
        {create > 0.01 && packetFade > 0.01 && (
          <g transform={`translate(${packetX} ${packetY})`} opacity={create * packetFade}>
            {send > 0.02 && <line x1={tailX - packetX} y1={tailY - packetY} x2="-16" y2="0"
              stroke="url(#persistent-prompt-send)" strokeWidth="1.6" strokeLinecap="round"
              opacity="0.48" />}
            <rect x="-22" y="-18" width="44" height="36" rx="13"
              fill="rgba(30,26,23,0.94)" stroke="rgba(143,191,216,0.58)"
              strokeWidth="1.4" />
            <g transform="translate(-9.5 -9.5)">
              <Icon name="file" size={19} color="#8fbfd8" sw={1.9} />
            </g>
          </g>
        )}
      </svg>
      <div style={{ ...glassDark(mix(PROMPT_SMALL_RADIUS, PROMPT_LARGE_RADIUS, grow)), position: 'absolute',
        left: box.x, top: box.y, width: box.w, height: box.h,
        padding: `${mix(0, 24, grow)}px ${mix(18, 26, grow)}px ${mix(0, 22, grow)}px ${mix(28, 32, grow)}px`,
        boxSizing: 'border-box', opacity: promptIn * promptFade,
        display: 'grid', gridTemplateColumns: `1fr ${mix(240, 334, grow)}px ${mix(46, 72, grow)}px`,
        columnGap: mix(14, 22, grow), alignItems: 'center',
        transform: `translateY(${(1 - promptIn) * 8}px) scale(${1 + click * 0.004})`,
        boxShadow: `0 34px 92px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.13), 0 0 ${12 + click * 34}px rgba(143,191,216,0.22)` }}>
        <div style={{ minWidth: 0, display: 'grid', gap: mix(0, 10, grow) }}>
          {grow > 0.28 && (
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.13em',
              textTransform: 'uppercase', color: 'rgba(143,191,216,0.68)',
              opacity: grow }}>
              Consultant Prompt
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
            <Icon name="sparkles" size={mix(24, 28, grow)} color={WARM} sw={1.8} />
            <span style={{ fontFamily: INTER, fontSize: mix(20.5, 26, grow), fontWeight: 620,
              color: TEXT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {displayQuery}
            </span>
            <span style={{ width: 3, height: 26, background: WARM, flexShrink: 0,
              opacity: grow > 0.2 || displayQuery.length >= query.length ? 0 : caretOn ? 0.9 : 0.15 }} />
          </div>
        </div>
        <div style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', gap: 9, opacity: badgeIn * badgeOut,
          transform: `translateY(${(1 - badgeIn) * 7}px)` }}>
          {sources.map((source) => (
            <div key={`prompt-badge-${source.k}`} style={{ width: mix(30, 42, grow),
              height: mix(28, 38, grow), borderRadius: mix(11, 14, grow),
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(135deg, ${source.color}20 0%, rgba(255,255,255,0.060) 100%)`,
              border: `1px solid ${source.color}50`,
              boxShadow: `0 10px 24px rgba(0,0,0,0.20), 0 0 14px ${source.color}1f` }}>
              <Icon name={source.icon} size={mix(15, 19, grow)} color={source.color} sw={2} />
            </div>
          ))}
        </div>
        <div style={{ justifySelf: 'end', width: sendButton.size, height: sendButton.size,
          borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: create,
          transform: `scale(${0.86 + create * 0.14 + click * 0.13})`,
          background: click > 0.02 ? 'rgba(143,191,216,0.26)' : 'rgba(143,191,216,0.16)',
          border: `1px solid rgba(143,191,216,${0.32 + click * 0.28})`,
          boxShadow: `0 0 ${12 + click * 30}px rgba(143,191,216,0.30)` }}>
          <Icon name="check" size={mix(22, 27, grow)} color="#8fbfd8" sw={2.25} />
        </div>
      </div>
    </div>
  );
}

function SceneVertrieb(local) {
  const eb = rise(local, 0.45, 0.6);
  const bgFill = rise(local, OFFER_BG_START - 0.15, 0.75);
  return (
    <div style={{ position: 'absolute', inset: 0, background: `rgba(23,19,17,${bgFill})`, overflow: 'hidden' }}>
      <StableVertriebBackground local={local} />
      <Chapter n={3} label="Angebot" op={eb} />
    </div>
  );
}

// ══ SCENE 4 — WISSEN  (VO 37.10 "Ihr Wissen ist da, wenn es zählt." ·
//    39.26 "So haben Sie immer die richtige Antwort parat … Risiken im Blick.") ══
const KNOWLEDGE_GRAPH_NODES = [
  { id: 'agents', icon: 'agents', title: 'AI Agent', ...WISSEN_AGENT_NODE, tIn: 0.10, thinking: true, thinkUntil: 3.65, agent: true },
  { id: 'core', icon: 'sparkles', title: 'Wissensbasis', x: 807, y: 386, w: 392, h: 112, tIn: 2.82, core: true },
  { id: 'project', icon: 'briefcase', title: 'Projekte', x: 88, y: 160, w: 274, h: 86, tIn: 3.46 },
  { id: 'database', icon: 'database', title: 'Datenbanken', x: 88, y: 286, w: 302, h: 86, tIn: 3.94 },
  { id: 'documents', icon: 'book', title: 'Dokumente', x: 88, y: 412, w: 292, h: 86, tIn: 4.42 },
];

const KNOWLEDGE_GRAPH_LINKS = [
  ['agents', 'core', 2.24, 'agent'],
  ['project', 'core', 3.24, 'branch'],
  ['database', 'core', 3.72, 'branch'],
  ['documents', 'core', 4.20, 'branch'],
];

function graphNodeSize(node) {
  return {
    w: node.w || (node.core ? 350 : node.agent ? 520 : 280),
    h: node.h || (node.core ? 124 : node.agent ? 300 : 86),
  };
}

function GraphNode({ node, local }) {
  const p = rise(local, node.tIn, node.agent ? 0.82 : node.spawnFromAgent ? 1.05 : 0.55);
  const pulse = 0.5 + Math.sin(local * 2.4 + node.x * 0.01) * 0.5;
  const think = node.thinking ? band(local, node.tIn + 0.48, node.thinkUntil || 5.62, 0.34) : 0;
  const { w, h } = graphNodeSize(node);
  if (p <= 0.001) return null;
  if (node.agent) {
    const receive = band(local, 0.08, 1.85, 0.50);
    const active = band(local, 1.10, node.thinkUntil || 3.8, 0.62);
    const settle = rise(local, 1.42, 0.92);
    return (
      <div style={{ position: 'absolute', left: node.x, top: node.y, width: w, height: h,
        opacity: p, transform: `translateY(${(1 - p) * 18}px) scale(${0.965 + p * 0.035})`,
        transformOrigin: '50% 50%', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: 44,
          background: 'radial-gradient(circle at 50% 45%, rgba(143,191,216,0.11) 0%, rgba(240,168,94,0.075) 38%, rgba(30,26,23,0.47) 100%)',
          border: '1px solid rgba(255,255,255,0.13)',
          boxShadow: `0 36px 110px rgba(0,0,0,0.44), 0 0 ${28 + active * 34}px rgba(143,191,216,0.16), inset 0 1px 0 rgba(255,255,255,0.12)`,
          backdropFilter: 'blur(16px) saturate(1.05)', WebkitBackdropFilter: 'blur(16px) saturate(1.05)' }} />
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <defs>
            <radialGradient id="wissen-agent-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#8fbfd8" stopOpacity="0.30" />
              <stop offset="0.55" stopColor="#f0a85e" stopOpacity="0.13" />
              <stop offset="1" stopColor="#f0a85e" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={w / 2} cy={h / 2 + 10} r={82 + active * 14}
            fill="url(#wissen-agent-core-glow)" opacity={0.58 + active * 0.28} />
          {[0, 1, 2].map((i) => {
            const ring = receive * (1 - i * 0.13);
            return <circle key={i} cx={w / 2} cy={h / 2 + 10}
              r={58 + i * 34 + receive * 32} fill="none"
              stroke={i === 1 ? WARM : '#8fbfd8'} strokeWidth={1.4}
              opacity={ring * (0.26 - i * 0.04)}
              strokeDasharray={i === 2 ? '12 14' : 'none'}
              style={{ filter: 'drop-shadow(0 0 12px rgba(143,191,216,0.28))' }} />;
          })}
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'grid',
          gridTemplateColumns: '150px 1fr', alignItems: 'center', padding: '0 60px',
          boxSizing: 'border-box' }}>
          <div style={{ width: 112, height: 112, borderRadius: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(143,191,216,0.12)', border: '1px solid rgba(143,191,216,0.34)',
            boxShadow: `0 0 ${18 + active * 28}px rgba(143,191,216,0.18), inset 0 1px 0 rgba(255,255,255,0.13)` }}>
            <Icon name={node.icon} size={58} color="#d9eef8" sw={1.7} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 60,
              lineHeight: 0.96, letterSpacing: '-0.025em', color: TEXT,
              textShadow: '0 18px 42px rgba(0,0,0,0.38)' }}>{node.title}</div>
            <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 14,
              opacity: 0.45 + active * 0.5 }}>
              {[0, 1, 2, 3].map((i) => {
                const wave = 0.5 + Math.sin(local * 4.4 + i * 0.9) * 0.5;
                return <span key={i} style={{ height: 7, width: i === 0 ? 88 : 62 + wave * 38,
                  borderRadius: 999, background: i === 0 ? GRAD_WARM : 'rgba(255,255,255,0.16)',
                  opacity: i === 0 ? 0.84 : 0.38 + wave * 0.30,
                  transform: `scaleX(${0.82 + settle * 0.18})`, transformOrigin: '0 50%' }} />;
              })}
            </div>
            {think > 0.01 && (
              <div style={{ marginTop: 26, display: 'flex', gap: 9, opacity: think }}>
                {[0, 1, 2].map((i) => {
                  const wave = 0.5 + Math.sin(local * 5.0 + i * 1.5) * 0.5;
                  return <span key={i} style={{ width: 9 + wave * 5, height: 9 + wave * 5,
                    borderRadius: 99, background: i === 1 ? WARM : '#8fbfd8',
                    opacity: 0.36 + wave * 0.42,
                    boxShadow: `0 0 ${9 + wave * 12}px ${i === 1 ? 'rgba(240,168,94,0.42)' : 'rgba(143,191,216,0.38)'}` }} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  const spawnY = node.spawnFromAgent ? (node.id === 'answer' ? 34 : -34) : 18;
  const isCore = node.core;
  return (
    <div style={{ position: 'absolute', left: node.x, top: node.y,
      width: w, height: h, padding: isCore ? '24px 28px' : '17px 20px', boxSizing: 'border-box',
      opacity: p, transform: `translate(${node.spawnFromAgent ? (1 - p) * -18 : 0}px, ${(1 - p) * spawnY}px) scale(${0.97 + p * 0.03})`,
      borderRadius: isCore ? 28 : 24,
      background: isCore
        ? 'linear-gradient(135deg, rgba(240,168,94,0.12) 0%, rgba(31,25,22,0.40) 100%)'
        : 'linear-gradient(90deg, rgba(31,25,22,0.16) 0%, rgba(31,25,22,0.03) 74%, rgba(31,25,22,0) 100%)',
      border: isCore ? '1px solid rgba(240,168,94,0.32)' : '1px solid rgba(255,255,255,0.045)',
      boxShadow: isCore
        ? `0 24px 74px rgba(0,0,0,0.36), 0 0 ${18 + pulse * 14}px rgba(240,168,94,0.14), inset 0 1px 0 rgba(255,255,255,0.12)`
        : '0 12px 34px rgba(0,0,0,0.16)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: isCore ? 18 : 16, height: '100%' }}>
        <div style={{ width: isCore ? 60 : 52, height: isCore ? 60 : 52,
          borderRadius: isCore ? 19 : 17, flexShrink: 0, display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: isCore ? 'rgba(240,168,94,0.16)' : 'rgba(255,255,255,0.052)',
          border: isCore ? '1px solid rgba(240,168,94,0.34)' : '1px solid rgba(255,255,255,0.11)' }}>
          <Icon name={node.icon} size={isCore ? 30 : 26} color={isCore ? WARM : TEXT} sw={1.85} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 760, fontSize: isCore ? 34 : 27,
            lineHeight: 1.02, letterSpacing: '-0.014em', color: TEXT }}>{node.title}</div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeGraph({ local }) {
  const op = rise(local, 0.15, 0.7);
  const byId = Object.fromEntries(KNOWLEDGE_GRAPH_NODES.map(n => [n.id, n]));
  const center = (n) => {
    const { w, h } = graphNodeSize(n);
    return { x: n.x + w / 2, y: n.y + h / 2 };
  };
  const packetDur = 1.92;
  const packetStartOffset = 0.22;
  const controls = (a, b) => {
    const A = center(byId[a]), B = center(byId[b]);
    const mx = (A.x + B.x) / 2;
    return { A, B, C1: { x: mx, y: A.y }, C2: { x: mx, y: B.y } };
  };
  const bezierAt = (a, b, u) => {
    const { A, B, C1, C2 } = controls(a, b);
    const inv = 1 - u;
    return {
      x: inv ** 3 * A.x + 3 * inv ** 2 * u * C1.x + 3 * inv * u ** 2 * C2.x + u ** 3 * B.x,
      y: inv ** 3 * A.y + 3 * inv ** 2 * u * C1.y + 3 * inv * u ** 2 * C2.y + u ** 3 * B.y,
    };
  };
  const angleAt = (a, b, u) => {
    const p1 = bezierAt(a, b, clamp(u - 0.018, 0, 1));
    const p2 = bezierAt(a, b, clamp(u + 0.018, 0, 1));
    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
  };
  const pathFor = (a, b) => {
    const { A, B, C1, C2 } = controls(a, b);
    return `M ${A.x} ${A.y} C ${C1.x} ${C1.y}, ${C2.x} ${C2.y}, ${B.x} ${B.y}`;
  };
  const Packet = ({ x, y, rot, op, sc, kind, color }) => (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${sc})`} opacity={op}
      style={{ filter: `drop-shadow(0 0 10px ${color}66) drop-shadow(0 8px 18px rgba(0,0,0,0.26))` }}>
      <rect x="-18" y="-13" width="36" height="26" rx="7" fill="rgba(30,26,23,0.92)"
        stroke={color} strokeWidth="1.4" />
      {kind === 'database' ? (
        <g fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round">
          <ellipse cx="0" cy="-4.5" rx="8.5" ry="3.2" />
          <path d="M -8.5 -4.5 v9 c0 1.8 3.8 3.2 8.5 3.2s8.5-1.4 8.5-3.2v-9" />
          <path d="M -8.5 0 c0 1.8 3.8 3.2 8.5 3.2s8.5-1.4 8.5-3.2" />
        </g>
      ) : (
        <g fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M -7 -8 h9 l5 5 v11 h-14 z" />
          <path d="M 2 -8 v5 h5" />
          <path d="M -3 1 h7 M -3 5 h5" opacity="0.82" />
        </g>
      )}
    </g>
  );
  return (
    <div style={{ position: 'relative', width: 1484, height: 660, marginTop: 0,
      opacity: op, transform: `translateY(${(1 - op) * 18}px)`, pointerEvents: 'none' }}>
      <svg width="1484" height="660" viewBox="0 0 1484 660" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <defs>
          <linearGradient id="kg-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f0a85e" />
            <stop offset="0.55" stopColor="#e8655a" />
            <stop offset="1" stopColor="#8fbfd8" />
          </linearGradient>
        </defs>
        {(() => {
          const agentC = center(byId.agents);
          const receive = band(local, 0.14, 1.92, 0.46);
          return (
            <g opacity={receive}>
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={agentC.x} cy={agentC.y} r={58 + i * 34 + receive * 38}
                  fill="none" stroke={i === 1 ? WARM : '#8fbfd8'} strokeWidth={1.8 - i * 0.22}
                  strokeDasharray={i === 2 ? '12 13' : 'none'}
                  opacity={(0.30 - i * 0.045) * receive}
                  style={{ filter: 'drop-shadow(0 0 14px rgba(143,191,216,0.34))' }} />
              ))}
              <circle cx={agentC.x} cy={agentC.y} r={8 + receive * 8}
                fill="#8fbfd8" opacity={0.18 + receive * 0.35}
                style={{ filter: 'drop-shadow(0 0 18px rgba(143,191,216,0.55))' }} />
            </g>
          );
        })()}
        {KNOWLEDGE_GRAPH_LINKS.map(([a, b, tIn, mode = 'flow']) => {
          const linkDur = mode === 'outcome' ? 1.18 : mode === 'return' ? 0.95 : 0.75;
          const d = rise(local, tIn, linkDur);
          const packetFlow = mode === 'ingest' || mode === 'branch';
          const incoming = mode === 'ingest';
          const packStart = tIn + packetStartOffset;
          const packRaw = clamp((local - packStart) / packetDur, 0, 1);
          const packU = 0.16 + Easing.easeInOutCubic(packRaw) * 0.78;
          const packet = packetFlow ? bezierAt(a, b, packU) : null;
          const consume = incoming ? rise(local, packStart + 1.74, 0.42) * (1 - rise(local, packStart + 2.18, 0.44)) : 0;
          const packetOp = packetFlow
            ? d * rise(local, packStart, 0.20) * (1 - rise(local, packStart + 1.82, 0.46))
            : 0;
          const packetSc = packetFlow ? (0.98 + d * 0.12) * (1 - consume * 0.34) : 1;
          const packetKind = b === 'database' || a === 'database' ? 'database' : 'file';
          const packetColor = b === 'project' ? '#8fbfd8' : b === 'database' ? WARM : b === 'documents' ? '#e8655a' : '#8fbfd8';
          const lineTone = mode === 'agent' || mode === 'outcome' ? '#8fbfd8' : mode === 'return' ? 'rgba(143,191,216,0.64)' : 'url(#kg-line)';
          const baseOp = mode === 'return' ? 0.025 : 0.10;
          const lineW = mode === 'outcome' ? 3.7 : mode === 'return' ? 1.7 : 3.2;
          const groupOp = mode === 'return' ? 0.08 + d * 0.32 : 0.25 + d * 0.75;
          return (
            <g key={`${a}-${b}`} opacity={groupOp}>
              <path d={pathFor(a, b)} fill="none" stroke={`rgba(255,255,255,${baseOp})`} strokeWidth={mode === 'return' ? 8 : 12} strokeLinecap="round" />
              <path d={pathFor(a, b)} fill="none" stroke={lineTone} strokeWidth={lineW} strokeLinecap="round"
                strokeDasharray={mode === 'return' ? '16 14' : '1000'}
                strokeDashoffset={(1 - d) * 1000}
                style={mode === 'outcome' ? { filter: 'drop-shadow(0 0 9px rgba(143,191,216,0.44))' } : undefined} />
              {packetFlow && packetOp > 0.01 && <Packet x={packet.x} y={packet.y}
                rot={angleAt(a, b, packU)} op={packetOp} sc={packetSc}
                kind={packetKind} color={packetColor} />}
              {consume > 0.01 && (
                <g opacity={consume} transform={`translate(${center(byId.core).x} ${center(byId.core).y})`}>
                  <circle r={32 + consume * 28} fill="none" stroke={packetColor}
                    strokeWidth="2" opacity={0.38 * (1 - consume)}
                    style={{ filter: `drop-shadow(0 0 12px ${packetColor}77)` }} />
                  <path d="M -14 0 L -4 10 L 16 -14" fill="none" stroke={packetColor}
                    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    opacity={0.42 + consume * 0.26} />
                  <g transform="translate(0 58)" opacity={consume * (1 - rise(local, packStart + 2.0, 0.38))}>
                    <rect x="-43" y="-13" width="86" height="26" rx="13"
                      fill="rgba(30,26,23,0.92)" stroke={packetColor} strokeWidth="1" />
                    <text x="0" y="4" textAnchor="middle" fontFamily='"JetBrains Mono", monospace'
                      fontSize="9.5" letterSpacing="0.12em" fill={packetColor}>KONSUMIERT</text>
                  </g>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      {KNOWLEDGE_GRAPH_NODES.map((node) => <GraphNode key={node.id} node={node} local={local} />)}
    </div>
  );
}
function WissenBackground({ local }) {
  const clipLocal = clamp(local, 0, WISSEN_BG_PLAY_DUR);
  const frame = Math.floor((clipLocal / WISSEN_BG_PLAY_DUR) * (WISSEN_BG_FRAME_COUNT - 1)) + 1;
  const enter = rise(local, 0.05, 0.45);
  const exit = 1 - Easing.easeInCubic(clamp((local - 6.05) / 0.65, 0, 1));
  const op = 0.62 * enter * exit;
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={WISSEN_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        filter: 'saturate(0.86) contrast(0.94) brightness(0.52)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 70% at 50% 42%, rgba(23,19,17,0.26) 0%, rgba(23,19,17,0.48) 58%, rgba(23,19,17,0.76) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.52) 0%, rgba(23,19,17,0.22) 40%, rgba(23,19,17,0.58) 100%)' }} />
    </div>
  );
}
function SceneWissen(local) {
  const eb = rise(local, 0.3, 0.6);
  const titleStart = 7.75;
  const a1 = rise(local, titleStart, 0.72);
  const graphDelay = 2.1;
  const graphIn = rise(local, graphDelay, 0.72);
  const graphLocal = local - graphDelay;
  const sov = rise(local, WISSEN_DETAIL_START + 2.35, 0.7);
  const KNOW_TITLE = 'Ihr Wissen zählt, wenn Sie es brauchen.';
  const typedTitle = KNOW_TITLE.slice(0, Math.floor(clamp((local - titleStart - 0.18) * 24, 0, KNOW_TITLE.length)));
  const caretOn = Math.floor(local * 2.4) % 2 === 0;
  const sh = { fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT,
    textShadow: '0 2px 26px rgba(8,6,4,0.75)' };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={4} label="Wissen" op={eb} />
      <div style={{ position: 'absolute', left: '50%', top: 244,
        width: 1484, height: 660, opacity: graphIn * (1 - a1 * 0.12),
        transform: `translateX(-50%) translateY(${(1 - graphIn) * 22 + a1 * 38}px) scale(${1 - a1 * 0.025})`,
        transformOrigin: '50% 20%', pointerEvents: 'none' }}>
        <KnowledgeGraph local={graphLocal} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: TOP_LOGO_CONTENT_Y + 8,
        ...sh, fontSize: 74, lineHeight: 1.06,
        minHeight: 88, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: a1, transform: `translateY(${(1 - a1) * 26}px) scale(${0.97 + a1 * 0.03})` }}>
        <span>{typedTitle}</span>
        <span style={{ display: 'inline-block', width: 4, height: 66, marginLeft: 10,
          borderRadius: 99, background: WARM, opacity: caretOn && typedTitle.length < KNOW_TITLE.length ? 0.9 : 0 }} />
      </div>
      <ConsultantWorkDetailJump local={local} start={WISSEN_DETAIL_START} end={WISSEN_DETAIL_END} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 74, textAlign: 'center',
        opacity: sov, transform: `translateY(${(1 - sov) * 14}px)` }}>
        <span style={{ fontFamily: MONO, fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: FAINT }}>
          Tenant-isoliert · EU-gehostet · DSGVO in der Produktlogik
        </span>
      </div>
    </div>
  );
}

// ══ SCENE 5 — CTA  (VO 43.48 "Weniger Tools." · 44.60 "Mehr Effizienz." ·
//    45.88 "Mehr Beratung." · 47.26 "Komm auf die Warteliste.") ══
function SceneCTA(local) {
  const glow = clamp(local / 1.0, 0, 1);
  const card = rise(local, 0.25, 0.75);
  const l1 = rise(local, 0.5, 0.6);
  const l2 = rise(local, 1.55, 0.6);
  const l3 = rise(local, 2.65, 0.6);
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <WissenBackground local={local} />
      <div style={{ position: 'absolute', left: '50%', top: '44%', width: 1700, height: 1400,
        transform: 'translate(-50%,-50%)', opacity: glow * 0.9, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(232,145,58,0.18) 0%, rgba(232,101,90,0.10) 34%, rgba(232,101,90,0.04) 54%, rgba(23,19,17,0) 70%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.54) 0%, rgba(23,19,17,0.28) 48%, rgba(23,19,17,0.62) 100%)' }} />

      <div style={{ position: 'absolute', left: '50%', top: 468,
        width: 1120, display: 'flex', flexDirection: 'column', alignItems: 'center',
        opacity: card, transform: `translateX(-50%) translateY(${(1 - card) * 18}px) scale(${0.985 + card * 0.015})` }}>
        <h2 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 700, fontSize: 84, lineHeight: 1.04,
          letterSpacing: '-0.025em', textAlign: 'center' }}>
          <span style={{ display: 'block', color: TEXT, opacity: l1,
            transform: `translateY(${(1 - l1) * 18}px)` }}>Weniger Tools.</span>
          <span style={{ display: 'block', color: TEXT, opacity: l2,
            transform: `translateY(${(1 - l2) * 18}px)` }}>Mehr Effizienz.</span>
          <span style={{ display: 'block', opacity: l3, transform: `translateY(${(1 - l3) * 18}px)`,
            ...gradText(GRAD) }}>Mehr Beratung.</span>
        </h2>
      </div>
    </div>
  );
}

// ══ SCENE 5 — BUSINESS CASE  (stiller Beweis-Beat, VO pausiert: Positionierung →
//    animierter Break-even; Quellen: BDU Honorare 2025, eigenes Preismodell) ══
const BREAKEVEN = [
  { heads: 10, size: '10 Berater', cost: 'Kosten ~€5k',  valueK: 156 },
  { heads: 30, size: '30 Berater', cost: 'Kosten ~€15k', valueK: 468 },
  { heads: 50, size: '50 Berater', cost: 'Kosten ~€27k', valueK: 780 },
];
const ACQUISITION_VALUE = [
  { heads: 10, valueK: 120 },
  { heads: 30, valueK: 410 },
  { heads: 50, valueK: 760 },
];
const FINANCE_EXIT_START_LOCAL = (SCENE_FINANZ_END - SCENE_FINANZ_START) - 2.10;
const FINANCE_EXIT_DUR = 1.45;
const FINANCE_LOGO_FINAL_START = SCENE_FINANZ_START + FINANCE_EXIT_START_LOCAL;
const FINANCE_LOGO_FINAL_END = FINANCE_LOGO_FINAL_START + FINANCE_EXIT_DUR;
// Phase-A-Background (M08 v3): Chatbot-Dismiss + agentische Modul-Pipeline unten.
// Label-Patches rendern die korrekten Wörter über die Video-Karten (Clip hat 2 Vertipper).
function FinanzBackground({ local }) {
  const frame = clamp(Math.floor(local * HOOK_BG_FPS) + 1, 1, POSG_FRAME_COUNT);
  const enter = rise(local, 0.1, 0.5);
  const exit = 1 - Easing.easeInCubic(clamp((local - 7.9) / 0.7, 0, 1));
  const op = 0.95 * enter * exit;
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={POSG_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        filter: 'saturate(0.98) contrast(1.02) brightness(0.92)' }} />
      {POSG_CARDS.map((c) => {
        const p = rise(local, c.tIn, 0.35);
        if (p <= 0.001) return null;
        return (
          <div key={c.word} style={{ position: 'absolute', left: c.x + 10, top: 792, width: c.w - 20, height: 74,
            display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: p,
            background: '#efece5', borderRadius: 8 }}>
            <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 29, letterSpacing: '-0.01em',
              color: '#26221e' }}>{c.word}</span>
          </div>
        );
      })}
    </div>
  );
}

function SceneFinanz(local) {
  const financeDur = SCENE_FINANZ_END - SCENE_FINANZ_START;
  const chartExit = rise(local, FINANCE_EXIT_START_LOCAL, FINANCE_EXIT_DUR);
  const eb = band(local, 0.35, 20.5, 0.5);  // Kapitel-Anker bleibt die ganze Szene
  const hB = band(local, 0.35, financeDur - 0.35, 0.5);  // Zahlen-Phase bleibt bis zur Chart-Exit-Bewegung sichtbar.
  const fmtEuro = (k) => k >= 1000
    ? '€' + (k / 1000).toFixed(2).replace(/\.?0+$/, '').replace('.', ',') + 'M'
    : '€' + Math.round(k) + 'k';
  const valueAt = (points) => (h) => {
    if (h <= 0) return 0;
    if (h <= points[0].heads) return points[0].valueK * (h / points[0].heads);
    for (let i = 0; i < points.length - 1; i++) {
      if (h <= points[i + 1].heads) {
        const u = (h - points[i].heads) / (points[i + 1].heads - points[i].heads);
        return points[i].valueK + (points[i + 1].valueK - points[i].valueK) * u;
      }
    }
    return points[points.length - 1].valueK;
  };
  const fCost = (h) => {
    const C = [[0, 0], [5, 2.5], [10, 5], [30, 15], [50, 27]];
    if (h <= C[0][0]) return C[0][1];
    for (let i = 0; i < C.length - 1; i++) {
      if (h <= C[i + 1][0]) {
        const u = (h - C[i][0]) / (C[i + 1][0] - C[i][0]);
        return C[i][1] + (C[i + 1][1] - C[i][1]) * u;
      }
    }
    return C[C.length - 1][1];
  };
  const renderChart = (cfg) => {
    // Compact cartesian chart: equal x-domain, distinct value driver.
    const CW = 710, CH = 620, padL = 88, padR = 56, padT = 112, padB = 70;
    const XMIN = 0, XMAX = 50, YMAX = 900;
    const xh = (h) => padL + ((h - XMIN) / (XMAX - XMIN)) * (CW - padL - padR);
    const yk = (k) => CH - padB - (k / YMAX) * (CH - padT - padB);
    const chartOp = rise(local, cfg.revealAt, 0.72);
    const chartStart = cfg.drawAt;
    const chartDrawDur = 6.25;
    const q = clamp((local - chartStart) / chartDrawDur, 0, 1);
    const hMax = XMIN + q * (XMAX - XMIN);
    const fLine = valueAt(cfg.points);
    const mk = (f) => {
    const arr = [];
      for (let h = XMIN; h < hMax; h += 0.65) arr.push([xh(h), yk(f(h))]);
    arr.push([xh(hMax), yk(f(hMax))]);
    return arr;
  };
    const toD = (arr) => arr.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
    const vPts = mk(fLine), cPts = mk(fCost);
    const lineD = toD(vPts);
    const costD = toD(cPts);
    const areaD = lineD + 'L' + vPts[vPts.length - 1][0].toFixed(1) + ' ' + (CH - padB) +
      'L' + vPts[0][0].toFixed(1) + ' ' + (CH - padB) + 'Z';
    const tip = vPts[vPts.length - 1];
    const cTip = cPts[cPts.length - 1];
    const exitX = 960 - (cfg.left + CW / 2);
    const exitY = 540 - (cfg.top + CH / 2);
    const exitEase = Easing.easeInOutCubic(chartExit);
    const exitFade = Easing.easeInCubic(clamp((chartExit - 0.18) / 0.82, 0, 1));
    const metricH = cfg.metricH ?? 45;
    const metricY = yk(fLine(metricH));
    const costY = yk(fCost(XMAX));
    return (
      <div style={{ position: 'absolute', left: cfg.left, top: cfg.top, width: CW,
        opacity: chartOp * (1 - exitFade),
        transform: `translate(${exitX * exitEase}px, ${exitY * exitEase}px) scale(${1 - exitEase * 0.78})`,
        transformOrigin: '50% 50%',
        filter: chartExit > 0 ? `blur(${exitEase * 4.8}px)` : 'none' }}>
        <svg width={CW} height={CH} viewBox={`0 0 ${CW} ${CH}`} style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id={`${cfg.id}-line`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor={cfg.colorA} /><stop offset="1" stopColor={cfg.colorB} />
            </linearGradient>
            <linearGradient id={`${cfg.id}-area`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={cfg.areaA} /><stop offset="1" stopColor="rgba(240,168,94,0)" />
            </linearGradient>
            <linearGradient id={`${cfg.id}-costline`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(184,106,233,0.58)" />
              <stop offset="1" stopColor="rgba(214,128,244,0.82)" />
            </linearGradient>
          </defs>
          <text x={padL} y={padT - 64} fontFamily={DISPLAY} fontSize="31" fontWeight="790"
            letterSpacing="-0.026em" fill="#faf9f6">{cfg.title}</text>
          <text x={padL} y={padT - 37} fontFamily={DISPLAY} fontSize="21" fontWeight="720"
            letterSpacing="-0.012em" fill={cfg.colorA}>{cfg.subtitle}</text>
          <text x={padL} y={padT - 13} fontFamily='"JetBrains Mono", monospace' fontSize="11.5"
            letterSpacing="0.12em" fill="rgba(250,250,249,0.42)">{cfg.kicker}</text>
          {[0, 200, 400, 600, 800].map((k) => (
            <g key={k}>
              <line x1={padL} y1={yk(k)} x2={CW - padR} y2={yk(k)}
                stroke={k === 0 ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.076)'} strokeWidth={k === 0 ? '1.25' : '1'} />
              <text x={padL - 14} y={yk(k) + 4.5} textAnchor="end" fontFamily='"JetBrains Mono", monospace'
                fontSize="13" fill="rgba(250,250,249,0.44)">{k === 0 ? '0' : k + 'k'}</text>
            </g>
          ))}
          <line x1={padL} y1={padT} x2={padL} y2={CH - padB} stroke="rgba(255,255,255,0.20)" strokeWidth="1.25" />
          <line x1={padL} y1={CH - padB} x2={CW - padR} y2={CH - padB} stroke="rgba(255,255,255,0.20)" strokeWidth="1.25" />
          {[0, 10, 20, 30, 40, 50].map((h) => (
            <g key={h}>
              <line x1={xh(h)} y1={padT} x2={xh(h)} y2={CH - padB}
                stroke="rgba(255,255,255,0.058)" strokeWidth="1" />
              <line x1={xh(h)} y1={CH - padB} x2={xh(h)} y2={CH - padB + 6}
                stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
              <text x={xh(h)} y={CH - padB + 24} textAnchor="middle" fontFamily='"JetBrains Mono", monospace'
                fontSize="13" fill="rgba(250,250,249,0.44)">{h}</text>
            </g>
          ))}
          <text x={CW - padR + 26} y={CH - padB + 24} textAnchor="start" fontFamily='"JetBrains Mono", monospace'
            fontSize="12" letterSpacing="0.1em" fill="rgba(250,250,249,0.4)">BERATER</text>
          <path d={areaD} fill={`url(#${cfg.id}-area)`} />
          <path d={costD} fill="none" stroke={`url(#${cfg.id}-costline)`} strokeWidth="2.15"
            strokeLinecap="round" strokeLinejoin="round" />
          <path d={lineD} fill="none" stroke={`url(#${cfg.id}-line)`} strokeWidth="3.3"
            strokeLinecap="round" strokeLinejoin="round" />
          {cfg.points.map((b) => {
            const cIn = chartStart + chartDrawDur * (b.heads - XMIN) / (XMAX - XMIN);
            const dp = rise(local, cIn, 0.58);
            if (dp <= 0.001) return null;
            const cx = xh(b.heads);
            const cy = yk(fLine(b.heads));
            const count = Easing.easeOutCubic(clamp((local - cIn - 0.08) / 0.88, 0, 1));
            const labelW = 126;
            const labelH = 48;
            const lx = clamp(cx - labelW / 2, padL + 8, CW - padR - labelW - 8);
            const ly = clamp(cy - labelH - 28, 10, CH - padB - labelH - 18);
            const value = fmtEuro(b.valueK * count);
            return (
              <g key={b.heads} opacity={dp} transform={`translate(0 ${(1 - dp) * 12})`}>
                <line x1={cx} y1={ly + labelH + 2} x2={cx} y2={cy - 8}
                  stroke={cfg.calloutStroke} strokeWidth="1.35" strokeLinecap="round" strokeDasharray="3 5" />
                <circle cx={cx} cy={cy} r={6.1 * (0.66 + dp * 0.34)}
                  fill={cfg.colorA} style={{ filter: `drop-shadow(0 0 8px ${cfg.glow})` }} />
                <rect x={lx} y={ly} width={labelW} height={labelH} rx="15"
                  fill="rgba(31,26,23,0.88)" stroke={cfg.labelStroke}
                  style={{ filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.32))' }} />
                <text x={lx + 15} y={ly + 34} fontFamily='"Manrope", sans-serif'
                  fontSize="30" fontWeight="800" letterSpacing="-0.02em" fill="#faf9f6">{value}</text>
              </g>
            );
          })}
          {q > 0.02 && q < 0.99 && <circle cx={tip[0]} cy={tip[1]} r="5" fill={cfg.colorA} />}
          <text x={xh(metricH) + 16} y={metricY - 16} textAnchor="start" fontFamily='"JetBrains Mono", monospace'
            fontSize="17" fontWeight="800" letterSpacing="0.12em" fill={cfg.colorA}
            opacity={0.95} style={{ filter: `drop-shadow(0 0 10px ${cfg.glow})` }}>{cfg.lineLabel}</text>
          <text x={xh(36)} y={costY - 16} textAnchor="start" fontFamily='"JetBrains Mono", monospace'
            fontSize="15" fontWeight="800" letterSpacing="0.1em" fill="rgba(214,128,244,0.88)"
            opacity={0.92}>CONSULTRY-KOSTEN</text>
        </svg>
      </div>
    );
  };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={5} label="Business Case" op={eb} />
      <div style={{ position: 'absolute', inset: 0, opacity: hB }}>
        {renderChart({
          id: 'finance-faktura',
          left: 270,
          top: 250,
          revealAt: 1.00,
          drawAt: 1.40,
          title: 'Faktura-Effekt',
          subtitle: 'Mehr Faktura pro Berater',
          kicker: 'MEHRWERT VS. CONSULTRY-KOSTEN · € PRO JAHR',
          points: BREAKEVEN,
          colorA: '#f0a85e',
          colorB: '#e8655a',
          areaA: 'rgba(240,168,94,0.20)',
          glow: 'rgba(240,168,94,0.78)',
          calloutStroke: 'rgba(240,168,94,0.48)',
          labelStroke: 'rgba(240,168,94,0.34)',
          labelText: 'rgba(240,168,94,0.72)',
          lineLabel: 'MEHRWERT',
          metricH: 43,
        })}
        {renderChart({
          id: 'finance-akquise',
          left: 990,
          top: 250,
          revealAt: 1.45,
          drawAt: 2.15,
          title: 'Akquise-Effekt',
          subtitle: 'Mehr Pipeline',
          kicker: 'OUTREACH + UPSELL · € PRO JAHR',
          points: ACQUISITION_VALUE,
          colorA: '#8fbfd8',
          colorB: '#f0a85e',
          areaA: 'rgba(143,191,216,0.18)',
          glow: 'rgba(143,191,216,0.72)',
          calloutStroke: 'rgba(143,191,216,0.44)',
          labelStroke: 'rgba(143,191,216,0.30)',
          labelText: 'rgba(143,191,216,0.74)',
          lineLabel: 'PIPELINE',
          metricH: 38,
        })}
      </div>
    </div>
  );
}

// ── Persistent logo: one element, morphs across the whole film ───────────────
// keyframes: [t, centerX, centerY, sizeOrWidth, opacity]
const TEAM_MATCHED_CONSULTANTS_DONE =
  SIGNAL_START +
  TEAM_MATCH_START_LOCAL +
  TEAM_MATCH_CARD_DELAY +
  TEAM_MATCH_CARD_DUR * MOTION_PACE;
const LOGO_BRIDGE_START = TEAM_MATCHED_CONSULTANTS_DONE + 1.00;
const LOGO_BRIDGE_GATHER_START = LOGO_BRIDGE_START + 1.70;
const LOGO_BRIDGE_BUNDLE_HOLD_START = LOGO_BRIDGE_GATHER_START + 2.80;
const LOGO_BRIDGE_OFFER_START = LOGO_BRIDGE_BUNDLE_HOLD_START + 2.00;
const LOGO_BRIDGE_END = LOGO_BRIDGE_OFFER_START + 3.05;
const SCENE_SOLUTION_VISUAL_END = LOGO_BRIDGE_BUNDLE_HOLD_START + 0.58;
const LOGO_BRIDGE_CENTER_X = 960;
const LOGO_BRIDGE_CENTER_Y = 548;
const LOGO_BRIDGE_MARK_SIZE = 218;
const LOGO_BRIDGE_RESULT_X = 758;
const LOGO_BRIDGE_RESULT_Y = 548;
const LOGO_BRIDGE_RESULT_SIZE = 178;
const LOGO_FULL_KEYS = [
  [0.0, 960, 116, 380, 1],
  [1.45, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 1],
  [5.15, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 1],
  [6.05, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 0],
  [SCENE_CTA_END, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 0],
];
const LOGO_MARK_KEYS = [
  [5.25, LOGO_BLOOM_MARK_CX, LOGO_BLOOM_CY, LOGO_BLOOM_MARK_SIZE, 0],
  [5.55, LOGO_BLOOM_MARK_CX, LOGO_BLOOM_CY, LOGO_BLOOM_MARK_SIZE, 1],
  [6.45, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [LOGO_BRIDGE_START - 0.18, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [LOGO_BRIDGE_START + 1.36, LOGO_BRIDGE_CENTER_X, LOGO_BRIDGE_CENTER_Y, LOGO_BRIDGE_MARK_SIZE, 1],
  [LOGO_BRIDGE_OFFER_START - 0.28, LOGO_BRIDGE_CENTER_X, LOGO_BRIDGE_CENTER_Y, LOGO_BRIDGE_MARK_SIZE, 1],
  [LOGO_BRIDGE_OFFER_START + 1.18, LOGO_BRIDGE_RESULT_X, LOGO_BRIDGE_RESULT_Y, LOGO_BRIDGE_RESULT_SIZE, 1],
  [LOGO_BRIDGE_END - 0.48, LOGO_BRIDGE_RESULT_X, LOGO_BRIDGE_RESULT_Y, LOGO_BRIDGE_RESULT_SIZE, 1],
  [LOGO_BRIDGE_END + 0.46, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [FINANCE_LOGO_FINAL_START, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [FINANCE_LOGO_FINAL_END, LOGO_FINAL_MARK_CX, LOGO_FINAL_CY, LOGO_FINAL_H, 1],
  [SCENE_CTA_END, LOGO_FINAL_MARK_CX, LOGO_FINAL_CY, LOGO_FINAL_H, 1],
];
const LOGO_W0 = 980;
function sampleKeys(K, t) {
  if (t <= K[0][0]) return { cx: K[0][1], cy: K[0][2], w: K[0][3], op: K[0][4] };
  const last = K[K.length - 1];
  if (t >= last[0]) return { cx: last[1], cy: last[2], w: last[3], op: last[4] };
  for (let i = 0; i < K.length - 1; i++) {
    const A = K[i], B = K[i + 1];
    if (t >= A[0] && t <= B[0]) {
      const u = (t - A[0]) / (B[0] - A[0]);
      const e = Easing.easeInOutCubic(u);
      return {
        cx: A[1] + (B[1] - A[1]) * e,
        cy: A[2] + (B[2] - A[2]) * e,
        w:  A[3] + (B[3] - A[3]) * e,
        op: A[4] + (B[4] - A[4]) * u,
      };
    }
  }
  return { cx: last[1], cy: last[2], w: last[3], op: last[4] };
}
function LogoMark({ k }) {
  const sourceW = k.w / LOGO_AR;
  return (
    <div style={{ position: 'absolute', left: k.cx, top: k.cy, width: k.w, height: k.w,
      overflow: 'hidden', opacity: k.op, transform: 'translate(-50%,-50%)',
      filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.42))' }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: 0, top: 0,
        width: sourceW, height: k.w, objectFit: 'contain' }} />
    </div>
  );
}
function LogoTextPart({ mark, t }) {
  const p = rise(t, 75.20, 0.9);
  if (p <= 0.001) return null;
  const sourceW = mark.w / LOGO_AR;
  const sourceX = mark.w * 1.08;
  const textW = sourceW - sourceX;
  return (
    <div style={{ position: 'absolute',
      left: mark.cx - mark.w / 2 + sourceX,
      top: mark.cy - mark.w / 2,
      width: textW,
      height: mark.w,
      overflow: 'hidden',
      opacity: p * mark.op,
      transform: `translateX(${(1 - p) * -84}px)`,
      filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.42))' }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute',
        left: -sourceX,
        top: 0,
        width: sourceW,
        height: mark.w,
        objectFit: 'contain' }} />
    </div>
  );
}
function PersistentLogo() {
  const t = useTime();
  const full = sampleKeys(LOGO_FULL_KEYS, t);
  const mark = sampleKeys(LOGO_MARK_KEYS, t);
  const sc = full.w / LOGO_W0;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 64 }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: full.cx, top: full.cy,
        width: LOGO_W0, height: LOGO_W0 * LOGO_AR, objectFit: 'contain', opacity: full.op,
        transform: `translate(-50%,-50%) scale(${sc})`, filter: 'drop-shadow(0 6px 22px rgba(0,0,0,0.45))' }} />
      <LogoMark k={mark} />
      <LogoTextPart mark={mark} t={t} />
    </div>
  );
}

// ── Timestamp ticker for comment context ─────────────────────────────────────
function LabelTicker() {
  const t = useTime();
  React.useEffect(() => {
    const root = document.querySelector('[data-om-exportable-video-with-duration-secs]');
    if (root) root.setAttribute('data-screen-label', 't=' + Math.floor(t) + 's');
  }, [Math.floor(t)]);
  return null;
}

// ════════════════════════════════════════════════════════════════════════════
function PitchVideo(props) {
  TWEAKS = props || {};
  return (
    <Stage width={1920} height={1080} duration={DUR} background={BG} persistKey="consultry-pitch">
      <LabelTicker />
      <Scene start={SCENE_SOLUTION_START} end={SCENE_SOLUTION_VISUAL_END}>{(l) => SceneSolution(l)}</Scene>
      <Scene start={SCENE_VERTRIEB_START} end={SCENE_VERTRIEB_END}>{(l) => SceneVertrieb(l)}</Scene>
      <Scene start={SCENE_WISSEN_START} end={SCENE_WISSEN_END}>{(l) => SceneWissen(l)}</Scene>
      <Scene start={SCENE_FINANZ_START} end={SCENE_FINANZ_END}>{(l) => SceneFinanz(l)}</Scene>
      <Scene start={SCENE_CTA_START} end={SCENE_CTA_END} fade={0.5}>{(l) => SceneCTA(l)}</Scene>
      <PersistentProjectBundleBridge />
      <PersistentPromptAgentBridge />
      <Voiceover />
      <Music />
      <PersistentLogo />
    </Stage>
  );
}

window.PitchVideo = PitchVideo;
