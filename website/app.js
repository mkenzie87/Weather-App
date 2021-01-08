/* Global Variables */

// Personal API Key for OpenWeatherMap API

// api url = api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
let baseURL = 'api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '6c413c6e3c5f59807918f3a330cbc154';

const zip = document.getElementById('zip').value;

// Event listener to add function to existing HTML DOM element
