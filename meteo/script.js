
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');

// Fonction pour récupérer les données météorologiques
async function getWeatherData(city) {
    try {
      const apiKey = '3445155d854560da7207e6df0df6260c'; // Remplacez par votre clé API OpenWeatherMap
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Métrique (Celsius)
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
    //  console.log('Erreur lors de la récupération des données météorologiques:', error);
      return null;
    }
  }
// Écouteur d'événement pour le bouton "Rechercher"
searchButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();

  if (city !== '') {
    const weatherData = await getWeatherData(city);
    if (weatherData) {
      displayWeatherInfo(weatherData);
    } else {
      weatherInfo.innerHTML = '<p>Ville introuvable. Veuillez réessayer.</p>';
    }
  } else {
    weatherInfo.innerHTML = '<p>Veuillez saisir une ville.</p>';
  }
});

// Fonction pour afficher les informations météorologiques
function displayWeatherInfo(data) {
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Température : ${data.main.temp}°C</p>
    <p>Conditions : ${data.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
    `;
}