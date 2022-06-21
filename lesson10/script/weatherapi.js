// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=8067224714fba3c75a60afd74a03a95c";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(1)}</strong>`;
    const imgsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const descript = data.weather[0].description;
    weatherIcon.setAttribute('src', imgsrc);weatherIcon.setAttribute('alt', descript);
    captionDesc.textContent = descript;
});

