function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}

console.warn(`
Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.
`);
function calculateSurface(...params) {
  switch (params.length) {
    case 1:
      return params[0] ** 2;
    case 2:
      return params[0] * params[1];
    case 3:
      return (
        2 *
        (params[0] * params[1] + params[0] * params[2] + params[1] * params[2])
      );
    default:
      return 'Numărul de parametri nu este valid.';
  }
}

console.log(calculateSurface(5));
console.log(calculateSurface(4, 6));
console.log(calculateSurface(3, 2, 5));
console.log(calculateSurface(1, 2, 3, 4));

console.warn(`
Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.
`);
function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
const raze1 = 2;
const raze2 = 20;
const raze3 = 16;

console.log(calculateCircleArea(raze1));
console.log(calculateCircleArea(raze2));
console.log(calculateCircleArea(raze3));

console.warn(`
Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”

`);

var pet = {
  name: 'Mango',
  species: 'cat',
  age: 5,
  getName: function () {
    return this.name;
  },
  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
