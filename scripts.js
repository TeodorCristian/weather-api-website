let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let city = document.querySelector('.city');
let desc = document.querySelector('.desc');
let descIcon = document.querySelector('.descIcon');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let feelsLike = document.querySelector('.feelsLike');
let windSpeed = document.querySelector('.windSpeed');
let windDirection = document.querySelector('.windDirection');
let pressure = document.querySelector('.pressure');
let precip = document.querySelector('.precip');
let cloud = document.querySelector('.cloud');
let uvindex = document.querySelector('.uvindex');

button.addEventListener('click', function() {
  fetch('http://api.weatherapi.com/v1/current.json?key=a16028740b374871926204617231202&q='+inputValue.value +'&aqi=no')

    .then((response) => response.json())
    .then((data) => {
      let cityValue = data.location.name;
      let descValue = data.current.condition.text;
      let descIconValue = data.current.condition.icon;
      let tempValue = data.current.temp_c;
      let tempfValue = data.current.temp_f;
      let humidityValue = data.current.humidity;
      let feelsLikeValue = data.current.feelslike_c;
      let feelsLikefValue = data.current.feelslike_f;
      let windSpeedValue = data.current.wind_kph;
      let windSpeedmphValue = data.current.wind_mph;
      let windDirectionValue = data.current.wind_degree;
      let windDirectioncompassValue = data.current.wind_dir;
      let pressureMBValue = data.current.pressure_mb;
      let pressureINCHValue = data.current.pressure_in;
      let precipmmValue = data.current.precip_mm;
      let precipinValue = data.current.precip_in;
      let cloudValue = data.current.cloud;
      let uvindexValue = data.current.uv;

      city.innerHTML = cityValue;
      desc.innerHTML = descValue;
      descIcon.innerHTML = '<img src="' + descIconValue + '" alt="weather icon">';
      temp.innerHTML = tempValue + '°C | ' + tempfValue + '°F';
      humidity.innerHTML = 'Humidity: ' + humidityValue + '%';
      feelsLike.innerHTML = 'Feels like: ' + feelsLikeValue + '°C | ' + feelsLikefValue + '°F';
      windSpeed.innerHTML = 'Wind speed: ' + windSpeedValue + ' km/h | ' + windSpeedmphValue + ' mp/h';
      windDirection.innerHTML = 'Wind direction: ' + windDirectioncompassValue + ' | ' + windDirectionValue + '°';
      pressure.innerHTML = 'Pressure: ' + pressureMBValue + ' mb | ' + pressureINCHValue + ' inch';
      precip.innerHTML = 'Precipitation: ' + precipmmValue + ' mm | ' + precipinValue + ' inch';
      cloud.innerHTML = 'Cloud cover: ' + cloudValue + '%';
      uvindex.innerHTML = 'UV index: ' + uvindexValue;
      
      toggleCard();
    })
    .catch((err) => alert('Wrong city name!'));

});

//show more button
function showMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("showMoreBTN");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};

//toggle the card container with all the information after pressing on the submit button
function toggleCard() {
  let myCard = document.querySelector('.card');
  let displaySetting = myCard.style.display;

  if (displaySetting === 'none') {
    myCard.style.display = 'flex';
  } else {
    myCard.style.display = 'none';
  }
};
