var userInputEl = document.getElementById("user-input");
var submitEl = document.getElementById("submit");
var searchHistoryEl = document.getElementById("search-history");
var searchResultEl = document.getElementById("search-result");
var fiveDayForecastEl = document.getElementById("five-day-forecast");
var cityEl = document.getElementById("city");
var iconEl = document.getElementById("icon");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");

var dayEl = [];
var dayEl = [];
var dayEl = [];
var dayEl = [];
var dayEl = [];
var dayEl = [];

for (x = 0, y = 1; x < 5; x++, y++) {   
    dayEl[x] = document.getElementById("day-" + y);
    dayDateEl[x] = document.getElementById("day-" + y + "-date");
    dayIconEl[x] = document.getElementById("day-" + y + "-icon");
    dayTempEl[x] = document.getElementById("day-" + y + "-temp");
    dayWindEl[x] = document.getElementById("day-" + y + "-wind");
    dayHumidityEl[x] = document.getElementById("day-" + y + "-humidity");
}

var weatherAPI = "https://api.openweathermap.org";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
var apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q="
var apiKey = "0c4a0f7b9dff27d58bfb79aaa0d50f4c";
var weatherIconUrl1 = "https://openweathermap.org/img/wn/";
var weatherIconUrl2 = "@2x.png";

var previousUserInput = JSON.parse(localStorage.getItem("previousUserInput"));