// Read page visits from localStorage or initialize to 0
let pageVisits = localStorage.getItem('pageVisits');
if (!pageVisits) {
  pageVisits = 0;
}

// Update page visits count
pageVisits++;
localStorage.setItem('pageVisits', pageVisits);

// Display page visits on the page
document.getElementById('pageVisits').textContent = pageVisits;
