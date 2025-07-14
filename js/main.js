function startSequence() {
  const container = document.querySelector('.container');
  const logo = document.querySelector('.glitch-logo');
  const audio = document.getElementById('glitch-sound');

  console.log('▶️ Starting Landing Sequence');

  container.classList.add('visible');

  // Glitch Start (~2s)
  setTimeout(() => {
    logo.classList.add('glitching');
    audio.volume = 0.35; // 🔉 LOWER VOLUME HERE
    audio.loop = false;
    audio.play().catch(() => console.warn('🔇 Autoplay blocked.'));
  }, 1500);

  // Stop Glitch (after ~3.5s glitch duration)
  setTimeout(() => {
    logo.classList.remove('glitching');
    audio.pause();
    audio.currentTime = 0;
  }, 1500 + 3500);

  // Fade Out (~7.5s total display time)
  setTimeout(() => {
    container.style.transition = 'opacity 1.5s ease-in-out';
    container.style.opacity = 0;
  }, 1500 + 3500 + 800);

  // Redirect after full fade out
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 1500 + 3500 + 2000);
}

window.onload = () => {
  const startOverlay = document.getElementById('start-overlay');
  const startBtn = document.getElementById('start-btn');

  startBtn.addEventListener('click', () => {
    startOverlay.style.display = 'none';
    startSequence();
  });
};
