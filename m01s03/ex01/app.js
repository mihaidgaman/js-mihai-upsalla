var object = {
  name: 'Mihai',
  surname: 'Daniel',
  age: 30,
  petOwner: true,
  carOwner: true,
};

console.log('Mihai');
console.log('30');

console.warn(`
Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola, folosind operatorul de concatenare.`);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am' +
    ' ' +
    object.age +
    ' ' +
    'ani.',
);

console.warn(`
Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare).
`);
console.log((2023 - object.age).toString());

console.warn(`
Adauga o cheie noua de tip boolean cu numele petOwner (observa capitalizarea).
`);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(
  object.name +
    ' s-a nascut in ' +
    (new Date().getFullYear() - object.age + '.'),
);
