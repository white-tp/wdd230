let temperature;
let windspeed;

if (temperature >= 50 && windspeed >= 3.0) {
    let chill;
    chill = 35.74 + 0.6215*temperature - 35.75*windspeed^0.16 + 0.4275*temperature * windspeed^0.16;
}
else {
    chill = NaN;
}

document.getElementById("chill").innerHTML += `${chill}&deg;`;
document.getElementById("temperature").innerHTML += `${temperature}&deg;`;
document.getElementById("windspeed").innerHTML += `${windspeed} mi/hr`;