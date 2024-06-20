import { useRandomColor } from './tool'

document.body.addEventListener('click', function (e) {
  createStarBurst(e.clientX, e.clientY);
  createLetterBurst(e.clientX, e.clientY);
});

function createStarBurst(x: number, y: number) {
  const starSize = 20;
  const numFragments = 10;
  const fragmentSize = starSize / 2;
  const duration = 1000;

  for (let i = 0; i < numFragments; i++) {
    const fragment = document.createElement('div');
    fragment.style.position = 'fixed';
    fragment.style.width = `${fragmentSize}px`;
    fragment.style.height = `${fragmentSize}px`;
    fragment.style.background = useRandomColor();
    fragment.style.left = `${x - fragmentSize / 2}px`;
    fragment.style.top = `${y - fragmentSize / 2}px`;
    fragment.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    fragment.style.opacity = '1';
    fragment.style.pointerEvents = 'none';
    document.body.appendChild(fragment);
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    fragment.offsetHeight;
    fragment.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    fragment.style.transform = `translate(${tx}px, ${ty}px)`;
    fragment.style.opacity = '0';

    fragment.addEventListener('transitionend', () => {
      fragment.remove();
    });
  }
}
let lastLetter = 'Y';
function createLetterBurst(x: number, y: number) {
  const letter = lastLetter === 'L' ? 'Y' : 'L';
  lastLetter = letter;
  const duration = 1000;
  const fragmentSize = 20;
  const numFragments = 5;
  for (let i = 0; i < numFragments; i++) {
    const fragment = document.createElement('div');
    fragment.innerText = letter;
    fragment.style.position = 'fixed';
    fragment.style.fontSize = `${fragmentSize}px`;
    fragment.style.color = useRandomColor();
    fragment.style.left = `${x}px`;
    fragment.style.top = `${y}px`;
    fragment.style.pointerEvents = 'none';
    fragment.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    fragment.style.opacity = '1';
    const fallDuration = 1 + Math.random() * 1;
    document.body.appendChild(fragment);
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    fragment.offsetHeight;
    fragment.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    fragment.style.transform = `translate(${tx}px, ${ty}px)`;
    fragment.style.opacity = '0';

    // Remove the fragment after the animation is complete
    setTimeout(() => {
      fragment.remove();
    }, fallDuration * 1000);
  }
}