const player = document.getElementById('player');
const speed = 5;
let posX = 280;
let posY = 180;

document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp':
      posY = Math.max(0, posY - speed);
      break;
    case 'ArrowDown':
      posY = Math.min(360, posY + speed);
      break;
    case 'ArrowLeft':
      posX = Math.max(0, posX - speed);
      break;
    case 'ArrowRight':
      posX = Math.min(560, posX + speed);
      break;
  }
  player.style.top = posY + 'px';
  player.style.left = posX + 'px';
});
