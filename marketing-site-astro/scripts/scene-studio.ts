import { createSmokeScene } from '../src/lib/scene/runtime';
import { sceneVariants, isSceneVariant } from '../src/lib/scene/variants';
import type { SmokeScene } from '../src/lib/scene/types';

const host = document.querySelector<HTMLDivElement>('#scene')!;
const select = document.querySelector<HTMLSelectElement>('#variant')!;
const pose = document.querySelector<HTMLInputElement>('#pose')!;
const output = document.querySelector<HTMLOutputElement>('#status')!;
const poster = document.querySelector<HTMLImageElement>('#poster')!;
const download = document.querySelector<HTMLAnchorElement>('#download')!;
for (const variant of sceneVariants) select.add(new Option(variant, variant));
let scene: SmokeScene | undefined;
function mount() {
  scene?.dispose();
  const variant = select.value;
  if (!isSceneVariant(variant)) return;
  pose.value = '0';
  poster.removeAttribute('src');
  output.value = 'Preparing';
  scene = createSmokeScene(host, {
    variant, visible: true, reducedMotion: false,
    onReady() { output.value = `${variant} ready`; },
    onContextLost() { output.value = 'WebGL unavailable'; },
    onFrame(progress) {
      if (progress !== 0 && progress !== 1) return;
      const canvas = host.querySelector('canvas');
      if (!canvas) return;
      const png = canvas.toDataURL('image/png');
      poster.src = png;
      poster.dataset.variant = variant;
      download.href = png;
      download.download = `${variant}-scene-720.png`;
    },
  });
}
select.addEventListener('change', mount);
pose.addEventListener('input', () => scene?.setScrollProgress(Number(pose.value)));
window.addEventListener('pagehide', () => scene?.dispose());
mount();
