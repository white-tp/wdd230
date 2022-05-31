let temperature;
let windspeed;

if (temperature >= 50 && windspeed >= 3.0) {
    let chill;
    chill = 35.74 + 0.6215*temperature - 35.75*windspeed^0.16 + 0.4275*temperature * windspeed^0.16;
}
else {
    chill = NaN;
}

document.getElementById("chill").innerHTML += `Wind Chill: ${chill}&deg;`;
document.getElementById("temperature").innerHTML += `Temperature: ${temperature}&deg;`;
document.getElementById("windspeed").innerHTML += `Wind speed: ${windspeed} mi/hr`;