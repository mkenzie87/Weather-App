/* Global Variables */

// Personal API Key for OpenWeatherMap API
// api url = api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=6c413c6e3c5f59807918f3a330cbc154';

//Get the date
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zipCode = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;

  getZip(baseURL, zipCode, apiKey)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/add', { date:newDate, temp: data.main.temp, content })
  })
  .then(function (newData) {

        updateUI()
      })
}

const getZip = async (baseURL, zipCode, apiKey)=>{

  const res = await fetch(baseURL + zipCode + apiKey)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header
     body: JSON.stringify({
           date: data.date,
           temp: data.temp,
           content: data.content
         })
       })

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }


const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;

  }catch(error){
    console.log("error", error);
  }
}






























//
// postData('/addWeather', {answer:42});




// // Event listener to add function to existing HTML DOM element
// document.getElementById('generate').addEventListener('click', performAction);
//
// function performAction(e){
//   getAnimal(baseURL,zipCode, apiKey);
// }
