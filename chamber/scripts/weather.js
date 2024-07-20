const apiKey = 'f7a7d07c218b566cc25f3c86f4a0601c'; 
const cityId = '5511077';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${apiKey}`;

document.addEventListener("DOMContentLoaded", function() {
  const currentTempElem = document.getElementById('current-temp');
  const currentWeatherElem = document.getElementById('current-weather');
  const forecastContainer = document.getElementById('forecast');

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      currentTempElem.textContent = `Current Temperature: ${data.main.temp} °F`;
      currentWeatherElem.textContent = `Current Weather: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error fetching current weather:', error));

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
      forecastList.forEach(item => {
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `Date: ${item.dt_txt.split(' ')[0]}, Temp: ${item.main.temp} °F`;
        forecastContainer.appendChild(forecastItem);
      });
    })
    .catch(error => console.error('Error fetching weather forecast:', error));
});
