const person = {
  getName: function () {
    return 'Mihai Gaman';
  },
  getAge: function () {
    return 30;
  },
};

function accessor(methodSuffix) {
  const methodName = 'get' + methodSuffix;
  return person[methodName]();
}

console.log(accessor('Name'));

console.warn(`
  Folosind accesorul, salveaza numele mic al persoanei
  intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”,
`);

console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

const currentYear = new Date().getFullYear();
console.log((currentYear - accessor('Age')).toString());

console.warn(`
Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
console.log(
  `Ma numesc ${person.getName()}, am ${person.getAge()} ani si m-am nascut in anul 1993.`,
);

console.warn(`
Folosind accesorul afiseaza numele persoanei.
`);
console.log(`Numele persoanei este: ${accessor('Name')}.`);

console.warn(`
Afiseaza varsta persoanei.
`);
console.log(`Varsta persoanei este: ${person.getAge()} ani`);

console.warn(`
Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1993.”
`);
const birthYear = currentYear - person.getAge();
console.log(`M-am nascut in ${birthYear}.`);

console.warn(`
Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!`);
