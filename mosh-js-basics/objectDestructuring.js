const address = {
    street: 'Chiranchi',
    city: 'Kano',
    country: 'Nigeria'
};

const street = address.street;
const city = address.city;
const myCountry = address.country;

// Destructuring the address object...
const { street: myStreet, city: myCity, country } = address;

console.log(`Separate assignment address: ${street}, ${city}, ${myCountry}.`);
console.log(`Object destructuring address: ${myStreet}, ${myCity}, ${country}.`);
