let API_KEY = "9a27927ea537f7d25d51db23431cb9fd";

/**
 * For temperature in Fahrenheit  use units=imperial
 * For temperature in Celsius use units=metric
 * Temperature in Kelvin is used by default, no need to use units parameter in API call
 */
const URL = "https://api.openweathermap.org/data/2.5/weather";

getWeatherData = (city) => {

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`

  let weatherPromise = fetch(FULL_URL)
  return weatherPromise.then((response) => {
    return response.json()
  }).catch((error) => {
    return error
  })

}

searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city).then((response) => {
    showWeatherData(response)
  }).catch((error) => {
    console.log(error)
  })
}

showWeatherData = (weatherData) => {

  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}