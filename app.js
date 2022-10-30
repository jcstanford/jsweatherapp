// const time1 = document.getElementById('time');
// const date1 = document.getElementById('date');
// const currentWeatherItems = document.getElementById('current-weather-items');
// const timeZone = document.getElementById('time-zone');
// const currentTemp = document.getElementById('current-temp');

function weatherBalloon (cityID) {
    // let key = 'cc605205b496f4d5334d53adc06d8432';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=cc605205b496f4d5334d53adc06d8432')
    .then(function(resp) { return resp.json() }) // convert data to json
    .then(function(data) {
        drawWeather(data);
    });
}

window.onload = function() {
    weatherBalloon(  );
}

function drawWeather(d) {
    var fahrenheight = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+ 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheight + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}


