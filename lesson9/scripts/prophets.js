const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

const displayProphets = (prophet) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2, h3 and h4 elements to contain the prophet's full name, birthdate, and birthplace
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `Date of birth: ${prophet.birthdate}`;
    h4.textContent = `Place of birth: ${prophet.birthplace}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    if (prophet.order === 1) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
    } else if (prophet.order === 2) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
    } else if (prophet.order === 3) {
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
    } else {
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
    }

    // Add/append the section(card) with the h2, h3, and h4 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}