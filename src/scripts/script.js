const sceneContainer = document.getElementById('scene-container');
const scene = document.getElementById('scene');
const box = document.getElementById('box');
const toggleFullscreenButton = document.getElementById('toggle-fullscreen');
let isFullscreen = false;

toggleFullscreenButton.addEventListener('click', () => {
  isFullscreen = !isFullscreen;
  
  if (isFullscreen) {
    sceneContainer.classList.add('fullscreen');
    scene.classList.add('transition-transform');
    scene.style.transform = 'scale(2)';
  } else {
    sceneContainer.classList.remove('fullscreen');
    scene.classList.remove('transition-transform');
    scene.style.transform = 'scale(1)';
  }
});
