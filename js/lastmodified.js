const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
document.getElementById("modified").textContent = new Date().toLocaleDateString("en-US", options);