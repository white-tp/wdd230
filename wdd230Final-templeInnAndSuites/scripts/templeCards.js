const requestURL = 'scripts/temples.json';
const cards = document.querySelector('.grid');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const temples = jsonObject['Temples'];
    temples.forEach(displayTemples);
    listenForLikes();
  });

const displayTemples = (temple) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let like = document.createElement('div')
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2, h3 and h4 elements to contain company name, phone number, address, and website URL.
    h1.textContent = `${temple.name}`;
    h2.textContent = `${temple.telephone}`;
    h3.textContent = `${temple.address}`;
    h4.textContent = `${temple.history}`;
    
    //Add Class to Like
    like.classList.add('like', 'like-no');
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('alt', `${temple.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2, h3, and h4 element
    card.appendChild(portrait);
    card.appendChild(like);
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.grid').appendChild(card);
};

const listenForLikes = () => {
  const likes = document.querySelectorAll('.like');
  likes.forEach(like => {
      like.addEventListener('click', (event) => {
          event.target.classList.toggle('like-no');
          event.target.classList.toggle('like-yes');
          if (event.target.classList.contains('like-yes')) {
              console.log('Saved Favorite 💾✅');
              // getFaveData(event.target);
          } else {
              console.log('Removed Favorite 💾❌');
              // getFaveData(event.target);
          }
        })
    })
};