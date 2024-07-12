const baseURL = 'https://mystdrago.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

// Function to fetch links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Links data not available');
    }
    const data = await response.json();
    return data.weeks;
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

// Function to display activity links
function displayLinks(weeks) {
  const activityLinks = document.getElementById('activity-links');
  weeks.forEach(week => {
    const weekName = week.week;
    const links = week.links;

    const weekListItem = document.createElement('li');
    const weekHeading = document.createElement('h3');
    weekHeading.textContent = weekName;
    weekListItem.appendChild(weekHeading);

    const linksList = document.createElement('ul');
    links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    weekListItem.appendChild(linksList);
    activityLinks.appendChild(weekListItem);
  });
}

// Call getLinks() and displayLinks() to populate activity links
getLinks().then(weeks => displayLinks(weeks));
