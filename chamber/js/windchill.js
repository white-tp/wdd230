const weatherIcon = document.querySelector('#weather-icon');

const url = "https://api.openweathermap.org/data/2.5/weather?zip=99352&units=imperial&appid=8067224714fba3c75a60afd74a03a95c";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    const temperature = data.main.temp.toFixed(0);
    const imgsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const descript = data.weather[0].description;
    const windspeed = data.wind.speed;
    weatherIcon.setAttribute('src', imgsrc);weatherIcon.setAttribute('alt', descript);

    if (temperature >= 50 && windspeed >= 3.0) {
        chill = windChill(temperature, windspeed);
    }
    else {
        chill = "N/A";
    }

    function windChill(temperature, windspeed) {
        wci = 35.74 + 0.6215*temperature - 35.75 * windspeed**0.16 + 0.4275 * temperature * windspeed**0.16;
        return wci.toFixed(1);
    }

    document.getElementById("windspeed").innerHTML += `${windspeed} mph`;
    document.getElementById("temperature").innerHTML += `${temperature}&deg;`;
    document.getElementById("chill").innerHTML += `${chill}&deg;`;

});
