// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 4000;
const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log("running on localhost:" + port);
}

// GET Weather Data
app.get('/allWeatherData', sendWeatherData);

function sendWeatherData(req, res) {
  res.send(projectData);
};


// POST Weather Data
const data = [];
app.post('/addWeather', addWeather);

function addWeather(req, res) {
  projectData['date'] = req.body.date;
  projectData['temp_desc'] = req.body.temp_desc;
  projectData['name'] = req.body.name;
  projectData['temp'] = req.body.temp;
  projectData['feels_like'] = req.body.feels_like;
  projectData['temp_max'] = req.body.temp_max;
  projectData['content'] = req.body.content;
  res.send(projectData);
}
