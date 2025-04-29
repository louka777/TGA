const startButton = document.getElementById('start-button');
const puzzleContainer = document.getElementById('puzzle-container');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-answer');
const glitchEffect = document.getElementById('glitch-effect');
const successLink = document.getElementById('success-link');

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  puzzleContainer.classList.remove('hidden');
});

submitButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = 'discutons ensemble';

  if (userAnswer === correctAnswer) {
    successLink.classList.remove('hidden');
    puzzleContainer.classList.add('hidden');
  } else {
    glitchEffect.classList.remove('hidden');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
});
