const requestURL = 'JSON/data.json';
const card1 = document.querySelector('.spot1');
const card2 = document.querySelector('.spot2');
const card3 = document.querySelector('.spot3');

fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
});