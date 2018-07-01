
//use a modified version of the active nav script to determine page and weather data.
//var Z is part of the request, and equals the var that matches the city page.

//var Z = '//api.openweathermap.org/data/2.5/weather?id=4759986&appid=8605cc54bea6b44a5c460b72efe78112&units=imperial';
//var Green =  '//api.openweathermap.org/data/2.5/weather?id=4695066&appid=8605cc54bea6b44a5c460b72efe78112&units=imperial';
//var Spring = '//api.openweathermap.org/data/2.5/weather?id=4409896&appid=8605cc54bea6b44a5c460b72efe78112&units=imperial';
//
//var Z = Frank;


var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4409896&appid=8605cc54bea6b44a5c460b72efe78112&units=imperial',true) ;
weatherObject.send();


weatherObject.onload = function() {
  
  var weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('hiTemp').innerHTML = weatherInfo.main.temp_max;
  document.getElementById('loTemp').innerHTML = weatherInfo.main.temp_min;
  document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;
  document.getElementById('currentWeather').innerHTML = weatherInfo.weather[0].description;


  var iconcode = weatherInfo.weather[0].icon;
  var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
  document.getElementById('weather_icon').src = icon_path;  

  }

