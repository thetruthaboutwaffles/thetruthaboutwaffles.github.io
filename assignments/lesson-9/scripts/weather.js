var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=8605cc54bea6b44a5c460b72efe78112&units=imperial',true) ;
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
  var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
  document.getElementById('weather_icon').src = icon_path;  

  }