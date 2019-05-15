//OBJECT DESTRUCTURING

// const person = {
//     name: 'Bob',
//     age: 34,
//     location: {
//         city: 'texas',
//         temp: 38
//     }
// };
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} is ${city}`);
// }

const book = {
    title: 'Some title',
    author: 'Some author',
    publisher: {
        // name: 'Emu'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName);

//ARRAY DESTRUCTURING

const address = ['12 Bob Street', 'Texas', 'Texasss', '123456'];

const [, city, state = 'New state'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);