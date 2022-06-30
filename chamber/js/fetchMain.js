const requestURL = 'JSON/data.json';
const cards = document.querySelector('.spotlight');

fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    const companies = data['companies'];
    // let goldMember = companies.memberLevel.filter("Gold");
    companies.forEach(displayCompanies);
  });

const displayCompanies = (company) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2, h3 and h4 elements to contain company name, phone number, address, and website URL.
    h1.textContent = `${company.phoneNum}`;
    h2.textContent = `${company.address}`;
    h3.textContent = `${company.websiteURL}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', company.compLogo);
    portrait.setAttribute('alt', `Company Logo for ${company.name}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2, h3, and h4 element
    card.appendChild(portrait);
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h3);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.spotlight').appendChild(card);
}