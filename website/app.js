/* Global Variables */

// Personal API Key for OpenWeatherMap API
// api url = api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
let baseURL = 'api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '6c413c6e3c5f59807918f3a330cbc154';
const zipCode = document.getElementById('zip').value;

const myFeelings = document.getElementById('feelings').value;


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  getAnimal(baseURL,zipCode, apiKey);
}

const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

























// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST',
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header
//       body: JSON.stringify(data),
//     });
//
//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }
//
// postData('/addWeather', {answer:42});















document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}
