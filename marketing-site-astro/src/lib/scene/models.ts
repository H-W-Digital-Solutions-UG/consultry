import {
  Color, CylinderGeometry, DataTexture, DirectionalLight, ExtrudeGeometry, Group, HemisphereLight,
  LatheGeometry, LinearFilter, Mesh, MeshPhysicalMaterial, MeshStandardMaterial, PointLight,
  Path, RepeatWrapping, RGBAFormat, Scene, Shape, ShapeGeometry, SphereGeometry, SRGBColorSpace, TorusGeometry, Vector2, Vector3,
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
    span = 5.65;
    root.rotation.set(.015, -.43, 0);
    root.position.set(-.02, .02, 0);
    const shape = new Shape();
    shape.absarc(0, 0, 1.72, 0, Math.PI * 2, false);
    // A true keyhole cut-out, including the tapered stem, through every layer.
    const keyhole = new Path();
    keyhole.absarc(0, .43, .54, Math.PI + 1.13, -1.13, true);
    keyhole.lineTo(.38, -1.28);
    keyhole.quadraticCurveTo(0, -1.40, -.38, -1.28);
    keyhole.closePath();
    shape.holes.push(keyhole);
    const plate = geometry(new ExtrudeGeometry(shape, {
      depth: .18, bevelEnabled: true, bevelSegments: 4,
      steps: 1, bevelSize: .055, bevelThickness: .055, curveSegments: 32,
    }));
    plate.translate(0, 0, -.09);
    // ExtrudeGeometry duplicates triangle vertices. Reconcile their normals
    // across the rounded bevels while retaining the keyhole's intentional edges.
    toCreasedNormals(plate, Math.PI / 3);
    const shell = clay();
    for (const map of [shell.map, shell.bumpMap]) {
      if (map) map.magFilter = map.minFilter = LinearFilter;
    }
    const inner = material(new MeshStandardMaterial({
      color: 0xad622c, metalness: .10, roughness: .42,
      emissive: 0xe9972c, emissiveIntensity: .40, envMapIntensity: .8,
    }));
    // Extrusion walls share one geometry. Only the cut-out receives the warm
    // interior material; the broad ceramic face and outside edge stay matte.
    const positions = plate.getAttribute("position");
    const uvs = plate.getAttribute("uv");
    const oldGroups = plate.groups.map((group) => ({ ...group }));
    plate.clearGroups();
    for (const group of oldGroups) {
      let runStart = group.start;
      let previous = -1;
      for (let offset = group.start; offset < group.start + group.count; offset += 3) {
        let radius = 0;
        for (let vertex = 0; vertex < 3; vertex++) {
          const i = offset + vertex;
          const x = positions.getX(i), y = positions.getY(i);
          radius += Math.hypot(x, y);
          // Default extrusion UVs are raw signed coordinates; clamping them
          // creates horizontal and vertical bands across the broad clay face.
          if (group.materialIndex === 0) uvs.setXY(i, .5 + x / 3.55, .5 + y / 3.55);
          else uvs.setXY(i, .5 + Math.atan2(y, x) / (Math.PI * 2), .5 + positions.getZ(i) / .29);
        }
        const index = group.materialIndex === 1 && radius / 3 < 1.60 ? 1 : 0;
        if (previous !== -1 && index !== previous) {
          plate.addGroup(runStart, offset - runStart, previous);
          runStart = offset;
        }
        previous = index;
      }
      plate.addGroup(runStart, group.start + group.count - runStart, previous);
    }
    const layers = Array.from({ length: 3 }, (_, index) => {
      const group = new Group();
      group.add(new Mesh(plate, [shell, inner]));
      const home = new Vector3(0, 0, (index - 1) * .285);
      const start = home.clone().add(new Vector3(-(index - 1) * .28, index === 1 ? -.06 : .03, (index - 1) * .92));
      root.add(group);
      return { group, home, start };
    });
    // The warm source sits behind the opening, so its shape is always part of
    // the object rather than a screen-space flare or extra compositing pass.
    const aperture = geometry(new ShapeGeometry(new Shape(keyhole.getPoints(32)), 32));
    const lightSurface = material(new MeshStandardMaterial({
      color: 0xffce74, emissive: 0xffb343, emissiveIntensity: 2.0, roughness: 1,
    }));
    const glow = new Mesh(aperture, lightSurface);
    glow.position.z = -.155;
    layers[0].group.add(glow);
    anchors = [layers[2].group, layers[1].group, layers[0].group];
    update = (progress) => {
      const t = assembled(progress);
      for (const layer of layers) layer.group.position.copy(layer.start).lerp(layer.home, t);
      lightSurface.emissiveIntensity = 2.0 + (1 - t) * .3;
    };
  } else if (variant === "corpus") {
    root.rotation.set(.31, -.75, 0);
    root.position.set(.05, .05, 0);
    const pieces: Array<{ mesh: Mesh; home: Vector3; start: Vector3 }> = [];
    for (let index = 0; index < 4; index++) {
      const width = 2.46 - index * .19;
      const depth = 2.38 - index * .39;
      const surface = clay();
      surface.emissive.set(0xffa335);
      surface.emissiveIntensity = index === 3 ? .85 : .24;
      surface.onBeforeCompile = (shader) => {
        // These dimensions vary per material, not per shader. Keeping them in a
        // uniform lets all four steps reuse one compiled program without
        // changing their geometry or the reference-pose lighting.
        shader.uniforms.treadHalfSize = { value: new Vector2(width / 2, depth / 2) };
        shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vTreadPosition;\nvarying vec3 vTreadNormal;")
          .replace("#include <begin_vertex>", "#include <begin_vertex>\nvTreadPosition = position;\nvTreadNormal = normal;");
        shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nuniform vec2 treadHalfSize;\nvarying vec3 vTreadPosition;\nvarying vec3 vTreadNormal;")
          .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\nvec2 tread = vTreadPosition.xz / treadHalfSize;\ntotalEmissiveRadiance *= exp(-dot(tread,tread) * 1.6) * smoothstep(0.6, 0.95, vTreadNormal.y);");
      };
      surface.customProgramCacheKey = () => "corpus-tread-uniform";
      const mesh = new Mesh(geometry(new RoundedBoxGeometry(width, .80, depth, 5, .095)), surface);
      const home = new Vector3(index * .09, -1.50 + index * .805, .28 - index * .40);
      const start = home.clone().add(new Vector3((index - 1.5) * .25, (index - 1.5) * .50, -(index - 1.5) * .32));
      root.add(mesh);
      pieces.push({ mesh, home, start });
    }
    anchors = [pieces[0].mesh, pieces[1].mesh, pieces[3].mesh];
    const warm = new PointLight(0xffaf50, 1.8, 6, 2);
    warm.position.set(.15, 2.5, 1.8);
    root.add(warm);
    update = (progress) => {
      const t = assembled(progress);
      for (const piece of pieces) piece.mesh.position.copy(piece.start).lerp(piece.home, t);
      warm.intensity = .8 + t * 1.0;
    };
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
    span = 7.3;
    const block = geometry(new RoundedBoxGeometry(.96, .98, .96, 6, .17));
    const tube = geometry(new CylinderGeometry(.115, .115, 1, 24));
    const collar = geometry(new TorusGeometry(.130, .025, 8, 32));
    const shell = clay();
    const amber = material(new MeshPhysicalMaterial({ color: 0xd39a38, metalness: 0, roughness: .14, transmission: .28, thickness: .23, ior: 1.46, clearcoat: .5, clearcoatRoughness: .12, envMapIntensity: 1.6 }));
    const gold = material(new MeshStandardMaterial({ color: 0xdf9d44, metalness: .7, roughness: .24, envMapIntensity: 1.2 }));
    const glowPixels = new Uint8Array(64 * 64 * 4);
    for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) {
      const index = (y * 64 + x) * 4;
      const radius = Math.hypot((x - 31.5) / 32, (y - 31.5) / 32);
      const value = Math.round(Math.exp(-radius * radius * 3.2) * 255);
      glowPixels[index] = glowPixels[index + 1] = glowPixels[index + 2] = value;
      glowPixels[index + 3] = 255;
    }
    const glow = texture(new DataTexture(glowPixels, 64, 64, RGBAFormat));
    glow.needsUpdate = true;
    const terminalSurface = clay();
    terminalSurface.emissive.set(0xffa32c);
    terminalSurface.emissiveMap = glow;
    terminalSurface.emissiveIntensity = 1.5;
    terminalSurface.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vLedgerNormal;")
        .replace("#include <beginnormal_vertex>", "#include <beginnormal_vertex>\nvLedgerNormal = normal;");
      shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vLedgerNormal;")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance *= 0.05 + 0.95 * pow(max(vLedgerNormal.z, 0.0), 4.0);");
    };
    terminalSurface.customProgramCacheKey = () => "ledger-terminal-face";
    // Centres traced from the PNG; cubes keep their own upright pose along the curve.
    const centres = [[.134, .361], [.281, .423], [.418, .506], [.572, .579], [.735, .633], [.891, .657]];
    const pieces = centres.map(([x, y], index) => {
      const mesh = new Mesh(block, index === 5 ? terminalSurface : shell);
      mesh.rotation.set(.29, -.46 + index * .012, .025);
      const home = new Vector3((x - .5) * span, (.5 - y) * span, 0);
      const xOffset = index === 0 ? .14 : index === 5 ? -.14 : (index - 2.5) * .035;
      const start = home.clone().add(new Vector3(xOffset, index % 2 === 0 ? .72 : -.72, (index % 3 - 1) * .90));
      root.add(mesh);
      return { mesh, home, start };
    });
    anchors = [pieces[0].mesh, pieces[3].mesh, pieces[4].mesh];
    const links = pieces.slice(1).map(() => {
      const cylinder = new Mesh(tube, amber);
      const startRing = new Mesh(collar, gold);
      const endRing = new Mesh(collar, gold);
      root.add(cylinder, startRing, endRing);
      return { cylinder, startRing, endRing };
    });
    const direction = new Vector3();
    const start = new Vector3();
    const end = new Vector3();
    const yAxis = new Vector3(0, 1, 0);
    const zAxis = new Vector3(0, 0, 1);
    const terminalLightOffset = new Vector3(-.1, .08, .72);
    const terminalLight = new PointLight(0xffaa42, 1.2, 2.3, 2);
    root.add(terminalLight);
    update = (progress) => {
      const t = assembled(progress);
      for (const piece of pieces) piece.mesh.position.copy(piece.start).lerp(piece.home, t);
      links.forEach((link, index) => {
        start.copy(pieces[index].mesh.position);
        end.copy(pieces[index + 1].mesh.position);
        direction.copy(end).sub(start).normalize();
        start.addScaledVector(direction, .44);
        end.addScaledVector(direction, -.44);
        start.z += .22;
        end.z += .22;
        const length = start.distanceTo(end);
        direction.copy(end).sub(start).normalize();
        link.cylinder.position.copy(start).lerp(end, .5);
        link.cylinder.quaternion.setFromUnitVectors(yAxis, direction);
        link.cylinder.scale.y = length;
        link.startRing.position.copy(start);
        link.endRing.position.copy(end);
        link.startRing.quaternion.setFromUnitVectors(zAxis, direction);
        link.endRing.quaternion.setFromUnitVectors(zAxis, direction);
      });
      terminalLight.position.copy(pieces[5].mesh.position).add(terminalLightOffset);
      terminalLight.intensity = .35 + t * .95;
      terminalSurface.emissiveIntensity = .45 + t * 1.05;
    };
  }
  update(0);
  let previousExpansion = 0;
  return {
    span,
    anchors,
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
