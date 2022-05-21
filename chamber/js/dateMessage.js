const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

switch(day) {
    case "Sunday":
        text = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        break
    case "Monday":
        text = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        break
    case "Tuesday":
        text = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        break
    case "Wednesday":
        text = "🤝🏼 Come join us for the chamber meet and greet Today at 7:00 p.m.";
        break
    default:
        text = "We missed you at our chamber meet and greet from this past Wednesday!"
}

document.getElementById("announce").innerHTML = text