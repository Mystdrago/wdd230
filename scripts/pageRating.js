document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize page rating slider
    function initializePageRating() {
      const pageRatingInput = document.getElementById('page-rating');
      const pageRatingOutput = document.getElementById('page-rating-value');
      
      // Set initial value based on the input's value attribute
      pageRatingOutput.textContent = pageRatingInput.value;
      
      // Update the output value whenever the slider changes
      pageRatingInput.addEventListener('input', function() {
        pageRatingOutput.textContent = pageRatingInput.value;
      });
    }
    
    // Call initializePageRating() when the page finishes loading
    initializePageRating();
  });
  