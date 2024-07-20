document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');
  
    closeButton.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  });
  