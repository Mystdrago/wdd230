document.addEventListener("DOMContentLoaded", function() {
  const membersContainer = document.getElementById('members-container');
  const toggleButton = document.getElementById('toggle-view');

  // Load members from JSON file and display initially
  fetch('chamber/data/members.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      displayMembers(data.members); // Display members initially
    })
    .catch(error => {
      console.error('Error fetching members:', error);
    });

  // Function to display members
  function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear container

    members.forEach(member => {
      const memberCard = createMemberCard(member);
      membersContainer.appendChild(memberCard);
    });
  }

  // Function to create member card
  function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('member-card');

    // Create and append image element
    const image = document.createElement('img');
    image.src = `chamber/images/${member.image}`;
    image.alt = member.name;
    card.appendChild(image);

    // Create and append details element
    const details = document.createElement('div');
    details.classList.add('member-details');
    details.innerHTML = `
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
      <p><strong>Industry:</strong> ${member.industry}</p>
    `;
    card.appendChild(details);

    return card;
  }

  // Toggle view between grid and list
  toggleButton.addEventListener('click', function() {
    membersContainer.classList.toggle('grid-view');
  });
});
