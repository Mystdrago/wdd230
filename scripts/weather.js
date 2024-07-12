// Function to fetch weather data from OpenWeatherMap API
const cityName = "Layton";
const apiKey = 'f7a7d07c218b566cc25f3c86f4a0601c'; // Replace with your API key
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Layton,US&units=metric&appid=${apiKey}`;

// Function to fetch weather data
async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to update weather display on the page
async function updateWeather() {
  const weatherData = await getWeather();
  const temperature = weatherData.main.temp;
  const weatherCondition = weatherData.weather[0].description;
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  document.getElementById('weather').innerHTML = `Temperature: ${temperature} &#8451;`;
  document.getElementById('weather-condition').textContent = `Condition: ${weatherCondition}`;
  document.getElementById('weather-icon').src = weatherIcon;
}

// Call updateWeather() initially
updateWeather();
