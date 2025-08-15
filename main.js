const showMoreBtn = document.getElementById('show-more-btn');
const showLessBtn = document.getElementById('show-less-btn');
const hiddenCards = document.querySelectorAll('.cert-card.hidden');

showMoreBtn.addEventListener('click', () => {
  hiddenCards.forEach(card => card.classList.remove('hidden'));
  showMoreBtn.classList.add('hidden');
  showLessBtn.classList.remove('hidden');
});

showLessBtn.addEventListener('click', () => {
  hiddenCards.forEach(card => card.classList.add('hidden'));
  showMoreBtn.classList.remove('hidden');
  showLessBtn.classList.add('hidden');
});
