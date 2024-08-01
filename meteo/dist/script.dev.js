"use strict";

var cityInput = document.getElementById('city-input');
var searchButton = document.getElementById('search-button');
var weatherInfo = document.getElementById('weather-info'); // Fonction pour récupérer les données météorologiques

function getWeatherData(city) {
  var apiKey, apiUrl, response, data;
  return regeneratorRuntime.async(function getWeatherData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          apiKey = '3445155d854560da7207e6df0df6260c'; // Remplacez par votre clé API OpenWeatherMap

          apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric"); // Métrique (Celsius)

          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(apiUrl));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", null);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
} // Écouteur d'événement pour le bouton "Rechercher"


searchButton.addEventListener('click', function _callee() {
  var city, weatherData;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          city = cityInput.value.trim();

          if (!(city !== '')) {
            _context2.next = 8;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(getWeatherData(city));

        case 4:
          weatherData = _context2.sent;

          if (weatherData) {
            displayWeatherInfo(weatherData);
          } else {
            weatherInfo.innerHTML = '<p>Ville introuvable. Veuillez réessayer.</p>';
          }

          _context2.next = 9;
          break;

        case 8:
          weatherInfo.innerHTML = '<p>Veuillez saisir une ville.</p>';

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Fonction pour afficher les informations météorologiques

function displayWeatherInfo(data) {
  weatherInfo.innerHTML = "\n    <h2>".concat(data.name, ", ").concat(data.sys.country, "</h2>\n    <p>Temp\xE9rature : ").concat(data.main.temp, "\xB0C</p>\n    <p>Conditions : ").concat(data.weather[0].description, "</p>\n    <img src=\"https://openweathermap.org/img/wn/").concat(data.weather[0].icon, "@2x.png\" alt=\"").concat(data.weather[0].description, "\">\n    ");
}