import {
  Color, CylinderGeometry, DataTexture, DirectionalLight, ExtrudeGeometry, Group, HemisphereLight,
  LatheGeometry, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, PointLight,
  RepeatWrapping, RGBAFormat, Scene, Shape, SphereGeometry, SRGBColorSpace, TorusGeometry, Vector2, Vector3,
  type BufferGeometry, type Material, type Object3D, type Texture,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { toCreasedNormals } from "three/addons/utils/BufferGeometryUtils.js";
import type { SmokeObjectVariant } from "./types";
import { sceneExpansion } from "./motion";
import { buildConsultryLogo } from "./logo-model";

// The complete reference pose at both ends makes the poster handoff coherent.
// One scroll gesture opens the components in depth, then seats them together.
const assembled = (progress: number) => 1 - sceneExpansion(progress);

/** Fixed-view, volumetric objects from the shared ceramic-and-copper family. */
export function buildSmokeModel(scene: Scene, variant: SmokeObjectVariant) {
  const root = new Group();
  scene.add(root);
  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();
  const geometry = <T extends BufferGeometry>(value: T): T => { geometries.add(value); return value; };
  const material = <T extends Material>(value: T): T => { materials.add(value); return value; };
  const texture = <T extends Texture>(value: T): T => { textures.add(value); return value; };

  let clayResources: { grain: DataTexture; tone: DataTexture } | undefined;
  const clay = () => {
    // Only clay variants need these procedural maps. The optical discs avoid
    // allocating and filling two unused textures during their initial load.
    if (!clayResources) {
      // Small shared microtexture: a matte ceramic surface, without downloaded maps.
      const grainPixels = new Uint8Array(128 * 128 * 4);
      let seed = 1427;
      for (let index = 0; index < grainPixels.length; index += 4) {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        const value = 95 + Math.round((seed / 4294967296) * 105);
        grainPixels[index] = grainPixels[index + 1] = grainPixels[index + 2] = value;
        grainPixels[index + 3] = 255;
      }
      const grain = texture(new DataTexture(grainPixels, 128, 128, RGBAFormat));
      grain.wrapS = grain.wrapT = RepeatWrapping;
      grain.repeat.set(4, 4);
      grain.needsUpdate = true;
      const clayPixels = new Uint8Array(128 * 128 * 4);
      for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
        const index = (y * 128 + x) * 4;
        const radius = Math.hypot((x / 127 - .42) / .72, (y / 127 - .60) / .85);
        const noise = (grainPixels[index] / 255 - .5) * .045;
        const value = Math.round(Math.min(1, .82 + .18 * Math.exp(-radius * radius * 2) + noise) * 255);
        clayPixels[index] = clayPixels[index + 1] = clayPixels[index + 2] = value;
        clayPixels[index + 3] = 255;
      }
      const clayTone = texture(new DataTexture(clayPixels, 128, 128, RGBAFormat));
      clayTone.colorSpace = SRGBColorSpace;
      clayTone.needsUpdate = true;
      clayResources = { grain, tone: clayTone };
    }
    return material(new MeshPhysicalMaterial({
      color: 0xc2745b, map: clayResources.tone, metalness: .015, roughness: .56,
      clearcoat: .045, clearcoatRoughness: .46,
      bumpMap: clayResources.grain, bumpScale: .011,
      envMapIntensity: .72,
    }));
  };

  const key = new DirectionalLight(0xffe4d3, .8);
  key.position.set(-3.5, 6, 8);
  const rim = new DirectionalLight(0xb8a3ff, 2.4);
  rim.position.set(5, 2, -3);
  const fill = new HemisphereLight(0xffeedf, 0x432726, .24);
  const softbox = new PointLight(0xffdcc8, 45, 24, 2);
  softbox.position.set(-3, 4.5, 5);
  scene.add(key, rim, fill, softbox);
  let span = 6.4;
  let update: (progress: number) => void;
  /** Optional time-driven motion at rest; returns true when a redraw is needed. */
  let idle: ((seconds: number) => boolean) | undefined;
  let anchors: readonly Object3D[] = [];

  if (variant === "logo") {
    span = 5.8;
    root.rotation.set(.08, -.24, -.035);
    root.position.set(-.03, .02, 0);
    const logo = buildConsultryLogo(root, geometry, material);
    anchors = logo.anchors;
    update = (progress) => logo.update(sceneExpansion(progress));
    key.position.set(-3, 5, 7);
    key.intensity = 1.1;
    softbox.intensity = 30;
    rim.intensity = 1.8;
  } else if (variant === "brain") {
    span = 6.5;
    root.position.set(-.05, .04, 0);
    const sphere = geometry(new SphereGeometry(1, 32, 20));
    const tube = geometry(new CylinderGeometry(.070, .070, 1, 16));
    const collar = geometry(new TorusGeometry(.078, .020, 6, 20));
    const shell = clay();
    const coreSurface = clay();
    coreSurface.emissive.set(0xffa332);
    coreSurface.emissiveIntensity = 1.35;
    coreSurface.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vCorePosition;\nvarying vec3 vCoreNormal;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvCorePosition = position;\nvCoreNormal = normal;");
      shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vCorePosition;\nvarying vec3 vCoreNormal;")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\nvec2 coreGlow = (vCorePosition.xy - vec2(-0.06, -0.18)) / vec2(0.53, 0.65);\ntotalEmissiveRadiance *= exp(-dot(coreGlow, coreGlow) * 2.4) * smoothstep(0.35, 0.85, vCoreNormal.z);");
    };
    coreSurface.customProgramCacheKey = () => "brain-core-glow";
    const gold = material(new MeshStandardMaterial({
      color: 0xdfa245, metalness: .72, roughness: .24, envMapIntensity: 1.25,
      emissive: 0xd58d28, emissiveIntensity: .13,
    }));
    const core = new Mesh(sphere, coreSurface);
    core.scale.setScalar(.69);
    core.position.set(0, .03, .10);
    root.add(core);
    const centres = [[-.94, 1.59, -.08], [1.78, .38, .03], [-1.43, -1.18, .10], [1.04, -1.76, -.03]];
    const pieces = centres.map(([x, y, z], index) => {
      const mesh = new Mesh(sphere, shell);
      const radius = index === 0 ? .47 : .51;
      mesh.scale.setScalar(radius);
      const home = new Vector3(x, y, z);
      const start = home.clone().multiplyScalar(1.25);
      start.z += index % 2 === 0 ? .38 : -.40;
      const cylinder = new Mesh(tube, gold);
      const startRing = new Mesh(collar, gold);
      const endRing = new Mesh(collar, gold);
      root.add(mesh, cylinder, startRing, endRing);
      return { mesh, radius, home, start, cylinder, startRing, endRing };
    });
    anchors = [pieces[0].mesh, pieces[1].mesh, pieces[3].mesh];
    const direction = new Vector3();
    const start = new Vector3();
    const end = new Vector3();
    const yAxis = new Vector3(0, 1, 0);
    const zAxis = new Vector3(0, 0, 1);
    update = (progress) => {
      const t = assembled(progress);
      for (const piece of pieces) {
        piece.mesh.position.copy(piece.start).lerp(piece.home, t);
        direction.copy(piece.mesh.position).sub(core.position).normalize();
        start.copy(core.position).addScaledVector(direction, .65);
        end.copy(piece.mesh.position).addScaledVector(direction, -piece.radius * .94);
        piece.cylinder.position.copy(start).lerp(end, .5);
        piece.cylinder.quaternion.setFromUnitVectors(yAxis, direction);
        piece.cylinder.scale.y = start.distanceTo(end);
        piece.startRing.position.copy(start);
        piece.endRing.position.copy(end);
        piece.startRing.quaternion.setFromUnitVectors(zAxis, direction);
        piece.endRing.quaternion.setFromUnitVectors(zAxis, direction);
      }
      coreSurface.emissiveIntensity = 1.35 + (1 - t) * .35;
    };
  } else if (variant === "access") {
    // Permission gate, reduced to three parts: the agent on the left, one channel through a single
    // gate ring, and the resource plate on the right. The plate carries three access rows; the
    // coral row is the action that needs approval. The channel glows softly while idle.
    span = 6.2;
    root.rotation.set(.16, -.58, 0);
    root.position.set(.05, .02, 0);
    const sphere = geometry(new SphereGeometry(1, 40, 24));
    const tube = geometry(new CylinderGeometry(.06, .06, 1, 20));
    const collar = geometry(new TorusGeometry(.076, .02, 8, 24));
    const gateRing = geometry(new TorusGeometry(.8, .075, 16, 72));
    const plateGeometry = geometry(new RoundedBoxGeometry(1.5, 2.0, .2, 6, .1));
    const slotGeometry = geometry(new RoundedBoxGeometry(.92, .17, .05, 3, .05));
    const ceramic = clay();
    ceramic.color.set(0xf2e6d6);
    const slotSurface = material(new MeshStandardMaterial({ color: 0x3a2d27, metalness: .05, roughness: .6, envMapIntensity: .5 }));
    const lockSurface = material(new MeshStandardMaterial({ color: 0xb85a48, metalness: .12, roughness: .48, envMapIntensity: .8, emissive: 0xc94b30, emissiveIntensity: .22 }));
    const gold = material(new MeshStandardMaterial({ color: 0xdfa245, metalness: .72, roughness: .24, envMapIntensity: 1.25, emissive: 0xd58d28, emissiveIntensity: .12 }));
    const pulseGold = material(new MeshStandardMaterial({ color: 0xe8b25a, metalness: .6, roughness: .22, envMapIntensity: 1.3, emissive: 0xffa332, emissiveIntensity: .4 }));
    const agentSurface = clay();
    agentSurface.emissive.set(0xff9a3c);
    agentSurface.emissiveIntensity = .18;
    const agent = new Mesh(sphere, agentSurface);
    agent.scale.setScalar(.8);
    const agentHome = new Vector3(-2.3, 0, 0);
    const agentStart = new Vector3(-3.1, 0, .5);
    const plate = new Group();
    plate.add(new Mesh(plateGeometry, ceramic));
    [.5, 0, -.5].forEach((y, index) => {
      const slot = new Mesh(slotGeometry, index === 2 ? lockSurface : slotSurface);
      slot.position.set(0, y, .11);
      plate.add(slot);
    });
    const plateHome = new Vector3(2.15, 0, 0);
    const plateStart = new Vector3(2.9, 0, -.6);
    const gate = new Mesh(gateRing, gold);
    const gateHome = new Vector3(-.15, 0, 0);
    const gateStart = new Vector3(-.15, .7, -.85);
    const inCylinder = new Mesh(tube, pulseGold);
    const outCylinder = new Mesh(tube, gold);
    const agentCollar = new Mesh(collar, gold);
    const plateCollar = new Mesh(collar, gold);
    root.add(agent, plate, gate, inCylinder, outCylinder, agentCollar, plateCollar);
    anchors = [agent, gate, plate];
    const direction = new Vector3();
    const from = new Vector3();
    const middle = new Vector3();
    const to = new Vector3();
    const yAxis = new Vector3(0, 1, 0);
    const zAxis = new Vector3(0, 0, 1);
    const xAxis = new Vector3(1, 0, 0);
    const layLink = (cylinder: Mesh, a: Vector3, b: Vector3) => {
      direction.copy(b).sub(a).normalize();
      cylinder.position.copy(a).lerp(b, .5);
      cylinder.quaternion.setFromUnitVectors(yAxis, direction);
      cylinder.scale.y = a.distanceTo(b);
    };
    let seated = 1;
    let phase = 0;
    const place = () => {
      agent.position.copy(agentStart).lerp(agentHome, seated);
      plate.position.copy(plateStart).lerp(plateHome, seated);
      gate.position.copy(gateStart).lerp(gateHome, seated);
      // One channel from the agent to the plate edge; the gate seats onto its middle.
      to.set(plate.position.x - .8, plate.position.y, plate.position.z + .02);
      direction.copy(to).sub(agent.position).normalize();
      from.copy(agent.position).addScaledVector(direction, .86);
      middle.copy(from).lerp(to, .5);
      layLink(inCylinder, from, middle);
      layLink(outCylinder, middle, to);
      agentCollar.position.copy(from);
      plateCollar.position.copy(to);
      agentCollar.quaternion.setFromUnitVectors(zAxis, direction);
      plateCollar.quaternion.setFromUnitVectors(zAxis, direction);
      gate.quaternion.setFromUnitVectors(zAxis, xAxis);
      gate.rotateY(Math.sin(phase * .6) * .1);
      pulseGold.emissiveIntensity = .35 + (Math.sin(phase * 2.1) + 1) * .45;
      agentSurface.emissiveIntensity = .12 + (1 - seated) * .3 + (Math.sin(phase * 1.3) + 1) * .06;
    };
    update = (progress) => { seated = assembled(progress); place(); };
    idle = (seconds) => { phase = seconds; place(); return true; };
  } else if (variant === "brand") {
    span = 4.8;
    root.rotation.set(.02, .91, 0);
    root.position.y = -.06;
    // Closed lathed volumes: broad flat optical faces and a rounded, thick edge.
    const profile = [
      [0, -.105], [1.235, -.105], [1.265, -.098], [1.282, -.080], [1.286, -.052],
      [1.286, .052], [1.282, .080], [1.265, .098], [1.235, .105], [0, .105],
    ].map(([radius, depth]) => new Vector2(radius, depth));
    const disc = geometry(new LatheGeometry(profile, 96));
    disc.rotateX(Math.PI / 2);
    const originalIndices = disc.getIndex()!;
    const faceIndices: number[] = [];
    const edgeIndices: number[] = [];
    for (let segment = 0; segment < 96; segment++) for (let row = 0; row < profile.length - 1; row++) {
      const destination = row === 0 || row === profile.length - 2 ? faceIndices : edgeIndices;
      const offset = (segment * (profile.length - 1) + row) * 6;
      for (let vertex = 0; vertex < 6; vertex++) destination.push(originalIndices.getX(offset + vertex));
    }
    disc.setIndex([...faceIndices, ...edgeIndices]);
    disc.clearGroups();
    disc.addGroup(0, faceIndices.length, 0);
    disc.addGroup(faceIndices.length, edgeIndices.length, 1);
    const colors = [0xc56951, 0xe9a53b, 0xb6a0ed];
    const pieces: Array<{ group: Group; home: Vector3; start: Vector3 }> = [];
    for (let index = 0; index < 3; index++) {
      const group = new Group();
      const surface = material(new MeshPhysicalMaterial({
        color: colors[index], metalness: .01, roughness: .16,
        transmission: .30, thickness: .21, ior: 1.46,
        transparent: true, opacity: .53,
        attenuationColor: new Color(colors[index]), attenuationDistance: 2.4,
        clearcoat: 1, clearcoatRoughness: .12,
        envMapIntensity: 2.3, depthWrite: false,
        emissive: colors[index], emissiveIntensity: index === 1 ? 2.2 : index === 2 ? 1.15 : .65,
      }));
      // A broad internal glow belongs to each optical solid, not a sprite over it.
      // The falloff also keeps the front face from reading as a uniform vector fill.
      surface.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vDiscPosition;\nvarying vec3 vDiscNormal;")
          .replace("#include <begin_vertex>", "#include <begin_vertex>\nvDiscPosition = position;\nvDiscNormal = normal;");
        shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vDiscPosition;\nvarying vec3 vDiscNormal;")
          .replace("#include <color_fragment>", "#include <color_fragment>\nfloat discRadius = clamp(length(vDiscPosition.xy) / 1.286, 0.0, 1.0);\ndiffuseColor.rgb *= 0.70 + 0.30 * (1.0 - discRadius);")
          .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\nvec2 glowPosition = (vDiscPosition.xy - vec2(-0.20, 0.05)) / vec2(0.90, 1.10);\ntotalEmissiveRadiance *= (0.20 + 0.80 * exp(-dot(glowPosition, glowPosition) * 2.2)) * smoothstep(0.6, 0.95, abs(vDiscNormal.z));");
      };
      surface.customProgramCacheKey = () => "optical-disc-glow";
      const edgeSurface = material(new MeshPhysicalMaterial({
        color: colors[index], metalness: .02, roughness: .15,
        transmission: .22, thickness: .24, ior: 1.46,
        clearcoat: .55, clearcoatRoughness: .12,
        envMapIntensity: 1.9,
      }));
      const body = new Mesh(disc, [surface, edgeSurface]);
      body.renderOrder = index;
      group.add(body);
      root.add(group);
      const home = new Vector3(0, 0, (index - 1) * .90);
      const start = home.clone().add(new Vector3(0, (index === 1 ? -.30 : .20), (index - 1) * .62));
      pieces.push({ group, home, start });
    }
    anchors = pieces.map((piece) => piece.group);
    key.position.set(-2, 5, 7);
    key.intensity = .7;
    softbox.position.set(-2, 4, 4);
    softbox.intensity = 25;
    update = (progress) => {
      const t = assembled(progress);
      for (const piece of pieces) piece.group.position.copy(piece.start).lerp(piece.home, t);
    };
  } else {
    // Swarm orchestration: three agent nodes orbit a shared task hub, each trailing two
    // satellite sub-tasks; every agent is tied to the hub. While idle the ring turns slowly.
    // The frame covers the fully opened swarm; nothing may leave the square canvas.
    span = 8.2;
    root.rotation.set(.12, -.20, 0);
    root.position.set(0, .02, 0);
    const sphere = geometry(new SphereGeometry(1, 40, 24));
    const tube = geometry(new CylinderGeometry(.068, .068, 1, 20));
    const thinTube = geometry(new CylinderGeometry(.036, .036, 1, 12));
    const collar = geometry(new TorusGeometry(.080, .020, 8, 24));
    const orbit = geometry(new TorusGeometry(2.08, .014, 8, 128));
    const shell = clay();
    const satelliteSurface = clay();
    satelliteSurface.color.set(0xdca88c);
    const hubSurface = clay();
    hubSurface.emissive.set(0xffa332);
    hubSurface.emissiveIntensity = 1.2;
    hubSurface.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vHubPosition;\nvarying vec3 vHubNormal;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvHubPosition = position;\nvHubNormal = normal;");
      shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vHubPosition;\nvarying vec3 vHubNormal;")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\nvec2 hubGlow = (vHubPosition.xy - vec2(-0.05, -0.15)) / vec2(0.55, 0.65);\ntotalEmissiveRadiance *= exp(-dot(hubGlow, hubGlow) * 2.4) * smoothstep(0.35, 0.85, vHubNormal.z);");
    };
    hubSurface.customProgramCacheKey = () => "swarm-hub-glow";
    const gold = material(new MeshStandardMaterial({ color: 0xdfa245, metalness: .72, roughness: .24, envMapIntensity: 1.25, emissive: 0xd58d28, emissiveIntensity: .13 }));
    const orbitSurface = material(new MeshStandardMaterial({ color: 0xc98c52, metalness: .6, roughness: .35, envMapIntensity: .8, transparent: true, opacity: .42 }));
    const hub = new Mesh(sphere, hubSurface);
    hub.scale.setScalar(.74);
    hub.position.set(0, .04, .05);
    const orbitRing = new Mesh(orbit, orbitSurface);
    orbitRing.position.copy(hub.position);
    orbitRing.position.z -= .30;
    root.add(hub, orbitRing);
    const direction = new Vector3();
    const from = new Vector3();
    const to = new Vector3();
    const yAxis = new Vector3(0, 1, 0);
    const zAxis = new Vector3(0, 0, 1);
    const layLink = (cylinder: Mesh, a: Vector3, b: Vector3, startRing?: Mesh, endRing?: Mesh) => {
      direction.copy(b).sub(a).normalize();
      cylinder.position.copy(a).lerp(b, .5);
      cylinder.quaternion.setFromUnitVectors(yAxis, direction);
      cylinder.scale.y = a.distanceTo(b);
      if (startRing && endRing) {
        startRing.position.copy(a);
        endRing.position.copy(b);
        startRing.quaternion.setFromUnitVectors(zAxis, direction);
        endRing.quaternion.setFromUnitVectors(zAxis, direction);
      }
    };
    const agents = [0, 1, 2].map((index) => {
      const mesh = new Mesh(sphere, shell);
      mesh.scale.setScalar(.50);
      const baseAngle = Math.PI / 2 + index * (Math.PI * 2 / 3);
      const cylinder = new Mesh(tube, gold);
      const startRing = new Mesh(collar, gold);
      const endRing = new Mesh(collar, gold);
      const satellites = [-.62, .62].map((offset) => {
        const satellite = new Mesh(sphere, satelliteSurface);
        satellite.scale.setScalar(.21);
        const link = new Mesh(thinTube, gold);
        root.add(satellite, link);
        return { mesh: satellite, link, offset };
      });
      root.add(mesh, cylinder, startRing, endRing);
      return { mesh, baseAngle, cylinder, startRing, endRing, satellites };
    });
    anchors = agents.map((agent) => agent.mesh);
    let seated = 1;
    let phase = 0;
    const place = () => {
      for (const agent of agents) {
        const angle = agent.baseAngle + phase * .05;
        const radius = 2.08 * (1 + (1 - seated) * .2);
        const depth = (1 - seated) * (agent.baseAngle > Math.PI ? -.5 : .45);
        agent.mesh.position.set(Math.cos(angle) * radius, .04 + Math.sin(angle) * radius, depth);
        direction.copy(agent.mesh.position).sub(hub.position).normalize();
        from.copy(hub.position).addScaledVector(direction, .70);
        to.copy(agent.mesh.position).addScaledVector(direction, -.47);
        layLink(agent.cylinder, from, to, agent.startRing, agent.endRing);
        agent.satellites.forEach((satellite) => {
          const swing = angle + satellite.offset + Math.sin(phase * .7 + satellite.offset) * .08;
          const reach = .86 * (1 + (1 - seated) * .3);
          satellite.mesh.position.set(
            agent.mesh.position.x + Math.cos(swing) * reach,
            agent.mesh.position.y + Math.sin(swing) * reach,
            agent.mesh.position.z + satellite.offset * .25,
          );
          direction.copy(satellite.mesh.position).sub(agent.mesh.position).normalize();
          from.copy(agent.mesh.position).addScaledVector(direction, .47);
          to.copy(satellite.mesh.position).addScaledVector(direction, -.20);
          layLink(satellite.link, from, to);
        });
      }
      orbitRing.rotation.z = phase * .05;
      orbitSurface.opacity = .42 * seated;
      hubSurface.emissiveIntensity = 1.2 + (1 - seated) * .35 + (Math.sin(phase * 1.1) + 1) * .08;
    };
    update = (progress) => { seated = assembled(progress); place(); };
    idle = (seconds) => { phase = seconds; place(); return true; };
  }
  update(0);
  let previousExpansion = 0;
  const baseRotation = root.rotation.clone();
  let previousYaw = 0;
  let previousPitch = 0;
  return {
    span,
    anchors,
    idle,
    /** Turn the assembled object as a whole; zero restores the exact poster pose. */
    orient(yaw: number, pitch: number) {
      if (yaw === previousYaw && pitch === previousPitch) return false;
      previousYaw = yaw;
      previousPitch = pitch;
      root.rotation.set(baseRotation.x + pitch, baseRotation.y + yaw, baseRotation.z);
      return true;
    },
    update(progress: number) {
      const expansion = sceneExpansion(progress);
      if (expansion === previousExpansion) return false;
      previousExpansion = expansion;
      update(progress);
      return true;
    },
    dispose() {
      scene.remove(root, key, rim, fill, softbox);
      geometries.forEach((value) => value.dispose());
      materials.forEach((value) => value.dispose());
      textures.forEach((value) => value.dispose());
    },
  };
}
