
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dff63f747cmshcbcd9beec90fd7fp10301bjsna532b649e523',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const getWeather = async (cityValue) => {
		const cityName = document.getElementById('cityName'); 
		const submit = document.getElementById('submit');
		const city = document.getElementById('city'); 
		cityName.innerHTML = cityValue.charAt(0).toUpperCase() + cityValue.slice(1).toLowerCase();
		 try {
			const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${cityValue}`, options);
			const data = await response.json();
			
			document.getElementById('temperature').innerHTML = data.current_observation.condition.temperature;
			document.getElementById('text').innerHTML = data.current_observation.condition.text;
			document.getElementById('country').innerHTML = data.location.country;
			document.getElementById('lat').innerHTML = data.location.lat;
			document.getElementById('long').innerHTML = data.location.long;
			document.getElementById('timezone_id').innerHTML = data.location.timezone_id;
			document.getElementById('wind_speed').innerHTML = data.current_observation.wind.speed;
			document.getElementById('humidity').innerHTML = data.current_observation.atmosphere.humidity;
			document.getElementById('sunset').innerHTML = data.current_observation.astromnomy.sunset;
			document.getElementById('sunrise').innerHTML = data.current_observation.astronomy.sunrise;
			console.log(data);

		  } catch (error) {
			console.error(error);
		  }
}
getWeather('Delhi');
cityName.innerText = "Delhi";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityValue = city.value;
  cityName.innerHTML = cityValue;
  getWeather(cityValue);
});



const famousCities = [
  { name: "New York", prefix: "ny" },
  { name: "Sydney", prefix: "syd" },
  { name: "London", prefix: "ldn" },
  { name: "Beijing", prefix: "bj" }
];

const getWeatherForCityRow = async (city, prefix) => {
  try {
    const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}`, options);
    const data = await response.json();

    document.getElementById(`${prefix}-country`).innerHTML = data.location.country;
    document.getElementById(`${prefix}-temp`).innerHTML = data.current_observation.condition.temperature;
    document.getElementById(`${prefix}-lat`).innerHTML = data.location.lat;
    document.getElementById(`${prefix}-long`).innerHTML = data.location.long;
    document.getElementById(`${prefix}-timezone`).innerHTML = data.location.timezone_id;
    document.getElementById(`${prefix}-wind`).innerHTML = data.current_observation.wind.speed;
    document.getElementById(`${prefix}-humidity`).innerHTML = data.current_observation.atmosphere.humidity;
    document.getElementById(`${prefix}-sunrise`).innerHTML = data.current_observation.astronomy.sunrise;
    document.getElementById(`${prefix}-sunset`).innerHTML = data.current_observation.astronomy.sunset;
  } catch (err) {
    console.error(`Failed to load weather for ${city}:`, err);
  }
};
