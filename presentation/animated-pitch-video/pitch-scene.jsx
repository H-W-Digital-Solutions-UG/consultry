// Consultry — animated pitch video (73.5s, 1920×1080)
// Gesynct auf Take 2 (voiceover.wav, 70.9s) — das Skript spricht jetzt auch
// Positionierung + Business Case selbst; keine eingefügte Stille mehr.
// Hook-Footage nur im Hintergrund — alle Folgeszenen laufen auf der dunklen Brand-Fläche.
// Arc: Hook → Problem → Antwort (Logo-Bloom) → Signal+Team-Karten →
// Vertrieb/Angebot → Wissen → Business Case → CTA. Logo bleibt persistent.
//
// Gemessene VO-Marken (Silence-Analyse, Take 2):
//   0.28 Ihre Kunden erwarten mehr.        2.62 Schneller, präziser, fundierter.
//   5.24 Das Problem?                      6.78 Excel … verstreut … endlose Tools. (–13.82)
//  14.52 Die Antwort:                     15.66 Consultry.
//  17.10 Consultry kennt Ihr Geschäft, Ihre Marke, Ihr Wissen und Ihre Projekte.
//  22.00 Signal erkennt Opportunities, Markttrends und Ausschreibungen.
//  26.04 Team kennt Projekte und Auslastung … Arbeits-Synergien.  (–31.84)
//  32.70 Ihr Vertrieb fragt Consultry … für die richtigen Kunden. (–38.34)
//  39.28 Ihr Wissen ist da, wenn es zählt.
//  41.72 So haben Sie immer die richtige Antwort parat … Risiken im Blick. (–44.86)
//  45.76 Positionierung: Kein AI-Chatbot … Betriebssystem …      (–53.62)
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
const TOP_LOGO_CY = 176;
const TOP_LOGO_W = 560;
const TOP_LOGO_BOTTOM = TOP_LOGO_CY + (TOP_LOGO_W * LOGO_AR) / 2;
const TOP_LOGO_SAFE_GAP = 64;
const TOP_LOGO_CONTENT_Y = Math.ceil(TOP_LOGO_BOTTOM + TOP_LOGO_SAFE_GAP);
const TOP_LOGO_CENTERED_STACK_PAD = 190;
const TOP_LOGO_CHART_STACK_PAD = 230;
const HOOK_BG_FRAME_COUNT = 129;   // gen-hook-bg (Higgsfield M01, head-trimmed 0.65s → 5.375s)
const HOOK_BG_FPS = 24;
const HOOK_BG = (idx) => `uploads/gen-hook-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const PROBLEM_BG_FRAME_COUNT = 169; // gen-problem-bg (Higgsfield M02, 7.04s; clamps/freezes for scene rest)
const PROBLEM_BG = (idx) => `uploads/gen-problem-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const VO_SRC = 'voiceover.wav';
const VO_DUR = 70.9;  // Take 2 — inkl. gesprochener Positionierung + Business Case
const DUR    = 73.5;
let TWEAKS = {}; // live tweak props (voVolume) from the host

const gradText = (g = GRAD) => ({
  background: g, WebkitBackgroundClip: 'text', backgroundClip: 'text',
  WebkitTextFillColor: 'transparent', color: 'transparent',
});

// ramp: 0→1 across [a,a+f], hold, 1→0 across [b-f,b]; 0 outside [a,b]
function band(local, a, b, f = 0.45) {
  if (local <= a || local >= b) return 0;
  let o = 1;
  if (local < a + f) o = Easing.easeOutCubic((local - a) / f);
  if (local > b - f) o = Math.min(o, 1 - Easing.easeInCubic((local - (b - f)) / f));
  return clamp(o, 0, 1);
}
// one-shot rise: 0→1 across [a,a+d]
const rise = (local, a, d = 0.6) => Easing.easeOutCubic(clamp((local - a) / d, 0, 1));

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
  const vol = clamp(TWEAKS.voVolume ?? 1, 0, 1);
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
  return (
    <div style={{ position: 'absolute', left: 120, top: 112, display: 'flex', alignItems: 'center',
      gap: 16, opacity: op }}>
      <div style={{ width: 34, height: 2, background: GRAD_WARM, borderRadius: 2 }} />
      <span style={{ fontFamily: MONO, fontSize: 16.5, letterSpacing: '0.18em', color: WARM }}>/0{n}</span>
      <span style={{ fontFamily: MONO, fontSize: 16.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: FAINT }}>{label}</span>
    </div>
  );
}

// ── Musikbett: vorgemischt (Gain 0.18, Fades) in music.wav — synchron zur Timeline ─
const MUSIC_SRC = 'music.wav';
function Music() {
  const { time, playing } = useTimeline();
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(0);
  const vol = clamp(TWEAKS.musicVolume ?? 1, 0, 1);
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

// ── Real integration-app tile (Teams / Outlook / PowerPoint / …) ─────────────
const BRANDS = [
  { label: 'Teams',      bg: ['#5b5fc7', '#3f43a6'], type: 'teams' },
  { label: 'Outlook',    bg: ['#31aaf0', '#0a78d4'], type: 'outlook' },
  { label: 'PowerPoint', bg: ['#e0703c', '#c33f1c'], type: 'letter', ch: 'P' },
  { label: 'Word',       bg: ['#3169b6', '#1c3f73'], type: 'letter', ch: 'W' },
  { label: 'Adobe PDF',  bg: ['#ef3b2c', '#b00b00'], type: 'letter', ch: 'A' },
  { label: 'Confluence', bg: ['#2684ff', '#0455cc'], type: 'confluence' },
  { label: 'Jira',       bg: ['#2491ff', '#0a52cc'], type: 'jira' },
];
function BrandTile({ b, size }) {
  const gid = 'bt' + b.label.replace(/\W/g, '');
  const letter = (ch) => (
    <text x="36" y="51" textAnchor="middle" fontFamily="Inter, sans-serif"
      fontWeight="800" fontSize="42" fill="#fff" letterSpacing="-1.5">{ch}</text>
  );
  let glyph = null;
  if (b.type === 'letter') glyph = letter(b.ch);
  else if (b.type === 'outlook') glyph = (
    <g>
      <path d="M31 27h22a1.6 1.6 0 0 1 1.6 1.6v15.8a1.6 1.6 0 0 1-1.6 1.6H37" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M31 31l12.3 8 11.3-7.4" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="25" cy="37" rx="14" ry="15" fill="#0a4f96" />
      <text x="25" y="44" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#fff">O</text>
    </g>
  );
  else if (b.type === 'teams') glyph = (
    <g>
      <circle cx="46" cy="22" r="7.5" fill="#fff" opacity="0.95" />
      <rect x="19" y="29" width="34" height="25" rx="6" fill="#fff" opacity="0.18" />
      <text x="36" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" fill="#fff">T</text>
    </g>
  );
  else if (b.type === 'confluence') glyph = (
    <g fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round">
      <path d="M19 47c8-12 21-13 34-7" />
      <path d="M53 25c-8 12-21 13-34 7" />
    </g>
  );
  else if (b.type === 'jira') glyph = <path d="M36 55 21 28h7.4l7.6 13 7.6-13H51L36 55z" fill="#fff" />;
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={b.bg[0]} /><stop offset="1" stopColor={b.bg[1]} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="68" height="68" rx="17" fill={`url(#${gid})`} />
      <rect x="2" y="2" width="68" height="32" rx="16" fill="#fff" opacity="0.10" />
      {glyph}
    </svg>
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

// ══ SCENE 0 — HOOK  (VO 0.24 "Ihre Kunden erwarten mehr." · 2.54 "Schneller, …") ══
function HookBackground({ local }) {
  const frame = clamp(Math.floor(local * HOOK_BG_FPS) + 1, 1, HOOK_BG_FRAME_COUNT);
  const enter = rise(local, 0.05, 0.55);
  const exit = 1 - Easing.easeInCubic(clamp((local - 4.45) / 0.78, 0, 1));
  const op = 0.85 * enter * exit; // gen-bg ist bereits Brand-Look — weniger stark abdunkeln
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={HOOK_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        transform: `scale(${1.016 + local * 0.002})`,
        filter: 'saturate(0.95) contrast(1.03) brightness(0.8)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.70) 0%, rgba(23,19,17,0.24) 44%, rgba(23,19,17,0.78) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 74% 70% at 50% 46%, rgba(23,19,17,0.04) 0%, rgba(23,19,17,0.30) 54%, rgba(23,19,17,0.90) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(23,19,17,0.70) 0%, rgba(23,19,17,0.04) 32%, rgba(23,19,17,0.04) 68%, rgba(23,19,17,0.70) 100%)' }} />
    </div>
  );
}

function SceneHook(local) {
  const eb = band(local, 0.3, 4.95, 0.5);
  const p1a = rise(local, 0.25, 0.7);
  const p1b = rise(local, 2.5, 0.7);
  const ex = clamp((local - 4.6) / 0.7, 0, 1);
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
        <div style={{ ...sh, fontSize: 96, lineHeight: 1.04,
          opacity: p1a, transform: `translateY(${(1 - p1a) * 24}px) scale(${0.97 + p1a * 0.03})` }}>Ihre Kunden erwarten mehr.</div>
        <div style={{ ...sh, fontSize: 84, marginTop: 18,
          opacity: p1b, transform: `translateY(${(1 - p1b) * 24}px) scale(${0.97 + p1b * 0.03})` }}>
          <span style={gradText(GRAD_WARM)}>Schneller. Präziser. Fundierter.</span>
        </div>
      </div>
    </div>
  );
}

// ══ SCENE 1 — PROBLEM  (VO 5.00 "Das Problem?" · 6.00 Aufzählung · 9.88 "in Köpfen, …")
//    Gen-Background (Higgsfield M02): Coral-Linie franst aus, Tool-Kacheln verstreuen sich. ══
function ProblemBackground({ local }) {
  const frame = clamp(Math.floor(local * HOOK_BG_FPS) + 1, 1, PROBLEM_BG_FRAME_COUNT);
  const enter = rise(local, 0.1, 0.5);
  const exit = 1 - Easing.easeInCubic(clamp((local - 9.35) / 0.7, 0, 1));
  const op = 0.82 * enter * exit;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={PROBLEM_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        transform: `scale(${1.012 + local * 0.0015})`,
        filter: 'saturate(0.95) contrast(1.03) brightness(0.78)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.62) 0%, rgba(23,19,17,0.20) 46%, rgba(23,19,17,0.66) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 78% 72% at 50% 46%, rgba(23,19,17,0.04) 0%, rgba(23,19,17,0.26) 56%, rgba(23,19,17,0.85) 100%)' }} />
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

      {/* gen background video (Higgsfield M02) trägt das "verstreut" — ScatterTools ersetzt */}
      <ProblemBackground local={local} />

      {/* centered statements, overlapping in the same spot */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 1680, height: 280 }}>
          {/* beat 1 — das Problem + die Aufzählung */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', transform: `translateY(${-e1 * 22}px)` }}>
            <div style={{ width: 56, height: 3, background: GRAD_WARM, borderRadius: 2, marginBottom: 30,
              opacity: t1a, transform: `scaleX(${t1a})` }} />
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 92, lineHeight: 1.05,
              letterSpacing: '-0.025em', textAlign: 'center', color: TEXT, textShadow: sh,
              opacity: t1a, transform: `translateY(${(1 - t1a) * 24}px) scale(${0.97 + t1a * 0.03})` }}>Das Problem?</div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 62, lineHeight: 1.1,
              letterSpacing: '-0.02em', textAlign: 'center', color: MUTED, marginTop: 16, textShadow: sh,
              opacity: t1b, transform: `translateY(${(1 - t1b) * 24}px) scale(${0.97 + t1b * 0.03})` }}>Excel-Sheets. Verträge. Projektkontext. Wissen.</div>
          </div>
          {/* beat 2 — verstreut */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: t2, transform: `translateY(${(1 - t2) * 24}px)` }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 82, lineHeight: 1.08,
              letterSpacing: '-0.022em', textAlign: 'center', color: TEXT, textShadow: sh, textWrap: 'balance' }}>
              Verstreut: in Köpfen, PCs<br />und endlosen Tools.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══ SCENE 2 — DIE ANTWORT  (VO 13.02 "Die Antwort:" · 14.18 "Consultry." ·
//    15.30 "kennt Ihr Geschäft …" · 19.74 Signal · 23.44 Team) ══
// die vier Dinge, die Consultry kennt — Editorial-Spalten unter dem Logo (VO 15.3–19.2)
const KNOWS = ['Ihr Geschäft', 'Ihre Marke', 'Ihr Wissen', 'Ihre Projekte'];
const FEAT = [
  { n: '01', icon: 'zap',    name: 'Signal', tIn: 7.55,
    tag: 'Erkennt Opportunities, Markttrends und Ausschreibungen.',
    ex: 'Neue Ausschreibung · passt zur Marktposition', label: 'Pipeline', dir: 'up' },
  { n: '02', icon: 'target', name: 'Team', tIn: 11.5,
    tag: 'Kennt Projekte und Auslastung. Detektiert Faktura-Risiken und Arbeits-Synergien.',
    ex: 'Faktura-Risiko erkannt · Synergie vorgeschlagen', label: 'Auslastung', dir: 'up' },
];
function SceneSolution(local) {
  const bloom = clamp(local / 1.45, 0, 1);
  const eb = rise(local, 7.35, 0.6);
  const W = 690, GAP = 64, X0 = 238, Y = 392, H = 470;
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      {/* warm reveal bloom, top-anchored */}
      <div style={{ position: 'absolute', left: '50%', top: 340, width: 1700, height: 1100,
        transform: `translate(-50%,-50%) scale(${0.7 + bloom * 0.5})`, opacity: 0.3 + bloom * 0.6,
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.26) 0%, rgba(232,101,90,0.13) 34%, rgba(232,101,90,0.05) 54%, rgba(23,19,17,0) 72%)',
        pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '50%', top: 640, width: 1900, height: 700, transform: 'translateX(-50%)',
        opacity: 0.4 + bloom * 0.2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 62% 52% at 50% 30%, rgba(232,145,58,0.10) 0%, rgba(23,19,17,0) 70%)' }} />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 92% 82% at 50% 44%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.52) 100%)' }} />

      {/* Editorial-Spalten unter dem Logo — im Takt der VO-Wörter, Stil der Step-Labels */}
      <div style={{ position: 'absolute', top: 588, left: 0, right: 0, display: 'flex',
        justifyContent: 'center', gap: 60 }}>
        {KNOWS.map((label, i) => {
          const p = rise(local, 3.3 + i * 0.72, 0.6);
          const out = 1 - Easing.easeInCubic(clamp((local - 6.9) / 0.45, 0, 1));
          const op = p * out;
          if (op <= 0.001) return <div key={label} style={{ width: 264 }} />;
          return (
            <div key={label} style={{ width: 264, opacity: op, transform: `translateY(${(1 - p) * 22}px)` }}>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.16)',
                transform: `scaleX(${p})`, transformOrigin: '0 50%' }} />
              <div style={{ marginTop: 16, fontFamily: MONO, fontSize: 15, letterSpacing: '0.16em', color: WARM }}>[0{i + 1}]</div>
              <div style={{ marginTop: 8, fontFamily: DISPLAY, fontWeight: 700, fontSize: 40,
                letterSpacing: '-0.015em', color: TEXT }}>{label}</div>
            </div>
          );
        })}
      </div>

      {/* Kapitel-Anker links oben, kommt mit den Karten */}
      <Chapter n={2} label="Die Plattform" op={eb} />

      {/* Signal + Team deal in, synced to their VO sentences */}
      {FEAT.map((f, i) => {
        const p = Easing.easeOutCubic(clamp((local - f.tIn) / 0.85, 0, 1));
        if (p <= 0.001) return null;
        const tx = (1 - p) * 64;
        const ty = (1 - p) * 66;
        const rot = (1 - p) * (i % 2 ? -5 : 5);
        const float = Math.sin(local * 0.7 + i) * 2.2;
        const tdraw = clamp((local - (f.tIn + 0.55)) / 0.8, 0, 1);
        return (
          <div key={f.n} style={{ position: 'absolute', left: X0 + i * (W + GAP), top: Y, width: W, height: H,
            opacity: p, transform: `translate(${tx}px, ${ty + float}px) rotate(${rot}deg)`,
            transformOrigin: '50% 0%', overflow: 'hidden',
            background: 'linear-gradient(180deg, #faf6f0 0%, #ede8e2 100%)',
            border: '1px solid rgba(255,255,255,0.22)', borderRadius: 14, boxShadow: '0 26px 60px rgba(0,0,0,0.5)',
            display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 3, background: GRAD_WARM, flexShrink: 0 }} />
            <div style={{ padding: 42, display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: 72, height: 72, borderRadius: 18, display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: '#b64702',
                background: 'linear-gradient(#faf6f0,#faf6f0) padding-box, ' + GRAD + ' border-box',
                border: '1px solid transparent' }}>
                <Icon name={f.icon} size={36} color="#b64702" sw={1.8} />
              </div>
              <span style={{ fontFamily: MONO, fontSize: 15, letterSpacing: '0.16em', color: 'rgba(30,27,24,0.4)' }}>[{f.n}]</span>
            </div>
            <h3 style={{ margin: '22px 0 0', fontFamily: DISPLAY, fontWeight: 700,
              fontSize: 54, letterSpacing: '-0.01em', color: '#1e1b18' }}>{f.name}</h3>
            <p style={{ margin: '12px 0 0', fontFamily: INTER, fontSize: 24, fontWeight: 500,
              lineHeight: 1.34, color: 'rgba(30,27,24,0.66)' }}>{f.tag}</p>
            {/* concrete product moment — a live fragment from the workplane */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 18px', borderRadius: 12, background: '#f4efe8',
              border: '1px solid rgba(30,27,24,0.10)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: '#e8913a', flexShrink: 0,
                boxShadow: '0 0 8px rgba(232,145,58,0.5)' }} />
              <span style={{ fontFamily: MONO, fontSize: 16.5, letterSpacing: '0.02em', color: 'rgba(30,27,24,0.66)',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.ex}</span>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid rgba(30,27,24,0.10)' }}>
              <Trend label={f.label} dir={f.dir} draw={tdraw} light />
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ══ SCENE 3 — VERTRIEB / ANGEBOT  (VO 30.06 "Ihr Vertrieb fragt Consultry …
//    … richtige Angebote, für die richtigen Kunden." bis 36.32) ══
function SceneVertrieb(local) {
  const eb = rise(local, 0.45, 0.6);
  const a1 = rise(local, 0.7, 0.7);
  const ask = rise(local, 0.9, 0.7);         // Frage-Pill mit VO "fragt Consultry"
  const arrow = rise(local, 3.1, 0.6);
  const card = rise(local, 3.3, 0.75);       // Karte früher — längere Anzeigezeit
  const b1 = rise(local, 5.35, 0.7);
  const trust = rise(local, 4.9, 0.6);       // Erfahrungs-Beleg unter dem Entwurf
  const c1 = rise(local, 6.0, 0.7);
  const QUERY = 'Kunde will bis Freitag ein Security-Angebot für Azure. Was haben wir schon?';
  const typed = QUERY.slice(0, Math.floor(clamp((local - 1.15) * 40, 0, QUERY.length)));
  const caretOn = Math.floor(local * 2.4) % 2 === 0;
  const rows = [
    { l: 'Referenzen', v: '3 passende Cases aus Ihrem Korpus' },
    { l: 'Team', v: 'Senior + 2 · verfügbar' },
    { l: 'Timeline', v: '8 Wochen · Start KW 34' },
    { l: 'Pricing', v: '€118–134k · Ihr Korridor, Ihre Faktoren' },
  ];
  const sh = { fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT,
    textShadow: '0 2px 26px rgba(8,6,4,0.75)' };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={3} label="Angebot" op={eb} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        paddingTop: TOP_LOGO_CENTERED_STACK_PAD, paddingBottom: 22 }}>
        <div style={{ ...sh, fontSize: 68, lineHeight: 1.05,
          opacity: a1, transform: `translateY(${(1 - a1) * 24}px) scale(${0.97 + a1 * 0.03})` }}>
          Ihr Vertrieb fragt Consultry.
        </div>
        {/* Produkt-Moment: Frage ↓ Angebotsentwurf, eine Spalte */}
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ opacity: ask, transform: `translateY(${(1 - ask) * 22}px)`,
            display: 'flex', alignItems: 'center', gap: 16, width: 1240, boxSizing: 'border-box',
            padding: '20px 34px', borderRadius: 999, background: '#1e1b18',
            border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}>
            <Icon name="sparkles" size={26} color={WARM} sw={1.8} />
            <span style={{ fontFamily: INTER, fontSize: 24, fontWeight: 500, color: TEXT,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>{typed}</span>
            <span style={{ width: 3, height: 28, background: WARM, flexShrink: 0,
              opacity: caretOn ? 0.9 : 0.15 }} />
          </div>
          <svg width="24" height="38" viewBox="0 0 24 44" style={{ opacity: arrow, margin: '4px 0' }}>
            <defs>
              <linearGradient id="varrow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f0a85e" /><stop offset="1" stopColor="#e8655a" />
              </linearGradient>
            </defs>
            <path d="M12 2v32M4 26l8 8 8-8" fill="none" stroke="url(#varrow)" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ opacity: card, transform: `translateY(${(1 - card) * 26}px) scale(${0.96 + card * 0.04})`,
            width: 1240, borderRadius: 14, overflow: 'hidden',
            background: 'linear-gradient(180deg, #faf6f0 0%, #ede8e2 100%)',
            border: '1px solid rgba(255,255,255,0.22)', boxShadow: '0 26px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ height: 3, background: GRAD_WARM }} />
            <div style={{ padding: '24px 40px 26px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '0.16em', color: '#b64702' }}>ANGEBOT · CONSULTRY</span>
                <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.14em', color: '#b64702',
                  padding: '5px 12px', borderRadius: 999, background: 'rgba(182,71,2,0.08)',
                  border: '1px solid rgba(182,71,2,0.35)' }}>DRAFT PREVIEW</span>
              </div>
              <div style={{ marginTop: 14, fontFamily: DISPLAY, fontWeight: 700, fontSize: 34,
                letterSpacing: '-0.015em', color: '#1e1b18' }}>Secure Azure + Sentinel + Managed SOC</div>
              {rows.map((r, i) => {
                const rp = rise(local, 3.6 + i * 0.18, 0.5);
                return (
                  <div key={r.l} style={{ display: 'flex', alignItems: 'baseline', gap: 18,
                    padding: i ? '10px 0' : '14px 0 10px', marginTop: i ? 0 : 8,
                    borderTop: i ? '1px solid rgba(30,27,24,0.09)' : 'none',
                    opacity: rp, transform: `translateX(${(1 - rp) * 14}px)` }}>
                    <span style={{ fontFamily: MONO, fontSize: 13.5, letterSpacing: '0.14em',
                      textTransform: 'uppercase', color: 'rgba(30,27,24,0.5)', width: 168, flexShrink: 0 }}>{r.l}</span>
                    <span style={{ fontFamily: INTER, fontSize: 19, fontWeight: 500, color: '#1e1b18' }}>{r.v}</span>
                  </div>
                );
              })}
              {/* Beleg: Erfahrung + bekannte Risiken → Vertrauen */}
              <div style={{ marginTop: 8, paddingTop: 14, borderTop: '1px solid rgba(30,27,24,0.09)',
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: trust, transform: `translateX(${(1 - trust) * 14}px)` }}>
                <Icon name="shield" size={20} color="#b64702" sw={1.8} />
                <span style={{ fontFamily: INTER, fontSize: 18, fontWeight: 500, color: 'rgba(30,27,24,0.66)' }}>
                  7× für Kunden umgesetzt — typische Risiken bekannt, Setup erprobt.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ ...sh, fontSize: 48, lineHeight: 1.1, marginTop: 22,
          opacity: b1, transform: `translateY(${(1 - b1) * 24}px) scale(${0.97 + b1 * 0.03})` }}>
          <span style={gradText(GRAD_WARM)}>Ihr Können wird zum richtigen Angebot. Für die richtigen Kunden.</span>
        </div>
        <div style={{ marginTop: 14, fontFamily: INTER, fontSize: 21, fontWeight: 500, color: MUTED,
          textAlign: 'center', opacity: c1, transform: `translateY(${(1 - c1) * 12}px)` }}>
          Ihre Senior-Berater liefern beim Kunden — statt in internen Runden, die niemand fakturiert.
        </div>
      </div>
    </div>
  );
}

// ══ SCENE 4 — WISSEN  (VO 37.10 "Ihr Wissen ist da, wenn es zählt." ·
//    39.26 "So haben Sie immer die richtige Antwort parat … Risiken im Blick.") ══
const WCARDS = [
  { icon: 'book', tIn: 2.75, kind: 'wissen', title: 'Die richtige Antwort. Immer parat.' },
  { icon: 'shield', tIn: 4.35, kind: 'risiko', title: 'Alle Risiken im Blick.' },
];
function SceneWissen(local) {
  const eb = rise(local, 0.3, 0.6);
  const a1 = rise(local, 0.35, 0.7);
  const sov = rise(local, 5.55, 0.7);
  const sh = { fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT,
    textShadow: '0 2px 26px rgba(8,6,4,0.75)' };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={4} label="Wissen" op={eb} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', paddingTop: TOP_LOGO_CONTENT_Y }}>
        <div style={{ ...sh, fontSize: 84, lineHeight: 1.05,
          opacity: a1, transform: `translateY(${(1 - a1) * 24}px) scale(${0.97 + a1 * 0.03})` }}>
          Ihr Wissen ist da, wenn es zählt.
        </div>
        {/* zwei Produkt-Momente: Antwort parat · Risiko-Radar */}
        <div style={{ marginTop: 38, display: 'flex', alignItems: 'stretch', gap: 52 }}>
          {WCARDS.map((c, i) => {
            const p = rise(local, c.tIn, 0.75);
            const float = Math.sin(local * 0.7 + i * 1.4) * 2.2 * p;
            return (
              <div key={c.icon} style={{ width: 824, minHeight: 380, boxSizing: 'border-box', borderRadius: 14, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                opacity: p, transform: `translateY(${(1 - p) * 30 + float}px) scale(${0.96 + p * 0.04})`,
                background: 'linear-gradient(180deg, #faf6f0 0%, #ede8e2 100%)',
                border: '1px solid rgba(255,255,255,0.22)', boxShadow: '0 26px 60px rgba(0,0,0,0.5)', textAlign: 'left' }}>
                <div style={{ height: 3, background: GRAD_WARM, flexShrink: 0 }} />
                <div style={{ padding: 44, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  <div style={{ width: 72, height: 72, borderRadius: 18, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                    background: 'linear-gradient(#faf6f0,#faf6f0) padding-box, ' + GRAD + ' border-box',
                    border: '1px solid transparent' }}>
                    <Icon name={c.icon} size={36} color="#b64702" sw={1.8} />
                  </div>
                  <h3 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 700, fontSize: 40,
                    lineHeight: 1.15, letterSpacing: '-0.01em', color: '#1e1b18' }}>{c.title}</h3>
                </div>
                {c.kind === 'wissen' ? (() => {
                  const r1 = rise(local, c.tIn + 0.35, 0.5);
                  const r2 = rise(local, c.tIn + 0.65, 0.5);
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <p style={{ margin: '18px 0 0', fontFamily: INTER, fontSize: 20, fontWeight: 500,
                        lineHeight: 1.5, color: 'rgba(30,27,24,0.66)' }}>
                        Projektkontext und Wissensbasis verknüpft — so nutzen Sie die Erfahrung,
                        die Ihre Berater in jedem Mandat sammeln.
                      </p>
                      {/* Wissens-Treffer als Produkt-Fragment */}
                      <div style={{ marginTop: 24, borderRadius: 12, background: '#f4efe8',
                        border: '1px solid rgba(30,27,24,0.10)', padding: '20px 24px',
                        opacity: r1, transform: `translateX(${(1 - r1) * 14}px)` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                          <span style={{ width: 8, height: 8, borderRadius: 99, background: '#e8913a', flexShrink: 0,
                            boxShadow: '0 0 8px rgba(232,145,58,0.5)' }} />
                          <span style={{ fontFamily: MONO, fontSize: 18.5, color: '#1e1b18' }}>Referenz-Case: ERP-Migration · 2 Mandate</span>
                        </div>
                        <div style={{ marginTop: 10, marginLeft: 19, fontFamily: MONO, fontSize: 15.5, color: 'rgba(30,27,24,0.45)' }}>
                          Methode · Pricing-Historie · Ansprechpartner
                        </div>
                      </div>
                      <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', alignItems: 'center', gap: 10,
                        opacity: r2, transform: `translateX(${(1 - r2) * 14}px)` }}>
                        <Icon name="sparkles" size={18} color="#b64702" sw={2} />
                        <span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: '0.14em', color: '#b64702' }}>GEFUNDEN IN 15 SEKUNDEN</span>
                      </div>
                    </div>
                  );
                })() : (
                  <div style={{ marginTop: 12 }}>
                    {[
                      { label: 'Scope-Drift', badge: 'früh erkannt', tone: '#f0a85e', glow: 'rgba(240,168,94,0.7)' },
                      { label: 'Deadline-Puffer', badge: 'im Plan', tone: '#66c088', glow: 'rgba(102,192,136,0.6)' },
                      { label: 'Faktura-Lücke', badge: 'Gegenmaßnahme läuft', tone: '#f0a85e', glow: 'rgba(240,168,94,0.7)' },
                    ].map((r, j) => {
                      const rp = rise(local, c.tIn + 0.35 + j * 0.22, 0.5);
                      return (
                        <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '18px 0', borderTop: j ? '1px solid rgba(30,27,24,0.10)' : '1px solid transparent',
                          opacity: rp, transform: `translateX(${(1 - rp) * 14}px)` }}>
                          <span style={{ fontFamily: INTER, fontSize: 23, fontWeight: 500, color: '#1e1b18' }}>{r.label}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 18px',
                            borderRadius: 999, background: '#f4efe8', border: '1px solid rgba(30,27,24,0.10)' }}>
                            <span style={{ width: 8, height: 8, borderRadius: 99, background: r.tone,
                              boxShadow: `0 0 7px ${r.glow}` }} />
                            <span style={{ fontFamily: MONO, fontSize: 15.5, color: 'rgba(30,27,24,0.66)' }}>{r.badge}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
  const l1 = rise(local, 0.5, 0.6);
  const l2 = rise(local, 1.55, 0.6);
  const l3 = rise(local, 2.65, 0.6);
  const btn = rise(local, 3.95, 0.6);
  const trust = rise(local, 5.2, 0.7);
  const foot = rise(local, 5.9, 0.7);
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '44%', width: 1700, height: 1400,
        transform: 'translate(-50%,-50%)', opacity: glow * 0.9, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(232,145,58,0.18) 0%, rgba(232,101,90,0.10) 34%, rgba(232,101,90,0.04) 54%, rgba(23,19,17,0) 70%)' }} />

      {/* content sits below the persistent logo */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 508, display: 'flex',
        flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: DISPLAY, fontWeight: 700, fontSize: 84, lineHeight: 1.04,
          letterSpacing: '-0.025em', textAlign: 'center' }}>
          <span style={{ display: 'block', color: TEXT, opacity: l1,
            transform: `translateY(${(1 - l1) * 18}px)` }}>Weniger Tools.</span>
          <span style={{ display: 'block', color: TEXT, opacity: l2,
            transform: `translateY(${(1 - l2) * 18}px)` }}>Mehr Effizienz.</span>
          <span style={{ display: 'block', opacity: l3, transform: `translateY(${(1 - l3) * 18}px)`,
            ...gradText(GRAD) }}>Mehr Beratung.</span>
        </h2>

        <div style={{ marginTop: 34, display: 'flex', alignItems: 'center', gap: 12,
          opacity: btn, transform: `translateY(${(1 - btn) * 14}px) scale(${0.96 + btn * 0.04})`,
          padding: '20px 38px', borderRadius: 999, color: '#fff8f1', fontFamily: INTER,
          fontWeight: 600, fontSize: 25, letterSpacing: '-0.01em',
          background: 'linear-gradient(180deg, #df9a58 0%, #d9843f 44%, #cb6153 100%)',
          boxShadow: '0 14px 38px rgba(203,97,83,0.4), inset 0 1px 0 rgba(255,255,255,0.25)' }}>
          Auf die Warteliste
          <Icon name="arrowUR" size={22} color="#fff8f1" sw={2} />
        </div>

        <div style={{ marginTop: 28, fontFamily: MONO, fontSize: 17, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: FAINT, opacity: trust }}>
          Pre-Launch · Für IT-Beratungen · Pilotkunden willkommen
        </div>
      </div>

      {/* footer hairline */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 54, display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: 16, opacity: foot }}>
        <div style={{ width: 360, height: 2, background: GRAD_FULL, borderRadius: 2 }} />
        <div style={{ fontFamily: MONO, fontSize: 15, letterSpacing: '0.22em', color: MUTED }}>DSGVO · EU-HOSTING</div>
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
  { heads: 80, size: '80 Berater', cost: 'Kosten ~€45k', valueK: 1248 },
];
function SceneFinanz(local) {
  const eb = band(local, 0.35, 20.5, 0.5);  // Kapitel-Anker bleibt die ganze Szene
  const pA1 = band(local, 0.45, 8.5, 0.5);  // "Kein AI-Chatbot." (VO 45.76)
  const pA2 = band(local, 1.4, 8.6, 0.5);   // "Das Betriebssystem …"
  const pA3 = band(local, 3.4, 8.65, 0.5);  // Spannweite Signal → Abrechnung
  const hB = band(local, 8.8, 20.85, 0.5);  // Zahlen-Phase (VO 54.58)
  const src = band(local, 16.2, 20.85, 0.5);
  const sh = { fontFamily: DISPLAY, fontWeight: 700, textAlign: 'center', color: TEXT,
    textShadow: '0 2px 26px rgba(8,6,4,0.75)' };
  const fmtEuro = (k) => k >= 1000
    ? '€' + (k / 1000).toFixed(2).replace(/\.?0+$/, '').replace('.', ',') + 'M'
    : '€' + Math.round(k) + 'k';
  // — Chart-Geometrie: Mehrwert vs. Consultry-Kosten in € pro Jahr (5–80 Berater) —
  const CW = 1500, CH = 300, padL = 86, padR = 46, padT = 20, padB = 44;
  const YMAX = 1300; // €k pro Jahr
  const xh = (h) => padL + ((h - 5) / 75) * (CW - padL - padR);
  const yk = (k) => CH - padB - (k / YMAX) * (CH - padT - padB);
  const fVal = (h) => h * 15.6;   // 1 gesparter Tag je Berater/Monat × €1.300 → €k/Jahr
  const fCost = (h) => {
    const C = [[5, 2.5], [10, 5], [30, 15], [50, 27], [80, 45]];
    if (h <= C[0][0]) return C[0][1];
    for (let i = 0; i < C.length - 1; i++) {
      if (h <= C[i + 1][0]) {
        const u = (h - C[i][0]) / (C[i + 1][0] - C[i][0]);
        return C[i][1] + (C[i + 1][1] - C[i][1]) * u;
      }
    }
    return C[C.length - 1][1];
  };
  const chartOp = rise(local, 9.9, 0.5);
  const q = clamp((local - 10.05) / 1.9, 0, 1);   // linearer Draw — Karten poppen, wenn die Linie sie passiert
  const hMax = 5 + q * 75;
  const mk = (f) => {
    const arr = [];
    for (let h = 5; h < hMax; h += 1.25) arr.push([xh(h), yk(f(h))]);
    arr.push([xh(hMax), yk(f(hMax))]);
    return arr;
  };
  const toD = (arr) => arr.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
  const vPts = mk(fVal), cPts = mk(fCost);
  const lineD = toD(vPts);
  const costD = toD(cPts);
  const areaD = lineD + 'L' + vPts[vPts.length - 1][0].toFixed(1) + ' ' + (CH - padB) +
    'L' + vPts[0][0].toFixed(1) + ' ' + (CH - padB) + 'Z';
  const tip = vPts[vPts.length - 1];
  const cTip = cPts[cPts.length - 1];
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={5} label="Business Case" op={eb} />
      {/* Phase A — Positionierung */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>
        <div style={{ ...sh, fontSize: 88, lineHeight: 1.05,
          opacity: pA1, transform: `translateY(${(1 - pA1) * 24}px) scale(${0.97 + pA1 * 0.03})` }}>
          Kein AI-Chatbot.
        </div>
        <div style={{ ...sh, fontSize: 64, lineHeight: 1.1, marginTop: 22,
          opacity: pA2, transform: `translateY(${(1 - pA2) * 24}px) scale(${0.97 + pA2 * 0.03})` }}>
          <span style={gradText(GRAD_WARM)}>Das Betriebssystem für Beratungsarbeit.</span>
        </div>
        <div style={{ fontFamily: INTER, fontSize: 26, fontWeight: 500, lineHeight: 1.45, color: MUTED,
          textAlign: 'center', marginTop: 30, maxWidth: 1340,
          opacity: pA3, transform: `translateY(${(1 - pA3) * 18}px)` }}>
          Agentisch und gesteuert — von Signal über Angebot und Staffing bis Wissen und Abrechnung.
        </div>
      </div>
      {/* Phase B — animierter Break-even: Chart + Stat-Cards */}
      <div style={{ position: 'absolute', inset: 0, opacity: hB }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          paddingTop: TOP_LOGO_CHART_STACK_PAD, paddingBottom: 36 }}>
          <div style={{ ...sh, fontSize: 52, lineHeight: 1.05 }}>
            Ein gesparter Beratertag zahlt Consultry. Der Rest ist Marge.
          </div>
          <svg width={CW} height={CH} viewBox={`0 0 ${CW} ${CH}`}
            style={{ marginTop: 26, opacity: chartOp, overflow: 'visible' }}>
            <defs>
              <linearGradient id="begrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#f0a85e" /><stop offset="1" stopColor="#e8655a" />
              </linearGradient>
              <linearGradient id="beare" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(240,168,94,0.20)" /><stop offset="1" stopColor="rgba(240,168,94,0)" />
              </linearGradient>
            </defs>
            {[300, 600, 900, 1200].map((k) => (
              <g key={k}>
                <line x1={padL} y1={yk(k)} x2={CW - padR} y2={yk(k)} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                <text x={padL - 14} y={yk(k) + 4.5} textAnchor="end" fontFamily='"JetBrains Mono", monospace'
                  fontSize="13" fill="rgba(250,250,249,0.4)">{k === 1200 ? '1,2M' : k + 'k'}</text>
              </g>
            ))}
            <text x={padL} y={padT - 6} fontFamily='"JetBrains Mono", monospace' fontSize="12.5"
              letterSpacing="0.12em" fill="rgba(250,250,249,0.4)">MEHRWERT VS. CONSULTRY-KOSTEN · € PRO JAHR</text>
            <line x1={padL} y1={CH - padB} x2={CW - padR} y2={CH - padB} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
            {[5, 10, 20, 30, 50, 80].map((h) => (
              <g key={h}>
                <line x1={xh(h)} y1={CH - padB} x2={xh(h)} y2={CH - padB + 5} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
                <text x={xh(h)} y={CH - padB + 24} textAnchor="middle" fontFamily='"JetBrains Mono", monospace'
                  fontSize="13" fill="rgba(250,250,249,0.4)">{h}</text>
              </g>
            ))}
            <text x={CW - padR + 34} y={CH - padB + 24} textAnchor="start" fontFamily='"JetBrains Mono", monospace'
              fontSize="12.5" letterSpacing="0.1em" fill="rgba(250,250,249,0.4)">BERATER</text>
            <path d={areaD} fill="url(#beare)" />
            <path d={costD} fill="none" stroke="rgba(250,250,249,0.45)" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 7" />
            <path d={lineD} fill="none" stroke="url(#begrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            {BREAKEVEN.map((b) => {
              const cIn = 10.05 + 1.9 * (b.heads - 5) / 75;
              const dp = rise(local, cIn, 0.4);
              if (dp <= 0.001) return null;
              return <circle key={b.heads} cx={xh(b.heads)} cy={yk(fVal(b.heads))} r={5.5 * (0.6 + dp * 0.4)}
                fill="#f0a85e" opacity={dp} style={{ filter: 'drop-shadow(0 0 6px rgba(240,168,94,0.8))' }} />;
            })}
            {q > 0.02 && q < 0.99 && <circle cx={tip[0]} cy={tip[1]} r="5" fill="#f0a85e" />}
            {q > 0.97 && <text x={tip[0] - 12} y={tip[1] + 28} textAnchor="end" fontFamily='"JetBrains Mono", monospace'
              fontSize="13.5" letterSpacing="0.12em" fill="#f0a85e">MEHRWERT</text>}
            {q > 0.97 && <text x={cTip[0] - 12} y={cTip[1] - 14} textAnchor="end" fontFamily='"JetBrains Mono", monospace'
              fontSize="12.5" letterSpacing="0.1em" fill="rgba(250,250,249,0.4)">CONSULTRY-KOSTEN</text>}
          </svg>
          <div style={{ marginTop: 30, display: 'flex', gap: 30 }}>
            {BREAKEVEN.map((b) => {
              const cIn = 10.05 + 1.9 * (b.heads - 5) / 75;
              const p = rise(local, cIn + 0.1, 0.6);
              const cnt = Easing.easeOutCubic(clamp((local - cIn - 0.25) / 1.0, 0, 1));
              const val = b.valueK * cnt;
              return (
                <div key={b.size} style={{ width: 352, boxSizing: 'border-box', borderRadius: 14, overflow: 'hidden',
                  opacity: p, transform: `translateY(${(1 - p) * 24}px)`,
                  background: `linear-gradient(180deg, ${CARD_HI} 0%, ${CARD} 62%)`,
                  border: `1px solid ${BORDER}`, boxShadow: '0 18px 42px rgba(0,0,0,0.4)' }}>
                  <div style={{ height: 3, background: GRAD_WARM, opacity: 0.9 }} />
                  <div style={{ padding: '18px 22px 20px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '0.13em',
                        textTransform: 'uppercase', color: WARM }}>{b.size}</span>
                      <span style={{ fontFamily: MONO, fontSize: 12.5, color: FAINT }}>{b.cost}</span>
                    </div>
                    <div style={{ marginTop: 12, fontFamily: DISPLAY, fontWeight: 700, fontSize: 54,
                      letterSpacing: '-0.02em', lineHeight: 1, color: TEXT }}>{fmtEuro(val)}</div>
                    <div style={{ marginTop: 8, fontFamily: INTER, fontSize: 16.5, fontWeight: 500,
                      color: MUTED }}>Mehrwert pro Jahr</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 26, fontFamily: INTER, fontSize: 24, fontWeight: 500, color: MUTED,
            opacity: src, transform: `translateY(${(1 - src) * 12}px)` }}>
            Annahme: <span style={{ color: TEXT, fontWeight: 700 }}>1 gesparter Tag</span> je Berater und Monat · Ø Tagessatz <span style={{ color: TEXT, fontWeight: 700 }}>€1.300</span> · Consultry ab <span style={{ color: TEXT, fontWeight: 700 }}>€50</span> pro Seat
          </div>
          <div style={{ marginTop: 10, fontFamily: MONO, fontSize: 13.5, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: FAINT, opacity: src }}>
            Quelle: BDU Honorare im Consulting 2025 · eigenes Preismodell
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Persistent logo: one element, morphs across the whole film ───────────────
// keyframes: [t, centerX, centerY, width, opacity] — wide horizontal lockup
const LOGO_KEYS = [
  [0.0,  960, 116, 380, 0],
  [1.1,  960, 116, 380, 1],
  [14.5, 960, 116, 380, 1],   // small, top-centre through hook + problem
  [15.95, 960, 400, 980, 1],  // blooms big + centre — VO "Die Antwort: Consultry."
  [20.9, 960, 400, 980, 1],   // holds centre while VO: "kennt Ihr Geschäft …"
  [21.8, 960, TOP_LOGO_CY, TOP_LOGO_W, 1],   // lifts to the top, makes room for the cards
  [67.4, 960, TOP_LOGO_CY, TOP_LOGO_W, 1],   // holds through Vertrieb + Wissen + Business Case
  [68.6, 960, 316, 800, 1],   // glides to hero centre for the CTA
  [73.5, 960, 316, 800, 1],
];
const LOGO_W0 = 980;
function sampleLogo(t) {
  const K = LOGO_KEYS;
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
function PersistentLogo() {
  const t = useTime();
  const k = sampleLogo(t);
  const sc = k.w / LOGO_W0;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: k.cx, top: k.cy,
        width: LOGO_W0, height: LOGO_W0 * LOGO_AR, objectFit: 'contain', opacity: k.op,
        transform: `translate(-50%,-50%) scale(${sc})`, filter: 'drop-shadow(0 6px 22px rgba(0,0,0,0.45))' }} />
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
      <Scene start={0}     end={5.35}>{(l) => SceneHook(l)}</Scene>
      <Scene start={4.85}  end={15.0}>{(l) => SceneProblem(l)}</Scene>
      <Scene start={14.5}  end={32.4}>{(l) => SceneSolution(l)}</Scene>
      <Scene start={31.9}  end={39.6}>{(l) => SceneVertrieb(l)}</Scene>
      <Scene start={39.0}  end={45.9}>{(l) => SceneWissen(l)}</Scene>
      <Scene start={45.45} end={66.3}>{(l) => SceneFinanz(l)}</Scene>
      <Scene start={65.9}  end={73.5} fade={0.5}>{(l) => SceneCTA(l)}</Scene>
      <Voiceover />
      <Music />
      <PersistentLogo />
    </Stage>
  );
}

window.PitchVideo = PitchVideo;
