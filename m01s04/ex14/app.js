var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);
let sumOfAnimalAges = 0;

person.pets.forEach(function (pet) {
  sumOfAnimalAges += pet.age;
});
console.log(sumOfAnimalAges);

console.log(`
Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
const dragosAge = 36;

person.pets.forEach(function (pet) {
  const ageDiff = dragosAge - pet.age;
  console.log(
    `Intre Dragos si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(`
Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
const petNames = ['Twix', 'Mars', 'Bounty', 'Lion'];
for (let i = petNames.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${petNames[i]}.`);
}

console.warn(`
Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);
const animals = [
  { name: 'Twix', age: 4 },
  { name: 'Mars', age: 2 },
  { name: 'Bounty', age: 4 },
  { name: 'Lion', age: 10 },
];

let oldestPetName = '';
let ageDiff = 0;
const personAge = new Date().getFullYear() - person.birthYear;

for (let i = 0; i < animals.length; i++) {
  let oldestPetAge = 0;
  if (animals[i].age > oldestPetAge) {
    oldestPetName = animals[i].name;
    oldestPetAge = animals[i].age;
  }
  ageDiff = personAge - oldestPetAge;
}
console.log(
  `${oldestPetName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(`
Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
// const animalNames = ['papagal', 'caine', 'hamster', 'pisica'];

var message = 'Am ';

person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  var species = pet.species;

  if (index === pets.length - 2) {
    punctuation = ' si ';
  }

  if (index === pets.length - 1) {
    punctuation = '.';
  }

  message += species + punctuation;
});

console.log(message);
