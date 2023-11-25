let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

let fullPerson1 = { ...person1, ...age1 };
fullPerson1.age = 20;
console.log(fullPerson1);

let fullPerson2 = { ...person2, ...age1 };
fullPerson2.age = 29;
console.log(fullPerson2);

let fullPerson3 = { ...fullPerson2, surname: 'Carl', age: 24 };
console.log(fullPerson3);
