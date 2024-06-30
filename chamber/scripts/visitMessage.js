document.addEventListener('DOMContentLoaded', function() {
  const visitMessage = document.getElementById('visitMessage');
  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
      visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
      const now = new Date();
      const timeDiff = now - new Date(lastVisit);
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate hours difference

      if (hoursDiff < 24) {
          visitMessage.textContent = 'Wow back so soon? Awesome!';
      } else {
          const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Calculate days difference
          visitMessage.textContent = `You last visited ${daysDiff} day${daysDiff === 1 ? '' : 's'} ago.`;
      }
  }

  localStorage.setItem('lastVisit', new Date().toString());
});

