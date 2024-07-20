document.addEventListener("DOMContentLoaded", function() {
    const spotlightContainer = document.getElementById('spotlight-container');
    const membersUrl = 'data/members.json';
  
    fetch(membersUrl)
      .then(response => response.json())
      .then(data => {
        const goldAndPlatinumMembers = data.members.filter(member => 
          member.membershipLevel === 'Gold' || member.membershipLevel === 'Platinum'
        );
        const randomMembers = shuffle(goldAndPlatinumMembers).slice(0, 3);
        displaySpotlights(randomMembers);
      })
      .catch(error => console.error('Error fetching members:', error));
  
    function displaySpotlights(members) {
      spotlightContainer.innerHTML = ''; // Clear container
  
      members.forEach(member => {
        const spotlightCard = createSpotlightCard(member);
        spotlightContainer.appendChild(spotlightCard);
      });
    }
  
    function createSpotlightCard(member) {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
  
      const image = document.createElement('img');
      image.src = `images/${member.image}`;
      image.alt = member.name;
      card.appendChild(image);
  
      const details = document.createElement('div');
      details.classList.add('spotlight-details');
      details.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.industry}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;
      card.appendChild(details);
  
      return card;
    }
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  });
  