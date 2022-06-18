const requestURL = 'JSON/data.json';
const cards = document.querySelector('.grid');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

const displayCompanies = (company) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2, h3 and h4 elements to contain company name, phone number, address, and website URL.
    h1.textContent = `${company.name}`;
    h2.textContent = `${company.phoneNum}`;
    h3.textContent = `${company.address}`;
    h4.textContent = `${company.websiteURL}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', company.compLogo);
    portrait.setAttribute('alt', `Company Logo for ${company.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2, h3, and h4 element
    card.appendChild(portrait);
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.grid').appendChild(card);
}