let temperature= 80;
let windspeed= 5;
let chill;

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