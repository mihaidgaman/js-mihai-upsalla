var person = {
  name: 'Mihai',
  surname: 'Gaman',
  age: 36,
  petOwner: true,
  skills: [
    'html',
    'javascript',
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
Intre Larry si Steven este o diferenta de x ani.
`);
for (var i = 0; i < person.friends.length; i++) {
  for (var j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      var firstName = person.friends[i].name;
      var secondName = person.friends[j].name;
      var ageDifference = Math.abs(
        person.friends[i].age - person.friends[j].age,
      );
      console.log(
        `Intre ${firstName} si ${secondName} este o diferenta de ${ageDifference} ani.`,
      );
    }
  }
}
