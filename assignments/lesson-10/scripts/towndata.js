var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//byui-cit230.github.io/weather/data/towndata.json',true);
weatherObject.send();

weatherObject.onload = function() {
  
  var weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);
//Franklin
  document.getElementById('name').innerHTML = weatherInfo.towns[0].name;
  document.getElementById('motto').innerHTML = weatherInfo.towns[0].motto;
  document.getElementById('yearFound').innerHTML = weatherInfo.towns[0].yearFounded;
  document.getElementById('pop').innerHTML = weatherInfo.towns[0].currentPopulation;
  document.getElementById('annRain').innerHTML = weatherInfo.towns[0].averageRainfall;

//Greenville

  document.getElementById('name1').innerHTML = weatherInfo.towns[1].name;
  document.getElementById('motto1').innerHTML = weatherInfo.towns[1].motto;
  document.getElementById('yearFound1').innerHTML = weatherInfo.towns[1].yearFounded;
  document.getElementById('pop1').innerHTML = weatherInfo.towns[1].currentPopulation;
  document.getElementById('annRain1').innerHTML = weatherInfo.towns[1].averageRainfall;

//Placerton

  document.getElementById('name2').innerHTML = weatherInfo.towns[2].name;
  document.getElementById('motto2').innerHTML = weatherInfo.towns[2].motto;
  document.getElementById('yearFound2').innerHTML = weatherInfo.towns[2].yearFounded;
  document.getElementById('pop2').innerHTML = weatherInfo.towns[2].currentPopulation;
  document.getElementById('annRain2').innerHTML = weatherInfo.towns[2].averageRainfall;

//Springfield

  document.getElementById('name3').innerHTML = weatherInfo.towns[3].name;
  document.getElementById('motto3').innerHTML = weatherInfo.towns[3].motto;
  document.getElementById('yearFound3').innerHTML = weatherInfo.towns[3].yearFounded;
  document.getElementById('pop3').innerHTML = weatherInfo.towns[3].currentPopulation;
  document.getElementById('annRain3').innerHTML = weatherInfo.towns[3].averageRainfall;

}