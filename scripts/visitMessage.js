document.addEventListener('DOMContentLoaded', function() {
  const visitMessage = document.getElementById('visitMessage');
  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    const now = new Date();
    const daysDiff = Math.floor((now - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      visitMessage.textContent = 'You last visited 1 day ago.';
    } else {
      visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', new Date().toString());
});
