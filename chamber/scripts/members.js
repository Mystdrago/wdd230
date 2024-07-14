const baseURL = 'https://mystdrago.github.io/wdd230/chamber/';
const membersURL = `${baseURL}data/members.json`;

// Fetch member data from the JSON file
async function fetchMembers() {
  try {
    const response = await fetch(membersURL);
    if (!response.ok) {
      throw new Error('Failed to fetch member data');
    }
    const data = await response.json();
    return data.members;
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

// Function to display members in the DOM
function displayMembers(members, view = 'grid') {
  const container = document.getElementById('members-container');
  container.innerHTML = ''; // Clear any existing content
  container.className = view + '-view';

  members.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.classList.add('member');

    if (view === 'grid') {
      memberElement.innerHTML = `
        <img src="${baseURL}images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>${member.membershipLevel}</p>
        <p>${member.industry}</p>
      `;
    } else {
      memberElement.innerHTML = `
        <img src="${baseURL}images/${member.image}" alt="${member.name}">
        <div>
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>${member.membershipLevel}</p>
          <p>${member.industry}</p>
        </div>
      `;
    }

    container.appendChild(memberElement);
  });
}

// Event listener for the toggle view button
document.getElementById('toggle-view').addEventListener('click', () => {
  const container = document.getElementById('members-container');
  const currentView = container.classList.contains('grid-view') ? 'grid' : 'list';
  const newView = currentView === 'grid' ? 'list' : 'grid';
  displayMembers(currentMembers, newView);
});

// Fetch and display members on page load
let currentMembers = [];
fetchMembers().then(members => {
  currentMembers = members;
  displayMembers(members, 'grid');
});
