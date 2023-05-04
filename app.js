const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityInput = document.querySelector('#city');
  const city = cityInput.value;
  getWeather(city);
});
  function getWeather(city) {
    const apiKey = '191745d24105ea2dd720cc01f95873dd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        
        const weatherDiv = document.querySelector('#weather');
        weatherDiv.innerHTML = `It's currently ${temperature}°C and ${description} in ${city}.`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  