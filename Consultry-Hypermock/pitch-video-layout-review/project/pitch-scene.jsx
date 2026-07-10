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
const APP_ACCENT   = '#e8655a';
const APP_CANVAS   = '#f7f4ef';
const APP_SURFACE  = '#fffaf4';
const APP_RAISED   = '#efe9e1';
const APP_OVERLAY  = '#e4dbd1';
const APP_TEXT     = '#29241f';
const APP_MUTED    = '#6f665c';
const APP_FAINT    = '#9a9085';
const APP_LINE     = 'rgba(45,38,32,0.13)';
const APP_LINE_STRONG = 'rgba(45,38,32,0.22)';
const APP_DIVIDER_GRAD = APP_ACCENT;
const APP_CANVAS_GRID = 'rgba(45,38,32,0.055)';
const MONO        = '"JetBrains Mono", ui-monospace, monospace';
const INTER      = '"Satoshi", Inter, system-ui, sans-serif';
const DISPLAY     = '"Satoshi", Inter, system-ui, sans-serif'; // logo wordmark face
const APP_TYPED_FONT = INTER;
const appTyped = (overrides = {}) => ({
  fontFamily: APP_TYPED_FONT,
  fontWeight: 650,
  letterSpacing: '-0.006em',
  textTransform: 'none',
  color: APP_TEXT,
  fontFeatureSettings: '"ss01" 1, "cv01" 1',
  ...overrides,
});

const LOGO  = 'assets/consultry-v3-user.svg'; // mark + Satoshi wordmark + tagline
const LOGO_AR = 0.2568;                       // tight-cropped aspect (h/w)
const LOGO_BLOOM_W = 900;
const LOGO_BLOOM_CY = 438;
const LOGO_BLOOM_MARK_SIZE = LOGO_BLOOM_W * LOGO_AR;
const LOGO_BLOOM_MARK_CX = 960 - LOGO_BLOOM_W / 2 + LOGO_BLOOM_MARK_SIZE / 2 + 11;
const LOGO_TOP_LEFT_PAD_X = 78;
const LOGO_TOP_LEFT_PAD_Y = 62;
const LOGO_MARK_SIZE = 86;
const LOGO_MARK_CX = LOGO_TOP_LEFT_PAD_X + LOGO_MARK_SIZE / 2;
const LOGO_MARK_CY = LOGO_TOP_LEFT_PAD_Y + LOGO_MARK_SIZE / 2;
const APP_FRAME_LEFT = 48;
const APP_FRAME_TOP = 42;
const APP_FRAME_W = 1824;
const APP_FRAME_H = 986;
const APP_TOPBAR_H = 0;
const APP_SIDEBAR_W = 116;
const APP_VIEWPORT_GAP = 0;
const APP_SIDEBAR_NAV_TOP = 132;
const APP_SIDEBAR_ITEM_LEFT = 22;
const APP_SIDEBAR_ITEM_SIZE = 70;
const APP_SIDEBAR_ITEM_GAP = 15;
const APP_CONTENT_INSET_LEFT = 150;
const APP_CONTENT_INSET_RIGHT = 34;
const APP_CONTENT_INSET_BOTTOM = 30;
const APP_CONTENT_LEFT = APP_FRAME_LEFT + APP_CONTENT_INSET_LEFT;
const APP_CONTENT_TOP = APP_FRAME_TOP + APP_TOPBAR_H + APP_VIEWPORT_GAP;
const APP_CONTENT_W = APP_FRAME_W - APP_CONTENT_INSET_LEFT - APP_CONTENT_INSET_RIGHT;
const APP_CONTENT_H = APP_FRAME_H - APP_TOPBAR_H - APP_VIEWPORT_GAP - APP_CONTENT_INSET_BOTTOM;
const OFFER_EDIT_SIDEBAR = {
  x: APP_FRAME_LEFT + APP_FRAME_W - 680,
  y: APP_FRAME_TOP,
  w: 680,
  h: APP_FRAME_H,
};
const OFFER_EDIT_PROMPT_BAR = {
  x: OFFER_EDIT_SIDEBAR.x + 22,
  y: OFFER_EDIT_SIDEBAR.y + 88,
  w: OFFER_EDIT_SIDEBAR.w - 44,
  h: 76,
};
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
const SOL1_FRAME_COUNT = 169; // M04 reveal (7.04s) — reused as finance background after intro trim
const SOL1_BG = (idx) => `uploads/gen-solution1-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const OPENING_SEQUENCE_CUT = 6.05; // start directly on "Senior-Zeit gehört..." and remove the positioning slide
const SOL_SWITCH_T = 7.0 - OPENING_SEQUENCE_CUT;     // Beat-Wechsel M04→M05 (Szenen-lokal, +2s synchronisiert)
const WORK_SEQUENCE_SHIFT = 1.05; // center-logo KI offer drafting bridge removed; Consultant Work can start sooner
const PROMPT_SEQUENCE_ADVANCE = 3.50; // pulls prompt handoff + dependent downstream scenes forward
// Landing pauses (~8s budget) — let key scenes settle before the next action/transition:
const HOLD_FEED = 0.00;     // (removed per review: no wait after selecting signals)
const HOLD_POPUP = -0.80;   // (per review: click means action — transition follows the Opportunity-gewinnen click promptly)
const HOLD_MATCH = 2.30;    // match list + timeline + team confirmation land before the Deal-closed bridge
const HOLD_OVERVIEW = 1.00; // AWS Transformation overview lands before prompt typing
const HOLD_PREP = 1.50;     // meeting-prep popups land before Finanz
const HOLD_FINANZ = 2.50;   // finance dashboard lands before CTA
const HOLD_ANGEBOT = 6.00;  // Angebot workspace hold — opens EMPTY (placeholders only; filled previews land in a later scene)
const SIGNAL_HOLDS = HOLD_FEED + HOLD_POPUP + HOLD_MATCH;
// m0232: scene order swapped — the Opportunity Workspace now follows the popup directly,
// and the team-match view follows the workspace before the Deal-closed bridge.
const REORDER_SHIFT = 20.50;             // match beats run after the workspace (+2.00 m0018, +2.40 m0035, +4.00 m0045, +0.90 m0054, +1.40 m0078 drafting animation)
const BRIDGE_PAUSE_AFTER_MATCH = 0.80;   // pause between match landing and Deal-closed bridge (replaces HOLD_ANGEBOT there)
const CV_SCENE_INSERT = 12.80;           // m0018/m0087: second workspace visit — CV selection/generation panel between match and the offer bridge
const CANVAS_SCENE_INSERT = 8.40;        // m0135: Opportunity-Canvas scene — "Im Canvas öffnen" click → canvas view → offer bridge
const BRIDGE_TRIM = 5.28;                // offer-payoff window collapsed — the workspace no longer plays inside the bridge (+3.00 m0042: Vertrieb overview pulled up to meet the Deal-closed fade, kills the white gap)
const POST_MATCH_SHIFT = REORDER_SHIFT + BRIDGE_PAUSE_AFTER_MATCH + CV_SCENE_INSERT + CANVAS_SCENE_INSERT - BRIDGE_TRIM;
const OFFER_OVERVIEW_HOLD = 0.65 + HOLD_OVERVIEW; // let Deal closed resolve into the AWS Transformation overview before prompt typing
const OFFER_STAGE_START = 4.05 + WORK_SEQUENCE_SHIFT; // overlay timing remains locked within Consultant Work
const OFFER_BG_START = 4.25 + WORK_SEQUENCE_SHIFT; // JSX work-stage starts after the bridge hold
const OFFER_OVERLAY_START = 7.25 + WORK_SEQUENCE_SHIFT; // work document overlays follow the delayed stage
const WORK_PROMPT_START = 9.60 + WORK_SEQUENCE_SHIFT - PROMPT_SEQUENCE_ADVANCE + OFFER_OVERVIEW_HOLD;
const WORK_PROMPT_PANEL_START = WORK_PROMPT_START - 1.62;
const WORK_PROMPT_SELECT_START = WORK_PROMPT_START - 0.44;
const WORK_PROMPT_VISUAL_START = WORK_PROMPT_START + 1.10;
const WORK_DETAIL_START = 17.30 + WORK_SEQUENCE_SHIFT + OFFER_OVERVIEW_HOLD;
const WORK_DETAIL_END = 20.40 + WORK_SEQUENCE_SHIFT + OFFER_OVERVIEW_HOLD;
const WISSEN_DETAIL_START = 10.80;
const WISSEN_DETAIL_END = 15.00;
const OFFER_VISUAL_END = WORK_DETAIL_END; // hold Consultant Work context through prompt + payoff
const OFFER_STAGE_SCALE = 0.96;
const OFFER_STAGE_Y = 0;
const PROJECT_CONTEXT_SHRINK_LEAD = 0.25; // prompt enters while the AWS Transformation bundle is still shrinking
const WISSEN_BG_FRAME_COUNT = 145; // logo/pipeline follow-up clip for Wissen foreground overlays
const WISSEN_BG_PLAY_DUR = 6.04;
const WISSEN_BG = (idx) => `uploads/gen-wissen-logo-pipeline-bg-frames/frame-${String(idx).padStart(4, '0')}.jpg`;
const VO_SRC = 'voiceover.wav';
const VO_DUR = 71.68; // Seed Audio 1.0 take vom 2026-07-04, natürlicher Export ohne Stretch
const DOWNSTREAM_SCENE_DELAY = 6.00; // slower Signal/Team pacing; downstream scenes move back together
const TEAM_PROFILE_SEQUENCE_CUT = 0.50; // keep profile as its own customer-requirements beat
const TEAM_DIRECT_VIEW_CUT = 2.00; // remove the preview-card pause; expand directly into the full profile view
const TEAM_STAFFING_SEQUENCE_CUT = 0.50; // give staffing + match list more time to land
const PROMPT_IDLE_SEQUENCE_CUT = 2.00; // shorten prompt hold before packet/send activation
const SCENE_SOLUTION_START = 0.00;
const SCENE_SOLUTION_END = 32.55;
const SCENE_VERTRIEB_START = 32.05 + DOWNSTREAM_SCENE_DELAY + SIGNAL_HOLDS + POST_MATCH_SHIFT - OPENING_SEQUENCE_CUT - TEAM_PROFILE_SEQUENCE_CUT - TEAM_DIRECT_VIEW_CUT - TEAM_STAFFING_SEQUENCE_CUT;
const SCENE_VERTRIEB_END = 53.15 + DOWNSTREAM_SCENE_DELAY + SIGNAL_HOLDS + POST_MATCH_SHIFT + WORK_SEQUENCE_SHIFT + 2.90 - PROMPT_SEQUENCE_ADVANCE - OPENING_SEQUENCE_CUT - TEAM_PROFILE_SEQUENCE_CUT - TEAM_DIRECT_VIEW_CUT - TEAM_STAFFING_SEQUENCE_CUT + OFFER_OVERVIEW_HOLD; // keep prompt scene alive through agent packet handoff
// SCENE_WISSEN_* stay as timing anchors for the prompt->knowledge bridge, but the standalone
// "Wissen" scene is removed (cc-3): its theme is already carried by the consultant-work / knowledge
// beat in the previous (Angebot) scene, so Vertrieb hands straight off to Finanz.
const SCENE_WISSEN_START = 53.15 + DOWNSTREAM_SCENE_DELAY + SIGNAL_HOLDS + POST_MATCH_SHIFT + WORK_SEQUENCE_SHIFT - PROMPT_SEQUENCE_ADVANCE - OPENING_SEQUENCE_CUT - TEAM_PROFILE_SEQUENCE_CUT - TEAM_DIRECT_VIEW_CUT - TEAM_STAFFING_SEQUENCE_CUT - PROMPT_IDLE_SEQUENCE_CUT + OFFER_OVERVIEW_HOLD;
const SCENE_WISSEN_END = 70.90 + DOWNSTREAM_SCENE_DELAY + SIGNAL_HOLDS + POST_MATCH_SHIFT + WORK_SEQUENCE_SHIFT - PROMPT_SEQUENCE_ADVANCE - OPENING_SEQUENCE_CUT - TEAM_PROFILE_SEQUENCE_CUT - TEAM_DIRECT_VIEW_CUT - TEAM_STAFFING_SEQUENCE_CUT - PROMPT_IDLE_SEQUENCE_CUT + OFFER_OVERVIEW_HOLD;
// cc-2: the prompt "send/activation" fires ~2.7s sooner (idle hold trimmed).
// m0047: the agent's concrete output ("Smart Matched Code") is recovered as a short beat right after the
//        send — replacing the dropped Wissen knowledge-graph; Finanz + CTA follow it.
// m0101: "Consulting Workspace · Projekt" dashboard precedes the Meeting-Vorbereitung beat
const PROJECT_DASH_INSERT = 6.70;
const PROJECT_DASH_START = SCENE_WISSEN_START + 2.90;
const PROJECT_DASH_END = PROJECT_DASH_START + PROJECT_DASH_INSERT + 0.50;
const SCENE_MATCHED_START = PROJECT_DASH_START + PROJECT_DASH_INSERT;   // completed agent message lands before the matched-output reveal
const SCENE_MATCHED_END = SCENE_MATCHED_START + 5.00 + HOLD_PREP;
const SCENE_FINANZ_START = SCENE_MATCHED_END - 0.50;
const SCENE_FINANZ_END = SCENE_FINANZ_START + 9.00 + HOLD_FINANZ;
const WORKFLOW_CANVAS_UI_START = 35.00 + SIGNAL_HOLDS + POST_MATCH_SHIFT + HOLD_OVERVIEW;
const WORKFLOW_CANVAS_UI_END = 50.00 + SIGNAL_HOLDS + POST_MATCH_SHIFT + HOLD_OVERVIEW;
const CTA_BACKGROUND_LEAD = 0.50;
const CTA_TAIL_CUT = 9.00 + CTA_BACKGROUND_LEAD - WISSEN_BG_PLAY_DUR; // end exactly with final background sequence
const SCENE_CTA_START = SCENE_FINANZ_END - 0.50 - CTA_BACKGROUND_LEAD;
const SCENE_CTA_END = SCENE_CTA_START + WISSEN_BG_PLAY_DUR;
const DUR = SCENE_CTA_END;
const VO_MUTED = true; // voiceover removed from the active composition
const MUSIC_MUTED = true; // m0131: soundtrack muted
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

const APP_PANEL_SHADOW = '0 24px 62px rgba(45,38,32,0.13), inset 0 1px 0 rgba(255,255,255,0.74)';
const APP_TILE_SHADOW = '0 14px 34px rgba(45,38,32,0.10), inset 0 1px 0 rgba(255,255,255,0.64)';
const appPanel = (radius = 28) => ({
  borderRadius: radius,
  background: APP_SURFACE,
  border: `1px solid ${APP_LINE}`,
  boxShadow: APP_PANEL_SHADOW,
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
});
const appTile = (color = APP_ACCENT, radius = 18) => ({
  borderRadius: radius,
  background: APP_RAISED,
  border: `1px solid ${color}42`,
  boxShadow: APP_TILE_SHADOW,
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
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
  const playEnd = Math.min(VO_DUR, DUR);
  React.useEffect(() => {
    const a = ref.current;
    if (!a || a.readyState < 1) return;
    a.volume = vol;
    const target = clamp(time, 0, playEnd - 0.05);
    const inRange = time < playEnd - 0.1;
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
  }, [time, playing, vol, ready, playEnd]);
  return (
    <video ref={ref} src={VO_SRC} playsInline preload="auto"
      onLoadedData={() => setReady(r => r + 1)}
      data-om-exportable-video-play-start={0}
      data-om-exportable-video-play-end={playEnd}
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

function BankAGMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#1d3a5f" />
      <path d="M12 4.6 5.4 8.2h13.2L12 4.6Z" fill="#f3ede2" />
      <rect x="6.4" y="9.6" width="2.1" height="6.2" rx="0.6" fill="#f3ede2" />
      <rect x="10.95" y="9.6" width="2.1" height="6.2" rx="0.6" fill="#f3ede2" />
      <rect x="15.5" y="9.6" width="2.1" height="6.2" rx="0.6" fill="#f3ede2" />
      <rect x="5.2" y="17.2" width="13.6" height="2.2" rx="0.8" fill="#f3ede2" />
    </svg>
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
  if (name === 'calendar')
    return <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
  if (name === 'pencil')
    return <svg {...common}><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>;
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

function sampleMotionPath(points, t) {
  if (t <= points[0].t) return points[0];
  const last = points[points.length - 1];
  if (t >= last.t) return last;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    if (t >= a.t && t <= b.t) {
      const p = Easing.easeInOutCubic(clamp((t - a.t) / Math.max(0.001, b.t - a.t), 0, 1));
      return { x: mix(a.x, b.x, p), y: mix(a.y, b.y, p), t };
    }
  }
  return last;
}

// Action-based cursor: appears shortly before each action, glides in with a
// slight arc, clicks with a two-ring pulse, and hides during idle stretches.
function cursorTrack(actions, l) {
  const APPEAR = 0.92, SETTLE = 0.16, LINGER = 0.60, LINK = 2.4, FADE = 0.28;
  const n = actions.length;
  if (!n) return { x: 0, y: 0, op: 0, click: 0, ring: 0 };
  const glides = actions.map((a, i) => {
    const linked = i > 0 && (a.t - actions[i - 1].t) <= LINK;
    return {
      start: linked ? actions[i - 1].t + 0.22 : a.t - APPEAR + 0.05,
      end: a.t - SETTLE,
      from: linked ? { x: actions[i - 1].x, y: actions[i - 1].y }
                   : { x: a.x + 104, y: a.y + 82 },
    };
  });
  let pos = { x: glides[0].from.x, y: glides[0].from.y };
  for (let i = 0; i < n; i++) {
    const g = glides[i];
    const a = actions[i];
    if (l <= g.start) break;
    if (l <= g.end) {
      const p = Easing.easeInOutCubic(clamp((l - g.start) / Math.max(0.001, g.end - g.start), 0, 1));
      const dx = a.x - g.from.x;
      const dy = a.y - g.from.y;
      const dist = Math.hypot(dx, dy) || 1;
      const bow = Math.sin(p * Math.PI) * Math.min(24, dist * 0.07);
      pos = {
        x: mix(g.from.x, a.x, p) + (-dy / dist) * bow,
        y: mix(g.from.y, a.y, p) + (dx / dist) * bow,
      };
    } else {
      pos = { x: a.x, y: a.y };
    }
  }
  let op = 0;
  let winStart = null;
  let winEnd = null;
  for (let i = 0; i < n; i++) {
    const s = actions[i].t - APPEAR;
    const e = actions[i].t + LINGER;
    if (winEnd !== null && s - winEnd <= LINK) {
      winEnd = e;
    } else {
      if (winEnd !== null) op = Math.max(op, band(l, winStart, winEnd, FADE));
      winStart = s;
      winEnd = e;
    }
  }
  if (winEnd !== null) op = Math.max(op, band(l, winStart, winEnd, FADE));
  let click = 0;
  let ring = 0;
  for (const a of actions) {
    if (!a.click) continue;
    click = Math.max(click, band(l, a.t - 0.05, a.t + 0.20, 0.08));
    const rp = clamp((l - (a.t - 0.02)) / 0.52, 0, 1);
    if (rp > 0 && rp < 1) ring = Math.max(ring, rp);
  }
  return { ...pos, op, click, ring };
}

// ── Journey-Fortschritt: kleine Kette von Indikatoren über die Opportunity-Szenen ──
const JourneyChip = ({ pct, op = 1, wide = false, note = null }) => (
  <span style={{ height: wide ? 36 : 26, borderRadius: 999, padding: wide ? '0 18px' : '0 11px',
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: wide ? 12 : 8, opacity: op,
    background: 'rgba(240,168,94,0.10)', border: '1px solid rgba(240,168,94,0.38)',
    boxShadow: wide ? '0 6px 18px rgba(240,168,94,0.14)' : 'none' }}>
    <span style={{ fontFamily: MONO, fontSize: wide ? 10.5 : 8.6, fontWeight: 830,
      letterSpacing: '0.11em', textTransform: 'uppercase', color: '#9a6a2e',
      whiteSpace: 'nowrap' }}>Journey</span>
    <span style={{ width: wide ? 220 : 56, height: wide ? 6 : 4, borderRadius: 999,
      background: 'rgba(45,38,32,0.12)', overflow: 'visible', display: 'inline-block',
      position: 'relative' }}>
      <span style={{ display: 'block', width: `${pct}%`, height: '100%', borderRadius: 999,
        background: wide ? `linear-gradient(90deg, #d99a55, ${WARM})` : WARM,
        boxShadow: wide ? '0 0 8px rgba(240,168,94,0.6)' : 'none' }} />
      {wide && [25, 50, 75].map((tick) => (
        <span key={`journey-tick-${tick}`} style={{ position: 'absolute', left: `${tick}%`,
          top: 1, bottom: 1, width: 1, background: pct > tick ? 'rgba(255,255,255,0.6)' : 'rgba(45,38,32,0.18)' }} />
      ))}
      {wide && (
        <span style={{ position: 'absolute', left: `${pct}%`, top: '50%', width: 12, height: 12,
          borderRadius: 99, transform: 'translate(-50%,-50%)', background: '#ffffff',
          border: `2.6px solid ${WARM}`, boxSizing: 'border-box',
          boxShadow: '0 2px 6px rgba(45,38,32,0.24)' }} />
      )}
    </span>
    <span style={{ fontFamily: MONO, fontSize: wide ? 12 : 9.4, fontWeight: 850, color: '#9a6a2e',
      whiteSpace: 'nowrap' }}>{pct} %</span>
    {wide && note && (
      <React.Fragment>
        <span style={{ width: 1, height: 16, background: 'rgba(240,168,94,0.34)' }} />
        <span style={{ fontFamily: INTER, fontSize: 11.5, fontWeight: 740, color: APP_MUTED,
          whiteSpace: 'nowrap' }}>{note}</span>
      </React.Fragment>
    )}
  </span>
);

function AppMouseCursor({ t, fade = 1 }) {
  const OFFER_WS_START = WS_ABS_START;
  let actions = null;
  let l = 0;
  if (t < OFFER_WS_START || (t >= WS_ABS_END - 0.12 && t < WS2_ABS_START - 0.10)) {
    l = t - SIGNAL_START;
    actions = [
      { t: SIGNAL_BEAT_FEED + 1.50, x: 236, y: 354, click: true },
      { t: SIGNAL_BEAT_FEED + 2.10, x: 236, y: 424, click: true },
      { t: SIGNAL_BEAT_FEED + 2.34, x: 236, y: 494, click: true },
      { t: SIGNAL_BEAT_FEED + 2.58, x: 236, y: 564, click: true },
      { t: SIGNAL_BEAT_DKB_ACTIVE - 0.04, x: 1101, y: 626, click: true },
      { t: SIGNAL_TEAM_PROFILE_STAGE_START - 0.20, x: 1370, y: 335, click: true },
      { t: SIGNAL_TEAM_OUTREACH_STAGE_START + 1.60, x: 540, y: 428, click: true },
      { t: SIGNAL_TEAM_OUTREACH_STAGE_START + 2.50, x: 1495, y: 570 },
      { t: SIGNAL_TEAM_STAFFING_PAGE_START + 1.30, x: 920, y: 880 },
      { t: SIGNAL_TEAM_STAFFING_PAGE_START + 1.85, x: 840, y: 505 },
      { t: SIGNAL_TEAM_STAFFING_PAGE_START + 2.60, x: 840, y: 560 },
      { t: SIGNAL_TEAM_STAFFING_PAGE_START + 4.55, x: 1505, y: 734, click: true },
    ];
  } else if (t < WS_ABS_END - 0.12) {
    // m0018/m0045/m0054 visit 1: click outreach → square "Entwurf generieren" → draft assembles → select subject
    // → Prompt-Kontext → gesprochener Edit-Wunsch → Anwenden → Erfolgs-Popup → bestätigen → Team finden
    l = t - OFFER_WS_START;
    actions = [
      { t: 2.30, x: 1015, y: 267 },
      { t: 2.75, x: 1015, y: 267, click: true },
      { t: 3.90, x: 1057, y: 332, click: true },
      { t: 5.40, x: 1000, y: 560 },
      { t: 9.20, x: 640, y: 199 },
      { t: 10.03, x: 985, y: 199 },
      { t: 10.80, x: 737, y: 228, click: true },
      { t: 11.65, x: 1000, y: 952 },
      { t: 14.25, x: 1745, y: 952, click: true },
      { t: 15.20, x: 830, y: 206 },
      { t: 16.15, x: 1057, y: 894, click: true },
      { t: 17.45, x: 1782, y: 79, click: true },
      { t: 18.35, x: 1015, y: 280 },
      { t: 19.30, x: 1660, y: 773, click: true },
    ];
  } else if (t >= WS2_ABS_START - 0.10 && t < CANVAS_ABS_END - 0.85) {
    // m0087 visit 2: "CVs erstellen" → selection view (Alle auswählen) → generate → loading → preview → übernehmen → workspace
    // m0135: dann "Im Canvas öffnen" → Opportunity-Canvas (Karte ziehen, Angebot-Handoff)
    l = t - WS2_ABS_START;
    actions = [
      { t: 0.80, x: 940, y: 711 },
      { t: 1.30, x: 1650, y: 768, click: true },
      { t: 2.60, x: 1330, y: 171, click: true },
      { t: 3.30, x: 1057, y: 300 },
      { t: 3.90, x: 1057, y: 502, click: true },
      { t: 5.20, x: 1057, y: 330 },
      { t: 7.90, x: 1057, y: 894, click: true },
      { t: 9.30, x: 700, y: 843 },
      { t: 11.00, x: 1424, y: 460 },
      { t: 11.55, x: 1478, y: 928 },
      { t: 11.90, x: 1478, y: 928, click: true },
      { t: 13.60, x: 1240, y: 420 },
      { t: 14.60, x: 1024, y: 566 },
      { t: 15.30, x: 1024, y: 566, click: true },
      { t: 16.90, x: 1112, y: 526 },
      { t: 18.30, x: 1579, y: 711 },
    ];
  } else if (t < SCENE_MATCHED_START) {
    l = t - SCENE_VERTRIEB_START;
    actions = [
      { t: 2.20, x: 1034, y: 510, click: true },
      { t: WORK_PROMPT_PANEL_START + 0.55, x: 824, y: 438 },
      { t: WORK_PROMPT_SELECT_START + 0.12, x: 1546, y: 330, click: true },
      { t: WORK_PROMPT_VISUAL_START + 0.74, x: 1456, y: 388 },
      { t: WORK_DETAIL_START + 0.62, x: 1188, y: 444, click: true },
      { t: WORK_DETAIL_END - 0.24, x: 1516, y: 698 },
      { t: PROJECT_DASH_START - SCENE_VERTRIEB_START + 1.90, x: 820, y: 356 },
      { t: PROJECT_DASH_START - SCENE_VERTRIEB_START + 3.40, x: 1010, y: 700 },
      { t: PROJECT_DASH_START - SCENE_VERTRIEB_START + 5.70, x: 1130, y: 296, click: true },
    ];
  } else if (t < SCENE_FINANZ_START + 0.4) {
    l = t - SCENE_MATCHED_START;
    actions = [
      { t: 0.66, x: 634, y: 862, click: true },
      { t: 1.46, x: 600, y: 666, click: true },
      { t: 3.90, x: 1268, y: 632 },
    ];
  }
  if (!actions) return null;
  const track = cursorTrack(actions, l);
  const op = fade * track.op;
  if (op <= 0.001) return null;
  const { x, y, click, ring } = track;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 58, opacity: op }}>
      {ring > 0 && ring < 1 && (
        <React.Fragment>
          <div style={{ position: 'absolute', left: x, top: y, width: 12, height: 12, borderRadius: 999,
            transform: `translate(-50%,-50%) scale(${0.6 + Easing.easeOutCubic(ring) * 4.6})`,
            opacity: (1 - ring) * 0.45,
            border: '2px solid rgba(45,38,32,0.5)', boxSizing: 'border-box' }} />
          <div style={{ position: 'absolute', left: x, top: y, width: 12, height: 12, borderRadius: 999,
            transform: `translate(-50%,-50%) scale(${0.4 + Easing.easeOutCubic(ring) * 3.1})`,
            opacity: (1 - ring) * 0.65,
            border: '1.6px solid rgba(240,168,94,0.85)', boxSizing: 'border-box',
            boxShadow: '0 0 16px rgba(240,168,94,0.35)' }} />
        </React.Fragment>
      )}
      <div style={{ position: 'absolute', left: x - 5, top: y - 3,
        transform: `scale(${1 - click * 0.15})`, transformOrigin: '5px 3px',
        filter: 'drop-shadow(0 1.5px 3px rgba(20,16,12,0.4)) drop-shadow(0 7px 14px rgba(20,16,12,0.22))' }}>
        <svg width="26" height="29" viewBox="0 0 24 27" fill="none">
          <path d="M5.2 2.6v18.9l4.4-4.3 2.6 6.1 3.2-1.35-2.6-6.05 6.3-.6L5.2 2.6Z"
            fill="#1c1a18" stroke="rgba(255,255,255,0.96)" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function AppRailLogo({ opacity = 1 }) {
  const size = 62;
  const sourceW = size / LOGO_AR;
  return (
    <div style={{ position: 'absolute',
      left: APP_SIDEBAR_ITEM_LEFT + (APP_SIDEBAR_ITEM_SIZE - size) / 2,
      bottom: 24,
      width: size,
      height: size,
      overflow: 'hidden',
      opacity,
      filter: 'drop-shadow(0 12px 20px rgba(35,31,27,0.18))' }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: 0, top: 0,
        width: sourceW,
        height: size,
        objectFit: 'contain' }} />
    </div>
  );
}

function ConsultryAppExperienceFrame({ children = null } = {}) {
  const t = useTime();
  const shellInStart = STAGE_DOCK_START + 0.28;
  const op = band(t, shellInStart, SCENE_FINANZ_START + 0.08, 0.72) *
    (1 - rise(t, SCENE_FINANZ_START - 0.16, 0.34));
  if (op <= 0.001) return null;
  const shellOpacity = rise(t, shellInStart, 0.34) *
    (1 - rise(t, SCENE_FINANZ_START - 0.12, 0.18));
  const workflowCanvasOpacity = band(t, WORKFLOW_CANVAS_UI_START, WORKFLOW_CANVAS_UI_END, 0.42);
  const l = t - SIGNAL_START;
  const teamActive = rise(l, SIGNAL_TEAM_PROFILE_STAGE_START - 0.22, 0.56);
  const outreachActive = band(l, SIGNAL_TEAM_OUTREACH_STAGE_START - 0.18, SIGNAL_TEAM_STAFFING_PAGE_START + 0.30, 0.54);
  const staffingActive = rise(l, SIGNAL_TEAM_STAFFING_PAGE_START - 0.18, 0.54);
  const projectActive = band(t, SCENE_VERTRIEB_START + WORK_PROMPT_VISUAL_START - 0.20, SCENE_FINANZ_START + 0.08, 0.58);
  const bridgeOfferActive = band(t, LOGO_BRIDGE_OFFER_START - 0.10, LOGO_BRIDGE_DEAL_START + 0.24, 0.48);
  const offerActive = Math.max(
    bridgeOfferActive,
    band(t, SCENE_VERTRIEB_START - 0.18, SCENE_VERTRIEB_START + WORK_PROMPT_VISUAL_START + 0.85, 0.58) * (1 - projectActive),
  );
  const signalActive = t < SCENE_VERTRIEB_START ? 1 - teamActive : 0.08;
  const trueTeamActive = t < SCENE_VERTRIEB_START ? Math.max(teamActive * (1 - staffingActive), staffingActive) : 0.12;
  const nav = [
    { key: 'Signal', icon: 'target', color: WARM, active: signalActive },
    { key: 'Team', icon: 'users', color: '#8fbfd8', active: trueTeamActive },
    { key: 'Angebot', icon: 'file', color: '#d69a4d', active: offerActive },
    { key: 'Projekt', icon: 'briefcase', color: '#c65bb0', active: projectActive },
    { key: 'Faktura', icon: 'euro', color: '#e8655a', active: 0.08 },
  ];
  const railTrackH = (nav.length - 1) * (APP_SIDEBAR_ITEM_SIZE + APP_SIDEBAR_ITEM_GAP);
  const activeStageIndex = nav.reduce((best, item, i) =>
    item.active > nav[best].active ? i : best, 0);
  const activeWeights = nav.map((item) => clamp(item.active, 0, 1));
  const activeWeightTotal = activeWeights.reduce((sum, value) => sum + value, 0) || 1;
  const railProgress = clamp(
    activeWeights.reduce((sum, value, i) => sum + value * i, 0) /
      activeWeightTotal /
      Math.max(1, nav.length - 1),
    0,
    1
  );
  const activeRailColor = nav[activeStageIndex]?.color || APP_ACCENT;
  const railProgressH = railTrackH * railProgress;
  return (
    <>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: shellOpacity, zIndex: 2 }}>
      <div style={{ position: 'absolute', left: APP_FRAME_LEFT, top: APP_FRAME_TOP, width: APP_FRAME_W, height: APP_FRAME_H,
        borderRadius: 34, overflow: 'hidden',
        background: APP_SURFACE,
        border: '1px solid rgba(35,31,27,0.18)',
        boxShadow: '0 44px 140px rgba(0,0,0,0.30)' }}>
        <div style={{ position: 'absolute', left: 0, top: APP_TOPBAR_H, bottom: 0, width: APP_SIDEBAR_W,
          background: APP_SURFACE,
          borderRight: `1px solid ${APP_LINE}` }}>
          <div style={{ position: 'absolute',
            left: APP_SIDEBAR_ITEM_LEFT + APP_SIDEBAR_ITEM_SIZE / 2 - 1,
            top: APP_SIDEBAR_NAV_TOP + APP_SIDEBAR_ITEM_SIZE / 2,
            width: 2,
            height: railTrackH,
            borderRadius: 999,
            background: APP_LINE_STRONG,
            opacity: 0.42,
            overflow: 'hidden' }}>
            <span style={{ position: 'absolute', left: 0, top: 0, width: 2,
              height: railProgressH,
              borderRadius: 999,
              background: activeRailColor,
              opacity: 0.94 }} />
          </div>
          <div style={{ position: 'absolute', left: APP_SIDEBAR_ITEM_LEFT, top: APP_SIDEBAR_NAV_TOP, display: 'grid', gap: APP_SIDEBAR_ITEM_GAP }}>
            {nav.map((item, i) => {
              const active = clamp(item.active, 0, 1);
              return (
                <div key={item.key} style={{ position: 'relative',
                  width: APP_SIDEBAR_ITEM_SIZE, height: APP_SIDEBAR_ITEM_SIZE, borderRadius: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 1,
                  background: active > 0.24 ? APP_RAISED : APP_SURFACE,
                  border: `1px solid ${active > 0.24 ? `${item.color}66` : APP_LINE}`,
                  boxShadow: active > 0.24 ? `inset 2px 0 0 ${item.color}, 0 0 22px ${item.color}28` : 'none',
                  borderRadius: 0 }}>
                  <span style={{ position: 'absolute', left: -8, top: 18,
                    width: 3, height: 34, borderRadius: 999,
                    opacity: active,
                    background: item.color,
                    boxShadow: `0 0 ${10 + active * 14}px ${item.color}` }} />
                  <Icon name={item.icon} size={28} color={active > 0.24 ? item.color : APP_MUTED} sw={1.9} />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ position: 'absolute', left: APP_SIDEBAR_W, top: APP_TOPBAR_H, right: 0, bottom: 0,
          background: APP_SURFACE }}>
          <AppCanvasBackdrop opacity={workflowCanvasOpacity} />
          <div style={{ position: 'absolute', left: 34, top: APP_VIEWPORT_GAP, right: APP_CONTENT_INSET_RIGHT, bottom: APP_CONTENT_INSET_BOTTOM,
            borderRadius: 18,
	            background: 'transparent',
	            border: 'none' }} />
          {children && (
            <AppViewportChild embedded zIndex={4}>
              {children}
            </AppViewportChild>
          )}
        </div>
      </div>
    </div>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: shellOpacity, zIndex: 45 }}>
      <div style={{ position: 'absolute', left: APP_FRAME_LEFT, top: APP_FRAME_TOP, width: APP_FRAME_W, height: APP_FRAME_H,
        borderRadius: 34, overflow: 'hidden',
        border: '1px solid rgba(35,31,27,0.18)',
        boxShadow: '0 34px 120px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.88)' }}>
        <div style={{ position: 'absolute', left: 0, top: APP_TOPBAR_H, bottom: 0, width: APP_SIDEBAR_W,
          background: APP_SURFACE,
          borderRight: `1px solid ${APP_LINE}` }}>
          <div style={{ position: 'absolute',
            left: APP_SIDEBAR_ITEM_LEFT + APP_SIDEBAR_ITEM_SIZE / 2 - 1,
            top: APP_SIDEBAR_NAV_TOP + APP_SIDEBAR_ITEM_SIZE / 2,
            width: 2,
            height: railTrackH,
            borderRadius: 999,
            background: APP_LINE_STRONG,
            opacity: 0.54,
            overflow: 'visible' }}>
            <span style={{ position: 'absolute', left: 0, top: 0, width: 2,
              height: railProgressH,
              borderRadius: 999,
              background: activeRailColor,
              boxShadow: `0 0 18px ${activeRailColor}55` }} />
            <span style={{ position: 'absolute', left: -5, top: Math.max(0, railProgressH - 6),
              width: 12, height: 12, borderRadius: 999,
              opacity: railProgress > 0.02 ? 0.92 : 0,
              background: activeRailColor,
              boxShadow: `0 0 16px ${activeRailColor}88` }} />
          </div>
          <div style={{ position: 'absolute', left: APP_SIDEBAR_ITEM_LEFT, top: APP_SIDEBAR_NAV_TOP, display: 'grid', gap: APP_SIDEBAR_ITEM_GAP }}>
            {nav.map((item) => {
              const active = clamp(item.active, 0, 1);
              return (
                <div key={`fg-nav-${item.key}`} style={{ position: 'relative',
                  width: APP_SIDEBAR_ITEM_SIZE, height: APP_SIDEBAR_ITEM_SIZE, borderRadius: 22,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 1,
                  background: active > 0.24 ? APP_RAISED : APP_SURFACE,
                  border: `1px solid ${active > 0.24 ? `${item.color}66` : APP_LINE}`,
                  boxShadow: active > 0.24 ? `inset 2px 0 0 ${item.color}, 0 0 26px ${item.color}30` : 'none',
                  borderRadius: 0 }}>
                  <span style={{ position: 'absolute', left: -8, top: 18,
                    width: 3, height: 34, borderRadius: 999,
                    opacity: active,
                    background: item.color,
                    boxShadow: `0 0 ${12 + active * 18}px ${item.color}` }} />
                  <Icon name={item.icon} size={28} color={active > 0.24 ? item.color : APP_MUTED} sw={1.9} />
                </div>
              );
            })}
          </div>
          <AppRailLogo />
        </div>
	        <div style={{ position: 'absolute', left: APP_CONTENT_INSET_LEFT, top: APP_TOPBAR_H + APP_VIEWPORT_GAP, right: APP_CONTENT_INSET_RIGHT, bottom: APP_CONTENT_INSET_BOTTOM,
	          borderRadius: 18,
	          border: 'none',
	          background: 'transparent',
	          boxShadow: 'none' }} />
      </div>
    </div>
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: op, zIndex: 68 }}>
      <AppMouseCursor t={t} fade={1} />
    </div>
    </>
  );
}

function AppCanvasBackdrop({ opacity = 1 } = {}) {
  const w = APP_FRAME_W - APP_SIDEBAR_W;
  const h = APP_FRAME_H - APP_TOPBAR_H;
  const vertical = Array.from({ length: 18 }, (_, i) => 44 + i * 104);
  const horizontal = Array.from({ length: 10 }, (_, i) => 44 + i * 92);
  if (opacity <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, background: APP_CANVAS, overflow: 'hidden',
      opacity }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {vertical.map((x) => (
          <line key={`app-canvas-v-${x}`} x1={x} y1="0" x2={x} y2={h}
            stroke={APP_CANVAS_GRID} strokeWidth="1" />
        ))}
        {horizontal.map((y) => (
          <line key={`app-canvas-h-${y}`} x1="0" y1={y} x2={w} y2={y}
            stroke={APP_CANVAS_GRID} strokeWidth="1" />
        ))}
        <line x1="0" y1="1" x2={w} y2="1" stroke={APP_LINE} strokeWidth="1" />
        <line x1="1" y1="0" x2="1" y2={h} stroke={APP_LINE} strokeWidth="1" />
      </svg>
    </div>
  );
}

function AppViewportChild({ children, zIndex = 8, embedded = false }) {
  const left = embedded ? APP_CONTENT_INSET_LEFT - APP_SIDEBAR_W : APP_CONTENT_LEFT;
  const top = embedded ? APP_VIEWPORT_GAP : APP_CONTENT_TOP;
  return (
    <div style={{ position: 'absolute',
      left,
      top,
      width: APP_CONTENT_W,
      height: APP_CONTENT_H,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex,
      background: 'transparent',
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32 }}>
      <div style={{ position: 'absolute',
        left: -APP_CONTENT_LEFT,
        top: -APP_CONTENT_TOP,
        width: 1920,
        height: 1080 }}>
        {children}
      </div>
    </div>
  );
}

function ConsultryIntelligenceGlyph({ size = 112 }) {
  const markSize = size * 0.86;
  const markSourceW = markSize / LOGO_AR;
  const badgeSize = size * 0.40;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{ position: 'absolute', left: size * 0.02, top: size * 0.07,
        width: markSize, height: markSize, overflow: 'hidden',
        filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.34))' }}>
        <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: 0, top: 0,
          width: markSourceW, height: markSize, objectFit: 'contain' }} />
      </div>
      <div style={{ position: 'absolute', right: size * -0.02, bottom: size * 0.02,
        width: badgeSize, height: badgeSize, borderRadius: badgeSize * 0.34,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: APP_SURFACE,
        border: '1px solid rgba(143,191,216,0.46)',
        boxShadow: '0 12px 28px rgba(45,38,32,0.14), 0 0 20px rgba(143,191,216,0.16), inset 0 1px 0 rgba(255,255,255,0.74)' }}>
        <Icon name="agents" size={badgeSize * 0.64} color="#5f9fc0" sw={1.7} />
      </div>
    </div>
  );
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
const OS_EXPLAINER_START = 6.05 - OPENING_SEQUENCE_CUT;
const OS_EXPLAINER_EXIT = 12.35 - OPENING_SEQUENCE_CUT;
const SIGNAL_START = 12.85 - OPENING_SEQUENCE_CUT;
const TEAM_MATCH_STEP = 1.05;
const TEAM_MATCH_CARD_DELAY = 0.72;
const TEAM_MATCH_CARD_DUR = 1.02;
function SolutionBackground({ local }) {
  // Generated opening footage is intentionally removed after trimming the positioning slide.
  const enter = rise(local, 0.1 - OPENING_SEQUENCE_CUT, 0.5);
  const exit = 1 - Easing.easeInCubic(clamp((local - (21.1 - OPENING_SEQUENCE_CUT)) / 0.7, 0, 1));
  const glowDamp = band(local, 3.15 - OPENING_SEQUENCE_CUT, SOL_SWITCH_T + 0.4, 0.75); // abs ~17.65–21.9: Logo/Knowledge beat
  const uiStage = rise(local, -0.18, 0.42);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.95 * enter * exit, pointerEvents: 'none' }}>
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
const SIGNAL_TEAM_PREVIEW_START = 11.85 + HOLD_FEED;
const SIGNAL_TEAM_MORPH_START = SIGNAL_TEAM_PREVIEW_START + 2.30 - TEAM_DIRECT_VIEW_CUT;
const SIGNAL_TEAM_PROFILE_STAGE_START = SIGNAL_TEAM_MORPH_START;
const SIGNAL_TEAM_PROFILE_STAGE_DUR = 2.40 - TEAM_PROFILE_SEQUENCE_CUT;
const SIGNAL_TEAM_STAFFING_STAGE_START = SIGNAL_TEAM_PROFILE_STAGE_START + SIGNAL_TEAM_PROFILE_STAGE_DUR + 1.05 + HOLD_POPUP + REORDER_SHIFT;
const SIGNAL_TEAM_STAFFING_STAGE_DUR = 1.75 - TEAM_STAFFING_SEQUENCE_CUT;
const SIGNAL_TEAM_DETAIL_START = SIGNAL_TEAM_PROFILE_STAGE_START + 0.42;
const SIGNAL_TEAM_DRAW_START = SIGNAL_TEAM_DETAIL_START + 0.24;
const SIGNAL_TEAM_LIST_START = SIGNAL_TEAM_STAFFING_STAGE_START + 0.20; // match list joins the Projektbesetzung beat
const SIGNAL_TEAM_TITLE_START = SIGNAL_TEAM_DETAIL_START + 0.64;
const SIGNAL_TEAM_OUTREACH_STAGE_START = SIGNAL_TEAM_STAFFING_STAGE_START - 0.06;
const SIGNAL_TEAM_OUTREACH_STAGE_DUR = 2.10;
const SIGNAL_TEAM_STAFFING_PAGE_START = SIGNAL_TEAM_OUTREACH_STAGE_START + SIGNAL_TEAM_OUTREACH_STAGE_DUR;
const TEAM_MATCH_START_LOCAL = SIGNAL_TEAM_LIST_START + 1.10;
const SIGNAL_TEAM_PROFILE_EXIT_START = SIGNAL_TEAM_PROFILE_STAGE_START + SIGNAL_TEAM_PROFILE_STAGE_DUR + 0.42; // popup exits before the workspace fades in
const SIGNAL_TEAM_STAFFING_VISUAL_START = SIGNAL_TEAM_STAFFING_PAGE_START + 0.06;
// Opportunity Workspace window — directly after the popup, before the match view (m0232)
const WS_ABS_START = SIGNAL_START + SIGNAL_TEAM_PROFILE_STAGE_START + SIGNAL_TEAM_PROFILE_STAGE_DUR + 0.55;
const WS_ABS_END = WS_ABS_START + 20.56; // m0018 +2.00 · m0035 +2.40 · m0045 +4.00 · m0054 +0.90 · m0078 +1.40 (drafting animation)

const SIGNAL_TREE = [
  { label: 'Eure Projekte', meta: 'Security Tender', icon: 'briefcase', x: 70, y: 128, dockX: 98, dockY: 136, t: SIGNAL_BEAT_SOURCES + 0.00, color: WARM },
  { label: 'Trend', meta: 'Cloud Security', icon: 'search', x: 70, y: 262, dockX: 98, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.18, color: '#8fbfd8' },
  { label: 'Euer Angebot', meta: 'Azure Projekte', icon: 'file', x: 70, y: 396, dockX: 1172, dockY: 136, t: SIGNAL_BEAT_SOURCES + 0.36, color: '#d69a4d' },
  { label: 'Risiko', meta: 'Compliance Check', icon: 'shield', x: 70, y: 530, dockX: 1172, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.54, color: '#c65bb0' },
  { label: 'Finanz', meta: 'Faktura', icon: 'euro', x: 70, y: 664, dockX: 1172, dockY: 242, t: SIGNAL_BEAT_SOURCES + 0.72, color: '#8fbfd8' },
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
      background: APP_RAISED,
      border: `1px solid ${color}32`, boxShadow: `0 0 14px ${color}13`,
      whiteSpace: 'nowrap' }}>
      <img src={CERT_BADGE_SRC} alt="" style={{ width: icon, height: icon,
        objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
      <span style={{ fontFamily: MONO, fontWeight: 760, fontSize: mini ? 9.3 : 10.8,
        letterSpacing: '0.045em', color: APP_TEXT }}>
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
  const photo = person.photo;
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
      {photo ? (
        <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          display: 'block', filter: `saturate(${0.96 + selected * 0.10}) contrast(1.04)` }} />
      ) : (
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
      )}
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
        background: APP_SURFACE,
        border: `1px solid ${node.color}36`,
        boxShadow: `0 14px 30px rgba(45,38,32,0.08), 0 0 ${10 + shimmer * 8}px ${node.color}10` }}>
        <div style={{ position: 'absolute', inset: -8, borderRadius: 999,
          border: `1px solid ${node.color}16`, opacity: 0.32 + shimmer * 0.16,
          transform: `scale(${0.96 + shimmer * 0.06})` }} />
        <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: 99,
          right: 11, top: 13, background: node.color, opacity: 0.68,
          boxShadow: `0 0 8px ${node.color}46` }} />
        <div style={{ width: 58, height: 58, borderRadius: 18, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: APP_RAISED, border: `1px solid ${node.color}24` }}>
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
    <div style={{ position: 'absolute', left: 980, top: 108, width: 640, height: 354,
      opacity: op, pointerEvents: 'none', zIndex: 4 }}>
      <div style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 1,
        opacity: 0.34 * rise(local, SIGNAL_BEAT_FEED + 0.28, 0.80),
        background: APP_LINE_STRONG }} />
      {items.map((item, i) => {
        const p = rise(local, item.t, 0.88);
        const focus = band(local, item.t, item.end, 0.48);
        const complete = rise(local, item.end, 0.58);
        const muted = complete * 0.50 + (1 - focus) * 0.18;
        return (
          <div key={item.title} style={{ position: 'absolute', left: 26, top: i * 116,
            width: 596, height: 98, padding: '0 18px',
            boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 18,
            opacity: p * (0.48 + focus * 0.52 - muted * 0.28),
            transform: `translateX(${(1 - p) * 124 + exit * 18}px) scale(${0.965 + p * 0.025 + focus * 0.040})`,
            background: APP_SURFACE,
            border: `1px solid ${item.color}${focus > 0.05 ? '40' : '24'}`,
            borderLeft: `4px solid ${item.color}${focus > 0.05 ? 'bb' : '66'}`,
            borderRadius: 20,
            boxShadow: 'none' }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: APP_RAISED,
              border: `1px solid ${item.color}${focus > 0.05 ? '62' : '35'}`,
              boxShadow: 'none' }}>
              <Icon name={item.icon} size={32} color={item.color} sw={1.85} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 805, fontSize: 34,
                lineHeight: 1.03, color: APP_TEXT, letterSpacing: '-0.014em',
                maxWidth: 470, textShadow: 'none' }}>
                {item.title}
              </div>
              {/* m0049: subline (meta) removed */}
            </div>
            <div style={{ position: 'absolute', left: -32, top: 49, width: 32, height: 1,
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
    { short: 'AZR', value: 0.92, color: '#8fbfd8' },
    { short: 'SEC', value: 0.88, color: WARM },
    { short: 'IAC', value: 0.78, color: '#e8655a' },
    { short: 'DEL', value: 0.82, color: '#c65bb0' },
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
        background: APP_SURFACE,
        border: `1px solid ${APP_LINE}`,
        boxShadow: APP_PANEL_SHADOW }}>
        <div style={{ fontFamily: MONO, fontSize: 9.2, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'rgba(143,191,216,0.62)' }}>Kompetenzprofil</div>
        <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 730, fontSize: 18,
          color: APP_TEXT, letterSpacing: '-0.01em' }}>Skill Match</div>
        <svg width="178" height="158" viewBox="0 0 178 158"
          style={{ position: 'absolute', left: 26, top: 58, overflow: 'visible', filter: 'blur(1.5px)', opacity: 0.46 }}>
          <defs>
            <radialGradient id="signal-team-preview-fill" cx="50%" cy="50%" r="58%">
              <stop offset="0" stopColor="rgba(143,191,216,0.20)" />
              <stop offset="0.65" stopColor="rgba(240,168,94,0.13)" />
              <stop offset="1" stopColor="rgba(232,101,90,0.08)" />
            </radialGradient>
          </defs>
          {[0.5, 1].map((ratio) => (
            <circle key={ratio} cx={cx} cy={cy} r={maxR * ratio} fill="none"
              stroke={ratio === 1 ? APP_LINE_STRONG : APP_LINE} />
          ))}
          {axes.map((axis) => (
            <g key={axis.short}>
              <line x1={cx} y1={cy} x2={axis.x} y2={axis.y}
                stroke={APP_LINE} strokeWidth="1" />
            </g>
          ))}
          <polygon points={points} fill="url(#signal-team-preview-fill)" stroke="rgba(232,91,132,0.50)"
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
                background: i === 0 ? APP_LINE_STRONG : APP_LINE }} />
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
                background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                <img src={src} alt="" style={{ width: 23, height: 23,
                  objectFit: 'contain', display: 'block', filter: 'grayscale(1) saturate(0.35) opacity(0.68)' }} />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'absolute', left: 658, top: 198, width: 592, height: 218,
        borderRadius: 24, padding: '18px 22px', boxSizing: 'border-box',
        background: APP_SURFACE,
        border: `1px solid ${APP_LINE}`,
        boxShadow: APP_PANEL_SHADOW }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 9.2, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(143,191,216,0.62)' }}>Projektbesetzung</div>
            <div style={{ marginTop: 6, fontFamily: DISPLAY, fontWeight: 730, fontSize: 18,
              color: APP_TEXT, letterSpacing: '-0.01em' }}>Setup Vorschau</div>
          </div>
          <div style={{ height: 26, borderRadius: 999, display: 'flex', alignItems: 'center',
            padding: '0 10px', gap: 7, fontFamily: MONO, fontSize: 9, letterSpacing: '0.08em',
            color: APP_MUTED, background: APP_RAISED,
            border: `1px solid ${APP_LINE}` }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8' }} />
	            7 PT / 2 W
          </div>
        </div>
        <svg width="548" height="140" viewBox="0 0 548 140"
          style={{ position: 'absolute', left: 24, top: 74, overflow: 'visible' }}>
          <path d="M 82 48 H 502 M 82 108 H 502"
            stroke={APP_LINE} strokeWidth="1.25" strokeLinecap="round" />
          <rect x="462" y="22" width="62" height="104" rx="18"
            fill={APP_RAISED} stroke={APP_LINE} />
          {rows.map((row, i) => {
            const p = Math.max(enter * 0.72, rise(local, 3.78 + i * 0.18, 0.52));
            const barW = 284 * row.w * p;
            return (
              <g key={row.label} opacity={p}>
                <circle cx="38" cy={row.y - 64} r="12" fill={APP_RAISED} stroke={APP_LINE} />
                <rect x="82" y={row.y - 70} width={barW} height="12" rx="6"
                  fill={row.color} opacity="0.70" />
                <rect x={368} y={row.y - 74} width={48 + i * 8} height="20" rx="10"
                  fill={APP_RAISED} stroke={APP_LINE} />
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
  const matchStageStart = SIGNAL_TEAM_STAFFING_STAGE_START;
  const staffingStageStart = SIGNAL_TEAM_LIST_START;
  const edgeX = 1076;
  const items = [
    {
      title: 'Consultants gefunden',
      meta: 'Profile werden parallel gegen Bedarf gematcht.',
      icon: 'users',
      color: '#8fbfd8',
      x: edgeX,
      y: 578,
      fromX: 108,
      t: matchStageStart + 0.18,
      end: staffingStageStart - 0.30,
    },
    {
      title: 'Timeline geplant',
      meta: 'PTs, Kapazität und Projektfenster werden geplant.',
      icon: 'workflow',
      color: WARM,
      x: edgeX,
      y: 704,
      fromX: 108,
      t: staffingStageStart + 0.08,
      end: doneLocal - 0.36,
    },
    {
      title: 'Team bereit',
      meta: 'Die passende Projektbesetzung ist bündelbar.',
      icon: 'check',
      color: '#e8655a',
      x: edgeX,
      y: 830,
      fromX: 108,
      t: staffingStageStart + 0.34,
      end: doneLocal - 0.24,
    },
  ];
  const enter = rise(local, items[0].t - 0.16, 0.82);
  const exit = rise(local, doneLocal - 0.40, 0.50);
  const op = fade * enter * (1 - exit);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden',
      opacity: op, pointerEvents: 'none', zIndex: 15 }}>
      {items.map((item, i) => {
        const p = rise(local, item.t, 0.92);
        const focus = band(local, item.t, item.end, 0.54);
        const complete = rise(local, item.end, 0.62);
        const muted = complete * 0.46 + (1 - focus) * 0.10;
        return (
          <div key={item.title} style={{ position: 'absolute', left: item.x, top: item.y,
            width: 668, height: 98, padding: '0 20px', boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', gap: 18,
            opacity: p * (0.44 + focus * 0.56 - muted * 0.24),
            transform: `translateX(${(1 - p) * item.fromX + exit * 18}px) scale(${0.972 + p * 0.014 + focus * 0.024})`,
            transformOrigin: '0% 50%',
            background: APP_SURFACE,
            border: `1px solid ${item.color}${focus > 0.05 ? '42' : '26'}`,
            borderLeft: `4px solid ${item.color}${focus > 0.05 ? 'bb' : '66'}`,
            borderRadius: 20,
            boxShadow: 'none' }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: APP_RAISED,
              border: `1px solid ${item.color}${focus > 0.05 ? '64' : '35'}`,
              boxShadow: 'none' }}>
              <Icon name={item.icon} size={32} color={item.color} sw={1.85} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 805, fontSize: 30,
                lineHeight: 1.04, letterSpacing: '-0.012em', color: APP_TEXT,
                maxWidth: 520, textShadow: 'none' }}>
                {item.title}
              </div>
              {/* m0049: subline (meta) removed */}
            </div>
            <div style={{ position: 'absolute',
              left: -32,
              top: 49, width: 32, height: 1,
              background: item.color, opacity: (0.22 + focus * 0.28) * p }} />
          </div>
        );
      })}
    </div>
  );
}

function CustomerNeedsAttentionGrabbers({ local, fade = 1 }) {
  const start = SIGNAL_TEAM_PROFILE_STAGE_START + 0.28;
  const end = SIGNAL_TEAM_PROFILE_EXIT_START + 0.18;
  const exit = rise(local, SIGNAL_TEAM_PROFILE_EXIT_START, 0.52);
  const op = fade * (1 - exit);
  if (op <= 0.001) return null;
  const items = [
    { title: 'Bedarf erkannt', icon: 'target', color: '#8fbfd8', t: start + 0.00 },
    { title: 'Rollen definiert', icon: 'users', color: WARM, t: start + 0.18 },
    { title: 'Regulatorik gesetzt', icon: 'shield', color: '#c65bb0', t: start + 0.36 },
  ];
  return (
    <div style={{ position: 'absolute', left: 960, top: 150, width: 610, height: 354,
      opacity: op, pointerEvents: 'none', zIndex: 16 }}>
      <div style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: 1,
        opacity: 0.32 * rise(local, start - 0.10, 0.70),
        background: APP_LINE_STRONG }} />
      {items.map((item, i) => {
        const p = rise(local, item.t, 0.82);
        const focus = band(local, item.t, end, 0.52);
        return (
          <div key={item.title} style={{ position: 'absolute', left: 28, top: i * 116,
            width: 562, height: 98, padding: '0 20px', boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', gap: 18,
            opacity: p * (0.58 + focus * 0.42),
            transform: `translateX(${(1 - p) * 118 + exit * 20}px) scale(${0.972 + p * 0.018 + focus * 0.026})`,
            transformOrigin: '0% 50%',
            background: APP_SURFACE,
            border: `1px solid ${item.color}${focus > 0.05 ? '42' : '26'}`,
            borderLeft: `4px solid ${item.color}${focus > 0.05 ? 'bb' : '66'}`,
            borderRadius: 20,
            boxShadow: 'none' }}>
            <div style={{ width: 64, height: 64, borderRadius: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: APP_RAISED,
              border: `1px solid ${item.color}${focus > 0.05 ? '64' : '35'}`,
              boxShadow: 'none' }}>
              <Icon name={item.icon} size={34} color={item.color} sw={1.85} />
            </div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 810, fontSize: 36,
              lineHeight: 1.02, color: APP_TEXT, letterSpacing: '-0.018em',
              textShadow: 'none', whiteSpace: 'nowrap' }}>
              {item.title}
            </div>
            <div style={{ position: 'absolute', left: -34, top: 49, width: 34, height: 1,
              background: item.color, opacity: (0.24 + focus * 0.28) * p }} />
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
  const signalGroups = [
    { company: 'Bank AG', score: '94', trend: '+4 Signale · 7 Tage', top: true, signals: [
      { tag: 'Financial Times · Artikel', title: 'Bank AG bestätigt Wechsel zu AWS Cloud', meta: 'Cloud-Migration · Security im Fokus', icon: 'financial-times', color: '#b87842', main: true },
      { tag: 'LinkedIn · Stellenpost', title: 'Cloud Architecture Lead / SOC', meta: 'Hiring-Signal · Cloud-Team wächst', icon: 'linkedin', color: '#0A66C2' },
      { tag: 'Vergabeportal · RFP', title: 'Cloud Security Services', meta: 'Ausschreibung · Q3 erwartet', icon: 'file', color: '#3f7b56' },
      { tag: 'Consultant-Netzwerk · Intern', title: 'CIO-Office plant Managed SOC · Upsell', meta: 'geloggt von Tobias R. · aktuell im Projekt bei Bank AG', icon: 'users', color: '#c65bb0', photo: 'assets/people/paul.png' },
    ] },
    { company: 'Konzern X', score: '71', trend: 'stabil', signals: [
      { tag: 'LinkedIn', title: 'CEO-Wechsel · Azure-Fokus erkannt', meta: 'Leadership-Wechsel', icon: 'linkedin', color: '#0A66C2' },
    ] },
    { company: 'Versicherer Y', score: '58', trend: 'neu', signals: [
      { tag: 'Handelsblatt', title: 'Versicherer Y konsolidiert IT', meta: 'Markttrend', icon: 'zap', color: '#c65bb0' },
    ] },
  ];
  const panelH = 800;
  const cardX = 64;
  const cardY = 84;
  const cardW = 1092;
  const cardH = 672;
  const eventListTop = 12;
  const eventRowH = 110;
  const eventGap = 14;
  const dkbActivationStart = SIGNAL_BEAT_DKB_ACTIVE;
  const bridgeMorphStart = SIGNAL_BEAT_BRIDGE + 0.98;
  const focusFade = 1 - expand * 0.92;
  const sourceLineFade = 1 - rise(local, dkbActivationStart + 0.12, 1.12);
  const detailFade = 1 - rise(local, dkbActivationStart + 0.62, 0.96);
  const sceneExit = rise(local, LOGO_BRIDGE_START - SIGNAL_START + 2.55, 1.65);
  const selectedRow = {
    x: cardX + 54,
    y: cardY + eventListTop + 50,
    w: cardW - 108,
    h: 70,
  };
  const rowFocus = Easing.easeInOutCubic(clamp((local - (SIGNAL_BEAT_SELECT + 0.38)) / 1.46, 0, 1));
  const rowBridgeStart = dkbActivationStart + 0.48;
  const rowBridge = Easing.easeInOutCubic(clamp((local - rowBridgeStart) / 2.24, 0, 1));
  const thirdBeatFocus = rise(local, SIGNAL_BEAT_FEED + 1.30, 0.90); // blur secondary prospects early to direct focus on Bank AG
  const activeNudge = Easing.easeInOutCubic(clamp((local - dkbActivationStart) / 0.72, 0, 1)) * (1 - rowBridge) * 8;
  const rowSplit = 0; // m0050: preview handoff removed — detail page holds until match view
  const rowTarget = { x: 120, y: 40, w: 1440, h: 726 };
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
  const bridgeRowOp = band(local, dkbActivationStart + 0.08, WS_ABS_START - SIGNAL_START + 0.12, 0.58) * Math.max(0, 1 - rowSplit * 1.75);
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
        opacity: 0, background: 'transparent' }} />
      <div style={{ position: 'absolute', right: -120, bottom: -220, width: 520, height: 520,
        opacity: 0, background: 'transparent' }} />

      <div style={{ position: 'absolute', left: 76, top: -66, width: 1600, opacity: documentUi,
        display: 'flex', flexDirection: 'column', gap: 12, zIndex: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.9 }}>
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>Signal Radar</span>
          <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>
            Marktsignale & Ausschreibungen
          </span>
          <span style={{ flex: 1 }} />
          <span style={appTyped({ fontSize: 10.5, fontWeight: 740, color: APP_FAINT,
            whiteSpace: 'nowrap' })}>zuletzt aktualisiert · gerade eben</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 560, height: 56, borderRadius: 18, display: 'flex', alignItems: 'center',
            gap: 14, padding: '0 18px', boxSizing: 'border-box', background: APP_RAISED,
            border: `1px solid ${APP_LINE_STRONG}` }}>
            <Icon name="search" size={22} color={APP_MUTED} sw={2.2} />
            <span style={{ height: 30, borderRadius: 9, padding: '0 9px', display: 'inline-flex',
              alignItems: 'center', gap: 7, background: APP_RAISED,
              border: `1px solid ${APP_LINE_STRONG}` }}>
              <span style={appTyped({ fontSize: 12.5, fontWeight: 800, color: APP_TEXT, whiteSpace: 'nowrap' })}>Bank AG</span>
              <span style={appTyped({ fontSize: 13, fontWeight: 700, color: APP_FAINT })}>×</span>
            </span>
            <span style={appTyped({ fontSize: 16, fontWeight: 700, whiteSpace: 'nowrap' })}>Cloud Migration</span>
            <span style={{ width: 2, height: 24, borderRadius: 99, background: APP_MUTED, opacity: 0.6 }} />
            <span style={appTyped({ fontSize: 16, fontWeight: 700, color: APP_FAINT, whiteSpace: 'nowrap' })}>AWS</span>
          </div>
          <div style={{ height: 44, borderRadius: 14, padding: '0 14px', display: 'flex',
            alignItems: 'center', gap: 9, whiteSpace: 'nowrap',
            background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}` }}>
            <span style={appTyped({ fontSize: 12, fontWeight: 700, color: APP_FAINT })}>Quellen:</span>
            <span style={appTyped({ fontSize: 12.5, fontWeight: 800, color: APP_TEXT })}>Alle</span>
            <span style={{ height: 20, minWidth: 20, borderRadius: 999, padding: '0 6px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: APP_RAISED, border: `1px solid ${APP_LINE}`,
              ...appTyped({ fontSize: 10, fontWeight: 800, color: APP_MUTED }) }}>12</span>
            <span style={{ width: 0, height: 0, marginLeft: 2,
              borderLeft: '4.5px solid transparent', borderRight: '4.5px solid transparent',
              borderTop: `5.5px solid ${APP_MUTED}` }} />
          </div>
          <span style={{ flex: 1 }} />
          <div style={{ height: 44, borderRadius: 999, padding: '0 16px', display: 'flex',
            alignItems: 'center', gap: 10, whiteSpace: 'nowrap',
            background: APP_RAISED, border: `1px solid ${APP_LINE}`,
            ...appTyped({ fontSize: 12.5, fontWeight: 760, color: APP_TEXT }) }}>
            <span style={{ width: 7, height: 7, borderRadius: 99, background: '#7fdca6',
              boxShadow: '0 0 10px rgba(127,220,166,0.36)' }} />
            5 aktive Signale
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          {[['Branche', 'Financial Services'], ['Region', 'DACH'], ['Relevanz', 'ab 60']].map(([filterKey, filterValue]) => (
            <div key={filterKey} style={{ height: 30, borderRadius: 9, padding: '0 10px',
              display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
              background: APP_SURFACE, border: `1px solid ${APP_LINE}` }}>
              <span style={appTyped({ fontSize: 11.5, fontWeight: 680, color: APP_FAINT })}>{filterKey}:</span>
              <span style={appTyped({ fontSize: 11.5, fontWeight: 790, color: APP_TEXT })}>{filterValue}</span>
              <span style={{ marginLeft: 2, ...appTyped({ fontSize: 12.5, fontWeight: 700, color: APP_FAINT }) }}>×</span>
            </div>
          ))}
          <div style={{ height: 30, borderRadius: 9, padding: '0 10px', display: 'flex',
            alignItems: 'center', gap: 5, whiteSpace: 'nowrap',
            border: `1px dashed ${APP_LINE_STRONG}`,
            ...appTyped({ fontSize: 11.5, fontWeight: 740, color: APP_MUTED }) }}>
            + Filter
          </div>
          <span style={{ flex: 1 }} />
          <span style={appTyped({ fontSize: 11.5, fontWeight: 740, color: APP_FAINT, whiteSpace: 'nowrap' })}>Signal-Regeln bearbeiten</span>
        </div>
      </div>

      <div style={{ position: 'absolute', left: cardX, top: cardY, width: cardW, height: cardH, zIndex: 5,
        borderRadius: 18, padding: 0, boxSizing: 'border-box',
        opacity: detailFade * (1 - frameExit * 0.96),
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        transform: `translateY(${frameExit * 4}px) scale(${0.985 - frameExit * 0.012})`,
        overflow: 'visible' }}>
        <div style={{ position: 'absolute', inset: -8 - click * 10, borderRadius: 32,
          border: '1px solid rgba(255,255,255,0.22)', opacity: 0,
          boxShadow: '0 0 0 1px rgba(240,168,94,0.20), 0 0 34px rgba(240,168,94,0.16)' }} />
        <div style={{ position: 'absolute', inset: -2, borderRadius: 28,
          border: '1px solid rgba(255,255,255,0.18)', opacity: 0,
          boxShadow: 'inset 0 0 0 1px rgba(240,168,94,0.18)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0,
          background: 'radial-gradient(ellipse 70% 90% at 18% 34%, rgba(143,191,216,0.24) 0%, rgba(23,19,17,0) 62%)' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, width: 84,
          left: 18 + scanPos * Math.max(410, cardW - 130),
          opacity: scan * 0.26,
          transform: 'skewX(-13deg)',
          background: 'linear-gradient(90deg, rgba(255,250,244,0), rgba(143,191,216,0.18), rgba(240,168,94,0.18), rgba(255,250,244,0))' }} />
        <div style={{ position: 'absolute', left: 14, right: 14, top: eventListTop, bottom: 42,
          opacity: documentUi, transform: `translateY(${frameExit * 8}px)` }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0,
            display: 'grid', gridTemplateColumns: '1fr', gap: eventGap, opacity: 0.96 }}>
            {signalGroups.map((group, g) => {
              const baseIdx = g === 0 ? 0 : g === 1 ? 3 : 4;
              const gp = rise(local, SIGNAL_BEAT_FEED + 0.20 + baseIdx * 0.20, 0.72);
              const groupFade = g !== 0 ? thirdBeatFocus : 0;
              return (
                <div key={group.company} style={{ borderRadius: 18,
                  padding: '10px 16px 12px', boxSizing: 'border-box',
                  opacity: gp * (1 - groupFade * 0.68),
                  transform: `translateY(${(1 - gp) * 10 + groupFade * 3}px)`,
                  filter: groupFade > 0.01 ? `blur(${groupFade * 2.4}px)` : 'none',
                  background: APP_SURFACE,
                  border: g === 0 ? '1px solid rgba(184,120,66,0.26)' : `1px solid ${APP_LINE_STRONG}`,
                  boxShadow: '0 10px 24px rgba(45,38,32,0.06)' }}>
                  <div style={{ height: 40, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: DISPLAY, fontWeight: 820, fontSize: 19,
                      color: APP_TEXT, letterSpacing: '-0.014em', whiteSpace: 'nowrap' }}>{group.company}</span>
                    {group.top && (
                      <span style={{ height: 22, borderRadius: 999, padding: '0 9px',
                        display: 'inline-flex', alignItems: 'center',
                        background: 'rgba(240,168,94,0.15)', border: '1px solid rgba(240,168,94,0.32)',
                        fontFamily: MONO, fontSize: 8.4, fontWeight: 840, letterSpacing: '0.10em',
                        textTransform: 'uppercase', color: '#9a6a2e' }}>Top-Prospect</span>
                    )}
                    <span style={{ flex: 1 }} />
                    <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 780, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>
                      {group.trend}
                    </span>
                    <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
                    <span style={{ fontFamily: MONO, fontSize: 15, fontWeight: 840,
                      color: g === 0 ? '#b87842' : APP_MUTED }}>{group.score}</span>
                  </div>
                  {group.signals.map((event, i) => {
                    const idxAll = baseIdx + i;
                    const ep = rise(local, SIGNAL_BEAT_FEED + 0.30 + idxAll * 0.20, 0.70);
                    const isMain = !!event.main;
                    const dkbActivate = isMain ? band(local, dkbActivationStart, rowBridgeStart + 0.92, 0.66) : 0;
                    const dkbConfirmed = isMain ? rise(local, dkbActivationStart + 0.22, 0.54) : 0;
                    const dkbCovered = isMain ? rise(local, dkbActivationStart + 0.10, 0.42) : 0;
                    const rowFade = !isMain ? thirdBeatFocus : 0;
                    const selP = g === 0 ? rise(local, SIGNAL_BEAT_FEED + (i === 0 ? 1.35 : 1.95 + (i - 1) * 0.24), 0.30) : 0;
                    return (
                      <div key={event.title} style={{ height: 70, borderRadius: 12,
                        display: 'grid', gridTemplateColumns: '22px 44px 1fr auto', columnGap: 13,
                        alignItems: 'center', padding: '0 10px', boxSizing: 'border-box',
                        borderTop: i > 0 ? `1px solid ${APP_LINE}` : 'none',
                        opacity: ep * (1 - dkbCovered * 0.98) * (1 - rowFade * 0.55),
                        transform: `translateX(${isMain ? dkbActivate * 6 : 0}px)`,
                        background: isMain ? `rgba(240,168,94,${0.04 + dkbActivate * 0.05})` : 'transparent' }}>
                        <span style={{ width: 20, height: 20, borderRadius: 6, boxSizing: 'border-box',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          transform: `scale(${1 + (selP > 0.5 && selP < 0.9 ? 0.12 : 0)})`,
                          border: `1.6px solid ${selP > 0.5 ? 'rgba(217,154,85,0.9)' : APP_LINE_STRONG}`,
                          background: selP > 0.5 ? '#d99a55' : '#ffffff' }}>
                          {selP > 0.5 && <Icon name="check" size={13} color="#fdfaf5" sw={3} />}
                        </span>
                        <div style={{ width: 40, height: 40, borderRadius: event.photo ? 999 : 12,
                          display: 'flex', overflow: 'hidden',
                          alignItems: 'center', justifyContent: 'center',
                          background: `${event.color}12`, border: `1px solid ${event.color}30` }}>
                          {event.photo
                            ? <img src={event.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            : event.icon === 'linkedin'
                            ? <LinkedInMark size={22} />
                            : event.icon === 'xing'
                              ? <XingMark size={22} />
                              : event.icon === 'financial-times'
                                ? <FinancialTimesMark size={22} />
                                : <Icon name={event.icon} size={18} color={event.color} sw={2} />}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontFamily: MONO, fontSize: 8.8, letterSpacing: '0.12em',
                            textTransform: 'uppercase', color: APP_MUTED, whiteSpace: 'nowrap' }}>{event.tag}</div>
                          <div style={{ marginTop: 4, fontFamily: DISPLAY, fontWeight: 780, fontSize: 17.5,
                            letterSpacing: '-0.012em', color: APP_TEXT, whiteSpace: 'nowrap',
                            overflow: 'hidden', textOverflow: 'ellipsis' }}>{event.title}</div>
                          <div style={{ marginTop: 3, fontFamily: INTER, fontWeight: 660, fontSize: 10.8,
                            color: APP_MUTED, whiteSpace: 'nowrap' }}>{event.meta}</div>
                        </div>
                        <div style={{ justifySelf: 'end', height: 26, padding: '0 10px',
                          borderRadius: 999, display: 'inline-flex', alignItems: 'center',
                          position: 'relative', minWidth: 56, justifyContent: 'center',
                          fontFamily: MONO, fontSize: 8.1, letterSpacing: '0.11em',
                          textTransform: 'uppercase', color: event.color,
                          background: `${event.color}10`, border: `1px solid ${event.color}28` }}>
                          <span style={{ opacity: isMain ? 1 - dkbConfirmed : 1, display: 'inline-block' }}>Signal</span>
                          {isMain && (
                            <span style={{ position: 'absolute', inset: 0, display: 'flex',
                              alignItems: 'center', justifyContent: 'center', opacity: dkbConfirmed }}>
                              <Icon name="check" size={12} color={event.color} sw={2.2} />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {g === 0 && (() => {
                    const selAll = rise(local, SIGNAL_BEAT_FEED + 2.70, 0.5);
                    const firstSel = rise(local, SIGNAL_BEAT_FEED + 1.52, 0.45);
                    return (
                      <div style={{ height: 64, marginTop: 4, borderTop: `1px solid ${APP_LINE}`,
                        display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 780,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: selAll > 0.5 ? '#9a6a2e' : APP_FAINT, whiteSpace: 'nowrap' }}>
                          {selAll > 0.5 ? '4 von 4 Signalen gewählt' : 'Signale wählen'}
                        </span>
                        <span style={{ flex: 1 }} />
                        <span style={{ ...appTyped({ fontSize: 11, fontWeight: 740, color: APP_FAINT,
                          whiteSpace: 'nowrap' }), opacity: selAll }}>
                          Bank AG · AWS Cloud Transformation
                        </span>
                        <span style={{ height: 44, borderRadius: 999, padding: '0 16px 0 7px',
                          display: 'inline-flex', alignItems: 'center', gap: 10,
                          opacity: firstSel * (0.5 + selAll * 0.5),
                          transform: `translateY(${(1 - firstSel) * 8}px)`,
                          background: '#1c1a18',
                          border: '1.5px solid rgba(240,168,94,0.55)',
                          boxShadow: selAll > 0.5
                            ? '0 12px 26px rgba(45,38,32,0.24), 0 0 18px rgba(240,168,94,0.26)'
                            : 'none' }}>
                          <span style={{ width: 32, height: 32, borderRadius: 999, display: 'inline-flex',
                            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.16)' }}>
                            <Icon name="sparkles" size={15} color={WARM} sw={2.1} />
                          </span>
                          <span style={{ display: 'inline-grid', rowGap: 1, justifyItems: 'start' }}>
                            <span style={{ fontFamily: MONO, fontSize: 7.6, fontWeight: 820,
                              letterSpacing: '0.11em', textTransform: 'uppercase',
                              color: 'rgba(253,250,245,0.62)', whiteSpace: 'nowrap' }}>
                              Quick Action · 92 %
                            </span>
                            <span style={{ ...appTyped({ fontSize: 12.5, fontWeight: 830, color: '#fdfaf5',
                              whiteSpace: 'nowrap' }) }}>
                              Team matchen & Angebot entwerfen
                            </span>
                          </span>
                          <Icon name="arrowUR" size={14} color={WARM} sw={2.3} />
                        </span>
                      </div>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: cardX + cardW + 22, top: cardY,
        width: 1676 - (cardX + cardW + 22), height: cardH, zIndex: 5,
        opacity: documentUi * (1 - frameExit * 0.98),
        transform: `translateY(${(1 - active) * 10 + frameExit * 8}px)`,
        display: 'grid', gridTemplateRows: 'auto 46px 72px 72px 72px auto', rowGap: 9,
        alignContent: 'start' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2px 4px 2px' }}>
          <div>
            <div style={{ fontFamily: INTER, fontWeight: 830, fontSize: 21,
              lineHeight: 1, color: APP_TEXT, letterSpacing: '-0.014em' }}>
              Signal-Auswertung
            </div>
            <div style={{ marginTop: 5, fontFamily: INTER, fontWeight: 650,
              fontSize: 12, color: APP_MUTED }}>
              Kontext aus Markt, CRM und Projektwissen
            </div>
          </div>
        </div>
        {(() => {
          const bind = rise(local, dkbActivationStart + 0.10, 0.66);
          return (
            <div style={{ borderRadius: 16, display: 'grid',
              gridTemplateColumns: '38px 1fr auto', alignItems: 'center', gap: 12,
              padding: '0 14px', boxSizing: 'border-box',
              background: bind > 0.4 ? '#fff8ef' : APP_SURFACE,
              border: `1px solid ${bind > 0.4 ? 'rgba(240,168,94,0.44)' : APP_LINE}` }}>
              <span style={{ width: 36, height: 36, borderRadius: 12, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(184,120,66,0.12)', border: '1px solid rgba(184,120,66,0.26)' }}>
                <FinancialTimesMark size={21} />
              </span>
              <span style={{ minWidth: 0 }}>
                <div style={{ fontFamily: MONO, fontSize: 8.6, fontWeight: 820, letterSpacing: '0.11em',
                  textTransform: 'uppercase', color: APP_MUTED }}>
                  {bind > 0.4 ? 'Analysiert · Aktives Signal' : 'Beobachtet · 5 Signale'}
                </div>
                <div style={{ marginTop: 4, ...appTyped({ fontSize: 12.6, fontWeight: 800, color: APP_TEXT,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                  Bank AG bestätigt Wechsel zu AWS Cloud
                </div>
              </span>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: WARM,
                opacity: 0.35 + pulse * 0.65 * Math.max(bind, 0.4),
                boxShadow: `0 0 ${8 + bind * 8}px rgba(240,168,94,0.5)` }} />
            </div>
          );
        })()}
        {[
          { icon: 'briefcase', label: 'Kunde', title: 'Bank AG', meta: 'neues Cloud-Programm', color: '#b87842', metric: '94', metricLabel: 'Prospect-Score' },
          { icon: 'zap', label: 'Trigger', title: 'AWS Migration', meta: 'Projektbedarf steigt', color: '#5f9fc0', metric: '+38 %', metricLabel: 'Trend · 30 Tage' },
          { icon: 'shield', label: 'Priorität', title: 'Security + DORA', meta: 'relevant für Angebot', color: '#c35bb9', metric: '92 %', metricLabel: 'Konfidenz' },
        ].map((item, idx) => {
          const p = rise(local, SIGNAL_BEAT_FEED + 0.42 + idx * 0.18, 0.62);
          return (
            <div key={item.label} style={{ borderRadius: 14,
              display: 'grid', gridTemplateColumns: '38px 1fr auto',
              alignItems: 'center', gap: 11, padding: '0 13px',
              boxSizing: 'border-box', background: APP_SURFACE,
              border: `1px solid ${APP_LINE}`,
              opacity: p, transform: `translateX(${(1 - p) * 16}px)` }}>
              <div style={{ width: 36, height: 36, borderRadius: 11,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${item.color}12`, border: `1px solid ${item.color}28` }}>
                <Icon name={item.icon} size={17} color={item.color} sw={2.1} />
              </div>
              <div>
                <div style={{ fontFamily: INTER, fontWeight: 710, fontSize: 10.5,
                  color: APP_MUTED }}>{item.label}</div>
                <div style={{ marginTop: 2, fontFamily: DISPLAY, fontWeight: 820,
                  fontSize: 16, color: APP_TEXT, letterSpacing: '-0.012em' }}>
                  {item.title}
                </div>
                <div style={{ marginTop: 2, fontFamily: INTER, fontWeight: 640,
                  fontSize: 11.5, color: APP_MUTED }}>
                  {item.meta}
                </div>
              </div>
              <div style={{ display: 'grid', justifyItems: 'end', rowGap: 3 }}>
                <span style={{ fontFamily: MONO, fontSize: 13.5, fontWeight: 800, color: item.color }}>{item.metric}</span>
                <span style={{ ...appTyped({ fontSize: 9.2, fontWeight: 760, color: APP_FAINT,
                  whiteSpace: 'nowrap' }) }}>{item.metricLabel}</span>
              </div>
            </div>
          );
        })}
        {(() => {
          const rec = rise(local, dkbActivationStart + 0.95, 0.72);
          const recentItems = [
            { title: 'Versicherer Z · AWS Landing Zone', status: 'Gewonnen · 6 Wochen', color: '#74c69d', icon: 'check' },
            { title: 'Bank XY · SOC-Aufbau', status: 'Abgeschlossen · DORA-Audit', color: '#8fbfd8', icon: 'shield' },
            { title: 'Konzern X · Azure Review', status: 'Angebot versendet', color: WARM, icon: 'file' },
          ];
          return (
            <div style={{ opacity: 0.4 + rec * 0.6, transform: `translateY(${(1 - rec) * 5}px)` }}>
              <div style={{ padding: '4px 2px 8px', fontFamily: MONO, fontSize: 9, fontWeight: 820,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: APP_FAINT }}>
                Recent · Zuletzt bearbeitete Opportunities
              </div>
              <div style={{ display: 'grid', gap: 8 }}>
                {recentItems.map((item) => (
                  <div key={item.title} style={{ height: 50, borderRadius: 14, display: 'grid',
                    gridTemplateColumns: '32px minmax(0,1fr) auto', alignItems: 'center', gap: 11,
                    padding: '0 12px', boxSizing: 'border-box',
                    background: APP_SURFACE, border: `1px solid ${APP_LINE}` }}>
                    <span style={{ width: 30, height: 30, borderRadius: 10, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      background: `${item.color}16`, border: `1px solid ${item.color}3a` }}>
                      <Icon name={item.icon} size={14} color={item.color} sw={2.2} />
                    </span>
                    <span style={{ minWidth: 0, ...appTyped({ fontSize: 11.5, fontWeight: 800,
                      color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden',
                      textOverflow: 'ellipsis' }) }}>{item.title}</span>
                    <span style={{ ...appTyped({ fontSize: 9.6, fontWeight: 760, color: APP_MUTED,
                      whiteSpace: 'nowrap' }) }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {(() => {
          const activePulse = band(local, dkbActivationStart + 0.08, SIGNAL_TEAM_PREVIEW_START - 0.16, 0.54);
          const checkIn = rise(local, dkbActivationStart + 0.44, 0.62);
          const statusSweep = Easing.easeInOutCubic(clamp((local - (SIGNAL_BEAT_SELECT + 0.42)) / 1.62, 0, 1));
          const detail = Easing.easeInOutCubic(clamp((rowBridge - 0.18) / 0.82, 0, 1));
          const detailBody = rise(local, rowBridgeStart + 0.72, 1.28);
          const titleLeft = mix(98, 128, detail);
          const titleTop = mix(Math.max(22, bridgeRow.h / 2 - 28), 74, detail);
          const iconSize = mix(58, 66, detail);
          const iconLeft = mix(20, 40, detail);
          const iconTop = mix(Math.max(18, bridgeRow.h / 2 - iconSize / 2), 70, detail);
          const statusTop = mix(Math.max(22, bridgeRow.h / 2 - 16), 78, detail);
          return (
            <React.Fragment>
            <div style={{ position: 'absolute', left: -160, right: -160, top: -80, bottom: -140,
              zIndex: 6, background: 'rgba(38,31,26,0.36)', opacity: detail * bridgeRowOp }} />
            <div style={{ position: 'absolute', left: bridgeRow.x, top: bridgeRow.y,
              width: bridgeRow.w, height: bridgeRow.h, zIndex: 7,
              borderRadius: mix(22, 28, detail), padding: 0,
              boxSizing: 'border-box', opacity: bridgeRowOp,
              transform: `translateY(${(1 - rowFocus) * 8}px) scale(${1 + rowFocus * 0.006 + detail * 0.006})`,
              transformOrigin: '50% 50%',
              background: APP_SURFACE,
              border: `1px solid rgba(240,168,94,${0.28 + activePulse * 0.08 + detail * 0.11})`,
              boxShadow: `0 ${26 + detail * 26}px ${68 + detail * 54}px rgba(45,38,32,${0.10 + detail * 0.18}), 0 0 ${16 + activePulse * 14 + detail * 24}px rgba(240,168,94,${0.07 + activePulse * 0.035 + detail * 0.02}), inset 0 1px 0 rgba(255,255,255,0.74)`,
              overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: -2, borderRadius: mix(24, 31, detail),
                border: `1px solid rgba(240,168,94,${0.18 + activePulse * 0.18})`, opacity: activePulse * (0.34 + pulse * 0.12) + detail * 0.10 }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, width: 74,
                left: `${Math.max(0, Math.min(1, statusSweep)) * 82}%`,
                opacity: activePulse * (1 - detail * 0.35),
                transform: 'skewX(-14deg)',
                background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.20), rgba(255,255,255,0))' }} />
              <div style={{ position: 'absolute', right: 20, top: 20, width: 36, height: 36,
                borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: detailBody * detail, zIndex: 3,
                background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
                ...appTyped({ fontSize: 16, fontWeight: 700, color: APP_MUTED }) }}>
                ×
              </div>
              {detail > 0.5 && (
                <div style={{ position: 'absolute', left: 40, right: 560, top: 178, zIndex: 4,
                  opacity: detailBody * detail, display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto auto', alignItems: 'center', columnGap: 14 }}>
                  <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 830, letterSpacing: '0.11em',
                    textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>Journey</span>
                  <span style={{ position: 'relative', height: 8, borderRadius: 999,
                    background: 'rgba(45,38,32,0.09)', display: 'block' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '12%',
                      borderRadius: 999, background: `linear-gradient(90deg, #d99a55, ${WARM})`,
                      boxShadow: '0 0 8px rgba(240,168,94,0.4)' }} />
                    {[25, 50, 75].map((tick) => (
                      <span key={`popup-journey-tick-${tick}`} style={{ position: 'absolute',
                        left: `${tick}%`, top: 1.5, bottom: 1.5, width: 1.4,
                        background: 'rgba(45,38,32,0.16)' }} />
                    ))}
                    <span style={{ position: 'absolute', left: '12%', top: '50%', width: 13, height: 13,
                      borderRadius: 99, transform: 'translate(-50%,-50%)', background: '#ffffff',
                      border: `2.8px solid ${WARM}`, boxSizing: 'border-box',
                      boxShadow: '0 2px 7px rgba(45,38,32,0.22)' }} />
                  </span>
                  <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 850, color: '#9a6a2e',
                    whiteSpace: 'nowrap' }}>12 %</span>
                  <span style={{ ...appTyped({ fontSize: 10.5, fontWeight: 740, color: APP_MUTED,
                    whiteSpace: 'nowrap' }) }}>4 Signale · hohe Signalqualität</span>
                </div>
              )}
              <div style={{ position: 'absolute', left: iconLeft, top: iconTop,
                width: iconSize, height: iconSize, borderRadius: mix(18, 22, detail),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.92 - detail * 0.06,
                background: detail > 0.5 ? 'rgba(29,58,95,0.08)' : 'rgba(184,120,66,0.14)',
                border: detail > 0.5 ? '1px solid rgba(29,58,95,0.22)' : '1px solid rgba(184,120,66,0.28)',
                boxShadow: `0 10px ${18 + detail * 8}px rgba(45,38,32,0.10)` }}>
                {detail > 0.5
                  ? <BankAGMark size={mix(34, 42, detail)} />
                  : <FinancialTimesMark size={mix(34, 44, detail)} />}
              </div>
              <div style={{ position: 'absolute', left: titleLeft, top: titleTop,
                width: bridgeRow.w - titleLeft - mix(70, 46, detail), minWidth: 0 }}>
                <div style={{ fontFamily: MONO, fontSize: mix(9.6, 11.0, detail), letterSpacing: '0.13em',
                  textTransform: 'uppercase', color: detail > 0.5 ? '#9a6a2e' : APP_MUTED }}>
                  {detail > 0.5 ? 'Neue Opportunity · Signal-Score 94' : 'Financial Times'}
                </div>
                <div style={{ marginTop: mix(5, 8, detail), display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: DISPLAY, fontWeight: 805,
                    fontSize: mix(25, 34, detail), lineHeight: 1.02, letterSpacing: '-0.018em',
                    color: APP_TEXT, whiteSpace: 'nowrap' }}>
                    {detail > 0.5 ? 'New Opportunity · Bank AG' : 'Bank AG bestätigt Wechsel zu AWS Cloud'}
                  </span>
                  {detail > 0.5 && (
                    <span style={{ width: 40, height: 40, borderRadius: 999, flexShrink: 0,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      opacity: detailBody * detail,
                      background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}` }}>
                      <Icon name="pencil" size={16} color={APP_MUTED} sw={2} />
                    </span>
                  )}
                </div>
                <div style={{ marginTop: mix(4, 8, detail), fontFamily: INTER, fontWeight: 690,
                  fontSize: mix(12.2, 15.5, detail), lineHeight: 1.14,
                  color: APP_MUTED, whiteSpace: 'nowrap' }}>
                  {detail > 0.5 ? 'AWS Cloud Transformation · aus 4 Signalen erkannt' : 'Cloud-Migration erkannt'}
                </div>
              </div>
              <div style={{ position: 'absolute', right: mix(20, 356, detail), top: statusTop,
                height: mix(28, 34, detail), minWidth: mix(34, 116, detail),
                padding: `0 ${mix(0, 14, detail)}px`, borderRadius: 999,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                fontFamily: MONO, fontSize: mix(8.3, 9.4, detail), letterSpacing: '0.11em',
                textTransform: 'uppercase', color: '#b87842',
                opacity: (0.42 + checkIn * 0.58) * (1 - detail * 0.18),
                transform: `scale(${0.82 + checkIn * 0.18})`,
                background: APP_RAISED, border: `1px solid rgba(184,120,66,${0.20 + checkIn * 0.22})` }}>
                <Icon name="check" size={mix(12, 14, detail)} color="#b87842" sw={2.2} />
                <span style={{ opacity: detail, maxWidth: mix(0, 70, detail), overflow: 'hidden',
                  whiteSpace: 'nowrap', display: 'inline-block' }}>Signal</span>
              </div>
              <div style={{ position: 'absolute', right: 36, top: statusTop - 14,
                height: 58, borderRadius: 999, padding: '0 26px',
                display: 'inline-flex', alignItems: 'center', gap: 12,
                opacity: detail,
                transform: `translateY(${(1 - detail) * 6}px) scale(${1 + pulse * 0.012})`,
                background: APP_TEXT,
                boxShadow: `0 18px 40px rgba(45,38,32,0.26), 0 0 ${22 + pulse * 16}px rgba(240,168,94,${0.22 + pulse * 0.12})`,
                border: '1px solid rgba(240,168,94,0.5)',
                ...appTyped({ fontSize: 18, fontWeight: 840, color: '#fdfaf5',
                  whiteSpace: 'nowrap' }) }}>
                <span style={{ width: 9, height: 9, borderRadius: 99, background: WARM,
                  boxShadow: '0 0 11px rgba(240,168,94,0.7)' }} />
                Opportunity gewinnen
                <Icon name="arrowUR" size={17} color="#fdfaf5" sw={2.3} />
              </div>
              <div style={{ position: 'absolute', left: 40, right: 550, top: 222,
                height: 452, opacity: detailBody * detail,
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '1fr 1fr', gap: 14 }}>
                {[
                  { icon: 'briefcase', label: 'Branche', title: 'Banking', meta: 'Financial Services', color: '#b87842' },
                  { icon: 'target', label: 'Region', title: 'DE / EU', meta: 'DACH-Markt', color: '#5f9fc0' },
                  { icon: 'users', label: 'Team', title: '2 Rollen', meta: 'Security · Platform', color: '#74c69d' },
                  { icon: 'clock', label: 'Zeitfaktor', title: '2 Wochen', meta: 'Start kurzfristig', color: '#e8655a' },
                  { icon: 'shield', label: 'Regulatorik', title: 'DORA · BaFin', meta: 'Audit Trail nötig', color: '#c35bb9' },
                ].map((item, idx) => (
                  <div key={item.label} style={{ borderRadius: 18, padding: '14px 14px 12px',
                    boxSizing: 'border-box', background: APP_RAISED,
                    border: `1px solid ${APP_LINE}`,
                    boxShadow: '0 12px 24px rgba(45,38,32,0.06)',
                    transform: `translateY(${(1 - detailBody) * 8}px)`,
                    opacity: detailBody * (0.68 + idx * 0.08) }}>
                    <div style={{ width: 40, height: 40, borderRadius: 13,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${item.color}12`, border: `1px solid ${item.color}26` }}>
                      <Icon name={item.icon} size={20} color={item.color} sw={2.1} />
                    </div>
                    <div style={{ marginTop: 13, fontFamily: MONO, fontSize: 9.4, fontWeight: 780,
                      letterSpacing: '0.11em', textTransform: 'uppercase',
                      color: APP_MUTED, whiteSpace: 'nowrap' }}>{item.label}</div>
                    <div style={{ marginTop: 5, fontFamily: DISPLAY, fontWeight: 820,
                      fontSize: 19, lineHeight: 1.02, color: APP_TEXT,
                      whiteSpace: 'nowrap' }}>{item.title}</div>
                    <div style={{ marginTop: 6, fontFamily: INTER, fontWeight: 640,
                      fontSize: 11.2, color: APP_MUTED, whiteSpace: 'nowrap',
                      overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.meta}</div>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', right: 36, width: 474, top: 172, bottom: 36,
                opacity: detailBody * detail, display: 'grid',
                gridTemplateRows: 'auto auto', alignContent: 'start', rowGap: 18 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 840, letterSpacing: '0.13em',
                      textTransform: 'uppercase', color: APP_MUTED }}>Zugeordnete Signale</span>
                    <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 800, color: APP_FAINT }}>4 / 4</span>
                  </div>
                  <div style={{ marginTop: 10, borderRadius: 14, background: '#fffaf3',
                    border: `1px solid ${APP_LINE}`, padding: '4px 12px', boxSizing: 'border-box' }}>
                    {(signalGroups[0].signals || []).map((mapped, mi) => (
                      <div key={`mapped-${mapped.title}`} style={{ height: 44, display: 'grid',
                        gridTemplateColumns: '26px 1fr auto', columnGap: 10, alignItems: 'center',
                        borderTop: mi > 0 ? `1px solid ${APP_LINE}` : 'none' }}>
                        <span style={{ width: 24, height: 24, borderRadius: mapped.photo ? 999 : 8,
                          display: 'flex', overflow: 'hidden',
                          alignItems: 'center', justifyContent: 'center',
                          background: `${mapped.color}12`, border: `1px solid ${mapped.color}30` }}>
                          {mapped.photo
                            ? <img src={mapped.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            : mapped.icon === 'linkedin'
                            ? <LinkedInMark size={13} />
                            : mapped.icon === 'financial-times'
                              ? <FinancialTimesMark size={13} />
                              : <Icon name={mapped.icon} size={12} color={mapped.color} sw={2.2} />}
                        </span>
                        <span style={appTyped({ fontSize: 12, fontWeight: 780, color: APP_TEXT,
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                          {mapped.title}
                        </span>
                        <Icon name="check" size={13} color="#3f7b56" sw={2.4} />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 840, letterSpacing: '0.13em',
                      textTransform: 'uppercase', color: APP_MUTED }}>Passende Services & Bundles</span>
                    <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 800, color: APP_FAINT }}>aus Leistungskatalog</span>
                  </div>
                  <div style={{ marginTop: 10, display: 'grid', gap: 9 }}>
                    {[
                      { name: 'AWS Landing Zone Setup', meta: 'Beratungsservice · Cloud Foundation', match: '96 %', icon: 'target', color: '#8fbfd8' },
                      { name: 'Security Baseline & SOC', meta: 'Beratungsservice · IAM, GuardDuty, Logging', match: '93 %', icon: 'shield', color: WARM },
                      { name: 'DORA-Compliance Audit', meta: 'Beratungsservice · Regulatorik & Audit Trail', match: '88 %', icon: 'file', color: '#c35bb9' },
                    ].map((service) => (
                      <div key={service.name} style={{ height: 54, borderRadius: 13,
                        display: 'grid', gridTemplateColumns: '36px 1fr auto', columnGap: 12,
                        alignItems: 'center', padding: '0 13px', boxSizing: 'border-box',
                        background: APP_SURFACE, border: `1px solid ${APP_LINE}` }}>
                        <span style={{ width: 34, height: 34, borderRadius: 11, display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          background: `${service.color}12`, border: `1px solid ${service.color}30` }}>
                          <Icon name={service.icon} size={16} color={service.color} sw={2} />
                        </span>
                        <span style={{ minWidth: 0 }}>
                          <div style={appTyped({ fontSize: 13, fontWeight: 810, color: APP_TEXT,
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                            {service.name}
                          </div>
                          <div style={{ marginTop: 3, ...appTyped({ fontSize: 10.6, fontWeight: 680,
                            color: APP_FAINT, whiteSpace: 'nowrap', overflow: 'hidden',
                            textOverflow: 'ellipsis' }) }}>{service.meta}</div>
                        </span>
                        <span style={{ fontFamily: MONO, fontSize: 12.5, fontWeight: 840,
                          color: service.color }}>{service.match}</span>
                      </div>
                    ))}
                    <div style={{ height: 62, borderRadius: 14,
                      display: 'grid', gridTemplateColumns: '36px 1fr auto', columnGap: 12,
                      alignItems: 'center', padding: '0 13px', boxSizing: 'border-box',
                      background: '#fff5e8', border: '1px solid rgba(240,168,94,0.5)',
                      boxShadow: '0 10px 24px rgba(240,168,94,0.14)' }}>
                      <span style={{ width: 34, height: 34, borderRadius: 11, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(240,168,94,0.2)', border: '1px solid rgba(240,168,94,0.4)' }}>
                        <Icon name="sparkles" size={16} color="#9a6a2e" sw={2} />
                      </span>
                      <span style={{ minWidth: 0 }}>
                        <div style={appTyped({ fontSize: 13.5, fontWeight: 840, color: APP_TEXT,
                          whiteSpace: 'nowrap' })}>
                          Cloud Security Paket
                        </div>
                        <div style={{ marginTop: 3, ...appTyped({ fontSize: 10.6, fontWeight: 700,
                          color: '#9a6a2e', whiteSpace: 'nowrap', overflow: 'hidden',
                          textOverflow: 'ellipsis' }) }}>
                          Bundle · Landing Zone + Baseline + DORA-Audit
                        </div>
                      </span>
                      <span style={{ height: 24, borderRadius: 999, padding: '0 10px',
                        display: 'inline-flex', alignItems: 'center',
                        fontFamily: MONO, fontSize: 8.8, fontWeight: 840, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: '#fdfaf5', background: '#c2803a' }}>
                        empfohlen
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', left: 0, bottom: 0, height: mix(2, 3, detail),
                width: `${Math.max(0, Math.min(1, statusSweep * (0.52 + detail * 0.48))) * 100}%`,
                background: 'linear-gradient(90deg, rgba(143,191,216,0.78), rgba(240,168,94,0.86), rgba(232,101,90,0.66))',
                opacity: Math.max(activePulse * 0.86, detail * 0.74) }} />
            </div>
            </React.Fragment>
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

function TeamMorphModules({ local, showAttention = true }) {
  const enter = rise(local, SIGNAL_TEAM_PREVIEW_START - 0.20, 1.36);
  const bridgeGatherLocal = LOGO_BRIDGE_GATHER_START - SIGNAL_START;
  const bundleOut = rise(local, bridgeGatherLocal + 0.72, 1.18);
  const previewVisible = rise(local, SIGNAL_TEAM_PREVIEW_START - 0.04, 0.42);
  const matchStageStart = SIGNAL_TEAM_OUTREACH_STAGE_START;
  const staffingStageStart = SIGNAL_TEAM_STAFFING_PAGE_START;
  const matchStartLocal = matchStageStart + 0.56;
  const leftMorph = Easing.easeInOutCubic(clamp((local - SIGNAL_TEAM_PROFILE_STAGE_START) / SIGNAL_TEAM_PROFILE_STAGE_DUR, 0, 1));
  const rightMorph = Easing.easeInOutCubic(clamp((local - staffingStageStart) / SIGNAL_TEAM_STAFFING_STAGE_DUR, 0, 1));
  const rightStageReveal = rise(local, staffingStageStart, 0.42);
  const stageMorph = Math.max(leftMorph, rightMorph);
  const leftDetail = rise(local, SIGNAL_TEAM_DETAIL_START, 1.22);
  const rightDetail = rise(local, staffingStageStart + 0.42, 1.22);
  const matchDetail = rise(local, matchStageStart + 0.18, 1.08);
  const detail = Math.max(leftDetail, rightDetail);
  const draw = rise(local, SIGNAL_TEAM_DRAW_START, 1.30);
  const rightDraw = rise(local, staffingStageStart + 0.56, 1.30);
  const profileBeat = band(local, SIGNAL_TEAM_PROFILE_STAGE_START + 0.16, matchStageStart - 0.18, 0.52);
  const matchBeat = band(local, matchStageStart + 0.20, staffingStageStart - 0.18, 0.52);
  const staffingBeat = band(local, staffingStageStart + 0.18, LOGO_BRIDGE_START - SIGNAL_START - 0.20, 0.52);
  const profileSceneExit = rise(local, SIGNAL_TEAM_PROFILE_EXIT_START, 0.52);
  // m0050: Projektkontext screen removed — its key facts (Branche, Region, Team,
  // Zeitfaktor, Regulatorik) moved onto the signal detail page, which now holds
  // until the match view enters.
  const profileSceneOpacity = 0;
  // m0096: staffing gantt merged (minified) into the match view — the standalone staffing page stays hidden
  // m0018: the match view hands off to the second workspace visit (CV drafts) instead of holding until the gather
  const matchViewExitLocal = WS2_ABS_START - SIGNAL_START - 0.30;
  const outreachSceneExit = rise(local, matchViewExitLocal, 0.60);
  const outreachSceneOpacity = previewVisible *
    band(local, matchStageStart - 0.04, matchViewExitLocal + 0.90, 0.58) *
    (1 - outreachSceneExit * 0.96);
  const staffingSceneOpacity = 0;
  const rowOrigin = { x: 260, y: 104, w: 740, h: 540 };
  const leftFrom = rowOrigin;
  const leftTo = { x: 76, y: -8, w: 1488, h: 684 };
  const rightFrom = rowOrigin;
  const rightTo = { x: 76, y: 40, w: 1600, h: 700 };
  const profileListTo = { x: 76, y: 26, w: 1600, h: 576 };
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
  const graphCx = mix(72, 326, leftMorph);
  const graphCy = mix(66, 296, leftMorph);
  const graphR = mix(34, 172, leftMorph);
  const profile = [
    { short: 'AWS', name: 'Landing Zone', value: 0.92, color: '#8fbfd8' },
    { short: 'IAM', name: 'Security Baseline', value: 0.88, color: WARM },
    { short: 'SOC', name: 'Logging', value: 0.84, color: WARM },
    { short: 'IAC', name: 'Migration Scope', value: 0.78, color: '#e8655a' },
    { short: 'DORA', name: 'Regulatorik', value: 0.82, color: '#d69a4d' },
    { short: 'KOM', name: 'Delivery', value: 0.76, color: '#c65bb0' },
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
  // m0116: matched-team composition overlay (orange) — the team fulfils & slightly exceeds the required profile.
  const teamCover = [0.98, 0.95, 0.90, 0.86, 0.90, 0.83];
  const teamFulfill = rise(local, matchStageStart + 0.40, 1.30);
  const teamAxes = profile.map((skill, i) => {
    const angle = -Math.PI / 2 + i * (Math.PI * 2 / profile.length);
    const r = graphR * mix(skill.value, teamCover[i], teamFulfill) * draw;
    return { x: graphCx + Math.cos(angle) * r, y: graphCy + Math.sin(angle) * r };
  });
  const teamPoints = teamAxes.map((a) => `${a.x.toFixed(1)},${a.y.toFixed(1)}`).join(' ');
  const productIcons = [
    { k: 'AWSCloud', src: 'assets/tech-icons/aws-control-tower.svg', color: WARM, edge: 0, size: 40 },
    { k: 'AWSSecurity', src: 'assets/tech-icons/aws-security-hub.svg', color: WARM, edge: 1, size: 40 },
    { k: 'SOC', label: 'SOC', color: WARM, edge: 2, size: 24 },
    { k: 'Terraform', src: 'assets/tech-icons/terraform.svg', color: '#e8655a', edge: 3, size: 38 },
    { k: 'Kubernetes', src: 'assets/tech-icons/kubernetes.svg', color: '#c65bb0', edge: 4, size: 40 },
    { k: 'Kundenkommunikation', label: 'KOMM', color: '#d69a4d', edge: 5, size: 20 },
  ];
  const requirementDetails = [
    { title: 'AWS Landing Zone', meta: 'Accounts, Netzwerk, Guardrails', icon: 'target', color: '#8fbfd8' },
    { title: 'Security Baseline', meta: 'IAM, GuardDuty, Logging', icon: 'shield', color: WARM },
    { title: 'Bank-Regulatorik', meta: 'DORA, BaFin, Audit Trail', icon: 'file', color: '#c65bb0' },
    { title: 'Migration Scope', meta: 'Pilot-Workloads + IaC', icon: 'workflow', color: '#e8655a' },
  ];
  const requirementFacts = [
    { label: 'Branche', value: 'Banking', icon: 'briefcase', color: WARM },
    { label: 'Region', value: 'DE / EU', icon: 'target', color: '#8fbfd8' },
    { label: 'Team', value: '2 Rollen', icon: 'users', color: '#74c69d' },
    { label: 'Zeitfenster', value: '2 Wochen', icon: 'clock', color: '#e8655a' },
  ];
  const requirementEvidence = [
    { label: 'Signal', w: 0.94, color: '#8fbfd8' },
    { label: 'Projektakte', w: 0.76, color: WARM },
    { label: 'Compliance', w: 0.68, color: '#c65bb0' },
  ];
  const roles = [
    { initials: 'SA', name: 'Sr. Architect - Max Muster', fit: '96%', focus: 'Azure Security', certs: ['AZ-500', 'AWS-SAA', 'AWS-SAP', 'CISSP', 'TOGAF'],
      color: '#8fbfd8', y: 118, start: 0.08, span: 0.34, pt: '2 PT', days: '5 T',
      occupied: [{ start: 0.00, span: 0.07 }, { start: 0.56, span: 0.16 }],
      photo: 'assets/people/max.jpg', avatar: 0, skin: '#d7ad86', hair: '#3b2a24' },
    { initials: 'SE', name: 'Sec. Engineer - Lena Weber', fit: '91%', focus: 'Sentinel / SOC', certs: ['SC-200', 'AWS-SCS', 'AWS-ANS'],
      color: WARM, y: 176, start: 0.18, span: 0.36, pt: '2 PT', days: '6 T',
      occupied: [{ start: 0.02, span: 0.11 }, { start: 0.72, span: 0.14 }],
      photo: 'assets/people/lena.jpg', avatar: 1, skin: '#c9916c', hair: '#2b2425' },
    { initials: 'PE', name: 'Platform Eng. - Jonas Klein', fit: '84%', focus: 'Terraform / AKS', certs: ['CKA', 'TF-ASSOC'],
      color: '#e8655a', y: 234, start: 0.38, span: 0.30, pt: '2 PT', days: '5 T',
      occupied: [{ start: 0.14, span: 0.12 }, { start: 0.73, span: 0.12 }],
      photo: 'assets/people/jonas.jpg', avatar: 2, skin: '#e1bd93', hair: '#5a382d' },
    { initials: 'DL', name: 'Delivery Lead - Carla Vogt', fit: '78%', focus: 'Delivery Risk', certs: [],
      color: '#c65bb0', y: 292, start: 0.02, span: 0.22, pt: '1 PT', days: '4 T',
      occupied: [{ start: 0.34, span: 0.15 }],
      photo: 'assets/people/caspar.png', avatar: 1, skin: '#cfa17f', hair: '#352728' },
  ];
  const matchedConsultants = roles.slice(0, 3);
  const staffingRows = roles.slice(0, 3).map((person, i) => ({
    ...person,
    y: i === 0 ? 112 : i === 1 ? 194 : 276,
    start: i === 0 ? 0.08 : i === 1 ? 0.22 : 0.43,
    span: i === 0 ? 0.34 : i === 1 ? 0.36 : 0.30,
  }));
  const listP = rise(local, matchStageStart, 1.18);
  const matchT = (i = 0) => matchStartLocal + i * 0.10;
  // m0181: scroll beat — after the list lands, scroll to explore further candidates;
  // radar + timeline adapt while exploring, then settle back on the final team.
  const exploreStart = SIGNAL_TEAM_STAFFING_PAGE_START + 1.55;
  const exploreP = Easing.easeInOutCubic(rise(local, exploreStart, 0.75)) *
    (1 - Easing.easeInOutCubic(rise(local, exploreStart + 2.05, 0.75)));
  const matchCandidates = [
    ...matchedConsultants,
    { ...roles[3], certs: ['PMP'] },
    { initials: 'CE', name: 'Cloud Eng. - David Brandt', fit: '74%', focus: 'AWS Networking',
      certs: ['AWS-ANS', 'AWS-SAA'], color: '#8fbfd8', photo: 'assets/people/julian.png',
      avatar: 0, skin: '#b98a63', hair: '#241d1b' },
  ];
  const staffingT = (i = 0) => staffingStageStart + 0.72 + i * 0.10;
  const placeholder = 1 - leftDetail;
  const divider = 0;
  const dividerX = left.left + left.width + 46;
  const dividerW = profileListTo.x > dividerX ? Math.max(0, profileListTo.x - dividerX - 46) : 0;
  const dividerCenterX = dividerX + dividerW / 2;
  const dividerY = mix(244, Math.min(left.top + 26, profileListTo.y + 16), stageMorph);
  const dividerH = mix(104, Math.max(210, Math.min(left.height - 52, profileListTo.h + 112)), stageMorph);
  const dateTicks = [
    { label: 'W1', sub: 'Tag 1', p: 0.00 },
    { label: 'W2', sub: 'Tag 5', p: 0.25 },
    { label: 'W3', sub: 'Tag 10', p: 0.50 },
    { label: 'W4', sub: 'Tag 15', p: 0.75 },
  ];
  const appSurfaceOpacity = Math.max(profileSceneOpacity, outreachSceneOpacity, staffingSceneOpacity) * (0.72 + stageMorph * 0.22);
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: enter * (1 - bundleOut * 0.78),
      pointerEvents: 'none', zIndex: 8,
      transform: `scale(${1 - bundleOut * 0.026})`,
      transformOrigin: '50% 44%',
      filter: `blur(${bundleOut * 1.5}px)` }}>
	      <div style={{ position: 'absolute', left: 64, top: 146, right: 64, bottom: 92,
	        borderRadius: 18, opacity: 0,
	        background: 'transparent',
	        border: 'none',
	        boxShadow: 'none' }} />
	      <div style={{ position: 'absolute', left: 94, top: 172, right: 94, height: 1,
	        opacity: 0,
	        background: 'transparent' }} />
	      <div style={{ position: 'absolute', left: 96, top: 186, bottom: 118, width: 1,
	        opacity: 0,
	        background: 'transparent' }} />
      {dividerW > 12 && (
        <div style={{ position: 'absolute', left: dividerCenterX, top: dividerY, width: 2, height: dividerH,
          opacity: divider, transform: `scaleY(${divider})`, transformOrigin: '50% 50%',
	          background: APP_ACCENT,
	          boxShadow: '0 0 14px rgba(232,101,90,0.18)' }}>
          <span style={{ position: 'absolute', left: -3, top: -4, width: 8, height: 8,
            borderRadius: 99, background: '#8fbfd8', opacity: 0.72 }} />
          <span style={{ position: 'absolute', left: -3, bottom: -4, width: 8, height: 8,
            borderRadius: 99, background: WARM, opacity: 0.72 }} />
        </div>
      )}
      <div style={{ position: 'absolute', ...left, borderRadius: 18,
        opacity: profileSceneOpacity,
        padding: `${mix(30, 20, leftMorph)}px ${mix(32, 22, leftMorph)}px`, boxSizing: 'border-box',
	        transform: `translateY(${(1 - enter) * 18 - profileSceneExit * 18}px) scale(${1 + profileBeat * 0.012 - profileSceneExit * 0.020})`,
        transformOrigin: '44% 48%',
	        background: 'transparent',
	        border: 'none',
	        boxShadow: 'none' }}>
        <div style={{ position: 'absolute',
          left: mix(36, 42, leftMorph),
          top: mix(92, 42, leftMorph),
          width: mix(left.width - 76, left.width - 84, leftMorph),
          height: mix(left.height - 120, left.height - 72, leftMorph),
          opacity: leftDetail,
          transform: `translateY(${(1 - leftDetail) * 12}px)`,
          padding: mix(18, 28, leftMorph), boxSizing: 'border-box',
          background: 'transparent',
          border: 'none',
          boxShadow: 'none' }}>
          <div style={{ opacity: leftMorph,
            transform: `translateX(${(1 - leftMorph) * 16}px)`,
            width: '100%', height: '100%',
            display: 'grid',
            gridTemplateRows: 'auto auto 1fr auto',
            gap: mix(12, 18, leftMorph) }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.16em',
	                textTransform: 'uppercase', color: APP_MUTED }}>
                Projektkontext
              </div>
              <span style={{ height: 24, borderRadius: 999, padding: '0 10px',
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontFamily: MONO, fontSize: 9.5, fontWeight: 760,
                letterSpacing: '0.09em', textTransform: 'uppercase',
                color: '#74a47f', background: APP_RAISED,
                border: '1px solid rgba(116,198,157,0.30)' }}>
                <span style={{ width: 6, height: 6, borderRadius: 99,
                  background: '#74c69d', boxShadow: '0 0 8px rgba(116,198,157,0.36)' }} />
                Bedarf erkannt
              </span>
            </div>
            <div style={{ maxWidth: 980, fontFamily: DISPLAY,
              fontSize: mix(34, 48, leftMorph), lineHeight: 0.96, fontWeight: 800,
		              letterSpacing: '-0.026em', color: APP_TEXT }}>
              AWS Cloud Transformation bei Bank AG
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {requirementFacts.map((fact, i) => {
                const fp = rise(local, SIGNAL_TEAM_PROFILE_STAGE_START + 0.68 + i * 0.05, 0.34);
                return (
                  <div key={fact.label} style={{ height: mix(58, 74, leftMorph), borderRadius: 14,
                    padding: '10px 14px', boxSizing: 'border-box',
                    display: 'grid', gridTemplateColumns: '30px 1fr', columnGap: 10,
                    alignItems: 'center',
                    opacity: fp,
                    transform: `translateY(${(1 - fp) * 8}px)`,
                    background: APP_RAISED,
                    border: `1px solid ${APP_LINE}`,
                    boxShadow: `inset 2px 0 0 ${fact.color}66` }}>
                    <Icon name={fact.icon} size={23} color={fact.color} sw={1.85} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: MONO, fontSize: 9.6,
                        letterSpacing: '0.09em', textTransform: 'uppercase',
                        color: APP_MUTED, whiteSpace: 'nowrap' }}>{fact.label}</div>
                      <div style={{ marginTop: 6, fontFamily: DISPLAY, fontSize: mix(15.5, 22, leftMorph),
                        lineHeight: 1, fontWeight: 760, color: APP_TEXT,
                        letterSpacing: '-0.012em', whiteSpace: 'nowrap',
                        overflow: 'hidden', textOverflow: 'ellipsis' }}>{fact.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {requirementDetails.map((item, i) => {
                const sp = rise(local, SIGNAL_TEAM_PROFILE_STAGE_START + 0.82 + i * 0.08, 0.38);
                return (
                  <div key={item.title} style={{ height: mix(72, 92, leftMorph), borderRadius: 14,
                    display: 'grid', gridTemplateColumns: '54px 1fr', columnGap: 14,
                    alignItems: 'center', padding: '0 14px', boxSizing: 'border-box',
                    opacity: sp,
                    transform: `translateY(${(1 - sp) * 10}px)`,
	                    background: APP_RAISED,
                    border: `1px solid ${APP_LINE}`,
                    boxShadow: `inset 2px 0 0 ${item.color}88` }}>
                    <div style={{ width: 50, height: 50, borderRadius: 999,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
	                      background: APP_SURFACE,
                      border: `1px solid ${item.color}38` }}>
                      <Icon name={item.icon} size={27} color={item.color} sw={1.8} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: DISPLAY, fontWeight: 760, fontSize: mix(19, 25, leftMorph),
                        lineHeight: 1.02, letterSpacing: '-0.012em', color: APP_TEXT,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {item.title}
                      </div>
                      <div style={{ marginTop: 7, fontFamily: MONO, fontSize: 10.5,
                        letterSpacing: '0.11em', textTransform: 'uppercase',
	                        color: APP_MUTED }}>
                        {item.meta}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 14 }}>
              <div style={{ height: mix(128, 146, leftMorph), borderRadius: 18, padding: '16px 18px',
                boxSizing: 'border-box', background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                boxShadow: 'inset 2px 0 0 rgba(143,191,216,0.42)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: MONO, fontSize: 10.2, letterSpacing: '0.13em',
                    textTransform: 'uppercase', color: APP_MUTED }}>Quellenlage</span>
                  <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 780,
                    letterSpacing: '0.08em', color: APP_TEXT }}>3 / 3</span>
                </div>
                <div style={{ marginTop: 13, display: 'grid', gap: 10 }}>
                  {requirementEvidence.map((evidence, i) => {
                    const ep = rise(local, SIGNAL_TEAM_PROFILE_STAGE_START + 1.14 + i * 0.08, 0.40);
                    return (
                      <div key={evidence.label} style={{ display: 'grid',
                        gridTemplateColumns: '82px 1fr 20px', columnGap: 10,
                        alignItems: 'center', opacity: ep }}>
                        <span style={{ fontFamily: MONO, fontSize: 9.5, fontWeight: 760,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: APP_MUTED }}>{evidence.label}</span>
                        <span style={{ height: 7, borderRadius: 999,
                          background: APP_LINE, overflow: 'hidden' }}>
                          <span style={{ display: 'block', height: '100%',
                            width: `${evidence.w * 100}%`, borderRadius: 999,
                            transform: `scaleX(${ep})`, transformOrigin: '0 50%',
                            background: evidence.color,
                            boxShadow: `0 0 9px ${evidence.color}55` }} />
                        </span>
                        <span style={{ width: 8, height: 8, borderRadius: 99,
                          background: evidence.color, opacity: 0.74,
                          boxShadow: `0 0 8px ${evidence.color}66` }} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ height: mix(128, 146, leftMorph), borderRadius: 18, padding: '16px 18px',
                boxSizing: 'border-box', background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                boxShadow: 'inset 2px 0 0 rgba(240,168,94,0.44)' }}>
                <div style={{ fontFamily: MONO, fontSize: 10.2, letterSpacing: '0.13em',
                  textTransform: 'uppercase', color: APP_MUTED }}>Statusampel</div>
                <div style={{ marginTop: 15, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                  {[
                    { label: 'Scope', color: '#74c69d', active: 0.92 },
                    { label: 'Risk', color: WARM, active: 0.66 },
                    { label: 'Audit', color: '#e8655a', active: 0.48 },
                  ].map((status, i) => {
                    const sp = rise(local, SIGNAL_TEAM_PROFILE_STAGE_START + 1.24 + i * 0.08, 0.38);
                    return (
                      <div key={status.label} style={{ height: 72, borderRadius: 14,
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'center', gap: 7, opacity: sp,
                        background: APP_SURFACE,
                        border: `1px solid ${status.color}26` }}>
                        <span style={{ width: 28, height: 28, borderRadius: 999,
                          background: status.color,
                          opacity: 0.26 + status.active * 0.48,
                          boxShadow: `0 0 ${10 + status.active * 16}px ${status.color}58` }} />
                        <span style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 780,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: APP_MUTED }}>{status.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', ...right, borderRadius: 18,
        opacity: staffingSceneOpacity * rightStageReveal,
        padding: `${mix(28, 0, rightMorph)}px ${mix(32, 0, rightMorph)}px`, boxSizing: 'border-box',
        transform: `translateY(${(1 - enter) * 18}px) scale(${1 + staffingBeat * 0.010})`,
        transformOrigin: '54% 46%',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none' }}>
        <div style={{ position: 'absolute', left: mix(32, 6, rightMorph), top: mix(24, 18, rightMorph),
          display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: MONO, fontSize: mix(8.2, 10.2, rightMorph), fontWeight: 800,
              letterSpacing: '0.13em', textTransform: 'uppercase', color: APP_MUTED }}>Projekt</span>
            <span style={{ height: mix(18, 22, rightMorph), borderRadius: 999, padding: `0 ${mix(8, 11, rightMorph)}px`,
              display: 'inline-flex', alignItems: 'center',
              fontFamily: MONO, fontSize: mix(7.8, 9.4, rightMorph), fontWeight: 820,
              letterSpacing: '0.08em', color: APP_TEXT,
              background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>BANK AG / AWS-1042</span>
          </div>
          <div style={{ fontFamily: DISPLAY, fontWeight: 790,
            fontSize: mix(20, 35, rightMorph), color: APP_TEXT, letterSpacing: '-0.026em', lineHeight: 0.98,
            whiteSpace: 'nowrap' }}>AWS Cloud Transformation</div>
          <div style={{ fontFamily: MONO, fontSize: mix(7.8, 9.6, rightMorph), fontWeight: 820,
            letterSpacing: '0.11em', textTransform: 'uppercase', color: APP_MUTED }}>Einsatzplanung · Security Cloud Team</div>
        </div>
        <div style={{ position: 'absolute', right: mix(32, 42, rightMorph), top: mix(28, 24, rightMorph),
          display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ height: 34, borderRadius: 999, padding: '0 13px', display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: APP_MUTED,
            background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8',
              boxShadow: '0 0 9px rgba(143,191,216,0.34)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <span style={{ filter: `blur(${(1 - rightDetail) * 3.2}px)`, opacity: 0.32 + rightDetail * 0.68 }}>7</span>
              <span>PT</span>
              <span style={{ opacity: 0.66 }}>/</span>
              <span style={{ filter: `blur(${(1 - rightDetail) * 3.2}px)`, opacity: 0.32 + rightDetail * 0.68 }}>2</span>
              <span>W</span>
            </span>
          </div>
          <div style={{ height: 34, borderRadius: 999, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8,
            opacity: 0.30 + rightDetail * 0.70,
            background: APP_TEXT, boxShadow: '0 12px 26px rgba(45,38,32,0.20)',
            ...appTyped({ fontSize: 12.2, fontWeight: 800, color: '#fdfaf5', whiteSpace: 'nowrap' }) }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: APP_ACCENT,
              boxShadow: '0 0 8px rgba(232,101,90,0.55)' }} />
            Staffing bestätigen
          </div>
        </div>
        <div style={{ position: 'absolute',
          left: mix(22, 14, rightMorph), right: mix(30, 42, rightMorph),
          top: mix(86, 108, rightMorph), bottom: mix(12, 12, rightMorph),
          opacity: rightDetail,
          transform: `translateY(${(1 - rightDetail) * 12}px)`,
          display: 'grid',
          gridTemplateRows: '58px 52px 1fr 74px',
          gap: 10,
          boxSizing: 'border-box' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `${mix(276, 348, rightMorph)}px 1fr ${mix(136, 172, rightMorph)}px`,
            gap: 12, alignItems: 'stretch' }}>
            <div style={{ borderRadius: 18, background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}`,
              padding: '0 18px', display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 14px 34px rgba(45,38,32,0.055)' }}>
              <Icon name="search" size={22} color="#8fbfd8" sw={1.9} />
              <span style={appTyped({ fontSize: 15.5, fontWeight: 720, color: APP_TEXT })}>AWS Cloud Security</span>
              <span style={{ marginLeft: 'auto', width: 2, height: 27, borderRadius: 99,
                background: APP_ACCENT, opacity: 0.56 + staffingBeat * 0.18 }} />
            </div>
            <div style={{ borderRadius: 18, background: APP_SURFACE, border: `1px solid ${APP_LINE}`,
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'center' }}>
              {dateTicks.map((tick, i) => (
                <div key={`staffing-board-date-${tick.label}`} style={{ minWidth: 0, boxSizing: 'border-box',
                  paddingLeft: i === 0 ? 16 : 14, borderLeft: i === 0 ? 'none' : `1px solid ${APP_LINE}`,
                  alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={appTyped({ fontSize: 11.4, fontWeight: 840, color: APP_TEXT })}>{tick.label}</div>
                  <div style={appTyped({ marginTop: 3, fontSize: 10.2, fontWeight: 620, color: APP_FAINT })}>{tick.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 999, background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              boxShadow: '0 14px 34px rgba(45,38,32,0.055)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: '#8fbfd8',
                boxShadow: '0 0 9px rgba(143,191,216,0.34)' }} />
              <span style={appTyped({ fontSize: 12.5, fontWeight: 820, color: APP_TEXT })}>3 Treffer</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `${mix(276, 348, rightMorph)}px 1fr ${mix(136, 172, rightMorph)}px`,
            gap: 12, alignItems: 'center',
            padding: '0 16px', borderRadius: 18,
            background: APP_RAISED, border: `1px solid ${APP_LINE}`,
            boxShadow: 'inset 0 -1px 0 rgba(45,38,32,0.04)' }}>
            <span style={appTyped({ fontSize: 11.2, fontWeight: 840, color: APP_MUTED })}>Consultant</span>
            <span style={appTyped({ fontSize: 11.2, fontWeight: 840, color: APP_MUTED })}>Einsatzplan</span>
            <span style={appTyped({ fontSize: 11.2, fontWeight: 840, color: APP_MUTED, textAlign: 'center' })}>Auslastung</span>
          </div>

          <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, minmax(94px, 1fr))', gap: 12 }}>
            {staffingRows.map((person, i) => {
              const rowP = rightDraw;
              const selectedP = band(local, staffingT(i), staffingT(i) + 0.98, 0.24) * rightDetail;
              const shortName = person.name
                .replace('Sr. Architect - Max Muster', 'Sr. Architect - Max')
                .replace('Sec. Engineer - Lena Weber', 'Sec. Engineer - Lena')
                .replace('Platform Eng. - Jonas Klein', 'Platform Eng. - Jonas');
              const workload = i === 0 ? '74%' : i === 1 ? '68%' : '62%';
              return (
                <div key={`${person.initials}-board-row`} style={{ display: 'grid',
                  gridTemplateColumns: `${mix(276, 348, rightMorph)}px 1fr ${mix(136, 172, rightMorph)}px`,
                  gap: 12,
                  opacity: rightDetail * rowP,
                  transform: `translateY(${(1 - rowP) * 10 - selectedP * 3}px)`,
                  transition: 'none' }}>
                  <div style={{ borderRadius: 18, background: APP_SURFACE, border: `1px solid ${APP_LINE}`,
                    boxShadow: `inset 3px 0 0 ${person.color}88, 0 16px 34px rgba(45,38,32,${0.035 + selectedP * 0.03})`,
                    padding: '0 16px', display: 'grid', gridTemplateColumns: '58px 1fr',
                    alignItems: 'center', columnGap: 14, minWidth: 0 }}>
                    <ConsultantAvatar person={person} size={54} selected={selectedP} muted={0} />
                    <div style={{ minWidth: 0 }}>
                      <div style={appTyped({ fontSize: mix(14.5, 19, rightMorph), fontWeight: 820,
                        color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                        {shortName}
                      </div>
                      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                        <span style={appTyped({ fontSize: 11.2, fontWeight: 760, color: APP_MUTED,
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 118 })}>
                          {person.focus.replace('Sentinel / SOC', 'IAM / GuardDuty').replace('Terraform / AKS', 'Terraform / Kubernetes')}
                        </span>
                        {person.certs.slice(0, 2).map((cert) => (
                          <CertificationBadge key={`${person.initials}-${cert}-staffing`} cert={cert} color={person.color} mini />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ position: 'relative', borderRadius: 18,
                    background: APP_SURFACE, border: `1px solid ${APP_LINE}`,
                    overflow: 'hidden', boxShadow: '0 16px 34px rgba(45,38,32,0.035)' }}>
                    {dateTicks.map((tick, tickI) => (
                      <div key={`${person.initials}-${tick.label}-grid`} style={{ position: 'absolute',
                        left: `${tick.p * 100}%`, top: 0, bottom: 0, width: 1,
                        background: tickI === 0 ? APP_LINE_STRONG : APP_LINE,
                        opacity: tickI === 0 ? 0.56 : 0.38 }} />
                    ))}
                    <div style={{ position: 'absolute', left: 18, right: 18, top: '50%',
                      height: 2, borderRadius: 999, background: APP_LINE, transform: 'translateY(-50%)' }} />
                    {(person.occupied || []).map((slot, j) => (
                      <div key={`${person.initials}-occupied-${j}`} style={{ position: 'absolute',
                        left: `calc(${slot.start * 100}% + 18px)`,
                        width: `calc(${slot.span * 100}% - 20px)`,
                        top: '50%', height: 28, borderRadius: 999,
                        transform: 'translateY(-50%)',
                        background: APP_RAISED,
                        border: `1px solid ${APP_LINE}`,
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.62)' }} />
                    ))}
                    <div style={{ position: 'absolute',
                      left: `calc(${person.start * 100}% + 18px)`,
                      width: `calc(${person.span * 100}% - 20px)`,
                      top: '50%', height: 40, borderRadius: 999,
                      transform: 'translateY(-50%)',
                      background: person.color,
                      opacity: 0.44 + selectedP * 0.26,
                      boxShadow: `0 10px 26px ${person.color}32, inset 0 1px 0 rgba(255,255,255,0.34)` }} />
                    <div style={{ position: 'absolute',
                      left: `calc(${(person.start + person.span) * 100}% - 38px)`,
                      top: '50%', height: 34, minWidth: 88, borderRadius: 999,
                      transform: 'translateY(-50%)',
                      padding: '0 13px', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: 6,
                      background: APP_SURFACE, border: `1px solid ${person.color}38`,
                      boxShadow: `0 8px 22px ${person.color}20` }}>
                      <span style={appTyped({ fontSize: 13.4, fontWeight: 860, color: APP_TEXT })}>{person.pt}</span>
                      <span style={appTyped({ fontSize: 11, fontWeight: 720, color: APP_FAINT })}>/</span>
                      <span style={appTyped({ fontSize: 11.4, fontWeight: 780, color: person.color })}>{person.days}</span>
                    </div>
                    <div style={{ position: 'absolute',
                      right: 14, top: '50%', width: 9, height: 9, borderRadius: 99,
                      transform: `translateY(-50%) scale(${1 + selectedP * 0.45})`,
                      background: person.color,
                      boxShadow: `0 0 ${8 + selectedP * 12}px ${person.color}88` }} />
                  </div>

                  <div style={{ borderRadius: 18, background: APP_SURFACE, border: `1px solid ${APP_LINE}`,
                    display: 'grid', alignContent: 'center', justifyItems: 'center', gap: 8,
                    boxShadow: '0 16px 34px rgba(45,38,32,0.035)' }}>
                    <span style={appTyped({ fontSize: 18, fontWeight: 850, color: person.color })}>{workload}</span>
                    <span style={{ width: 72, height: 7, borderRadius: 999, background: APP_RAISED, overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: workload, height: '100%',
                        borderRadius: 999, background: person.color, opacity: 0.58 }} />
                    </span>
                    <span style={appTyped({ fontSize: 10.2, fontWeight: 780, color: APP_FAINT })}>Kapazität</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'grid',
            gridTemplateColumns: `${mix(276, 348, rightMorph)}px 1fr ${mix(136, 172, rightMorph)}px`,
            gap: 12, alignItems: 'stretch',
            opacity: rightDetail * rightDraw,
            transform: `translateY(${(1 - rightDraw) * 8}px)` }}>
            <div style={{ borderRadius: 18, background: APP_RAISED, border: `1px solid ${APP_LINE}`,
              padding: '0 16px', display: 'flex', alignItems: 'center', gap: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {staffingRows.map((person, i) => (
                  <span key={`${person.initials}-footer-avatar`} style={{ display: 'inline-flex',
                    marginLeft: i === 0 ? 0 : -9, borderRadius: 99,
                    border: `2px solid ${APP_RAISED}`, boxSizing: 'content-box' }}>
                    <ConsultantAvatar person={person} size={30} selected={0} muted={0} />
                  </span>
                ))}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={appTyped({ fontSize: 11.8, fontWeight: 840, color: APP_TEXT })}>Team gesamt</div>
                <div style={appTyped({ marginTop: 3, fontSize: 10, fontWeight: 700, color: APP_FAINT,
                  whiteSpace: 'nowrap' })}>3 Consultants · Security Cloud</div>
              </div>
            </div>
            <div style={{ borderRadius: 18, background: APP_RAISED, border: `1px solid ${APP_LINE}`,
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'stretch' }}>
              {['2 PT', '3 PT', '2 PT', '—'].map((weekTotal, i) => (
                <div key={`staffing-footer-week-${i}`} style={{ minWidth: 0, boxSizing: 'border-box',
                  paddingLeft: i === 0 ? 16 : 14,
                  borderLeft: i === 0 ? 'none' : `1px solid ${APP_LINE}`,
                  display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={appTyped({ fontSize: 12.6, fontWeight: 850,
                    color: weekTotal === '—' ? APP_FAINT : APP_TEXT })}>{weekTotal}</span>
                  {weekTotal !== '—' && (
                    <span style={appTyped({ fontSize: 9.6, fontWeight: 720, color: APP_FAINT })}>geplant</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 18, background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
              display: 'grid', alignContent: 'center', justifyItems: 'center', gap: 3 }}>
              <span style={appTyped({ fontSize: 14.5, fontWeight: 860, color: APP_TEXT })}>7 PT / 2 W</span>
              <span style={appTyped({ fontSize: 9.6, fontWeight: 760, color: APP_FAINT })}>Gesamtaufwand</span>
            </div>
          </div>

        </div>
      </div>

      {(() => {
        const stripOp = matchDetail * outreachSceneOpacity;
        if (stripOp <= 0.001) return null;
        const projectPhases = [
          { label: 'Landing Zone & IAM', start: 0.04, span: 0.32, color: '#8fbfd8' },
          { label: 'Security Baseline', start: 0.22, span: 0.36, color: WARM },
          { label: 'Migration & Betrieb', start: mix(0.42, 0.34, exploreP), span: mix(0.32, 0.42, exploreP), color: '#e8655a' },
        ];
        const milestones = [
          { label: 'Kickoff', p: 0.02, color: '#74c69d' },
          { label: 'Security Review', p: 0.62, color: WARM },
          { label: 'Go-Live', p: 0.98, color: APP_FAINT },
        ];
        return (
          <React.Fragment>
          <div style={{ position: 'absolute', left: 76, top: -46, width: 1600,
            opacity: stripOp * 0.9, transform: `translateY(${(1 - matchDetail) * -10}px)`,
            display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
              textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>Projekt · Bank AG</span>
            <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
            <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
              textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>
              AWS Transformation
            </span>
            <span style={{ flex: 1 }} />
            <span style={appTyped({ fontSize: 10.5, fontWeight: 740, color: APP_FAINT,
              whiteSpace: 'nowrap' })}>4 Wochen · Start W1 · 3 Rollen</span>
          </div>
          <div style={{ position: 'absolute', left: 76, top: -18, width: 1600,
            opacity: stripOp, display: 'grid', gridTemplateColumns: 'auto 1fr auto auto',
            alignItems: 'center', columnGap: 14 }}>
            <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 830, letterSpacing: '0.11em',
              textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>Journey</span>
            <span style={{ position: 'relative', height: 8, borderRadius: 999,
              background: 'rgba(45,38,32,0.09)', display: 'block' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60%',
                borderRadius: 999, background: `linear-gradient(90deg, #d99a55, ${WARM})`,
                boxShadow: '0 0 8px rgba(240,168,94,0.4)' }} />
              {[25, 50, 75].map((tick) => (
                <span key={`match-journey-tick-${tick}`} style={{ position: 'absolute',
                  left: `${tick}%`, top: 1.5, bottom: 1.5, width: 1.4,
                  background: 'rgba(45,38,32,0.16)' }} />
              ))}
              <span style={{ position: 'absolute', left: '60%', top: '50%', width: 13, height: 13,
                borderRadius: 99, transform: 'translate(-50%,-50%)', background: '#ffffff',
                border: `2.8px solid ${WARM}`, boxSizing: 'border-box',
                boxShadow: '0 2px 7px rgba(45,38,32,0.22)' }} />
            </span>
            <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 850, color: '#9a6a2e',
              whiteSpace: 'nowrap' }}>60 %</span>
            <span style={appTyped({ fontSize: 10.5, fontWeight: 740, color: APP_MUTED,
              whiteSpace: 'nowrap' })}>Team steht · bereit zum Abschluss</span>
          </div>
          <div style={{ position: 'absolute', left: 76, top: 618, width: 1600, height: 148,
            opacity: stripOp, transform: `translateY(${(1 - matchDetail) * 14}px)`,
            boxSizing: 'border-box', borderRadius: 18, padding: '14px 22px 10px',
            background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}` }}>
            <div style={{ position: 'relative', height: '100%' }}>
              {[0.25, 0.5, 0.75].map((p) => (
                <span key={`proj-grid-${p}`} style={{ position: 'absolute', left: `${p * 100}%`,
                  top: 20, bottom: 0, width: 1, background: APP_LINE, opacity: 0.6 }} />
              ))}
              {['W1', 'W2', 'W3', 'W4'].map((w, i) => (
                <span key={`proj-tick-${w}`} style={{ position: 'absolute', left: `${i * 25}%`,
                  top: 0, ...appTyped({ fontSize: 9.4, fontWeight: 820, color: APP_FAINT,
                  letterSpacing: '0.11em' }) }}>{w}</span>
              ))}
              {milestones.map((ms) => (
                <span key={ms.label} style={{ position: 'absolute', left: `${ms.p * 100}%`, top: 16,
                  transform: 'translateX(-50%)', display: 'grid', justifyItems: 'center', gap: 3 }}>
                  <span style={{ width: 9, height: 9, transform: 'rotate(45deg)',
                    background: '#ffffff', border: `2.2px solid ${ms.color}`, boxSizing: 'border-box' }} />
                  <span style={appTyped({ fontSize: 8.8, fontWeight: 780, color: APP_FAINT,
                    whiteSpace: 'nowrap' })}>{ms.label}</span>
                </span>
              ))}
              {projectPhases.map((phase, i) => {
                const person = i === 2 && exploreP > 0.5 ? matchCandidates[3] : matchedConsultants[i];
                const matchIn = rise(local, matchT(i) + 0.34, 0.60);
                const rowTop = 50 + i * 27;
                const barEnd = Math.min(0.97, phase.start + phase.span);
                return (
                  <div key={phase.label} style={{ position: 'absolute', left: 0, right: 0, top: rowTop, height: 22 }}>
                    <span style={{ position: 'absolute', left: `${phase.start * 100}%`,
                      width: `${phase.span * 100}%`, top: '50%', height: 16, borderRadius: 999,
                      transform: 'translateY(-50%)',
                      background: `${phase.color}${matchIn > 0.4 ? '52' : '24'}`,
                      border: `1px solid ${phase.color}44`,
                      transition: 'background 240ms' }} />
                    <span style={{ position: 'absolute', left: `${phase.start * 100 + 1}%`, top: '50%',
                      transform: 'translateY(-50%)',
                      ...appTyped({ fontSize: 9.8, fontWeight: 800, color: APP_TEXT,
                      whiteSpace: 'nowrap' }) }}>{phase.label}</span>
                    <span style={{ position: 'absolute', left: `calc(${barEnd * 100}% + 8px)`, top: '50%',
                      transform: `translateY(-50%) scale(${0.7 + matchIn * 0.3})`,
                      opacity: matchIn, display: 'inline-flex', alignItems: 'center', gap: 6,
                      height: 24, borderRadius: 999, padding: '0 9px 0 3px',
                      background: APP_RAISED, border: `1px solid ${phase.color}40` }}>
                      <ConsultantAvatar person={person} size={18} selected={0} />
                      <span style={appTyped({ fontSize: 9.4, fontWeight: 840, color: APP_TEXT,
                        whiteSpace: 'nowrap' })}>{person.initials}</span>
                      <span style={{ width: 5, height: 5, borderRadius: 99, background: '#74c69d' }} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          </React.Fragment>
        );
      })()}

		      <div style={{ position: 'absolute', left: profileListTo.x, top: profileListTo.y, width: profileListTo.w, height: profileListTo.h,
        opacity: matchDetail * listP * outreachSceneOpacity,
        transform: `translateY(${(1 - listP) * 22}px) scale(${0.986 + listP * 0.014 + matchBeat * 0.010})`,
        transformOrigin: '50% 0%', boxSizing: 'border-box',
        borderRadius: 18,
        overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 22, right: 22, top: 22, height: 76,
          display: 'grid', gridTemplateColumns: '1fr 134px', gap: 14, alignItems: 'center' }}>
          <div style={{ height: 76, borderRadius: 18, display: 'flex', alignItems: 'center', gap: 16,
            padding: '0 20px', boxSizing: 'border-box',
            background: APP_RAISED,
            border: `1px solid ${APP_LINE_STRONG}` }}>
            <Icon name="search" size={27} color="#8fbfd8" sw={1.9} />
            <span style={appTyped({ fontSize: 18.5, fontWeight: 690,
              color: APP_TEXT, whiteSpace: 'nowrap' })}>AWS Cloud Security</span>
            <span style={{ width: 2, height: 32, borderRadius: 99, background: APP_ACCENT,
              opacity: 0.62 + matchBeat * 0.28,
              boxShadow: `0 0 ${10 + matchBeat * 10}px rgba(232,101,90,0.34)` }} />
            <span style={{ flex: 1 }} />
            {[ '#8fbfd8', WARM, '#e8655a' ].map((color, i) => (
              <span key={`search-filter-${i}`} style={{ width: 9, height: 9, borderRadius: 99,
                background: color, opacity: 0.54 + matchBeat * 0.20,
                boxShadow: `0 0 9px ${color}66` }} />
            ))}
          </div>
          <div style={{ height: 48, borderRadius: 999, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 8,
            ...appTyped({ fontSize: 12.5, fontWeight: 720, color: APP_TEXT }),
            background: APP_RAISED, border: '1px solid rgba(232,101,90,0.22)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: APP_ACCENT,
              boxShadow: '0 0 9px rgba(232,101,90,0.42)' }} />
            {exploreP > 0.5 ? '5 Treffer' : '3 Treffer'}
          </div>
        </div>
        <div style={{ position: 'absolute', left: 22, right: 610, top: 122, bottom: 22,
          display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ flex: 'none', height: 20, display: 'grid',
            gridTemplateColumns: '66px minmax(0, 1fr) 300px 224px', columnGap: 16,
            alignItems: 'center', padding: '0 22px 0 16px', boxSizing: 'border-box',
            opacity: matchDetail }}>
            <span />
            <span style={appTyped({ fontSize: 9.4, fontWeight: 820, color: APP_FAINT,
              letterSpacing: '0.11em', textTransform: 'uppercase' })}>Consultant</span>
            <span style={appTyped({ fontSize: 9.4, fontWeight: 820, color: APP_FAINT,
              letterSpacing: '0.11em', textTransform: 'uppercase', whiteSpace: 'nowrap' })}>
              Aktive Projekte · Kollisionen
            </span>
            <span style={appTyped({ fontSize: 9.4, fontWeight: 820, color: APP_FAINT,
              letterSpacing: '0.11em', textTransform: 'uppercase' })}>Zertifizierungen</span>
          </div>
          {(() => {
            const collisionByRow = [
              { project: 'Bank XY · SOC-Betrieb', range: 'endet W1', warn: false },
              null,
              { project: 'Versicherer Z · IaC-Rollout', range: 'W2–W3', warn: true },
              { project: 'Konzern X · Review', range: 'endet W1', warn: false },
              null,
            ];
            return (
          <div style={{ flex: '1 1 0', minHeight: 0, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 'calc(166.67% + 9.4px)',
            display: 'flex', flexDirection: 'column', gap: 14,
            transform: `translateY(-${(exploreP * 40.5).toFixed(2)}%)` }}>
          {matchCandidates.map((person, i) => {
            const cp = rise(local, matchT(Math.min(i, 3)) + 0.16, 0.92);
            const selectedP = i === 3 ? exploreP
              : i > 3 ? 0
              : band(local, matchT(i) + 0.18, matchT(i) + 1.30, 0.30);
            const slotIn = rise(local, staffingStageStart + 0.24 + i * 0.16, 0.66);
            const shortName = person.name
              .replace('Sr. Architect - Max Muster', 'Sr. Architect - Max')
              .replace('Sec. Engineer - Lena Weber', 'Sec. Engineer - Lena')
              .replace('Platform Eng. - Jonas Klein', 'Platform Eng. - Jonas');
            const focus = (person.focus || '')
              .replace('Sentinel / SOC', 'IAM / GuardDuty')
              .replace('Terraform / AKS', 'Terraform / Kubernetes')
              .replace('Azure Security', 'AWS Security');
            return (
              <div key={person.name} style={{ flex: 'none', height: 'calc((100% - 56px) / 5)', borderRadius: 16,
                padding: '10px 14px', boxSizing: 'border-box',
                display: 'grid', gridTemplateColumns: '66px minmax(0, 1fr) 300px 224px', columnGap: 16,
                alignItems: 'center', opacity: cp,
                transform: `translateX(${(1 - cp) * 28}px)`,
                background: selectedP > 0.08 ? 'rgba(240,168,94,0.07)' : APP_SURFACE,
                border: `1px solid ${selectedP > 0.08 ? 'rgba(240,168,94,0.44)' : APP_LINE_STRONG}`,
                boxShadow: selectedP > 0.08 ? '0 0 18px rgba(240,168,94,0.16)' : 'none' }}>
                <div style={{ width: 64, height: 64, borderRadius: 999, display: 'flex',
                  alignItems: 'center', justifyContent: 'center' }}>
                  <ConsultantAvatar person={person} size={64} selected={selectedP} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: DISPLAY, fontWeight: 745, fontSize: 21.5,
                    color: APP_TEXT, letterSpacing: '-0.014em', whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {shortName}
                  </div>
                  <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                    {(() => {
                      // m0099: team-edit state — make the person change explicit
                      const settledBack = 1 - exploreP;
                      const chip = i === 3 && exploreP > 0.5
                        ? { label: '⇄ eingewechselt · im Team', bg: 'rgba(240,168,94,0.14)', bd: 'rgba(240,168,94,0.44)', fg: '#9a6a2e' }
                        : i === 2 && exploreP > 0.5
                          ? { label: '⇄ ersetzt · pausiert', bg: APP_RAISED, bd: APP_LINE_STRONG, fg: APP_MUTED }
                          : i < 3 && settledBack > 0.5 && rise(local, matchT(i) + 0.62, 0.40) > 0.5
                            ? { label: 'im Team', bg: 'rgba(116,198,157,0.13)', bd: 'rgba(116,198,157,0.34)', fg: '#3f7b56', check: true }
                            : null;
                      if (!chip) return null;
                      return (
                        <span style={{ height: 22, borderRadius: 999, padding: '0 9px', flexShrink: 0,
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          background: chip.bg, border: `1px solid ${chip.bd}`,
                          ...appTyped({ fontSize: 10, fontWeight: 820, color: chip.fg,
                            whiteSpace: 'nowrap' }) }}>
                          {chip.check && <Icon name="check" size={10} color="#3f7b56" sw={2.8} />}
                          {chip.label}
                        </span>
                      );
                    })()}
                    <span style={appTyped({ fontSize: 12.2, fontWeight: 740, color: APP_MUTED,
                      whiteSpace: 'nowrap' })}>{focus}</span>
                    <span style={{ width: 4, height: 4, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
                    <span style={appTyped({ fontSize: 12.2, fontWeight: 740, color: '#3f7b56',
                      whiteSpace: 'nowrap' })}>Verfügbar ab W1</span>
                  </div>
                </div>
                {(() => {
                  const collision = collisionByRow[i];
                  const chipColor = collision ? (collision.warn ? '#c2803a' : APP_MUTED) : '#3f7b56';
                  return (
                    <div style={{ display: 'grid', gap: 6, alignContent: 'center',
                      justifyItems: 'start', opacity: slotIn,
                      transform: `translateY(${(1 - slotIn) * 6}px)` }}>
                      <span style={{ height: 26, borderRadius: 999, padding: '0 11px',
                        display: 'inline-flex', alignItems: 'center', gap: 7,
                        background: collision
                          ? (collision.warn ? 'rgba(240,168,94,0.13)' : APP_RAISED)
                          : 'rgba(116,198,157,0.13)',
                        border: `1px solid ${collision
                          ? (collision.warn ? 'rgba(240,168,94,0.38)' : APP_LINE_STRONG)
                          : 'rgba(116,198,157,0.34)'}` }}>
                        <Icon name={collision ? (collision.warn ? 'zap' : 'clock') : 'check'}
                          size={12} color={chipColor} sw={2.4} />
                        <span style={appTyped({ fontSize: 11, fontWeight: 810, color: collision ? APP_TEXT : '#3f7b56',
                          whiteSpace: 'nowrap' })}>
                          {collision ? collision.project : 'Keine Kollision'}
                        </span>
                        {collision && (
                          <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 820,
                            letterSpacing: '0.06em', color: chipColor, whiteSpace: 'nowrap' }}>
                            {collision.range}
                          </span>
                        )}
                      </span>
                      <span style={appTyped({ fontSize: 10, fontWeight: 700, color: APP_FAINT,
                        whiteSpace: 'nowrap' })}>
                        {collision
                          ? (collision.warn ? 'Überschneidung im Zeitfenster möglich' : 'kein Konflikt mit Einsatz')
                          : 'Kalender frei · W1–W4'}
                      </span>
                    </div>
                  );
                })()}
                {(() => {
                  const certs = person.certs || [];
                  const shown = certs.length > 4 ? certs.slice(0, 3) : certs.slice(0, 4);
                  const moreCount = certs.length - shown.length;
                  return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 5,
                      alignContent: 'center', justifyItems: 'start', justifyContent: 'start',
                      overflow: 'hidden' }}>
                      {shown.map((cert) => (
                        <CertificationBadge key={cert} cert={cert} color={person.color} mini />
                      ))}
                      {moreCount > 0 && (
                        <span style={{ height: 27, borderRadius: 999, padding: '0 10px',
                          display: 'inline-flex', alignItems: 'center', alignSelf: 'center',
                          background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
                          fontFamily: MONO, fontSize: 9, fontWeight: 820, letterSpacing: '0.06em',
                          color: APP_MUTED, whiteSpace: 'nowrap' }}>
                          +{moreCount} weitere
                        </span>
                      )}
                    </div>
                  );
                })()}
              </div>
            );
          })}
          </div>
          </div>
            );
          })()}
          <div style={{ flex: 'none', height: 56, borderRadius: 16, display: 'flex',
            alignItems: 'center', gap: 14, padding: '0 18px', boxSizing: 'border-box',
            background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`, opacity: matchDetail }}>
            <span style={appTyped({ fontSize: 11.6, fontWeight: 840, color: APP_TEXT, whiteSpace: 'nowrap' })}>Ø Fit 90%</span>
            <span style={{ width: 1, height: 18, background: APP_LINE_STRONG }} />
            <span style={appTyped({ fontSize: 11.2, fontWeight: 740, color: APP_MUTED, whiteSpace: 'nowrap' })}>2 Rollen gedeckt · Security Cloud Team</span>
            <span style={{ marginLeft: 'auto', ...appTyped({ fontSize: 11.6, fontWeight: 840,
              color: APP_TEXT, whiteSpace: 'nowrap' }) }}>
              Σ 7 PT / 2 W
            </span>
            <span style={appTyped({ fontSize: 10.2, fontWeight: 740, color: APP_FAINT,
              whiteSpace: 'nowrap' })}>geplant</span>
          </div>
        </div>

        <div style={{ position: 'absolute', right: 22, top: 122, bottom: 100, width: 564,
          borderRadius: 18, padding: '18px 22px', boxSizing: 'border-box',
          background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}`,
          opacity: matchDetail,
          boxShadow: 'inset 2px 0 0 rgba(240,168,94,0.40)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 9.8, fontWeight: 820, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: APP_MUTED }}>Anforderungsprofil · AWS Transformation</div>
              <div style={{ marginTop: 6, ...appTyped({ fontSize: 16.5, fontWeight: 820, color: APP_TEXT }) }}>
                Skill-Abdeckung
              </div>
            </div>
            <span style={{ height: 28, borderRadius: 999, padding: '0 11px', display: 'inline-flex',
              alignItems: 'center', gap: 7,
              background: 'rgba(155,89,182,0.12)', border: '1px solid rgba(155,89,182,0.34)',
              ...appTyped({ fontSize: 10.6, fontWeight: 830, color: '#7d4796' }) }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: '#9b59b6',
                boxShadow: '0 0 8px rgba(155,89,182,0.7)' }} />
              {Math.round(mix(90, 86, exploreP))}% gedeckt
            </span>
          </div>
          {(() => {
            const rcx = 260, rcy = 160, rR = 100;
            const radarDraw = matchDetail;
            const altCover = [0.90, 0.86, 0.96, 0.92, 0.82, 0.90];
            const reqPts = [];
            const covPts = [];
            const axisMeta = profile.map((skill, i) => {
              const angle = -Math.PI / 2 + i * (Math.PI * 2 / profile.length);
              const vr = rR * skill.value * radarDraw;
              const cr = rR * mix(skill.value, mix(teamCover[i], altCover[i], exploreP), teamFulfill) * radarDraw;
              reqPts.push(`${(rcx + Math.cos(angle) * vr).toFixed(1)},${(rcy + Math.sin(angle) * vr).toFixed(1)}`);
              covPts.push(`${(rcx + Math.cos(angle) * cr).toFixed(1)},${(rcy + Math.sin(angle) * cr).toFixed(1)}`);
              return { ...skill, angle,
                ax: rcx + Math.cos(angle) * rR, ay: rcy + Math.sin(angle) * rR,
                lx: rcx + Math.cos(angle) * (rR + 24), ly: rcy + Math.sin(angle) * (rR + 24),
                cx2: rcx + Math.cos(angle) * cr, cy2: rcy + Math.sin(angle) * cr };
            });
            const anchorFor = (lx) => lx < rcx - 12 ? 'end' : lx > rcx + 12 ? 'start' : 'middle';
            return (
              <svg width="520" height="322" viewBox="0 0 520 322"
                style={{ display: 'block', margin: '10px auto 0', overflow: 'visible' }}>
                {[0.25, 0.5, 0.75, 1].map((ratio) => (
                  <circle key={ratio} cx={rcx} cy={rcy} r={rR * ratio} fill="none"
                    stroke={ratio === 1 ? 'rgba(45,38,32,0.16)' : 'rgba(45,38,32,0.07)'}
                    strokeWidth={ratio === 1 ? 1.3 : 1} />
                ))}
                {axisMeta.map((axis) => (
                  <g key={axis.short}>
                    <line x1={rcx} y1={rcy} x2={axis.ax} y2={axis.ay}
                      stroke="rgba(45,38,32,0.10)" strokeWidth="1" />
                    <text x={axis.lx} y={axis.ly} textAnchor={anchorFor(axis.lx)}
                      fontFamily={MONO} fontSize="11" fontWeight="800" letterSpacing="0.8"
                      fill={APP_TEXT}>{axis.short}</text>
                    <text x={axis.lx} y={axis.ly + 14} textAnchor={anchorFor(axis.lx)}
                      fontFamily={INTER} fontSize="9.5" fontWeight="640"
                      fill={APP_FAINT}>{axis.name}</text>
                  </g>
                ))}
                <polygon points={reqPts.join(' ')} fill="rgba(232,101,90,0.34)"
                  strokeLinejoin="round" opacity={0.95}
                  style={{ filter: 'drop-shadow(0 0 14px rgba(232,101,90,0.65))' }} />
                <polygon points={covPts.join(' ')} fill="rgba(155,89,182,0.16)"
                  stroke="#8e44ad" strokeWidth="2.2" strokeLinejoin="round"
                  opacity={0.35 + teamFulfill * 0.6}
                  style={{ filter: 'drop-shadow(0 0 9px rgba(155,89,182,0.5))' }} />
                {axisMeta.map((axis) => (
                  <circle key={`${axis.short}-cover`} cx={axis.cx2} cy={axis.cy2} r="4.6"
                    fill="#9b59b6" stroke="#fffaf4" strokeWidth="2"
                    opacity={0.4 + teamFulfill * 0.6}
                    style={{ filter: 'drop-shadow(0 0 7px rgba(155,89,182,0.55))' }} />
                ))}
              </svg>
            );
          })()}
          <div style={{ position: 'absolute', left: 22, right: 22, bottom: 16,
            display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: 'rgba(232,101,90,0.7)',
                boxShadow: '0 0 8px rgba(232,101,90,0.55)' }} />
              <span style={appTyped({ fontSize: 10.6, fontWeight: 760, color: APP_MUTED })}>Anforderung · Bank AG</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 99, background: '#9b59b6', opacity: 0.9,
                boxShadow: '0 0 8px rgba(155,89,182,0.6)' }} />
              <span style={appTyped({ fontSize: 10.6, fontWeight: 760, color: APP_MUTED })}>Team-Abdeckung</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

function TeamProjectBundleHandoff({ local }) {
  const start = 15.12 + REORDER_SHIFT;
  const gather = Easing.easeInOutCubic(clamp((local - start) / 1.16, 0, 1));
  const project = rise(local, start + 0.52, 0.72);
  const lock = rise(local, start + 1.42, 0.52);
  const exit = rise(local, start + 2.02, 0.44);
  const op = band(local, start - 0.08, 17.42 + REORDER_SHIFT, 0.36);
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
        <div style={{ position: 'absolute', left: 18, right: 18, top: 116, textAlign: 'center',
          opacity: lock }}>
          <div style={{ fontFamily: MONO, fontSize: 9.3, letterSpacing: '0.11em',
            textTransform: 'uppercase', color: 'rgba(250,250,249,0.58)' }}>
            KI-assistierter Angebotsentwurf wird erstellt
          </div>
        </div>
        {(() => {
          const confirmTeamClick = band(local, staffingStageStart + 4.45, staffingStageStart + 4.85, 0.12);
          const confirmedTeam = rise(local, staffingStageStart + 4.62, 0.35);
          return (
            <div style={{ position: 'absolute', right: 22, bottom: 22, width: 564, height: 62,
              borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 11, boxSizing: 'border-box', opacity: matchDetail,
              transform: `scale(${1 - confirmTeamClick * 0.03})`,
              background: confirmedTeam > 0.5 ? '#e8f4ec' : '#1c1a18',
              border: `1.5px solid ${confirmedTeam > 0.5 ? 'rgba(116,198,157,0.55)' : 'rgba(240,168,94,0.75)'}`,
              boxShadow: confirmTeamClick > 0.01
                ? `0 0 ${22 + confirmTeamClick * 24}px rgba(240,168,94,0.55)`
                : confirmedTeam > 0.5
                  ? '0 0 20px rgba(116,198,157,0.32)'
                  : '0 14px 32px rgba(45,38,32,0.30), 0 0 22px rgba(240,168,94,0.28)' }}>
              {confirmedTeam > 0.5
                ? <Icon name="check" size={17} color="#3f7b56" sw={2.6} />
                : <span style={{ width: 9, height: 9, borderRadius: 99, background: WARM,
                    boxShadow: '0 0 11px rgba(240,168,94,0.85)' }} />}
              <span style={{ ...appTyped({ fontSize: 15.5, fontWeight: 850,
                color: confirmedTeam > 0.5 ? '#3f7b56' : '#fdfaf5', whiteSpace: 'nowrap' }) }}>
                {confirmedTeam > 0.5 ? 'Team bestätigt · weiter zum Abschluss' : 'Team-Auswahl bestätigen'}
              </span>
            </div>
          );
        })()}
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

  const showDraftingBridge = false;
  const gatherStart = LOGO_BRIDGE_GATHER_START;
  const bundleHoldStart = LOGO_BRIDGE_BUNDLE_HOLD_START;
  const offerStart = LOGO_BRIDGE_OFFER_START;
  const consumeTargetX = LOGO_BRIDGE_CENTER_X;
  const consumeTargetY = LOGO_BRIDGE_CENTER_Y;
  const consumeStart = gatherStart + 0.22;
  const absorb = Easing.easeInOutCubic(clamp((t - consumeStart) / 1.86, 0, 1));
  const bundled = 0;
  const cooking = band(t, bundleHoldStart, offerStart + 0.28, 0.42);
  const offer = rise(t, offerStart + 0.08, 1.12);
  const flow = rise(t, offerStart + 0.76, 1.02);
  const result = rise(t, offerStart + 1.42, 0.82);
  const out = rise(t, end - 0.78, 0.72);
  const dealClosed = rise(t, LOGO_BRIDGE_DEAL_START, 0.72);   // final "Deal closed" confirmation, bridging to the next scene
  const offerLabelsStart = LOGO_BRIDGE_OFFER_LABELS_START;
  const offerHeaderOut = rise(t, offerLabelsStart - 0.02, 0.64);
  const offerHeaderOpacity = (1 - out) * (1 - dealClosed * 0.9) * (1 - offerHeaderOut);
  const backgroundDissolve = Easing.easeInOutCubic(clamp((t - (offerStart - 0.10)) / 0.86, 0, 1));
  const logoX = LOGO_BRIDGE_RESULT_X;
  const logoY = LOGO_BRIDGE_RESULT_Y;
  const markSize = LOGO_BRIDGE_RESULT_SIZE;
  const logoPulse = band(t, gatherStart + 0.92, offerStart + 0.48, 0.52);
  const sceneDetransition = backgroundDissolve;
  const resultX = logoX + markSize / 2 + 118;
  const resultY = logoY - 64;
  const resultW = 548;
  const flowStartX = logoX + markSize / 2 + 30;
  const flowStartY = logoY;
  const flowEndX = resultX - 22;
  const flowEndY = logoY;
  const packetX = mix(flowStartX, flowEndX, flow);
  const packetY = mix(flowStartY, flowEndY, flow);
  const thinkingDot = (i) => 0.46 + 0.54 * ((Math.sin((t - bundleHoldStart) * 6.4 - i * 0.86) + 1) / 2);
  const loaderPulse = 0.50 + 0.50 * ((Math.sin((t - bundleHoldStart) * 5.1) + 1) / 2);
  const dealEase = Easing.easeOutCubic(dealClosed);
  const projectMorph = rise(t, LOGO_BRIDGE_PROJECT_MORPH_START, 0.56);
  const checkMorphDone = projectMorph >= 0.985;
  const dealSealSize = mix(128, 206, dealEase);
  const dealGap = mix(20, 28, dealEase);
  const dealTextSize = mix(46, 76, dealEase);
  const dealGroupH = dealSealSize + dealGap + dealTextSize * 1.04;
  const dealTop = mix(logoY - 40, 540 - dealGroupH / 2, dealEase);
  const modCardW = 510, modCardH = 300, modGap = 42;
  const modRowW = modCardW * 3 + modGap * 2;
  const modLeft = 960 - modRowW / 2;
  const offerModulesTop = logoY + 132;
  const offerModules = [
    { key: 'cv', title: 'CVs', icon: 'users', color: '#8fbfd8', lines: [0.54, 0.78, 0.46] },
    { key: 'scope', title: 'Dienstleistung', icon: 'briefcase', color: WARM, lines: [0.72, 0.58, 0.42] },
    { key: 'cond', title: 'Vertragsentwurf', icon: 'file', color: '#e8655a', lines: [0.66, 0.48, 0.70] },
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
        opacity: dealClosed * (0.18 + dealEase * 0.56),
        background: 'rgba(23,19,17,0.58)',
        backdropFilter: `blur(${dealClosed * (2.8 + dealEase * 5.6)}px)`,
        WebkitBackdropFilter: `blur(${dealClosed * (2.8 + dealEase * 5.6)}px)` }} />
      <div style={{ position: 'absolute', inset: 0,
        opacity: dealClosed * 0.86,
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
        {showDraftingBridge && sources.map((source, i) => {
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
        {showDraftingBridge && <g opacity={flow * (1 - out) * (1 - offerHeaderOut)}>
          <path d={`M ${flowStartX} ${flowStartY} C ${flowStartX + 68} ${flowStartY - 2}, ${flowEndX - 82} ${flowEndY}, ${flowEndX} ${flowEndY}`}
            fill="none" stroke="url(#bridge-result-flow)" strokeWidth="3.1" strokeLinecap="round"
            strokeDasharray="620" strokeDashoffset={(1 - flow) * 620}
            opacity="0.82" filter="url(#persistent-project-glow)" />
          <circle cx={packetX} cy={packetY} r={5 + flow * 1.5}
            fill="#8fbfd8" opacity={0.42 + flow * 0.42} />
          <circle cx={packetX} cy={packetY} r={11 + flow * 8}
            fill="none" stroke="rgba(143,191,216,0.35)" strokeWidth="1.2"
            opacity={(1 - flow) * 0.34 + 0.16} />
        </g>}
      </svg>

      {showDraftingBridge && sources.map((source, i) => {
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

      {showDraftingBridge && <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none',
          opacity: result * offerHeaderOpacity }}>
        <line x1={logoX + markSize / 2 + 10} y1={logoY} x2={resultX - 16} y2={logoY}
          stroke="rgba(143,191,216,0.45)" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="130" strokeDashoffset={(1 - result) * 130} />
        <circle cx={resultX - 16} cy={logoY} r={4} fill="#8fbfd8" opacity={result} />
      </svg>}

      {false && <div style={{ position: 'absolute', left: resultX, top: resultY + 18,
        width: resultW, height: 92, opacity: result * offerHeaderOpacity,
        transform: `translate(${(1 - result) * 30}px, ${-offerHeaderOut * 34}px) scale(${0.986 + result * 0.014 - offerHeaderOut * 0.035})`,
        transformOrigin: '0% 50%',
        display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, flex: '0 0 auto', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          transform: `scale(${0.86 + result * 0.14})`,
          background: 'linear-gradient(135deg, rgba(143,191,216,0.20), rgba(240,168,94,0.12))',
          border: '1px solid rgba(143,191,216,0.34)',
          boxShadow: `0 0 ${18 + result * 30}px rgba(143,191,216,0.18)` }}>
          <Icon name="check" size={32} color="#8fbfd8" sw={2.2} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 820,
            fontSize: 38, lineHeight: 1.02, color: TEXT, letterSpacing: '-0.022em',
            whiteSpace: 'nowrap' }}>
            Angebot bereit zur Review
          </div>
          <div style={{ marginTop: 10, width: 452, height: 2, borderRadius: 99,
            transform: `scaleX(${result})`, transformOrigin: '0 50%',
            background: 'linear-gradient(90deg, rgba(143,191,216,0.62), rgba(240,168,94,0.62), rgba(232,101,90,0.16))' }} />
        </div>
      </div>}

      {false && offerModules.map((m, i) => {
        const mx = modLeft + i * (modCardW + modGap);
        const mp = rise(t, offerStart + 1.98 + i * 0.30, 0.60);
        const fill = rise(t, offerStart + 2.44 + i * 0.26, 1.02);
        const cardLift = (1 - mp) * 310;
        const focusGlow = 0.16 + fill * 0.36;
        const titleSize = m.title.length > 13 ? 38 : m.title.length > 8 ? 42 : 54;
        const stemHeight = 270 + fill * 116;
        return (
          <div key={m.key} style={{ position: 'absolute', left: mx, top: offerModulesTop,
            width: modCardW, height: modCardH + 118, boxSizing: 'border-box',
            opacity: mp * (1 - out) * (1 - dealClosed * 0.42),
            transform: `translateY(${cardLift}px) scale(${(0.955 + mp * 0.045) - dealClosed * 0.02})`,
            transformOrigin: '50% 100%',
            filter: `drop-shadow(0 28px 64px rgba(0,0,0,0.34)) drop-shadow(0 0 ${18 + fill * 28}px ${m.color}${Math.round(focusGlow * 255).toString(16).padStart(2, '0')})`,
            overflow: 'visible' }}>
            <div style={{ position: 'absolute', left: 56, top: 88, width: 2, height: stemHeight,
              borderRadius: 999, transform: `scaleY(${0.48 + fill * 0.52})`,
              transformOrigin: '50% 100%',
              background: `linear-gradient(180deg, ${m.color}00 0%, ${m.color}70 34%, ${m.color}d8 100%)`,
              boxShadow: `0 0 ${12 + fill * 18}px ${m.color}44` }} />
            <div style={{ position: 'absolute', left: 54, bottom: 0, width: 6, height: 6,
              borderRadius: 99, background: m.color,
              opacity: 0.45 + fill * 0.38,
              boxShadow: `0 0 18px ${m.color}88` }} />
            <div style={{ position: 'absolute', left: 56, top: 76, width: modCardW - 92, height: 2,
              borderRadius: 99, overflow: 'hidden',
              background: 'rgba(250,250,249,0.060)' }}>
              <div style={{ width: `${Math.round(fill * 100)}%`, height: '100%',
                borderRadius: 999, background: `linear-gradient(90deg, ${m.color}, rgba(250,250,249,0.12))`,
                boxShadow: `0 0 14px ${m.color}66` }} />
            </div>
            <div style={{ position: 'absolute', left: 20, top: 0, right: 12, height: 138,
              display: 'flex', alignItems: 'center', gap: 28 }}>
              <div style={{ width: 108, height: 108, borderRadius: 32, flex: '0 0 auto', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: `linear-gradient(135deg, ${m.color}24 0%, rgba(23,19,17,0.72) 100%)`,
                border: `1px solid ${m.color}70`,
                boxShadow: `0 18px 44px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 ${12 + fill * 18}px ${m.color}28` }}>
                <Icon name={m.icon} size={55} color={m.color} sw={1.95} />
              </div>
              <div style={{ minWidth: 0, flex: '1 1 auto' }}>
                <div style={{ fontFamily: DISPLAY, fontSize: titleSize, lineHeight: 1,
                  fontWeight: 825, color: TEXT, letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip',
                  textShadow: '0 16px 38px rgba(0,0,0,0.42)' }}>{m.title}</div>
                <div style={{ marginTop: 17, display: 'grid', gap: 8, width: '88%' }}>
                  {(m.lines || []).map((lineW, idx) => (
                    <span key={`${m.key}-context-${idx}`} style={{ height: idx === 0 ? 8 : 6,
                      width: `${lineW * 100}%`, borderRadius: 99,
                      opacity: fill * (idx === 0 ? 0.58 : 0.34),
                      background: idx === 0 ? m.color : 'rgba(250,250,249,0.18)',
                      boxShadow: idx === 0 ? `0 0 12px ${m.color}55` : 'none' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {dealClosed > 0.001 && (
        <div style={{ position: 'absolute', inset: 0, opacity: dealClosed * (1 - out), pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 64% 60% at 50% 46%, rgba(23,19,17,0.90) 0%, rgba(23,19,17,0.68) 52%, rgba(23,19,17,0) 100%)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: dealTop,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: dealGap,
            transform: `scale(${0.96 + dealEase * 0.04})` }}>
            <div style={{ position: 'relative', width: dealSealSize, height: dealSealSize,
              transform: `scale(${0.62 + dealEase * 0.38})` }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 999,
                border: '2px solid rgba(95,200,140,0.5)',
                transform: `scale(${1 + (1 - dealClosed) * 0.45})`, opacity: dealClosed * (1 - dealClosed) * 2.4 }} />
              <div style={{ position: 'absolute', inset: mix(12, 18, dealEase), borderRadius: 999, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'radial-gradient(circle at 50% 34%, rgba(95,200,140,0.32) 0%, rgba(21,29,24,0.94) 74%)',
                border: '1px solid rgba(95,200,140,0.62)',
                boxShadow: `0 0 ${28 + dealClosed * 44}px rgba(95,200,140,0.36)` }}>
                {!checkMorphDone && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    opacity: 1 - projectMorph,
                    transform: `scale(${1 - projectMorph * 0.24})` }}>
                    <Icon name="check" size={mix(58, 92, dealEase)} color="#7fdca6" sw={2.4} />
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 9,
                  opacity: projectMorph,
                  transform: `translateY(${(1 - projectMorph) * 12}px) scale(${0.90 + projectMorph * 0.14})` }}>
                  <Icon name="briefcase" size={mix(62, 96, dealEase)} color="#7fdca6" sw={1.9} />
                  <span style={{ fontFamily: MONO, fontSize: mix(10, 13, dealEase),
                    letterSpacing: '0.14em', fontWeight: 800, color: 'rgba(250,250,249,0.72)' }}>PROJECT</span>
                </div>
              </div>
            </div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 820, fontSize: dealTextSize, color: TEXT,
              letterSpacing: '-0.02em', whiteSpace: 'nowrap',
              transform: `translateY(${(1 - dealClosed) * 14}px)`,
              textShadow: '0 14px 40px rgba(0,0,0,0.5)' }}>
              Deal closed
            </div>
          </div>
        </div>
      )}

      {showDraftingBridge && <div style={{ position: 'absolute', left: logoX - 380, top: logoY + markSize / 2 + 28,
        width: 760, height: 74, opacity: cooking * (1 - out),
        transform: `translateY(${(1 - bundled) * 14}px) scale(${0.94 + cooking * 0.06})`,
        transformOrigin: '50% 50%', display: 'flex',
        alignItems: 'center', justifyContent: 'center', gap: 18,
        borderRadius: 999,
        background: `linear-gradient(135deg, rgba(32,28,25,0.94) 0%, rgba(23,19,17,0.86) 100%),
          radial-gradient(circle at 18% 50%, rgba(143,191,216,${0.09 + loaderPulse * 0.08}) 0%, rgba(23,19,17,0) 46%),
          radial-gradient(circle at 82% 50%, rgba(232,101,90,${0.08 + loaderPulse * 0.07}) 0%, rgba(23,19,17,0) 44%)`,
        border: `1px solid rgba(240,168,94,${0.28 + loaderPulse * 0.24})`,
        boxShadow: `0 20px 54px rgba(0,0,0,0.36), 0 0 ${24 + loaderPulse * 28}px rgba(240,168,94,0.18), inset 0 1px 0 rgba(255,255,255,0.09)`,
        overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 34, right: 34, bottom: 12,
          height: 2, borderRadius: 99, overflow: 'hidden',
          background: 'rgba(250,250,249,0.060)' }}>
          <div style={{ width: `${Math.round((0.30 + loaderPulse * 0.50) * 100)}%`, height: '100%',
            borderRadius: 99,
            background: 'linear-gradient(90deg, #8fbfd8, #f0a85e, #e8655a)',
            boxShadow: '0 0 14px rgba(240,168,94,0.35)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12, width: 100 }}>
          {[0, 1, 2].map((i) => {
            const d = thinkingDot(i);
            return (
              <span key={i} style={{ width: 15 + i * 4, height: 15 + i * 4, borderRadius: 99,
                background: i === 0 ? '#8fbfd8' : i === 1 ? WARM : '#e8655a',
                opacity: 0.48 + d * 0.52,
                transform: `scale(${0.78 + d * 0.36})`,
                boxShadow: `0 0 ${14 + d * 22}px ${i === 0 ? 'rgba(143,191,216,0.48)' : i === 1 ? 'rgba(240,168,94,0.50)' : 'rgba(232,101,90,0.46)'}` }} />
            );
          })}
        </div>
        <span style={{ fontFamily: MONO, fontSize: 16.5,
          letterSpacing: '0.13em', textTransform: 'uppercase', fontWeight: 820,
          color: `rgba(250,250,249,${0.76 + loaderPulse * 0.16})`,
          textShadow: `0 0 ${10 + loaderPulse * 18}px rgba(240,168,94,0.22)` }}>
          KI-assistierter Angebotsentwurf wird erstellt
        </span>
      </div>}
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
    { initials: 'SA', pt: '2 PT', color: '#8fbfd8', y: 118, start: 0.08, span: 0.34 },
    { initials: 'SE', pt: '2 PT', color: WARM, y: 176, start: 0.18, span: 0.36 },
    { initials: 'PE', pt: '2 PT', color: '#e8655a', y: 234, start: 0.38, span: 0.30 },
    { initials: 'DL', pt: '1 PT', color: '#c65bb0', y: 292, start: 0.02, span: 0.22 },
  ];
  return (
    <div style={{ position: 'absolute', left: 720, top: 150, width: 920, height: 444,
      opacity: p, transform: `translate(${(1 - p) * -150}px, ${(1 - p) * 42}px) scale(${0.80 + p * 0.20})`,
      transformOrigin: '0 45%', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: 6, top: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 800,
            letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(250,250,249,0.62)' }}>Projekt</span>
          <span style={{ height: 25, borderRadius: 999, padding: '0 12px',
            display: 'inline-flex', alignItems: 'center',
            fontFamily: MONO, fontSize: 9.5, fontWeight: 820,
            letterSpacing: '0.08em', color: 'rgba(250,250,249,0.82)',
            background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.10)' }}>BANK AG / AWS-1042</span>
        </div>
        <div style={{ marginTop: 7, fontFamily: DISPLAY, fontWeight: 790,
          fontSize: 38, color: TEXT, letterSpacing: '-0.026em', lineHeight: 0.98 }}>AWS Cloud Transformation</div>
        <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 10,
          fontWeight: 820, letterSpacing: '0.11em', textTransform: 'uppercase',
          color: 'rgba(250,250,249,0.58)' }}>Einsatzplanung · Security Cloud Team</div>
      </div>
      <div style={{ position: 'absolute', right: 80, top: 16, height: 30, borderRadius: 999,
        padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: 'rgba(250,250,249,0.74)',
        background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ width: 6, height: 6, borderRadius: 99, background: '#8fbfd8',
          boxShadow: '0 0 9px rgba(143,191,216,0.34)' }} />
	        7 PT / 2 W
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
  return null;
}

function SignalTeamSceneTitles({ local }) {
  return null;
}

function SignalTeamUI({ local, showAttention = true }) {
  const signalStart = SIGNAL_START;
  const l2 = local - signalStart;
  const op = band(local, signalStart, SCENE_SOLUTION_VISUAL_END + 0.18, 0.48);
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', left: 130, right: 130, top: 196, height: 800,
      opacity: op, transform: `translateY(${(1 - op) * 20}px)`, pointerEvents: 'none', zIndex: 5 }}>
      <SignalTeamSceneTitles local={l2} />
      <SignalGraphPanel local={l2} showAttention={showAttention} />
      <TeamSlicePanel local={l2} />
      <TeamMorphModules local={l2} showAttention={showAttention} />
    </div>
  );
}

function SignalTeamAttentionOverlay({ local }) {
  const signalStart = SIGNAL_START;
  const l2 = local - signalStart;
  const op = band(local, signalStart, SCENE_SOLUTION_VISUAL_END + 0.18, 0.48);
  if (op <= 0.001) return null;
  const expand = Easing.easeInOutCubic(clamp((l2 - SIGNAL_TEAM_PREVIEW_START) / 2.35, 0, 1));
  const signalOnlyFade = (1 - expand * 0.92) * (1 - rise(l2, SIGNAL_TEAM_PREVIEW_START - 0.08, 0.42));
  if (signalOnlyFade <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', left: 130, right: 130, top: 196, height: 800,
      opacity: op, pointerEvents: 'none', zIndex: 56, overflow: 'visible' }}>
      <SignalAttentionGrabbers local={l2} fade={signalOnlyFade} />
    </div>
  );
}

function ConsultingOSExplainer({ local }) {
  const op = 1 - rise(local, OS_EXPLAINER_EXIT - 0.68, 0.68);
  if (op <= 0.001) return null;
  const l = local - OS_EXPLAINER_START;
  const exit = rise(local, OS_EXPLAINER_EXIT - 0.68, 0.68);
  const line1 = 1;
  const textLine = (text, p, top, warm = false) => (
    <div style={{ position: 'absolute', left: 230, right: 230, top,
      textAlign: 'center', fontFamily: DISPLAY, fontWeight: 800,
      fontSize: warm ? 72 : 78, lineHeight: 1.02, letterSpacing: '-0.028em',
      opacity: p, transform: `translateY(${-exit * 18}px)`,
      color: warm ? APP_ACCENT : TEXT,
      textShadow: '0 8px 34px rgba(0,0,0,0.42)' }}>
      {text}
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op,
      pointerEvents: 'none' }}>
      {/* jules: "Consulting Intelligence" eyebrow removed */}
      {textLine('Senior-Zeit gehört zum Kunden.', line1, 348)}
    </div>
  );
}

function SceneSolutionAppContent({ local }) {
  const eb = rise(local, 7.35 - OPENING_SEQUENCE_CUT, 0.6);
  return (
    <>
      <SignalTeamUI local={local} showAttention={false} />
      <Chapter n={2} label="Die Plattform" op={eb} />
    </>
  );
}

function SceneSolutionOverlays({ local }) {
  // Keep the 7s-25s signal/team sequence inside the shared app shell; the
  // signal analysis detail now lives in the app viewport instead of a floating overlay.
  return null;
}

function SceneSolution(local) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'transparent', overflow: 'hidden' }}>
      <AppViewportChild zIndex={8}>
        <SceneSolutionAppContent local={local} />
      </AppViewportChild>
      <SceneSolutionOverlays local={local} />
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
                stroke={APP_LINE_STRONG} strokeWidth="8" strokeLinecap="round" />
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
            background: APP_RAISED,
            border: `1px solid ${item.color}42`,
            boxShadow: `0 18px 40px rgba(45,38,32,0.12), 0 0 18px ${item.color}18` }}>
            <Icon name={item.icon} size={Math.max(16, size * 0.42)} color={item.color} sw={1.9} />
          </div>
        );
      })}

      <div style={{ position: 'absolute', left: cx - 176 * scale, top: cy - 116 * scale,
        width: 352 * scale, height: 232 * scale, borderRadius: 40 * scale,
        transform: `translateY(${(1 - enter) * 18}px) scale(${0.96 + reveal * 0.04})`,
        transformOrigin: '50% 50%',
        background: APP_SURFACE,
        border: '1px solid rgba(240,168,94,0.28)',
        boxShadow: APP_PANEL_SHADOW }}>
        <div style={{ position: 'absolute', left: '50%', top: 28 * scale, width: 94 * scale, height: 94 * scale,
          borderRadius: 28 * scale, transform: 'translateX(-50%)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: APP_RAISED,
          border: `1px solid ${APP_LINE_STRONG}` }}>
          <Icon name="briefcase" size={40 * scale} color={APP_TEXT} sw={1.8} />
          <div style={{ position: 'absolute', right: -8 * scale, bottom: -8 * scale,
            width: 40 * scale, height: 40 * scale, borderRadius: 13 * scale,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: APP_SURFACE, border: '1px solid rgba(143,191,216,0.35)' }}>
            <Icon name="azure" size={24 * scale} color="#8fbfd8" sw={1.8} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: 26 * scale, right: 26 * scale, top: 142 * scale,
          textAlign: 'center' }}>
          <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 31 * scale,
            lineHeight: 1.02, color: APP_TEXT, letterSpacing: '-0.018em' }}>
            AWS Transformation · Bank AG
          </div>
          <div style={{ marginTop: 10 * scale, fontFamily: MONO, fontSize: 10.4 * scale,
            textTransform: 'uppercase', letterSpacing: '0.16em', color: APP_MUTED }}>
            Projektpaket
          </div>
        </div>
        <div style={{ position: 'absolute', left: 34 * scale, right: 34 * scale,
          bottom: 20 * scale, height: 3 * scale, borderRadius: 999, overflow: 'hidden',
          background: APP_LINE }}>
          <div style={{ width: `${Math.round(reveal * 100)}%`, height: '100%',
            borderRadius: 999, background: 'linear-gradient(90deg, #8fbfd8, #f0a85e, #e8655a)' }} />
        </div>
      </div>

      <div style={{ position: 'absolute', left: cx - 210, top: cy + 148 * scale, width: 420,
        opacity: orbit * (1 - handoff), textAlign: 'center',
        transform: `translateY(${(1 - orbit) * 10}px)` }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: APP_MUTED }}>
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
    background: APP_RAISED,
    border: `1px solid ${color}${active > 0.01 ? '72' : '34'}`,
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.64), 0 0 ${active * 20}px ${color}2f`,
  };
  const line = (left, top, width, height = 4, opacity = 0.36) => (
    <span style={{ position: 'absolute', left, top, width, height, borderRadius: 999,
      background: color, opacity }} />
  );

  if (type === 'code') {
    return (
      <div style={base}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 18,
          background: APP_SURFACE, borderBottom: `1px solid ${APP_LINE}` }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ position: 'absolute', left: 10 + i * 10, top: 7,
              width: 5, height: 5, borderRadius: 99, background: i === 1 ? color : APP_FAINT }} />
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
          <path d="M24 50 H72" fill="none" stroke={APP_LINE_STRONG} strokeWidth="1.2"
            strokeLinecap="round" />
          {[{ x: 24, y: 50 }, { x: 46, y: 24 }, { x: 72, y: 42 }].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="6.2" fill={APP_SURFACE}
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
          borderRadius: 10, background: APP_SURFACE,
          border: `1px solid ${APP_LINE}` }}>
          {line(10, 11, 30, 3, 0.36)}
          {line(10, 22, 22, 3, 0.24)}
          {line(10, 33, 32, 3, 0.20)}
        </div>
        <div style={{ position: 'absolute', right: 12, top: 14, bottom: 14, width: 2,
          borderRadius: 99, background: APP_LINE_STRONG }} />
        {[18, 36, 54].map((top, i) => (
          <span key={i} style={{ position: 'absolute', right: 8, top, width: 10, height: 10,
            borderRadius: 99, background: i === 1 ? color : APP_FAINT,
            boxShadow: i === 1 ? `0 0 10px ${color}66` : 'none' }} />
        ))}
      </div>
    );
  }

  return (
    <div style={base}>
      {[0, 1, 2].map((col) => (
        <div key={col} style={{ position: 'absolute', left: 12 + col * 27, top: 14, width: 20,
          height: 46, borderRadius: 9, background: APP_SURFACE,
          border: `1px solid ${APP_LINE}` }}>
          <span style={{ position: 'absolute', left: 5, top: 7, width: 10, height: 10,
            borderRadius: 4, background: col === 1 ? color : APP_FAINT,
            opacity: col === 1 ? 0.64 + active * 0.18 : 0.46 }} />
          <span style={{ position: 'absolute', left: 5, top: 24, width: 10, height: 4,
            borderRadius: 99, background: APP_LINE_STRONG }} />
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
  const absoluteTime = SCENE_VERTRIEB_START + local;
  const workflowCanvasWindow = band(absoluteTime, WORKFLOW_CANVAS_UI_START, WORKFLOW_CANVAS_UI_END, 0.42);
  const contextLayout = Easing.easeInOutCubic(
    clamp((local - (WORK_PROMPT_VISUAL_START - 0.28 - PROJECT_CONTEXT_SHRINK_LEAD)) / 1.18, 0, 1)
  );
  const doc = 0; // detailed draft/integration reveal is now reserved for the post-Wissen payoff
  const flow = rise(l, 1.9, 1.25);
  const contextNodes = [
    { k: 'Konzepte', icon: 'search', mock: 'concept', color: '#8fbfd8', x: -16, y: 32, w: 326, h: 116, ax: 310, ay: 90, t: 0.62 },
    { k: 'Code', icon: 'file', mock: 'code', color: WARM, x: 372, y: 32, w: 326, h: 116, ax: 372, ay: 90, t: 0.86 },
    { k: 'Risiko', icon: 'clock', mock: 'risk', color: '#e8655a', x: -16, y: 392, w: 326, h: 116, ax: 310, ay: 450, t: 1.10 },
    { k: 'Scope', icon: 'briefcase', mock: 'scope', color: '#c65bb0', x: 372, y: 392, w: 326, h: 116, ax: 372, ay: 450, t: 1.34 },
  ];
  const inlineLayout = Easing.easeInOutCubic(clamp((contextLayout - 0.18) / 0.82, 0, 1));
  const layoutContextNode = (node) => {
    if (node.k === 'Risiko') {
      return {
        ...node,
        x: mix(node.x, -382, inlineLayout),
        y: mix(node.y, 30, inlineLayout),
        ax: mix(node.ax, -82, inlineLayout),
        ay: mix(node.ay, 82, inlineLayout),
      };
    }
    if (node.k === 'Scope') {
      return {
        ...node,
        x: mix(node.x, 764, inlineLayout),
        y: mix(node.y, 30, inlineLayout),
        ax: mix(node.ax, 764, inlineLayout),
        ay: mix(node.ay, 82, inlineLayout),
      };
    }
    return node;
  };
  const laidOutContextNodes = contextNodes.map(layoutContextNode);
  const contextConsume = rise(local, WORK_PROMPT_VISUAL_START + PROMPT_BRIDGE_COLLECT_OFFSET + 0.36, 1.18);
  const contextKeep = 1 - contextConsume;
  const contextActive = band(local, WORK_PROMPT_VISUAL_START + PROMPT_BRIDGE_COLLECT_OFFSET + 0.36, WORK_PROMPT_VISUAL_START + PROMPT_BRIDGE_COLLECT_OFFSET + 1.66, 0.34);
  const sidebarIn = rise(l, 2.18, 0.52);
  const promptDraftTakeover = rise(local, WORK_PROMPT_START - 0.08, 0.42);
  const docLines = [0.58, 0.46, 0.64, 0.52];
  const draftRows = [
    { label: 'Analyse', color: '#8fbfd8', w: 0.64 },
    { label: 'Risiko', color: '#e8655a', w: 0.50 },
  ];
  const promptDraftText = 'Bereite mir das Status-Meeting mit BankAG vor';
  const referenceItems = [
    { label: 'Projektkontext', meta: 'Bank AG', icon: 'briefcase', color: '#74c69d' },
    { label: 'Security Scope', meta: 'IAM / GuardDuty', icon: 'shield', color: '#8fbfd8' },
    { label: 'Risiko Review', meta: 'DORA / BaFin', icon: 'clock', color: '#e8655a' },
  ];
  const commentThreads = [
    { author: 'Consultry Intelligence', text: 'Projektpaket analysiert. Meeting-Fragen, Risiken und nächste Schritte sind ableitbar.', color: '#8fbfd8' },
    { author: 'Lena', text: 'Bitte Status-Meeting mit BankAG vorbereiten und die offenen Security-Punkte priorisieren.', color: WARM },
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
                  fill="none" stroke={APP_LINE_STRONG} strokeWidth="14" strokeLinecap="round" />
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
          left: mix(470, 560, contextLayout), top: mix(158, 416, contextLayout), width: 802, height: 714,
          padding: '42px 50px', boxSizing: 'border-box', opacity: shell,
          transform: `translateX(${(1 - shell) * -34}px) scale(${mix(1.60, 0.76, contextLayout) * (0.985 + shell * 0.015)})`,
          transformOrigin: '50% 46%',
          background: 'transparent', border: 'none', boxShadow: 'none',
          backdropFilter: 'none', WebkitBackdropFilter: 'none', overflow: 'visible' }}>
          <div style={{ position: 'absolute', left: -80, bottom: -120, width: 290, height: 290,
            opacity: 0, background: 'transparent' }} />
          <div style={{ position: 'absolute', right: -70, top: 90, width: 260, height: 260,
            opacity: 0, background: 'transparent' }} />
          {!hideProjectBundle && workflowCanvasWindow > 0.001 && (
          <div style={{ position: 'absolute', left: 50, top: 112, width: 682, height: 536,
            opacity: workflowCanvasWindow }}>
            <div style={{ position: 'absolute', left: -150, top: -92, width: 982, height: 720,
              opacity: contextKeep * (0.44 + contextActive * 0.28),
              transform: `scale(${1 + contextActive * 0.055 - contextConsume * 0.028})`,
              transformOrigin: '50% 50%',
              filter: contextConsume > 0.01 ? `blur(${contextConsume * 0.9}px)` : 'none',
              pointerEvents: 'none' }}>
              <svg width="982" height="720" viewBox="0 0 982 720"
                style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
                <defs>
                  <radialGradient id="project-canvas-focus" cx="50%" cy="50%" r="56%">
                    <stop offset="0" stopColor="rgba(116,198,157,0.18)" />
                    <stop offset="0.48" stopColor="rgba(143,191,216,0.08)" />
                    <stop offset="1" stopColor="rgba(143,191,216,0)" />
                  </radialGradient>
                </defs>
                <ellipse cx="491" cy="364" rx="402" ry="272" fill="url(#project-canvas-focus)" opacity="0" />
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <line key={`canvas-v-${i}`} x1={68 + i * 92} y1="54" x2={68 + i * 92} y2="664"
                    stroke={APP_CANVAS_GRID} strokeWidth="1" opacity="0.62" />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <line key={`canvas-h-${i}`} x1="42" y1={72 + i * 78} x2="938" y2={72 + i * 78}
                    stroke={APP_CANVAS_GRID} strokeWidth="1" opacity="0.62" />
                ))}
                <circle cx="491" cy="360" r="286" fill="none" stroke="rgba(116,198,157,0.15)"
                  strokeWidth="1.4" strokeDasharray="10 22" opacity="0" />
                <circle cx="491" cy="360" r="210" fill="none" stroke="rgba(143,191,216,0.14)"
                  strokeWidth="1.2" strokeDasharray="18 28" opacity="0" />
              </svg>
            </div>
            <svg width="682" height="536" viewBox="0 0 682 536"
              style={{ position: 'absolute', inset: 0, overflow: 'visible', opacity: contextKeep * (0.34 + contextActive * 0.34),
                filter: contextConsume > 0.01 ? `blur(${contextConsume * 1.0}px)` : 'none' }}>
              <defs>
                <linearGradient id="consultant-context-flow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8fbfd8" />
                  <stop offset="0.52" stopColor="#f0a85e" />
                  <stop offset="1" stopColor="#e8655a" />
                </linearGradient>
              </defs>
              {laidOutContextNodes.map((node, i) => {
                const p = rise(l, node.t, 0.78);
                const ex = node.ax - 341, ey = node.ay - 268;
                const len = Math.max(1, Math.hypot(ex, ey));
                const ux = ex / len, uy = ey / len;
                return (
                  <g key={`${node.k}-line`} opacity={p}>
                    <line x1={341 + ux * 150} y1={268 + uy * 150} x2={node.ax} y2={node.ay}
                      stroke={node.color} strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.42" />
                    <circle cx={341 + ux * 150} cy={268 + uy * 150} r="3.2" fill="#3fa376" opacity="0.85" />
                    <circle cx={node.ax} cy={node.ay} r="3.2" fill={node.color} opacity="0.92" />
                  </g>
                );
              })}
            </svg>

            <div style={{ position: 'absolute', left: -12, top: 198, width: 706, height: 178,
              padding: '22px 38px 20px', boxSizing: 'border-box', opacity: contextKeep,
              transform: `scale(${1 + contextActive * 0.03 - contextConsume * 0.04})`,
              transformOrigin: '50% 50%',
              filter: contextConsume > 0.01 ? `blur(${contextConsume * 1.1}px)` : 'none',
              borderRadius: 24,
              background: APP_SURFACE,
              border: `2px solid rgba(116,198,157,${0.42 + contextActive * 0.18})`,
              boxShadow: `0 28px 78px rgba(45,38,32,0.13), 0 0 ${20 + contextActive * 18}px rgba(116,198,157,0.14), inset 0 1px 0 rgba(255,255,255,0.74)` }}>
              <div style={{ position: 'absolute', left: -64, top: -82, width: 834, height: 350,
                borderRadius: 999, opacity: 0,
                background: 'transparent' }} />
              {[[-7, -7], [693, -7], [-7, 165], [693, 165]].map(([x, y], i) => (
                <span key={`project-handle-${i}`} style={{ position: 'absolute', left: x, top: y,
                  width: 14, height: 14, borderRadius: 4, background: APP_SURFACE,
                  border: '2px solid rgba(116,198,157,0.74)',
                  boxShadow: '0 6px 16px rgba(45,38,32,0.10)' }} />
              ))}
              <div style={{ position: 'absolute', right: 18, top: 16, height: 24, borderRadius: 999,
                padding: '0 10px', display: 'inline-flex', alignItems: 'center', gap: 7,
                fontFamily: MONO, fontSize: 8.4, fontWeight: 780, letterSpacing: '0.10em',
                textTransform: 'uppercase', color: '#3f7b56',
                background: '#e5f4e9', border: '1px solid rgba(116,198,157,0.32)' }}>
                <span style={{ width: 6, height: 6, borderRadius: 99, background: '#74c69d' }} />
                Selected
              </div>
              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '88px 1fr',
                columnGap: 24, alignItems: 'center' }}>
                <svg width="86" height="86" viewBox="0 0 86 86" style={{ display: 'block', overflow: 'visible',
                  filter: 'drop-shadow(0 12px 28px rgba(127,220,166,0.22))' }}>
                  <circle cx="43" cy="43" r="38" fill="rgba(127,220,166,0.075)"
                    stroke="rgba(127,220,166,0.28)" />
                  <circle cx="43" cy="43" r="25" fill={APP_SURFACE}
                    stroke="rgba(127,220,166,0.22)" />
                  <path d="M30 37v-5c0-4 3-7 7-7h12c4 0 7 3 7 7v5" fill="none"
                    stroke="#7fdca6" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="24" y="37" width="38" height="25" rx="7" fill="rgba(127,220,166,0.10)"
                    stroke="#7fdca6" strokeWidth="4.4" />
                  <path d="M24 47h38" fill="none" stroke="#7fdca6" strokeWidth="3.4" opacity="0.78" />
                  <circle cx="43" cy="47" r="3.4" fill="#7fdca6" />
                </svg>
                <div style={{ minWidth: 0, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'rgba(143,191,216,0.76)' }}>Projektkontext</span>
                    <span style={{ height: 23, padding: '0 9px', borderRadius: 999,
                      display: 'inline-flex', alignItems: 'center',
                      fontFamily: MONO, fontSize: 9.2, fontWeight: 760, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: APP_MUTED,
                      background: APP_RAISED,
                      border: `1px solid ${APP_LINE}` }}>Bank AG</span>
                  </div>
                  <div style={{ fontFamily: DISPLAY, fontWeight: 795, fontSize: 40,
                    lineHeight: 0.98, color: APP_TEXT, letterSpacing: '-0.018em',
                    whiteSpace: 'nowrap' }}>AWS Transformation</div>
                </div>
              </div>
              <div style={{ position: 'absolute', left: 28, right: 28, bottom: 17, height: 3,
                borderRadius: 999,
                background: '#74c69d',
                opacity: 0.68 }} />
            </div>

            {false && (
            <div style={{ position: 'absolute', left: 744, top: 56, width: 354, height: 478,
              borderRadius: 24, padding: 16, boxSizing: 'border-box', overflow: 'hidden',
              opacity: contextKeep * sidebarIn * (1 - promptDraftTakeover * 0.46),
              transform: `translateX(${(1 - sidebarIn) * 34}px) scale(${0.986 + sidebarIn * 0.014})`,
              transformOrigin: '0 50%',
              background: APP_SURFACE,
              border: `1px solid ${APP_LINE_STRONG}`,
              boxShadow: '0 26px 76px rgba(45,38,32,0.16), inset 0 1px 0 rgba(255,255,255,0.78)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
                gap: 12, paddingBottom: 12, borderBottom: `1px solid ${APP_LINE}` }}>
                <div style={{ minWidth: 0 }}>
                  <div style={appTyped({ fontSize: 13.5, fontWeight: 820, color: APP_TEXT })}>
                    Kommentarverlauf
                  </div>
                  <div style={{ marginTop: 4, display: 'flex', gap: 12 }}>
                    {['Chat', 'Historie'].map((tab, i) => (
                      <span key={tab} style={appTyped({ fontSize: 9.8, fontWeight: 780,
                        color: i === 0 ? APP_TEXT : APP_FAINT,
                        letterSpacing: '0.11em', textTransform: 'uppercase' })}>
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ height: 28, borderRadius: 999, display: 'inline-flex',
                  alignItems: 'center', gap: 7, padding: '0 10px',
                  background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.30)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: 99, background: '#74c69d' }} />
                  <span style={appTyped({ fontSize: 10.5, fontWeight: 780, color: '#3f7b56' })}>
                    Live
                  </span>
                </span>
              </div>

              <div style={{ marginTop: 14, height: 72, borderRadius: 17,
                padding: '12px 14px', boxSizing: 'border-box',
                display: 'grid', gridTemplateColumns: '32px 1fr', gap: 11, alignItems: 'center',
                opacity: 1 - promptDraftTakeover * 0.82,
                transform: `translateY(${-promptDraftTakeover * 5}px)`,
                background: APP_RAISED,
                border: `1px solid rgba(240,168,94,${0.30 + contextActive * 0.16})`,
                boxShadow: `0 0 ${12 + contextActive * 18}px rgba(240,168,94,${0.08 + contextActive * 0.08}), inset 0 1px 0 rgba(255,255,255,0.70)` }}>
                <span style={{ width: 32, height: 32, borderRadius: 11,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(240,168,94,0.14)',
                  border: '1px solid rgba(240,168,94,0.34)' }}>
                  <Icon name="sparkles" size={17} color={WARM} sw={1.9} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={appTyped({ fontSize: 9.5, fontWeight: 800, color: APP_FAINT,
                    letterSpacing: '0.13em', textTransform: 'uppercase' })}>
                    Prompt Entwurf
                  </div>
                  <div style={{ marginTop: 6, ...appTyped({ fontSize: 13.5, fontWeight: 760,
                    color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                    {promptDraftText}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
                {commentThreads.map((item, i) => (
                  <div key={item.author} style={{ borderRadius: 16, padding: '12px 13px',
                    boxSizing: 'border-box',
                    background: i === 0 ? '#ffffff' : APP_RAISED,
                    border: `1px solid ${APP_LINE}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 99, background: item.color,
                        boxShadow: `0 0 10px ${item.color}66` }} />
                      <span style={appTyped({ fontSize: 11.5, fontWeight: 820, color: APP_TEXT })}>
                        {item.author}
                      </span>
                      <span style={{ marginLeft: 'auto', ...appTyped({ fontSize: 9.2, fontWeight: 760,
                        color: APP_FAINT, letterSpacing: '0.08em', textTransform: 'uppercase' }) }}>
                        gerade
                      </span>
                    </div>
                    <div style={{ marginTop: 8, ...appTyped({ fontSize: 11.7, lineHeight: 1.28,
                      fontWeight: 560, color: APP_MUTED }) }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={appTyped({ fontSize: 9.8, fontWeight: 820, color: APP_FAINT,
                  letterSpacing: '0.12em', textTransform: 'uppercase' })}>
                  Referenzen
                </div>
                <div style={{ marginTop: 9, display: 'grid', gap: 8 }}>
                  {referenceItems.map((item) => (
                    <div key={item.label} style={{ height: 40, borderRadius: 13,
                      display: 'grid', gridTemplateColumns: '30px 1fr auto', alignItems: 'center',
                      gap: 9, padding: '0 11px', boxSizing: 'border-box',
                      background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                      <span style={{ width: 28, height: 28, borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `${item.color}16`, border: `1px solid ${item.color}3d` }}>
                        <Icon name={item.icon} size={15} color={item.color} sw={1.85} />
                      </span>
                      <span style={appTyped({ fontSize: 11.8, fontWeight: 780, color: APP_TEXT,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                        {item.label}
                      </span>
                      <span style={appTyped({ fontSize: 9.8, fontWeight: 760, color: APP_FAINT,
                        whiteSpace: 'nowrap' })}>
                        {item.meta}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14,
                height: 42, borderRadius: 999, display: 'grid', gridTemplateColumns: '1fr 70px',
                alignItems: 'center', gap: 8, padding: '0 7px 0 15px',
                boxSizing: 'border-box',
                background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}` }}>
                <span style={appTyped({ fontSize: 11.4, fontWeight: 620, color: APP_FAINT })}>
                  Änderung oder Frage eingeben...
                </span>
                <span style={{ height: 30, borderRadius: 999, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: APP_TEXT, border: `1px solid ${APP_TEXT}` }}>
                  <span style={appTyped({ fontSize: 11.2, fontWeight: 820, color: APP_SURFACE })}>
                    Senden
                  </span>
                </span>
              </div>
            </div>
            )}

            {laidOutContextNodes.map((node) => {
              const p = rise(l, node.t + 0.12, 0.62);
              const active = contextActive;
              return (
                <div key={node.k} style={{ position: 'absolute', left: node.x, top: node.y,
                  width: node.w, height: node.h, borderRadius: 16, padding: '15px 18px',
                  boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '60px 1fr',
                  alignItems: 'center', columnGap: 16,
                  opacity: p * contextKeep,
                  transform: `translateY(${(1 - p) * 10 - active * 8}px) scale(${1 + active * 0.03 - contextConsume * 0.045})`,
                  transformOrigin: node.x < 300 ? '100% 50%' : '0 50%',
                  filter: contextConsume > 0.01 ? `blur(${contextConsume * 1.05}px)` : 'none',
                  background: '#ffffff',
                  border: `1px solid ${active > 0.01 ? node.color + '55' : APP_LINE}`,
                  boxShadow: `0 12px 30px rgba(45,38,32,0.09), inset 0 1px 0 rgba(255,255,255,0.68), 0 0 ${active * 16}px ${node.color}26` }}>
                  <span style={{ position: 'absolute', left: node.x < 300 ? 'auto' : -6,
                    right: node.x < 300 ? -6 : 'auto', top: '50%', width: 11, height: 11,
                    borderRadius: 99, transform: 'translateY(-50%)',
                    background: node.color, border: '2px solid #ffffff',
                    boxShadow: `0 0 8px ${node.color}66` }} />
                  <div style={{ position: 'absolute', right: 12, top: 12, display: 'grid',
                    gridTemplateColumns: 'repeat(3, 2.5px)', gap: 2.6, opacity: 0.42 }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dot) => (
                      <span key={dot} style={{ width: 2.5, height: 2.5, borderRadius: 99,
                        background: APP_FAINT }} />
                    ))}
                  </div>
                  <span style={{ width: 54, height: 54, borderRadius: 15, justifySelf: 'center',
                    display: 'grid', placeItems: 'center', background: `${node.color}1f`,
                    border: `1px solid ${node.color}3a` }}>
                    <Icon name={node.icon} size={26} color={node.color} sw={1.9} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 25,
                      lineHeight: 1.02, color: APP_TEXT, letterSpacing: '-0.012em',
                      whiteSpace: 'nowrap' }}>{node.k}</div>
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
                  fill="none" stroke={APP_LINE_STRONG} strokeWidth="9" strokeLinecap="round" />
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
              background: APP_SURFACE,
              border: `1px solid ${item.color}44`,
              boxShadow: `0 18px 44px rgba(45,38,32,0.13), 0 0 18px ${item.color}1d`,
              display: 'grid', gridTemplateColumns: '46px 1fr', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 46, height: 46, borderRadius: 15, display: 'flex', alignItems: 'center',
                justifyContent: 'center', background: `${item.color}18`, border: `1px solid ${item.color}36` }}>
                <img src={item.src} alt="" style={{ width: item.label === 'Word' ? 33 : 27, height: item.label === 'Word' ? 33 : 27,
                  objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: DISPLAY, fontWeight: 760, fontSize: item.label === 'Confluence' ? 20 : 22,
                  lineHeight: 1, color: APP_TEXT, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                  {item.label}
                </div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 7, height: 7, borderRadius: 99, background: item.color,
                    boxShadow: `0 0 9px ${item.color}88` }} />
                  <span style={{ fontFamily: MONO, fontSize: 10.4, letterSpacing: '0.11em',
                    textTransform: 'uppercase', color: APP_MUTED }}>{item.meta}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function offerEditSidebarState(local) {
  const absoluteTime = SCENE_VERTRIEB_START + local;
  const dockIn = rise(local, WORK_PROMPT_PANEL_START, 0.56);
  const windowOn = band(absoluteTime, WORKFLOW_CANVAS_UI_START + 0.18, WORKFLOW_CANVAS_UI_END - 0.22, 0.40);
  const promptTakeover = rise(local, WORK_PROMPT_VISUAL_START + 0.12, 0.34);
  const promptBarIn = rise(local, WORK_PROMPT_PANEL_START + 0.20, 0.42);
  const promptSelected = band(local, WORK_PROMPT_SELECT_START - 0.08, WORK_PROMPT_VISUAL_START + 0.24, 0.20);
  return {
    dockIn,
    windowOn,
    promptTakeover,
    promptBarIn,
    promptSelected,
    visible: dockIn * windowOn * (1 - promptTakeover),
  };
}

function VertriebEditSidebar({ local, state = offerEditSidebarState(local) }) {
  const { dockIn, visible: op, promptBarIn, promptSelected } = state;
  if (op <= 0.001) return null;

  const contextActive = band(local, WORK_PROMPT_PANEL_START, WORK_PROMPT_VISUAL_START + 0.58, 0.34);
  const promptText = 'Bereite mir das Status-Meeting mit BankAG vor';
  const nextActions = [
    { kind: 'Lösen', text: 'IAM-Findings schließen', meta: '2 offen · GuardDuty', icon: 'shield', color: '#e8655a' },
    { kind: 'Abrufen', text: 'Security Baseline & Scope', meta: 'Projektakte · v3', icon: 'file', color: '#8fbfd8' },
    { kind: 'Planen', text: 'Status-Meeting vorbereiten', meta: 'Agenda-Entwurf bereit', icon: 'calendar', color: WARM },
  ];
  const referenceItems = [
    { label: 'Projektkontext', meta: 'Bank AG', icon: 'briefcase', color: '#74c69d' },
    { label: 'Security Scope', meta: 'IAM / GuardDuty', icon: 'shield', color: '#8fbfd8' },
  ];
  const contextMeetings = [
    { day: 'DO', date: '12', title: 'Status-Meeting · Bank AG', meta: '10:00 – 10:45 · Teams · mit Lena & Max', badge: 'in 2 Tagen', highlight: true },
    { day: 'FR', date: '13', title: 'Security Review · IAM Findings', meta: '14:00 · intern', highlight: false },
  ];

  return (
    <div style={{ position: 'absolute',
      left: OFFER_EDIT_SIDEBAR.x - 24, top: OFFER_EDIT_SIDEBAR.y + 22,
      width: OFFER_EDIT_SIDEBAR.w, height: OFFER_EDIT_SIDEBAR.h - 64,
      opacity: op,
      transform: `translateX(${(1 - dockIn) * 240}px)`,
      boxSizing: 'border-box',
      background: APP_SURFACE,
      borderRadius: 20,
      border: `1px solid ${APP_LINE_STRONG}`,
      boxShadow: '-18px 0 40px rgba(45,38,32,0.10)',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 34 }}>

      <div style={{ position: 'absolute', left: 26, right: 26, top: 24, height: 60,
        display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
        borderBottom: `1px solid ${APP_LINE}` }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={appTyped({ fontSize: 10.4, fontWeight: 840, color: APP_FAINT,
              letterSpacing: '0.13em', textTransform: 'uppercase' })}>
              Ausgewählt
            </span>
            <span style={{ height: 19, borderRadius: 999, padding: '0 8px',
              display: 'inline-flex', alignItems: 'center',
              fontFamily: MONO, fontSize: 8.6, fontWeight: 820, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: APP_MUTED,
              background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
              Bank AG
            </span>
          </div>
          <div style={{ marginTop: 6, ...appTyped({ fontSize: 17.5, fontWeight: 820, color: APP_TEXT,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
            AWS Transformation
          </div>
        </div>
        <span style={{ height: 30, borderRadius: 999, display: 'inline-flex',
          alignItems: 'center', gap: 7, padding: '0 11px',
          background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.30)' }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: '#74c69d' }} />
          <span style={appTyped({ fontSize: 10.5, fontWeight: 780, color: '#3f7b56' })}>
            Selected
          </span>
        </span>
      </div>

      <div style={{ position: 'absolute', left: 26, right: 26, top: 116 }}>
        <div style={appTyped({ fontSize: 11.2, fontWeight: 820, color: APP_FAINT,
          letterSpacing: '0.12em', textTransform: 'uppercase' })}>
          Als Nächstes relevant
        </div>
        <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          {nextActions.map((action) => (
            <div key={action.kind} style={{ height: 64, borderRadius: 15,
              display: 'grid', gridTemplateColumns: '42px 1fr auto', alignItems: 'center', gap: 13,
              padding: '0 15px', boxSizing: 'border-box',
              background: '#ffffff', border: `1px solid ${APP_LINE}`,
              boxShadow: `inset 2px 0 0 ${action.color}66` }}>
              <span style={{ width: 40, height: 40, borderRadius: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${action.color}14`, border: `1px solid ${action.color}38` }}>
                <Icon name={action.icon} size={19} color={action.color} sw={1.85} />
              </span>
              <span style={{ minWidth: 0 }}>
                <div style={appTyped({ fontSize: 13.8, fontWeight: 810, color: APP_TEXT,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                  {action.text}
                </div>
                <div style={{ marginTop: 4, ...appTyped({ fontSize: 11.2, fontWeight: 680,
                  color: APP_FAINT, whiteSpace: 'nowrap' }) }}>
                  {action.meta}
                </div>
              </span>
              <span style={{ height: 24, borderRadius: 999, padding: '0 10px',
                display: 'inline-flex', alignItems: 'center',
                fontFamily: MONO, fontSize: 9.4, fontWeight: 840, letterSpacing: '0.10em',
                textTransform: 'uppercase', color: action.color,
                background: `${action.color}12`, border: `1px solid ${action.color}30` }}>
                {action.kind}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', left: 26, right: 26, top: 388 }}>
        <div style={appTyped({ fontSize: 11.2, fontWeight: 820, color: APP_FAINT,
          letterSpacing: '0.12em', textTransform: 'uppercase' })}>
          Kontext · Kalender & Projekt
        </div>
        <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          {contextMeetings.map((meeting) => (
            <div key={meeting.title} style={{ height: meeting.highlight ? 70 : 54, borderRadius: 15,
              display: 'grid', gridTemplateColumns: '50px 1fr auto', alignItems: 'center', gap: 13,
              padding: '0 13px', boxSizing: 'border-box',
              background: meeting.highlight ? '#fff8ef' : APP_RAISED,
              border: `1px solid ${meeting.highlight ? 'rgba(240,168,94,0.44)' : APP_LINE}` }}>
              <span style={{ height: meeting.highlight ? 50 : 40, borderRadius: 12,
                display: 'grid', alignContent: 'center', justifyItems: 'center',
                background: '#ffffff',
                border: `1px solid ${meeting.highlight ? 'rgba(240,168,94,0.40)' : APP_LINE_STRONG}` }}>
                <span style={appTyped({ fontSize: 8.4, fontWeight: 840,
                  color: meeting.highlight ? WARM : APP_FAINT, letterSpacing: '0.10em' })}>
                  {meeting.day}
                </span>
                <span style={appTyped({ fontSize: meeting.highlight ? 17 : 14, fontWeight: 860, color: APP_TEXT })}>
                  {meeting.date}
                </span>
              </span>
              <span style={{ minWidth: 0 }}>
                <div style={appTyped({ fontSize: meeting.highlight ? 13.8 : 13, fontWeight: 820, color: APP_TEXT,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
                  {meeting.title}
                </div>
                <div style={{ marginTop: 4, ...appTyped({ fontSize: 11.2, fontWeight: 680,
                  color: meeting.highlight ? APP_MUTED : APP_FAINT, whiteSpace: 'nowrap',
                  overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                  {meeting.meta}
                </div>
              </span>
              {meeting.badge ? (
                <span style={{ height: 24, borderRadius: 999, padding: '0 9px',
                  display: 'inline-flex', alignItems: 'center',
                  background: 'rgba(240,168,94,0.16)', border: '1px solid rgba(240,168,94,0.30)',
                  ...appTyped({ fontSize: 9.6, fontWeight: 820, color: '#9a6a2e' }) }}>
                  {meeting.badge}
                </span>
              ) : (
                <Icon name="calendar" size={15} color={APP_FAINT} sw={1.8} />
              )}
            </div>
          ))}
          <div style={{ borderRadius: 15, padding: '13px 16px 15px', boxSizing: 'border-box',
            display: 'none',
            background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={appTyped({ fontSize: 12, fontWeight: 820, color: APP_TEXT })}>Projekt-Timeline</span>
              <span style={appTyped({ fontSize: 10.4, fontWeight: 760, color: APP_FAINT })}>Woche 2 von 4</span>
            </div>
            <div style={{ position: 'relative', marginTop: 14, height: 6, borderRadius: 999,
              background: 'rgba(45,38,32,0.10)' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '38%',
                borderRadius: 999, background: WARM, opacity: 0.85 }} />
              {[{ p: 0, color: '#74c69d' }, { p: 0.62, color: WARM }, { p: 1, color: APP_FAINT }].map((dot, i) => (
                <span key={`timeline-dot-${i}`} style={{ position: 'absolute',
                  left: `${dot.p * 100}%`, top: '50%', width: 11, height: 11, borderRadius: 99,
                  transform: 'translate(-50%, -50%)',
                  background: '#ffffff', border: `2.4px solid ${dot.color}`, boxSizing: 'border-box' }} />
              ))}
            </div>
            <div style={{ marginTop: 11, display: 'flex', justifyContent: 'space-between' }}>
              <span style={appTyped({ fontSize: 10.2, fontWeight: 780, color: '#3f7b56' })}>Kickoff</span>
              <span style={appTyped({ fontSize: 10.2, fontWeight: 780, color: '#9a6a2e' })}>Security Review · W3</span>
              <span style={appTyped({ fontSize: 10.2, fontWeight: 760, color: APP_FAINT })}>Go-Live · W4</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 26, right: 26, bottom: 22 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center',
          columnGap: 14 }}>
          <span style={appTyped({ fontSize: 10, fontWeight: 820, color: APP_FAINT,
            letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' })}>
            Projekt-Timeline
          </span>
          <div style={{ position: 'relative', height: 6, borderRadius: 999,
            background: 'rgba(45,38,32,0.10)' }}>
            <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '38%',
              borderRadius: 999, background: WARM, opacity: 0.85 }} />
            {[{ p: 0, color: '#74c69d' }, { p: 0.62, color: WARM }, { p: 1, color: APP_FAINT }].map((dot, i) => (
              <span key={`timeline-dot-${i}`} style={{ position: 'absolute',
                left: `${dot.p * 100}%`, top: '50%', width: 11, height: 11, borderRadius: 99,
                transform: 'translate(-50%, -50%)',
                background: '#ffffff', border: `2.4px solid ${dot.color}`, boxSizing: 'border-box' }} />
            ))}
          </div>
          <span style={appTyped({ fontSize: 10, fontWeight: 760, color: APP_FAINT,
            whiteSpace: 'nowrap' })}>Woche 2 von 4 · Security Review W3</span>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 26, right: 26, bottom: 62,
        height: 66, borderRadius: 999, display: 'grid', gridTemplateColumns: '40px 1fr 96px',
        alignItems: 'center', gap: 10, padding: '0 10px 0 12px',
        boxSizing: 'border-box',
        background: '#ffffff', border: '1.5px solid rgba(240,168,94,0.55)',
        boxShadow: '0 14px 34px rgba(240,168,94,0.16), 0 4px 14px rgba(45,38,32,0.06)' }}>
        <span style={{ width: 38, height: 38, borderRadius: 999, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: 'rgba(240,168,94,0.14)', border: '1px solid rgba(240,168,94,0.30)' }}>
          <Icon name="sparkles" size={17} color="#9a6a2e" sw={2} />
        </span>
        <span style={appTyped({ fontSize: 14.5, fontWeight: 680, color: APP_MUTED })}>
          Änderung oder Frage eingeben...
        </span>
        <span style={{ height: 46, borderRadius: 999, display: 'flex',
          alignItems: 'center', justifyContent: 'center', gap: 7,
          background: APP_TEXT, border: `1px solid ${APP_TEXT}`,
          boxShadow: '0 10px 22px rgba(45,38,32,0.22)' }}>
          <span style={appTyped({ fontSize: 13.5, fontWeight: 840, color: APP_SURFACE })}>
            Senden
          </span>
        </span>
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
    x: 1086, y: 626, w: 620, h: 260,
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
  const isMeeting = card.title === 'Meeting Vorbereitung';
  const accent = isMeeting ? WARM : '#8fbfd8';
  const lineSeed = card.title === 'Arbeitsentwurf' ? [0.72, 0.54, 0.64, 0.44] : [0.62, 0.48, 0.58, 0.38];
  const statusRows = [
    { color: '#74c69d', bars: [0.72, 0.54], active: 0 },
    { color: WARM, bars: [0.60, 0.82], active: 1 },
    { color: '#e8655a', bars: [0.48, 0.66], active: 2 },
  ];
  return (
    <div style={{ position: 'absolute', left: card.x, top: card.y, width: card.w, height: card.h,
      borderRadius: 24, overflow: 'hidden', opacity: p,
      transform: `translateY(${(1 - p) * 18}px) scale(${0.968 + p * 0.032})`,
      background: APP_SURFACE,
      border: `1px solid ${accent}${isMeeting ? '2e' : '26'}`,
      boxShadow: `0 30px 82px rgba(45,38,32,0.14), 0 0 30px ${accent}${isMeeting ? '14' : '10'}, inset 0 1px 0 rgba(255,255,255,0.74)` }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'transparent',
        pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 48,
        background: APP_RAISED,
        borderBottom: `1px solid ${APP_LINE}` }}>
        <div style={{ position: 'absolute', left: 22, top: 18, display: 'flex', gap: 7 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 9, height: 9, borderRadius: 99,
              background: ['#74c69d', WARM, '#e8655a'][i],
              opacity: 0.72 }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: 66, top: 17, fontFamily: MONO,
          fontSize: 9.8, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: APP_MUTED }}>
          {card.docType}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 32, right: 32, top: 74 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '42px 1fr', columnGap: 14, alignItems: 'center' }}>
          <div style={{ width: 42, height: 42, borderRadius: 13, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: isMeeting ? 'rgba(240,168,94,0.15)' : 'rgba(240,168,94,0.13)',
            border: isMeeting ? '1px solid rgba(240,168,94,0.36)' : '1px solid rgba(240,168,94,0.28)' }}>
            <Icon name={card.icon} size={22} color={WARM} sw={1.9} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 770, fontSize: 30,
              lineHeight: 1, color: APP_TEXT, letterSpacing: '-0.018em' }}>
              {card.title}
            </div>
            <div style={{ marginTop: 11, display: 'flex', gap: 8 }}>
              {(isMeeting ? statusRows : card.rows).map((row, i) => {
                const rp = rise(local, OFFER_OVERLAY_START + card.tIn + 1.28 + i * 0.24, 0.58);
                if (isMeeting) {
                  return (
                    <span key={`ampel-chip-${i}`} style={{ height: 26, borderRadius: 999, padding: '0 9px',
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: `${row.color}16`, border: `1px solid ${row.color}42`,
                      opacity: rp, transform: `translateY(${(1 - rp) * 5}px)` }}>
                      {[0, 1, 2].map((dot) => (
                        <span key={dot} style={{ width: 7, height: 7, borderRadius: 99,
                          background: ['#74c69d', WARM, '#e8655a'][dot],
                          opacity: dot === row.active ? 0.95 : 0.26,
                          boxShadow: dot === row.active ? `0 0 10px ${row.color}88` : 'none' }} />
                      ))}
                    </span>
                  );
                }
                return (
                  <span key={row} style={{ height: 24, borderRadius: 999, padding: '0 10px',
                    display: 'flex', alignItems: 'center', fontFamily: MONO, fontSize: 9.8,
                    letterSpacing: '0.08em', color: APP_MUTED,
                    background: i === 0 ? 'rgba(143,191,216,0.13)' : 'rgba(240,168,94,0.13)',
                    border: `1px solid ${APP_LINE}`,
                    opacity: rp, transform: `translateY(${(1 - rp) * 5}px)` }}>
                    {row}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {isMeeting ? (
          <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
            {statusRows.map((row, i) => {
              const lp = rise(local, OFFER_OVERLAY_START + card.tIn + 1.64 + i * 0.16, 0.70);
              return (
                <div key={`meeting-status-${i}`} style={{ height: 42, borderRadius: 14,
                  display: 'grid', gridTemplateColumns: '74px 1fr 84px', gap: 12, alignItems: 'center',
                  padding: '0 14px', boxSizing: 'border-box',
                  background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                  opacity: lp, transform: `translateY(${(1 - lp) * 8}px)` }}>
                  <span style={{ display: 'flex', gap: 7 }}>
                    {[0, 1, 2].map((dot) => (
                      <span key={dot} style={{ width: 13, height: 13, borderRadius: 99,
                        background: ['#74c69d', WARM, '#e8655a'][dot],
                        opacity: dot === row.active ? 0.96 : 0.24,
                        boxShadow: dot === row.active ? `0 0 14px ${row.color}88` : 'none' }} />
                    ))}
                  </span>
                  <span style={{ display: 'grid', gap: 8 }}>
                    <span style={{ width: `${row.bars[0] * 100}%`, height: 8, borderRadius: 99,
                      background: APP_LINE_STRONG }} />
                    <span style={{ width: `${row.bars[1] * 100}%`, height: 6, borderRadius: 99,
                      background: `${row.color}66` }} />
                  </span>
                  <span style={{ height: 7, borderRadius: 99, background: row.color,
                    opacity: 0.66, boxShadow: `0 0 12px ${row.color}55` }} />
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {lineSeed.map((w, i) => {
              const lp = rise(local, OFFER_OVERLAY_START + card.tIn + 1.68 + i * 0.18, 0.74);
            return (
              <div key={i} style={{ height: 46, borderRadius: 14,
                background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                opacity: lp, transform: `translateY(${(1 - lp) * 8}px)` }}>
                <div style={{ margin: '13px 14px 0', width: `${w * 100}%`, height: 9,
                  borderRadius: 999, background: APP_LINE_STRONG }} />
                <div style={{ margin: '9px 14px 0', width: `${Math.max(0.34, w - 0.18) * 100}%`, height: 6,
                  borderRadius: 999, background: i === 2 ? 'rgba(232,101,90,0.38)' : APP_LINE }} />
              </div>
            );
            })}
          </div>
        )}
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
  const githubQuickClick = band(l, 1.50, 1.96, 0.13);
  const deckQuickClick = band(l, 2.30, 2.76, 0.13);
  const repoFiles = [
    { name: 'landing-zone', icon: 'folder', color: '#8fbfd8' },
    { name: 'sentinel.tf', icon: 'file', color: WARM },
    { name: 'policy.yaml', icon: 'file', color: '#e8655a' },
  ];
  const repoLines = [
    { n: '18', w: 0.72, c: '#8fbfd8', indent: 0 },
    { n: '19', w: 0.54, c: WARM, indent: 28 },
    { n: '20', w: 0.82, c: APP_LINE_STRONG, indent: 28 },
    { n: '21', w: 0.44, c: '#c65bb0', indent: 54 },
    { n: '22', w: 0.66, c: APP_LINE, indent: 28 },
    { n: '23', w: 0.50, c: '#e8655a', indent: 54 },
  ];
  const meetingRows = [
    { color: '#74c69d', icon: 'target', w1: 0.70, w2: 0.82, answer: 0.70, active: 0 },
    { color: WARM, icon: 'clock', w1: 0.62, w2: 0.50, answer: 0.56, active: 1 },
    { color: '#e8655a', icon: 'shield', w1: 0.78, w2: 0.58, answer: 0.74, active: 2 },
    { color: '#8fbfd8', icon: 'file', w1: 0.58, w2: 0.76, answer: 0.48, active: 0 },
  ];
  const meetingSources = [
    { color: '#8fbfd8', icon: 'book' },
    { color: WARM, icon: 'file' },
    { color: '#e8655a', icon: 'clock' },
    { color: '#c65bb0', icon: 'briefcase' },
  ];
  const conceptCards = [
    { color: '#8fbfd8', x: 182, y: 128, w: 188, h: 70 },
    { color: WARM, x: 398, y: 128, w: 188, h: 70 },
    { color: '#e8655a', x: 614, y: 128, w: 108, h: 70 },
  ];
  const quickLinks = [
    { label: 'GitHub', icon: 'github', color: '#8fbfd8', click: githubQuickClick },
    { label: 'PPTX', icon: 'ppt', color: WARM, click: deckQuickClick },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 28 }}>
      <div style={{ position: 'absolute', inset: 0,
        background: 'transparent' }} />
      <div style={{ position: 'absolute', left: 236, top: 118, width: 1548, opacity: left,
        transform: `translateY(${(1 - left) * 14}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: 12.5, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>Wissen · Meeting Prep</span>
          <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
          <span style={{ fontFamily: MONO, fontSize: 12.5, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>Bank AG · AWS Transformation</span>
          <span style={{ flex: 1 }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9,
            ...appTyped({ fontSize: 14, fontWeight: 740, color: APP_MUTED, whiteSpace: 'nowrap' }) }}>
            <span style={{ width: 8, height: 8, borderRadius: 99, background: '#74c69d',
              boxShadow: '0 0 10px rgba(116,198,157,0.45)' }} />
            Status-Meeting · DO 10:00 · Teams · mit Lena & Max
          </span>
        </div>
        <div style={{ marginTop: 16, fontFamily: DISPLAY, fontWeight: 790, fontSize: 46,
          lineHeight: 1, color: APP_TEXT, letterSpacing: '-0.02em' }}>
          Meeting Vorbereitung
        </div>
      </div>

      <div style={{ position: 'absolute', left: 236, top: 268, width: 700, opacity: left,
        transform: `translateY(${(1 - left) * 10}px)` }}>
        <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 820, letterSpacing: '0.13em',
          textTransform: 'uppercase', color: APP_FAINT }}>Status · Workstreams</div>
        <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
          {[
            { title: 'Landing Zone & IAM', sub: 'on track · Übergabe W2', jira: 'BANK-131', active: 0, color: '#74c69d' },
            { title: 'Security Baseline', sub: '2 GuardDuty-Findings offen', jira: 'BANK-142', active: 1, color: WARM },
            { title: 'Migration & Betrieb', sub: 'Risiko · Zeitfenster Kernsysteme', jira: 'BANK-155', active: 2, color: '#e8655a' },
          ].map((row, i) => {
            const rp = rise(l, 0.42 + i * 0.10, 0.56) * left;
            return (
              <div key={row.title} style={{ height: 76, borderRadius: 16,
                display: 'grid', gridTemplateColumns: '66px minmax(0,1fr) auto', alignItems: 'center',
                gap: 16, padding: '0 18px', boxSizing: 'border-box',
                opacity: rp, transform: `translateY(${(1 - rp) * 7}px)`,
                background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}`,
                boxShadow: `inset 3px 0 0 ${row.color}70` }}>
                <span style={{ display: 'flex', gap: 7 }}>
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} style={{ width: 13, height: 13, borderRadius: 99,
                      background: ['#74c69d', WARM, '#e8655a'][dot],
                      opacity: dot === row.active ? 0.96 : 0.18,
                      boxShadow: dot === row.active ? `0 0 12px ${row.color}80` : 'none' }} />
                  ))}
                </span>
                <span style={{ minWidth: 0 }}>
                  <div style={appTyped({ fontSize: 16.5, fontWeight: 820, color: APP_TEXT,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{row.title}</div>
                  <div style={{ marginTop: 4, ...appTyped({ fontSize: 12.5, fontWeight: 700,
                    color: APP_MUTED, whiteSpace: 'nowrap' }) }}>{row.sub}</div>
                </span>
                <span style={{ height: 30, borderRadius: 8, padding: '0 11px 0 8px',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: 'rgba(38,132,255,0.08)', border: '1px solid rgba(38,132,255,0.22)' }}>
                  <img src="assets/tech-icons/jira.svg" alt="" style={{ width: 15, height: 15, display: 'block' }} />
                  <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 800,
                    letterSpacing: '0.04em', color: '#2867ab' }}>{row.jira}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 26, fontFamily: MONO, fontSize: 11, fontWeight: 820, letterSpacing: '0.13em',
          textTransform: 'uppercase', color: APP_FAINT }}>Unterlagen & Referenzen</div>
        <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
          {[
            { icon: 'confluence.svg', title: 'AWS Zielarchitektur · Konzept v3', sub: 'Confluence · gestern aktualisiert', pulse: 0 },
            { icon: 'microsoft-powerpoint.svg', title: 'Konzept-Präsentation', sub: 'PPTX · 12 Folien · Entwurf', pulse: deckQuickClick },
            { icon: 'github.svg', title: 'bank-ag / aws-transformation', sub: 'GitHub · terraform / security.tf', pulse: 0 },
          ].map((doc) => (
            <div key={doc.title} style={{ height: 60, borderRadius: 14,
              display: 'grid', gridTemplateColumns: '40px minmax(0,1fr) 22px', alignItems: 'center',
              gap: 14, padding: '0 16px', boxSizing: 'border-box',
              transform: `scale(${1 - doc.pulse * 0.02})`,
              background: APP_SURFACE,
              border: `1px solid ${doc.pulse > 0.01 ? 'rgba(240,168,94,0.60)' : APP_LINE_STRONG}`,
              boxShadow: doc.pulse > 0.01 ? `0 0 ${14 + doc.pulse * 18}px rgba(240,168,94,0.30)` : 'none' }}>
              <span style={{ width: 38, height: 38, borderRadius: 11, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                <img src={`assets/tech-icons/${doc.icon}`} alt="" style={{ width: 20, height: 20, display: 'block',
                  opacity: doc.icon === 'github.svg' ? 0.75 : 1 }} />
              </span>
              <span style={{ minWidth: 0 }}>
                <div style={appTyped({ fontSize: 14.5, fontWeight: 800, color: APP_TEXT,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>{doc.title}</div>
                <div style={{ marginTop: 3, ...appTyped({ fontSize: 11.5, fontWeight: 700,
                  color: APP_FAINT, whiteSpace: 'nowrap' }) }}>{doc.sub}</div>
              </span>
              <Icon name="arrowUR" size={17} color={APP_MUTED} sw={2} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 26, borderRadius: 18, padding: '16px 18px', boxSizing: 'border-box',
          background: '#fff8ef', border: '1px solid rgba(240,168,94,0.42)',
          boxShadow: '0 12px 30px rgba(240,168,94,0.10)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: 999, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: 'rgba(240,168,94,0.16)', border: '1px solid rgba(240,168,94,0.32)' }}>
              <Icon name="sparkles" size={14} color="#9a6a2e" sw={2.1} />
            </span>
            <span style={appTyped({ fontSize: 13.5, fontWeight: 740, color: APP_MUTED,
              whiteSpace: 'nowrap' })}>Wo ist die aktuelle Security-Policy definiert?</span>
          </div>
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 40 }}>
            <span style={appTyped({ fontSize: 13.5, fontWeight: 740, color: APP_TEXT,
              whiteSpace: 'nowrap' })}>Im Repo der Bank AG, Modul Security:</span>
            <span style={{ height: 32, borderRadius: 999, padding: '0 13px 0 9px',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transform: `scale(${1 - githubQuickClick * 0.03})`,
              background: '#1c1a18',
              border: githubQuickClick > 0.01 ? '1px solid rgba(240,168,94,0.7)' : '1px solid #1c1a18',
              boxShadow: githubQuickClick > 0.01 ? `0 0 ${14 + githubQuickClick * 18}px rgba(240,168,94,0.35)` : '0 8px 18px rgba(45,38,32,0.18)' }}>
              <img src="assets/tech-icons/github.svg" alt="" style={{ width: 15, height: 15, display: 'block', filter: 'invert(1)', opacity: 0.9 }} />
              <span style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 800, letterSpacing: '0.03em',
                color: '#fdfaf5' }}>security.tf · L18</span>
              <Icon name="arrowUR" size={13} color="#f0a85e" sw={2.3} />
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'none', position: 'absolute', left: 972, top: 226, width: 820, height: 646,
        opacity: right, transform: `translateX(${(1 - right) * 42}px) scale(${0.974 + right * 0.026})` }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 820, height: 306,
          borderRadius: 26, overflow: 'hidden',
          background: APP_SURFACE,
          border: '1px solid rgba(143,191,216,0.18)',
          boxShadow: APP_PANEL_SHADOW }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'transparent' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 68,
            background: APP_RAISED, borderBottom: `1px solid ${APP_LINE}` }} />
          <div style={{ position: 'absolute', left: 26, top: 17, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 34, height: 34, borderRadius: 999, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              background: APP_SURFACE, border: `1px solid ${APP_LINE_STRONG}` }}>
              <img src="assets/tech-icons/github.svg" alt="" style={{ width: 21, height: 21, opacity: 0.74, filter: 'none' }} />
            </span>
            <span style={{ fontFamily: INTER, fontSize: 15, fontWeight: 650,
              color: APP_TEXT }}>
              bank-ag / aws-transformation
            </span>
            <span style={{ height: 26, borderRadius: 999, padding: '0 10px', display: 'flex',
              alignItems: 'center', fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.03em',
              color: APP_MUTED, background: APP_SURFACE,
              border: `1px solid ${APP_LINE}` }}>main</span>
          </div>
          <div style={{ position: 'absolute', right: 30, top: 24, display: 'flex', alignItems: 'center', gap: 9,
            fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: '#5f9fc0' }}>
            <Icon name="file" size={14} color="#8fbfd8" sw={1.9} />
            terraform / security.tf
          </div>
          <div style={{ position: 'absolute', left: 30, top: 90, width: 224, bottom: 28,
            borderRadius: 18, padding: '16px 14px', boxSizing: 'border-box',
            background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
            {repoFiles.map((file, i) => {
              const p = rise(l, 1.00 + i * 0.10, 0.48) * code;
              return (
                <div key={file.name} style={{ height: 42, borderRadius: 12, padding: '0 10px',
                  display: 'grid', gridTemplateColumns: '24px 1fr', gap: 9, alignItems: 'center',
                  opacity: p, transform: `translateX(${(1 - p) * -8}px)`,
                  background: i === 1 ? APP_SURFACE : 'transparent',
                  border: i === 1 ? `1px solid ${APP_LINE_STRONG}` : '1px solid transparent' }}>
                  <Icon name={file.icon} size={18} color={file.color} sw={1.8} />
                  <span style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '0.02em',
                    color: i === 1 ? APP_TEXT : APP_MUTED }}>
                    {file.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', left: 274, top: 90, right: 30, bottom: 28,
            borderRadius: 18, overflow: 'hidden',
            background: '#ffffff', border: `1px solid ${APP_LINE}` }}>
            <div style={{ height: 38, display: 'flex', alignItems: 'center', padding: '0 15px',
              gap: 8, borderBottom: `1px solid ${APP_LINE}`,
              color: APP_MUTED, fontFamily: MONO, fontSize: 11 }}>
              <Icon name="file" size={14} color={WARM} sw={1.8} />
              <span>security.tf</span>
              <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                {[0, 1, 2].map((dot) => (
                  <span key={dot} style={{ width: 4.5, height: 4.5, borderRadius: 99,
                    background: APP_FAINT }} />
                ))}
              </span>
            </div>
            <div style={{ position: 'absolute', left: 16, right: 16, top: 58, display: 'grid', gap: 10 }}>
              {repoLines.map((row, i) => {
                const p = rise(l, 1.06 + i * 0.08, 0.54) * code;
                return (
                  <div key={row.n} style={{ height: 12, display: 'grid',
                    gridTemplateColumns: '28px 1fr', gap: 12, alignItems: 'center',
                    opacity: p, transform: `translateY(${(1 - p) * 5}px)` }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, color: APP_FAINT,
                      textAlign: 'right' }}>{row.n}</span>
                    <span style={{ marginLeft: row.indent, width: `${row.w * 100}%`, height: 7,
                      borderRadius: 999, background: row.c,
                      boxShadow: i === 0 ? '0 0 12px rgba(143,191,216,0.20)' : 'none',
                      transform: `scaleX(${p})`, transformOrigin: '0 50%' }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', left: 0, bottom: 0, width: 820, height: 300,
          borderRadius: 26, padding: '28px 30px', boxSizing: 'border-box',
          opacity: deck, transform: `translateY(${(1 - deck) * 22}px)`,
          background: APP_SURFACE,
          border: '1px solid rgba(240,168,94,0.18)',
          boxShadow: APP_PANEL_SHADOW }}>
          <div style={{ position: 'absolute', inset: 0,
            background: 'transparent',
            pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 32,
                lineHeight: 1, color: APP_TEXT, letterSpacing: '-0.018em' }}>
                Konzept-Präsentation
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', left: 30, right: 30, top: 92, bottom: 24,
            borderRadius: 22, overflow: 'hidden',
            background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 112,
              padding: '18px 14px', boxSizing: 'border-box',
              background: APP_SURFACE, borderRight: `1px solid ${APP_LINE}`,
              display: 'grid', alignContent: 'center', gap: 12 }}>
              {['#8fbfd8', WARM, '#e8655a', '#c65bb0'].map((color, i) => {
                const p = rise(l, 1.36 + i * 0.08, 0.42) * deck;
                return (
                  <span key={`concept-side-${i}`} style={{ height: 34, borderRadius: 10,
                    opacity: p, transform: `translateX(${(1 - p) * -8}px)`,
                    background: i === 1 ? `${color}24` : APP_RAISED,
                    border: `1px solid ${i === 1 ? `${color}46` : APP_LINE}` }}>
                    <span style={{ display: 'block', width: 24, height: 6, borderRadius: 99,
                      margin: '14px 0 0 12px', background: color, opacity: 0.66 }} />
                  </span>
                );
              })}
            </div>
            <svg width="648" height="184" viewBox="0 0 648 184"
              style={{ position: 'absolute', left: 112, top: 0, overflow: 'visible' }}>
              <path d="M 70 48 L 214 48 L 430 48 L 578 48"
                fill="none" stroke={APP_LINE_STRONG} strokeWidth="4" strokeLinecap="round" />
              <path d="M 70 132 C 186 104, 306 150, 420 116 S 548 104, 578 132"
                fill="none" stroke={APP_LINE_STRONG} strokeWidth="4" strokeLinecap="round" />
              {conceptCards.map((card, i) => {
                const p = rise(l, 1.48 + i * 0.12, 0.52) * deck;
                return (
                  <g key={`concept-card-${i}`} opacity={p}>
                    <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="16"
                      fill={`${card.color}18`} stroke={`${card.color}28`} />
                    <rect x={card.x + 18} y={card.y + 22} width={card.w * 0.44} height="7" rx="4"
                      fill={card.color} opacity="0.50" />
                    <rect x={card.x + 18} y={card.y + 40} width={card.w * 0.62} height="6" rx="3"
                      fill={APP_LINE_STRONG} />
                  </g>
                );
              })}
              {[0, 1, 2].map((i) => {
                const color = ['#8fbfd8', WARM, '#e8655a'][i];
                const p = rise(l, 1.58 + i * 0.10, 0.44) * deck;
                return (
                  <circle key={`concept-node-${i}`} cx={84 + i * 238} cy={48 + (i === 1 ? 84 : 0)}
                    r={7 + p * 2} fill={color} opacity={p}
                    style={{ filter: `drop-shadow(0 0 10px ${color}66)` }} />
                );
              })}
            </svg>
            <div style={{ position: 'absolute', left: 156, top: 24, width: 430, display: 'grid', gap: 9 }}>
              {[0.62, 0.42].map((w, i) => {
                const p = rise(l, 1.34 + i * 0.08, 0.42) * deck;
                return (
                  <span key={`concept-line-${i}`} style={{ height: i === 0 ? 9 : 7,
                    width: `${w * 100}%`, borderRadius: 99,
                    opacity: p, transform: `scaleX(${p})`, transformOrigin: '0 50%',
                    background: i === 0 ? APP_LINE_STRONG : APP_LINE }} />
                );
              })}
            </div>
            <div style={{ position: 'absolute', right: 22, top: 24, display: 'flex', gap: 10 }}>
              {['#e8655a', '#8fbfd8', WARM].map((color, i) => (
                <span key={`concept-dot-${i}`} style={{ width: 10, height: 10, borderRadius: 99,
                  background: color, opacity: 0.72, boxShadow: `0 0 9px ${color}66` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultantWorkExternalWindows({ local, start = -0.90, end = 4.65 }) {
  const op = band(local, start, end, 0.36);
  if (op <= 0.001) return null;
  const l = local - start;
  const exit = rise(l, Math.max(3.6, end - start - 0.38), 0.36);
  const githubOpen = rise(l, 1.62, 0.42) * (1 - exit);
  const deckOpen = rise(l, 2.42, 0.42) * (1 - exit);
  if (githubOpen <= 0.001 && deckOpen <= 0.001) return null;
  // popup spring: slight overshoot on entrance
  const popEase = (p) => { const x = p - 1; return 1 + 2.2 * x * x * x + 1.2 * x * x; };
  const githubPop = popEase(clamp(githubOpen, 0, 1));
  const deckPop = popEase(clamp(deckOpen, 0, 1));
  // progressive disclosure: github recedes once the deck popup takes focus
  const recede = deckOpen;
  const repoFiles = [
    { name: 'landing-zone', icon: 'folder', color: '#8fbfd8' },
    { name: 'sentinel.tf', icon: 'file', color: WARM },
    { name: 'policy.yaml', icon: 'file', color: '#e8655a' },
  ];
  const repoLines = [
    { n: '18', w: 0.70, c: '#8fbfd8', indent: 0 },
    { n: '19', w: 0.58, c: WARM, indent: 28 },
    { n: '20', w: 0.84, c: 'rgba(238,236,232,0.34)', indent: 28 },
    { n: '21', w: 0.45, c: '#c65bb0', indent: 54 },
    { n: '22', w: 0.66, c: 'rgba(238,236,232,0.22)', indent: 28 },
    { n: '23', w: 0.50, c: '#e8655a', indent: 54 },
  ];
  const deckCards = [
    { color: '#8fbfd8', x: 182, y: 124, w: 188, h: 70 },
    { color: WARM, x: 398, y: 124, w: 188, h: 70 },
    { color: '#e8655a', x: 614, y: 124, w: 108, h: 70 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 62 }}>
      <div style={{ position: 'absolute', left: 982, top: 164, width: 798, height: 300,
        opacity: githubOpen * (1 - recede * 0.35),
        transform: `translateY(${(1 - githubPop) * 34 + recede * -10}px) translateX(${(1 - githubPop) * -46}px) scale(${0.88 + githubPop * 0.12 - recede * 0.035})`,
        transformOrigin: '10% 85%',
        filter: recede > 0.01 ? `saturate(${1 - recede * 0.3})` : 'none',
        borderRadius: 22, overflow: 'hidden',
        background: '#0d1117',
        border: '1px solid rgba(143,191,216,0.24)',
        boxShadow: `0 ${38 - recede * 20}px ${110 - recede * 50}px rgba(0,0,0,${0.44 - recede * 0.18}), 0 0 34px rgba(143,191,216,${0.14 * (1 - recede)})` }}>
        <div style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 54,
          background: '#161b22',
          borderBottom: '1px solid rgba(240,246,252,0.10)' }}>
          <div style={{ position: 'absolute', left: 20, top: 11, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, height: 32, borderRadius: 999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(240,246,252,0.12)' }}>
              <img src="assets/tech-icons/github.svg" alt="" style={{ width: 20, height: 20, opacity: 0.86, filter: 'invert(1)' }} />
            </span>
            <span style={{ fontFamily: INTER, fontSize: 15, fontWeight: 700, color: '#f0f6fc' }}>
              bank-ag / aws-transformation
            </span>
            <span style={{ height: 24, borderRadius: 999, padding: '0 10px', display: 'flex',
              alignItems: 'center', fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.04em',
              color: 'rgba(240,246,252,0.58)', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(240,246,252,0.11)' }}>main</span>
          </div>
          <div style={{ position: 'absolute', right: 22, top: 18, display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.08em', color: '#8fbfd8' }}>
            <Icon name="file" size={14} color="#8fbfd8" sw={1.9} />
            terraform / security.tf
          </div>
        </div>
        <div style={{ position: 'absolute', left: 22, top: 76, width: 222, bottom: 24,
          borderRadius: 15, padding: '14px 12px', boxSizing: 'border-box',
          background: 'rgba(13,17,23,0.96)',
          border: '1px solid rgba(240,246,252,0.10)' }}>
          {repoFiles.map((file, i) => {
            const p = rise(l, 1.78 + i * 0.08, 0.36) * githubOpen;
            return (
              <div key={`ext-repo-${file.name}`} style={{ height: 40, borderRadius: 10,
                display: 'grid', gridTemplateColumns: '24px 1fr', gap: 9, alignItems: 'center',
                padding: '0 10px', boxSizing: 'border-box',
                opacity: p, transform: `translateX(${(1 - p) * -8}px)`,
                background: i === 1 ? 'rgba(56,139,253,0.22)' : 'transparent',
                border: i === 1 ? '1px solid rgba(143,191,216,0.26)' : '1px solid transparent' }}>
                <Icon name={file.icon} size={17} color={file.color} sw={1.8} />
                <span style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '0.02em',
                  color: i === 1 ? '#f0f6fc' : 'rgba(240,246,252,0.56)' }}>{file.name}</span>
              </div>
            );
          })}
        </div>
        <div style={{ position: 'absolute', left: 268, top: 76, right: 22, bottom: 24,
          borderRadius: 15, overflow: 'hidden',
          background: '#0b0f14',
          border: '1px solid rgba(240,246,252,0.10)' }}>
          <div style={{ height: 34, display: 'flex', alignItems: 'center', padding: '0 14px',
            gap: 8, borderBottom: '1px solid rgba(240,246,252,0.08)',
            color: 'rgba(240,246,252,0.58)', fontFamily: MONO, fontSize: 11 }}>
            <Icon name="file" size={14} color={WARM} sw={1.8} />
            <span>security.tf</span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              {[0, 1, 2].map((dot) => (
                <span key={dot} style={{ width: 4.5, height: 4.5, borderRadius: 99,
                  background: 'rgba(240,246,252,0.22)' }} />
              ))}
            </span>
          </div>
          <div style={{ position: 'absolute', left: 16, right: 16, top: 54, display: 'grid', gap: 10 }}>
            {repoLines.map((row, i) => {
              const p = rise(l, 1.86 + i * 0.07, 0.42) * githubOpen;
              return (
                <div key={`ext-repo-line-${row.n}`} style={{ height: 12, display: 'grid',
                  gridTemplateColumns: '28px 1fr', gap: 12, alignItems: 'center',
                  opacity: p, transform: `translateY(${(1 - p) * 5}px)` }}>
                  <span style={{ fontFamily: MONO, fontSize: 10, color: 'rgba(240,246,252,0.26)',
                    textAlign: 'right' }}>{row.n}</span>
                  <span style={{ marginLeft: row.indent, width: `${row.w * 100}%`, height: 7,
                    borderRadius: 999, background: row.c,
                    boxShadow: i === 0 ? '0 0 12px rgba(143,191,216,0.24)' : 'none',
                    transform: `scaleX(${p})`, transformOrigin: '0 50%' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', left: 1008, top: 512, width: 804, height: 318,
        opacity: deckOpen,
        transform: `translateY(${(1 - deckPop) * 38}px) translateX(${(1 - deckPop) * -52}px) scale(${0.88 + deckPop * 0.12})`,
        transformOrigin: '8% 30%',
        borderRadius: 22, overflow: 'hidden',
        background: '#fffaf3',
        border: '1px solid rgba(35,31,27,0.16)',
        boxShadow: '0 40px 112px rgba(0,0,0,0.32), 0 0 34px rgba(240,168,94,0.18)' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 54,
          background: '#f6efe6',
          borderBottom: '1px solid rgba(35,31,27,0.12)' }}>
          <div style={{ position: 'absolute', left: 18, top: 11, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 32, height: 32, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(240,168,94,0.15)', border: '1px solid rgba(240,168,94,0.34)' }}>
              <img src="assets/tech-icons/microsoft-powerpoint.svg" alt="" style={{ width: 20, height: 20 }} />
            </span>
            <span style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 20,
              letterSpacing: '-0.018em', color: APP_TEXT, whiteSpace: 'nowrap' }}>Konzept-Präsentation</span>
          </div>
          <div style={{ position: 'absolute', right: 22, top: 17, height: 24, borderRadius: 999,
            padding: '0 10px', display: 'flex', alignItems: 'center', gap: 7,
            fontFamily: MONO, fontSize: 10.5, letterSpacing: '0.10em', color: 'rgba(41,37,33,0.58)',
            background: '#fffaf3', border: '1px solid rgba(35,31,27,0.12)' }}>
            <span style={{ width: 7, height: 7, borderRadius: 99, background: WARM }} />
            PPTX
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, top: 54, bottom: 0, width: 118,
          padding: '22px 14px', boxSizing: 'border-box',
          background: '#fff4e7',
          borderRight: '1px solid rgba(35,31,27,0.10)',
          display: 'grid', alignContent: 'center', gap: 12 }}>
          {['#8fbfd8', WARM, '#e8655a', '#c65bb0'].map((color, i) => {
            const p = rise(l, 2.58 + i * 0.08, 0.36) * deckOpen;
            return (
              <span key={`ext-deck-side-${i}`} style={{ height: 34, borderRadius: 10,
                opacity: p, transform: `translateX(${(1 - p) * -8}px)`,
                background: i === 1 ? `${color}26` : '#ffffff',
                border: `1px solid ${i === 1 ? `${color}54` : 'rgba(35,31,27,0.10)'}` }}>
                <span style={{ display: 'block', width: 28, height: 6, borderRadius: 99,
                  margin: '14px 0 0 12px', background: color, opacity: 0.72 }} />
              </span>
            );
          })}
        </div>
        <div style={{ position: 'absolute', left: 118, top: 54, right: 0, bottom: 0,
          background: '#fffaf3' }}>
          <div style={{ position: 'absolute', left: 42, top: 28, display: 'grid', gap: 9 }}>
            {[0.62, 0.42].map((w, i) => {
              const p = rise(l, 2.52 + i * 0.08, 0.36) * deckOpen;
              return (
                <span key={`ext-deck-line-${i}`} style={{ height: i === 0 ? 9 : 7,
                  width: 420 * w, borderRadius: 99,
                  opacity: p, transform: `scaleX(${p})`, transformOrigin: '0 50%',
                  background: i === 0 ? 'rgba(35,31,27,0.28)' : 'rgba(35,31,27,0.14)' }} />
              );
            })}
          </div>
          <svg width="686" height="264" viewBox="0 0 686 264"
            style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
            <path d="M 70 142 C 186 114, 306 160, 420 126 S 548 116, 608 146"
              fill="none" stroke="rgba(35,31,27,0.18)" strokeWidth="4" strokeLinecap="round" />
            {deckCards.map((card, i) => {
              const p = rise(l, 2.66 + i * 0.12, 0.44) * deckOpen;
              return (
                <g key={`ext-deck-card-${i}`} opacity={p}>
                  <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="16"
                    fill={`${card.color}1f`} stroke={`${card.color}34`} />
                  <rect x={card.x + 18} y={card.y + 22} width={card.w * 0.44} height="7" rx="4"
                    fill={card.color} opacity="0.66" />
                  <rect x={card.x + 18} y={card.y + 40} width={card.w * 0.62} height="6" rx="3"
                    fill="rgba(35,31,27,0.16)" />
                </g>
              );
            })}
            {[0, 1, 2].map((i) => {
              const color = ['#8fbfd8', WARM, '#e8655a'][i];
              const p = rise(l, 2.80 + i * 0.10, 0.34) * deckOpen;
              return (
                <circle key={`ext-deck-node-${i}`} cx={84 + i * 238} cy={88 + (i === 1 ? 84 : 0)}
                  r={7 + p * 2} fill={color} opacity={p}
                  style={{ filter: `drop-shadow(0 0 10px ${color}66)` }} />
              );
            })}
          </svg>
          <div style={{ position: 'absolute', right: 22, top: 26, display: 'flex', gap: 10 }}>
            {['#e8655a', '#8fbfd8', WARM].map((color, i) => (
              <span key={`ext-deck-dot-${i}`} style={{ width: 10, height: 10, borderRadius: 99,
                background: color, opacity: 0.72, boxShadow: `0 0 9px ${color}66` }} />
            ))}
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
                      fill="none" stroke={APP_LINE} strokeWidth="9" strokeLinecap="round" />
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
  Risiko: { x: 514, y: 584 },
  Konzepte: { x: 784, y: 584 },
  Code: { x: 1078, y: 584 },
  Scope: { x: 1386, y: 584 },
  Projekt: { x: 960, y: 692 },
};
const PROMPT_RECEIVER_LAYOUT = {
  agent: { x: 600, y: 362, w: 720, h: 340 },
};
const PROMPT_RECEIVER_AGENT_TARGET = {
  x: PROMPT_RECEIVER_LAYOUT.agent.x + PROMPT_RECEIVER_LAYOUT.agent.w / 2,
  y: PROMPT_RECEIVER_LAYOUT.agent.y + PROMPT_RECEIVER_LAYOUT.agent.h / 2,
};
const PROMPT_BRIDGE_COLLECT_OFFSET = 2.38; // hold typed prompt ~0.5s before source consumption starts
const PROMPT_CONTEXT_HOLD_LOCAL = WORK_PROMPT_VISUAL_START + PROMPT_BRIDGE_COLLECT_OFFSET + 0.22;
const PROMPT_BACKGROUND_BUNDLE_REMOVE_LOCAL = WORK_PROMPT_VISUAL_START + PROMPT_BRIDGE_COLLECT_OFFSET + 0.22;

function PromptKnowledgeReceiver({ t, appearStart, exitStart, packetReceiveAt = null }) {
  const layout = PROMPT_RECEIVER_LAYOUT;
  const op = band(t, appearStart, exitStart, 0.55);
  if (op <= 0.001) return null;

  const agentIn = rise(t, appearStart, 1.18);
  const receiveMoment = packetReceiveAt ?? appearStart + 0.86;
  const receive = rise(t, receiveMoment - 0.10, 0.64);
  const think = band(t, appearStart + 0.52, exitStart - 0.18, 0.34);
  const fade = 1 - rise(t, exitStart - 0.55, 0.55);
  const center = (node) => ({ x: node.x + node.w / 2, y: node.y + node.h / 2 });
  const agentC = center(layout.agent);
  const AgentVisual = ({ p }) => {
    const size = 600;
    const cx = size / 2;
    const cy = 262;
    const coreSize = 198;
    const active = Math.max(receive, think * 0.72);
    const synthSources = [
      { label: 'DATENBANKEN', icon: 'database', color: WARM, x: -292, y: 74, w: 108, h: 108 },
      { label: 'VERTRÄGE', icon: 'file', color: '#8fbfd8', x: 784, y: 74, w: 108, h: 108 },
      { label: 'ANGEBOTE', icon: 'briefcase', color: '#e8655a', x: -292, y: 246, w: 108, h: 108 },
      { label: 'PRÄSENTATIONEN', icon: 'book', color: '#c65bb0', x: 784, y: 246, w: 108, h: 108 },
      { label: 'EXCEL-SHEETS', icon: 'file', color: '#74c69d', x: -292, y: 418, w: 108, h: 108 },
      { label: 'PROJEKTKONTEXT', icon: 'azure', color: '#8fbfd8', x: 784, y: 418, w: 108, h: 108 },
    ];
    const consumeBase = receiveMoment;
    const sourceWakeBase = appearStart + 0.06;
    const packetCatch = band(t, receiveMoment - 0.16, receiveMoment + 0.52, 0.14);
    const consume = rise(t, consumeBase, 1.02);
    const agentShiftY = -58 * consume;
    const agentScale = 1 - consume * 0.13;
    const visualFill = Easing.easeInOutCubic(consume);
    const labelOut = 1 - rise(t, consumeBase + 0.04, 0.48);
    const fillCoreSize = mix(coreSize, 462, visualFill);
    const fillIconSize = mix(118, 210, visualFill);
    const sourceConsume = (i) => rise(t, consumeBase + i * 0.055, 0.64);
    const completionLine1 = 'Deine Meeting Vorbereitung ist abgeschlossen.';
    const completionLine2 = 'Lass mich wissen, ob wir was verbessern sollen!';
    const completionTypeRate = 54;
    const completionLinePause = 0.46;
    const completionStart = consumeBase + 1.28;
    const completionLine1End = completionStart + completionLine1.length / completionTypeRate;
    const completionLine2Start = completionLine1End + completionLinePause;
    const completionLine2End = completionLine2Start + completionLine2.length / completionTypeRate;
    const completionIn = rise(t, completionStart, 0.34);
    const completionLine1Count = Math.floor(clamp((t - completionStart) * completionTypeRate, 0, completionLine1.length));
    const completionLine2Count = Math.floor(clamp((t - completionLine2Start) * completionTypeRate, 0, completionLine2.length));
    const typedCompletionLine1 = completionLine1.slice(0, completionLine1Count);
    const typedCompletionLine2 = completionLine2.slice(0, completionLine2Count);
    const completionTypingLine1 = t >= completionStart && t < completionLine1End;
    const completionTypingLine2 = t >= completionLine2Start && t < completionLine2End;
    const completionTyping = completionTypingLine1 || completionTypingLine2;
    const completionLine1Caret = t >= completionStart && t < completionLine2Start;
    const completionLine2Caret = t >= completionLine2Start && t < completionLine2End;
    const caretOn = Math.floor(t * 3.1) % 2 === 0;
    const speaking = Math.max(
      band(t, completionStart, completionLine1End, 0.14),
      band(t, completionLine2Start, completionLine2End, 0.14)
    ) * completionIn;
    const speakingWave = 0.5 + Math.sin((t - completionStart) * 16.5) * 0.5;
    const tonePeak = speaking * Math.pow(speakingWave, 3.2);
    const receiveScale = 1 + packetCatch * 0.045;
    const speakingScale = 1 + speaking * (0.018 + speakingWave * 0.065);
    const speakingGlow = speaking * (0.18 + speakingWave * 0.38);
    const speakingIconBoost = speaking * (10 + speakingWave * 26);
    return (
      <div style={{ position: 'absolute', left: agentC.x - size / 2, top: agentC.y - size / 2,
        width: size, height: size, opacity: p,
        transform: `translateY(${(1 - p) * 310}px) scale(${0.84 + p * 0.16})`,
        pointerEvents: 'none' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
          style={{ position: 'absolute', inset: 0, overflow: 'visible', zIndex: 0 }}>
          {synthSources.map((source, i) => {
            const consumeP = sourceConsume(i);
            const sx = mix(source.x + source.w / 2, cx, consumeP);
            const sy = mix(source.y + source.h / 2, cy + agentShiftY, consumeP) - Math.sin(consumeP * Math.PI) * 10;
            const pathOp = (0.12 + active * 0.20 + Math.sin(consumeP * Math.PI) * 0.18) * p * (1 - consumeP * 0.72);
            return (
              <g key={`source-flow-${source.label}`} opacity={pathOp}>
                <path d={`M ${sx} ${sy} C ${mix(sx, cx, 0.46)} ${sy}, ${mix(sx, cx, 0.58)} ${cy + agentShiftY}, ${cx} ${cy + agentShiftY}`}
                  fill="none" stroke={source.color} strokeWidth={1.15 + Math.sin(consumeP * Math.PI) * 1.45} strokeLinecap="round"
                  strokeDasharray="4 18"
                  strokeDashoffset={-(t * (5 + i * 0.4))}
                  opacity={0.42 + active * 0.22 + Math.sin(consumeP * Math.PI) * 0.26} />
              </g>
            );
          })}
        </svg>
        {synthSources.map((source, i) => {
          const wake = rise(t, sourceWakeBase + i * 0.05, 0.46);
          const blink = 0.5 + Math.sin(t * 3.6 + i * 0.7) * 0.5;
          const consumeP = sourceConsume(i);
          const cardX = mix(source.x, cx - source.w / 2, consumeP);
          const cardY = mix(source.y, cy + agentShiftY - source.h / 2, consumeP) - Math.sin(consumeP * Math.PI) * 10;
          return (
            <div key={`agent-source-${source.label}`} style={{ position: 'absolute',
              left: cardX, top: cardY, width: source.w, height: source.h,
              borderRadius: 30, padding: 0, boxSizing: 'border-box',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: p * wake * (1 - consumeP),
              transform: `translateY(${(1 - wake) * 10}px) scale(${(0.96 + wake * 0.04) * (1 - consumeP * 0.42)})`,
              transformOrigin: '50% 50%',
              background: APP_RAISED,
              border: `1px solid ${source.color}${Math.round(0x3a + active * 0x16).toString(16).padStart(2, '0')}`,
              boxShadow: `0 18px 44px rgba(45,38,32,0.10), 0 0 ${8 + blink * 8}px ${source.color}20, inset 0 1px 0 rgba(255,255,255,0.64)` }}>
              <Icon name={source.icon} size={43} color={source.color} sw={1.85} />
            </div>
          );
        })}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2,
          transform: `translateY(${agentShiftY}px) scale(${agentScale * receiveScale * speakingScale})`,
          transformOrigin: '50% 50%' }}>
          <div style={{ position: 'absolute', inset: 0,
            borderRadius: mix(42, 300, visualFill),
            background: 'transparent',
            border: '1px solid rgba(143,191,216,0)',
            boxShadow: 'none' }} />
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
            style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
            <circle cx={cx} cy={cy} r={mix(174 + active * 22, 292, visualFill)}
              fill="#8fbfd8" opacity={0.055 + active * 0.035 + visualFill * 0.045} />
            {[0, 1].map((i) => (
              <circle key={i} cx={cx} cy={cy}
                r={mix(120 + i * 72 + active * (16 + i * 7), 196 + i * 72, visualFill)}
                fill="none" stroke={i === 1 ? WARM : '#8fbfd8'}
                strokeWidth={mix(1.35 - i * 0.12, 2.2 - i * 0.2, visualFill)}
                opacity={(0.08 + active * 0.08 - i * 0.015 + visualFill * (i === 1 ? 0 : 0.08)) * p * (i === 1 ? (1 - visualFill * 0.92) : 1)}
                strokeDasharray={i === 0 ? '28 28' : '10 24'}
                transform={`rotate(${(i % 2 === 0 ? 1 : -1) * (t * (8 + i * 3) + i * 42)} ${cx} ${cy})`}
                style={{ filter: `drop-shadow(0 0 ${7 + visualFill * 18}px rgba(143,191,216,${0.16 + visualFill * 0.14}))` }} />
            ))}
          </svg>
          <div style={{ position: 'absolute', left: cx - fillCoreSize / 2, top: cy - fillCoreSize / 2,
            width: fillCoreSize, height: fillCoreSize,
            borderRadius: mix(58, 231, visualFill), display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: APP_SURFACE,
            border: `1px solid rgba(143,191,216,${0.48 * (1 - visualFill) + packetCatch * 0.32})`,
            boxShadow: `0 36px 88px rgba(45,38,32,0.13), 0 0 ${18 + active * 30 + visualFill * 40 + speakingGlow * 52 + packetCatch * 42}px rgba(143,191,216,${0.20 + visualFill * 0.10 + speakingGlow * 0.20 + packetCatch * 0.18}), inset 0 1px 0 rgba(255,255,255,0.76)` }}>
            <div style={{ position: 'absolute', inset: -8 - packetCatch * 22,
              borderRadius: mix(68, 246, visualFill),
              border: `2px solid rgba(240,168,94,${packetCatch * 0.52})`,
              boxShadow: `0 0 ${16 + packetCatch * 46}px rgba(240,168,94,${packetCatch * 0.32})`,
              opacity: packetCatch,
              pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: -14 - tonePeak * 24,
              borderRadius: mix(70, 248, visualFill),
              border: `2.5px solid rgba(143,191,216,${tonePeak * 0.86})`,
              boxShadow: `0 0 ${24 + tonePeak * 78}px rgba(143,191,216,${tonePeak * 0.54})`,
              opacity: tonePeak,
              pointerEvents: 'none' }} />
            <ConsultryIntelligenceGlyph size={fillIconSize + speakingIconBoost} />
          </div>
          <div style={{ position: 'absolute', left: -120, right: -120, top: cy + 126,
            textAlign: 'center', fontFamily: DISPLAY, fontSize: 48,
            fontWeight: 760, letterSpacing: '-0.01em', color: APP_TEXT,
            opacity: labelOut,
            transform: `translateY(${(1 - labelOut) * 12}px) scale(${0.98 + labelOut * 0.02})`,
            textShadow: 'none' }}>
            Consultry Intelligence
          </div>
          <div style={{ position: 'absolute', left: cx - 150, top: cy + 246, width: 300,
            display: 'grid', gap: 10, opacity: (0.45 + think * 0.45) * labelOut }}>
            {[0, 1].map((i) => {
              const wave = 0.5 + Math.sin(t * 3.6 + i * 1.18) * 0.5;
              const color = i === 0 ? '#8fbfd8' : WARM;
              return (
                <div key={`agent-load-${i}`} style={{ height: 7, borderRadius: 99,
                  overflow: 'hidden', background: APP_LINE,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.42)' }}>
                  <span style={{ display: 'block', height: '100%', width: `${34 + wave * 54}%`,
                    borderRadius: 99,
                    transform: `translateX(${(wave - 0.5) * 18}px)`,
                    background: `linear-gradient(90deg, rgba(45,38,32,0.08) 0%, ${color} 54%, rgba(45,38,32,0.08) 100%)`,
                    boxShadow: `0 0 ${5 + wave * 7}px ${color}55` }} />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ position: 'absolute', left: -300, top: 560, width: 1200,
          opacity: completionIn,
          transform: `translateY(${(1 - completionIn) * 18}px)`,
          zIndex: 3, textAlign: 'center',
          ...appTyped({ fontSize: 38, lineHeight: 1.22,
            fontWeight: 720, letterSpacing: '-0.014em', color: APP_TEXT }),
          textShadow: 'none' }}>
          <div>{typedCompletionLine1}
            {completionLine1Caret && (
              <span style={{ display: 'inline-block', width: 3, height: 38,
                marginLeft: 7, transform: 'translateY(6px)', borderRadius: 99,
                background: WARM,
                opacity: completionTyping && caretOn ? 0.9 : 0 }} />
            )}
          </div>
          <div style={{ marginTop: 12 }}>{typedCompletionLine2}
            {completionLine2Caret && (
              <span style={{ display: 'inline-block', width: 3, height: 38,
                marginLeft: 7, transform: 'translateY(6px)', borderRadius: 99,
                background: WARM,
                opacity: completionTyping && caretOn ? 0.9 : 0 }} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op * fade, pointerEvents: 'none' }}>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <g opacity={receive}>
          <circle cx={agentC.x} cy={agentC.y}
            r={144 + receive * 20}
            fill="none" stroke="#8fbfd8"
            strokeWidth="1.4"
            opacity={0.10 * receive}
            style={{ filter: 'drop-shadow(0 0 10px rgba(143,191,216,0.16))' }} />
        </g>
      </svg>
      <AgentVisual p={agentIn} />
    </div>
  );
}

function PersistentPromptAgentBridge() {
  const t = useTime();
  const promptAbs = SCENE_VERTRIEB_START + WORK_PROMPT_VISUAL_START;
  const typeStart = promptAbs;
  const collectStart = promptAbs + PROMPT_BRIDGE_COLLECT_OFFSET;
  const sendStart = SCENE_WISSEN_START - 4.86;   // prompt collapses into a packet shortly after activation
  const promptCollapseDur = 1.22;
  const packetTravelStart = sendStart + 0.82;
  const sendDur = 1.64;
  const packetArrival = packetTravelStart + sendDur;
  const end = PROJECT_DASH_START + 0.36;         // m0101: agent message lands before the project dashboard (which precedes Meeting-Vorbereitung)
  const op = band(t, typeStart - 0.12, end, 0.42);
  if (op <= 0.001) return null;

  const query = 'Bereite mir das Status-Meeting mit BankAG vor';
  const promptIn = rise(t, typeStart - 0.10, 0.54);
  const promptMorph = Easing.easeInOutCubic(clamp((t - typeStart) / 0.50, 0, 1));
  const displayQuery = query;
  const caretOn = Math.floor(t * 2.4) % 2 === 0;
  const sources = [
    { k: 'Risiko', icon: 'clock', color: '#e8655a', ...WORK_PROMPT_SOURCE_ANCHORS.Risiko },
    { k: 'Konzepte', icon: 'search', color: '#8fbfd8', ...WORK_PROMPT_SOURCE_ANCHORS.Konzepte },
    { k: 'Projekt', icon: 'azure', color: '#8fbfd8', ...WORK_PROMPT_SOURCE_ANCHORS.Projekt },
    { k: 'Code', icon: 'file', color: WARM, ...WORK_PROMPT_SOURCE_ANCHORS.Code },
    { k: 'Scope', icon: 'briefcase', color: '#c65bb0', ...WORK_PROMPT_SOURCE_ANCHORS.Scope },
  ];
  const sidebarBox = OFFER_EDIT_PROMPT_BAR;
  const largeBox = { x: 278, y: 246, w: 1364, h: 206 };
  const agent = PROMPT_RECEIVER_AGENT_TARGET;
  const collect = Easing.easeInOutCubic(clamp((t - collectStart) / 1.65, 0, 1));
  const collectWake = rise(t, collectStart, 0.42);
  const grow = promptMorph;
  const box = {
    x: mix(sidebarBox.x, largeBox.x, promptMorph),
    y: mix(sidebarBox.y, largeBox.y, promptMorph),
    w: mix(sidebarBox.w, largeBox.w, promptMorph),
    h: mix(sidebarBox.h, largeBox.h, promptMorph),
  };
  const sendButton = {
    x: box.x + box.w - mix(42, 58, grow),
    y: box.y + box.h / 2,
    size: mix(46, 64, grow),
  };
  const promptCore = { x: box.x + box.w / 2, y: box.y + box.h / 2 + 2 };
  const promptCollapse = Easing.easeInOutCubic(clamp((t - sendStart) / promptCollapseDur, 0, 1));
  const promptContentFade = 1 - rise(t, packetArrival + 0.02, 0.30);
  const promptShellFade = 1 - rise(t, packetArrival + 0.12, 0.34);
  const promptScale = mix(1, 0.38, promptCollapse);
  const scaledPromptPoint = (pt) => ({
    x: promptCore.x + (pt.x - promptCore.x) * promptScale,
    y: promptCore.y + (pt.y - promptCore.y) * promptScale,
  });
  const promptSvgTransform = `translate(${promptCore.x} ${promptCore.y}) scale(${promptScale}) translate(${-promptCore.x} ${-promptCore.y})`;
  const promptCssTransform = `translate(${promptCore.x}px, ${promptCore.y}px) scale(${promptScale}) translate(${-promptCore.x}px, ${-promptCore.y}px)`;
  const packetGatherStart = collectStart + 0.74;
  const packetClusterX = box.x + box.w - mix(170, 164, grow);
  const packetClusterY = box.y + box.h / 2 + mix(2, 0, grow);
  const packetClusterSpacing = mix(24, 25, grow);
  const packetClusterRelX = packetClusterX - box.x;
  const packetClusterRelY = packetClusterY - box.y;
  const packetClusterWake = rise(t, packetGatherStart, 0.42) * (1 - rise(t, packetTravelStart + 0.22, 0.26));
  const packetBirth = rise(t, sendStart + 0.32, 0.26);
  const send = Easing.easeInOutCubic(clamp((t - packetTravelStart) / sendDur, 0, 1));
  const packetDock = rise(t, packetArrival - 0.50, 0.34);
  const packetFade = packetBirth * (1 - packetDock);
  const receiverAppearStart = packetArrival - 1.10;
  const fade = 1 - rise(t, end - 0.52, 0.52);
  const launch = { x: promptCore.x, y: promptCore.y };
  const messageDestination = scaledPromptPoint({ x: sendButton.x, y: sendButton.y });
  const packetPath = `M ${launch.x} ${launch.y} C ${launch.x + 36} ${launch.y - 28}, ${messageDestination.x - 84} ${messageDestination.y + 18}, ${messageDestination.x} ${messageDestination.y}`;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: op * fade, zIndex: 44 }}>
      <PromptKnowledgeReceiver t={t} appearStart={receiverAppearStart} exitStart={end} packetReceiveAt={packetArrival} />
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
        <g transform={promptSvgTransform} opacity={promptShellFade}>
          <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={mix(PROMPT_SMALL_RADIUS, PROMPT_LARGE_RADIUS, grow)}
            fill="none" stroke="url(#persistent-prompt-shell)" strokeWidth="2.2"
            strokeDasharray="1760" strokeDashoffset={(1 - collectWake) * 1760}
            opacity={(0.18 * promptIn + 0.82 * collectWake)}
            style={{ filter: 'drop-shadow(0 0 18px rgba(143,191,216,0.22))' }} />
          {sources.map((source, i) => {
            const connectionKeep = 1 - Easing.easeInOutCubic(clamp((t - (packetGatherStart + 0.18 + i * 0.025)) / 0.76, 0, 1));
            const lineFade = connectionKeep * promptContentFade;
            const packetize = Easing.easeInOutCubic(clamp((t - (packetGatherStart + i * 0.055)) / 0.86, 0, 1));
            const targetStartX = box.x + box.w - mix(270, 284, grow) + i * 42;
            const targetStartY = box.y + box.h + mix(6, 3, grow);
            const targetX = mix(targetStartX, packetClusterX + (i - (sources.length - 1) / 2) * packetClusterSpacing, packetize);
            const targetY = mix(targetStartY, packetClusterY, packetize);
            const sourceRingKeep = 1 - Easing.easeInOutCubic(clamp((collect - 0.18) / 0.72, 0, 1));
            return (
              <g key={`prompt-source-${source.k}`} opacity={collectWake * lineFade}>
                <circle cx={source.x} cy={source.y} r={24 + collectWake * 9}
                  fill="none" stroke={source.color} strokeWidth="2"
                  opacity={(0.18 + collectWake * 0.24) * sourceRingKeep * connectionKeep}
                  style={{ filter: `drop-shadow(0 0 12px ${source.color}66)` }} />
                <path d={`M ${source.x} ${source.y} L ${targetX} ${targetY}`}
                  fill="none" stroke={APP_LINE} strokeWidth="9" strokeLinecap="round" />
                <path d={`M ${source.x} ${source.y} L ${targetX} ${targetY}`}
                  fill="none" stroke={source.color} strokeWidth="2.4" strokeLinecap="round"
                  strokeDasharray="1120" strokeDashoffset={(1 - collect) * 1120}
                  style={{ filter: `drop-shadow(0 0 10px ${source.color}55)` }} />
              </g>
            );
          })}
        </g>
        <path d={packetPath}
          fill="none" stroke={APP_LINE} strokeWidth="5" strokeLinecap="round"
          opacity={send * packetFade * 0.12} />
        <path d={packetPath}
          fill="none" stroke="url(#persistent-prompt-send)" strokeWidth="2.1"
          strokeLinecap="round" strokeDasharray="860" strokeDashoffset={(1 - send) * 860}
          opacity={send * packetFade * 0.76}
          style={{ filter: 'drop-shadow(0 0 8px rgba(143,191,216,0.30))' }} />
      </svg>
      <div style={{ ...appPanel(mix(PROMPT_SMALL_RADIUS, PROMPT_LARGE_RADIUS, grow)), position: 'absolute',
        left: box.x, top: box.y, width: box.w, height: box.h,
        padding: `${mix(0, 30, grow)}px ${mix(30, 42, grow)}px ${mix(0, 28, grow)}px ${mix(38, 48, grow)}px`,
        boxSizing: 'border-box', opacity: promptIn * promptShellFade,
        display: 'grid', gridTemplateColumns: '1fr',
        columnGap: mix(14, 22, grow), alignItems: 'center',
        transform: `translateY(${(1 - promptIn) * 8}px) scale(${promptScale})`,
        transformOrigin: '50% 50%',
        boxShadow: `0 34px ${mix(42, 92, grow)}px rgba(45,38,32,${mix(0.08, 0.14, grow)}), inset 0 1px 0 rgba(255,255,255,0.76), 0 0 12px rgba(143,191,216,0.16)` }}>
        <div style={{ minWidth: 0, display: 'grid', gap: mix(0, 10, grow), opacity: promptContentFade }}>
          {/* user: "Consultant Prompt" marker line removed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: mix(16, 22, grow), minWidth: 0 }}>
            <Icon name="sparkles" size={mix(30, 38, grow)} color={WARM} sw={1.8} />
            <span style={appTyped({ fontSize: mix(31, 40, grow), fontWeight: 680,
              color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' })}>
              {displayQuery}
            </span>
            <span style={{ width: 4, height: mix(34, 46, grow), background: WARM, flexShrink: 0,
              opacity: grow > 0.2 || displayQuery.length >= query.length ? 0 : caretOn ? 0.9 : 0.15 }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: packetClusterRelX - 112, top: packetClusterRelY - 18,
          width: 224, height: 36, opacity: packetClusterWake * promptContentFade,
          transform: `translateY(${(1 - packetClusterWake) * 6}px) scale(${0.94 + packetClusterWake * 0.06})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          pointerEvents: 'none',
          borderRadius: 999,
          background: 'linear-gradient(90deg, rgba(255,250,244,0) 0%, rgba(232,226,216,0.74) 50%, rgba(255,250,244,0) 100%)',
          boxShadow: '0 0 18px rgba(240,168,94,0.055)' }}>
          <span style={{ position: 'absolute', left: 18, right: 18, top: 21, height: 2,
            borderRadius: 99,
            background: 'linear-gradient(90deg, rgba(143,191,216,0.12), rgba(240,168,94,0.42), rgba(232,101,90,0.16))' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, transform: promptCssTransform,
        transformOrigin: '0 0', pointerEvents: 'none', zIndex: 6 }}>
        {sources.map((source, i) => {
          const chipFade = (1 - rise(t, packetTravelStart + 0.16, 0.30)) * promptContentFade;
          const packetize = Easing.easeInOutCubic(clamp((t - (packetGatherStart + i * 0.055)) / 0.86, 0, 1));
          const settle = Easing.easeOutCubic(clamp((packetize - 0.68) / 0.32, 0, 1));
          const targetStartX = box.x + box.w - mix(270, 284, grow) + i * 42;
          const targetStartY = box.y + box.h + mix(6, 3, grow);
          const targetX = mix(targetStartX, packetClusterX + (i - (sources.length - 1) / 2) * packetClusterSpacing, packetize);
          const targetY = mix(targetStartY, packetClusterY, packetize);
          const arc = Math.sin(collect * Math.PI) * 28 * (1 - settle * 0.72);
          const midX = mix(source.x, targetX, collect);
          const midY = mix(source.y, targetY, collect) - arc;
          const size = mix(mix(42, 28, collect), 14.5, packetize);
          const iconOp = 1 - packetize * 1.18;
          const finalRound = mix(size * 0.34, size / 2, settle);
          return (
            <div key={`prompt-source-chip-fg-${source.k}`} style={{ position: 'absolute',
              left: midX - size / 2, top: midY - size / 2,
              width: size, height: size, borderRadius: finalRound,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: collectWake * chipFade * (1 - packetize * 0.12),
              background: packetize > 0.72 ? source.color : APP_SURFACE,
              border: `${Math.max(0, 1.2 * (1 - packetize))}px solid ${source.color}`,
              boxShadow: `0 0 ${6 + packetize * 10}px ${source.color}5a, 0 10px 22px rgba(45,38,32,${0.10 * (1 - packetize)})`,
              transform: `translateZ(0) scale(${0.98 + packetize * 0.02})`,
              overflow: 'hidden' }}>
              <div style={{ opacity: Math.max(0, iconOp),
                transform: `scale(${Math.max(0.72, 1 - packetize * 0.24)})` }}>
                <Icon name={source.icon} size={size * 0.54} color={source.color} sw={2} />
              </div>
              <span style={{ position: 'absolute', left: '50%', top: '50%',
                width: size * 0.56, height: size * 0.56, borderRadius: 99,
                background: source.color, opacity: packetize * 0.72,
                transform: 'translate(-50%, -50%)' }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SceneVertriebAppContent({ local }) {
  const eb = rise(local, 0.45, 0.6);
  const sidebarState = offerEditSidebarState(local);
  const workflowShiftX = -350 * sidebarState.visible;
  return (
    <>
      <div style={{ position: 'absolute', inset: 0,
        transform: `translateX(${workflowShiftX}px)`,
        transformOrigin: '50% 50%',
        willChange: 'transform' }}>
        <StableVertriebBackground local={local} />
      </div>
      <VertriebEditSidebar local={local} state={sidebarState} />
      <Chapter n={3} label="Angebot" op={eb} />
    </>
  );
}

function SceneVertrieb(local) {
  // Don't mount the Vertrieb project-bundle background until the offer bridge's delayed
  // "Deal closed" phase is effectively resolved.
  const mountGate = rise(local, (LOGO_BRIDGE_END - 0.20) - SCENE_VERTRIEB_START, 0.62);
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'transparent', overflow: 'hidden', opacity: mountGate }}>
      <AppViewportChild zIndex={20}>
        <SceneVertriebAppContent local={local} />
      </AppViewportChild>
    </div>
  );
}

// ══ SCENE 4 — WISSEN  (VO 37.10 "Ihr Wissen ist da, wenn es zählt." ·
//    39.26 "So haben Sie immer die richtige Antwort parat … Risiken im Blick.") ══
const KNOWLEDGE_GRAPH_NODES = [
  { id: 'agents', icon: 'agents', title: 'Consultry Intelligence', ...WISSEN_AGENT_NODE, tIn: 0.10, thinking: true, thinkUntil: 3.65, agent: true },
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
            <ConsultryIntelligenceGlyph size={84} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 790, fontSize: 42,
              lineHeight: 0.98, letterSpacing: '-0.022em', color: TEXT,
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
  const sh = { fontFamily: APP_TYPED_FONT, fontWeight: 700, letterSpacing: '-0.016em',
    textAlign: 'center', color: TEXT,
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
  const contentLocal = Math.max(0, local - CTA_BACKGROUND_LEAD);
  const solidIn = rise(contentLocal, 0.08, 0.42);
  const glow = clamp(local / 1.0, 0, 1);
  const card = rise(contentLocal, 0.25, 0.75);
  const l1 = rise(contentLocal, 0.5, 0.6);
  const l2 = rise(contentLocal, 1.55, 0.6);
  const l3 = rise(contentLocal, 2.65, 0.6);
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: `rgba(23,19,17,${0.16 + solidIn * 0.84})`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: mix(0.58, 1, solidIn) }}>
        <WissenBackground local={local} />
      </div>
      <div style={{ position: 'absolute', left: '50%', top: '44%', width: 1700, height: 1400,
        transform: 'translate(-50%,-50%)', opacity: glow * 0.9, pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(232,145,58,0.18) 0%, rgba(232,101,90,0.10) 34%, rgba(232,101,90,0.04) 54%, rgba(23,19,17,0) 70%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        opacity: mix(0.34, 1, solidIn),
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
const FINANCE_CHART_DRAW_AT = 0.86;
const FINANCE_CHART_DRAW_MAX = 40;
const FINANCE_CHART_DRAW_DUR = 4.50 * (FINANCE_CHART_DRAW_MAX / 50) + 1.00; // +1s: langsamerer, ruhigerer Draw
const FINANCE_CHART_HOLD_AFTER_DRAW = 2.00;
const FINANCE_EXIT_START_LOCAL = FINANCE_CHART_DRAW_AT + FINANCE_CHART_DRAW_DUR + FINANCE_CHART_HOLD_AFTER_DRAW;
const FINANCE_EXIT_DUR = 1.45;
const FINANCE_LOGO_FINAL_START = SCENE_FINANZ_START + FINANCE_EXIT_START_LOCAL;
const FINANCE_LOGO_FINAL_END = FINANCE_LOGO_FINAL_START + FINANCE_EXIT_DUR;
function FinanzBackground({ local }) {
  const financeDur = SCENE_FINANZ_END - SCENE_FINANZ_START;
  const play = clamp(local / Math.min(financeDur, SOL1_FRAME_COUNT / HOOK_BG_FPS), 0, 1);
  const frame = clamp(Math.floor(play * (SOL1_FRAME_COUNT - 1)) + 1, 1, SOL1_FRAME_COUNT);
  const enter = rise(local, 0.1, 0.5);
  const exit = 1 - Easing.easeInCubic(clamp((local - FINANCE_EXIT_START_LOCAL) / FINANCE_EXIT_DUR, 0, 1));
  const op = 0.70 * enter * exit;
  if (op <= 0.001) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: op, pointerEvents: 'none' }}>
      <img src={SOL1_BG(frame)} alt="" style={{ position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        filter: 'saturate(0.86) contrast(1.04) brightness(0.46)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 72% 64% at 50% 46%, rgba(23,19,17,0.18) 0%, rgba(23,19,17,0.58) 58%, rgba(23,19,17,0.86) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(23,19,17,0.54) 0%, rgba(23,19,17,0.24) 42%, rgba(23,19,17,0.70) 100%)' }} />
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
    const CW = cfg.w ?? 710, CH = cfg.h ?? 620, padL = 88, padR = 62, padT = 112, padB = 70;
    const XMIN = 0, XMAX = 50, DRAW_XMAX = cfg.drawMax ?? XMAX, YMAX = 900;
    const xh = (h) => padL + ((h - XMIN) / (XMAX - XMIN)) * (CW - padL - padR);
    const yk = (k) => CH - padB - (k / YMAX) * (CH - padT - padB);
    const chartOp = rise(local, cfg.revealAt, 0.72);
    const chartStart = cfg.drawAt;
    const chartDrawDur = cfg.drawDur ?? 6.25;
    const q = clamp((local - chartStart) / chartDrawDur, 0, 1);
    const hMax = XMIN + q * (DRAW_XMAX - XMIN);
    const fLine = valueAt(cfg.points);
    const secondary = cfg.secondary;
    const fSecondary = secondary ? valueAt(secondary.points) : null;
    const mk = (f) => {
    const arr = [];
      for (let h = XMIN; h < hMax; h += 0.65) arr.push([xh(h), yk(f(h))]);
    arr.push([xh(hMax), yk(f(hMax))]);
    return arr;
  };
    const toD = (arr) => arr.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
    const vPts = mk(fLine), cPts = mk(fCost);
    const sPts = fSecondary ? mk(fSecondary) : null;
    const lineD = toD(vPts);
    const costD = toD(cPts);
    const secondaryD = sPts ? toD(sPts) : '';
    const areaD = lineD + 'L' + vPts[vPts.length - 1][0].toFixed(1) + ' ' + (CH - padB) +
      'L' + vPts[0][0].toFixed(1) + ' ' + (CH - padB) + 'Z';
    const tip = vPts[vPts.length - 1];
    const sTip = sPts ? sPts[sPts.length - 1] : null;
    const cTip = cPts[cPts.length - 1];
    const exitX = 960 - (cfg.left + CW / 2);
    const exitY = 540 - (cfg.top + CH / 2);
    const exitEase = Easing.easeInOutCubic(chartExit);
    const exitFade = Easing.easeInCubic(clamp((chartExit - 0.18) / 0.82, 0, 1));
    const markerOpacity = clamp(q * 3.4, 0, 1);
    const markerDock = Easing.easeInOutCubic(clamp((q - 0.50) / 0.30, 0, 1)); // dock früh + zügig, dann ruhig stehen
    const markerW = 252;
    const markerH = 48;
    const markerFollowQ = Math.min(q, 0.80);
    const markerFollowH = XMIN + markerFollowQ * (DRAW_XMAX - XMIN);
    const markerFollowTip = [xh(markerFollowH), yk(fLine(markerFollowH))];
    const secondaryFollowTip = secondary ? [xh(markerFollowH), yk(fSecondary(markerFollowH))] : null;
    const markerFinalY = yk(fLine(DRAW_XMAX));
    const secondaryMarkerFinalY = secondary ? yk(fSecondary(DRAW_XMAX)) : 0;
    const markerRunX = clamp(markerFollowTip[0] + 18, padL + 10, CW - padR - markerW - 10);
    const markerDockX = CW - padR + 34;
    const markerRunY = clamp(markerFollowTip[1] - 18, padT + 8, CH - padB - markerH - 8);
    const markerDockY = clamp(markerFinalY - 21, padT + 8, CH - padB - markerH - 8);
    const markerX = mix(markerRunX, markerDockX, markerDock);
    const markerY = mix(markerRunY, markerDockY, markerDock);
    const secondaryMarkerW = 252;
    const secondaryMarkerRunX = secondaryFollowTip ? clamp(secondaryFollowTip[0] + 18, padL + 10, CW - padR - secondaryMarkerW - 10) : 0;
    const secondaryMarkerDockX = CW - padR + 34;
    const secondaryMarkerRunY = secondaryFollowTip ? clamp(secondaryFollowTip[1] + 18, padT + 8, CH - padB - markerH - 8) : 0;
    const secondaryMarkerDockY = secondary ? clamp(secondaryMarkerFinalY + 15, padT + 8, CH - padB - markerH - 8) : 0;
    const secondaryMarkerX = sTip ? mix(secondaryMarkerRunX, secondaryMarkerDockX, markerDock) : 0;
    const secondaryMarkerY = sTip ? mix(secondaryMarkerRunY, secondaryMarkerDockY, markerDock) : 0;
    const costMarkerW = 228;
    const costMarkerH = 38;
    const costMarkerX = clamp(cTip[0] + 18, padL + 10, CW - padR - costMarkerW - 10);
    const costMarkerY = clamp(cTip[1] - 52, padT + 8, CH - padB - costMarkerH - 8);
    const valueCounterK = Math.round(fLine(hMax));
    const secondaryCounterK = secondary ? Math.round(fSecondary(hMax)) : 0;
    const costCounterK = Math.round(fCost(hMax));
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
            {secondary && <linearGradient id={`${cfg.id}-secondaryline`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor={secondary.colorA} /><stop offset="1" stopColor={secondary.colorB} />
            </linearGradient>}
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
          <path d={costD} fill="none" stroke={`url(#${cfg.id}-costline)`} strokeWidth="3.35"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 8px rgba(214,128,244,0.38))' }} />
          {secondary && <path d={secondaryD} fill="none" stroke={`url(#${cfg.id}-secondaryline)`}
            strokeWidth="3.9" strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: `drop-shadow(0 0 9px ${secondary.glow})` }} />}
          <path d={lineD} fill="none" stroke={`url(#${cfg.id}-line)`} strokeWidth="3.3"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: `drop-shadow(0 0 10px ${cfg.glow})` }} />
          {q > 0.02 && <circle cx={tip[0]} cy={tip[1]} r="5.4" fill={cfg.colorA}
            style={{ filter: `drop-shadow(0 0 8px ${cfg.glow})` }} />}
          {secondary && q > 0.02 && <circle cx={sTip[0]} cy={sTip[1]} r="5.4" fill={secondary.colorA}
            style={{ filter: `drop-shadow(0 0 8px ${secondary.glow})` }} />}
          {q > 0.015 && (
            <g opacity={markerOpacity}>
              <path d={`M ${tip[0] + 5} ${tip[1]} C ${tip[0] + 24} ${tip[1]}, ${markerX - 24} ${markerY + markerH / 2}, ${markerX} ${markerY + markerH / 2}`}
                fill="none" stroke={cfg.colorA} strokeWidth="1.5" strokeLinecap="round"
                opacity={0.22 + markerDock * 0.28} />
              <g transform={`translate(${markerX} ${markerY})`}>
                <rect x="0" y="0" width={markerW} height={markerH} rx="18"
                  fill="rgba(31,26,23,0.86)" stroke={cfg.labelStroke}
                  style={{ filter: `drop-shadow(0 0 16px ${cfg.glow}) drop-shadow(0 12px 24px rgba(0,0,0,0.30))` }} />
                <text x="18" y="31" fontFamily='"Manrope", sans-serif' fontSize="26"
                  fontWeight="850" letterSpacing="-0.025em" fill="#faf9f6">€{valueCounterK}k</text>
                <text x="116" y="30" fontFamily='"JetBrains Mono", monospace' fontSize="14"
                  fontWeight="860" letterSpacing="0.105em" fill={cfg.colorA}>{cfg.lineLabel}</text>
              </g>
            </g>
          )}
          {secondary && q > 0.015 && (
            <g opacity={markerOpacity}>
              <path d={`M ${sTip[0] + 5} ${sTip[1]} C ${sTip[0] + 24} ${sTip[1]}, ${secondaryMarkerX - 24} ${secondaryMarkerY + markerH / 2}, ${secondaryMarkerX} ${secondaryMarkerY + markerH / 2}`}
                fill="none" stroke={secondary.colorA} strokeWidth="1.5" strokeLinecap="round"
                opacity={0.22 + markerDock * 0.28} />
              <g transform={`translate(${secondaryMarkerX} ${secondaryMarkerY})`}>
                <rect x="0" y="0" width={secondaryMarkerW} height={markerH} rx="18"
                  fill="rgba(24,29,32,0.88)" stroke={secondary.labelStroke || secondary.colorA}
                  style={{ filter: `drop-shadow(0 0 16px ${secondary.glow}) drop-shadow(0 12px 24px rgba(0,0,0,0.30))` }} />
                <text x="18" y="31" fontFamily='"Manrope", sans-serif' fontSize="26"
                  fontWeight="850" letterSpacing="-0.025em" fill="#faf9f6">€{secondaryCounterK}k</text>
                <text x="116" y="30" fontFamily='"JetBrains Mono", monospace' fontSize="14"
                  fontWeight="860" letterSpacing="0.105em" fill={secondary.colorA}>{secondary.lineLabel}</text>
              </g>
            </g>
          )}
          {q > 0.015 && (
            <g opacity={markerOpacity} transform={`translate(${costMarkerX} ${costMarkerY})`}>
              <rect x="0" y="0" width={costMarkerW} height={costMarkerH} rx="19"
                fill="rgba(35,24,39,0.91)" stroke="rgba(214,128,244,0.54)"
                style={{ filter: 'drop-shadow(0 0 18px rgba(214,128,244,0.34)) drop-shadow(0 14px 28px rgba(0,0,0,0.34))' }} />
              <text x="17" y="25" fontFamily='"JetBrains Mono", monospace'
                fontSize="15.5" fontWeight="860" letterSpacing="0.105em"
                fill="rgba(222,146,255,0.96)">CONSULTRY-KOSTEN · €{costCounterK}k</text>
            </g>
          )}
        </svg>
      </div>
    );
  };
  return (
    <div style={{ position: 'absolute', inset: 0, background: BG, overflow: 'hidden' }}>
      <FinanzBackground local={local} />
      <div style={{ position: 'absolute', left: '50%', top: '42%', width: 1500, height: 1100,
        transform: 'translate(-50%,-50%)', opacity: 0.5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(232,145,58,0.14) 0%, rgba(232,101,90,0.06) 40%, rgba(23,19,17,0) 68%)' }} />
      <Chapter n={5} label="Business Case" op={eb} />
      <div style={{ position: 'absolute', inset: 0, opacity: hB }}>
        {renderChart({
          id: 'finance-faktura',
          left: 405,
          top: 238,
          w: 1110,
          h: 632,
          revealAt: 1.00,
          drawAt: FINANCE_CHART_DRAW_AT,
          drawDur: FINANCE_CHART_DRAW_DUR,
          drawMax: FINANCE_CHART_DRAW_MAX,
          title: 'Business Case',
          subtitle: 'Mehr Faktura + mehr Pipeline',
          kicker: 'MEHRWERT UND PIPELINE VS. CONSULTRY-KOSTEN · € PRO JAHR',
          points: BREAKEVEN,
          colorA: '#ff9f32',
          colorB: '#ff6a24',
          areaA: 'rgba(255,159,50,0.22)',
          glow: 'rgba(255,126,36,0.82)',
          calloutStroke: 'rgba(255,159,50,0.54)',
          labelStroke: 'rgba(255,159,50,0.44)',
          labelText: 'rgba(255,159,50,0.76)',
          lineLabel: 'MEHRWERT',
          secondary: {
            points: ACQUISITION_VALUE,
            colorA: '#8fd3ff',
            colorB: '#46b8ef',
            glow: 'rgba(86,190,245,0.74)',
            labelStroke: 'rgba(143,211,255,0.46)',
            lineLabel: 'PIPELINE',
          },
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
// m0018: second workspace visit (CV drafts) runs between the match landing and the offer bridge
const WS2_ABS_START = TEAM_MATCHED_CONSULTANTS_DONE + 0.40 + HOLD_MATCH;
const CANVAS_ABS_START = WS2_ABS_START + CV_SCENE_INSERT;       // m0135: canvas opens off the workspace click
const LOGO_BRIDGE_START = CANVAS_ABS_START + CANVAS_SCENE_INSERT;
const WS2_ABS_END = CANVAS_ABS_START + 0.55;                    // workspace hands off to the canvas zoom
const CANVAS_ABS_END = LOGO_BRIDGE_START + 0.86;                // canvas underlies the gather, then fades
const LOGO_BRIDGE_GATHER_START = LOGO_BRIDGE_START;
const LOGO_BRIDGE_BUNDLE_HOLD_START = LOGO_BRIDGE_START;
const LOGO_BRIDGE_OFFER_START = LOGO_BRIDGE_START + 0.24; // center-logo KI offer drafting bridge removed; offer payoff starts directly
const LOGO_BRIDGE_OFFER_LABELS_START = LOGO_BRIDGE_OFFER_START + 1.70;
const LOGO_BRIDGE_OFFER_PAYOFF_DONE = LOGO_BRIDGE_OFFER_START + 0.90; // payoff collapsed (workspace runs before the match now)
const LOGO_BRIDGE_DEAL_PAUSE = 0.72 + BRIDGE_PAUSE_AFTER_MATCH;
const LOGO_BRIDGE_DEAL_START = LOGO_BRIDGE_OFFER_PAYOFF_DONE + LOGO_BRIDGE_DEAL_PAUSE;
const LOGO_BRIDGE_PROJECT_MORPH_START = LOGO_BRIDGE_DEAL_START + 0.56;
const LOGO_BRIDGE_END = LOGO_BRIDGE_PROJECT_MORPH_START + 3.90; // m0042: hold Deal-closed/Project over the former white gap until the Vertrieb overview lands (~58.1)
const SCENE_SOLUTION_VISUAL_END = LOGO_BRIDGE_START + 0.80;
const LOGO_BRIDGE_CENTER_X = 960;
const LOGO_BRIDGE_CENTER_Y = 548;
const LOGO_BRIDGE_MARK_SIZE = 218;
const LOGO_BRIDGE_RESULT_X = 620;
const LOGO_BRIDGE_RESULT_Y = 456;
const LOGO_BRIDGE_RESULT_SIZE = 150;
const LOGO_FULL_KEYS = [
  [-0.08, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 0],
  [SCENE_CTA_END, 960, LOGO_BLOOM_CY, LOGO_BLOOM_W, 0],
];
const LOGO_MARK_KEYS = [
  [-0.08, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [LOGO_BRIDGE_START - 0.18, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [LOGO_BRIDGE_DEAL_START - 0.22, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
  [LOGO_BRIDGE_PROJECT_MORPH_START, LOGO_MARK_CX, LOGO_MARK_CY, LOGO_MARK_SIZE, 1],
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
  const dockOut = rise(t, STAGE_DOCK_START, STAGE_DOCK_DUR);
  const introText = 1 - dockOut;
  const finalText = rise(t, FINANCE_LOGO_FINAL_START, 0.9);
  const p = Math.max(introText, finalText);
  if (p <= 0.001) return null;
  const sourceW = mark.w / LOGO_AR;
  const sourceX = mark.w * 1.08;
  const textW = sourceW - sourceX;
  const isFinalText = finalText >= introText;
  const slideX = isFinalText ? (1 - finalText) * -84 : -dockOut * 52;
  return (
    <div style={{ position: 'absolute',
      left: mark.cx - mark.w / 2 + sourceX,
      top: mark.cy - mark.w / 2,
      width: textW,
      height: mark.w,
      overflow: 'hidden',
      opacity: p * mark.op,
      transform: `translateX(${slideX}px)`,
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
  const appShellLogoSuppression = band(t, STAGE_DOCK_START + 0.02, SCENE_FINANZ_START + 0.08, 0.50);
  const shellFull = { ...full, op: full.op * (1 - appShellLogoSuppression) };
  const shellMark = { ...mark, op: mark.op * (1 - appShellLogoSuppression) };
  const sc = shellFull.w / LOGO_W0;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 64 }}>
      <img src={LOGO} alt="Consultry" style={{ position: 'absolute', left: shellFull.cx, top: shellFull.cy,
        width: LOGO_W0, height: LOGO_W0 * LOGO_AR, objectFit: 'contain', opacity: shellFull.op,
        transform: `translate(-50%,-50%) scale(${sc})`, filter: 'drop-shadow(0 6px 22px rgba(0,0,0,0.45))' }} />
      <LogoMark k={shellMark} />
      <LogoTextPart mark={shellMark} t={t} />
    </div>
  );
}

function OfferOutreachAppScene() {
  // m0018: two workspace visits — 1) empty → first-outreach draft generated from the
  // linked sources (drawer) → Team finden; 2) after the team scene: CV drafts generate
  // + CV preview, then the offer bridge takes over.
  return (
    <React.Fragment>
      <WorkspaceVisit visit={1} />
      <WorkspaceVisit visit={2} />
      <OpportunityCanvas />
    </React.Fragment>
  );
}
// ── m0135: Opportunity-Canvas — Knoten-Ansicht des Opportunity Workspace ────
function OpportunityCanvas() {
  const t = useTime();
  const op = band(t, CANVAS_ABS_START, CANVAS_ABS_END, 0.40);
  if (op <= 0.001) return null;
  const cl = t - CANVAS_ABS_START;
  const zoom = Easing.easeOutCubic(rise(cl, 0, 0.85));
  const settle = (i) => Easing.easeOutCubic(rise(cl, 0.14 + i * 0.06, 0.72));
  const bob = (seed) => Math.sin(cl * 0.85 + seed * 1.7) * 2.2;
  const angGlow = rise(cl, 4.5, 0.85);
  const tipIn = Easing.easeOutCubic(rise(cl, 5.0, 0.55));
  const CX = 748, CY = 396;
  const nodes = [
    { id: 'hub', dx: 0, dy: 0, color: '#3fa376', icon: 'briefcase', label: 'AWS Transformation', sub: 'Bank AG · Projektkontext', i: 0, hub: true },
    { id: 'signal', dx: -352, dy: -156, color: '#e0863f', icon: 'target', label: 'Signal-Cluster', i: 1 },
    { id: 'team', dx: 316, dy: -150, color: '#5f97bf', icon: 'users', label: 'Team', i: 2 },
    { id: 'cvs', dx: 372, dy: 120, color: '#5f97bf', icon: 'file', label: 'CV-Entwürfe', i: 3 },
    { id: 'outreach', dx: -356, dy: 138, color: '#c07f4f', icon: 'arrowUR', label: 'Outreach', i: 4 },
    { id: 'angebot', dx: 4, dy: 262, color: '#d59433', icon: 'file', label: 'Angebot & Vertrag', i: 5, glow: true },
    { id: 'sig1', dx: -560, dy: -252, color: '#e0863f', label: 'Financial Times', leaf: true, i: 6 },
    { id: 'sig2', dx: -600, dy: -92, color: '#e0863f', label: 'Ausschreibung', leaf: true, i: 7 },
    { id: 'max', dx: 548, dy: -246, color: '#5f97bf', label: 'Max', leaf: true, i: 8 },
    { id: 'lena', dx: 612, dy: -128, color: '#5f97bf', label: 'Lena', leaf: true, i: 9 },
    { id: 'jonas', dx: 520, dy: -20, color: '#5f97bf', label: 'Jonas', leaf: true, i: 10 },
    { id: 'cv1', dx: 632, dy: 74, color: '#c05b52', label: 'CV · Max', leaf: true, i: 11 },
    { id: 'cv2', dx: 648, dy: 182, color: '#4a7fb5', label: 'CV · Lena', leaf: true, i: 12 },
    { id: 'cv3', dx: 560, dy: 252, color: '#c05b52', label: 'CV · Jonas', leaf: true, i: 13 },
    { id: 'em', dx: -600, dy: 236, color: '#c07f4f', label: 'E-Mail', leaf: true, i: 14 },
  ];
  const byId = {};
  nodes.forEach((n) => { byId[n.id] = n; });
  const P = {};
  nodes.forEach((n) => {
    const sv = settle(n.i);
    P[n.id] = {
      x: CX + n.dx * sv + bob(n.i) * 0.35 * sv,
      y: CY + n.dy * sv + bob(n.i + 3) * sv,
      s: sv,
    };
  });
  const edges = [
    ['hub', 'signal'], ['hub', 'team'], ['hub', 'cvs'], ['hub', 'outreach'], ['hub', 'angebot'],
    ['signal', 'sig1'], ['signal', 'sig2'],
    ['team', 'max'], ['team', 'lena'], ['team', 'jonas'],
    ['cvs', 'cv1'], ['cvs', 'cv2'], ['cvs', 'cv3'],
    ['outreach', 'em'],
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: op, pointerEvents: 'none', zIndex: 26 }}>
      <div style={{ position: 'absolute', left: APP_FRAME_LEFT + APP_SIDEBAR_W, top: APP_FRAME_TOP,
        width: APP_FRAME_W - APP_SIDEBAR_W, height: APP_FRAME_H,
        overflow: 'hidden', borderRadius: '0 24px 24px 0', opacity: zoom }}>
        <AppCanvasBackdrop opacity={1} />
      </div>
      <div style={{ position: 'absolute', left: 234, top: 76, width: 1568, height: 886,
        boxSizing: 'border-box', opacity: zoom, transform: 'translateY(' + ((1 - zoom) * 16) + 'px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>Consulting Workspace</span>
          <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>Opportunity · Bank AG</span>
          <span style={{ flex: 1 }} />
          <span style={{ height: 26, borderRadius: 999, padding: '0 11px', display: 'inline-flex',
            alignItems: 'center', gap: 7, background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.34)',
            fontFamily: MONO, fontSize: 9.2, fontWeight: 820, letterSpacing: '0.11em',
            textTransform: 'uppercase', color: '#3f7b56' }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#74c69d',
              boxShadow: '0 0 8px rgba(116,198,157,0.5)' }} />
            Graph · Auto-Layout
          </span>
        </div>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 72, bottom: 0 }}>
          <svg width="1568" height="814" style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
            {edges.map((pair, ei) => {
              const pa = P[pair[0]], pb = P[pair[1]];
              const na = byId[pair[0]], nb = byId[pair[1]];
              const o = Math.min(pa.s, pb.s);
              const isHubEdge = pair[0] === 'hub';
              const ex = pb.x - pa.x, ey = pb.y - pa.y;
              const len = Math.max(1, Math.hypot(ex, ey));
              const ux = ex / len, uy = ey / len;
              const insA = na.hub ? 76 : (na.leaf ? 30 : 62);
              const insB = nb.hub ? 76 : (nb.leaf ? 30 : 62);
              const ax = pa.x + ux * insA, ay = pa.y + uy * insA;
              const bx = pb.x - ux * insB, by = pb.y - uy * insB;
              return (
                <g key={'e-' + ei}>
                  <line x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                    stroke={nb.color} strokeWidth={isHubEdge ? 1.7 : 1.1} strokeLinecap="round"
                    strokeOpacity={(isHubEdge ? 0.34 : 0.22) * o} />
                  <circle cx={ax} cy={ay} r={isHubEdge ? 3.4 : 2.7} fill={na.color} opacity={0.92 * o} />
                  <circle cx={bx} cy={by} r={isHubEdge ? 3.4 : 2.7} fill={nb.color} opacity={0.92 * o} />
                </g>
              );
            })}
          </svg>
          {nodes.map((n) => {
            const p = P[n.id];
            const glow = n.glow ? angGlow : 0;
            const tint = n.color + '1f';
            if (n.leaf) {
              return (
                <div key={n.id} style={{ position: 'absolute', left: p.x, top: p.y,
                  transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center',
                  gap: 7, padding: '5px 11px 5px 8px', background: '#ffffff', borderRadius: 9,
                  border: '1px solid ' + APP_LINE, boxShadow: '0 4px 12px rgba(45,38,32,0.07)',
                  opacity: p.s, whiteSpace: 'nowrap', cursor: 'pointer' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: n.color,
                    boxShadow: '0 0 6px ' + n.color + '88', flex: '0 0 auto' }} />
                  <span style={{ ...appTyped({ fontSize: 10.5, fontWeight: 760, color: APP_MUTED, whiteSpace: 'nowrap' }) }}>{n.label}</span>
                </div>
              );
            }
            return (
              <div key={n.id} style={{ position: 'absolute', left: p.x, top: p.y,
                transform: 'translate(-50%, -50%)', display: 'inline-flex', alignItems: 'center',
                gap: n.hub ? 11 : 9, padding: n.hub ? '10px 16px 10px 11px' : '8px 14px 8px 8px',
                background: '#ffffff', borderRadius: n.hub ? 15 : 12,
                border: n.hub ? '1.5px solid rgba(63,163,118,0.6)' : '1px solid ' + APP_LINE,
                boxShadow: n.hub
                  ? '0 12px 30px rgba(45,38,32,0.13), 0 0 22px rgba(63,163,118,0.16)'
                  : (glow > 0.01
                    ? '0 8px 22px rgba(45,38,32,0.10), 0 0 ' + (12 + glow * 16) + 'px rgba(221,160,71,' + (0.34 * glow) + ')'
                    : '0 7px 20px rgba(45,38,32,0.09)'),
                opacity: p.s, whiteSpace: 'nowrap', cursor: 'pointer' }}>
                <span style={{ width: n.hub ? 36 : 28, height: n.hub ? 36 : 28, borderRadius: n.hub ? 11 : 9,
                  background: tint, border: '1px solid ' + n.color + '3a', display: 'grid', placeItems: 'center',
                  flex: '0 0 auto' }}>
                  <Icon name={n.icon} size={n.hub ? 19 : 15} color={n.color} sw={1.9} />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', rowGap: 2, minWidth: 0 }}>
                  <span style={n.hub
                    ? { fontFamily: DISPLAY, fontWeight: 700, fontSize: 15.5, letterSpacing: '-0.012em', color: APP_TEXT, whiteSpace: 'nowrap', lineHeight: 1.05 }
                    : { ...appTyped({ fontSize: 12.5, fontWeight: 800, color: APP_TEXT, whiteSpace: 'nowrap' }), lineHeight: 1.05 }}>{n.label}</span>
                  {n.sub && (
                    <span style={{ fontFamily: MONO, fontSize: 8, fontWeight: 820, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>{n.sub}</span>
                  )}
                </span>
                {n.hub && (
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3fa376',
                    boxShadow: '0 0 8px rgba(63,163,118,0.6)', marginLeft: 2, flex: '0 0 auto' }} />
                )}
              </div>
            );
          })}
          <div style={{ position: 'absolute', left: P.angebot.x + 112, top: P.angebot.y - 8,
            height: 34, borderRadius: 999, padding: '0 13px', display: 'inline-flex', alignItems: 'center',
            gap: 8, background: '#332c25', boxShadow: '0 10px 24px rgba(45,38,32,0.28)',
            opacity: tipIn, transform: 'translateY(' + ((1 - tipIn) * 10) + 'px)', whiteSpace: 'nowrap' }}>
            <Icon name="sparkles" size={13} color={WARM} sw={2.2} />
            <span style={{ ...appTyped({ fontSize: 11.5, fontWeight: 780, color: '#f5efe6', whiteSpace: 'nowrap' }) }}>KI · Angebot aus dem Canvas erstellen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceVisit({ visit }) {
  const t = useTime();
  const v2 = visit === 2;
  const start = v2 ? WS2_ABS_START : WS_ABS_START;
  const end = v2 ? WS2_ABS_END : WS_ABS_END;
  const op = band(t, start, end, 0.34);
  if (op <= 0.001) return null;

  const local = t - start;
  const exit = rise(t, end - 0.64, 0.40);
  const pageIn = Easing.easeOutCubic(rise(local, 0, 0.58));
  const rowAccent = '#d99a55';
  const rowAccentSoft = 'rgba(217,154,85,0.58)';
  const rowTint = '#fbf4ea';
  const consultants = [
    { name: 'Sr. Architect - Max', role: 'Landing Zone', color: rowAccent, photo: 'assets/people/max.jpg', avatar: 0, skin: '#d7ad86', hair: '#3b2a24', certs: ['AZ-500', 'AWS-SAA'], score: '96%', availability: 0.78 },
    { name: 'Sec. Engineer - Lena', role: 'IAM / GuardDuty', color: rowAccent, photo: 'assets/people/lena.jpg', avatar: 1, skin: '#c9916c', hair: '#2b2425', certs: ['SC-200', 'AWS-SCS'], score: '91%', availability: 0.66 },
    { name: 'Platform Eng. - Jonas', role: 'Terraform / Kubernetes', color: rowAccent, photo: 'assets/people/jonas.jpg', avatar: 2, skin: '#e1bd93', hair: '#5a382d', certs: ['CKA', 'TF-ASSOC'], score: '84%', availability: 0.58 },
  ];
  const panelOpacity = op * (1 - exit);
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: panelOpacity,
      pointerEvents: 'none', zIndex: 24,
      transform: `translateY(${(1 - pageIn) * 18}px)` }}>
      <div style={{ position: 'absolute', left: 214, top: 56, width: 1608, height: 926,
        boxSizing: 'border-box',
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        overflow: 'visible' }}>
        <div style={{ position: 'absolute', left: 20, top: 20, width: 1568, height: 886,
          background: 'transparent', border: 'none', boxShadow: 'none',
          padding: 0, boxSizing: 'border-box' }}>
          {(() => {
            const p = rise(local, 0.52, 0.50);
            // m0001: visit 1 opens EMPTY — dashed placeholders only.
            // m0018: deliverables then fill through their own beats — visit 1 generates the
            // first outreach draft from the linked sources (drawer), visit 2 (after the team
            // scene) generates the CV drafts; the Angebot docs follow in the offer bridge.
            const gen = 0; // keeps the progress bar in its warm in-progress styling
            const outreachClickP = v2 ? 0 : band(local, 2.72, 3.18, 0.13);
            const drawerIn = v2
              ? rise(local, 1.55, 0.55) * (1 - rise(local, 8.60, 0.55))
              : rise(local, 3.00, 0.55) * (1 - rise(local, 17.45, 0.55));
            // m0054/m0078: explicit start → loading/drafting animation → result lands in the editor
            const genStartClickP = v2 ? 0 : band(local, 3.85, 4.31, 0.13);
            const genP = v2 ? 1 : rise(local, 4.45, 3.90);      // drafting: loading + assembly
            const genDone = v2 ? 1 : rise(local, 8.40, 0.45);
            // m0045: edit workflow — select subject → "Als Prompt-Kontext setzen" → linked marker
            // → edit wish per Sprachaufnahme (m0054: pulsing rec dot, transcribed words) → Anwenden
            const selP = v2 ? 0 : Easing.easeInOutCubic(rise(local, 9.25, 0.80));
            const quickOptIn = v2 ? 0 : Easing.easeOutCubic(rise(local, 10.15, 0.35)) * (1 - rise(local, 11.10, 0.30));
            const optClickP = v2 ? 0 : band(local, 10.70, 11.16, 0.13);
            const markerIn = v2 ? 0 : Easing.easeOutCubic(rise(local, 11.05, 0.40));
            const typeP = v2 ? 0 : rise(local, 11.30, 2.60);
            const applyClickP = v2 ? 0 : band(local, 14.20, 14.66, 0.13);
            const editApply = v2 ? 1 : Easing.easeInOutCubic(rise(local, 14.45, 1.10));
            const confirmP = v2 ? 1 : rise(local, 16.15, 0.40);  // Entwurf bestätigen
            const afterDraft = v2 ? 1 : Easing.easeOutCubic(rise(local, 17.85, 0.65)); // placeholder → filled card
            // m0087: visit-2 CV flow — panel opens with a selection view (select or bulk) →
            // generate click → loading → CV preview → accept → back to the workspace (slots fill)
            const cvClickP = 0;
            const bulkClickP = v2 ? band(local, 1.30, 1.76, 0.13) : 0;   // "CVs erstellen" — opens the panel
            const cvSelAllClickP = v2 ? band(local, 2.60, 3.06, 0.13) : 0;
            const cvSelAllDone = v2 ? rise(local, 2.75, 0.30) : 0;
            const cvChk = (i) => (v2 ? Easing.easeOutCubic(rise(local, 2.80 + i * 0.28, 0.30)) : 0);
            const cvStartClickP = v2 ? band(local, 3.90, 4.36, 0.13) : 0;
            const cvAcceptClickP = v2 ? band(local, 7.90, 8.36, 0.13) : 0;
            const bulkDone = v2 ? rise(local, 8.05, 0.40) : 0;           // accept → workspace slots fill
            const cvGen = (i) => (v2 ? Easing.easeOutCubic(rise(local, 9.05 + i * 0.75, 0.70)) : 0);
            const cvAll = (cvGen(0) + cvGen(1) + cvGen(2)) / 3;
            const teamFindClick = v2 ? 0 : band(local, 19.25, 19.71, 0.10);
            const sB = v2 ? 0.18 : 0.90;
            const sSt = v2 ? 0.14 : 0.25;
            const sDur = v2 ? 0.45 : 0.55;
            const s1 = Easing.easeOutCubic(rise(local, sB, sDur));            // outreach
            const s2 = Easing.easeOutCubic(rise(local, sB + sSt, sDur));      // CV / Angebot slots
            const s3 = Easing.easeOutCubic(rise(local, sB + sSt * 2, sDur));  // meetings
            const s4 = Easing.easeOutCubic(rise(local, sB + sSt * 3, sDur));  // team row
            const progress = v2
              ? Math.round(38 + cvAll * 26)
              : Math.round(mix(6, 18, p) + afterDraft * 20);
            // m0001: empty deliverable slot — dashed shell, faint glyph, micro-label
            const emptyDocSlot = (key, glyph, label) => (
              <span key={key} style={{ height: 112, borderRadius: 10, boxSizing: 'border-box',
                display: 'grid', alignContent: 'center', justifyItems: 'center', rowGap: 7,
                background: 'rgba(45,38,32,0.015)', border: `1.6px dashed ${APP_LINE_STRONG}` }}>
                <span style={{ width: 30, height: 30, borderRadius: glyph === 'user' ? 999 : 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#fffaf3', border: `1.6px dashed ${APP_LINE_STRONG}`,
                  ...appTyped({ fontSize: 12.5, fontWeight: 800, color: APP_FAINT }) }}>
                  {glyph === 'user' ? '?' : <Icon name={glyph} size={14} color={APP_FAINT} sw={2.1} />}
                </span>
                <span style={{ fontFamily: MONO, fontSize: 8.2, fontWeight: 830, letterSpacing: '0.11em',
                  textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>{label}</span>
                <span style={{ width: 62, height: 3.5, borderRadius: 99, background: 'rgba(45,38,32,0.08)' }} />
              </span>
            );
            const cvDocs = [
              { name: 'CV_Max.pdf', type: 'PDF' },
              { name: 'CV_Lena.docx', type: 'DOCX' },
              { name: 'CV_Jonas.pdf', type: 'PDF' },
            ];
            // m0018: filled deliverable window (restored) — used once the drafts exist
            const docWindow = (doc, idx, leading) => (
              <span key={doc.name} style={{ height: '100%', borderRadius: 10,
                display: 'block', position: 'relative', overflow: 'hidden',
                background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
                boxShadow: '0 6px 14px rgba(45,38,32,0.07)' }}>
                <span style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 21,
                  display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px',
                  boxSizing: 'border-box',
                  background: rowTint, borderBottom: `1px solid ${APP_LINE}` }}>
                  <span style={{ fontFamily: MONO, fontSize: 6.8, fontWeight: 840,
                    letterSpacing: '0.07em', color: '#fdfaf5', lineHeight: 1,
                    background: doc.type === 'DOCX' ? '#4a7fb5' : '#c05b52', borderRadius: 4,
                    padding: '3px 4px' }}>
                    {doc.type}
                  </span>
                  <span style={{ ...appTyped({ fontSize: 9, fontWeight: 800, color: APP_MUTED,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                    {doc.name}
                  </span>
                </span>
                <span style={{ position: 'absolute', left: 8, top: 28, width: 22, height: 22,
                  borderRadius: leading === 'avatar' ? 99 : 7, overflow: 'hidden',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: leading === 'avatar' ? 'transparent' : rowTint,
                  border: leading === 'avatar' ? 'none' : `1px solid ${APP_LINE}` }}>
                  {leading === 'avatar'
                    ? <ConsultantAvatar person={consultants[idx]} size={22} selected={0} />
                    : <Icon name={doc.icon} size={12} color={rowAccent} sw={2.2} />}
                </span>
                <span style={{ position: 'absolute', left: 36, right: 10, top: 31, height: 4,
                  borderRadius: 99, background: 'rgba(45,38,32,0.18)' }} />
                <span style={{ position: 'absolute', left: 36, right: 24, top: 40, height: 3.5,
                  borderRadius: 99, background: 'rgba(45,38,32,0.09)' }} />
                <span style={{ position: 'absolute', left: 8, right: 14, top: 62, height: 3.5,
                  borderRadius: 99, background: 'rgba(45,38,32,0.09)' }} />
                <span style={{ position: 'absolute', left: 8, right: 34, top: 71, height: 3.5,
                  borderRadius: 99, background: 'rgba(45,38,32,0.07)' }} />
                <span style={{ position: 'absolute', left: 8, right: 48, top: 80, height: 3.5,
                  borderRadius: 99, background: 'rgba(45,38,32,0.07)' }} />
                <span style={{ position: 'absolute', left: 8, right: 20, top: 92, height: 3.5,
                  borderRadius: 99, background: 'rgba(45,38,32,0.08)' }} />
              </span>
            );
            const sectionLabel = (text) => (
              <span style={{ display: 'inline-grid', gap: 5, justifyItems: 'start' }}>
                <span style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 850,
                  letterSpacing: '0.14em', textTransform: 'uppercase', color: APP_MUTED,
                  whiteSpace: 'nowrap' }}>{text}</span>
                <span style={{ width: 30, height: 3, borderRadius: 99,
                  background: rowAccent, opacity: 0.8 }} />
              </span>
            );
            return (
              <div style={{ position: 'relative', height: 886,
                opacity: p, transform: `translateX(${(1 - p) * 22}px)`,
                padding: `10px ${6 + drawerIn * 562}px 10px 6px`,
                boxSizing: 'border-box' }}>
                <div style={{ position: 'relative', height: 846, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 0 0' }}>
                  <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820,
                    letterSpacing: '0.13em', textTransform: 'uppercase', color: APP_FAINT,
                    whiteSpace: 'nowrap' }}>Opportunity Workspace</span>
                  <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
                  <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820,
                    letterSpacing: '0.13em', textTransform: 'uppercase', color: '#9a6a2e',
                    whiteSpace: 'nowrap' }}>New Opportunity · Bank AG</span>
                  <span style={{ flex: 1 }} />
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
                    ...appTyped({ fontSize: 11, fontWeight: 800, color: v2 ? '#3f7b56' : '#9a6a2e',
                      whiteSpace: 'nowrap' }) }}>
                    <Icon name={v2 ? 'check' : 'sparkles'} size={12} color={v2 ? '#3f7b56' : '#9a6a2e'} sw={2.4} />
                    {v2 ? 'Team bestätigt · 3 Consultants' : 'aus Signal angelegt'}
                  </span>

                </div>
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr auto 64px',
                  alignItems: 'center', gap: 16 }}>
                  <div style={{ position: 'relative', height: 10, borderRadius: 99,
                    background: 'rgba(45,38,32,0.09)', overflow: 'visible' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${progress}%`,
                      borderRadius: 99,
                      background: `linear-gradient(90deg, ${rowAccent} 0%, ${gen > 0.88 ? '#74c69d' : WARM} 100%)`,
                      boxShadow: `0 0 ${8 + gen * 8}px rgba(240,168,94,0.35)` }} />
                    {[25, 50, 75].map((tick) => (
                      <span key={`progress-tick-${tick}`} style={{ position: 'absolute',
                        left: `${tick}%`, top: 2, bottom: 2, width: 1.5,
                        background: progress > tick ? 'rgba(255,255,255,0.55)' : 'rgba(45,38,32,0.16)' }} />
                    ))}
                    <span style={{ position: 'absolute', left: `${progress}%`, top: '50%',
                      width: 15, height: 15, borderRadius: 99, transform: 'translate(-50%,-50%)',
                      background: '#ffffff',
                      border: `3px solid ${gen > 0.88 ? '#74c69d' : WARM}`, boxSizing: 'border-box',
                      boxShadow: '0 2px 8px rgba(45,38,32,0.22)' }} />
                  </div>
                  <span style={{ height: 26, borderRadius: 999, padding: '0 11px',
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: gen > 0.88 ? '#e8f4ec' : APP_RAISED,
                    border: `1px solid ${gen > 0.88 ? 'rgba(116,198,157,0.34)' : APP_LINE}`,
                    fontFamily: MONO, fontSize: 9.2, fontWeight: 820, letterSpacing: '0.11em',
                    textTransform: 'uppercase',
                    color: gen > 0.88 ? '#3f7b56' : APP_MUTED }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99,
                      background: gen > 0.88 ? '#74c69d' : WARM,
                      boxShadow: gen > 0.88 ? '0 0 8px rgba(116,198,157,0.5)' : '0 0 8px rgba(240,168,94,0.5)' }} />
                    {v2 || afterDraft > 0.5 ? 'In Arbeit' : 'Neu angelegt'}
                  </span>
                  <span style={{ ...appTyped({ fontSize: 16, fontWeight: 850, color: APP_TEXT,
                    textAlign: 'right' }) }}>
                    {progress}%
                  </span>
                </div>
                <div style={{ marginTop: 16, paddingTop: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {sectionLabel('Outreach · Entwurf')}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                      whiteSpace: 'nowrap',
                      ...appTyped({ fontSize: 10, fontWeight: 800, color: '#9a6a2e' }) }}>
                      <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                      {afterDraft > 0.5 ? 'aus Signal & Referenzen personalisiert' : 'wird aus Signal & Referenzen personalisiert'}
                    </span>
                  </div>
                  {(() => {
                    const phOp = clamp(1 - afterDraft * 2, 0, 1);
                    const cardOp = clamp(afterDraft * 2 - 1, 0, 1);
                    return (
                      <div style={{ marginTop: 12, height: v2 ? 88 : 149, position: 'relative',
                        opacity: s1, transform: `translateY(${(1 - s1) * 10}px)` }}>
                        {phOp > 0.001 && (
                          <div style={{ position: 'absolute', inset: 0, borderRadius: 16, boxSizing: 'border-box',
                            border: `1.6px dashed ${outreachClickP > 0.01 ? 'rgba(240,168,94,0.85)' : APP_LINE_STRONG}`,
                            background: 'rgba(240,168,94,0.04)',
                            boxShadow: outreachClickP > 0.01 ? `0 0 ${14 + outreachClickP * 18}px rgba(240,168,94,0.30)` : 'none',
                            transform: `scale(${1 - outreachClickP * 0.008})`,
                            display: 'grid', alignContent: 'center', justifyItems: 'center', rowGap: 8,
                            opacity: phOp }}>
                            <span style={{ width: 38, height: 38, borderRadius: 999, display: 'flex',
                              alignItems: 'center', justifyContent: 'center',
                              background: '#fffaf3', border: `1.6px dashed ${APP_LINE_STRONG}` }}>
                              <Icon name="pencil" size={16} color={APP_FAINT} sw={2.1} />
                            </span>
                            <span style={{ ...appTyped({ fontSize: 12.5, fontWeight: 810, color: APP_MUTED,
                              whiteSpace: 'nowrap' }) }}>Noch kein Entwurf</span>
                            <span style={{ ...appTyped({ fontSize: 10.5, fontWeight: 700, color: APP_FAINT,
                              whiteSpace: 'nowrap' }) }}>
                              {drawerIn > 0.02 ? 'Entwurf wird aus Quellen generiert…' : 'Erstellen aus Signal & Referenzen'}
                            </span>
                          </div>
                        )}
                        {cardOp > 0.001 && (
                          <div style={{ position: 'absolute', inset: 0, borderRadius: 16, background: '#fffaf3',
                            border: '1px solid rgba(240,168,94,0.5)', padding: v2 ? '0 20px' : '17px 20px',
                            display: v2 ? 'grid' : 'block', alignContent: 'center',
                            boxShadow: '0 12px 28px rgba(240,168,94,0.10)', boxSizing: 'border-box',
                            opacity: cardOp, transform: `translateY(${(1 - cardOp) * 8}px)` }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                              <span style={{ height: 34, borderRadius: 999, padding: '0 14px 0 5px', flexShrink: 0,
                                display: 'inline-flex', alignItems: 'center', gap: 9,
                                background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
                                ...appTyped({ fontSize: 12.5, fontWeight: 800, color: APP_TEXT }) }}>
                                <span style={{ width: 26, height: 26, borderRadius: 99, overflow: 'hidden',
                                  display: 'inline-flex', flexShrink: 0 }}>
                                  <ConsultantAvatar person={{ avatar: 1, skin: '#cfa17f', hair: '#352728' }}
                                    size={26} selected={0} />
                                </span>
                                An: Dr. S. Weber · CIO Bank AG
                              </span>
                              <span style={{ height: 34, borderRadius: 999, padding: '0 13px 0 10px', flexShrink: 0,
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                background: 'rgba(74,127,181,0.10)', border: '1px solid rgba(74,127,181,0.36)',
                                ...appTyped({ fontSize: 12.5, fontWeight: 800, color: '#3a6ea8' }) }}>
                                <img src="assets/tech-icons/microsoft-outlook.svg" alt="" style={{ width: 17, height: 17, display: 'block' }} />
                                Outlook · E-Mail
                              </span>
                              <span style={{ ...appTyped({ fontSize: 15, fontWeight: 840, color: APP_TEXT,
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                                AWS Cloud Transformation – Anknüpfung an Versicherer Z
                              </span>
                              {v2 && (
                                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center',
                                  gap: 7, flexShrink: 0,
                                  ...appTyped({ fontSize: 10.5, fontWeight: 800, color: '#3f7b56',
                                    whiteSpace: 'nowrap' }) }}>
                                  <span style={{ width: 6, height: 6, borderRadius: 99, background: '#74c69d',
                                    boxShadow: '0 0 9px rgba(116,198,157,0.55)' }} />
                                  bestätigt · Versand geplant
                                </span>
                              )}
                            </div>
                            {!v2 && (
                            <React.Fragment>
                            <span style={{ display: 'block', marginTop: 14, height: 4.5, borderRadius: 99,
                              width: '88%', background: 'rgba(45,38,32,0.12)' }} />
                            <span style={{ display: 'block', marginTop: 8, height: 4.5, borderRadius: 99,
                              width: '74%', background: 'rgba(45,38,32,0.09)' }} />
                            <span style={{ display: 'block', marginTop: 8, height: 4.5, borderRadius: 99,
                              width: '58%', background: 'rgba(45,38,32,0.07)' }} />
                            <div style={{ marginTop: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                              {['Signal-Bezug: FT-Artikel', 'Referenz: Versicherer Z'].map((chip) => (
                                <span key={chip} style={{ height: 24, borderRadius: 999, padding: '0 10px',
                                  display: 'inline-flex', alignItems: 'center', gap: 6,
                                  background: '#ffffff', border: `1px solid ${APP_LINE}`,
                                  ...appTyped({ fontSize: 10, fontWeight: 760, color: APP_MUTED,
                                    whiteSpace: 'nowrap' }) }}>
                                  <span style={{ width: 5, height: 5, borderRadius: 99, background: '#d99a55' }} />
                                  {chip}
                                </span>
                              ))}
                              <span style={{ flex: 1 }} />
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
                                ...appTyped({ fontSize: 10.5, fontWeight: 800, color: '#3f7b56',
                                  whiteSpace: 'nowrap' }) }}>
                                <span style={{ width: 6, height: 6, borderRadius: 99, background: '#74c69d',
                                  boxShadow: '0 0 9px rgba(116,198,157,0.55)' }} />
                                bestätigt · Versand geplant
                              </span>
                            </div>
                            </React.Fragment>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
                <div style={{ marginTop: 12, paddingTop: 14, borderTop: `1px solid ${APP_LINE}`,
                  opacity: s2, transform: `translateY(${(1 - s2) * 10}px)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {sectionLabel('Angebot & Vertrag')}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                      whiteSpace: 'nowrap', height: 24, borderRadius: 999, padding: '0 9px',
                      background: 'transparent', border: `1px dashed ${APP_LINE_STRONG}`,
                      ...appTyped({ fontSize: 10, fontWeight: 780, color: APP_MUTED }) }}>
                      Entwurf folgt
                    </span>
                  </div>
                  <div style={{ marginTop: 11, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9 }}>
                    {[
                      { icon: 'briefcase', label: 'Leistung' },
                      { icon: 'file', label: 'Vertrag' },
                      { icon: 'euro', label: 'Konditionen' },
                    ].map((slot) => emptyDocSlot(`offer-empty-${slot.label}`, slot.icon, slot.label))}
                  </div>
                </div>
                <div style={{ marginTop: 12 * (1 - drawerIn), paddingTop: 12 * (1 - drawerIn),
                  borderTop: `1px solid ${APP_LINE}`,
                  maxHeight: `${(1 - drawerIn) * 60}px`, overflow: 'hidden',
                  opacity: 1 - drawerIn }}>
                  <div style={{ height: 44, borderRadius: 13, display: 'flex', alignItems: 'center',
                    gap: 12, padding: '0 12px', boxSizing: 'border-box',
                    background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                    <span style={{ width: 0, height: 0, flexShrink: 0,
                      borderTop: '4.5px solid transparent', borderBottom: '4.5px solid transparent',
                      borderLeft: `6px solid ${APP_MUTED}` }} />
                    <span style={{ fontFamily: MONO, fontSize: 10.5, fontWeight: 850,
                      letterSpacing: '0.14em', textTransform: 'uppercase', color: APP_MUTED,
                      whiteSpace: 'nowrap' }}>Referenzen & Quellen</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                      {['Versicherer Z · AWS Landing Zone', 'Bank XY · SOC-Aufbau'].map((refName) => (
                        <span key={`ref-chip-${refName}`} style={{ height: 26, borderRadius: 999,
                          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0 10px',
                          background: '#ffffff', border: `1px solid ${APP_LINE}` }}>
                          <Icon name="check" size={11} color="#3f7b56" sw={2.6} />
                          <span style={{ ...appTyped({ fontSize: 10.5, fontWeight: 790, color: APP_TEXT,
                            whiteSpace: 'nowrap' }) }}>{refName}</span>
                        </span>
                      ))}
                      <span style={{ height: 26, borderRadius: 999, padding: '0 10px',
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        background: 'transparent', border: `1px dashed ${APP_LINE_STRONG}`,
                        ...appTyped({ fontSize: 10.5, fontWeight: 780, color: APP_MUTED,
                          whiteSpace: 'nowrap' }) }}>+ 4 Quellen</span>
                    </span>
                    <span style={{ flex: 1 }} />
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                      whiteSpace: 'nowrap',
                      ...appTyped({ fontSize: 10, fontWeight: 800, color: '#9a6a2e' }) }}>
                      <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                      aus Wissen
                    </span>
                    <span style={{ height: 28, borderRadius: 999, padding: '0 10px 0 8px',
                      display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
                      background: '#ffffff', border: `1px solid ${APP_LINE}` }}>
                      <Icon name="pencil" size={12} color={APP_MUTED} sw={2} />
                      <span style={{ ...appTyped({ fontSize: 10, fontWeight: 790, color: APP_MUTED,
                        whiteSpace: 'nowrap' }) }}>Bearbeiten</span>
                    </span>
                    <span style={{ height: 28, borderRadius: 999, padding: '0 10px 0 8px',
                      display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
                      background: '#ffffff', border: `1px solid ${APP_LINE}` }}>
                      <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 4px)', gap: 2 }}>
                        {[0, 1, 2, 3].map((dot) => (
                          <span key={`ref-config-dot-${dot}`} style={{ width: 4, height: 4,
                            borderRadius: 1.5, background: APP_FAINT }} />
                        ))}
                      </span>
                      <span style={{ ...appTyped({ fontSize: 10, fontWeight: 790, color: APP_MUTED,
                        whiteSpace: 'nowrap' }) }}>Konfigurieren</span>
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: 12, borderRadius: 16, background: APP_RAISED,
                  border: drawerIn > 0.98 ? 'none' : `1px solid ${APP_LINE}`,
                  padding: `${14 * (1 - drawerIn)}px 16px`, boxSizing: 'border-box',
                  maxHeight: `${(1 - drawerIn) * 160}px`, overflow: 'hidden',
                  opacity: (1 - drawerIn) * s3, transform: `translateY(${(1 - s3) * 10}px)` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {sectionLabel('Meetings')}
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
                      whiteSpace: 'nowrap',
                      ...appTyped({ fontSize: 10, fontWeight: 820, color: '#9a6a2e' }) }}>
                      <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                      Kalender & Teams verknüpft
                    </span>
                  </div>
                  <div style={{ marginTop: 11, display: 'grid', gridTemplateColumns: '1fr 1fr auto',
                    gap: 9, alignItems: 'stretch' }}>
                    {['a', 'b'].map((slotKey) => (
                      <div key={`meeting-empty-${slotKey}`} style={{ height: 58, borderRadius: 13,
                        display: 'grid', gridTemplateColumns: '34px 1fr', columnGap: 11,
                        alignItems: 'center', padding: '0 12px', boxSizing: 'border-box',
                        background: 'transparent', border: `1.6px dashed ${APP_LINE_STRONG}` }}>
                        <span style={{ width: 32, height: 32, borderRadius: 10, display: 'flex',
                          alignItems: 'center', justifyContent: 'center',
                          background: '#fffaf3', border: `1.6px dashed ${APP_LINE_STRONG}` }}>
                          <Icon name="clock" size={14} color={APP_FAINT} sw={2.1} />
                        </span>
                        <span style={{ display: 'grid', gap: 7 }}>
                          <span style={{ width: '54%', height: 4, borderRadius: 99, background: 'rgba(45,38,32,0.10)' }} />
                          <span style={{ width: '36%', height: 3.5, borderRadius: 99, background: 'rgba(45,38,32,0.07)' }} />
                        </span>
                      </div>
                    ))}
                    <div style={{ height: 58, borderRadius: 13, display: 'flex',
                      alignItems: 'center', gap: 8, padding: '0 16px', boxSizing: 'border-box',
                      border: `1.6px dashed ${APP_LINE_STRONG}`, background: 'transparent' }}>
                      <span style={{ ...appTyped({ fontSize: 13, fontWeight: 840, color: APP_MUTED }) }}>+</span>
                      <span style={{ ...appTyped({ fontSize: 11.5, fontWeight: 790, color: APP_MUTED,
                        whiteSpace: 'nowrap' }) }}>Meeting planen</span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 12 + drawerIn * 16, height: 62, borderRadius: 16, display: 'grid',
                  gridTemplateColumns: 'auto auto 1fr auto', alignItems: 'center', columnGap: 16,
                  padding: '0 8px 0 18px', boxSizing: 'border-box',
                  background: v2 ? '#ffffff' : 'rgba(240,168,94,0.06)',
                  border: v2 ? `1px solid ${APP_LINE}` : '1.6px dashed rgba(240,168,94,0.55)',
                  opacity: s4, transform: `translateY(${(1 - s4) * 10}px)` }}>
                  {sectionLabel(v2 ? 'Team · 3 Consultants' : 'Team · 3 Rollen offen')}
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {[0, 1, 2].map((slot) => (
                      <span key={`team-slot-${slot}`} style={{ width: 34, height: 34, borderRadius: 999,
                        marginLeft: slot === 0 ? 0 : -8, boxSizing: 'border-box', overflow: 'hidden',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        background: '#fffaf3',
                        border: v2 ? '2px solid #ffffff' : `1.6px dashed ${APP_LINE_STRONG}`,
                        ...appTyped({ fontSize: 13, fontWeight: 800, color: APP_FAINT }) }}>
                        {v2 ? <ConsultantAvatar person={consultants[slot]} size={30} selected={0} /> : '?'}
                      </span>
                    ))}
                  </span>
                  <span style={{ ...appTyped({ fontSize: 12, fontWeight: 740, color: APP_MUTED,
                    whiteSpace: 'nowrap' }) }}>
                    {v2 ? 'Max · Lena · Jonas zugeordnet · Security & Platform' : 'noch keine Consultants zugeordnet · Security & Platform'}
                  </span>
                  {v2 ? (
                    <span style={{ height: 36, borderRadius: 999, padding: '0 14px',
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.34)',
                      ...appTyped({ fontSize: 12.5, fontWeight: 820, color: '#3f7b56',
                        whiteSpace: 'nowrap' }) }}>
                      <Icon name="check" size={13} color="#3f7b56" sw={2.6} />
                      Team bestätigt · 96 % Match
                    </span>
                  ) : (
                    <span style={{ height: 36, borderRadius: 999, padding: '0 14px',
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      transform: `scale(${1 - teamFindClick * 0.04})`,
                      background: 'rgba(240,168,94,0.14)',
                      border: '1px solid rgba(240,168,94,0.30)',
                      boxShadow: teamFindClick > 0.01
                        ? `0 0 ${16 + teamFindClick * 18}px rgba(240,168,94,0.45)`
                        : 'none',
                      ...appTyped({ fontSize: 12.5, fontWeight: 820, color: '#9a6a2e',
                        whiteSpace: 'nowrap' }) }}>
                      <Icon name="arrowUR" size={13} color="#9a6a2e" sw={2.4} />
                      Team finden · Consultants matchen
                    </span>
                  )}
                </div>
                {v2 && (() => {
                  // m0034: CV section appears below "Team" once the team is selected; the drafts
                  // must be confirmed for generation first — bulk ("Alle 3 generieren") or single.
                  const s5 = Easing.easeOutCubic(rise(local, sB + sSt * 4, sDur));
                  return (
                    <div style={{ marginTop: 12, opacity: s5, transform: `translateY(${(1 - s5) * 10}px)` }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {sectionLabel('CV-Dokumente')}
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                            whiteSpace: 'nowrap', height: 24, borderRadius: 999, padding: '0 9px',
                            background: cvAll > 0.92 ? '#e8f4ec' : bulkDone > 0.5 ? 'rgba(240,168,94,0.14)' : 'transparent',
                            border: cvAll > 0.92 ? '1px solid rgba(116,198,157,0.34)' : bulkDone > 0.5 ? '1px solid rgba(240,168,94,0.30)' : `1px dashed ${APP_LINE_STRONG}`,
                            ...appTyped({ fontSize: 10, fontWeight: 820,
                              color: cvAll > 0.92 ? '#3f7b56' : bulkDone > 0.5 ? '#9a6a2e' : APP_MUTED }) }}>
                            {cvAll > 0.92 ? '3 Entwürfe · aus Team-Match' : bulkDone > 0.5 ? 'wird aus Team-Match erstellt…' : 'bereit zur Generierung'}
                          </span>
                          <span style={{ height: 28, borderRadius: 999, padding: '0 12px',
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            transform: `scale(${1 - bulkClickP * 0.04})`,
                            background: bulkDone > 0.5 ? '#e8f4ec' : 'rgba(240,168,94,0.14)',
                            border: `1px solid ${bulkDone > 0.5 ? 'rgba(116,198,157,0.34)' : 'rgba(240,168,94,0.30)'}`,
                            boxShadow: bulkClickP > 0.01 ? `0 0 ${14 + bulkClickP * 16}px rgba(240,168,94,0.40)` : 'none',
                            ...appTyped({ fontSize: 11, fontWeight: 820,
                              color: bulkDone > 0.5 ? '#3f7b56' : '#9a6a2e', whiteSpace: 'nowrap' }) }}>
                            {bulkDone > 0.5
                              ? <Icon name="check" size={12} color="#3f7b56" sw={2.6} />
                              : <Icon name="sparkles" size={12} color="#9a6a2e" sw={2.4} />}
                            {bulkDone > 0.5 ? '3 beauftragt' : 'CVs erstellen'}
                          </span>
                        </span>
                      </div>
                      <div style={{ marginTop: 11, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9 }}>
                        {[0, 1, 2].map((idx) => {
                          const g = cvGen(idx);
                          const clickGlow = idx === 0 ? cvClickP : 0;
                          return (
                            <span key={`cv-card-${idx}`} style={{ position: 'relative', display: 'block',
                              height: 100, borderRadius: 10,
                              transform: `scale(${1 - clickGlow * 0.02})`,
                              boxShadow: clickGlow > 0.01 ? `0 0 ${14 + clickGlow * 16}px rgba(240,168,94,0.34)` : 'none' }}>
                              {g < 0.999 && (
                                <span style={{ position: 'absolute', inset: 0, display: 'block', opacity: 1 - g,
                                  borderRadius: 10, background: '#ffffff', border: `1px solid ${APP_LINE}`,
                                  padding: '12px 14px', boxSizing: 'border-box' }}>
                                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <span style={{ width: 30, height: 30, borderRadius: 999, overflow: 'hidden',
                                      display: 'inline-flex', flexShrink: 0 }}>
                                      <ConsultantAvatar person={consultants[idx]} size={30} selected={0} />
                                    </span>
                                    <span style={{ minWidth: 0 }}>
                                      <span style={{ display: 'block', ...appTyped({ fontSize: 11.5, fontWeight: 820,
                                        color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden',
                                        textOverflow: 'ellipsis' }) }}>{consultants[idx].name}</span>
                                      <span style={{ display: 'block', marginTop: 2, ...appTyped({ fontSize: 9.5,
                                        fontWeight: 700, color: APP_FAINT, whiteSpace: 'nowrap' }) }}>{consultants[idx].role}</span>
                                    </span>
                                    <span style={{ marginLeft: 'auto', height: 24, borderRadius: 999,
                                      padding: '0 9px', display: 'inline-flex', alignItems: 'center', gap: 5, flexShrink: 0,
                                      background: bulkDone > 0.5 ? 'rgba(240,168,94,0.12)' : 'transparent',
                                      border: bulkDone > 0.5 ? '1px solid rgba(240,168,94,0.32)' : `1px dashed ${APP_LINE_STRONG}`,
                                      ...appTyped({ fontSize: 9.5, fontWeight: 800,
                                        color: bulkDone > 0.5 ? '#9a6a2e' : APP_MUTED, whiteSpace: 'nowrap' }) }}>
                                      <Icon name={bulkDone > 0.5 ? 'sparkles' : 'pencil'} size={10}
                                        color={bulkDone > 0.5 ? '#9a6a2e' : APP_MUTED} sw={2.3} />
                                      {bulkDone > 0.5 ? 'generiert…' : 'Generieren'}
                                    </span>
                                  </span>
                                  <span style={{ display: 'block', marginTop: 13, height: 4, borderRadius: 99,
                                    width: '62%', border: `1px dashed ${APP_LINE_STRONG}`, boxSizing: 'border-box' }} />
                                  <span style={{ display: 'block', marginTop: 7, height: 4, borderRadius: 99,
                                    width: '44%', border: `1px dashed ${APP_LINE}`, boxSizing: 'border-box' }} />
                                </span>
                              )}
                              {g > 0.001 && (
                                <span style={{ position: 'absolute', inset: 0, display: 'block', opacity: g,
                                  transform: `translateY(${(1 - g) * 8}px)` }}>
                                  {docWindow(cvDocs[idx], idx, 'avatar')}
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
                <div style={{ position: 'absolute', right: 0, top: 118, width: 5, height: 190,
                  borderRadius: 99, background: 'rgba(45,38,32,0.13)' }} />
                </div>
                <div style={{ position: 'absolute', left: 6, right: 6 + drawerIn * 562, bottom: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                    {(() => {
                      const toolsClick = 0;
                      const toolsOpen = 0; // m0018: Tools beat cut — both visits are busy with draft flows
                      return (
                        <span style={{ position: 'relative', display: 'inline-flex' }}>
                          <span style={{ height: 40, borderRadius: 999, padding: '0 15px 0 12px',
                            display: 'inline-flex', alignItems: 'center', gap: 9,
                            transform: `scale(${1 - toolsClick * 0.04})`,
                            background: APP_SURFACE,
                            border: `1px solid ${toolsOpen > 0.02 ? 'rgba(240,168,94,0.55)' : APP_LINE_STRONG}`,
                            boxShadow: toolsOpen > 0.02
                              ? '0 0 16px rgba(240,168,94,0.24)'
                              : '0 4px 12px rgba(45,38,32,0.08)' }}>
                            <span style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 5px)',
                              gap: 2.5 }}>
                              {[0, 1, 2, 3].map((dot) => (
                                <span key={`tools-dot-${dot}`} style={{ width: 5, height: 5,
                                  borderRadius: 2, background: ['#e8913a', '#8fbfd8', '#c65bb0', '#74c69d'][dot] }} />
                              ))}
                            </span>
                            <span style={{ ...appTyped({ fontSize: 12, fontWeight: 820, color: APP_TEXT,
                              whiteSpace: 'nowrap' }) }}>Tools</span>
                          </span>
                          {toolsOpen > 0.001 && (
                            <div style={{ position: 'absolute', left: 0, bottom: 52, width: 404,
                              zIndex: 12, borderRadius: 18, padding: '16px 16px 14px', boxSizing: 'border-box',
                              opacity: toolsOpen,
                              transform: `translateY(${(1 - toolsOpen) * 10}px) scale(${0.96 + toolsOpen * 0.04})`,
                              transformOrigin: '12% 100%',
                              background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
                              boxShadow: '0 28px 64px rgba(45,38,32,0.20), 0 6px 18px rgba(45,38,32,0.08)' }}>
                              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 840,
                                  letterSpacing: '0.12em', textTransform: 'uppercase', color: APP_MUTED }}>
                                  Toolbox · Integrationen
                                </span>
                                <span style={{ ...appTyped({ fontSize: 9.6, fontWeight: 760, color: APP_FAINT }) }}>
                                  aus Katalog
                                </span>
                              </div>
                              <div style={{ marginTop: 12, display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                                {[
                                  { icon: 'slack.svg', name: 'Slack', connected: false },
                                  { icon: 'jira.svg', name: 'Jira', connected: true },
                                  { icon: 'confluence.svg', name: 'Confluence', connected: true },
                                  { icon: 'microsoft-teams.svg', name: 'Teams', connected: true },
                                  { icon: 'github.svg', name: 'GitHub', connected: false },
                                  { icon: 'terraform.svg', name: 'Terraform', connected: false },
                                ].map((tool) => (
                                  <div key={tool.name} style={{ height: 74, borderRadius: 13,
                                    display: 'grid', justifyItems: 'center', alignContent: 'center', rowGap: 5,
                                    background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                                    <img src={`assets/tech-icons/${tool.icon}`} alt=""
                                      style={{ width: 21, height: 21, display: 'block' }} />
                                    <span style={{ ...appTyped({ fontSize: 10, fontWeight: 800, color: APP_TEXT,
                                      whiteSpace: 'nowrap' }) }}>{tool.name}</span>
                                    <span style={{ ...appTyped({ fontSize: 8.6, fontWeight: 780,
                                      color: tool.connected ? '#3f7b56' : '#9a6a2e', whiteSpace: 'nowrap' }) }}>
                                      {tool.connected ? '✓ verbunden' : '+ Verbinden'}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </span>
                      );
                    })()}
                    <span style={{ ...appTyped({ fontSize: 12, fontWeight: 760, color: APP_FAINT,
                      whiteSpace: 'nowrap' }) }}>
                      Version 03 · letzte Änderung gerade eben
                    </span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                    {/* m0008: canvas button demoted + moved left; agent-panel trigger (with label) sits at the far right */}
                    {(() => {
                      // m0135: cursor klickt den bestehenden Canvas-Button — Öffnen-Glow in Visit 2
                      const cvp = v2 ? band(local, 11.90, 12.36, 0.13) : 0;
                      return (
                        <span style={{ height: 50, borderRadius: 999, padding: '0 20px 0 16px',
                          display: 'inline-flex', alignItems: 'center', gap: 9,
                          background: cvp > 0.01 ? '#fff6ea' : APP_SURFACE,
                          border: `1px solid ${cvp > 0.01 ? 'rgba(240,168,94,0.85)' : APP_LINE_STRONG}`,
                          boxShadow: cvp > 0.01
                            ? `0 6px 16px rgba(45,38,32,0.10), 0 0 ${12 + cvp * 18}px rgba(240,168,94,0.36)`
                            : '0 6px 16px rgba(45,38,32,0.10)',
                          transform: `scale(${1 - cvp * 0.025})`,
                          ...appTyped({ fontSize: 13.5, fontWeight: 820, color: cvp > 0.01 ? '#9a6a2e' : APP_TEXT,
                            whiteSpace: 'nowrap' }) }}>
                          <Icon name="arrowUR" size={15} color={cvp > 0.01 ? '#9a6a2e' : APP_MUTED} sw={2.3} />
                          Im Canvas öffnen
                        </span>
                      );
                    })()}
                    <span style={{ height: 58, borderRadius: 999, padding: '0 30px 0 24px',
                      display: 'inline-flex', alignItems: 'center', gap: 12,
                      background: '#1c1a18',
                      border: '2px solid rgba(240,168,94,0.72)',
                      boxShadow: '0 16px 36px rgba(45,38,32,0.32), 0 0 26px rgba(240,168,94,0.28)',
                      ...appTyped({ fontSize: 17, fontWeight: 850, color: '#fdfaf5',
                        whiteSpace: 'nowrap' }) }}>
                      <Icon name="sparkles" size={20} color={WARM} sw={2.1} />
                      Agent fragen
                    </span>
                  </span>
                </div>
                {(() => {
                  if (drawerIn <= 0.001) return null;
                  const showCV = v2; // visit 1: outreach e-mail draft · visit 2: CV draft
                  const swapDip = 0;
                  const confirmed = confirmP > 0.5;
                  // m0018: the draft assembles from the linked sources while the drawer is open
                  const gA = rise(local, 6.05, 0.45);   // An: chip — after the drafting animation
                  const gS = rise(local, 6.35, 0.50);   // subject
                  const gB1 = rise(local, 6.75, 0.55);  // body paragraphs
                  const gB2 = rise(local, 7.25, 0.60);
                  const gB3 = rise(local, 7.75, 0.70);
                  const gC = rise(local, 8.05, 0.50);   // source chips
                  const cvPrevGen = v2 ? rise(local, 5.90, 1.30) : 1;
                  const cvPrevIn = v2 ? Easing.easeOutCubic(rise(local, 6.00, 0.85)) : 1;
                  const skels = (top, n, seedStep) => Array.from({ length: n }, (_, li) => (
                    <span key={`dsk-${top}-${li}`} style={{ position: 'absolute', left: 14,
                      right: 18 + ((li * seedStep) % 110), top: top + li * 13, height: 3.5, borderRadius: 99,
                      background: `rgba(45,38,32,${li % 3 === 0 ? 0.09 : 0.07})` }} />
                  ));
                  return (
                    <div style={{ position: 'absolute', right: -20, top: -30, bottom: -30, width: 1530,
                      zIndex: 6, borderRadius: 18, background: APP_SURFACE,
                      border: `1px solid ${APP_LINE_STRONG}`,
                      boxShadow: '-18px 0 40px rgba(45,38,32,0.10)',
                      transform: `translateX(${(1 - drawerIn) * 1600}px)`,
                      padding: '20px 22px', boxSizing: 'border-box', overflow: 'hidden' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ ...appTyped({ fontSize: 11, fontWeight: 840, color: APP_FAINT,
                          textTransform: 'uppercase', letterSpacing: '0.12em', whiteSpace: 'nowrap' }) }}>
                          {showCV ? 'Vorschau · CV-Entwurf' : 'Vorschau · Outreach-Entwurf'}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                          {!showCV && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                              ...appTyped({ fontSize: 10, fontWeight: 800,
                                color: confirmed ? '#3f7b56' : ((genP > 0.001 && genDone < 0.98) || (editApply > 0.02 && editApply < 0.98)) ? '#9a6a2e' : APP_FAINT, whiteSpace: 'nowrap' }) }}>
                              <span style={{ width: 5, height: 5, borderRadius: 99,
                                background: confirmed ? '#74c69d' : ((genP > 0.001 && genDone < 0.98) || (editApply > 0.02 && editApply < 0.98)) ? WARM : APP_FAINT }} />
                              {confirmed ? 'bestätigt' : editApply > 0.02 && editApply < 0.98 ? 'wird angepasst…' : genP <= 0.001 ? 'bereit' : genDone < 0.98 ? 'generiert…' : 'Review'}
                            </span>
                          )}
                          <span style={{ height: 26, borderRadius: 999, padding: '0 10px 0 8px',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: 'rgba(240,168,94,0.12)', border: '1px solid rgba(240,168,94,0.32)' }}>
                            <Icon name="arrowUR" size={11} color="#9a6a2e" sw={2.4} />
                            <span style={{ ...appTyped({ fontSize: 10, fontWeight: 820, color: '#9a6a2e',
                              whiteSpace: 'nowrap' }) }}>Im Canvas bearbeiten</span>
                          </span>
                          <span style={{ width: 26, height: 26, borderRadius: 9, display: 'inline-flex',
                            alignItems: 'center', justifyContent: 'center',
                            background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                            fontFamily: MONO, fontSize: 11, fontWeight: 800, color: APP_MUTED }}>»</span>
                        </span>
                      </div>
                      {(() => {
                        const bannerP = showCV ? cvPrevGen : genP;
                        const bannerGone = showCV ? cvPrevGen : genDone;
                        if (bannerP <= 0.001 || bannerGone > 0.999) return null; // m0054: nothing runs before the start click
                        return (
                          <div style={{ marginTop: 12 * (1 - bannerGone), height: 40 * (1 - bannerGone),
                            maxWidth: 720, marginLeft: 'auto', marginRight: 'auto',
                            borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10,
                            padding: '0 12px', boxSizing: 'border-box', overflow: 'hidden',
                            background: 'rgba(240,168,94,0.10)', border: '1px solid rgba(240,168,94,0.36)',
                            opacity: 1 - bannerGone }}>
                            <Icon name="sparkles" size={14} color="#9a6a2e" sw={2.2} />
                            <span style={{ ...appTyped({ fontSize: 11, fontWeight: 800, color: '#9a6a2e',
                              whiteSpace: 'nowrap' }) }}>
                              {showCV ? 'CV-Entwurf wird aus Profil & Projekthistorie generiert…' : 'Entwurf wird aus 4 verknüpften Quellen generiert…'}
                            </span>
                            <span style={{ flex: 1 }} />
                            <span style={{ width: 90, height: 5, borderRadius: 99, position: 'relative',
                              display: 'inline-block', overflow: 'hidden', background: 'rgba(45,38,32,0.10)' }}>
                              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0,
                                width: `${Math.round(bannerP * 100)}%`, borderRadius: 99, background: WARM }} />
                            </span>
                          </div>
                        );
                      })()}
                      {!showCV && (() => {
                        // m0055: success confirmation popup once the edit is applied
                        const toastIn = Easing.easeOutCubic(rise(local, 15.50, 0.35)) * (1 - rise(local, 17.25, 0.40));
                        if (toastIn <= 0.001) return null;
                        return (
                          <div style={{ position: 'absolute', left: '50%', top: 96, zIndex: 14,
                            transform: `translate(-50%, ${(1 - toastIn) * -8}px)`, opacity: toastIn,
                            display: 'inline-flex', alignItems: 'center', gap: 9,
                            height: 46, borderRadius: 999, padding: '0 16px 0 10px',
                            background: '#ffffff', border: '1px solid rgba(116,198,157,0.44)',
                            boxShadow: '0 16px 34px rgba(45,38,32,0.16), 0 0 18px rgba(116,198,157,0.20)' }}>
                            <span style={{ width: 27, height: 27, borderRadius: 99, display: 'flex',
                              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                              background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.40)' }}>
                              <Icon name="check" size={14} color="#3f7b56" sw={2.8} />
                            </span>
                            <span style={{ display: 'grid', rowGap: 1 }}>
                              <span style={{ ...appTyped({ fontSize: 11.5, fontWeight: 830, color: APP_TEXT,
                                whiteSpace: 'nowrap' }) }}>Anpassung übernommen</span>
                              <span style={{ ...appTyped({ fontSize: 9, fontWeight: 720, color: APP_MUTED,
                                whiteSpace: 'nowrap' }) }}>Betreff & Text personalisiert</span>
                            </span>
                          </div>
                        );
                      })()}
                      <div style={{ position: 'relative', marginTop: 14, height: 520, borderRadius: 12,
                        background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
                        boxShadow: '0 8px 18px rgba(45,38,32,0.07)', overflow: 'hidden',
                        opacity: 1 - swapDip * 0.55, transform: `translateY(${swapDip * 7}px)` }}>
                        {!showCV && (() => {
                          // m0054: big square start button — generation begins only after this click
                          const btnOp = 1 - Easing.easeInOutCubic(rise(local, 4.40, 0.45));
                          if (btnOp <= 0.001) return null;
                          return (
                            <span style={{ position: 'absolute', left: '50%', top: 226, zIndex: 6,
                              transform: `translate(-50%, -50%) scale(${1 - genStartClickP * 0.05})`,
                              width: 132, height: 132, borderRadius: 16, boxSizing: 'border-box',
                              display: 'grid', alignContent: 'center', justifyItems: 'center', rowGap: 9,
                              opacity: btnOp,
                              background: '#1c1a18', border: '2px solid rgba(240,168,94,0.72)',
                              boxShadow: genStartClickP > 0.01
                                ? `0 0 ${18 + genStartClickP * 22}px rgba(240,168,94,0.55), 0 16px 34px rgba(45,38,32,0.30)`
                                : '0 16px 34px rgba(45,38,32,0.28), 0 0 22px rgba(240,168,94,0.22)' }}>
                              <Icon name="sparkles" size={30} color={WARM} sw={2} />
                              <span style={{ display: 'grid', justifyItems: 'center', rowGap: 3,
                                ...appTyped({ fontSize: 12, fontWeight: 830, color: '#fdfaf5',
                                  whiteSpace: 'nowrap' }) }}>
                                Entwurf generieren
                                <span style={{ fontFamily: MONO, fontSize: 7.8, fontWeight: 820,
                                  letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(240,168,94,0.85)' }}>
                                  aus 4 Quellen
                                </span>
                              </span>
                            </span>
                          );
                        })()}
                        {!showCV && (() => {
                          // m0078: loading / drafting animation between the start click and the result
                          const load = band(local, 4.30, 6.35, 0.40);
                          if (load <= 0.001) return null;
                          return (
                            <div style={{ position: 'absolute', left: '50%', top: 186, zIndex: 5, width: 420,
                              transform: 'translate(-50%, 0)', opacity: load,
                              display: 'grid', justifyItems: 'center', rowGap: 14 }}>
                              <span style={{ width: 44, height: 44, borderRadius: 999, display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                background: 'rgba(240,168,94,0.12)', border: '1px solid rgba(240,168,94,0.36)',
                                transform: `scale(${1 + 0.08 * Math.sin(local * 4.6)})` }}>
                                <Icon name="sparkles" size={20} color="#9a6a2e" sw={2.2} />
                              </span>
                              <span style={{ fontFamily: MONO, fontSize: 9.5, fontWeight: 840,
                                letterSpacing: '0.13em', textTransform: 'uppercase', color: '#9a6a2e' }}>
                                Entwurf wird erstellt…
                              </span>
                              <span style={{ display: 'grid', rowGap: 9, width: '100%', justifyItems: 'start' }}>
                                {[0.9, 0.72, 0.55].map((w, li) => (
                                  <span key={`load-line-${li}`} style={{ width: `${w * 100}%`, height: 5, borderRadius: 99,
                                    background: `rgba(45,38,32,${(0.07 + 0.05 * (0.5 + 0.5 * Math.sin(local * 5.2 - li * 1.1))).toFixed(3)})` }} />
                                ))}
                              </span>
                            </div>
                          );
                        })()}
                        {showCV ? (
                          <React.Fragment>
                            <div style={{ height: 26, display: 'flex', alignItems: 'center', gap: 7,
                              padding: '0 10px', boxSizing: 'border-box',
                              background: rowTint, borderBottom: `1px solid ${APP_LINE}` }}>
                              {cvPrevIn > 0.05 && (
                                <span style={{ fontFamily: MONO, fontSize: 7, fontWeight: 840, lineHeight: 1,
                                  letterSpacing: '0.07em', color: '#fdfaf5', background: '#c05b52',
                                  borderRadius: 4, padding: '3px 5px' }}>PDF</span>
                              )}
                              <span style={{ ...appTyped({ fontSize: 10, fontWeight: 800, color: APP_MUTED,
                                whiteSpace: 'nowrap' }) }}>
                                {cvPrevIn > 0.05 ? 'CV_Max.pdf' : 'CV-Entwürfe · Team Bank AG'}
                              </span>
                              <span style={{ flex: 1 }} />
                              {cvPrevIn > 0.05 && (
                                <span style={{ ...appTyped({ fontSize: 9, fontWeight: 760, color: APP_FAINT }) }}>Seite 1/2</span>
                              )}
                            </div>
                            <div style={{ position: 'relative', width: 860, maxWidth: '92%', margin: '0 auto',
                              height: 'calc(100% - 26px)' }}>
                            {(() => {
                              // m0087: big empty space = generation control + selection view, then loading
                              const selPhase = 1 - Easing.easeInOutCubic(rise(local, 4.15, 0.45));
                              const load = band(local, 4.15, 5.95, 0.40);
                              if (selPhase <= 0.001 && load <= 0.001) return null;
                              return (
                                <React.Fragment>
                                  {selPhase > 0.001 && (
                                    <div style={{ position: 'absolute', inset: 0, zIndex: 5, opacity: selPhase,
                                      display: 'grid', justifyItems: 'center', alignContent: 'start',
                                      paddingTop: 26 }}>
                                      <div style={{ width: 640, display: 'flex', alignItems: 'center',
                                        justifyContent: 'space-between' }}>
                                        <span style={{ fontFamily: MONO, fontSize: 9.5, fontWeight: 840,
                                          letterSpacing: '0.13em', textTransform: 'uppercase', color: APP_MUTED }}>
                                          CV-Generierung · Team auswählen
                                        </span>
                                        <span style={{ height: 26, borderRadius: 999, padding: '0 10px',
                                          display: 'inline-flex', alignItems: 'center', gap: 6,
                                          transform: `scale(${1 - cvSelAllClickP * 0.05})`,
                                          background: cvSelAllDone > 0.5 ? 'rgba(240,168,94,0.14)' : 'transparent',
                                          border: cvSelAllDone > 0.5 ? '1px solid rgba(240,168,94,0.36)' : `1px dashed ${APP_LINE_STRONG}`,
                                          boxShadow: cvSelAllClickP > 0.01 ? `0 0 ${12 + cvSelAllClickP * 14}px rgba(240,168,94,0.40)` : 'none',
                                          ...appTyped({ fontSize: 10.5, fontWeight: 800,
                                            color: cvSelAllDone > 0.5 ? '#9a6a2e' : APP_MUTED, whiteSpace: 'nowrap' }) }}>
                                          {cvSelAllDone > 0.5 && <Icon name="check" size={11} color="#9a6a2e" sw={2.6} />}
                                          {cvSelAllDone > 0.5 ? 'Alle ausgewählt' : 'Alle auswählen'}
                                        </span>
                                      </div>
                                      <div style={{ width: 640, marginTop: 14, display: 'grid', rowGap: 10 }}>
                                        {[0, 1, 2].map((ci) => {
                                          const on = cvChk(ci);
                                          return (
                                            <div key={`cv-sel-${ci}`} style={{ height: 64, borderRadius: 13,
                                              display: 'grid', gridTemplateColumns: '20px 38px 1fr auto',
                                              alignItems: 'center', columnGap: 12, padding: '0 16px',
                                              boxSizing: 'border-box',
                                              background: on > 0.5 ? '#fffaf3' : '#ffffff',
                                              border: on > 0.5 ? '1px solid rgba(240,168,94,0.45)' : `1px solid ${APP_LINE}` }}>
                                              <span style={{ width: 20, height: 20, borderRadius: 6,
                                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                                boxSizing: 'border-box',
                                                background: on > 0.5 ? WARM : '#fffaf3',
                                                border: on > 0.5 ? '1px solid rgba(240,168,94,0.9)' : `1.6px dashed ${APP_LINE_STRONG}`,
                                                transform: `scale(${1 + on * (1 - on) * 0.5})` }}>
                                                {on > 0.5 && <Icon name="check" size={12} color="#fdfaf5" sw={3} />}
                                              </span>
                                              <span style={{ width: 38, height: 38, borderRadius: 999, overflow: 'hidden',
                                                display: 'inline-flex' }}>
                                                <ConsultantAvatar person={consultants[ci]} size={38} selected={0} />
                                              </span>
                                              <span style={{ minWidth: 0 }}>
                                                <span style={{ display: 'block', ...appTyped({ fontSize: 12.5, fontWeight: 820,
                                                  color: APP_TEXT, whiteSpace: 'nowrap' }) }}>{consultants[ci].name}</span>
                                                <span style={{ display: 'block', marginTop: 2, ...appTyped({ fontSize: 10,
                                                  fontWeight: 700, color: APP_FAINT, whiteSpace: 'nowrap' }) }}>{consultants[ci].role}</span>
                                              </span>
                                              <span style={{ display: 'inline-flex', gap: 5 }}>
                                                {consultants[ci].certs.map((cert) => (
                                                  <span key={cert} style={{ height: 20, borderRadius: 999, padding: '0 8px',
                                                    display: 'inline-flex', alignItems: 'center',
                                                    background: APP_RAISED, border: `1px solid ${APP_LINE}`,
                                                    fontFamily: MONO, fontSize: 8, fontWeight: 800,
                                                    letterSpacing: '0.06em', color: APP_MUTED }}>{cert}</span>
                                                ))}
                                              </span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                      <span style={{ marginTop: 26, width: 132, height: 132, borderRadius: 16,
                                        boxSizing: 'border-box', display: 'grid', alignContent: 'center',
                                        justifyItems: 'center', rowGap: 9,
                                        transform: `scale(${1 - cvStartClickP * 0.05})`,
                                        background: '#1c1a18', border: '2px solid rgba(240,168,94,0.72)',
                                        boxShadow: cvStartClickP > 0.01
                                          ? `0 0 ${18 + cvStartClickP * 22}px rgba(240,168,94,0.55), 0 16px 34px rgba(45,38,32,0.30)`
                                          : '0 16px 34px rgba(45,38,32,0.28), 0 0 22px rgba(240,168,94,0.22)' }}>
                                        <Icon name="sparkles" size={30} color={WARM} sw={2} />
                                        <span style={{ display: 'grid', justifyItems: 'center', rowGap: 3,
                                          ...appTyped({ fontSize: 12, fontWeight: 830, color: '#fdfaf5',
                                            whiteSpace: 'nowrap' }) }}>
                                          {cvSelAllDone > 0.5 ? '3 CVs generieren' : 'CVs generieren'}
                                          <span style={{ fontFamily: MONO, fontSize: 7.8, fontWeight: 820,
                                            letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(240,168,94,0.85)' }}>
                                            aus Team-Match
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                  )}
                                  {load > 0.001 && (
                                    <div style={{ position: 'absolute', left: '50%', top: 170, zIndex: 6, width: 420,
                                      transform: 'translate(-50%, 0)', opacity: load,
                                      display: 'grid', justifyItems: 'center', rowGap: 14 }}>
                                      <span style={{ width: 44, height: 44, borderRadius: 999, display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        background: 'rgba(240,168,94,0.12)', border: '1px solid rgba(240,168,94,0.36)',
                                        transform: `scale(${1 + 0.08 * Math.sin(local * 4.6)})` }}>
                                        <Icon name="sparkles" size={20} color="#9a6a2e" sw={2.2} />
                                      </span>
                                      <span style={{ fontFamily: MONO, fontSize: 9.5, fontWeight: 840,
                                        letterSpacing: '0.13em', textTransform: 'uppercase', color: '#9a6a2e' }}>
                                        3 CV-Entwürfe werden erstellt…
                                      </span>
                                      <span style={{ display: 'grid', rowGap: 9, width: '100%', justifyItems: 'start' }}>
                                        {[0.9, 0.72, 0.55].map((w, li) => (
                                          <span key={`cv-load-${li}`} style={{ width: `${w * 100}%`, height: 5, borderRadius: 99,
                                            background: `rgba(45,38,32,${(0.07 + 0.05 * (0.5 + 0.5 * Math.sin(local * 5.2 - li * 1.1))).toFixed(3)})` }} />
                                        ))}
                                      </span>
                                    </div>
                                  )}
                                </React.Fragment>
                              );
                            })()}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 14px 0',
                              opacity: cvPrevIn, transform: `translateY(${(1 - cvPrevIn) * 8}px)` }}>
                              <span style={{ width: 46, height: 46, borderRadius: 99, overflow: 'hidden',
                                display: 'inline-flex', flexShrink: 0 }}>
                                <ConsultantAvatar person={consultants[0]} size={46} selected={0} />
                              </span>
                              <span style={{ minWidth: 0 }}>
                                <div style={{ ...appTyped({ fontSize: 13.5, fontWeight: 840, color: APP_TEXT,
                                  whiteSpace: 'nowrap' }) }}>Sr. Architect - Max</div>
                                <div style={{ marginTop: 3, ...appTyped({ fontSize: 10.5, fontWeight: 720,
                                  color: APP_MUTED, whiteSpace: 'nowrap' }) }}>Landing Zone · AZ-500 · AWS-SAA</div>
                              </span>
                              <span style={{ marginLeft: 'auto', height: 24, borderRadius: 999, padding: '0 10px',
                                display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
                                background: 'rgba(240,168,94,0.14)', border: '1px solid rgba(240,168,94,0.32)',
                                fontFamily: MONO, fontSize: 9, fontWeight: 830, color: '#9a6a2e' }}>96 % Fit</span>
                            </div>
                            <div style={{ position: 'absolute', left: 0, right: 0, top: 70, bottom: 0,
                              padding: '4px 16px 12px', boxSizing: 'border-box', overflow: 'hidden',
                              filter: 'blur(2.6px)', opacity: 0.88 * cvPrevIn, pointerEvents: 'none' }}>
                              {[
                                { h: 'Profil', body: 'Senior Cloud Architect mit 12+ Jahren Erfahrung in AWS-Transformationen f\u00fcr Banken und Versicherer. Schwerpunkte: Landing Zone Design, IAM-Architektur, Security Baseline und regulatorische Anforderungen (DORA, BaFin). Nachweislich 14 erfolgreiche Migrationen im Finanzsektor.' },
                                { h: 'Berufserfahrung', body: '2021 \u2013 heute \u00b7 Senior Architect, Consultry Partner GmbH \u2014 Lead-Architekt f\u00fcr Cloud-Migrationen im Finanzsektor; Landing Zone, Control Tower, Security Hub.\n2016 \u2013 2021 \u00b7 Cloud Engineer, Versicherer Z \u2014 Aufbau AWS Landing Zone, Terraform-Module, CI/CD-Pipelines, Kostenoptimierung.' },
                                { h: 'Projekte (Auszug)', body: 'Bank XY \u00b7 SOC-Aufbau \u2014 GuardDuty, Sentinel-Integration, DORA-Audit bestanden.\nVersicherer Z \u00b7 AWS Landing Zone \u2014 Multi-Account-Setup, Security Baseline, 6 Wochen.' },
                                { h: 'Zertifizierungen', body: 'AZ-500 \u00b7 AWS-SAA \u00b7 AWS-SAP \u00b7 Terraform Associate \u00b7 Scrum Master' },
                              ].map((sec) => (
                                <div key={`cv-sec-${sec.h}`} style={{ marginTop: 11 }}>
                                  <div style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 840,
                                    letterSpacing: '0.11em', textTransform: 'uppercase', color: '#9a6a2e' }}>
                                    {sec.h}
                                  </div>
                                  <div style={{ marginTop: 4, fontFamily: INTER, fontSize: 9.8, fontWeight: 560,
                                    lineHeight: 1.5, color: 'rgba(45,38,32,0.82)', whiteSpace: 'pre-line' }}>
                                    {sec.body}
                                  </div>
                                </div>
                              ))}
                            </div>
                            </div>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {/* m0070/m0078: native rich-text editor — toolbar + document + status footer */}
                            <div style={{ height: 38, display: 'flex', alignItems: 'center', gap: 3,
                              padding: '0 12px', boxSizing: 'border-box',
                              background: rowTint, borderBottom: `1px solid ${APP_LINE}` }}>
                              {['↺', '↻'].map((g) => (
                                <span key={`tb-${g}`} style={{ width: 24, height: 24, borderRadius: 6,
                                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                  fontFamily: INTER, fontSize: 12.5, color: APP_MUTED }}>{g}</span>
                              ))}
                              <span style={{ width: 1, height: 18, background: APP_LINE_STRONG, margin: '0 5px' }} />
                              <span style={{ height: 24, borderRadius: 6, padding: '0 9px',
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                background: '#ffffff', border: `1px solid ${APP_LINE}`,
                                ...appTyped({ fontSize: 10.5, fontWeight: 760, color: APP_MUTED }) }}>
                                Absatz
                                <span style={{ fontSize: 7.5, color: APP_FAINT }}>▾</span>
                              </span>
                              <span style={{ width: 1, height: 18, background: APP_LINE_STRONG, margin: '0 5px' }} />
                              <span style={{ width: 24, height: 24, borderRadius: 6, display: 'inline-flex',
                                alignItems: 'center', justifyContent: 'center', background: 'rgba(45,38,32,0.06)',
                                fontFamily: INTER, fontSize: 12, fontWeight: 850, color: APP_TEXT }}>B</span>
                              <span style={{ width: 24, height: 24, borderRadius: 6, display: 'inline-flex',
                                alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'Georgia, serif', fontSize: 12.5, fontStyle: 'italic', color: APP_MUTED }}>I</span>
                              <span style={{ width: 24, height: 24, borderRadius: 6, display: 'inline-flex',
                                alignItems: 'center', justifyContent: 'center', textDecoration: 'underline',
                                fontFamily: INTER, fontSize: 12, fontWeight: 640, color: APP_MUTED }}>U</span>
                              <span style={{ width: 1, height: 18, background: APP_LINE_STRONG, margin: '0 5px' }} />
                              {['≡', '≔'].map((g, gi) => (
                                <span key={`tb-list-${gi}`} style={{ width: 24, height: 24, borderRadius: 6,
                                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                  fontFamily: INTER, fontSize: 13, color: APP_MUTED }}>{g}</span>
                              ))}
                              <span style={{ flex: 1 }} />
                              <span style={{ height: 24, borderRadius: 999, padding: '0 9px',
                                display: 'inline-flex', alignItems: 'center', gap: 5,
                                background: 'rgba(240,168,94,0.12)', border: '1px solid rgba(240,168,94,0.32)' }}>
                                <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                                <span style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 840,
                                  letterSpacing: '0.10em', color: '#9a6a2e' }}>KI-ASSIST</span>
                              </span>
                            </div>
                            <div style={{ position: 'relative', width: 860, maxWidth: '92%', margin: '0 auto',
                              height: 'calc(100% - 62px)' }}>
                            <div style={{ padding: '12px 14px 0', display: 'grid', gap: 8, position: 'relative' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8,
                                opacity: gA, transform: `translateY(${(1 - gA) * 6}px)` }}>
                                <span style={{ ...appTyped({ fontSize: 10, fontWeight: 780, color: APP_FAINT }) }}>An:</span>
                                <span style={{ height: 26, borderRadius: 999, padding: '0 10px 0 4px',
                                  display: 'inline-flex', alignItems: 'center', gap: 7,
                                  background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
                                  ...appTyped({ fontSize: 10.5, fontWeight: 800, color: APP_TEXT }) }}>
                                  <span style={{ width: 20, height: 20, borderRadius: 99, overflow: 'hidden',
                                    display: 'inline-flex' }}>
                                    <ConsultantAvatar person={{ avatar: 1, skin: '#cfa17f', hair: '#352728' }}
                                      size={20} selected={0} />
                                  </span>
                                  Dr. S. Weber · CIO Bank AG
                                </span>
                              </div>
                              {(() => {
                                const selVis = selP * (1 - Easing.easeInOutCubic(clamp(editApply * 1.6, 0, 1)));
                                const subjPulse = Math.sin(Math.PI * clamp(editApply, 0, 1));
                                return (
                                  <React.Fragment>
                                    <div style={{ ...appTyped({ fontSize: 12.5, fontWeight: 840, color: APP_TEXT,
                                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }),
                                      opacity: gS, transform: `translateY(${(1 - gS) * 6}px)` }}>
                                      <span style={{ borderRadius: 3,
                                        backgroundColor: `rgba(240,168,94,${(subjPulse * 0.16).toFixed(3)})`,
                                        backgroundImage: `linear-gradient(90deg, rgba(74,127,181,0.26) ${(selVis * 100).toFixed(1)}%, rgba(74,127,181,0) ${(selVis * 100).toFixed(1)}%)` }}>
                                        {editApply > 0.55
                                          ? 'AWS Cloud Transformation – Anknüpfung an Versicherer Z'
                                          : 'AWS Cloud Transformation – nächste Schritte für Security & DORA'}
                                      </span>
                                    </div>
                                    {quickOptIn > 0.001 && (
                                      <div style={{ position: 'absolute', left: 10, top: 66, zIndex: 9,
                                        display: 'inline-flex', alignItems: 'center', gap: 6,
                                        padding: '6px 7px', borderRadius: 12,
                                        background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
                                        boxShadow: '0 14px 30px rgba(45,38,32,0.20), 0 3px 10px rgba(45,38,32,0.08)',
                                        opacity: quickOptIn,
                                        transform: `translateY(${(1 - quickOptIn) * 6}px)` }}>
                                        <span style={{ height: 26, borderRadius: 999, padding: '0 10px 0 8px',
                                          display: 'inline-flex', alignItems: 'center', gap: 6,
                                          transform: `scale(${1 - optClickP * 0.05})`,
                                          background: 'rgba(240,168,94,0.14)', border: '1px solid rgba(240,168,94,0.36)',
                                          boxShadow: optClickP > 0.01 ? `0 0 ${12 + optClickP * 14}px rgba(240,168,94,0.40)` : 'none',
                                          ...appTyped({ fontSize: 10.5, fontWeight: 820, color: '#9a6a2e',
                                            whiteSpace: 'nowrap' }) }}>
                                          <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                                          Als Prompt-Kontext setzen
                                        </span>
                                        <span style={{ height: 26, borderRadius: 999, padding: '0 10px',
                                          display: 'inline-flex', alignItems: 'center',
                                          background: '#ffffff', border: `1px solid ${APP_LINE}`,
                                          ...appTyped({ fontSize: 10.5, fontWeight: 760, color: APP_MUTED,
                                            whiteSpace: 'nowrap' }) }}>
                                          Kopieren
                                        </span>
                                      </div>
                                    )}
                                  </React.Fragment>
                                );
                              })()}
                            </div>
                            <div style={{ position: 'absolute', left: 0, right: 0, top: 80, bottom: 44,
                              padding: '0 16px', boxSizing: 'border-box', overflow: 'hidden',
                              pointerEvents: 'none' }}>
                              <div style={{ fontFamily: INTER, fontSize: 10.4, fontWeight: 600,
                                lineHeight: 1.55, color: 'rgba(45,38,32,0.88)',
                                opacity: gB1, transform: `translateY(${(1 - gB1) * 6}px)` }}>
                                Sehr geehrter Herr Dr. Weber,
                              </div>
                              {(() => {
                                const swapPulse = Math.sin(Math.PI * clamp(editApply, 0, 1));
                                return (
                                  <div style={{ marginTop: 6, fontFamily: INTER, fontSize: 10.4, fontWeight: 560,
                                    lineHeight: 1.55, color: 'rgba(45,38,32,0.84)',
                                    background: `rgba(240,168,94,${(swapPulse * 0.14).toFixed(3)})`, borderRadius: 4,
                                    opacity: gB2 * (1 - swapPulse * 0.45),
                                    transform: `translateY(${(1 - gB2) * 6}px)` }}>
                                    {editApply > 0.5
                                      ? 'Unser Consultant Max hat bei Versicherer Z die AWS Landing Zone aufgebaut – diese Erfahrung bringen wir gern für die Bank AG ein.'
                                      : 'mit Interesse haben wir gelesen, dass die Bank AG ihre Kernsysteme bis 2027 in die AWS Cloud verlagert.'}
                                  </div>
                                );
                              })()}
                              <div style={{ marginTop: 6, filter: 'blur(2.4px)', opacity: 0.85 * gB3,
                                fontFamily: INTER, fontSize: 10.4, fontWeight: 560, lineHeight: 1.55,
                                color: 'rgba(45,38,32,0.82)' }}>
                                Genau f\u00fcr diese Phase haben wir mit Versicherer Z eine AWS Landing Zone
                                inklusive Security Baseline in sechs Wochen aufgebaut \u2014 DORA-konform und
                                mit bestandenem Audit. F\u00fcr Ihr Vorhaben sehen wir drei konkrete
                                Ansatzpunkte: Landing Zone & IAM, Security Baseline mit GuardDuty sowie
                                die DORA-Compliance-Dokumentation. Unser Security-Cloud-Team (drei
                                zertifizierte Consultants) w\u00e4re ab W1 verf\u00fcgbar.
                                <br /><br />
                                Gern stellen wir Ihnen die Referenzarchitektur in einem kurzen Termin vor.
                                <br /><br />
                                Mit freundlichen Gr\u00fc\u00dfen<br />
                                Max Muster \u00b7 Senior Architect
                              </div>
                            </div>
                            <div style={{ position: 'absolute', left: 14, right: 14, bottom: 12,
                              display: 'flex', alignItems: 'center', gap: 8, opacity: gC }}>
                              {['Signal-Bezug: FT-Artikel', 'Referenz: Versicherer Z'].map((chip) => (
                                <span key={`draft-${chip}`} style={{ height: 22, borderRadius: 999, padding: '0 9px',
                                  display: 'inline-flex', alignItems: 'center', gap: 5,
                                  background: '#fff8ef', border: '1px solid rgba(240,168,94,0.36)',
                                  ...appTyped({ fontSize: 9, fontWeight: 780, color: '#9a6a2e',
                                    whiteSpace: 'nowrap' }) }}>
                                  <span style={{ width: 4, height: 4, borderRadius: 99, background: '#d99a55' }} />
                                  {chip}
                                </span>
                              ))}
                            </div>
                            </div>
                            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 24,
                              display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px',
                              boxSizing: 'border-box', background: '#fffdf9',
                              borderTop: `1px solid ${APP_LINE}` }}>
                              <span style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 800,
                                letterSpacing: '0.08em', color: APP_FAINT, whiteSpace: 'nowrap' }}>
                                {genP <= 0.001 ? 'BEREIT · 0 WÖRTER' : genDone < 0.98 ? 'ENTWURF WIRD ERSTELLT…' : '142 WÖRTER · DEUTSCH'}
                              </span>
                              <span style={{ flex: 1 }} />
                              {genDone > 0.98 && (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4,
                                  fontFamily: MONO, fontSize: 8.4, fontWeight: 800, letterSpacing: '0.08em',
                                  color: '#3f7b56', whiteSpace: 'nowrap' }}>
                                  <Icon name="check" size={9} color="#3f7b56" sw={3} />
                                  AUTOMATISCH GESPEICHERT
                                </span>
                              )}
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                      <div style={{ marginTop: 12, display: 'flex', gap: 7, flexWrap: 'wrap',
                        opacity: showCV ? cvPrevIn : genDone }}>
                        {(showCV
                          ? ['Referenzen prüfen', 'Layout Bank AG', 'Verfügbarkeit']
                          : ['Kürzer fassen', 'Formeller Ton', 'Preise prüfen']).map((quick) => (
                          <span key={quick} style={{ height: 28, borderRadius: 999, padding: '0 12px',
                            display: 'inline-flex', alignItems: 'center',
                            background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
                            ...appTyped({ fontSize: 11, fontWeight: 780, color: APP_MUTED,
                              whiteSpace: 'nowrap' }) }}>
                            {quick}
                          </span>
                        ))}
                      </div>
                      {!showCV && (
                        <div style={{ marginTop: 12, height: 44, borderRadius: 13, display: 'flex',
                          alignItems: 'center', gap: 8, padding: '0 12px', boxSizing: 'border-box',
                          background: APP_RAISED, border: `1px solid ${APP_LINE}`, opacity: genDone }}>
                          {/* m0070: connector / channel gets decided below the native editor */}
                          <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 840,
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: APP_MUTED,
                            whiteSpace: 'nowrap' }}>Kanal</span>
                          <span style={{ height: 30, borderRadius: 999, padding: '0 12px 0 9px',
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            background: 'rgba(74,127,181,0.10)', border: '1px solid rgba(74,127,181,0.36)',
                            ...appTyped({ fontSize: 11.5, fontWeight: 800, color: '#3a6ea8' }) }}>
                            <img src="assets/tech-icons/microsoft-outlook.svg" alt="" style={{ width: 15, height: 15, display: 'block' }} />
                            Outlook · E-Mail
                            <Icon name="check" size={11} color="#3a6ea8" sw={2.6} />
                          </span>
                          <span style={{ height: 30, borderRadius: 999, padding: '0 12px 0 9px',
                            display: 'inline-flex', alignItems: 'center', gap: 7, opacity: 0.6,
                            background: '#ffffff', border: `1px solid ${APP_LINE}`,
                            ...appTyped({ fontSize: 11.5, fontWeight: 760, color: APP_FAINT }) }}>
                            <LinkedInMark size={15} />
                            InMail
                          </span>
                          <span style={{ height: 30, borderRadius: 999, padding: '0 12px 0 9px',
                            display: 'inline-flex', alignItems: 'center', gap: 7, opacity: 0.6,
                            background: '#ffffff', border: `1px solid ${APP_LINE}`,
                            ...appTyped({ fontSize: 11.5, fontWeight: 760, color: APP_FAINT }) }}>
                            <img src="assets/tech-icons/xing.svg" alt="" style={{ width: 15, height: 15, display: 'block' }} />
                            XING
                          </span>
                          <span style={{ height: 30, borderRadius: 999, padding: '0 12px 0 9px',
                            display: 'inline-flex', alignItems: 'center', gap: 7, opacity: 0.6,
                            background: '#ffffff', border: `1px solid ${APP_LINE}`,
                            ...appTyped({ fontSize: 11.5, fontWeight: 760, color: APP_FAINT }) }}>
                            <Icon name="file" size={13} color={APP_FAINT} sw={2.2} />
                            Cold Call · Skript
                          </span>
                          <span style={{ flex: 1 }} />
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5,
                            whiteSpace: 'nowrap',
                            ...appTyped({ fontSize: 10, fontWeight: 800, color: '#9a6a2e' }) }}>
                            <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                            aus Kontakt-Präferenz
                          </span>
                        </div>
                      )}
                      {!showCV && (
                        <div style={{ position: 'absolute', left: 18, right: 18, bottom: 76,
                          height: 44, borderRadius: 999, display: 'flex', alignItems: 'center',
                          justifyContent: 'center', gap: 9,
                          opacity: genDone,
                          transform: `scale(${1 - band(local, 16.10, 16.46, 0.10) * 0.03})`,
                          background: confirmed ? '#e8f4ec' : APP_TEXT,
                          border: `1px solid ${confirmed ? 'rgba(116,198,157,0.44)' : APP_TEXT}`,
                          boxShadow: confirmed ? '0 0 18px rgba(116,198,157,0.24)' : '0 10px 24px rgba(45,38,32,0.20)' }}>
                          {confirmed && <Icon name="check" size={15} color="#3f7b56" sw={2.6} />}
                          <span style={{ ...appTyped({ fontSize: 12.5, fontWeight: 830,
                            color: confirmed ? '#3f7b56' : '#fdfaf5', whiteSpace: 'nowrap' }) }}>
                            {confirmed ? 'Entwurf bestätigt · bereit zum Versand' : 'Entwurf bestätigen'}
                          </span>
                        </div>
                      )}
                      {showCV && (() => {
                        // m0087: accept → back to the opportunity workspace
                        const cvAccepted = bulkDone > 0.5;
                        return (
                          <div style={{ position: 'absolute', left: 18, right: 18, bottom: 76,
                            height: 44, borderRadius: 999, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: 9,
                            opacity: cvPrevIn,
                            transform: `scale(${1 - cvAcceptClickP * 0.03})`,
                            boxShadow: cvAcceptClickP > 0.01 ? `0 0 ${14 + cvAcceptClickP * 16}px rgba(240,168,94,0.40)`
                              : cvAccepted ? '0 0 18px rgba(116,198,157,0.24)' : '0 10px 24px rgba(45,38,32,0.20)',
                            background: cvAccepted ? '#e8f4ec' : APP_TEXT,
                            border: `1px solid ${cvAccepted ? 'rgba(116,198,157,0.44)' : APP_TEXT}` }}>
                            {cvAccepted && <Icon name="check" size={15} color="#3f7b56" sw={2.6} />}
                            <span style={{ ...appTyped({ fontSize: 12.5, fontWeight: 830,
                              color: cvAccepted ? '#3f7b56' : '#fdfaf5', whiteSpace: 'nowrap' }) }}>
                              {cvAccepted ? 'Übernommen · zurück zum Workspace' : '3 Entwürfe übernehmen'}
                            </span>
                          </div>
                        );
                      })()}
                      <div style={{ position: 'absolute', left: 18, right: 18,
                        bottom: 130, height: 30, display: 'flex',
                        alignItems: 'center', gap: 8, overflow: 'hidden' }}>
                        <span style={{ width: 0, height: 0, flexShrink: 0,
                          borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
                          borderLeft: `5.5px solid ${APP_FAINT}` }} />
                        <span style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 840,
                          letterSpacing: '0.11em', textTransform: 'uppercase', color: APP_FAINT,
                          whiteSpace: 'nowrap' }}>Quellen · 4 verknüpft</span>
                        <span style={{ height: 22, borderRadius: 999, padding: '0 9px',
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}` }}>
                          <span style={{ width: 5, height: 5, borderRadius: 99, background: '#8fbfd8' }} />
                          <span style={{ ...appTyped({ fontSize: 9.6, fontWeight: 780, color: APP_MUTED,
                            whiteSpace: 'nowrap' }) }}>CV-Datenbank · Max Muster</span>
                        </span>
                        <span style={{ height: 22, borderRadius: 999, padding: '0 9px',
                          display: 'inline-flex', alignItems: 'center',
                          background: 'transparent', border: `1px dashed ${APP_LINE_STRONG}`,
                          ...appTyped({ fontSize: 9.6, fontWeight: 780, color: APP_MUTED,
                            whiteSpace: 'nowrap' }) }}>+3 weitere</span>
                        <span style={{ flex: 1 }} />
                        <span style={{ height: 24, borderRadius: 999, padding: '0 9px 0 7px',
                          display: 'inline-flex', alignItems: 'center', gap: 5, flexShrink: 0,
                          background: APP_RAISED, border: `1px solid ${APP_LINE}` }}>
                          <Icon name="pencil" size={11} color={APP_MUTED} sw={2} />
                          <span style={{ ...appTyped({ fontSize: 9.4, fontWeight: 790, color: APP_MUTED,
                            whiteSpace: 'nowrap' }) }}>Konfigurieren</span>
                        </span>
                      </div>
                      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 14,
                        height: 52, borderRadius: 999, display: 'grid',
                        gridTemplateColumns: '34px 1fr auto', alignItems: 'center', gap: 9,
                        padding: '0 8px 0 10px', boxSizing: 'border-box',
                        background: '#ffffff', border: '1.5px solid rgba(240,168,94,0.5)',
                        boxShadow: '0 10px 26px rgba(240,168,94,0.14)' }}>
                        {(() => {
                          // m0054: the edit wish is spoken — subtle pulsing recording indicator on the left
                          const rec = markerIn > 0.3 && typeP < 1 && editApply < 0.02;
                          const pulse = 0.5 + 0.5 * Math.sin(local * 5.2);
                          return (
                            <span style={{ width: 32, height: 32, borderRadius: 999, display: 'flex',
                              alignItems: 'center', justifyContent: 'center', position: 'relative',
                              background: rec ? 'rgba(192,86,79,0.12)' : 'rgba(240,168,94,0.14)',
                              border: `1px solid ${rec ? 'rgba(192,86,79,0.40)' : 'rgba(240,168,94,0.30)'}` }}>
                              {rec ? (
                                <React.Fragment>
                                  <span style={{ width: 10, height: 10, borderRadius: 99, background: '#c0564f',
                                    transform: `scale(${1 + pulse * 0.18})` }} />
                                  <span style={{ position: 'absolute', inset: -3 - pulse * 2.5, borderRadius: 99,
                                    border: '1.5px solid rgba(192,86,79,0.45)', opacity: 0.75 - pulse * 0.45 }} />
                                </React.Fragment>
                              ) : (
                                <Icon name="sparkles" size={15} color="#9a6a2e" sw={2} />
                              )}
                            </span>
                          );
                        })()}
                        {(() => {
                          // m0045/m0054: linked-context marker + spoken edit wish (live transcription)
                          const promptWords = 'Bitte personalisieren: auf bestehende Zusammenarbeit eingehen – unser Consultant Max ist bei Versicherer Z im Einsatz.'.split(' ');
                          const nWords = Math.floor(clamp(typeP, 0, 1) * promptWords.length);
                          const typed = promptWords.slice(0, nWords).join(' ');
                          const fadeOut = clamp(editApply * 2.2, 0, 1);
                          const showFlow = markerIn > 0.01 && fadeOut < 0.98;
                          const overflowing = typed.length * 6.6 > 1180;
                          if (!showFlow) {
                            return (
                              <span style={{ ...appTyped({ fontSize: 12.5, fontWeight: 680, color: APP_MUTED,
                                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
                                Letzte Anpassung beschreiben…
                              </span>
                            );
                          }
                          return (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0,
                              overflow: 'hidden', opacity: 1 - fadeOut }}>
                              <span style={{ flexShrink: 0, height: 26, borderRadius: 999, padding: '0 9px',
                                display: 'inline-flex', alignItems: 'center', gap: 5,
                                opacity: markerIn, transform: `scale(${0.9 + markerIn * 0.1})`,
                                background: 'rgba(74,127,181,0.10)', border: '1px solid rgba(74,127,181,0.36)',
                                ...appTyped({ fontSize: 10, fontWeight: 800, color: '#3a6ea8',
                                  whiteSpace: 'nowrap' }) }}>
                                <span style={{ width: 5, height: 5, borderRadius: 99, background: '#3a6ea8' }} />
                                Betreff · verknüpft
                              </span>
                              <span style={{ position: 'relative', flex: 1, minWidth: 0, height: 20,
                                overflow: 'hidden' }}>
                                <span style={{ position: 'absolute', top: 1, whiteSpace: 'nowrap',
                                  ...(overflowing ? { right: 0 } : { left: 0 }),
                                  ...appTyped({ fontSize: 12.5, fontWeight: 700, color: APP_TEXT }) }}>
                                  {typed}
                                </span>
                              </span>
                            </span>
                          );
                        })()}
                        <span style={{ height: 38, borderRadius: 999, padding: '0 15px',
                          display: 'inline-flex', alignItems: 'center',
                          background: APP_TEXT,
                          transform: `scale(${1 - applyClickP * 0.05})`,
                          boxShadow: applyClickP > 0.01 ? `0 0 ${12 + applyClickP * 16}px rgba(240,168,94,0.45)` : 'none',
                          ...appTyped({ fontSize: 12, fontWeight: 830, color: '#fdfaf5' }) }}>
                          Anwenden
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })()}
        </div>

      </div>
    </div>
  );
}

// ── m0101: Consulting Workspace · Projekt — dashboard before the Meeting-Vorbereitung ─
function SceneProjectDashboardContent({ local }) {
  const p = Easing.easeOutCubic(rise(local, 0.10, 0.55));
  const exit = rise(local, PROJECT_DASH_INSERT - 0.40, 0.42);
  if (p <= 0.001) return null;
  const s = (i) => Easing.easeOutCubic(rise(local, 0.35 + i * 0.14, 0.5));
  const prepClick = band(local, 5.70, 6.16, 0.12);
  const team = [
    { avatar: 0, skin: '#d7ad86', hair: '#3b2a24' },
    { avatar: 1, skin: '#c9916c', hair: '#2b2425' },
    { avatar: 2, skin: '#e1bd93', hair: '#5a382d' },
  ];
  // m0123: day-basis Gantt — 6 Wochen × 5 Tage, Bars aus Jira / ServiceNow synchronisiert
  const ganttTasks = [
    { label: 'Kickoff & Zugänge', src: 'jira', key: 'BANK-322', d0: 0, d1: 3, state: 'done' },
    { label: 'Landing Zone & IAM', src: 'jira', key: 'BANK-331', d0: 2, d1: 10, state: 'done' },
    { label: 'Security Baseline · GuardDuty', src: 'jira', key: 'BANK-342', d0: 7, d1: 17, state: 'active' },
    { label: 'Migration Kernsysteme', src: 'snow', key: 'CHG0042', d0: 15, d1: 25, state: 'next' },
    { label: 'Go-Live & Übergabe', src: 'snow', key: 'CHG0051', d0: 25, d1: 30, state: 'next' },
  ];
  const TODAY_D = 9.6; // DI · W2
  const heutePulse = 0.5 + 0.5 * Math.sin(local * 3.2);
  const kpiLabel = (text) => (
    <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 840, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>{text}</span>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: p * (1 - exit), pointerEvents: 'none',
      zIndex: 24, transform: `translateY(${(1 - p) * 16}px)` }}>
      <div style={{ position: 'absolute', left: 234, top: 76, width: 1568, height: 886, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: APP_FAINT, whiteSpace: 'nowrap' }}>Consulting Workspace</span>
          <span style={{ width: 3, height: 3, borderRadius: 99, background: APP_FAINT, opacity: 0.6 }} />
          <span style={{ fontFamily: MONO, fontSize: 9.6, fontWeight: 820, letterSpacing: '0.13em',
            textTransform: 'uppercase', color: '#9a6a2e', whiteSpace: 'nowrap' }}>Projekt · Bank AG</span>
          <span style={{ flex: 1 }} />
          <span style={{ height: 26, borderRadius: 999, padding: '0 11px', display: 'inline-flex',
            alignItems: 'center', gap: 7, background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.34)',
            fontFamily: MONO, fontSize: 9.2, fontWeight: 820, letterSpacing: '0.11em',
            textTransform: 'uppercase', color: '#3f7b56' }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#74c69d',
              boxShadow: '0 0 8px rgba(116,198,157,0.5)' }} />
            Aktiv · Woche 2 von 6
          </span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: DISPLAY, fontWeight: 780, fontSize: 30, letterSpacing: '-0.018em',
            color: APP_TEXT, whiteSpace: 'nowrap' }}>AWS Transformation</span>
          <span style={{ ...appTyped({ fontSize: 13, fontWeight: 740, color: APP_MUTED,
            whiteSpace: 'nowrap' }) }}>Security & Platform · 3 Consultants · Σ 7 PT / 2 W</span>
        </div>
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          <div style={{ height: 138, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '14px 16px', boxSizing: 'border-box', opacity: s(0),
            transform: `translateY(${(1 - s(0)) * 10}px)` }}>
            {kpiLabel('Fortschritt')}
            <div style={{ marginTop: 12, ...appTyped({ fontSize: 26, fontWeight: 850, color: APP_TEXT }) }}>34 %</div>
            <div style={{ marginTop: 12, position: 'relative', height: 8, borderRadius: 99,
              background: 'rgba(45,38,32,0.09)' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '34%', borderRadius: 99,
                background: `linear-gradient(90deg, #d99a55 0%, ${WARM} 100%)` }} />
            </div>
            <div style={{ marginTop: 9, ...appTyped({ fontSize: 10, fontWeight: 700, color: APP_FAINT,
              whiteSpace: 'nowrap' }) }}>on track · Go-Live W6</div>
          </div>
          <div style={{ height: 138, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '14px 16px', boxSizing: 'border-box', opacity: s(1),
            transform: `translateY(${(1 - s(1)) * 10}px)` }}>
            {kpiLabel('Team')}
            <div style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center' }}>
              {team.map((person, ti) => (
                <span key={`dash-team-${ti}`} style={{ width: 38, height: 38, borderRadius: 999,
                  marginLeft: ti === 0 ? 0 : -9, overflow: 'hidden', display: 'inline-flex',
                  border: '2px solid #ffffff', background: '#fffaf3' }}>
                  <ConsultantAvatar person={person} size={34} selected={0} />
                </span>
              ))}
            </div>
            <div style={{ marginTop: 10, ...appTyped({ fontSize: 11, fontWeight: 760, color: APP_MUTED,
              whiteSpace: 'nowrap' }) }}>Max · Lena · Jonas</div>
            <div style={{ marginTop: 4, ...appTyped({ fontSize: 10, fontWeight: 700, color: '#3f7b56',
              whiteSpace: 'nowrap' }) }}>alle verfügbar · W2</div>
          </div>
          <div style={{ height: 138, borderRadius: 16, background: '#fffaf3',
            border: `1px solid ${prepClick > 0.01 ? 'rgba(240,168,94,0.85)' : 'rgba(240,168,94,0.5)'}`,
            boxShadow: prepClick > 0.01 ? `0 0 ${14 + prepClick * 18}px rgba(240,168,94,0.32)` : '0 12px 28px rgba(240,168,94,0.10)',
            padding: '14px 16px', boxSizing: 'border-box', opacity: s(2),
            transform: `translateY(${(1 - s(2)) * 10}px) scale(${1 - prepClick * 0.012})` }}>
            {kpiLabel('Nächstes Meeting')}
            <div style={{ marginTop: 12, ...appTyped({ fontSize: 14.5, fontWeight: 830, color: APP_TEXT,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>
              Status-Meeting · Bank AG
            </div>
            <div style={{ marginTop: 5, ...appTyped({ fontSize: 10.5, fontWeight: 720, color: APP_MUTED,
              whiteSpace: 'nowrap' }) }}>DO 10:00 · Teams · mit Lena & Max</div>
            <span style={{ marginTop: 11, height: 30, borderRadius: 999, padding: '0 12px',
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(240,168,94,0.14)', border: '1px solid rgba(240,168,94,0.30)',
              ...appTyped({ fontSize: 11.5, fontWeight: 820, color: '#9a6a2e', whiteSpace: 'nowrap' }) }}>
              <Icon name="sparkles" size={12} color="#9a6a2e" sw={2.4} />
              Meeting vorbereiten
            </span>
          </div>
          <div style={{ height: 138, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '14px 16px', boxSizing: 'border-box', opacity: s(3),
            transform: `translateY(${(1 - s(3)) * 10}px)` }}>
            {kpiLabel('Offene Punkte')}
            <div style={{ marginTop: 12, ...appTyped({ fontSize: 26, fontWeight: 850, color: APP_TEXT }) }}>3</div>
            <div style={{ marginTop: 10, ...appTyped({ fontSize: 11, fontWeight: 760, color: APP_MUTED,
              whiteSpace: 'nowrap' }) }}>IAM-Findings · Security Review</div>
            <div style={{ marginTop: 4, ...appTyped({ fontSize: 10, fontWeight: 700, color: '#c2803a',
              whiteSpace: 'nowrap' }) }}>2 fällig vor dem Status-Meeting</div>
          </div>
        </div>
        <div style={{ marginTop: 14, borderRadius: 16, background: APP_RAISED, border: `1px solid ${APP_LINE}`,
          padding: '15px 18px 14px', boxSizing: 'border-box', opacity: s(4),
          transform: `translateY(${(1 - s(4)) * 10}px)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 840, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: APP_MUTED }}>Projekt-Timeline · Tagesbasis</span>
            <span style={{ flex: 1 }} />
            <span style={{ height: 22, borderRadius: 999, padding: '0 9px', display: 'inline-flex',
              alignItems: 'center', gap: 6, background: '#e8f4ec', border: '1px solid rgba(116,198,157,0.34)',
              fontFamily: MONO, fontSize: 8.2, fontWeight: 840, letterSpacing: '0.11em',
              textTransform: 'uppercase', color: '#3f7b56' }}>
              <span style={{ width: 5, height: 5, borderRadius: 99, background: '#74c69d',
                boxShadow: `0 0 ${4 + heutePulse * 5}px rgba(116,198,157,0.7)` }} />
              Live
            </span>
            <span style={{ height: 22, borderRadius: 999, padding: '0 9px', display: 'inline-flex',
              alignItems: 'center', gap: 6, background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
              fontFamily: MONO, fontSize: 8.2, fontWeight: 840, letterSpacing: '0.11em',
              textTransform: 'uppercase', color: APP_MUTED }}>
              <img src="assets/tech-icons/jira.svg" alt="" style={{ width: 10, height: 10, display: 'block' }} />
              Jira · synchron
            </span>
            <span style={{ height: 22, borderRadius: 999, padding: '0 9px', display: 'inline-flex',
              alignItems: 'center', gap: 6, background: '#ffffff', border: `1px solid ${APP_LINE_STRONG}`,
              fontFamily: MONO, fontSize: 8.2, fontWeight: 840, letterSpacing: '0.11em',
              textTransform: 'uppercase', color: APP_MUTED }}>
              <span style={{ width: 5, height: 5, borderRadius: 2, background: '#3f7b56' }} />
              ServiceNow · verknüpft
            </span>
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '212px 1fr', columnGap: 14 }}>
            <div>
              <div style={{ height: 18 }} />
              <div style={{ marginTop: 8, display: 'grid', rowGap: 8 }}>
                {ganttTasks.map((task) => (
                  <div key={`gl-${task.key}`} style={{ height: 26, display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', minWidth: 0 }}>
                    <span style={{ display: 'block', ...appTyped({ fontSize: 11.2, fontWeight: 800,
                      color: task.state === 'next' ? APP_MUTED : APP_TEXT, whiteSpace: 'nowrap',
                      overflow: 'hidden', textOverflow: 'ellipsis' }) }}>{task.label}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                      {task.src === 'jira'
                        ? <img src="assets/tech-icons/jira.svg" alt="" style={{ width: 8, height: 8, display: 'block' }} />
                        : <span style={{ width: 5, height: 5, borderRadius: 1.5, background: '#3f7b56' }} />}
                      <span style={{ fontFamily: MONO, fontSize: 7.8, fontWeight: 820, letterSpacing: '0.08em',
                        color: APP_FAINT }}>{task.src === 'jira' ? 'JIRA' : 'SNOW'} · {task.key}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 26, bottom: 0, display: 'grid',
                gridTemplateColumns: 'repeat(30, 1fr)' }}>
                {Array.from({ length: 30 }).map((_, d) => (
                  <span key={`tick-${d}`} style={{ borderLeft: d === 0 ? 'none'
                    : `1px ${d % 5 === 0 ? 'solid rgba(45,38,32,0.11)' : 'dashed rgba(45,38,32,0.05)'}` }} />
                ))}
              </div>
              <div style={{ position: 'absolute', top: 20, bottom: 0, left: `${(TODAY_D / 30) * 100}%`,
                borderLeft: `1.6px solid ${WARM}`, zIndex: 2 }}>
                <span style={{ position: 'absolute', left: -4.5, top: -4, width: 8, height: 8, borderRadius: 99,
                  background: WARM, boxShadow: `0 0 ${5 + heutePulse * 7}px rgba(240,168,94,0.65)` }} />
              </div>
              <span style={{ position: 'absolute', top: -3, left: `${(TODAY_D / 30) * 100}%`,
                transform: 'translateX(-50%)', height: 17, borderRadius: 999, padding: '0 7px', zIndex: 3,
                display: 'inline-flex', alignItems: 'center', background: 'rgba(240,168,94,0.16)',
                border: '1px solid rgba(240,168,94,0.45)', fontFamily: MONO, fontSize: 7.6, fontWeight: 840,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a6a2e',
                whiteSpace: 'nowrap' }}>Heute · DI · W2</span>
              <div style={{ height: 18, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
                alignItems: 'end' }}>
                {['W1', 'W2', 'W3', 'W4', 'W5', 'W6'].map((week) => (
                  <span key={week} style={{ fontFamily: MONO, fontSize: 8.4, fontWeight: 840,
                    letterSpacing: '0.12em', color: APP_FAINT, paddingLeft: 2 }}>{week}</span>
                ))}
              </div>
              <div style={{ marginTop: 8, display: 'grid', rowGap: 8 }}>
                {ganttTasks.map((task) => {
                  const left = (task.d0 / 30) * 100;
                  const width = ((task.d1 - task.d0) / 30) * 100;
                  const fillP = task.state === 'active'
                    ? Math.max(0, Math.min(1, (TODAY_D - task.d0) / (task.d1 - task.d0))) : 0;
                  return (
                    <div key={`gb-${task.key}`} style={{ position: 'relative', height: 26 }}>
                      {task.state === 'done' && (
                        <span style={{ position: 'absolute', top: 7, height: 12, borderRadius: 99,
                          left: `${left}%`, width: `${width}%`, background: '#74c69d', opacity: 0.85 }} />
                      )}
                      {task.state === 'active' && (
                        <span style={{ position: 'absolute', top: 7, height: 12, borderRadius: 99,
                          left: `${left}%`, width: `${width}%`, background: 'rgba(240,168,94,0.22)',
                          border: '1px solid rgba(240,168,94,0.40)', boxSizing: 'border-box' }}>
                          <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 99,
                            width: `${fillP * 100}%`, background: WARM,
                            boxShadow: `0 0 ${6 + heutePulse * 6}px rgba(240,168,94,0.5)` }} />
                        </span>
                      )}
                      {task.state === 'next' && (
                        <span style={{ position: 'absolute', top: 7, height: 12, borderRadius: 99,
                          left: `${left}%`, width: `${width}%`, boxSizing: 'border-box',
                          border: `1.4px dashed ${APP_LINE_STRONG}`, background: 'rgba(255,255,255,0.5)' }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          <div style={{ height: 296, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '15px 17px', boxSizing: 'border-box', opacity: s(5),
            transform: `translateY(${(1 - s(5)) * 10}px)` }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {kpiLabel('Board · Sprint W2')}
              <span style={{ flex: 1 }} />
              <span style={{ height: 20, borderRadius: 999, padding: '0 8px', display: 'inline-flex',
                alignItems: 'center', gap: 5, background: APP_RAISED, border: `1px solid ${APP_LINE_STRONG}`,
                fontFamily: MONO, fontSize: 7.8, fontWeight: 840, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: APP_MUTED }}>
                <img src="assets/tech-icons/jira.svg" alt="" style={{ width: 9, height: 9, display: 'block' }} />
                synchron
              </span>
            </div>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
              height: 234 }}>
              {[
                { head: 'Offen', tone: APP_FAINT, cards: [
                  { t: 'IAM-Findings schließen', key: 'BANK-347', src: 'jira', a: 'M' },
                  { t: 'Change-Fenster W4 klären', key: 'CHG0042', src: 'snow', a: 'L' },
                ] },
                { head: 'In Arbeit', tone: '#9a6a2e', cards: [
                  { t: 'GuardDuty Triage 12 → 3', key: 'BANK-342', src: 'jira', a: 'M' },
                  { t: 'Security Review W2', key: 'BANK-351', src: 'jira', a: 'L' },
                ] },
                { head: 'Done', tone: '#3f7b56', cards: [
                  { t: 'Landing Zone Doku', key: 'BANK-322', src: 'jira', a: 'J', done: true },
                  { t: 'Kickoff Protokoll', key: 'BANK-301', src: 'jira', a: 'L', done: true },
                ] },
              ].map((col) => (
                <div key={`kb-${col.head}`} style={{ borderRadius: 10, background: 'rgba(45,38,32,0.045)',
                  padding: 7, boxSizing: 'border-box', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '2px 3px' }}>
                    <span style={{ fontFamily: MONO, fontSize: 8, fontWeight: 840, letterSpacing: '0.11em',
                      textTransform: 'uppercase', color: col.tone, whiteSpace: 'nowrap' }}>{col.head}</span>
                    <span style={{ fontFamily: MONO, fontSize: 8, fontWeight: 840, color: APP_FAINT }}>{col.cards.length}</span>
                  </div>
                  {col.cards.map((card) => (
                    <div key={card.key} style={{ marginTop: 6, borderRadius: 8, background: '#ffffff',
                      border: `1px solid ${APP_LINE}`, padding: '7px 8px', boxSizing: 'border-box',
                      boxShadow: '0 2px 6px rgba(45,38,32,0.05)' }}>
                      <span style={{ display: 'block', ...appTyped({ fontSize: 9.8, fontWeight: 800,
                        color: card.done ? APP_MUTED : APP_TEXT }), lineHeight: 1.3, maxHeight: 26,
                        overflow: 'hidden' }}>{card.t}</span>
                      <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                        {card.src === 'jira'
                          ? <img src="assets/tech-icons/jira.svg" alt="" style={{ width: 8, height: 8, display: 'block' }} />
                          : <span style={{ width: 5, height: 5, borderRadius: 1.5, background: '#3f7b56' }} />}
                        <span style={{ fontFamily: MONO, fontSize: 7.4, fontWeight: 820, letterSpacing: '0.06em',
                          color: APP_FAINT, whiteSpace: 'nowrap' }}>{card.key}</span>
                        {card.done && <Icon name="check" size={9} color="#3f7b56" sw={3} />}
                        <span style={{ marginLeft: 'auto', width: 14, height: 14, borderRadius: 99,
                          background: 'rgba(240,168,94,0.18)', border: '1px solid rgba(240,168,94,0.32)',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: MONO, fontSize: 7, fontWeight: 840, color: '#9a6a2e' }}>{card.a}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: 296, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '15px 17px', boxSizing: 'border-box', opacity: s(6),
            transform: `translateY(${(1 - s(6)) * 10}px)` }}>
            {kpiLabel('Arbeit & Insights')}
            <div style={{ marginTop: 13, display: 'grid', rowGap: 11 }}>
              {[
                { ti: 0, text: 'security.tf · IAM-Module aktualisiert', when: 'vor 2 h' },
                { ti: 1, text: 'GuardDuty-Findings triagiert · 12 → 3', when: 'gestern' },
                { ti: 2, text: 'Namenskonzept Ressourcen dokumentiert', when: 'DI' },
              ].map((row) => (
                <div key={row.text} style={{ display: 'grid', gridTemplateColumns: '24px 1fr auto',
                  alignItems: 'center', columnGap: 9 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 999, overflow: 'hidden',
                    display: 'inline-flex', background: '#fffaf3', border: `1px solid ${APP_LINE}` }}>
                    <ConsultantAvatar person={team[row.ti]} size={22} selected={0} />
                  </span>
                  <span style={{ ...appTyped({ fontSize: 11.5, fontWeight: 740, color: APP_TEXT,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }}>{row.text}</span>
                  <span style={{ fontFamily: MONO, fontSize: 8.6, fontWeight: 800, letterSpacing: '0.06em',
                    color: APP_FAINT }}>{row.when}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 13, borderRadius: 12, background: 'rgba(240,168,94,0.10)',
              border: '1px solid rgba(240,168,94,0.30)', padding: '11px 13px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: MONO,
                fontSize: 8.8, fontWeight: 840, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#9a6a2e' }}>
                <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
                Insight
              </span>
              <div style={{ marginTop: 6, ...appTyped({ fontSize: 11.5, fontWeight: 740, color: APP_TEXT,
                lineHeight: 1.45 }) }}>
                Migration W4 kollidiert mit dem Change-Freeze der Bank — Puffer +1 Woche empfohlen.
              </div>
            </div>
          </div>
          <div style={{ height: 296, borderRadius: 16, background: '#ffffff', border: `1px solid ${APP_LINE}`,
            padding: '15px 17px', boxSizing: 'border-box', opacity: s(7),
            transform: `translateY(${(1 - s(7)) * 10}px)` }}>
            {kpiLabel('To-Do · vor dem Status-Meeting')}
            <div style={{ marginTop: 13, display: 'grid', rowGap: 12 }}>
              {[
                { done: true, text: 'Landing-Zone Doku ablegen', due: '' },
                { done: false, text: 'IAM-Findings schließen', due: 'fällig MI' },
                { done: false, text: 'Security Review terminieren', due: 'fällig DO' },
                { done: false, text: 'Statusbericht W2 versenden', due: '' },
              ].map((todo) => (
                <div key={todo.text} style={{ display: 'grid', gridTemplateColumns: '18px 1fr auto',
                  alignItems: 'center', columnGap: 10 }}>
                  {todo.done ? (
                    <span style={{ width: 16, height: 16, borderRadius: 6, background: '#e8f4ec',
                      border: '1px solid rgba(116,198,157,0.44)', display: 'inline-flex',
                      alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="check" size={10} color="#3f7b56" sw={3} />
                    </span>
                  ) : (
                    <span style={{ width: 16, height: 16, borderRadius: 6, boxSizing: 'border-box',
                      border: `1.6px dashed ${APP_LINE_STRONG}` }} />
                  )}
                  <span style={{ ...appTyped({ fontSize: 12, fontWeight: 760,
                    color: todo.done ? APP_FAINT : APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden',
                    textOverflow: 'ellipsis' }) }}>{todo.text}</span>
                  {todo.due !== '' && (
                    <span style={{ height: 20, borderRadius: 999, padding: '0 8px', display: 'inline-flex',
                      alignItems: 'center', background: 'rgba(240,168,94,0.12)',
                      border: '1px solid rgba(240,168,94,0.30)',
                      ...appTyped({ fontSize: 9, fontWeight: 820, color: '#9a6a2e',
                        whiteSpace: 'nowrap' }) }}>{todo.due}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 12, borderRadius: 16, background: APP_RAISED, border: `1px solid ${APP_LINE}`,
          padding: '14px 18px', boxSizing: 'border-box', opacity: s(8),
          transform: `translateY(${(1 - s(8)) * 10}px)` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: MONO, fontSize: 9.4, fontWeight: 840, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: APP_MUTED }}>Projekt-Wissen</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: MONO,
              fontSize: 8.8, fontWeight: 820, letterSpacing: '0.11em', textTransform: 'uppercase',
              color: '#9a6a2e' }}>
              <Icon name="sparkles" size={11} color="#9a6a2e" sw={2.4} />
              aus Wissen · automatisch gepflegt
            </span>
          </div>
          <div style={{ marginTop: 11, display: 'flex', gap: 9 }}>
            {[
              { icon: 'file', title: 'AWS Zielarchitektur', sub: 'Konzept v3' },
              { icon: 'book', title: 'security.tf', sub: 'bank-ag/aws-transformation' },
              { icon: 'briefcase', title: 'Konzept-Präsentation', sub: '12 Folien' },
              { icon: 'shield', title: 'DORA-Anforderungen', sub: 'Bank AG · Compliance' },
              { icon: 'book', title: 'Runbook Landing Zone', sub: 'übergeben W2' },
            ].map((doc) => (
              <span key={doc.title} style={{ flex: 1, minWidth: 0, height: 46, borderRadius: 12,
                background: '#ffffff', border: `1px solid ${APP_LINE}`, padding: '0 12px',
                display: 'inline-flex', alignItems: 'center', gap: 9, boxSizing: 'border-box' }}>
                <span style={{ width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(240,168,94,0.12)', border: '1px solid rgba(240,168,94,0.26)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={doc.icon} size={13} color="#9a6a2e" sw={2.2} />
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', ...appTyped({ fontSize: 11, fontWeight: 800,
                    color: APP_TEXT, whiteSpace: 'nowrap', overflow: 'hidden',
                    textOverflow: 'ellipsis' }) }}>{doc.title}</span>
                  <span style={{ display: 'block', marginTop: 1, ...appTyped({ fontSize: 9, fontWeight: 700,
                    color: APP_FAINT, whiteSpace: 'nowrap', overflow: 'hidden',
                    textOverflow: 'ellipsis' }) }}>{doc.sub}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
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
      <Scene start={SCENE_SOLUTION_START} end={OS_EXPLAINER_EXIT}>{(l) => <ConsultingOSExplainer local={l} />}</Scene>
      <ConsultryAppExperienceFrame>
        <Scene start={SCENE_SOLUTION_START} end={SCENE_SOLUTION_VISUAL_END}>{(l) => <SceneSolutionAppContent local={l} />}</Scene>
        <Scene start={SCENE_VERTRIEB_START} end={SCENE_VERTRIEB_END}>{(l) => <SceneVertriebAppContent local={l} />}</Scene>
        {/* cc-3/m0047: Wissen knowledge-graph dropped; the agent's concrete output ("Smart Matched Code") is recovered as a short beat right after the send. */}
        <Scene start={SCENE_MATCHED_START} end={SCENE_MATCHED_END}>{(l, dur) => <SceneMatchedCodeAppContent local={l} dur={dur} />}</Scene>
        <Scene start={PROJECT_DASH_START} end={PROJECT_DASH_END}>{(l) => <SceneProjectDashboardContent local={l} />}</Scene>
        <OfferOutreachAppScene />
        <PersistentPromptAgentBridge />
      </ConsultryAppExperienceFrame>
      <Scene start={SCENE_MATCHED_START} end={SCENE_MATCHED_END}>{(l, dur) => <ConsultantWorkExternalWindows local={l} start={-0.90} end={dur - 0.35} />}</Scene>
      <Scene start={SCENE_SOLUTION_START} end={SCENE_SOLUTION_VISUAL_END}>{(l) => <SceneSolutionOverlays local={l} />}</Scene>
      <Scene start={SCENE_FINANZ_START} end={SCENE_FINANZ_END}>{(l) => SceneFinanz(l)}</Scene>
      <Scene start={SCENE_CTA_START} end={SCENE_CTA_END} fade={0.5}>{(l) => SceneCTA(l)}</Scene>
      <PersistentProjectBundleBridge />
      <Music />
      <PersistentLogo />
    </Stage>
  );
}

// ── Persistent stage indicator (jules): ONE element, mounted once (never remounts). It debuts as the
//    intro workflow grid, then morphs into the left app sidebar so the shell itself becomes the active
//    stage indicator (Signal -> Team -> Angebot -> Projekt -> Faktura).
const STAGE_RAIL = [
  { key: 'Signal',  icon: 'target',   color: '#f0a85e', start: SIGNAL_START },              // ~12.85
  { key: 'Team',    icon: 'users',    color: '#8fbfd8', start: SIGNAL_START + 12.15 },       // ~25.0
  { key: 'Angebot', icon: 'file',     color: '#d69a4d', start: SCENE_VERTRIEB_START },        // ~38.05
  { key: 'Projekt', icon: 'briefcase', color: '#c65bb0', start: SCENE_VERTRIEB_START + WORK_PROMPT_VISUAL_START - 0.20 },
  { key: 'Faktura', icon: 'euro',     color: '#e8655a', start: SCENE_FINANZ_START },          // ~65.5
];
const STAGE_INTRO_APPEAR = OS_EXPLAINER_START + 2.42;   // ~8.47 — the beat the old flow strip used
const STAGE_DOCK_START   = OS_EXPLAINER_EXIT - 1.15;    // ~11.2 — begins flying up as the intro leaves
const STAGE_DOCK_DUR     = 1.35;
const STAGE_RAIL_OUT     = SCENE_CTA_START - 0.40;      // clears before the closing CTA
// jules: intro presentation is a 3x2 grid of bigger rounded-square cards (3 on top, 2 centred below)
//        that then morphs into the left app rail. No connecting line.
const STAGE_CARD_W = 210, STAGE_CARD_H = 158, STAGE_CARD_R = 26;
const STAGE_COL_STEP = STAGE_CARD_W + 34;   // 244
const STAGE_ROW_STEP = STAGE_CARD_H + 30;   // 188
const STAGE_GRID_CX = 960, STAGE_GRID_CY = 748;
const STAGE_GRID_POS = [
  { x: STAGE_GRID_CX - STAGE_COL_STEP,     y: STAGE_GRID_CY - STAGE_ROW_STEP / 2 }, // Signal  r0c0
  { x: STAGE_GRID_CX,                      y: STAGE_GRID_CY - STAGE_ROW_STEP / 2 }, // Team    r0c1
  { x: STAGE_GRID_CX + STAGE_COL_STEP,     y: STAGE_GRID_CY - STAGE_ROW_STEP / 2 }, // Angebot r0c2
  { x: STAGE_GRID_CX - STAGE_COL_STEP / 2, y: STAGE_GRID_CY + STAGE_ROW_STEP / 2 }, // Projekt r1
  { x: STAGE_GRID_CX + STAGE_COL_STEP / 2, y: STAGE_GRID_CY + STAGE_ROW_STEP / 2 }, // Faktura r1
];
const STAGE_SIDE_SIZE = APP_SIDEBAR_ITEM_SIZE;
const STAGE_SIDE_LEFT = APP_FRAME_LEFT + APP_SIDEBAR_ITEM_LEFT;
const STAGE_SIDE_TOP0 = APP_FRAME_TOP + APP_TOPBAR_H + APP_SIDEBAR_NAV_TOP;
const STAGE_SIDE_STEP = APP_SIDEBAR_ITEM_SIZE + APP_SIDEBAR_ITEM_GAP;

function PersistentStageIndicator() {
  const t = useTime();
  if (t < STAGE_INTRO_APPEAR - 0.35) return null;
  const out = 1 - rise(t, STAGE_RAIL_OUT, 0.60);
  if (out <= 0.001) return null;
  const dock = Easing.easeInOutCubic(clamp((t - STAGE_DOCK_START) / STAGE_DOCK_DUR, 0, 1));
  const introOverlay = 1 - rise(t, SIGNAL_START - 0.05, 0.54);
  if (introOverlay <= 0.001) return null;
  const hexA = (hex, a) => hex + Math.round(clamp(a, 0, 1) * 255).toString(16).padStart(2, '0');
  const litOf = (i) => {
    const a = clamp((t - STAGE_RAIL[i].start) / 0.55, 0, 1);
    const nextStart = i < STAGE_RAIL.length - 1 ? STAGE_RAIL[i + 1].start : STAGE_RAIL_OUT + 2;
    const b = clamp((t - nextStart) / 0.55, 0, 1);
    return a * (1 - b) * dock;
  };
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 46, opacity: out * introOverlay }}>
      {STAGE_RAIL.map((s, i) => {
        const chipIn = rise(t, STAGE_INTRO_APPEAR + i * 0.10, 0.56);
        if (chipIn <= 0.001) return null;
        const lit = litOf(i);
        const g = STAGE_GRID_POS[i];
        const sideLeft = STAGE_SIDE_LEFT;
        const sideTop = STAGE_SIDE_TOP0 + i * STAGE_SIDE_STEP;
        const railIconCX = sideLeft + STAGE_SIDE_SIZE / 2;
        const railIconCY = sideTop + STAGE_SIDE_SIZE / 2;
        const pillLeft = mix(g.x - STAGE_CARD_W / 2, sideLeft, dock);
        const pillTop  = mix(g.y - STAGE_CARD_H / 2, sideTop, dock);
        const pillW    = mix(STAGE_CARD_W, STAGE_SIDE_SIZE, dock);
        const pillH    = mix(STAGE_CARD_H, STAGE_SIDE_SIZE, dock);
        const pillR    = mix(STAGE_CARD_R, 22, dock);
        const iconCX = mix(g.x, railIconCX, dock);
        const iconCY = mix(g.y - 20, railIconCY, dock);
        const iconSize = mix(58, 50, dock);
        const glyph = mix(26, 24, dock);
        const labelCX = g.x;
        const labelCY = g.y + 42;
        const labelFont = 22;
        const introness = 1 - dock;
        const baseBorder = mix(0.36, 0.58, introness) + lit * 0.05; // coloured & strong in the intro grid
        return (
          <React.Fragment key={s.key}>
            <div style={{ position: 'absolute', left: pillLeft, top: pillTop, width: pillW, height: pillH,
              borderRadius: pillR, opacity: chipIn,
              background: dock > 0.72 ? (lit > 0.22 ? APP_RAISED : APP_SURFACE) : APP_RAISED,
              border: `1px solid ${hexA(s.color, baseBorder)}`,
              boxShadow: dock > 0.72
                ? (lit > 0.22 ? `0 0 26px ${hexA(s.color, 0.22)}, inset 2px 0 0 ${s.color}` : '0 12px 24px rgba(35,31,27,0.08)')
                : '0 18px 44px rgba(35,31,27,0.16)' }} />
            <div style={{ position: 'absolute', left: pillLeft, top: pillTop, width: pillW, height: pillH,
              borderRadius: pillR, pointerEvents: 'none',
              border: `1px solid ${s.color}`, opacity: lit * 0.8,
              boxShadow: `0 0 ${10 + lit * 16}px ${s.color}` }} />
            <div style={{ position: 'absolute', left: iconCX - iconSize / 2, top: iconCY - iconSize / 2,
              width: iconSize, height: iconSize, borderRadius: 999,
              display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: chipIn,
              background: APP_SURFACE,
              border: `1px solid ${hexA(s.color, 0.58)}`,
              boxShadow: `0 0 ${mix(12, lit * 16, dock)}px ${hexA(s.color, 0.34)}` }}>
              <Icon name={s.icon} size={glyph} color={s.color} sw={1.9} />
            </div>
            <div style={{ position: 'absolute', left: labelCX, top: labelCY,
              transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap',
              opacity: chipIn * clamp(1 - dock * 1.35, 0, 1),
              fontFamily: DISPLAY,
              fontSize: labelFont, fontWeight: 760,
              letterSpacing: '-0.012em',
              color: APP_TEXT }}>
              {s.key}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

// m0047: recovered "Smart Matched Code" beat — the agent's concrete output, shown right after the send/
//         receive bridge, in the slot the removed Wissen scene used to occupy.
function SceneMatchedCodeAppContent({ local, dur }) {
  return <ConsultantWorkDetailJump local={local} start={-0.90} end={dur - 0.35} />;
}

function SceneMatchedCode(local) {
  const dur = SCENE_MATCHED_END - SCENE_MATCHED_START;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'transparent', overflow: 'hidden' }}>
      <AppViewportChild zIndex={20}>
        <SceneMatchedCodeAppContent local={local} dur={dur} />
      </AppViewportChild>
    </div>
  );
}

window.PitchVideo = PitchVideo;
