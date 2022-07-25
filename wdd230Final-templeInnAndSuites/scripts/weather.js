const weather = document.querySelector('#weather-icon');

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=46.259301&lon=-119.305684&units=imperial&appid=8067224714fba3c75a60afd74a03a95c";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
    console.log(data); //Allows me to see what info is being pulled from the API.
    const temperature = data.current.temp.toFixed(0);
    const imgsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`;
    const descript = data.current.weather[0].description;
    const humidity = data.current.humidity;
    weather.setAttribute('src', imgsrc);weather.setAttribute('alt', descript);

    document.getElementById("weather-description").innerHTML += `${descript}`;
    document.getElementById("temperature").innerHTML += `${temperature}&deg;`;
    document.getElementById("humidity").innerHTML += `${humidity}%`;
    
    const alert = data.alerts[0].event; //data.alerts[0].event
    if (alert !== data.alerts[0].event) return; //data.alerts[0].event
    else{
    const advisory = data.alerts[0].sender_name; //"This is my fake warning message to show that my banner works! 🙂 (see source code for commented out variables that would pull alerts if there were any available.)"; //data
    const adDescript = data.alerts[0].description //"WARNING! - You are in Danger of Being Awesome! 😉"; data.alerts[0].description
    document.getElementById("advisory").innerHTML += `${advisory}`;
    document.getElementById("ad-descript").innerHTML += `${adDescript}`;
    document.getElementById("exit").innerHTML += "&times";
    element = document.querySelector(".banner");
    element.style.opacity="1";
    $(document).ready(() => {
        $("#exit").click(() => {
            $(".banner").fadeOut();
        })
    })
}
});

fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const card = document.querySelector('#three-day')
    card.innerHTML = data.daily.map((day, idx) => {
        if (idx <= 2) {
            const dt = new Date(day.dt * 1000);
            return `<div class="col">
              <div class="card">
                <h2>${dt.toDateString()}</h2>
                <img 
                  src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png" 
                  class="card-image-top"
                  alt="${day.weather[0].description}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weather[0].main}</h3>
                  <p class="card-text">High ${day.temp.max.toFixed(0)}&deg;F</p>
                  <p class="card-text">Low ${day.temp.min.toFixed(0)}&deg;F</p>
                  <p class="card-text">High Feels Like ${day.feels_like.day.toFixed(0)}&deg;F</p>
                  <p class="card-text">Humidity ${day.humidity}%</p>
                  <p class="card-text">UV index ${day.uvi.toFixed(0)}</p>
                </div>
              </div>
            </div>`
        }
    }).join('');
});
