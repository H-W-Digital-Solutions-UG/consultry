import {
  BufferAttribute, Color, CylinderGeometry, ExtrudeGeometry, Group, Mesh,
  MeshStandardMaterial, Shape, Vector3,
  type BufferGeometry, type Material, type Object3D,
} from 'three';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * Traced from the current 385 × 379 public/images/consultry-logo.png, also
 * design/logos/consultry-weblogo-cropped.png. The older consultry-mark.svg lacks
 * the circular and triangular nodes, so it is intentionally not the source.
 * The six closed contours retain the folded ribbon, inner cut-out and detached
 * nodes; these are volumetric solids, not a C glyph or a textured image plane.
 */
export function buildConsultryLogo(
  root: Group,
  geometry: <T extends BufferGeometry>(value: T) => T,
  material: <T extends Material>(value: T) => T,
) {
  const scale = .01;
  const px = (x: number) => (x - 192.5) * scale;
  const py = (y: number) => (189.5 - y) * scale;
  const shape = () => {
    const path = new Shape();
    return {
      path,
      move(x: number, y: number) { path.moveTo(px(x), py(y)); },
      line(x: number, y: number) { path.lineTo(px(x), py(y)); },
      curve(x: number, y: number, endX: number, endY: number) {
        path.quadraticCurveTo(px(x), py(y), px(endX), py(endY));
      },
    };
  };
  const upper = shape();
  upper.move(1, 244);
  upper.line(1, 132);
  upper.curve(1, 124, 9, 116);
  upper.line(114, 11);
  upper.curve(123, 2, 134, 2);
  upper.line(232, 2);
  upper.line(1, 244);
  upper.path.closePath();

  const upperFold = shape();
  upperFold.move(232, 2);
  upperFold.line(232, 110);
  upperFold.line(130, 110);
  upperFold.path.closePath();

  const lower = shape();
  lower.move(1, 244);
  lower.line(126, 115);
  lower.curve(121, 124, 121, 140);
  lower.line(121, 231);
  lower.curve(121, 253, 143, 253);
  lower.line(232, 253);
  lower.line(232, 378);
  lower.line(133, 378);
  lower.curve(122, 378, 114, 370);
  lower.line(9, 266);
  lower.curve(1, 258, 1, 244);
  lower.path.closePath();

  const lowerFold = shape();
  lowerFold.move(129, 253);
  lowerFold.line(232, 253);
  lowerFold.line(232, 378);
  lowerFold.path.closePath();

  const tip = shape();
  tip.move(253, 255);
  tip.line(383, 255);
  tip.line(260, 375);
  tip.curve(253, 382, 253, 372);
  tip.path.closePath();

  const circle = new Shape();
  circle.absarc(px(305), py(56), .565, 0, Math.PI * 2, false);

  const surface = material(new MeshStandardMaterial({
    vertexColors: true, metalness: .22, roughness: .30, envMapIntensity: .95,
  }));
  const edge = material(new MeshStandardMaterial({
    color: 0x914e58, metalness: .18, roughness: .39, envMapIntensity: .85,
  }));
  const contours = [
    { shape: upper.path, colors: [0xdf8850, 0xffca7b], center: [101, 99], delta: [-.26, .25, .16], depth: 0 },
    { shape: upperFold.path, colors: [0xcd5c4f, 0xf28e69], center: [198, 72], delta: [.02, .21, -.23], depth: -.015 },
    { shape: lower.path, colors: [0xb9516c, 0xed7c64], center: [104, 268], delta: [-.28, -.19, -.14], depth: 0 },
    { shape: lowerFold.path, colors: [0xa869b3, 0xdfa5d5], center: [198, 294], delta: [.06, -.19, .22], depth: .009 },
    { shape: tip.path, colors: [0xbb80b0, 0xf1c0bd], center: [296, 296], delta: [.54, -.27, .46], depth: .025 },
    { shape: circle, colors: [0xc95367, 0xfb9e78], center: [305, 56], delta: [.50, .28, .60], depth: .025 },
  ];
  const low = new Color();
  const high = new Color();
  const color = new Color();
  const pieces = contours.map((contour) => {
    const solid = geometry(new ExtrudeGeometry(contour.shape, {
      depth: .32, bevelEnabled: true, bevelSegments: 4, bevelSize: .024,
      bevelThickness: .032, steps: 1, curveSegments: 24,
    }));
    toCreasedNormals(solid, Math.PI / 3);
    // Smooth the rounded walls while keeping the wide graphic faces planar.
    // Otherwise bevel normals bleed across their large triangulated polygons.
    const facePositions = solid.getAttribute('position');
    const normals = solid.getAttribute('normal');
    solid.groups.filter(group => group.materialIndex === 0).forEach(group => {
      for (let index = group.start; index < group.start + group.count; index++) {
        normals.setXYZ(index, 0, 0, facePositions.getZ(index) > .16 ? 1 : -1);
      }
    });
    solid.computeBoundingBox();
    const bounds = solid.boundingBox!;
    const positions = solid.getAttribute('position');
    const colors = new Float32Array(positions.count * 3);
    low.setHex(contour.colors[0]);
    high.setHex(contour.colors[1]);
    for (let index = 0; index < positions.count; index++) {
      const t = (positions.getY(index) - bounds.min.y) / (bounds.max.y - bounds.min.y);
      color.copy(low).lerp(high, t);
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }
    solid.setAttribute('color', new BufferAttribute(colors, 3));
    // Origins sit on real visible pieces, so projected HTML signal anchors
    // follow the source of each argument as the components separate in depth.
    const home = new Vector3(px(contour.center[0]), py(contour.center[1]), contour.depth);
    solid.translate(-home.x, -home.y, -.16);
    const mesh = new Mesh(solid, [surface, edge]);
    mesh.position.copy(home);
    root.add(mesh);
    return { mesh, home, delta: new Vector3(...contour.delta as [number, number, number]) };
  });

  // Two fine physical links become visible in the opened arrangement. They
  // stay behind the logo surfaces and need no particles, bloom or postprocess.
  const tube = geometry(new CylinderGeometry(.014, .014, 1, 8));
  const linkSurface = material(new MeshStandardMaterial({
    color: 0xdaaa75, metalness: .50, roughness: .36, transparent: true,
    opacity: 0, depthWrite: false,
  }));
  const links = [[pieces[1], pieces[5]], [pieces[3], pieces[4]]].map(([from, to]) => {
    const mesh = new Mesh(tube, linkSurface);
    root.add(mesh);
    return { mesh, from, to };
  });
  const direction = new Vector3();
  const start = new Vector3();
  const end = new Vector3();
  const yAxis = new Vector3(0, 1, 0);
  return {
    anchors: [pieces[0].mesh, pieces[5].mesh, pieces[4].mesh] as readonly Object3D[],
    update(expansion: number) {
      pieces.forEach(({ mesh, home, delta }) => mesh.position.copy(home).addScaledVector(delta, expansion));
      linkSurface.opacity = expansion * .52;
      links.forEach(({ mesh, from, to }) => {
        start.copy(from.mesh.position); start.z -= .14;
        end.copy(to.mesh.position); end.z -= .14;
        direction.copy(end).sub(start).normalize();
        mesh.position.copy(start).lerp(end, .5);
        mesh.quaternion.setFromUnitVectors(yAxis, direction);
        mesh.scale.y = start.distanceTo(end);
        mesh.visible = expansion > .015;
      });
    },
  };
}
