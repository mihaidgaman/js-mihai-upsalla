var person = {
  name: 'Mihai',
  surname: 'Gaman',
  age: 36,
  petOwner: true,
  skills: [
    'html',
    'Javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului in propozitii de forma "Tehnologia xxx se afla pe pozitia iii, impara, a arrayului."
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

console.warn(`
In mod similar, afiseaza skillurile care contin litera a in propozitii de forma "Tehnologia xxx contine caracterul "a". "
`);
person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

console.warn(`
Folosind forEach, afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }

  // scurtatura pt message = message + ''
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv folosind o propozitie de felul:  "Varstele insumate sunt: xxx."
`);
var totalAge = 0;

person.friends.forEach(function (person) {
  if (person.age >= 30) {
    totalAge += person.age;
  }
});
console.log(`Varstele insumate sunt: ${totalAge}.`);

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
var currentYear = new Date().getFullYear();
var sumBirthYears = 0;

person.friends.forEach(function (friend) {
  var age = currentYear - friend.age;
  if (age % 2 !== 0) {
    sumBirthYears += currentYear - friend.age;
  }
});
console.log(
  'Suma anilor de naștere a persoanelor cu vârsta impară este: ' +
    sumBirthYears,
);

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends, daca aceasta este mai mare sau egala cu 2 ani folosind propozitii de forma:  "Diferenta pentru ${name}:  xxx ani."
`);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  if (ageDiff >= 2) {
    console.log(`Diferenta pentru ${friend.name}: ${ageDiff} ani.`);
  }
});

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "
`);
var message = '';

for (var i = 0; i < person.friends.length; i++) {
  var ageDiff = person.age - person.friends[i].age;
  message += `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${ageDiff} ani.`;

  if (i < person.friends.length - 1) {
    message += ' ';
  }
}
console.log(message);

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);
var reversedSkills = skills.slice().reverse();

reversedSkills.forEach(function (skill) {
  console.log(skill);
});
