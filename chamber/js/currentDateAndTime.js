// display the date in UK style format: (day-of-the-week, day month year)
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = `${fulldate}`;

// get time value //

const time = now.toLocaleTimeString()


// input values for hidden input

document.getElementById("date-hidden").setAttribute("value", fulldate)
document.getElementById("time").setAttribute("value", time)


// console log of output to test
console.log(time)
console.log(fulldate)