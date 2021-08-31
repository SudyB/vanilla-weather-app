const apiKey = "e643dd0a18e5a5dda974b966e4e9caa6";
const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let units = "metric";
let cityName = "";
let wind = 0;
let humidity = 0;
let temperature = 0;
let weatherIcon = "";
let weatherDescription = "";
let forecastTemperatures = [];
var DateTime = luxon.DateTime;

displayTemperature();
//showDateAndTime();
//getCurrentPosition();
//setEventListeners();

function search(city) {
  let apiKey = "e643dd0a18e5a5dda974b966e4e9caa6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

//toggle dark mode

function setColor() {
  if (colorSwitcher.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
let colorSwitcher = document.querySelector(".dark-switch");
colorSwitcher.addEventListener("change", setColor);

// Display temperature

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = math.round(response.data.main.temp);
}
