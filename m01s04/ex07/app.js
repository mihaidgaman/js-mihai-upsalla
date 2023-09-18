var friends = [
  {
    name: 'Mihai',
    surname: 'Gaman',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn(`
Folosind o bucla for, afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.
`);
for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`
  Afiseaza numele complet inversat al tuturor
  prietenilor, insa o data ce l-ai gasit pe
  steven, opreste bucla cu ajutorul keywordului
  break si afiseaza propozitia:
  “M-am oprit la Stevenson Steven.”.
`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var fullReversedName = friend.surname + ' ' + friend.name;

  if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
    console.log('M-am oprit la ' + fullReversedName + '.');

    break;
  }

  console.log(fullReversedName);
}

console.warn(`
  Folosind keywordul continue, afiseaza numele complet inversat
  al prietenilor, doar daca numarul de caractere total al numelor
  lor este mai mare de 13 sub forma de propozitii
  “Prenume Nume are mai mult de 13 caractere.”.
`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var totalCharacters = (friend.surname + friend.name).length;

  if (totalCharacters <= 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}

console.warn(`
Folosind o bucla for, afiseaza proprietatea name a tuturor obiectelor din arrayul friends.
`);
for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn(`
Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9 si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.
`);
for (var i = 0; i < friends.length; i++) {
  var fullName = friends[i].name + ' ' + friends[i].surname;

  console.log(fullName);

  if (friends[i].surname.length >= 9) {
    console.log('M-am oprit la ' + fullName + '.');
    break;
  }
}
