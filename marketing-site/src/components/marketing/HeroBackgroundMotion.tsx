"use client";

import { useAnimationFrame, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type NodeTone = "neutral" | "warm" | "coral" | "violet";

type Rgb = {
  r: number;
  g: number;
  b: number;
};

type AmbientGlow = {
  className: string;
  xAmplitude: number;
  yAmplitude: number;
  scaleAmplitude: number;
  opacityBase: number;
  opacityAmplitude: number;
  speed: number;
  phase: number;
};

type OrbitalLane = {
  radius: number;
  tilt: number;
  rotation: number;
  band: number;
  opacity: number;
  shellStroke: string;
  edgeStroke: string;
  textureStroke: string;
  dash: string;
  textureDash: string;
  shellWidth: number;
  textureWidth: number;
};

type BaseNode = {
  id: string;
  x: number;
  y: number;
  ampX: number;
  ampY: number;
  speed: number;
  phase: number;
  radius: number;
  tone: NodeTone;
  depth: number;
};

type CandidateLink = {
  from: number;
  to: number;
  minDistance: number;
  maxDistance: number;
  curve: number;
  energySpeed: number;
  offset: number;
  tone: NodeTone;
  orbitDirection: "clockwise" | "counterclockwise";
  reversePulse?: boolean;
};

type PositionedNode = BaseNode & {
  xPos: number;
  yPos: number;
  pulse: number;
  depthOpacity: number;
  layer: "front" | "back";
  renderedRadius: number;
  laneIndex: number;
  orbitAngle: number;
};

type LinkEndpoint = {
  id: string;
  xPos: number;
  yPos: number;
  depth: number;
  tone?: NodeTone;
  laneIndex?: number;
  orbitAngle?: number;
};

type ActiveLink = {
  id: string;
  d: string;
  targetNodeId: string;
  closeness: number;
  depth: number;
  layer: "front" | "back";
  energyOffset: number;
  energySpeed: number;
  energyGradientId: string;
  energyGradientX1: number;
  energyGradientY1: number;
  energyGradientX2: number;
  energyGradientY2: number;
  energyGradientBaseStart: string;
  energyGradientBaseEnd: string;
  energyGradientLead: string;
  energyGradientPeak: string;
  energyGradientTrail: string;
  energyGradientStart: number;
  energyGradientPeakStart: number;
  energyGradientPeakEnd: number;
  energyGradientEnd: number;
  energyStroke: string;
  packetFill: string;
  packetGlow: string;
  packetForward: { x: number; y: number };
  packetReverse: { x: number; y: number } | null;
  packetScale: number;
  arrivalPulse: number;
  baseOpacity: number;
  energyOpacity: number;
  baseWidth: number;
  energyWidth: number;
};

const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";
const SCENE_MOUNT_DELAY_MS = 180;
const FRAME_INTERVAL_MS = 1000 / 30;
const CONTROL_NODE_ANCHOR = { x: 1344, y: 432 };
const CONTROL_NODE_X_BIAS = 24;
const CONTROL_SHELL_OUTER_OFFSET = 18;
const CONTROL_SHELL_INNER_OFFSET = 8;
const NODE_ORBITAL_SPEED = 0.085;
const ORBITAL_Y_PROJECTION_SCALE = 0.58;
const NODE_Y_DEPTH_OFFSET = 3.2;
const NODE_ORBITAL_SLOT_ANGLES = [
  0,
  Math.PI,
];
const ORBITAL_LANES: OrbitalLane[] = [
  {
    radius: 206,
    tilt: 16,
    rotation: 0,
    band: 10,
    opacity: 0.18,
    shellStroke: "rgba(74,68,82,0.24)",
    edgeStroke: "rgba(132,118,146,0.13)",
    textureStroke: "rgba(214,205,198,0.08)",
    dash: "24 18",
    textureDash: "6 12",
    shellWidth: 16.5,
    textureWidth: 3.1,
  },
  {
    radius: 204,
    tilt: 30,
    rotation: 45,
    band: 9,
    opacity: 0.17,
    shellStroke: "rgba(70,63,78,0.22)",
    edgeStroke: "rgba(121,104,136,0.12)",
    textureStroke: "rgba(210,200,194,0.08)",
    dash: "22 16",
    textureDash: "5 11",
    shellWidth: 16,
    textureWidth: 3,
  },
  {
    radius: 204,
    tilt: 46,
    rotation: 90,
    band: 8,
    opacity: 0.13,
    shellStroke: "rgba(68,64,76,0.18)",
    edgeStroke: "rgba(108,120,148,0.1)",
    textureStroke: "rgba(202,198,214,0.06)",
    dash: "16 14",
    textureDash: "4 10",
    shellWidth: 13,
    textureWidth: 2.4,
  },
  {
    radius: 204,
    tilt: 30,
    rotation: 135,
    band: 9,
    opacity: 0.17,
    shellStroke: "rgba(70,63,78,0.22)",
    edgeStroke: "rgba(121,104,136,0.12)",
    textureStroke: "rgba(210,200,194,0.08)",
    dash: "22 16",
    textureDash: "5 11",
    shellWidth: 16,
    textureWidth: 3,
  },
];

const ORBITAL_ACCENT_RINGS: OrbitalLane[] = [
  {
    radius: 212,
    tilt: 80,
    rotation: 2,
    band: 7,
    opacity: 0.13,
    shellStroke: "rgba(76,68,92,0.18)",
    edgeStroke: "rgba(142,126,164,0.11)",
    textureStroke: "rgba(208,202,220,0.065)",
    dash: "20 14",
    textureDash: "4 10",
    shellWidth: 10,
    textureWidth: 1.8,
  },
  {
    radius: 214,
    tilt: 76,
    rotation: 54,
    band: 7,
    opacity: 0.12,
    shellStroke: "rgba(80,68,84,0.15)",
    edgeStroke: "rgba(150,118,132,0.1)",
    textureStroke: "rgba(210,202,198,0.055)",
    dash: "18 14",
    textureDash: "4 9",
    shellWidth: 9.6,
    textureWidth: 1.7,
  },
  {
    radius: 214,
    tilt: 76,
    rotation: 126,
    band: 7,
    opacity: 0.13,
    shellStroke: "rgba(80,68,84,0.18)",
    edgeStroke: "rgba(150,118,132,0.1)",
    textureStroke: "rgba(210,202,198,0.055)",
    dash: "18 14",
    textureDash: "4 9",
    shellWidth: 10,
    textureWidth: 1.8,
  },
  {
    radius: 216,
    tilt: 72,
    rotation: 34,
    band: 7,
    opacity: 0.1,
    shellStroke: "rgba(78,68,88,0.13)",
    edgeStroke: "rgba(152,126,138,0.08)",
    textureStroke: "rgba(208,198,192,0.05)",
    dash: "18 13",
    textureDash: "4 9",
    shellWidth: 9.2,
    textureWidth: 1.6,
  },
];

const ambientGlows: AmbientGlow[] = [
  {
    className:
      "absolute -right-[12rem] -top-[10rem] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(240,168,94,0.18)_0%,rgba(232,101,90,0.12)_22%,rgba(5,5,7,0)_70%)] blur-[128px]",
    xAmplitude: 18,
    yAmplitude: 14,
    scaleAmplitude: 0.045,
    opacityBase: 0.12,
    opacityAmplitude: 0.035,
    speed: 0.22,
    phase: 0.3,
  },
  {
    className:
      "absolute right-[8%] top-[42%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(155,89,182,0.18)_0%,rgba(155,89,182,0.08)_34%,rgba(5,5,7,0)_74%)] blur-[108px]",
    xAmplitude: 16,
    yAmplitude: 18,
    scaleAmplitude: 0.05,
    opacityBase: 0.08,
    opacityAmplitude: 0.028,
    speed: 0.18,
    phase: 1.1,
  },
  {
    className:
      "absolute right-[18%] top-[16%] h-[28rem] w-[14rem] rotate-[-18deg] rounded-full bg-[linear-gradient(180deg,rgba(191,83,71,0.12)_0%,rgba(232,101,90,0.05)_38%,rgba(5,5,7,0)_100%)] blur-[86px]",
    xAmplitude: 8,
    yAmplitude: 20,
    scaleAmplitude: 0.06,
    opacityBase: 0.05,
    opacityAmplitude: 0.022,
    speed: 0.24,
    phase: 2.4,
  },
];

const baseNodes: BaseNode[] = [
  { id: "n0", x: 1050, y: 212, ampX: 18, ampY: 16, speed: 0.88, phase: 0.1, radius: 5.8, tone: "warm", depth: -0.56 },
  { id: "n1", x: 1230, y: 244, ampX: 22, ampY: 18, speed: 0.82, phase: 0.6, radius: 6.3, tone: "coral", depth: -0.32 },
  { id: "n2", x: 1450, y: 258, ampX: 18, ampY: 18, speed: 0.78, phase: 1.4, radius: 6.1, tone: "violet", depth: -0.16 },
  { id: "n3", x: 1098, y: 396, ampX: 24, ampY: 18, speed: 0.7, phase: 2.4, radius: 5.7, tone: "neutral", depth: -0.08 },
  { id: "n4", x: 1262, y: 452, ampX: 20, ampY: 22, speed: 0.8, phase: 3.1, radius: 7.1, tone: "violet", depth: 0.14 },
  { id: "n5", x: 1514, y: 524, ampX: 18, ampY: 20, speed: 0.72, phase: 4.1, radius: 6.4, tone: "neutral", depth: 0.44 },
  { id: "n6", x: 1200, y: 628, ampX: 20, ampY: 18, speed: 0.74, phase: 4.8, radius: 5.8, tone: "warm", depth: 0.12 },
  { id: "n7", x: 1382, y: 666, ampX: 22, ampY: 16, speed: 0.8, phase: 5.2, radius: 6.8, tone: "coral", depth: 0.34 },
];

const candidateLinks: CandidateLink[] = [
  { from: 0, to: 4, minDistance: 228, maxDistance: 458, curve: 0, energySpeed: 0.18, offset: 0.12, tone: "warm", orbitDirection: "counterclockwise" },
  { from: 1, to: 5, minDistance: 224, maxDistance: 452, curve: 0, energySpeed: 0.18, offset: 0.34, tone: "coral", orbitDirection: "clockwise" },
  { from: 2, to: 6, minDistance: 220, maxDistance: 448, curve: 0, energySpeed: 0.18, offset: 0.56, tone: "violet", orbitDirection: "counterclockwise" },
  { from: 3, to: 7, minDistance: 224, maxDistance: 452, curve: 0, energySpeed: 0.18, offset: 0.78, tone: "neutral", orbitDirection: "clockwise" },
];

const sparkSpecs = [
  {
    left: "69%",
    top: "22%",
    size: 7,
    color: "rgba(240,168,94,0.62)",
    blur: 3,
    duration: 10.8,
    delay: 0.2,
    driftX: [0, 16, -8, 0],
    driftY: [0, -10, 6, 0],
    opacity: [0.12, 0.44, 0.18, 0.12],
  },
  {
    left: "81%",
    top: "34%",
    size: 8,
    color: "rgba(232,101,90,0.52)",
    blur: 4,
    duration: 12.4,
    delay: 0.9,
    driftX: [0, -14, 10, 0],
    driftY: [0, 10, -8, 0],
    opacity: [0.1, 0.36, 0.16, 0.1],
  },
  {
    left: "86%",
    top: "58%",
    size: 9,
    color: "rgba(155,89,182,0.48)",
    blur: 5,
    duration: 13.8,
    delay: 1.4,
    driftX: [0, 12, -12, 0],
    driftY: [0, -10, 8, 0],
    opacity: [0.08, 0.3, 0.12, 0.08],
  },
  {
    left: "78%",
    top: "72%",
    size: 7,
    color: "rgba(240,168,94,0.44)",
    blur: 4,
    duration: 11.6,
    delay: 0.55,
    driftX: [0, -10, 8, 0],
    driftY: [0, 10, -8, 0],
    opacity: [0.08, 0.3, 0.12, 0.08],
  },
] as const;

const NODE_THEME_PALETTES: Record<
  NodeTone,
  { edge: Rgb; fill: Rgb; glow: Rgb }
> = {
  warm: {
    edge: { r: 232, g: 145, b: 59 },
    fill: { r: 240, g: 168, b: 94 },
    glow: { r: 255, g: 225, b: 188 },
  },
  coral: {
    edge: { r: 191, g: 83, b: 71 },
    fill: { r: 232, g: 101, b: 90 },
    glow: { r: 255, g: 212, b: 204 },
  },
  violet: {
    edge: { r: 114, g: 80, b: 164 },
    fill: { r: 155, g: 89, b: 182 },
    glow: { r: 237, g: 218, b: 250 },
  },
  neutral: {
    edge: { r: 140, g: 56, b: 61 },
    fill: { r: 191, g: 83, b: 71 },
    glow: { r: 236, g: 190, b: 180 },
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mix(a: number, b: number, amount: number) {
  return a + (b - a) * amount;
}

function mixChannel(a: number, b: number, amount: number) {
  return Math.round(mix(a, b, amount));
}

function rgbaString(
  color: { r: number; g: number; b: number },
  alpha: number,
) {
  return `rgba(${color.r},${color.g},${color.b},${formatNumber(alpha)})`;
}

function tonePalette(tone: NodeTone) {
  return NODE_THEME_PALETTES[tone];
}

function mixRgb(a: Rgb, b: Rgb, amount: number): Rgb {
  return {
    r: mixChannel(a.r, b.r, amount),
    g: mixChannel(a.g, b.g, amount),
    b: mixChannel(a.b, b.b, amount),
  };
}

function quadraticPoint(
  start: { x: number; y: number },
  control: { x: number; y: number },
  end: { x: number; y: number },
  t: number,
) {
  const mt = 1 - t;

  return {
    x: mt * mt * start.x + 2 * mt * t * control.x + t * t * end.x,
    y: mt * mt * start.y + 2 * mt * t * control.y + t * t * end.y,
  };
}

function connectionPath(
  start: { x: number; y: number },
  end: { x: number; y: number },
  curve: number,
) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.hypot(dx, dy) || 1;
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const control = {
    x: (start.x + end.x) / 2 + normalX * curve,
    y: (start.y + end.y) / 2 + normalY * curve,
  };

  return {
    d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${control.x.toFixed(1)} ${control.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    control,
  };
}

function normalizeAngleDelta(from: number, to: number) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function projectOrbitalPoint(
  center: { xPos: number; yPos: number },
  laneIndex: number,
  angle: number,
) {
  const lane = ORBITAL_LANES[laneIndex];
  const laneRotation = (lane.rotation * Math.PI) / 180;
  const laneTilt = (lane.tilt * Math.PI) / 180;
  const localX = Math.cos(angle) * lane.radius;
  const localY =
    Math.sin(angle) *
    lane.radius *
    Math.cos(laneTilt) *
    ORBITAL_Y_PROJECTION_SCALE;
  const localZ = Math.sin(angle) * lane.radius * Math.sin(laneTilt);
  const rotatedX =
    localX * Math.cos(laneRotation) - localY * Math.sin(laneRotation);
  const rotatedY =
    localX * Math.sin(laneRotation) + localY * Math.cos(laneRotation);
  const frontBack = localZ / lane.radius;
  const perspectiveScale = 1 + frontBack * 0.065;

  return {
    x: center.xPos + rotatedX * perspectiveScale,
    y: center.yPos + rotatedY - frontBack * NODE_Y_DEPTH_OFFSET,
  };
}

function splinePath(points: { x: number; y: number }[]) {
  if (points.length < 2) {
    const point = points[0] ?? { x: 0, y: 0 };
    return `M ${formatNumber(point.x)} ${formatNumber(point.y)}`;
  }

  let d = `M ${formatNumber(points[0].x)} ${formatNumber(points[0].y)}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[Math.max(0, index - 1)];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[Math.min(points.length - 1, index + 2)];
    const cp1 = {
      x: p1.x + (p2.x - p0.x) / 6,
      y: p1.y + (p2.y - p0.y) / 6,
    };
    const cp2 = {
      x: p2.x - (p3.x - p1.x) / 6,
      y: p2.y - (p3.y - p1.y) / 6,
    };

    d += ` C ${formatNumber(cp1.x)} ${formatNumber(cp1.y)} ${formatNumber(cp2.x)} ${formatNumber(cp2.y)} ${formatNumber(p2.x)} ${formatNumber(p2.y)}`;
  }

  return d;
}

function orbitalConnectionPath(
  center: { xPos: number; yPos: number },
  laneIndex: number,
  startAngle: number,
  endAngle: number,
  direction: "clockwise" | "counterclockwise",
) {
  const normalizedDelta = normalizeAngleDelta(startAngle, endAngle);
  const delta =
    direction === "clockwise"
      ? (normalizedDelta >= 0 ? normalizedDelta - Math.PI * 2 : normalizedDelta)
      : (normalizedDelta <= 0 ? normalizedDelta + Math.PI * 2 : normalizedDelta);
  const segments = Math.max(10, Math.ceil(Math.abs(delta) / (Math.PI / 14)));
  const points = Array.from({ length: segments + 1 }, (_, index) => {
    const angle = startAngle + (delta * index) / segments;
    return projectOrbitalPoint(center, laneIndex, angle);
  });

  return {
    d: splinePath(points),
    control: points[Math.floor(points.length / 2)],
  };
}

function orbitalConnectionDelta(
  startAngle: number,
  endAngle: number,
  direction: "clockwise" | "counterclockwise",
) {
  const normalizedDelta = normalizeAngleDelta(startAngle, endAngle);

  return direction === "clockwise"
    ? (normalizedDelta >= 0 ? normalizedDelta - Math.PI * 2 : normalizedDelta)
    : (normalizedDelta <= 0 ? normalizedDelta + Math.PI * 2 : normalizedDelta);
}

function toneStyles(tone: NodeTone) {
  const palette = tonePalette(tone);

  return {
    fill: rgbaString(palette.fill, tone === "warm" ? 0.9 : 0.86),
    glow: rgbaString(palette.fill, tone === "neutral" ? 0.2 : 0.22),
    ring: rgbaString(palette.glow, tone === "violet" ? 0.28 : 0.26),
    stroke: `url(#heroEnergy${tone.charAt(0).toUpperCase()}${tone.slice(1)})`,
    packet: rgbaString(palette.glow, 0.94),
  };
}

function formatNumber(value: number) {
  return Number(value.toFixed(2));
}

function connectionEnergyPalette(
  startTone: NodeTone,
  endTone: NodeTone,
  closeness: number,
) {
  const intensity = clamp(closeness, 0, 1);
  const start = tonePalette(startTone);
  const end = tonePalette(endTone);
  const midpointBias = mix(0.38, 0.62, intensity);
  const midpointCore = mixRgb(start.fill, end.fill, midpointBias);
  const midpointGlow = mixRgb(start.glow, end.glow, midpointBias);
  const lead = mixRgb(start.edge, midpointCore, 0.42 + intensity * 0.1);
  const trail = mixRgb(end.edge, midpointCore, 0.42 + intensity * 0.1);

  return {
    baseStart: rgbaString(start.fill, 0.28 + intensity * 0.08),
    baseEnd: rgbaString(end.fill, 0.28 + intensity * 0.08),
    lead: rgbaString(lead, 0.74 + intensity * 0.1),
    peak: rgbaString(midpointGlow, 0.82 + intensity * 0.1),
    trail: rgbaString(trail, 0.74 + intensity * 0.1),
    packetFill: rgbaString(midpointGlow, 0.92),
    packetGlow: rgbaString(midpointCore, 0.28 + intensity * 0.12),
  };
}

function ellipseHalfPath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  side: "front" | "back",
) {
  if (side === "front") {
    return `M ${formatNumber(cx - rx)} ${formatNumber(cy)} A ${formatNumber(rx)} ${formatNumber(ry)} 0 0 1 ${formatNumber(cx + rx)} ${formatNumber(cy)}`;
  }

  return `M ${formatNumber(cx + rx)} ${formatNumber(cy)} A ${formatNumber(rx)} ${formatNumber(ry)} 0 0 1 ${formatNumber(cx - rx)} ${formatNumber(cy)}`;
}

function buildActiveLink(
  start: LinkEndpoint,
  end: LinkEndpoint,
  candidate: Omit<CandidateLink, "from" | "to">,
  frameTime: number,
  controlNode: { xPos: number; yPos: number },
) {
  const dx = end.xPos - start.xPos;
  const dy = end.yPos - start.yPos;
  const distance = Math.hypot(dx, dy);

  if (distance > candidate.maxDistance) {
    return null;
  }

  const closeness = clamp(
    1 - (distance - candidate.minDistance) / (candidate.maxDistance - candidate.minDistance),
    0,
    1,
  );
  const curve = mix(candidate.curve, candidate.curve * 0.35, closeness);
  const usesOrbitalPath =
    start.laneIndex !== undefined &&
    end.laneIndex !== undefined &&
    start.orbitAngle !== undefined &&
    end.orbitAngle !== undefined &&
    start.laneIndex === end.laneIndex;
  const orbitalDelta = usesOrbitalPath
    ? orbitalConnectionDelta(
        start.orbitAngle!,
        end.orbitAngle!,
        candidate.orbitDirection,
      )
    : 0;
  const path =
    usesOrbitalPath
      ? orbitalConnectionPath(
          controlNode,
          start.laneIndex!,
          start.orbitAngle!,
          end.orbitAngle!,
          candidate.orbitDirection,
        )
      : connectionPath(
          { x: start.xPos, y: start.yPos },
          { x: end.xPos, y: end.yPos },
          curve,
        );
  const loopPosition =
    ((frameTime * candidate.energySpeed * 0.46 + candidate.offset) % 1 + 1) % 1;
  const reversePosition = 1 - loopPosition;
  const energyOffset = -((frameTime * (24 + closeness * 30)) % 176);
  const gradientCenter =
    0.22 + ((((frameTime * candidate.energySpeed * 0.34 + candidate.offset) % 1) + 1) % 1) * 0.56;
  const depth = (start.depth + end.depth) / 2;
  const depthVisibility = mix(0.52, 1, clamp((depth + 0.72) / 1.44, 0, 1));
  const energyPalette = connectionEnergyPalette(
    start.tone ?? candidate.tone,
    end.tone ?? candidate.tone,
    closeness,
  );
  const energyGradientId = `heroEnergy-${start.id}-${end.id}`;

  return {
    id: `${start.id}-${end.id}`,
    d: path.d,
    targetNodeId: end.id,
    closeness,
    depth,
    layer: depth < -0.02 ? "back" : "front",
    energyOffset,
    energySpeed: candidate.energySpeed,
    energyGradientId,
    energyGradientX1: start.xPos,
    energyGradientY1: start.yPos,
    energyGradientX2: end.xPos,
    energyGradientY2: end.yPos,
    energyGradientBaseStart: energyPalette.baseStart,
    energyGradientBaseEnd: energyPalette.baseEnd,
    energyGradientLead: energyPalette.lead,
    energyGradientPeak: energyPalette.peak,
    energyGradientTrail: energyPalette.trail,
    energyGradientStart: Math.max(0, gradientCenter - 0.1),
    energyGradientPeakStart: Math.max(0, gradientCenter - 0.032),
    energyGradientPeakEnd: Math.min(1, gradientCenter + 0.038),
    energyGradientEnd: Math.min(1, gradientCenter + 0.11),
    energyStroke: `url(#${energyGradientId})`,
    packetFill: energyPalette.packetFill,
    packetGlow: energyPalette.packetGlow,
    packetForward: usesOrbitalPath
      ? projectOrbitalPoint(
          controlNode,
          start.laneIndex!,
          start.orbitAngle! + orbitalDelta * loopPosition,
        )
      : quadraticPoint(
          { x: start.xPos, y: start.yPos },
          path.control,
          { x: end.xPos, y: end.yPos },
          loopPosition,
        ),
    packetReverse: candidate.reversePulse
      ? usesOrbitalPath
        ? projectOrbitalPoint(
            controlNode,
            start.laneIndex!,
            start.orbitAngle! + orbitalDelta * reversePosition,
          )
        : quadraticPoint(
            { x: start.xPos, y: start.yPos },
            path.control,
            { x: end.xPos, y: end.yPos },
            reversePosition,
          )
      : null,
    packetScale: 0.82 + clamp((depth + 1) / 2, 0, 1) * 0.34,
    arrivalPulse: 0,
    baseOpacity: (0.14 + closeness * 0.24) * depthVisibility,
    energyOpacity: (0.26 + closeness * 0.52) * depthVisibility,
    baseWidth: (0.62 + closeness * 0.38) * (0.9 + Math.max(depth, 0) * 0.08),
    energyWidth: (0.9 + closeness * 0.92) * (0.9 + Math.max(depth, 0) * 0.12),
  } satisfies ActiveLink;
}

export function HeroBackgroundMotion() {
  const shouldReduceMotion = useReducedMotion();
  const [shouldRenderScene, setShouldRenderScene] = useState(false);
  const [time, setTime] = useState(0);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    let timeoutId: number | null = null;
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const viewport = window.visualViewport;

    const syncSceneVisibility = () => {
      const layoutViewportWidth = document.documentElement.clientWidth;
      const visualViewportWidth = viewport?.width ?? layoutViewportWidth;
      const settledViewportWidth = Math.min(layoutViewportWidth, visualViewportWidth);

      setShouldRenderScene(mediaQuery.matches && settledViewportWidth >= 768);
    };

    timeoutId = window.setTimeout(syncSceneVisibility, SCENE_MOUNT_DELAY_MS);
    mediaQuery.addEventListener("change", syncSceneVisibility);
    window.addEventListener("resize", syncSceneVisibility);
    viewport?.addEventListener("resize", syncSceneVisibility);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      mediaQuery.removeEventListener("change", syncSceneVisibility);
      window.removeEventListener("resize", syncSceneVisibility);
      viewport?.removeEventListener("resize", syncSceneVisibility);
    };
  }, []);

  useAnimationFrame((currentTime) => {
    if (!shouldRenderScene || shouldReduceMotion) {
      return;
    }

    if (currentTime - lastFrameRef.current < FRAME_INTERVAL_MS) {
      return;
    }

    lastFrameRef.current = currentTime;
    setTime(currentTime / 1000);
  });

  const controlNode = useMemo(() => {
    const frameTime = shouldReduceMotion ? 0 : time;
    const driftX =
      Math.sin(frameTime * 0.24 + 0.9) * 4 +
      Math.cos(frameTime * 0.14 + 0.3) * 1.8;
    const driftY =
      Math.cos(frameTime * 0.2 + 0.7) * 4.5 +
      Math.sin(frameTime * 0.12 + 0.1) * 1.8;
    const pulse = 0.5 + 0.5 * Math.sin(frameTime * 0.94 + 0.4);
    const rotation = shouldReduceMotion ? 0 : frameTime * 1.35;

    return {
      id: "control",
      xPos: CONTROL_NODE_ANCHOR.x + CONTROL_NODE_X_BIAS + driftX,
      yPos: CONTROL_NODE_ANCHOR.y + driftY,
      depth: 0.18,
      pulse,
      rotation,
      coreRadius: 58 + pulse * 2.4,
      logoRadius: 26.5 + pulse * 0.6,
      haloRadius: 104 + pulse * 5.8,
    };
  }, [shouldReduceMotion, time]);

  const positionedNodes = useMemo<PositionedNode[]>(() => {
    const frameTime = shouldReduceMotion ? 0 : time;

    return baseNodes.map((node, index) => {
      const laneIndex = index % ORBITAL_LANES.length;
      const lane = ORBITAL_LANES[laneIndex];
      const laneSlot = Math.floor(index / ORBITAL_LANES.length);
      const laneRotation = (lane.rotation * Math.PI) / 180;
      const laneTilt = (lane.tilt * Math.PI) / 180;
      const pulse = 0.5 + 0.5 * Math.sin(frameTime * (node.speed * 2.2) + node.phase);
      const lanePhase = laneRotation * 0.34;
      const slotAngle =
        NODE_ORBITAL_SLOT_ANGLES[laneSlot % NODE_ORBITAL_SLOT_ANGLES.length] ?? 0;
      const orbitAngle =
        frameTime * NODE_ORBITAL_SPEED +
        lanePhase +
        slotAngle;
      const ringRadius = lane.radius;
      const localX = Math.cos(orbitAngle) * ringRadius;
      const localY =
        Math.sin(orbitAngle) *
        ringRadius *
        Math.cos(laneTilt) *
        ORBITAL_Y_PROJECTION_SCALE;
      const localZ = Math.sin(orbitAngle) * ringRadius * Math.sin(laneTilt);
      const rotatedX =
        localX * Math.cos(laneRotation) - localY * Math.sin(laneRotation);
      const rotatedY =
        localX * Math.sin(laneRotation) + localY * Math.cos(laneRotation);
      const frontBack = localZ / lane.radius;
      const perspectiveScale = 1 + frontBack * 0.065;
      const depth = clamp(
        frontBack * 0.78,
        -0.82,
        0.82,
      );
      const depthOpacity = mix(0.4, 1, clamp((depth + 0.84) / 1.68, 0, 1));
      const xPos = controlNode.xPos + rotatedX * perspectiveScale;
      const yPos = controlNode.yPos + rotatedY - frontBack * NODE_Y_DEPTH_OFFSET;

      return {
        ...node,
        xPos,
        yPos,
        pulse,
        depth,
        depthOpacity,
        layer: depth < -0.02 ? "back" : "front",
        renderedRadius: node.radius * (1 + depth * 0.22),
        laneIndex,
        orbitAngle,
      };
    });
  }, [controlNode, shouldReduceMotion, time]);

  const activeLinks = useMemo<ActiveLink[]>(() => {
    const frameTime = shouldReduceMotion ? 0 : time;

    return candidateLinks.flatMap((candidate) => {
      const link = buildActiveLink(
        positionedNodes[candidate.from],
        positionedNodes[candidate.to],
        candidate,
        frameTime,
        controlNode,
      );

      return link ? [link] : [];
    });
  }, [controlNode, positionedNodes, shouldReduceMotion, time]);

  const backNodes = useMemo(
    () => positionedNodes.filter((node) => node.layer === "back").sort((left, right) => left.depth - right.depth),
    [positionedNodes],
  );
  const frontNodes = useMemo(
    () => positionedNodes.filter((node) => node.layer === "front").sort((left, right) => left.depth - right.depth),
    [positionedNodes],
  );
  const backLinks = useMemo(
    () => activeLinks.filter((link) => link.layer === "back").sort((left, right) => left.depth - right.depth),
    [activeLinks],
  );
  const frontLinks = useMemo(
    () => activeLinks.filter((link) => link.layer === "front").sort((left, right) => left.depth - right.depth),
    [activeLinks],
  );

  if (!shouldRenderScene) {
    return null;
  }

  const gridShift = shouldReduceMotion ? 0 : Math.sin(time * 0.12) * 10;
  const gridOpacity = shouldReduceMotion ? 0.022 : 0.017 + Math.sin(time * 0.18) * 0.004;
  const outerOrbitRx = controlNode.coreRadius + CONTROL_SHELL_OUTER_OFFSET;
  const outerOrbitRy = outerOrbitRx * 0.42;
  const innerOrbitRx = controlNode.coreRadius + CONTROL_SHELL_INNER_OFFSET;
  const innerOrbitRy = innerOrbitRx * 0.3;
  const orbitalTextureOffset = 0;
  const shellRings = [...ORBITAL_LANES, ...ORBITAL_ACCENT_RINGS];
  const renderLink = (link: ActiveLink) => {
    const packetPulse = shouldReduceMotion
      ? 0
      : 0.5 +
        0.5 *
          Math.sin(
            time * (1.9 + link.energySpeed * 0.7) +
              link.closeness * 2.2 +
              link.energySpeed * 11,
          );
    const packetRadius =
      (1.38 + link.closeness * 0.76) *
      link.packetScale *
      (1 + packetPulse * 0.18);
    const packetOpacity =
      link.energyOpacity * (0.72 + packetPulse * 0.12);
    const packetGlowRadius = packetRadius * (3 + packetPulse * 0.35);
    const electricalDash = `${formatNumber(4.2 + link.closeness * 2.1)} ${formatNumber(8.8 - link.closeness * 2.2)}`;
    const ionDash = `${formatNumber(1.6 + link.closeness * 0.8)} ${formatNumber(10.8 - link.closeness * 1.6)}`;

    return (
      <g key={link.id}>
        <path
          d={link.d}
          opacity={formatNumber(link.baseOpacity)}
          stroke={link.energyStroke}
          strokeWidth={formatNumber(link.baseWidth)}
          strokeLinecap="round"
        />
        <path
          d={link.d}
          opacity={formatNumber(link.energyOpacity)}
          stroke={link.energyStroke}
          strokeLinecap="round"
          strokeWidth={formatNumber(link.energyWidth)}
        />
        <path
          d={link.d}
          opacity={formatNumber(link.energyOpacity * 0.16)}
          stroke={link.energyStroke}
          strokeLinecap="round"
          strokeWidth={formatNumber(link.energyWidth * 1.35)}
        />
        <path
          d={link.d}
          opacity={formatNumber(link.energyOpacity * 0.26)}
          stroke="rgba(255,247,238,0.92)"
          strokeLinecap="round"
          strokeDasharray={electricalDash}
          strokeDashoffset={formatNumber(link.energyOffset * 1.45)}
          strokeWidth={formatNumber(link.energyWidth * 0.38)}
        />
        <path
          d={link.d}
          opacity={formatNumber(link.energyOpacity * 0.18)}
          stroke="rgba(255,255,255,0.78)"
          strokeLinecap="round"
          strokeDasharray={ionDash}
          strokeDashoffset={formatNumber(link.energyOffset * 2.15)}
          strokeWidth={formatNumber(link.energyWidth * 0.18)}
        />
        <circle
          cx={formatNumber(link.packetForward.x)}
          cy={formatNumber(link.packetForward.y)}
          fill={link.packetGlow}
          opacity={formatNumber(packetOpacity * 0.26)}
          r={formatNumber(packetGlowRadius)}
        />
        <circle
          cx={formatNumber(link.packetForward.x)}
          cy={formatNumber(link.packetForward.y)}
          fill={link.packetFill}
          opacity={formatNumber(packetOpacity)}
          r={formatNumber(packetRadius)}
        />
      </g>
    );
  };
  const renderOrbitalShell = (
    lane: OrbitalLane,
    index: number,
    side: "front" | "back",
  ) => {
    const laneTilt = (lane.tilt * Math.PI) / 180;
    const laneRadiusX = lane.radius;
    const laneRadiusY =
      lane.radius * Math.cos(laneTilt) * ORBITAL_Y_PROJECTION_SCALE;
    const mainPath = ellipseHalfPath(
      controlNode.xPos,
      controlNode.yPos,
      laneRadiusX,
      laneRadiusY,
      side,
    );
    const outerEdgePath = ellipseHalfPath(
      controlNode.xPos,
      controlNode.yPos,
      laneRadiusX + lane.band * 0.48,
      laneRadiusY + lane.band * 0.42 * ORBITAL_Y_PROJECTION_SCALE,
      side,
    );
    const innerEdgePath = ellipseHalfPath(
      controlNode.xPos,
      controlNode.yPos,
      laneRadiusX - lane.band * 0.34,
      laneRadiusY - lane.band * 0.28 * ORBITAL_Y_PROJECTION_SCALE,
      side,
    );
    const ringVisibilityWeight =
      index === 0 ? 1 : index < ORBITAL_LANES.length ? 0.9 : 0.78;
    const shellOpacity =
      (side === "front" ? lane.opacity * 0.82 : lane.opacity * 0.48) *
      ringVisibilityWeight;
    const textureOpacity =
      (side === "front" ? 0.09 : 0.045) * ringVisibilityWeight;
    const textureOffset =
      orbitalTextureOffset * (0.9 + index * 0.35) * (side === "front" ? 1 : -0.6);

    return (
      <g
        key={`orbital-shell-${lane.rotation}-${side}`}
        transform={`rotate(${formatNumber(lane.rotation)} ${formatNumber(controlNode.xPos)} ${formatNumber(controlNode.yPos)})`}
      >
        <path
          d={mainPath}
          fill="none"
          opacity={formatNumber(shellOpacity)}
          stroke={lane.shellStroke}
          strokeLinecap="round"
          strokeWidth={formatNumber(lane.shellWidth)}
        />
        <path
          d={outerEdgePath}
          fill="none"
          opacity={formatNumber(shellOpacity * 0.62)}
          stroke={lane.edgeStroke}
          strokeLinecap="round"
          strokeWidth={formatNumber(Math.max(1.1, lane.shellWidth * 0.34))}
        />
        <path
          d={innerEdgePath}
          fill="none"
          opacity={formatNumber(shellOpacity * 0.42)}
          stroke="rgba(10,10,14,0.32)"
          strokeLinecap="round"
          strokeWidth={formatNumber(Math.max(1, lane.shellWidth * 0.22))}
        />
        <path
          d={mainPath}
          fill="none"
          opacity={formatNumber(textureOpacity)}
          stroke={lane.textureStroke}
          strokeDasharray={lane.dash}
          strokeDashoffset={formatNumber(textureOffset)}
          strokeLinecap="round"
          strokeWidth={formatNumber(lane.textureWidth)}
        />
        <path
          d={outerEdgePath}
          fill="none"
          opacity={formatNumber(textureOpacity * 0.72)}
          stroke={lane.textureStroke}
          strokeDasharray={lane.textureDash}
          strokeDashoffset={formatNumber(textureOffset * 1.7)}
          strokeLinecap="round"
          strokeWidth="1"
        />
      </g>
    );
  };
  const renderNode = (node: PositionedNode) => {
    const tone = toneStyles(node.tone);
    const glowRadius = node.renderedRadius * (3.5 + node.pulse * 1.15) * (node.layer === "back" ? 0.9 : 1.08);
    const ringRadius = node.renderedRadius * (1.72 + node.pulse * 0.48);

    return (
      <g key={node.id}>
        <circle
          cx={formatNumber(node.xPos)}
          cy={formatNumber(node.yPos)}
          fill={tone.glow}
          opacity={formatNumber((0.22 + node.pulse * 0.18) * node.depthOpacity)}
          r={formatNumber(glowRadius)}
        />
        <circle
          cx={formatNumber(node.xPos)}
          cy={formatNumber(node.yPos)}
          fill="none"
          opacity={formatNumber((0.2 + node.pulse * 0.14) * node.depthOpacity)}
          r={formatNumber(ringRadius)}
          stroke={tone.ring}
          strokeWidth="1"
        />
        <circle
          cx={formatNumber(node.xPos)}
          cy={formatNumber(node.yPos)}
          fill={tone.fill}
          opacity={formatNumber((0.58 + node.pulse * 0.18) * node.depthOpacity)}
          r={formatNumber(node.renderedRadius + node.pulse * 0.42)}
        />
        <circle
          cx={formatNumber(node.xPos)}
          cy={formatNumber(node.yPos)}
          fill="rgba(255,250,244,0.76)"
          opacity={formatNumber((0.34 + node.pulse * 0.16) * node.depthOpacity)}
          r={formatNumber(Math.max(1.35, node.renderedRadius * 0.32))}
        />
      </g>
    );
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(240,168,94,0.01)_0%,rgba(240,168,94,0)_20%),radial-gradient(circle_at_83%_50%,rgba(155,89,182,0.012)_0%,rgba(155,89,182,0)_24%),linear-gradient(90deg,rgba(0,0,1,0.93)_0%,rgba(2,2,4,0.82)_30%,rgba(4,4,7,0.84)_58%,rgba(6,6,10,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_44%,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.36)_34%,rgba(0,0,0,0.56)_68%,rgba(0,0,0,0.72)_100%),linear-gradient(180deg,rgba(1,1,2,0.26)_0%,rgba(1,1,2,0.1)_34%,rgba(1,1,2,0.42)_100%)]" />

      {ambientGlows.map((glow) => {
        const animatedTime = shouldReduceMotion ? 0 : time * glow.speed;
        const translateX = Math.sin(animatedTime + glow.phase) * glow.xAmplitude;
        const translateY = Math.cos(animatedTime * 1.14 + glow.phase) * glow.yAmplitude;
        const scale = 1 + Math.sin(animatedTime * 0.72 + glow.phase) * glow.scaleAmplitude;
        const opacity =
          glow.opacityBase +
          Math.sin(animatedTime * 0.9 + glow.phase) * glow.opacityAmplitude;

        return (
          <div
            key={glow.className}
            className={glow.className}
            style={{
              opacity: formatNumber(opacity),
              transform: `translate3d(${formatNumber(translateX)}px, ${formatNumber(translateY)}px, 0) scale(${formatNumber(scale)})`,
            }}
          />
        );
      })}

      <div
        className="absolute inset-y-0 right-0 w-[48%] bg-[linear-gradient(rgba(249,241,230,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(249,241,230,0.01)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,transparent,black_14%,black_86%,transparent)]"
        style={{
          opacity: formatNumber(gridOpacity),
          transform: `translate3d(${formatNumber(gridShift)}px, 0, 0)`,
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.98]"
        fill="none"
        viewBox="0 0 1680 960"
      >
        <defs>
          {activeLinks.map((link) => (
            <linearGradient
              key={link.energyGradientId}
              id={link.energyGradientId}
              gradientUnits="userSpaceOnUse"
              x1={formatNumber(link.energyGradientX1)}
              x2={formatNumber(link.energyGradientX2)}
              y1={formatNumber(link.energyGradientY1)}
              y2={formatNumber(link.energyGradientY2)}
            >
              <stop offset="0%" stopColor={link.energyGradientBaseStart} />
              <stop
                offset={`${formatNumber(link.energyGradientStart * 100)}%`}
                stopColor={link.energyGradientBaseStart}
              />
              <stop
                offset={`${formatNumber(link.energyGradientPeakStart * 100)}%`}
                stopColor={link.energyGradientLead}
              />
              <stop
                offset={`${formatNumber(((link.energyGradientPeakStart + link.energyGradientPeakEnd) / 2) * 100)}%`}
                stopColor={link.energyGradientPeak}
              />
              <stop
                offset={`${formatNumber(link.energyGradientPeakEnd * 100)}%`}
                stopColor={link.energyGradientTrail}
              />
              <stop
                offset={`${formatNumber(link.energyGradientEnd * 100)}%`}
                stopColor={link.energyGradientBaseEnd}
              />
              <stop offset="100%" stopColor={link.energyGradientBaseEnd} />
            </linearGradient>
          ))}
          <radialGradient
            id="heroFieldWarm"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - 42)} ${formatNumber(controlNode.yPos - 86)}) rotate(90) scale(328 328)`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(240,168,94,0.038)" />
            <stop offset="54%" stopColor="rgba(232,101,90,0.014)" />
            <stop offset="100%" stopColor="rgba(232,101,90,0)" />
          </radialGradient>
          <radialGradient
            id="heroFieldViolet"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + 88)} ${formatNumber(controlNode.yPos + 56)}) rotate(90) scale(296 296)`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(155,89,182,0.038)" />
            <stop offset="58%" stopColor="rgba(155,89,182,0.014)" />
            <stop offset="100%" stopColor="rgba(155,89,182,0)" />
          </radialGradient>
          <radialGradient
            id="heroDepthWell"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + 18)} ${formatNumber(controlNode.yPos - 6)}) rotate(90) scale(370 318)`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(0,0,0,0.12)" />
            <stop offset="54%" stopColor="rgba(0,0,0,0.28)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereOuter"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.31)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.38)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1.58)} ${formatNumber(controlNode.coreRadius * 1.58)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(54,45,68,0.86)" />
            <stop offset="18%" stopColor="rgba(28,24,36,0.96)" />
            <stop offset="56%" stopColor="rgba(9,10,16,0.98)" />
            <stop offset="100%" stopColor="rgba(2,3,7,1)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereInner"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.17)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.24)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1.28)} ${formatNumber(controlNode.coreRadius * 1.28)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(82,64,96,0.18)" />
            <stop offset="28%" stopColor="rgba(18,17,25,0.18)" />
            <stop offset="62%" stopColor="rgba(6,7,12,0.24)" />
            <stop offset="100%" stopColor="rgba(2,3,7,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereChromaticTop"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.34)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.41)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 0.79)} ${formatNumber(controlNode.coreRadius * 0.76)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(250,226,112,0.28)" />
            <stop offset="34%" stopColor="rgba(233,106,220,0.22)" />
            <stop offset="72%" stopColor="rgba(233,106,220,0.06)" />
            <stop offset="100%" stopColor="rgba(233,106,220,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereChromaticLeft"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.31)} ${formatNumber(controlNode.yPos + controlNode.coreRadius * 0.38)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1)} ${formatNumber(controlNode.coreRadius * 0.9)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(64,184,255,0.24)" />
            <stop offset="44%" stopColor="rgba(28,132,255,0.16)" />
            <stop offset="78%" stopColor="rgba(28,132,255,0.04)" />
            <stop offset="100%" stopColor="rgba(28,132,255,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereChromaticRight"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + controlNode.coreRadius * 0.41)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.03)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 0.93)} ${formatNumber(controlNode.coreRadius * 1)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(214,48,255,0.24)" />
            <stop offset="42%" stopColor="rgba(137,68,255,0.18)" />
            <stop offset="76%" stopColor="rgba(137,68,255,0.05)" />
            <stop offset="100%" stopColor="rgba(137,68,255,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereEventHorizon"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + controlNode.coreRadius * 0.14)} ${formatNumber(controlNode.yPos + controlNode.coreRadius * 0.48)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1.31)} ${formatNumber(controlNode.coreRadius * 0.83)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(255,158,74,0.14)" />
            <stop offset="28%" stopColor="rgba(255,110,74,0.12)" />
            <stop offset="68%" stopColor="rgba(255,110,74,0.04)" />
            <stop offset="100%" stopColor="rgba(255,110,74,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereCoreDark"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + controlNode.coreRadius * 0.17)} ${formatNumber(controlNode.yPos + controlNode.coreRadius * 0.17)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1.14)} ${formatNumber(controlNode.coreRadius * 1.07)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(0,0,0,0.38)" />
            <stop offset="58%" stopColor="rgba(0,0,0,0.2)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereShadow"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos + controlNode.coreRadius * 0.31)} ${formatNumber(controlNode.yPos + controlNode.coreRadius * 0.34)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 1.24)} ${formatNumber(controlNode.coreRadius * 1.17)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(0,0,0,0.52)" />
            <stop offset="58%" stopColor="rgba(0,0,0,0.24)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient
            id="heroControlSphereHighlight"
            cx="0"
            cy="0"
            gradientTransform={`translate(${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.31)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.34)}) rotate(90) scale(${formatNumber(controlNode.coreRadius * 0.66)} ${formatNumber(controlNode.coreRadius * 0.62)})`}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="rgba(255,223,118,0.14)" />
            <stop offset="44%" stopColor="rgba(224,96,202,0.1)" />
            <stop offset="100%" stopColor="rgba(224,96,202,0)" />
          </radialGradient>
          <clipPath id="heroControlLogoClip">
            <circle
              cx={formatNumber(controlNode.xPos)}
              cy={formatNumber(controlNode.yPos)}
              r={formatNumber(controlNode.logoRadius)}
            />
          </clipPath>
        </defs>

        <rect fill="url(#heroFieldWarm)" height="960" width="1680" />
        <rect fill="url(#heroFieldViolet)" height="960" width="1680" />
        <rect fill="url(#heroDepthWell)" height="960" width="1680" />

        {shellRings.map((lane, index) => renderOrbitalShell(lane, index, "back"))}

        {backLinks.map(renderLink)}
        {backNodes.map(renderNode)}

        <g>
          <g
            transform={`rotate(${formatNumber(controlNode.rotation * 0.74)} ${formatNumber(controlNode.xPos)} ${formatNumber(controlNode.yPos)})`}
          >
            <path
              d={ellipseHalfPath(controlNode.xPos, controlNode.yPos, outerOrbitRx, outerOrbitRy, "back")}
              fill="none"
              opacity={formatNumber(0.2 + controlNode.pulse * 0.08)}
              stroke="rgba(93,70,106,0.18)"
              strokeDasharray="20 22"
              strokeWidth="1.2"
            />
            <path
              d={ellipseHalfPath(controlNode.xPos, controlNode.yPos, innerOrbitRx, innerOrbitRy, "back")}
              fill="none"
              opacity={formatNumber(0.18 + controlNode.pulse * 0.06)}
              stroke="rgba(144,92,72,0.16)"
              strokeDasharray="6 14"
              strokeWidth="1.1"
            />
          </g>
          <ellipse
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos + controlNode.coreRadius * 1.06)}
            fill="rgba(0,0,0,0.28)"
            opacity={formatNumber(0.4 + controlNode.pulse * 0.04)}
            rx={formatNumber(controlNode.coreRadius * 1.22)}
            ry={formatNumber(controlNode.coreRadius * 0.36)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="rgba(240,168,94,0.08)"
            opacity={formatNumber(0.18 + controlNode.pulse * 0.08)}
            r={formatNumber(controlNode.haloRadius)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="rgba(155,89,182,0.08)"
            opacity={formatNumber(0.12 + controlNode.pulse * 0.06)}
            r={formatNumber(controlNode.haloRadius * 0.74)}
          />
          <g
            transform={`rotate(${formatNumber(controlNode.rotation)} ${formatNumber(controlNode.xPos)} ${formatNumber(controlNode.yPos)})`}
          >
            <path
              d={ellipseHalfPath(controlNode.xPos, controlNode.yPos, outerOrbitRx, outerOrbitRy, "front")}
              fill="none"
              opacity={formatNumber(0.4 + controlNode.pulse * 0.18)}
              stroke="rgba(112,84,126,0.24)"
              strokeDasharray="18 18"
              strokeWidth="1.4"
            />
            <path
              d={ellipseHalfPath(controlNode.xPos, controlNode.yPos, innerOrbitRx, innerOrbitRy, "front")}
              fill="none"
              opacity={formatNumber(0.34 + controlNode.pulse * 0.12)}
              stroke="rgba(173,101,70,0.24)"
              strokeDasharray="4 12"
              strokeWidth="1.2"
            />
          </g>
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereOuter)"
            r={formatNumber(controlNode.coreRadius + 2)}
            stroke="rgba(74,52,86,0.34)"
            strokeWidth="1.3"
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereChromaticTop)"
            opacity={formatNumber(0.82 + controlNode.pulse * 0.04)}
            r={formatNumber(controlNode.coreRadius + 1)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereChromaticLeft)"
            opacity={formatNumber(0.88 + controlNode.pulse * 0.04)}
            r={formatNumber(controlNode.coreRadius + 1)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereChromaticRight)"
            opacity={formatNumber(0.86 + controlNode.pulse * 0.04)}
            r={formatNumber(controlNode.coreRadius + 1)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereEventHorizon)"
            opacity={formatNumber(0.78 + controlNode.pulse * 0.04)}
            r={formatNumber(controlNode.coreRadius + 1)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereInner)"
            r={formatNumber(controlNode.coreRadius - 4)}
            stroke="rgba(118,74,84,0.22)"
            strokeWidth="1.1"
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereCoreDark)"
            r={formatNumber(controlNode.coreRadius - 4)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="url(#heroControlSphereShadow)"
            r={formatNumber(controlNode.coreRadius - 6)}
          />
          <ellipse
            cx={formatNumber(controlNode.xPos + controlNode.coreRadius * 0.16)}
            cy={formatNumber(controlNode.yPos + controlNode.coreRadius * 0.42)}
            fill="rgba(0,0,0,0.3)"
            opacity={formatNumber(0.46 + controlNode.pulse * 0.05)}
            rx={formatNumber(controlNode.coreRadius * 0.54)}
            ry={formatNumber(controlNode.coreRadius * 0.28)}
          />
          <circle
            cx={formatNumber(controlNode.xPos - controlNode.coreRadius * 0.28)}
            cy={formatNumber(controlNode.yPos - controlNode.coreRadius * 0.34)}
            fill="url(#heroControlSphereHighlight)"
            opacity={formatNumber(0.56 + controlNode.pulse * 0.06)}
            r={formatNumber(controlNode.coreRadius * 0.24)}
          />
          <ellipse
            cx={formatNumber(controlNode.xPos + controlNode.coreRadius * 0.2)}
            cy={formatNumber(controlNode.yPos + controlNode.coreRadius * 0.1)}
            fill="rgba(3,4,8,0.34)"
            opacity={formatNumber(0.56 + controlNode.pulse * 0.04)}
            rx={formatNumber(controlNode.coreRadius * 0.56)}
            ry={formatNumber(controlNode.coreRadius * 0.42)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="none"
            opacity={formatNumber(0.24 + controlNode.pulse * 0.08)}
            r={formatNumber(controlNode.coreRadius + 0.8)}
            stroke="rgba(98,72,110,0.26)"
            strokeWidth="0.9"
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="rgba(2,3,7,0.42)"
            opacity={formatNumber(0.8 + controlNode.pulse * 0.04)}
            r={formatNumber(controlNode.logoRadius + 1.5)}
          />
          <image
            clipPath="url(#heroControlLogoClip)"
            height={formatNumber(controlNode.logoRadius * 1.86)}
            href="/images/consultry-logo.png"
            opacity={formatNumber(0.8 + controlNode.pulse * 0.08)}
            preserveAspectRatio="xMidYMid meet"
            width={formatNumber(controlNode.logoRadius * 1.86)}
            x={formatNumber(controlNode.xPos - controlNode.logoRadius * 0.93)}
            y={formatNumber(controlNode.yPos - controlNode.logoRadius * 0.93)}
          />
          <circle
            cx={formatNumber(controlNode.xPos)}
            cy={formatNumber(controlNode.yPos)}
            fill="none"
            opacity={formatNumber(0.3 + controlNode.pulse * 0.12)}
            r={formatNumber(controlNode.logoRadius + 5)}
            stroke="rgba(98,76,108,0.28)"
            strokeWidth="0.9"
          />
          <path
            d={`M ${formatNumber(controlNode.xPos - controlNode.coreRadius * 0.72)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.08)} Q ${formatNumber(controlNode.xPos)} ${formatNumber(controlNode.yPos + controlNode.coreRadius * 0.22)} ${formatNumber(controlNode.xPos + controlNode.coreRadius * 0.72)} ${formatNumber(controlNode.yPos - controlNode.coreRadius * 0.08)}`}
            fill="none"
            opacity={formatNumber(0.18 + controlNode.pulse * 0.08)}
            stroke="rgba(122,84,108,0.22)"
            strokeWidth="1"
          />
        </g>

        {shellRings.map((lane, index) => renderOrbitalShell(lane, index, "front"))}
        {frontLinks.map(renderLink)}
        {frontNodes.map(renderNode)}

        <g opacity="0.18">
          <path d="M1280 0L1280 960" stroke="rgba(248,239,226,0.12)" strokeWidth="1" />
          <path d="M1446 0L1446 960" stroke="rgba(248,239,226,0.09)" strokeWidth="1" />
          <path d="M1608 0L1608 960" stroke="rgba(248,239,226,0.08)" strokeWidth="1" />
        </g>
      </svg>

      {sparkSpecs.map((spark) => {
        const animatedTime = shouldReduceMotion ? 0 : time / spark.duration;
        const frame = animatedTime + spark.delay;
        const x = Math.sin(frame * Math.PI * 2) * spark.driftX[1];
        const y = Math.cos(frame * Math.PI * 2 * 0.84) * Math.abs(spark.driftY[1]);
        const opacity =
          spark.opacity[0] +
          ((Math.sin(frame * Math.PI * 2) + 1) / 2) * (spark.opacity[1] - spark.opacity[0]);

        return (
          <span
            key={`${spark.left}-${spark.top}`}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
              background: spark.color,
              filter: `blur(${spark.blur}px)`,
              opacity: formatNumber(opacity),
              transform: `translate3d(${formatNumber(x)}px, ${formatNumber(y)}px, 0) scale(${formatNumber(0.9 + ((Math.sin(frame * Math.PI * 2 * 1.2) + 1) / 2) * 0.35)})`,
              boxShadow: `0 0 ${spark.size * 2.4}px ${spark.color}`,
            }}
          />
        );
      })}
    </div>
  );
}
