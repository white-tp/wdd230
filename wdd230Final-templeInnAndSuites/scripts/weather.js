const weather = document.querySelector('#weather-icon');

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=46.259301&lon=-119.305684&units=imperial&appid=8067224714fba3c75a60afd74a03a95c";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
    console.log(data); // this is temporary for development only
    const temperature = data.current.temp.toFixed(0);
    const imgsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
    const descript = data.current.weather[0].description;
    const humidity = data.current.humidity;
    weather.setAttribute('src', imgsrc);weather.setAttribute('alt', descript);

    document.getElementById("weather-description").innerHTML += `${descript}`;
    document.getElementById("temperature").innerHTML += `${temperature}&deg;`;
    document.getElementById("humidity").innerHTML += `${humidity}%`;
    
//     const alert = data.alerts[0].event;
//     if (alert !== data.alerts[0].event) {
//         return}
//     else{
//     const advisory = data;
//     const adDescript = data.alerts[0].description;
//     document.getElementById("advisory").innerHTML += `${advisory}`;
//     document.getElementById("ad-descript").innerHTML += `${adDescript}`;
//     $(document).ready(function() {
//         $("#exit").click(function() {
//             $(".banner").fadeOut();
//         })
//     })
// }
});

